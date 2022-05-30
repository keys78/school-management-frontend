import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import {  X, UploadSimple, Camera } from 'phosphor-react';
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import { zoomOutVariants } from '../utils/Animations';
import { FullDisplay, ImageBox, Close } from '../assets/css/GlobalStyled';
import BtnControls from './BtnControls';
import { toast } from 'react-toastify';


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
            toast.warn('You need to select a file', { autoClose: 1500 })
        } else {
            const data = new FormData()
            data.append('profileImage', singleFile)
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            };

            const id = toast.loading("uploading...")
            try {

                await axios.post(`https://my-e-school-api.herokuapp.com/private/upload-photo/${user._id}`, data, config);
                axios.get("https://my-e-school-api.herokuapp.com/private/user", config).then((res) => { setUser(res.data) })

                toast.update(id, { render: "Profile image upload successful", type: "success", isLoading: false, autoClose: 2000 });

            } catch (error) {
                toast.update(id, { render: error.response, type: "error", isLoading: false, autoClose: 2000 });
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

            <DisplayImage className='mt-4'>
                <img src={profileImg} alt="Profile Image" onClick={() => setIsZoomed(!isZoomed)} />
            </DisplayImage>
            <div className='file'>
                <label htmlFor='input-file'>
                    <Camera size={20} color="#1f5fe0" />
                </label>
                <input id='input-file' accept="image/*" type='file' onChange={(e) => imageHandler(e)} />
            </div>
            <BtnControls icon={<UploadSimple size={20} color="#61f5eb" weight="bold" />} onClick={(e) => uploadImage(e)} text={'Save'} />

            <br />

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

const TestBtn = styled.div`
     background: -webkit-linear-gradient(to right, #606c88, #3f4c6b); 
    background: linear-gradient(to right, #606c88, #3f4c6b); 
    padding: 5px 17px;
    color:#fff;
    border: 1px solid #b6b6b66e;
    transition:0.4s ;
    border-radius:5px ;
    display:flex ;
    align-items: center;
    justify-content:center ;
    width:100% ;
    cursor: pointer;

    & > span:nth-of-type(1) {
        transition: 0.4s ;
    }

    &:hover {
        background: linear-gradient(to right, #2c4683, #262931);
        transition:0.4s ;

        & > span:nth-of-type(1) {
            transform: scale(1.2);
            transition:0.4s ;
        }
    }

`

export default ImageUpload;