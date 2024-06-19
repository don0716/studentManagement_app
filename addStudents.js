const postForm = document.querySelector("#postForm")
const name = document.querySelector("#name")
const age = document.querySelector("#age")
const gender = document.querySelector("#gender")
const grade = document.querySelector("#grade")
const marks = document.querySelector("#marks")
const attendance = document.querySelector("#attendance")
const apiUrl = 'https://student-management-Student-neog.replit.app/students'
const message = document.querySelector("#message")

postForm.addEventListener('submit', postApiData => {
  event.preventDefault()

  message.innerHTML =  `<div class="card bg-success-subtle mt-2">
    <div class="text-center">
    <div class="spinner-border mt-1" role="status">
      <span class="visually-hidden">Loading...</span>
    </div></div></div>`

  const appData = {
    name: name.value,
    age: age.value,
    gender: gender.value,
    grade: grade.value,
    marks: marks.value,
    attendance: attendance.value
  }

  if(appData.name !== "" && appData.age !== "" && appData.gender !== "" | appData.grade !== "" && appData.marks !== "" && appData.attendance !== ""){

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(appData),
      headers: {
      'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        if(data){
          message.innerHTML = `<div class="card text-center bg-success-subtle py-1 mt-2"><div class='fw-bolder fs-4'>Student Data Added Successfully to the Bankend!</div></div>`

          clearMessage(2000)
          clearInputs() //clears all input fields.
          console.log(data)

        }else {
          message.innerHTML = `<div class="card text-center bg-danger-subtle py-1 mt-2"><div class='fw-bolder fs-4'>Failed to Add Student to the BackEnd!</div></div>`
          clearInputs() //clears all input fields.

        }

      }).catch(e => {
        message.innerHTML = `<div class="card text-center bg-danger-subtle py-1 mt-2"><div class='fw-bolder fs-4'>There seems to be an ERROR. Error Message: ${e.message}!</div></div>`
        clearMessage(2000)
        clearInputs() //clears all input fields.
      })

  } else {
     message.innerHTML = `<div class="card text-center bg-danger-subtle py-1 mt-2"><div class='fw-bolder fs-4'>Please Fill All Fields to Proceed!</div></div>`
    clearMessage(1800)
  }


})

const clearInputs = () => {
  name.value = ""
  age.value = ""
  gender.value = "Male"
  grade.value = ""
  marks.value = ""
  attendance.value = ""
}

const clearMessage = (t) => {
  setTimeout(()=> {
    message.innerHTML = ""
  }, t)
}