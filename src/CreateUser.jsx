import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";

function CreateUser() {
  const formik = useFormik({
    initialValues: {
      name: "",
      office: "",
      position: "",
      email: "",
      phone: "",
      salary: "",
    },

    onSubmit: async (value, formikBag) => {
      try {
        const data = await axios.post("https://forms-b.onrender.com", value);
        alert("Data Posted");
      } catch (error) {
        alert("Something Went Wrong");
        console.log(error);
      }
      formikBag.resetForm();
    },
  });
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

export default CreateUser;
