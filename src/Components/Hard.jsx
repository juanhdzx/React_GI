import React from "react";
import Personal from "./Medium";

const Friends = () => {
    const theirBusiness = [

        {name: "Juan",
        age: "20",
        dateOfBirth: "02/20/2003",
        number: "704-999-999",
        },

        {name: "Daniel",
        age: "19",
        dateOfBirth: "04/12/1999",
        number: "704-999-999",
        },

        {name: "Sam",
        age: "23",
        dateOfBirth: "12/15/1997",
        number: "704-999-999",
        },

        {name: "Tony",
        age: "24",
        dateOfBirth: "09/18/1996",
        number: "704-999-999",
        }

    ]; 

    return (
        <div className="List">
            {theirBusiness.map((info) => (
                <Personal 
                    name={info.name} 
                    age={info.age} 
                    dateOfBirth={info.dateOfBirth} 
                    number={info.number} 
                />
            ))}
        </div>
    );

};

export default Friends;