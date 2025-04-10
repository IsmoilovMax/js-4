import React from 'react'

const App = () => {
  const [birthday, setBirthday] = React.useState("")
  const [result, setResult] = React.useState(null)

  const calculateAge = () => {
    const birhdayValue = birthday
    if(birhdayValue === "") {
      alert("Please enter your birthday")
    }
    else {
      const age = getAge(birhdayValue)
      setResult(`Your age is ${age} ${age > 1 ? "years" : "year"} old`)
    }
  }

  const getAge = (birthdayValue) => {
    const currentDate = new Date()
    const birthdayDate = new Date(birthdayValue)
    let age = currentDate.getFullYear() - birthdayDate.getFullYear()
    const month = currentDate.getMonth() - birthdayDate.getMonth()
    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
      age--
    }
    return age
  }



  return (
    <>
      <div className='container'>
        <h1>Age Calculator</h1>
        <div className='form'>
          <label for="birthday">Enter you date of birth</label>
          <input type='date' id='birthday' onChange={(e) => setBirthday(e.target.value)} name='birthday' />
          <button id='btn' onClick={calculateAge}>Calculate Age</button>
          <p>{result}</p>
        </div>
      </div>
      <div className='container'>
        <h1>Age Calculator</h1>
        <h2>Welcome to React</h2>
        <small>This is a simple React application.</small>
      </div>
    </>
  )
}

export default App
