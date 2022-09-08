import React, { useState } from "react";
function PostMuseum() {
  const [newMuseum, setNewMuseum] = useState({});

  const [uploadPicture, setUploadPicture] = useState({});

  const handleChangeHandler = (e) => {


    setNewMuseum({ ...newMuseum, [e.target.name]: e.target.value });
  };
  const attachFileHandler = (e) => {
    setUploadPicture(e.target.files[0]);
  };


  const addMuseum = async (e) => {
    e.preventDefault();
    const imageUrl = await imageUpload();
console.log('imageUrl', imageUrl)
if(imageUrl){


    const urlencoded = new URLSearchParams();


    urlencoded.append("name", newMuseum.name);
    urlencoded.append("price", newMuseum.price);
    urlencoded.append("type", newMuseum.type);
    urlencoded.append("avatarPicture", imageUrl);

    const requestOptions = {
      method: "POST",
      body: urlencoded,
    };
    try {
      console.log("posting new museum now");

      const response = await fetch(
        "http://localhost:5000/api/museums/newMuseum",
        requestOptions
      );
      const result = await response.json();

      console.log("Uploading successful", result);
    } catch (error) {
      console.log("error during Uploading :>> ", error);
    }
  }
  };


  const imageUpload = async (e) => {

    const formData = new FormData();
    console.log("uploadPicture", uploadPicture);
    formData.append("image", uploadPicture);
    console.log("formData :>> ", formData);

    const requestOptions = {
      method: "POST",
      body: formData,
    };
    try {
      const response = await fetch(
        "http://localhost:5000/api/museums/imageUploads",
        requestOptions
      );
      const result = await response.json();
      console.log("result", result);

      setNewMuseum({ ...newMuseum, avatarPicture: result.imageUrl });
      return result.imageUrl
    } catch (error) {
      console.log("error uploading picture", error);
    }
  };



  return (
    <div>
      <div>
        <img width="100" src={newMuseum.avatarPicture} />
      </div>
      <form onSubmit={addMuseum}>
        <label htmlFor="addMuseum">NewMuseum</label>
        <input
          type="text"
          placeholder="name "
          value={newMuseum.name ? newMuseum.name : ""}
          onChange={handleChangeHandler}
          name="name"
        />

        <input
          type="text"
          placeholder="price"
          value={newMuseum.price ? newMuseum.price : ""}
          onChange={handleChangeHandler}
          name="price"
        />

        <input
          type="text"
          placeholder="type"
          value={newMuseum.type ? newMuseum.type : ""}
          onChange={handleChangeHandler}
          name="type"
        />
        <input type="file" onChange={attachFileHandler} />
        <button type="submit">Click to submit</button>

      </form>
    </div>
  );
}
export default PostMuseum;

