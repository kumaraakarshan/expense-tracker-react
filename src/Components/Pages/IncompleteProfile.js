import classes from "./IncompleteProfile.module.css";
import React, { useContext } from "react";
import { useRef } from "react";
import LoginContext from "../Context/LoginContext";

const IncompleteProfile = () => {
  const fullNameRef = useRef("");
  const photoRef = useRef("");

  const loginCtx = useContext(LoginContext);

  const updateDetailsHandler = async (event) => {
    event.preventDefault();

    const fullName = fullNameRef.current.value;
    const photoUrl = photoRef.current.value;
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCSdkrWiOXFOVt4RJAPYlcoLBNb3Nv58sw",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: loginCtx.idToken,
          displayName: fullName,
          photoUrl: photoUrl,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      console.log(data);

      fullNameRef.current.value = "";
      photoRef.current.value = "";
    } else {
      alert(data.error.message);
    }
  };

  return (
    <form className={classes.IncompleteProfile} onSubmit={updateDetailsHandler}>
      <h3>Contact Details</h3>
      <div>
        <input placeholder="Full Name" input="text" ref={fullNameRef} />
        <input placeholder="Profile Photo URL" input="text" ref={photoRef} />
      </div>
      <button>Update Details</button>
    </form>
  );
};

export default IncompleteProfile;