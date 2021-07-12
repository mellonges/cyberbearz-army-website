import React from 'react';
import {NavLink} from "react-router-dom";

const GenerateBearz = () => {
    return (
        <>
            <div
                className="tile-item tile-631 tile-full col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="tile tile-middle tile-center tile-caption-include">
                    <div className="tile-caption"><h1 className="h4">Son, there is not a
                        single bear in your squad!</h1>
                        <p><NavLink className="btn btn-primary" to="/">Generate
                            a bear</NavLink></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GenerateBearz;