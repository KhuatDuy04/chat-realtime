const Modal = () => {
    return (
        <>
            <div className="modal fade" tabIndex={-1} id="callingScreen" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                <div className="modal-content border-0">
                    <div className="tyn-chat-call">
                    <div className="tyn-chat-cover">
                        <img src="../../src/assets/images/cover/1.jpg" alt="" />
                    </div>{/* .tyn-chat-cover */}
                    <div className="tyn-media-group tyn-media-vr tyn-media-center mt-n4 pb-4">
                        <div className="tyn-media tyn-size-xl tyn-circle border border-2 border-white">
                        <img src="../../src/assets/images/avatar/1.jpg" alt="" />
                        </div>{/* .tyn-media */}
                        <div className="tyn-media-col">
                        <div className="tyn-media-row has-dot-sap">
                            <span className="meta">Calling ...</span>
                        </div>
                        <div className="tyn-media-row">
                            <h6 className="name">Konstantin Frank</h6>
                        </div>
                        </div>{/* .tyn-media-col */}
                    </div>{/* .tyn-media-group */}
                    <ul className="tyn-list-inline gap gap-3 m-auto py-4">
                        <li>
                        <button className="btn btn-light" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#videoCallingScreen">
                            <span>Switch To</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-camera-video-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2z" />
                            </svg>{/* camera-video-fill */}
                        </button>
                        </li>
                    </ul>{/* .tyn-list-inline */}
                    <ul className="tyn-list-inline gap gap-3 mx-auto py-4">
                        <li>
                        <button className="btn btn-icon btn-pill btn-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                            </svg>{/* person-plus-fill */}
                        </button>
                        </li>{/* li */}
                        <li>
                        <button className="btn btn-icon btn-pill btn-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-mic-mute-fill" viewBox="0 0 16 16">
                            <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4 4 0 0 0 12 8V7a.5.5 0 0 1 1 0zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a5 5 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4m3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3" />
                            <path d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607m-7.84-9.253 12 12 .708-.708-12-12z" />
                            </svg>{/* mic-mute-fill */}
                        </button>
                        </li>{/* li */}
                        <li>
                        <button className="btn btn-icon btn-pill btn-danger" data-bs-dismiss="modal">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone-x-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zm9.261 1.135a.5.5 0 0 1 .708 0L13 2.793l1.146-1.147a.5.5 0 0 1 .708.708L13.707 3.5l1.147 1.146a.5.5 0 0 1-.708.708L13 4.207l-1.146 1.147a.5.5 0 0 1-.708-.708L12.293 3.5l-1.147-1.146a.5.5 0 0 1 0-.708" />
                            </svg>{/* telephone-x-fill */}
                        </button>
                        </li>{/* li */}
                    </ul>{/* .tyn-list-inline */}
                    </div>{/* .tyn-chat-call */}
                </div>{/* .modal-content */}
                </div>{/* .modal-dialog */}
            </div>{/* .modal */}
            <div className="modal fade" tabIndex={-1} id="videoCallingScreen" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                <div className="modal-content border-0">
                    <div className="tyn-chat-call tyn-chat-call-video">
                    <div className="tyn-chat-call-stack">
                        <div className="tyn-chat-call-cover">
                        <img src="../../src/assets/images/v-cover/1.jpg" alt="" />
                        </div>
                    </div>{/* .tyn-chat-call-stack */}
                    <div className="tyn-chat-call-stack on-dark">
                        <div className="tyn-media-group p-4">
                        <div className="tyn-media-col align-self-start pt-3">
                            <div className="tyn-media-row has-dot-sap">
                            <span className="meta">Talking With ...</span>
                            </div>
                            <div className="tyn-media-row">
                            <h6 className="name">Konstantin Frank</h6>
                            </div>
                            <div className="tyn-media-row has-dot-sap">
                            <span className="content">02:09 min</span>
                            </div>
                        </div>{/* .tyn-media-col */}
                        <div className="tyn-media tyn-media-1x1_3 tyn-size-3xl border border-2 border-dark">
                            <img src="../../src/assets/images/v-cover/2.jpg" alt="" />
                        </div>{/* .tyn-media */}
                        </div>{/* .tyn-media-group */}
                        <ul className="tyn-list-inline gap gap-3 mx-auto py-4 justify-content-center  mt-auto">
                        <li>
                            <button className="btn btn-icon btn-pill btn-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                            </svg>{/* person-plus-fill */}
                            </button>
                        </li>{/* li */}
                        <li>
                            <button className="btn btn-icon btn-pill btn-light" data-bs-toggle="modal" data-bs-target="#callingScreen">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-camera-video-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2z" />
                            </svg>{/* camera-video-fill */}
                            </button>
                        </li>{/* li */}
                        <li>
                            <button className="btn btn-icon btn-pill btn-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-mic-mute-fill" viewBox="0 0 16 16">
                                <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4 4 0 0 0 12 8V7a.5.5 0 0 1 1 0zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a5 5 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4m3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3" />
                                <path d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607m-7.84-9.253 12 12 .708-.708-12-12z" />
                            </svg>{/* mic-mute-fill */}
                            </button>
                        </li>{/* li */}
                        <li>
                            <button className="btn btn-icon btn-pill btn-danger" data-bs-dismiss="modal">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone-x-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zm9.261 1.135a.5.5 0 0 1 .708 0L13 2.793l1.146-1.147a.5.5 0 0 1 .708.708L13.707 3.5l1.147 1.146a.5.5 0 0 1-.708.708L13 4.207l-1.146 1.147a.5.5 0 0 1-.708-.708L12.293 3.5l-1.147-1.146a.5.5 0 0 1 0-.708" />
                            </svg>{/* telephone-x-fill */}
                            </button>
                        </li>{/* li */}
                        </ul>{/* .tyn-list-inline */}
                    </div>{/* .tyn-chat-call-stack */}
                    </div>{/* .tyn-chat-call */}
                </div>{/* .modal-content */}
                </div>{/* .modal-dialog */}
            </div>{/* .modal */}
            <div className="modal fade" tabIndex={-1} id="muteOptions">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                <div className="modal-content border-0">
                    <div className="modal-body p-4">
                    <h4 className="pb-2">Mute conversation</h4>
                    <ul className="tyn-media-list gap gap-2">
                        <li>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="muteFor" id="muteFor15min" />
                            <label className="form-check-label" htmlFor="muteFor15min"> For 15 minutes </label>
                        </div>
                        </li>{/* li */}
                        <li>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="muteFor" id="muteFor1Hour" defaultChecked />
                            <label className="form-check-label" htmlFor="muteFor1Hour"> For 1 Hours </label>
                        </div>
                        </li>{/* li */}
                        <li>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="muteFor" id="muteFor1Days" defaultChecked />
                            <label className="form-check-label" htmlFor="muteFor1Days"> For 1 Days </label>
                        </div>
                        </li>{/* li */}
                        <li>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="muteFor" id="muteForInfinity" defaultChecked />
                            <label className="form-check-label" htmlFor="muteForInfinity"> Until I turn back On </label>
                        </div>
                        </li>{/* li */}
                    </ul>{/* .tyn-media-list */}
                    <ul className="tyn-list-inline gap gap-3 pt-3">
                        <li>
                        <button className="btn btn-md btn-danger js-chat-mute">Mute</button>
                        </li>
                        <li>
                        <button className="btn btn-md btn-light" data-bs-dismiss="modal">Close</button>
                        </li>
                    </ul>{/* .tyn-list-inline */}
                    </div>{/* .modal-body */}
                    <button className="btn btn-md btn-icon btn-pill btn-white shadow position-absolute top-0 end-0 mt-n3 me-n3" data-bs-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>{/* x-lg */}
                    </button>{/* modal-close */}
                </div>{/* .modal-content */}
                </div>{/* .modal-dialog */}
            </div>{/* .modal */}
            <div className="modal fade" tabIndex={-1} id="newChat">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                <div className="modal-content border-0">
                    <div className="modal-body p-4">
                    <h4 className="pb-2">Search by Name</h4>
                    <div className="form-group">
                        <div className="form-control-wrap">
                        <div className="form-control-icon start">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>{/* search */}
                        </div>
                        <input type="text" className="form-control form-control-solid" id="search-contact" placeholder="Search contact" />
                        </div>
                    </div>{/* .form-group */}
                    <ul className="tyn-media-list gap gap-3 pt-4">
                        <li>
                        <div className="tyn-media-group">
                            <div className="tyn-media">
                            <img src="../../src/assets/images/avatar/1.jpg" alt="" />
                            </div>{/* .tyn-media */}
                            <div className="tyn-media-col">
                            <div className="tyn-media-row">
                                <h6 className="name">Jasmine Thompson</h6>
                            </div>
                            <div className="tyn-media-row">
                                <p className="content">@thompson_jasmine</p>
                            </div>
                            </div>{/* .tyn-media-col */}
                            <ul className="tyn-media-option-list me-n1">
                            <li className="dropdown">
                                <button className="btn btn-icon btn-white btn-pill dropdown-toggle" data-bs-toggle="dropdown" data-bs-offset="0,0" data-bs-auto-close="outside">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>{/* three-dots */}
                                </button>{/* .dropdown-toggle */}
                                <div className="dropdown-menu dropdown-menu-end">
                                <ul className="tyn-list-links">
                                    <li>
                                    <button data-bs-dismiss="modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                        </svg>{/* chat-left-text */}
                                        <span>Start Texting</span>
                                    </button>
                                    </li>{/* li */}
                                    <li>
                                    <a href="#callingScreen" data-bs-toggle="modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                        </svg>{/* telephone */}
                                        <span>Audio Call</span>
                                    </a>
                                    </li>{/* li */}
                                    <li>
                                    <a href="#videoCallingScreen" data-bs-toggle="modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
                                        </svg>{/* camera-video */}
                                        <span>Video Call</span>
                                    </a>
                                    </li>{/* li */}
                                </ul>{/* .tyn-list-links */}
                                </div>{/* .dropdown-menu */}
                            </li>{/* li */}
                            </ul>{/* .tyn-media-option-list */}
                        </div>{/* .tyn-media-group */}
                        </li>{/* li */}
                        <li>
                        <div className="tyn-media-group">
                            <div className="tyn-media">
                            <img src="../../src/assets/images/avatar/2.jpg" alt="" />
                            </div>{/* .tyn-media */}
                            <div className="tyn-media-col">
                            <div className="tyn-media-row">
                                <h6 className="name">Konstantin Frank</h6>
                            </div>
                            <div className="tyn-media-row">
                                <p className="content">@konstantin_frank</p>
                            </div>
                            </div>{/* .tyn-media-col */}
                            <ul className="tyn-media-option-list me-n1">
                            <li className="dropdown">
                                <button className="btn btn-icon btn-white btn-pill dropdown-toggle" data-bs-toggle="dropdown" data-bs-offset="0,0" data-bs-auto-close="outside">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>{/* three-dots */}
                                </button>{/* .dropdown-toggle */}
                                <div className="dropdown-menu dropdown-menu-end">
                                <ul className="tyn-list-links">
                                    <li>
                                    <button data-bs-dismiss="modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                        </svg>{/* chat-left-text */}
                                        <span>Start Texting</span>
                                    </button>
                                    </li>{/* li */}
                                    <li>
                                    <a href="#callingScreen" data-bs-toggle="modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                        </svg>{/* telephone */}
                                        <span>Audio Call</span>
                                    </a>
                                    </li>{/* li */}
                                    <li>
                                    <a href="#videoCallingScreen" data-bs-toggle="modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
                                        </svg>{/* camera-video */}
                                        <span>Video Call</span>
                                    </a>
                                    </li>{/* li */}
                                </ul>{/* .tyn-list-links */}
                                </div>{/* .dropdown-menu */}
                            </li>{/* li */}
                            </ul>{/* .tyn-media-option-list */}
                        </div>{/* .tyn-media-group */}
                        </li>{/* li */}
                        <li>
                        <div className="tyn-media-group">
                            <div className="tyn-media">
                            <img src="../../src/assets/images/avatar/3.jpg" alt="" />
                            </div>{/* .tyn-media */}
                            <div className="tyn-media-col">
                            <div className="tyn-media-row">
                                <h6 className="name">Mathias Devos</h6>
                            </div>
                            <div className="tyn-media-row">
                                <p className="content">@mathias_devos</p>
                            </div>
                            </div>{/* .tyn-media-col */}
                            <ul className="tyn-media-option-list me-n1">
                            <li className="dropdown">
                                <button className="btn btn-icon btn-white btn-pill dropdown-toggle" data-bs-toggle="dropdown" data-bs-offset="0,0" data-bs-auto-close="outside">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>{/* three-dots */}
                                </button>{/* .dropdown-toggle */}
                                <div className="dropdown-menu dropdown-menu-end">
                                <ul className="tyn-list-links">
                                    <li>
                                    <button data-bs-dismiss="modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                        </svg>{/* chat-left-text */}
                                        <span>Start Texting</span>
                                    </button>
                                    </li>{/* li */}
                                    <li>
                                    <a href="#callingScreen" data-bs-toggle="modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                        </svg>{/* telephone */}
                                        <span>Audio Call</span>
                                    </a>
                                    </li>{/* li */}
                                    <li>
                                    <a href="#videoCallingScreen" data-bs-toggle="modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
                                        </svg>{/* camera-video */}
                                        <span>Video Call</span>
                                    </a>
                                    </li>{/* li */}
                                </ul>{/* .tyn-list-links */}
                                </div>{/* .dropdown-menu */}
                            </li>{/* li */}
                            </ul>{/* .tyn-media-option-list */}
                        </div>{/* .tyn-media-group */}
                        </li>{/* li */}
                        <li>
                        <div className="tyn-media-group">
                            <div className="tyn-media">
                            <img src="../../src/assets/images/avatar/4.jpg" alt="" />
                            </div>{/* .tyn-media */}
                            <div className="tyn-media-col">
                            <div className="tyn-media-row">
                                <h6 className="name">Marie George</h6>
                            </div>
                            <div className="tyn-media-row">
                                <p className="content">@marie_george</p>
                            </div>
                            </div>{/* .tyn-media-col */}
                            <ul className="tyn-media-option-list me-n1">
                            <li className="dropdown">
                                <button className="btn btn-icon btn-white btn-pill dropdown-toggle" data-bs-toggle="dropdown" data-bs-offset="0,0" data-bs-auto-close="outside">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>{/* three-dots */}
                                </button>{/* .dropdown-toggle */}
                                <div className="dropdown-menu dropdown-menu-end">
                                <ul className="tyn-list-links">
                                    <li>
                                    <button data-bs-dismiss="modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                        </svg>{/* chat-left-text */}
                                        <span>Start Texting</span>
                                    </button>
                                    </li>{/* li */}
                                    <li>
                                    <a href="#callingScreen" data-bs-toggle="modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                        </svg>{/* telephone */}
                                        <span>Audio Call</span>
                                    </a>
                                    </li>{/* li */}
                                    <li>
                                    <a href="#videoCallingScreen" data-bs-toggle="modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
                                        </svg>{/* camera-video */}
                                        <span>Video Call</span>
                                    </a>
                                    </li>{/* li */}
                                </ul>{/* .tyn-list-links */}
                                </div>{/* .dropdown-menu */}
                            </li>{/* li */}
                            </ul>{/* .tyn-media-option-list */}
                        </div>{/* .tyn-media-group */}
                        </li>{/* li */}
                        <li>
                        <div className="tyn-media-group">
                            <div className="tyn-media">
                            <img src="../../src/assets/images/avatar/5.jpg" alt="" />
                            </div>{/* .tyn-media */}
                            <div className="tyn-media-col">
                            <div className="tyn-media-row">
                                <h6 className="name">Phillip Burke</h6>
                            </div>
                            <div className="tyn-media-row">
                                <p className="content">@phillip_burke</p>
                            </div>
                            </div>{/* .tyn-media-col */}
                            <ul className="tyn-media-option-list me-n1">
                            <li className="dropdown">
                                <button className="btn btn-icon btn-white btn-pill dropdown-toggle" data-bs-toggle="dropdown" data-bs-offset="0,0" data-bs-auto-close="outside">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>{/* three-dots */}
                                </button>{/* .dropdown-toggle */}
                                <div className="dropdown-menu dropdown-menu-end">
                                <ul className="tyn-list-links">
                                    <li>
                                    <button data-bs-dismiss="modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                        </svg>{/* chat-left-text */}
                                        <span>Start Texting</span>
                                    </button>
                                    </li>{/* li */}
                                    <li>
                                    <a href="#callingScreen" data-bs-toggle="modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                        </svg>{/* telephone */}
                                        <span>Audio Call</span>
                                    </a>
                                    </li>{/* li */}
                                    <li>
                                    <a href="#videoCallingScreen" data-bs-toggle="modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
                                        </svg>{/* camera-video */}
                                        <span>Video Call</span>
                                    </a>
                                    </li>{/* li */}
                                </ul>{/* .tyn-list-links */}
                                </div>{/* .dropdown-menu */}
                            </li>{/* li */}
                            </ul>{/* .tyn-media-option-list */}
                        </div>{/* .tyn-media-group */}
                        </li>{/* li */}
                    </ul>{/* .tyn-media-list */}
                    </div>{/* .modal-body */}
                    <button className="btn btn-md btn-icon btn-pill btn-white shadow position-absolute top-0 end-0 mt-n3 me-n3" data-bs-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>{/* x-lg */}
                    </button>{/* modal-close */}
                </div>{/* .modal-content */}
                </div>{/* .modal-dialog */}
            </div>{/* .modal */}
            <div className="modal fade" tabIndex={-1} id="deleteChat">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                <div className="modal-content border-0">
                    <div className="modal-body">
                    <div className="py-4 px-4 text-center">
                        <h3>Delete chat</h3>
                        <p className="small">Once you delete your copy of this conversation, it cannot be undone.</p>
                        <ul className="tyn-list-inline gap gap-3 pt-1 justify-content-center">
                        <li>
                            <button className="btn btn-danger" data-bs-dismiss="modal">Delete</button>
                        </li>
                        <li>
                            <button className="btn btn-light" data-bs-dismiss="modal">No</button>
                        </li>
                        </ul>{/* .tyn-list-inline */}
                    </div>
                    </div>{/* .modal-body */}
                    <button className="btn btn-md btn-icon btn-pill btn-white shadow position-absolute top-0 end-0 mt-n3 me-n3" data-bs-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>{/* x-lg */}
                    </button>{/* modal-close */}
                </div>{/* .modal-content */}
                </div>{/* .modal-dialog */}
            </div>{/* .modal */}
        </>
    );
}

export default Modal