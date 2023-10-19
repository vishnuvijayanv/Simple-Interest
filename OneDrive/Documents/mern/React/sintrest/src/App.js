import './App.css';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { useState } from 'react';
function App() {
  const [interest,setInterest]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)
  const [isprinciple,setIsprinciple]=useState(true)
  const [israte,setIsrate]=useState(true)
  const [isyear,setIsyear]=useState(true)
 
const getvalidate=(e)=>{
  const {name,value}=e.target
  // console.log(name,value);
  if(!!value.match(/^[0-9]*.?[0-9]+$/)){
    if(name=="principle"){
      setPrinciple(value)
    setIsprinciple(true)}
    else if(name=="rate"){
setRate(value)
setIsrate(true)
    
    }
    else{
      setYear(value)
setIsyear(true)
    }
    
    
  }
  else{
    if(name=="principle"){

    setPrinciple(value)
    setIsprinciple(false)
    }
    else if(name=="rate"){
      setRate(value)
      setIsrate(false)
    }
    else{
      setYear(value)
      setIsyear(false) 
    }

  }
}
const calc=(e)=>{
  e.preventDefault()
  if (!principle || !rate || !year) {
    alert("Please Fill The Form")
  }
  else{
setInterest(principle*rate*year/100)
  }

}
const reset=(e)=>{
  setInterest(0)
  setIsprinciple(0)
  setIsrate(0)
  setIsyear(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
}
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center align-items-center w-100 bg-dark'>
<div className='bg-light p-5 rounded ' style={{width:"500px"}}>
        <h1>SIMPLE INTEREST</h1>
        <p>calculate simple interest</p>
        <div className='bg-warning d-flex justify-content-center align-items-center align-items-center w-100 p-4 rounded flex-column'>
          <h1>₹{""}{interest}</h1>
          <p>Total Simple Interest</p>
        </div>
        <form className='mt-5' onSubmit={calc} >
          <div className='mb-3'>
          <TextField name='principle' value={principle || ""} onChange={(e)=>getvalidate(e)} className="w-100" id="outlined-basic" label="₹Principle Amount" variant="outlined" />
          {
            !isprinciple && <div><p className='text-danger'>Invalid Input</p></div>
            }
          
          </div><div className='mb-3'>
          <TextField name='rate' value={rate || ""} onChange={(e)=>getvalidate(e)} className="w-100" id="outlined-basic" label="Rate of Interest (p.a)%" variant="outlined" />
          {
            !israte && <div><p className='text-danger'>Invalid Input</p></div>
            }
          </div><div className='mb-3'>
          <TextField value={year || ""} onChange={(e)=>getvalidate(e)}
          name='year' className="w-100" id="outlined-basic" label="Year (Yr)" variant="outlined" />
          {
            !isyear && <div><p className='text-danger'>Invalid Input</p></div>
            }
          </div>
          <Stack  direction="row" spacing={1}>
            <div><Button type='submit' disabled={isprinciple && israte && isyear?false:true} className='bg-success' style={{width:"200px",height:"50px"}} variant="contained">Calculate</Button></div>
            <Button onClick={reset} className='' style={{width:"200px",height:"50px"}} variant="outlined">Reset</Button>
</Stack>
        </form>
  
</div>       </div>
  );
}

export default App;