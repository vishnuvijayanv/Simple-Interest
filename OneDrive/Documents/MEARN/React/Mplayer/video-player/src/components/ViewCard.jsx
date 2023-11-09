import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteAVideo } from '../services/allAPI';


function ViewCard({displayVideo,setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {setShow(true)

    const {caption,embedlink} = displayVideo
    let today = new Date()
    console.log(today);
    let timestamp = new Intl.DateTimeFormat('en-GB', { year:'numeric' ,month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'
}).format(today)
console.log(timestamp);
 let videoDetails = {
  caption,embedlink,timestamp
 }
 await addToHistory(videoDetails)
  }

  const removeVideo = async(id)=>{
    const response = await deleteAVideo(id)
    setDeleteVideoStatus(true)
  }

  //function to drag the videocard

  const cardDrag = (e,id)=>{
    console.log(`id is ${id}`);
    //to send data
    e.dataTransfer.setData("videoId",id)
  }
  return (
    <>
        <Card className='mb-5 ' style={{ width: '220px',height:'300px'}} draggable onDragStart={(e)=>cardDrag(e,displayVideo?.id)}>
        <Card.Img variant="top" onClick={handleShow} style={{height:'230px'}} src={displayVideo.url} />
        <Card.Body>
          <Card.Text className='justify-content-evenly' >
           {displayVideo.caption}
           <button onClick={()=>removeVideo(displayVideo?.id)} style={{float:'right'}} className='btn btn-danger  '><i class="fa-solid fa-trash"></i></button>
          </Card.Text>
        </Card.Body>
      </Card>
  
  <Modal
  show={show}
  onHide={handleClose}
  backdrop="static"
  keyboard={false}
  >
  <Modal.Header closeButton>
    <Modal.Title>{displayVideo.caption}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <iframe width="460" height="315" src={`${displayVideo.embedlink}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </Modal.Body>
  </Modal>
  
  
      
       
    </ >
  )
}

export default ViewCard