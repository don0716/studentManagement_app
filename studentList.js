const filterGender = document.querySelector("#filterGender")
const displayList = document.querySelector("#displayList")
const successMessage = document.querySelector("#successMessage")
const apiUrl = 'https://student-management-Student-neog.replit.app/students'

const fetchApi = (url, filter) => {
  displayList.innerHTML = `<div class="card bg-success-subtle">
    <div class="text-center">
    <div class="spinner-border mt-1" role="status">
      <span class="visually-hidden">Loading...</span>
    </div></div></div>`

  fetch(url)
  .then(res => res.json())
  .then(data => {
    if(data.length > 0){

      displayList.innerHTML = ""

      for(let i=0; i<data.length; i++){
        const li = document.createElement("li")
        li.className = 'list-group-item d-flex justify-content-between'

        if(filter !== "All"){

              if(data[i].gender ===  filterGender.value){
                li.innerHTML = `${data[i].name} - Grade: ${data[i].grade} - Age: ${data[i].age} - Attendance: ${data[i].attendance} - Gender: ${data[i].gender} - Marks: ${data[i].marks} <button id="deleteBtn" data-id=${data[i]._id} class="btn btn-danger btn-sm">Delete</button>`
                  displayList.appendChild(li)
              }

        } else {
          li.innerHTML = `${data[i].name} - Grade: ${data[i].grade} - Age: ${data[i].age} - Attendance: ${data[i].attendance} - Gender: ${data[i].gender} - Marks: ${data[i].marks} <button id="deleteBtn" data-id=${data[i]._id} class="btn btn-danger btn-sm">Delete</button>`
          displayList.appendChild(li)
        }

      }
    } else {
      displayList.innerHTML = `<div class="card bg-success-subtle py-2 text-center"><div class='fw-bolder fs-4'>${data.length === 0 ? "Add More Students!" : "There was an Error in fetching Data!"}</div></div>`
    }

    const deleteBtn = document.querySelectorAll('#deleteBtn')
    for(let i=0; i<deleteBtn.length; i++){
      deleteBtn[i].addEventListener("click", getStudentId => {
        successMessage.innerHTML = `<div class="card bg-success-subtle">
          <div class="text-center">
          <div class="spinner-border mt-1" role="status">
            <span class="visually-hidden">Loading...</span>
          </div></div></div>`

        const studentId = event.target.getAttribute('data-id')

        fetch(`${apiUrl}/${studentId}`, {
          method: 'DELETE'
        }).then(res => res.json())
          .then(data => {
            if(data){
              console.log(data)
              successMessage.innerHTML = `<div class="card bg-success-subtle py-2"><div class='fw-bold fs-4'>Student Detail was Deleted Successfully</div></div>`
              clearMessage(2000)
              // console.log("FIlter Gender value Inside delete fetch:: ",filterGender.value)
              fetchApi(apiUrl, filterGender.value)
            } else {
              successMessage.innerHTML = `<div class="card bg-danger-subtle py-2"><div class='fw-bolder fs-4'>There was an Error in Deleting Data!</div></div>`
            }
          }).catch(e => {
            successMessage.innerHTML =  `<div class="card bg-danger-subtle py-2"><div class='fw-bolder fs-4'>There was an error. ErrorMessage: ${e.message}</div></div>`
          })


      })
    }

  }).catch(e => {
    displayList.innerHTML = `<div class="card bg-danger-subtle py-2"><div class='fw-bolder fs-4'>There was an error. ErrorMessage: ${e.message}</div></div>`
  })


}

// console.log("FIlter Gender value:: ",filterGender.value)

filterGender.addEventListener("change", filterByGender => {
  if(filterGender.value !== "All"){
    fetchApi(apiUrl, filterGender.value)
  } else {
    fetchApi(apiUrl, "All")
  }
})


const clearMessage = (t) => {
  setTimeout(()=> {
    successMessage.innerHTML = ""
  }, t)
}



fetchApi(apiUrl, "All")