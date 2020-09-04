import React from "react";


const OnePhone = ({ picture, name, shortDescription }) => {
  return (
    <>

    <div className="oneProjectContainer">

        <div className="oneProject" >

          <img src={picture} alt={name} />
          <ul>
           <li>
              <strong>{name} </strong>
            </li>
            <li>
              <p>{shortDescription} </p>
            </li>
          </ul>
        </div>
      
    </div>

    </>
  );
};

export default OnePhone;
