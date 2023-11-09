import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div style={{width:'100%' ,height:'300pxx'}}className='container-fluid d-flex justify-content-center align-items-center flex-column' >
      <div className="container footer d-flex justify-content-evenly align-items-center w-100">
        <div className="website" style={{width:'400px'}}>
        <h4>
          
          <i class="fa-solid fa-video fa-beat text-primary me-4 " ></i>{' '}
          Media Player
        </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque laboriosam aut sed odio in hic animi aperiam voluptatum, explicabo cumque maxime quia ea! Reprehenderit quo veritatis natus iste consequatur.</p>
        <p>sed odio in hic animi aperiam voluptatum</p>
        </div>
        <div className="col-lg-3 Links d-flex flex-column ms-4">
          <h3>Links</h3>
        <Link  to={'/'} style={{color:'white' ,textDecoration:'none'}}>Landing Page</Link>
        <Link to={'/home'} style={{color:'white' ,textDecoration:'none'}}>Home</Link>
        <Link to={'./watch-history'} style={{color:'white' ,textDecoration:'none'}}>Watch History</Link>
        </div>
        <div className="col-lg-3 Guides d-flex flex-column">
        <h3>Guides</h3>
        <Link to={'https://react.dev/'} style={{color:'white' ,textDecoration:'none'}}>React</Link>
        <Link to={'https://react-bootstrap.github.io/'} style={{color:'white' ,textDecoration:'none'}}>React Bootstrap</Link>
        <Link to={'https://bootswatch.com/'} style={{color:'white' ,textDecoration:'none'}}>Bootswatch</Link>
        </div>
        <div className="col-lg-3 Contact">
          <h3>Contact Us</h3>
          <div className="d-flex">
            <input type="email" className='form-control' placeholder='Enter Your Email' />
            <button className='btn btn-primary text-white ms-2'>Subscribe</button>
          </div>
         <div className='col-lg-3 icons d-flex justify-content-evenly ms-5 mt-3'>
            <Link to={'https://www.instagram.com/'} style={{color:'white' ,textDecoration:'none'}}><i class="fa-brands fa-instagram fa-2x me-4"></i></Link>
          <Link to={'https://www.facebook.com/'} style={{color:'white' ,textDecoration:'none'}}><i class="fa-brands fa-facebook fa-2x me-4 "></i></Link>
          <Link to={'https://www.linkedin.com/'} style={{color:'white' ,textDecoration:'none'}}><i class="fa-brands fa-linkedin-in fa-2x me-4"></i></Link>
          <Link to={'https://twitter.com/'} style={{color:'white' ,textDecoration:'none'}}><i class="fa-brands fa-twitter fa-2x me-4"></i></Link>
  
         </div>
        </div>
      </div>
      <p> Copyright ©  2023,All Rights ® Reserverd by <span className='text-primary'>nuɥsıΛ</span></p>
    </div>
  )
}

export default Footer