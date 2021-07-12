import React from 'react';
import {CircularProgress} from "@material-ui/core";

const Loader = () => {
    return (
        <>
            <div
                className="tile-item tile-631 tile-full col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="tile tile-middle tile-center tile-caption-include">
                    <div className="tile-caption"> <CircularProgress color="secondary" /> </div>
                </div>
            </div>
        </>
    );
};

export default Loader;