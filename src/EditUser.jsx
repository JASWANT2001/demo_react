import axios from "axios";
import { Formik, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function EditUser() {
  const params = useParams();
  const [editData, useEditdata] = useState();
  const formik = useFormik({
    initialValues: {
      name: "",
      office: "",
      position: "",
      email: "",
      phone: "",
      salary: "",
    },

    onSubmit: async (values) => {
      try {
        const putData = await axios.put(
          `https://forms-b.onrender.com/${params.id}`,
          values
        );
        // console.log(values);
        alert("Data Updated Success");
      } catch (error) {
        console.log(error);
      }
    },
  });

  const editUser = async () => {
    try {
      var ApiData = await axios.get(`https://forms-b.onrender.com/${params.id}`);
      delete ApiData.data._id;  //delete the key id when getting the data.

      useEditdata(ApiData.data);
      formik.setValues(ApiData.data);
      console.log(ApiData.data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    editUser();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="d-flex justify-content-center">
            <h3>Jash Forms</h3>
          </div>
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="row mt-4">
            <div className="col-lg-4">
              <label htmlFor="text" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-lg-4">
              <label htmlFor="text" className="form-label">
                Office
              </label>
              <input
                type="text"
                className="form-control"
                name="office"
                value={formik.values.office}
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-lg-4">
              <label htmlFor="text" className="form-label">
                Position
              </label>
              <input
                type="text"
                className="form-control"
                name="position"
                value={formik.values.position}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-4">
              <label htmlFor="text" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-lg-4">
              <label htmlFor="text" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-lg-4">
              <label htmlFor="text" className="form-label">
                Salary
              </label>
              <input
                type="text"
                className="form-control"
                name="salary"
                value={formik.values.salary}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 d-flex justify-content-start ">
              <button className="btn btn-primary mt-3" type="text">
                Submit
              </button>
            </div>
            <div className="col-lg-2 d-flex justify-content-end ">
              <Link className="btn btn-secondary mt-3" type="text" to="/">
                Back
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditUser;
