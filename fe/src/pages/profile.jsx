const Profile = () => {
    return (
        <div className="tyn-content  tyn-content-page">
            <div className="tyn-main tyn-content-inner" id="tynMain">
                <div className="container">
                <div className="tyn-profile">
                    <div className="tyn-profile-head">
                    <div className="tyn-profile-cover">
                        <img className="tyn-profile-cover-image" src="../../src/assets/images/cover/2.jpg" alt="" />
                    </div>{/* .tyn-profile-cover */}
                    <div className="tyn-profile-info">
                        <div className="tyn-media-group align-items-start">
                        <div className="tyn-media tyn-media-bordered tyn-size-4xl tyn-profile-avatar">
                            <img src="../../src/assets/images/avatar/1.jpg" alt="" />
                        </div>
                        <div className="tyn-media-col">
                            <div className="tyn-media-row">
                            <h4 className="name">Nina Dubois <span className="username">@nina_dubois</span></h4>
                            </div>{/* .tyn-media-row */}
                            <div className="tyn-media-row has-dot-sap">
                            <span className="content">287 Contacts</span>
                            <span className="meta">8 Groups</span>
                            </div>{/* .tyn-media-row */}
                            <div className="tyn-media-row pt-2">
                            <div className="tyn-media-multiple">
                                <div className="tyn-media tyn-circle tyn-size-md tyn-media-bordered">
                                <img src="../../src/assets/images/avatar/2.jpg" alt="" />
                                </div>
                                <div className="tyn-media tyn-circle tyn-size-md tyn-media-bordered">
                                <img src="../../src/assets/images/avatar/3.jpg" alt="" />
                                </div>
                                <div className="tyn-media tyn-circle tyn-size-md tyn-media-bordered">
                                <img src="../../src/assets/images/avatar/4.jpg" alt="" />
                                </div>
                                <div className="tyn-media tyn-circle tyn-size-md tyn-media-bordered">
                                <img src="../../src/assets/images/avatar/5.jpg" alt="" />
                                </div>
                                <div className="tyn-media tyn-circle tyn-size-md tyn-media-bordered">
                                <img src="../../src/assets/images/avatar/6.jpg" alt="" />
                                </div>
                            </div>
                            </div>{/* .tyn-media-row */}
                        </div>{/* .tyn-media-col */}
                        </div>{/* .tyn-media-group */}
                    </div>{/* .tyn-profile-info */}
                    </div>{/* .tyn-profile-head */}
                    <div className="tyn-profile-nav">
                    <ul className="nav nav-tabs nav-tabs-line">
                        <li className="nav-item">
                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-edit" type="button"> Edit Profile </button>
                        </li>{/* li */}
                    </ul>{/* .nav-tabs */}
                    </div>{/* .tyn-profile-nav */}
                    <div className="tyn-profile-details">
                    <div className="tab-content">
                        <div className="tab-pane show active" id="profile-edit" tabIndex={0}>
                        <div className="row gy-5">
                            <div className="col-12">
                            <div className="row gy-4">
                                <div className="col-lg-3">
                                <h6>Personal Information</h6>
                                <div className="tyn-subtext">Edit Your personal Info</div>
                                </div>{/* .col */}
                                <div className="col-lg-9">
                                <div className="row g-gs">
                                    <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="firstName">First Name</label>
                                        <div className="form-control-wrap">
                                        <input type="text" className="form-control" id="firstName" placeholder="Your Name" defaultValue="Nina" />
                                        </div>
                                    </div>{/* .form-group */}
                                    </div>{/* .col */}
                                    <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="lastName">Last Name</label>
                                        <div className="form-control-wrap">
                                        <input type="text" className="form-control" id="lastName" placeholder="Your Name" defaultValue="Dubois" />
                                        </div>
                                    </div>{/* .form-group */}
                                    </div>{/* .col */}
                                    <div className="col-12">
                                    <div className="form-group">
                                        <label className="form-label d-flex" htmlFor="primaryEmail">Main Email <span className="small ms-2 text-success">Varified</span> <a href="#" className="link link-primary ms-auto">Add Email</a></label>
                                        <div className="form-control-wrap">
                                        <input type="text" className="form-control" id="primaryEmail" disabled placeholder="Primary Email" defaultValue="nina_dubois@themeyn.com" />
                                        </div>
                                        <div className="tyn-subtext mt-2">You need to have at least one email connected with your account</div>
                                    </div>{/* .form-group */}
                                    </div>{/* .col */}
                                    <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                                        <div className="form-control-wrap">
                                        <input type="text" className="form-control" id="phoneNumber" placeholder="Your Number" defaultValue="0098 4654 554" />
                                        </div>
                                    </div>{/* .form-group */}
                                    </div>{/* .col */}
                                    <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="phoneNumber">Country</label>
                                        <div className="form-control-wrap">
                                        <select className="form-select">
                                            <option value="Afghanistan">Afghanistan</option>
                                            <option value="Åland Islands">Åland Islands</option>
                                            <option value="Albania">Albania</option>
                                            <option value="Algeria">Algeria</option>
                                            <option value="American Samoa">American Samoa</option>
                                            <option value="Andorra">Andorra</option>
                                            <option value="Angola">Angola</option>
                                            <option value="Anguilla">Anguilla</option>
                                            <option value="Antarctica">Antarctica</option>
                                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                            <option value="Argentina">Argentina</option>
                                            <option selected value="Armenia">Armenia</option>
                                            <option value="Aruba">Aruba</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Austria">Austria</option>
                                            <option value="Azerbaijan">Azerbaijan</option>
                                            <option value="Bahamas">Bahamas</option>
                                            <option value="Bahrain">Bahrain</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="Barbados">Barbados</option>
                                            <option value="Belarus">Belarus</option>
                                            <option value="Belgium">Belgium</option>
                                        </select>
                                        </div>
                                    </div>{/* .form-group */}
                                    </div>{/* .col */}
                                </div>{/* .row */}
                                </div>{/* .col */}
                            </div>{/* .row */}
                            </div>{/* .col */}
                            <div className="col-12">
                            <div className="row gy-4">
                                <div className="col-lg-3">
                                <h6>Sign-in Method</h6>
                                <div className="tyn-subtext">Edit Your personal Info</div>
                                </div>{/* .col */}
                                <div className="col-lg-9">
                                <div className="row g-gs">
                                    <div className="col-12">
                                    <div className="border rounded-2 p-3 position-relative">
                                        <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between align-items-center w-100 pe-5">
                                        <div className="tyn-media-group mw-100">
                                            <div className="tyn-media text-bg-danger">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                                            </svg>{/* google */}
                                            </div>{/* .tyn-media */}
                                            <div className="tyn-media-col">
                                            <h6 className="name">Google Account</h6>
                                            <span className="content">Your google account is connected.</span>
                                            </div>
                                        </div>{/* .tyn-media-group */}
                                        <div className="position-absolute end-0 me-3">
                                            <div className="form-check form-check-reverse form-switch">
                                            <input className="form-check-input" defaultChecked type="checkbox" role="switch" id="googleAccount" />
                                            </div>
                                        </div>
                                        </div>{/* .d-flex */}
                                    </div>{/* .border */}
                                    </div>{/* .col */}
                                    <div className="col-12">
                                    <div className="border rounded-2 p-3">
                                        <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between align-items-center">
                                        <div className="tyn-media-group w-100">
                                            <div className="tyn-media text-bg-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                            </svg>{/* facebook */}
                                            </div>{/* .tyn-media */}
                                            <div className="tyn-media-col">
                                            <h6 className="name">Facebook Account</h6>
                                            <span className="content">You can connect with your facebook account.</span>
                                            </div>
                                        </div>{/* .tyn-media-group */}
                                        <div className="ms-5 mt-3 mt-sm-0 ms-sm-0"><button className="btn btn-sm btn-primary ms-2">Connect</button></div>
                                        </div>{/* .d-flex */}
                                    </div>{/* .border */}
                                    </div>{/* .col */}
                                </div>{/* .row */}
                                </div>{/* .col */}
                            </div>{/* .row */}
                            </div>{/* .col */}
                        </div>{/* .row */}
                        </div>{/* .tab-pane */}
                    </div>{/* .tab-content */}
                    </div>{/* .tyn-profile-details */}
                </div>{/* .tyn-profile */}
                </div>{/* .container */}
            </div>{/* .tyn-main */}
        </div>
    );
}

export default Profile;