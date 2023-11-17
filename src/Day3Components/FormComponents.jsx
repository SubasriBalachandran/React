import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormComponents = () => {
  const [name, setName] = useState("Hi");
  const notify = () => toast("Form Submitted");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        notify();
        console.log(name);
      }}
    >
      <label htmlFor="userName"></label>
      <input
        type="text" id="userName"  value={name} onChange={(event) => {setName(event.target.value)}}/>
      <input type="submit" value="Submit Form"/>
      <ToastContainer />
    </form>
  );
};

export default FormComponents;