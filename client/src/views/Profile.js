import React, { useState } from "react";
import { getToken } from "../utils/getToken";

function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);
  const getProfile = async () => {
    const token = getToken();
    if (token) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
      };
      try {
        const response = await fetch(
          "http://localhost:5000/api/users/profile",
          requestOptions
        );
        const result = await response.json();
        setUserProfile({
          email: result.email,
          userName: result.userName,
          avatarPicture: result.avatarPicture,
          
        });
      } catch (error) {
        console.log("error getting profile", error);
        setError("you need login first");
      }
    }
  };
  return (
    <>
      <h1>User Profile  Information </h1>
      <button onClick={getProfile}>getProfile</button>
      {userProfile && (
        <div>
        
          <h2> User Name : {userProfile.userName}</h2>
          <h2>User Email  : {userProfile.email}</h2>
        <h2>User Picture</h2> 
         <img src={userProfile.avatarPicture} alt="User Profile Not found" width={200} />
        </div>
      )}
    </>
  );
}

export default Profile;
