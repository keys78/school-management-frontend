import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";


const PrivateScreen = () => {
  const [error, setError] = useState("");
  const [student, setStudent] = useState({});
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
        setStudent(data);
        console.log(data)
      } catch (error) {
        localStorage.removeItem("authToken");
        setError(`session expired please `);
      }
    };

    fetchPrivateDate();
  }, []);
  return error ? (
    <span className="error-message">{error} <Link to="/login">Login</Link></span>
  ) : (
    <div>
      {student &&
        <div>
          <p>{student.username}</p>
          <p>{student.email}</p><br /><br />
          <p>faculty: { student.faculty }</p>
          <p>department: { student.department }</p>
        </div>
      }
      <button onClick={logoutUser}>Logout</button>
    </div>

  );
};

export default PrivateScreen;