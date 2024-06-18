import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name : '',
    email : '',
    password : '',
    password2 : ''
  })
  const onChange = (e) =>{
    setFormData((prevState) =>({...prevState,[e.target.name]:e.target.value}))
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }

  const {name, email, password, password2} = formData
  return (
    <>
    <section className="heading">
      <h1>
        <FaUser/>Register
      </h1>
      <p>Create an account</p>
    </section>
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
        <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" value={name} onChange={onChange}></input>
        <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" value={email} onChange={onChange}></input>
        <input type="password" className="form-control" id="password" name="password" placeholder="Enter password" value={password} onChange={onChange}></input>
        <input type="password" className="form-control" id="password2" name="password2" placeholder="Confirm your password2" value={password2} onChange={onChange}></input>
        </div>
          <div className="form-group">
            <button
              type="submit"
              name=""
              id=""
              class="btn btn-block"
            >
              Submit
            </button>
          </div>
      </form>
    </section>
    </>
  )
}

export default Register