import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ShowUser() {
  const [showUser, setShowuser] = useState();
  const params = useParams();

  var Data = async () => {
    try {
      var Apidata = await axios.get(`https://forms-b.onrender.com/${params.id}`);
      setShowuser(Apidata.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Data();
  }, []);


  return (
    <div className="container-fluid mt-5">
      <ul>
        <li>{showUser?.name}</li>
        <li>{showUser?.office}</li>
        <li>{showUser?.position}</li>
        <li>{showUser?.email}</li>
        <li>{showUser?.phone}</li>
        <li>{showUser?.salary}</li>
      </ul>
    </div>
  );
}

export default ShowUser;
