import Header from "./components/Header"
import React, { useState } from "react";
import UserInput from "./components/UserInput"
import Result from "./components/Result";
function App() {
  const [formData, setFormData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 8,
    duration: 12,
  })

  function handleChange(fieldName, value) {
    setFormData(prevData => {
      return ({
        ...prevData,
        [fieldName]: Number(value)
      })
    })
  }
  const isValid = formData.duration > 0
  return (<>
    <Header></Header>
    <UserInput formData={formData} onChange={handleChange} />
    {
      isValid ?
        <Result data={formData} />
        : <p className="center">Enter valid duration</p>
    }

  </>
  )
}

export default App
