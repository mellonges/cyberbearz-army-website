import React from 'react';
import {Link} from "react-router-dom";


const BearzComponent = ({data, func}) => {
    // const modalWindowFunc = func()
    const tokenID = data.id
    return (
        <>
            <div
                className="tile-item tile-633 tile-full col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="tile tile-middle tile-left tile-caption-include">
                    <div className="tile-caption">
                        <figure className="bear"><img style={{borderRadius: "10%", width: "100%", height: "100%"}} src={data.image} /></figure>
                        <div className="tile-token">
                            <h2 className="h5">{data.name}</h2>
                            {data.attributes.map((i) => <span key={i.name} className="label label-default">{i.value}</span>)}
                            <p>
                                <button onClick={() => func(tokenID, data.image, data.name)} className="btn btn-default" data-toggle="modal" data-target="#myModal">Send the bear</button>
                                <Link className="btn btn-default"  target={`https://lootex.io/assets/0x467044e6a297084baaebd53b6f1649c07527e273/${tokenID}`}>Sell on LOOTEX</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BearzComponent;