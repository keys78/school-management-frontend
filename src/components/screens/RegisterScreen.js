import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const RegisterScreen = ({ history }) => {
  const [faculty, setFacu] = useState('')
  const [department, setDep] = useState('')

  const faculties = [
    {faculty: "science",
      departments: [
        {department: 'A'},
        {department: 'B'},
        {department: 'C'}
      ]
  },

    {faculty: "arts",
      departments: [
        {department: 'X'},
        {department: 'Y'},
        {department: 'Z'}
      ]
  },

]


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post("http://localhost:4000/api/auth/register",
        {
          username,
          email,
          password,
          faculty: faculty,
          department : department
          
        },
        config
      );

      localStorage.setItem("authToken", data.token);
    console.log(data.token)

      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="register-screen">
      <form onSubmit={registerHandler} className="register-screen__form">
        <h3 className="register-screen__title">Register</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            required
            id="name"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            autoComplete="true"
            placeholder="Confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div>
          <select name="" id="" onChange={(e) => {  const x = e.target.value; setFacu(x)}}>
            <option value="">Select Faculty</option>
            {faculties.map(faculty =>  
              <option value={faculty.faculty}>{faculty.faculty}</option>
              )}
          </select>

          <select onChange={(e) => {setDep(e.target.value)}}  >
          <option value="">Select Department</option>
            {faculty && faculties.find(y => y.faculty === faculty).departments.map(depts => 
              <option value={depts.department}>{depts.department}</option>
              )}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>

        <span className="register-screen__subtext">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterScreen;