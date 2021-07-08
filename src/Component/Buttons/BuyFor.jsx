import React from 'react';

const BuyFor = props => {
    return (
        <div>
            <button  className={"btn btn-primary"}>Buy for {props.price}</button>
            {console.log(props)}
        </div>
    );

};


export default BuyFor;