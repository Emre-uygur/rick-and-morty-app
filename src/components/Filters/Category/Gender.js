import React from 'react'
import FilterBTN from '../FilterBTN'

const Gender = ({setPageNumber, setGender}) => {
  let genders = ["female", "male", "genderless", "unknown"]
  return (
    (<div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Gender
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body accordion-body d-flex flex-wrap gap-2">
            {genders.map((items, index)=>(
              <FilterBTN task={setGender} setPageNumber={setPageNumber}  key={index} name="gender" index={index} items={items}></FilterBTN>
            ))}
          </div>
        </div>
      </div>)
  )
}

export default Gender