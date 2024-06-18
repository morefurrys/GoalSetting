import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email : '',
    password : ''
  
  })
  const onChange = (e) =>{
    setFormData((prevState) =>({...prevState,[e.target.name]:e.target.value}))
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }

  const {email, password} = formData
  return (
    <>
    <section className="heading">
      <h1>
        <FaSignInAlt/>Login
      </h1>
      <p>Please Login to your account</p>
    </section>
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
        <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" value={email} onChange={onChange}></input>
        <input type="password" className="form-control" id="password" name="password" placeholder="Enter password" value={password} onChange={onChange}></input>
        </div>
          <div className="form-group">
            <button
              type="submit"
              name=""
              id=""
              class="btn btn-block"
            >
              Login
            </button>
          </div>
      </form>
    </section>
    </>
  )
}

export default Login