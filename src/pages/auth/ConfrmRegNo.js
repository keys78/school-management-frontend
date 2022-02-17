import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Input from '../../components/Input'

const ConfrmRegNo = () => {
    const [regno, setRegNo] = useState('')
    const [value, setValue] = useState('')
    const history = useHistory()
    const verifyRegNo = () => {
        if (regno.toString() === value) {
            history.push("/signup");
        } else {
            alert('Reg No doesnt exist')
            history.push("/");
        }
    }

    useEffect(() => {
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
        <div>
            <p>Your reg no is: {regno}</p>
            <form onSubmit={verifyRegNo}>
                <Input value={value} onChange={(e) => setValue(e.target.value)} />
                <button>Proceed</button>
            </form>

            <Link to="signup"></Link>
        </div>
    )
}

export default ConfrmRegNo