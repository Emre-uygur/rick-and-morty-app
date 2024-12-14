import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'


const Filters = ({setStatus, setPageNumber, setGender, setSpecies}) => {
  let clear=()=>{
    setStatus("")
    setPageNumber("")
    setGender("")
    setSpecies("")
    window.location.reload(false)
  }
  return (
    <div className='col-3'>
      <div className='text-center fw-bold fs-4 mb-2'>Filter</div>
      <div onClick={clear} style={{cursor: "pointer"}} className='text-center text-decoration-underline text-primary mb-4'>Clear filters</div>
    
    <div class="accordion" id="accordionExample">
    <Status setPageNumber={setPageNumber} setStatus={setStatus}></Status>
    <Species setSpecies={setSpecies} setPageNumber={setPageNumber} ></Species>
    <Gender setGender={setGender} setPageNumber={setPageNumber} ></Gender>
    
    
  
</div>
    
    
    </div>
  )
}

export default Filters