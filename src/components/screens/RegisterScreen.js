import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const RegisterScreen = ({ history }) => {
  const [faculty, setFacu] = useState('')
  const [department, setDep] = useState('')
  const [courses, setCourses] = useState('')

  const faculties = [
    {
      faculty: "science",
      departments: [
        {
          department: 'Medicine',
          courses: [
            { subject: "Med-1" },
            { subject: "Med-2" }
          ]
        },
        {
          department: 'Engineering',
          courses: [
            { subject: "Eng-1" },
            { subject: "Eng-2" }
          ]
        },
        {
          department: 'Pharmacy',
          courses: [
            { subject: "Pharm-1" },
            { subject: "Pharm-2" }
          ]
        }
      ]
    },

    {
      faculty: "arts",
      departments: [
        {
          department: 'Law',
          courses: [
            { subject: "Law-1" },
            { subject: "Law-2" }
          ]
        },
        {
          department: 'Theater Arts',
          courses: [
            { subject: "Theaeter-1" },
            { subject: "Theaeter-2" }
          ]
        },
        {
          department: 'Wood Works',
          courses: [
            { subject: "Wood-1" },
            { subject: "Wood-2" }
          ]
        },
        
      ]
    },

  ]

  const courseArr = [
    {
      department: 'Law',
      courses: [
        { subject: "Law-1" },
        { subject: "Law-2" }
      ]
    },
    {
      department: 'Theater Arts',
      courses: [
        { subject: "Theaeter-1" },
        { subject: "Theaeter-2" }
      ]
    },
    {
      department: 'Wood Works',
      courses: [
        { subject: "Wood-1" },
        { subject: "Wood-2" }
      ]
    },
    {
      department: 'Medicine',
      courses: [
        { subject: "Med-1" },
        { subject: "Med-2" }
      ]
    },
    {
      department: 'Engineering',
      courses: [
        { subject: "Eng-1" },
        { subject: "Eng-2" }
      ]
    },
    {
      department: 'Pharmacy',
      courses: [
        { subject: "Pharm-1" },
        { subject: "Pharm-2" }
      ]
    }
  ]


  useEffect(() => {
    const dis = department && courseArr.find(el => el.department === department)
console.log('dis', dis.courses)
setCourses(dis.courses)

  }, [department]);




  // const d = faculties.map(el => el.departments)
  // if(department) {
  //   const c = d.find(el => el.department === department)
  // console.log(c.courses)
  // }
  // console.log('dept', department)

  // const nb = faculty && faculties.find(y => y.faculty === faculty).departments.map(depts => depts.courses)
  // const nba = faculty && faculties.find(y => y.faculty === faculty).departments.map(depts => depts.department)

  // const we = faculties.map(xy => xy.departments)
  // console.log(we)
  // const dd = department && we.map(el => el.department === department)
  // console.log('dd', dd)


  // const n = department && v.map(y => y === department.courses)
  // const bt = nb.find()

  // console.log('sub', nb)
  // console.log('sub', nba)



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
          department: department,
          courses: courses,

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
          <select name="" id="" onChange={(e) => { const x = e.target.value; setFacu(x) }}>
            <option value="">Select Faculty</option>
            {faculties.map(faculty =>
              <option value={faculty.faculty}>{faculty.faculty}</option>
            )}
          </select>

          <select onChange={(e) => { setDep(e.target.value) }}  >
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