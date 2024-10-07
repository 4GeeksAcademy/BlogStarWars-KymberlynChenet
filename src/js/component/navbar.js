import React from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.css";

export const Navbar = () => {
	return ( <div className="Container">  
	
	               <div className="d-flex justify-content-center"> 
					 <img src="https://m.media-amazon.com/images/S/aplus-media/vc/c681ecf0-09d5-428d-bea8-2340e1e57f1e.__CR0,0,2910,900_PT0_SX970_V1___.jpg"></img>
 					</div> 

					<nav className="navbar navbar-expand-lg bg-body-tertiary">
								<div className="container-fluid">
									<div className="collapse navbar-collapse" id="navbarSupportedContent">
									<ul className="navbar-nav me-auto mb-lg-0">
										<li className="nav-item">
										<Link to="/demo"><button type="button" className="btn btn-outline-warning btn-lg m-3">HOME</button></Link>
										</li>
										<li className="nav-item">
										<Link to="/people"><button type="button" className="btn btn-outline-warning btn-lg m-3">CHARACTERS</button></Link>
										</li>
										<li className="nav-item">
										<Link to="/planets"><button type="button" className="btn btn-outline-warning btn-lg m-3">PLANETS</button></Link>
										</li>
										<li className="nav-item">
										<Link to="/vehicles"><button type="button" className="btn btn-outline-warning btn-lg m-3">VEHICLES</button></Link>
										</li>






										<ul className="dropdown-menu">
											<li><a className="dropdown-item" href="#">Action</a></li>
											<li><a className="dropdown-item" href="#">Another action</a></li>
											<li><hr className="dropdown-divider"></hr></li>
											<li><a className="dropdown-item" href="#">Something else here</a></li>
										</ul>
							
						
		
									</ul>
									<form className="d-flex" role="search">
										<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
										<button className="btn btn-outline-success" type="submit">Search</button>
									</form>
									</div>
								</div>
								</nav>
		</div>
	);
};
