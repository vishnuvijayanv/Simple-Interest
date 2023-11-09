import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View';
import Category from '../components/Category';


function Home() {
   const [uploadVideoStatus,setUploadVideoStatus]= useState([])


  return (
   <>
      <div className='container mb-5 mt-5 d-flex justify-content-between align-items-center'>
        <div className=' d-flex mb-5'>
          <Add setUploadVideoStatus={setUploadVideoStatus}/>
          <Link to={'/watch-history'} className='mt-5' style={{textDecoration:'none',marginLeft:'700px'}}> <h3>Watch History</h3></Link>
          </div>
      </div>
      <div className="container-fluid w-100 mt-5 mb-5 d-flex justify-content-between">
        <div className='col-lg-9'>
          <h4 className='mb-5'>All Videos</h4>
          <View uploadVideoStatus={uploadVideoStatus}/>
        </div>
        <div className="category col-lg-3 ">
          <Category />
        </div>
      </div>
   </>
  )
}

export default Home