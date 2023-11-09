import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { addAllCategory, deleteACategories, getAVideo, getAllCategories, updateCategory } from '../services/allAPI';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ViewCard from './ViewCard';
import { Row } from 'react-bootstrap';

function Category() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoryName,setCategoryName] = useState('');
  const [categories,setCategories] = useState([])

  //function to add  category
  const addCategory =async()=>{
    console.log(categoryName);
    if (categoryName) {
      let body ={
        categoryName,
        allVideo:[]
      }
       const response= await  addAllCategory(body)
      //  console.log(response);
       if (response.status>=200 && response.status<=300) {
       toast.success('Category Added Successfully')
       //state value null

       setCategoryName("")
       //close the modal
       handleClose()
       }
       else{
        toast.error('Something Went Wrong')
       }
      
    }
    else{
      toast.warning('Please Enter Category Name')
    }
  }
  //function to get all categories

  const allCategory = async()=>{
   const{data} = await getAllCategories()
   setCategories(data)
   allCategory()
  //  console.log(data);
  }

  const deleteCategory=async(id)=>{
    await deleteACategories(id)
    allCategory()
  }
  // console.log(categories);

  //function to prevent reload so that the data we send wont lost
  const dragOver= (e)=>{
    e.preventDefault()
  }

  const videoDrop = async(e,categoryID)=>{
    console.log(`dropped on the category Id :${categoryID}`);
   let videoID = e.dataTransfer.getData("videoId")
   //to get the data from videocard
   console.log(videoID);
   const {data} = await getAVideo(videoID)
   console.log(data);
   const selectCategory = categories.find(item=>item.id===categoryID)
   selectCategory.allVideo.push(data)
   console.log(selectCategory);
   await updateCategory(categoryID,selectCategory)
  }
  useEffect(()=>{
    allCategory()
  },[])
  
  return (
    <>
      <div>
        <div className='d-flex justify-content-center'>  <button onClick={handleShow} className='btn btn-primary  ps-5 pe-5'>Add New Category</button></div>
  
        {categories?.length>0?
        categories?.map((item)=>(
          <div className='m-5 border border-primary p-3 rounded w-75' >
          <div className='d-flex justify-content-center p-3 rounded' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
            <h6 className='me-5'>{item.categoryName}</h6>
            <button onClick={()=>deleteCategory(item?.id)} style={{float:'right'}} className='btn btn-danger  '><i class="fa-solid fa-trash"></i></button>
          </div>
          <Row>
            <Col>
           {
            item?.allVideo?.length>0?
            item.allVideo.map((card)=>(<ViewCard displayVideo={card}/>)):
            <p>Nothing to display</p>
           }
            </Col>
          </Row>
        </div>
        ))
          :
        <p>No Categories Added</p>
        }
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title><i class="fa-solid fa-pencil text-primary me-2"></i>Add New Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <form action="" className='border border-secondary p-3 rounded'>
          <Form.Group className='mb-3 w-100' as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
             onChange={(e)=>setCategoryName(e.target.value)}
              required
              type="text"
              placeholder="Enter Category Name"
            />
          </Form.Group>
           </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
             Cancel
            </Button>
            <Button onClick={addCategory} variant="primary">Add</Button>
          </Modal.Footer>
        </Modal>
        <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
      </div>
    </>
  )
}

export default Category