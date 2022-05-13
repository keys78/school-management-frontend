import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Input from '../../components/Input'
import { AuthContainer, AuthWrapper, ItemsWrapper } from '../../assets/css/GlobalStyled';
import Button from '../../components/Button';
import { Copy, Check} from 'phosphor-react';
import { pageAnimation } from '../../utils/Animations';

const ConfrmRegNo = ({ value, regno, setRegNo, setValue }) => {
    const [copyRegNo, setcopyRegNo] = useState(<Copy size={20} color="#46ecd8" weight="bold" />)
    const history = useHistory()

    const verifyRegNo = (e) => {
        if (regno.toString() === value) {
            history.push("/signup");
        } else {
            alert('Sorry, Reg No does not exist!')
            history.push("/");
        }
    }

    const copyLink = () => {
        if (navigator.clipboard.writeText(regno)) {
            setcopyRegNo(<Check size={20} color="#46ecd8" weight="bold" />)
            setValue(val => regno)
        }
        setTimeout(() => {
            setcopyRegNo(<Copy size={20} color="#46ecd8" weight="bold" />)
        }, 3000)

    }

    useEffect(() => {
        setValue('')
        setRegNo(generateRandomId())
    }, [])


   function generateRandomId() {
        let id = ''
        let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        id += letters.charAt(Math.floor(Math.random() * letters.length))
        id += letters.charAt(Math.floor(Math.random() * letters.length))
        id += String(Math.random()).slice(2, 6)
        return id
    }
    
//   function generateUniqueId(ids) {
//         while (true) {
//             let id = generateRandomId()
//             if (!ids.includes(id)) {
//                 return id
//             }
//         }
//     }

    return (
        <AuthWrapper>
            <div className='auth-page-adjust'>
                <img onClick={() => history.push('/')} className='w-48 mx-auto mb-8 cursor-pointer' src={'e-school.png'} alt="logo" />
                <AuthContainer
                 variants={pageAnimation}
                 initial="hidden"
                 animate="visible"
                 exit="exit"
                >
                    <ItemsWrapper>
                        <div className='flex items-center justify-between'>
                            <p className='text-white mb-3 mt-2'>Your reg no is: <span className='text-xl'>{regno}</span></p>
                            <button className='cursor-copy' onClick={copyLink}> {copyRegNo}  </button>
                        </div>
                        <form onSubmit={(e) => verifyRegNo(e)}>
                            <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder={'enter regno'} required />
                            <Button type="submit" text={'Proceed'} padding={'py-2'} margin={'my-4'} color={'text-white'} width={'w-full'} />
                        </form>
                        <Link to="signup"></Link>
                    </ItemsWrapper>
                </AuthContainer>
            </div>
        </AuthWrapper>

    )
}

export default ConfrmRegNo