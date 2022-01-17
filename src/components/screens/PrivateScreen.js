import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";


const PrivateScreen = () => {
  const [error, setError] = useState("");
  const [students, setStudents] = useState([]);
  const history = useHistory();

  const logoutUser = () => {
    localStorage.removeItem("authToken");
    history.push("/login")
  }

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("http://localhost:4000/api/private", config);
        setStudents(data);
        console.log(data)
      } catch (error) {
        localStorage.removeItem("authToken");
        setError(`session expired please `);
      }
    };

    fetchPrivateDate();
  }, []);
  return error ? (
    <span className="error-message">{error } <Link to="/login">Login</Link></span>
  ) : (
    <div>{students && students.map((student, i) => 
      <div key={i}>
        <p>{student._id}</p>
        <p>{student.username}</p>
        <p>{student.email}</p>
        <br />
      </div>
    )} 
    <div onClick={logoutUser}>Logout</div>
    </div>
  );
};

export default PrivateScreen;