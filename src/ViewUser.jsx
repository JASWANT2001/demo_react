import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewUser() {
  const [employeeData, setEmployeeData] = useState([]);
  const params = useParams;
  var getData = async () => {
    try {
      const Apidata = await axios.get("http://localhost:3000/");
      setEmployeeData([...Apidata.data]);
      // console.log(Apidata.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/${id}`);
      alert("Data Deleted")
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-lg-12 d-flex justify-content-end mb-3">
        <Link className="btn btn-primary" to="/create-user">
          Create User
        </Link>
      </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Office</th>
            <th scope="col">Position</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Salary</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((ele) => {
            return (
              <tr>
                <td scope="row">{ele.name}</td>
                <td>{ele.office}</td>
                <td>{ele.position}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>
                <td>{ele.salary}</td>
                <td>
                  <Link
                    className="btn btn-warning mr-2"
                    to={`/show-user/${ele.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-primary mr-2"
                    to={`/edit-user/${ele.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(ele.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewUser;
