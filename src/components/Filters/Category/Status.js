import React from 'react'
import FilterBTN from '../FilterBTN'

const Status = ({setStatus, setPageNumber}) => {
    let status = ["Alive", "Dead", "Unknow"]
  return (
    <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
        Status
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body d-flex flex-wrap gap-2">
        {status.map((items, index)=>(
            <FilterBTN task={setStatus} setPageNumber={setPageNumber} key={index} name="status" index={index} items={items} ></FilterBTN>))}
        
      </div>
    </div>
  </div>
  )
}

export default Status