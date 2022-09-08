import React, { useContext } from "react";
import MainItemListCard from "../components/MainItemListCard";
import { AppContext } from "../context/appContext";


function MainItemListView() {
  const { myItem } = useContext(AppContext);
  console.log("myItem:...... ", myItem);

  return (
    <div className="row">
      {myItem &&
        myItem.allMuseums.map((item, i) => {
          return <div className="col-xs-12 col-sm-6 col-lg-4">
            <MainItemListCard item={item} key={i} /> </div>;
        })}
    </div>
  );
}

export default MainItemListView;
