import React, { useEffect, useContext } from "react";
import { AppContext } from "../context/appContext";
import Card from 'react-bootstrap/Card';
import "../components/item.css"






function Profile() {
  const { getProfile, userProfile } = useContext(AppContext);

  useEffect(() => {
    getProfile()
  }, [])
  console.log('userProfile', userProfile)

  
  return (
    <>

      <h1>User Profile  Information </h1>
      {/* <button onClick={handleGetProfile}>getProfile</button> */}

      {userProfile ? (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={userProfile.avatarPicture} alt="User Picture Not found" width={200} />
          <Card.Body>
            <Card.Title>User Name : {userProfile.userName}</Card.Title>
            <Card.Text>
              User Email  : {userProfile.email}
       
            </Card.Text>
            {userProfile.comments.map((comment) => (
              <div>
                 <p className="bluee">Name of museum : </p>  {comment.museumId && <p>{comment.museumId.name}</p> }
              
                <p className="redd">My Comments is :<p className="bluee"> {comment.commentText}</p></p>
             
             <p>--------------------------------</p>

              </div>
            ))}
          </Card.Body>
        </Card>) :
        <p>Not logged in</p>
      }


    </>
  );
}

export default Profile;
