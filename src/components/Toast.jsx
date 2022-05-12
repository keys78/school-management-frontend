import { ToastContainer, toast } from 'react-toastify';
import React from 'react'

const Toast = () => {
    const notify = () => {
        toast('Default!', { position: toast.POSITION.TOP_LEFT })
        toast.success('Success!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 8000
        })
        toast.info('Info!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: false
        })
        toast.warn({
          position: toast.POSITION.BOTTOM_LEFT
        })
        toast.error('Error!', { position: toast.POSITION.BOTTOM_CENTER })
        toast('Wow so easy !', { position: toast.POSITION.BOTTOM_RIGHT })
      }
  return (
    <>
    <button onClick={() => notify()}>Notify!</button>
        <ToastContainer />
    </>
  )
}

export default Toast