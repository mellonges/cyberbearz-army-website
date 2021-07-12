import React from 'react';
import ModalWindow from "./ModalWindow";

const BearzComponent = ({data}) => {

    return (
        <>
            <div
                className="tile-item tile-633 tile-full col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="tile tile-middle tile-left tile-caption-include">
                    <div className="tile-caption">
                        <figure className="bear"><img style={{borderRadius: "10%", width: "100%", height: "100%"}} src={data.image} /></figure>
                        <div className="tile-token">
                            <h2 className="h5">{data.name}</h2>
                            {data.attributes.map((i) => <span className="label label-default">{i.value}</span>)}
                            <p>
                                <button className="btn btn-default" data-toggle="modal" data-target="#myModal">Send the bear</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BearzComponent;