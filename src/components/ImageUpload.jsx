import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import { CloudArrowUp, X, UploadSimple } from 'phosphor-react';
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { zoomOutVariants } from '../utils/Animations';
import { FullDisplay, ImageBox, Close } from '../assets/css/GlobalStyled';
import BtnControls from './BtnControls';


const ImageUpload = ({ user, setUser }) => {
    const [profileImg, setProfileImg] = useState(user.pic)
    const [singleFile, setSingleFile] = useState('');
    const [isZoomed, setIsZoomed] = useState(false)
    const imageBoxRef = useRef()

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfileImg(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
        setSingleFile(e.target.files[0]);
    };



    const uploadImage = async (e) => {
        e.preventDefault()
        if (singleFile === "") {
            alert('You need to select a file')
        } else {
            const data = new FormData()
            data.append('file', singleFile)
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            };

            try {
                await axios.post(`http://localhost:4000/private/upload-photo/${user._id}`, data, config);
                axios.get("http://localhost:4000/private/user", config).then((res) => { setUser(res.data) })
                alert('photo upadted')
            } catch (error) {
                console.log(error)
            }
        }


    }

    useEffect(() => { document.body.addEventListener('mousedown', handleClickOutside) })
    const handleClickOutside = (event) => {
        imageBoxRef.current && !imageBoxRef.current.contains(event.target) && setIsZoomed(false)
    };

    return (
        <ImageUploadWrapper>

            <DisplayImage  className='mt-4'>
                <img src={profileImg} alt="Profile Image" onClick={() => setIsZoomed(!isZoomed)} />
            </DisplayImage>
            <div className='file'>
                <label htmlFor='input-file'>
                    <CloudArrowUp size={20} color="#1f5fe0" weight="bold" />
                </label>
                <input id='input-file' accept="image/*" type='file' onChange={(e) => imageHandler(e)} />
            </div>

            <BtnControls icon={<UploadSimple size={20} color="#61f5eb" weight="bold" />} onClick={uploadImage} text={'Save'} />
            <br/>

            <AnimatePresence>
                {isZoomed &&
                    <FullDisplay >
                        <Close>
                            <X size={30} color="#e8eaed" weight="bold" onClick={() => setIsZoomed(!isZoomed)} />
                        </Close>
                        <ImageBox
                            variants={zoomOutVariants}
                            initial="initial"
                            animate="final"
                            exit="exit"
                            ref={imageBoxRef}>
                            <img src={profileImg} alt="Profile Image" />
                        </ImageBox>
                    </FullDisplay>
                }
            </AnimatePresence>

        </ImageUploadWrapper>
    )
}

const ImageUploadWrapper = styled.div`
    position:relative ;
    & > div:nth-of-type(2)  { position: absolute; bottom:72px; right:0;}
`
const DisplayImage = styled.div`
    width:120px; height:120px; vertical-align: middle; margin-bottom:12px ;
    & > img  { width:100% ; border-radius:50%; height:100%; vertical-align: middle; cursor: zoom-in;}

    @media screen and (max-width: 600px){
        width:80px; height:80px;
    }
`

export default ImageUpload;