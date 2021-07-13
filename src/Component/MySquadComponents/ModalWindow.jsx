import React from 'react';

const ModalWindow = ({data}) => {
    return (
        <>
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                className="icon icon-cross"></span></button>
                            <h4 className="modal-title" id="myModalLabel">Send the bear</h4>

                        </div>
                        <div className="modal-body">
                            <img style={{width: "30%", height: "30%"}}
                                 src="" />
                            <h6>TEST</h6>
                            <input style={{marginTop: "5%"}} type="text"
                                   className="form-control"
                                   placeholder="To address"/>
                            <button style={{marginLeft: "80%"}} type="button" className="btn btn-default">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalWindow;