import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Input from '../../components/Input'
import { AuthContainer, AuthWrapper, ItemsWrapper } from '../../assets/css/GlobalStyled';
import Button from '../../components/Button';


const ConfrmRegNo = ({value, regno, setRegNo, setValue}) => {
    const history = useHistory()
    const verifyRegNo = (e) => {
        if (regno.toString() === value) {
            history.push("/signup");
        } else {
            alert('Reg No doesnt exist')
            history.push("/");
        }
    }

    useEffect(() => {
        setValue('')
        setRegNo(makeRandomString())
    }, [])

    function makeRandomString() {
        var text = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
        text += characters.charAt(Math.floor(Math.random() * characters.length))
        text += String(Math.random()).slice(12)
        return text.slice();
    }

    return (
        <AuthWrapper>
            <div>
                <img className='w-48 mx-auto mb-8' src={'e-school.png'} alt="logo" />
                <AuthContainer>
                    <ItemsWrapper>
                        <p className='text-white mb-6 mt-4'>Your reg no is: <span className='text-2xl'>{regno}</span></p> 
                        <form onSubmit={(e) => verifyRegNo(e)}>
                            <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder={'enter regno'} />
                            <Button type="submit" text={'Proceed'} padding={'py-2'} margin={'my-4'} color={'text-white'}/>
                        </form>
                        <Link to="signup"></Link>
                    </ItemsWrapper>
                </AuthContainer>
            </div>
        </AuthWrapper>

    )
}

export default ConfrmRegNo