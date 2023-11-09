import React, { useEffect, useState } from 'react'
import ViewCard from './ViewCard'
import { Row,Col } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI'

function View({uploadVideoStatus}) {
  const [allVideos,setAllVideos] = useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)
  const getAllUploadedVideo = async()=>{
    const response = await getAllVideos()
    const {data} =response
     setAllVideos(data)
  }
  console.log(allVideos);
  useEffect(()=>{
    getAllUploadedVideo()
    setDeleteVideoStatus(false)
  },[uploadVideoStatus,deleteVideoStatus])
  return (
    <div>        
      <Row>
       { allVideos.length>0?
       allVideos.map((item)=>(<Col sm={12} md={6} lg={4} xl={3}>
          <ViewCard displayVideo={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
        </Col>))
        :
        <p className='text-danger'>nothing to display</p>
        }
      </Row>

    </div>
  )
}

export default View