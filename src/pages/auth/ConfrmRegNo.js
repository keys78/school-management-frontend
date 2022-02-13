import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Input'

const ConfrmRegNo = () => {
    const [regno, setRegNo] = useState(1)
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const verifyRegNo = () => {
        if(regno.toString() === value) {
            navigate('/signup')
        } else {
            alert('Reg No doesnt exist')
            navigate('/')
        }
    }
    
  return (
    <div>
        <form onSubmit={verifyRegNo}>
        <Input value={value} onChange={(e) => setValue(e.target.value)}/>
        <button>Proceed</button>
        </form>
        
        <Link to="signup"></Link>
    </div>
  )
}

export default ConfrmRegNo