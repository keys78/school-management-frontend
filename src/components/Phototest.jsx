import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import { CloudArrowUp, X } from 'phosphor-react';
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { zoomOutVariants } from '../utils/Animations';


const Phototest = ({ user, setUser }) => {
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
            alert('photo upadted')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { document.body.addEventListener('mousedown', handleClickOutside) })
    const handleClickOutside = (event) => {
        imageBoxRef.current && !imageBoxRef.current.contains(event.target) && setIsZoomed(false)
    };

    return (
        <ImageUploadWrapper>

            <DisplayImage>
                <img src={profileImg} alt="Profile Image" onClick={() => setIsZoomed(!isZoomed)} />
            </DisplayImage>
            <div className='file'>
                <label htmlFor='input-file'>
                    <CloudArrowUp size={20} color="#1f5fe0" weight="bold" />
                </label>
                <input id='input-file' accept="image/*" type='file' onChange={(e) => imageHandler(e)} />
            </div>
            <button onClick={uploadImage}>Save</button>

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
    & > div:nth-of-type(2)  { position: absolute; bottom:22px; right:0;}
`
const DisplayImage = styled.div`
    width:120px; height:128px; vertical-align: middle;
    & > img  { width:100% ; border-radius:50%; height:100%; vertical-align: middle; cursor: zoom-in;}
`
const FullDisplay = styled.div`
    position:fixed ;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    top:0 ;
    left:0 ;
    height:100% ;
    width:100% ;
    z-index:9999 ;
    background:#00000092 ;

    @media screen and (max-width: 991px){
      padding:0 20px ;
    }
`
const Close = styled.div`
   position:absolute ;
   top:20px;
   right:20px; 
   cursor: pointer;
`
const ImageBox = styled(motion.div)`
  max-width:960px ;
  height:auto ;
`



export default Phototest