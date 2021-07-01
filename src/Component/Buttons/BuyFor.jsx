import React from 'react';
import PropTypes from 'prop-types';

const BuyFor = props => {
    return (
        <div>
            <button className={"btn btn-primary"}>Buy for NaN {props.price}</button>
        </div>
    );

};

BuyFor.propTypes = {

};

export default BuyFor;