import React, {useState } from "react";
//import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from 'react-bootstrap/Card';

function MainItemListCard({ item }) {
  const [updatedMuseumData, setUpdatedMuseumData] = useState(null);
  const handleChangeHandler = (e) => {
    setUpdatedMuseumData({
      ...updatedMuseumData,
      [e.target.name]: e.target.value,
    });
  };

  //NOTE 2nd) Create state variable for the modifed data
  //NOTE 3rd) Create function to SET the modified data state variable
  //NOTE 4th) Create function to : A) append all the modified data to the request, B) do the fetch request to api/museums /updateMuseum
  const updatedMuseum = async (e) => {
    console.log("updatedMuseumData", updatedMuseumData);
    console.log("item._id", item._id);
    e.preventDefault();
    let urlencoded = new URLSearchParams();
    urlencoded.append("type", updatedMuseumData.type);
    urlencoded.append("id", item._id);
    urlencoded.append("name", updatedMuseumData.name);
    urlencoded.append("price", updatedMuseumData.price);

    var requestOptions = {
      method: "PUT",
      body: urlencoded,
    };
    console.log("requestOptions.body", requestOptions.body);
    try {
      const response = await fetch(
        "http://localhost:5000/api/museums/updateMuseum",
        requestOptions
      );
      const results = await response.json();
      // console.log("results", results);
    } catch (error) {
      console.log("error fetching", error);
    }
  };
  console.log("item",item)
  console.log("updatedMuseumData: ", updatedMuseumData);

  return ( <div className="div1">
   <div class="row">
  <div class="col col-sm-6">
    <Card class="card " style={{ width: '18rem' }}>
    <Card.Title>  {item.name} </Card.Title>
    <Card.Text>
        {item && <p>{item.type}</p>}
          {item && <p>{item.price}</p>}
        </Card.Text>
    <Card.Body>
    {item.avatarPicture && item.avatarPicture !== "undefined" && <img src={item.avatarPicture} height={200}  width={400}  alt="not Found" />} 
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
   
  )
  {/* <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name} 
         {item.avatarPicture && item.avatarPicture !== "undefined" && <img src={item.avatarPicture} height={200} alt="not Found" />} 
          {item && <p>{item.type}</p>}
          {item && <p>{item.price}</p>}
        </Typography>
      </CardContent>
      </Card> */}
      {/* <form onSubmit={updatedMuseum}>
        <label htmlFor="updatedMuseum">NewMuseum</label>
        <input
          type="text"
          placeholder="name "
          //value={updatedMuseumData.name ? updatedMuseumData.name : ""}
          onChange={handleChangeHandler}
          name="name"
        />

        <input
          type="text"
          placeholder="price"
          //value={updatedMuseumData.price ? updatedMuseumData.price : ""}
          onChange={handleChangeHandler}
          name="price"
        />

        <input
          type="text"
          placeholder="type"
          //value={updatedMuseumData.type ? updatedMuseumData.type : ""}
          onChange={handleChangeHandler}
          name="type"
        />

        <button type="updatedMuseum">Click to submit</button>
      </form> */}

      {/* NOTE 1st) create input fields, to modify data (input field for Name, for price, for type). Create button to call the funtion to modify */}
    
    
}
export default MainItemListCard;
