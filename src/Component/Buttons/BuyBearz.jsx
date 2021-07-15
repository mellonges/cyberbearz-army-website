import React from 'react';
import BuyFor from "./BuyFor";
import BuySome from "./BuySome";

const BuyBearz = ({rangID, price}) => {
    return (
        <>
            <BuyFor price={price} rangID={rangID} />
            <BuySome rangID={rangID} price={price} amount={"4"} />
            <BuySome rangID={rangID} price={price} amount={"8"} />
        </>
    );
};

export default BuyBearz;