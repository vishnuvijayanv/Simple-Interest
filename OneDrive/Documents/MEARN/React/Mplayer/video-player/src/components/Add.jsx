import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoStatus}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [video,setVideo]=useState({
    id:'',
    caption:'',
    url:'',
    embedlink:''

  });

  const embedVideoLink=(e)=>{
    const {value}=e.target
    console.log(value.slice(-11));
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({...video,embedlink:link})
  }
  console.log(video);
 const handleUpload=async()=>{
  const {id,caption,url,embedlink}=video
  if (!id || !caption || !url || !embedlink) {
    toast.warning('please fill the form completely')
    
  }
  else{
    const response = await uploadVideo(video)
    console.log(response);
    if (response.status>=200 && response.status<=300) {
      setUploadVideoStatus(response.data)
      toast.success('upload success')
      //close model
      handleClose()
    }
    else{
      console.log(response);
      toast.error('try again later')
    }
  }
 }
  return (
    <div>
        <div className=' mt-5 d-flex'>
        <h4>Upload New Video</h4>
        <button onClick={handleShow} className='btn btn-black d-flex'>
            <i class=" fa-solid fa-cloud-arrow-up fa-2x"></i>
            </button>
        </div>
         <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i  class="fa-solid fa-film text-primary me-2"></i>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form action="" className=' w-100 border border-secondary p-3 rounded'>
         <Form.Group onChange={(e)=>setVideo({...video,id:e.target.value})} className='mb-3 w-100' as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            name="id"
            required
            type="text"
            placeholder="Enter Video Id"
          />
         
        </Form.Group>
        <Form.Group  onChange={(e)=>setVideo({...video,caption:e.target.value})}  className='mb-3 w-100' as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            name="caption"
            required
            type="text"
            placeholder="Enter Video Caption"
          />
         
        </Form.Group>
        <Form.Group onChange={(e)=>setVideo({...video,url:e.target.value})}   className='mb-3 w-100' as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            name="url"
            required
            type="text"
            placeholder="Enter Video Image URL"
          />
         
        </Form.Group>
        <Form.Group  onChange={(e)=>embedVideoLink(e)}   className='mb-3 w-100' as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            name="embedlink"
            required
            type="text"
            placeholder="Enter Youtube Video Link"
          />
         
        </Form.Group>
         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </div>
  )
}

export default Add