import React from "react";
import shortid from 'shortid';

function List(props) {
  return (<div>
  {
    props.cities.map((city, index) => {
      const keyId = shortid.generate();

      return <h2 key={city._id} >{city.name}</h2>
      {/* return <h2 key={keyId} >{city}</h2> */}
      {/* return <h2 key={index} >{city}</h2> */}
    })
  }
  </div>);
}

export default List;
