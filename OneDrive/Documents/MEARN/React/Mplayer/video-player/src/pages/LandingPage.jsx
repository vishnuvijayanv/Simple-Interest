import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <div>
       
      <Row className='d-flex justify-content-center alighn-items-center'>
        <Col></Col>
        <Col lg={5}>
          <h2 className='mt-5'>Welcome to <span className='text-primary'>Media Player</span></h2>
          <p style={{textAlign:'justify'}} className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex consectetur eius magnam, ducimus sed pariatur facere recusandae quae nam veniam voluptate animi qui nulla ipsum suscipit doloribus eos asperiores aut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, exercitationem ullam? Quos cumque perspiciatis nobis vitae impedit reprehenderit ex optio fugiat omnis debitis iste, aliquam error quae officia ut enim.</p>
          <button onClick={()=>navigateByUrl('./home')} className='btn btn-primary mt-5'>Get Started <i class="ms-2 fa-solid fa-arrow-right"></i></button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" width={'80%'} alt="" />
        </Col>

      </Row>

      <div className="container d-flex  justify-content-center alighn-items-center w-100 mt-5 mb-5 flex-column">
        <h3 className=' d-flex  justify-content-center alighn-items-center text-primary'>Features</h3>
        <div className="cards  d-flex justify-content-center alighn-items-center mt-5">

    <Card className='p-4 me-4' style={{ width: '22rem' }}>
      <Card.Img style={{width:'100%',height:'300px'}} variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4 me-4' style={{ width: '22rem' }}>
      <Card.Img  style={{width:'100%',height:'300px'}} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4 me-4' style={{ width: '22rem' }}>
      <Card.Img  style={{width:'100%',height:'300px'}} variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

   
      </div>  
      </div>

      <div className="container border border-2 rounded border-secondary p-5 mt-5 mb-5">
        <Row>
          <Col></Col>
          <Col lg={5}>
            <h3 className='text-primary'>Simple Fast and PowerFul</h3>
            <p><span className='fs-5 fw-bolder'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, alias illum! Corrupti voluptate officia ratione voluptatem eveniet eligendi! Quaerat neque, sequi consequuntur quisquam consectetur rem perferendis provident distinctio odio quos.</p>
            <p><span className='fs-5 fw-bolder'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, dignissimos veniam, voluptatem a aut perspiciatis obcaecati magnam cupiditate vitae quod ipsam, officia illo ab error. Eius, minima? Alias, qui quis.</p>
            <p><span className='fs-5 fw-bolder'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolore! Officiis ipsum aspernatur ipsa modi voluptatem veritatis perspiciatis soluta excepturi dicta ullam rerum mollitia quaerat laborum minus deserunt, dolorem a.</p>
          </Col>
          <Col></Col>
          <Col lg={5}>
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/WWr9086eWtY?si=R4tGXPCQcnaU8XPU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Col>

        </Row>

      </div>


    
    </div>
  )
}

export default LandingPage