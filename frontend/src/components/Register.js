import React from "react";
import axios from "axios";
import { useState } from "react";

// import { Link} from "react-router-dom";

const Register = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [age, setAge] = useState("");
  let [country, setCountry] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [massage, setMassage] = useState("");
  const OnClicking = () => {
    let newUser = {
      firstName,
      lastName,
      age,
      country,
      email,
      password,
    };
    axios.post(`http://localhost:5000/users/`, newUser).then((res) => {
      console.log(res);
      if (res.status !== 409) {
        setMassage("user added  successfully");
      } else {
        setMassage("Error happened while register, please try again");
      }
    });
    // setMassage(("user added  successfully "))
  };

  return (
    <div style={{ display: "grid", gap: "10px", width: "50%" }}>
      <input
        style={{
          border: " 2px , solid , blue ",
          fontSize: "20px",
          hight: "30px",
        }}
        placeholder="FirstName here"
        type="text"
        onChange={(e) => {
          setFirstName((firstName = e.target.value));
        }}
      />
      <input
        style={{
          border: " 2px , solid , blue ",
          fontSize: "20px",
          hight: "30px",
        }}
        placeholder="LastName here"
        type="text"
        onChange={(e) => {
          setLastName((lastName = e.target.value));
        }}
      />
      <input
        style={{
          border: " 2px , solid , blue ",
          fontSize: "20px",
          hight: "30px",
        }}
        placeholder=" Age here "
        type="number"
        onChange={(e) => {
          setAge((age = e.target.value));
        }}
      />
      <input
        style={{
          border: " 2px , solid , blue ",
          fontSize: "20px",
          hight: "30px",
        }}
        placeholder="Country  here"
        type="text"
        onChange={(e) => {
          setCountry((country = e.target.value));
        }}
      />
      <input
        style={{
          border: " 2px , solid , blue ",
          fontSize: "20px",
          hight: "30px",
        }}
        placeholder="email  here"
        type="text"
        onChange={(e) => {
          setEmail((email = e.target.value));
        }}
      />
      <input
        style={{
          border: " 2px , solid , blue ",
          fontSize: "20px",
          hight: "30px",
        }}
        placeholder="Password here"
        type="password"
        onChange={(e) => {
          setPassword((password = e.target.value));
        }}
      />

      <button
        style={{
          border: " 2px , solid , blue ",
          backgroundColor: "yellow",
          fontSize: "20px",
          hight: "30px",
        }}
        type="submit"
        onClick={OnClicking}
      >
        Register
      </button>

      <p>{massage}</p>
    </div>
  );
};

export default Register;
