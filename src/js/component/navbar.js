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
									</ul>
									<Link to="/favorites">
										<button type="button" className="btn btn-warning btn-lg m-3"> Favorites 
										         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-bookmark-heart" viewBox="0 0 16 16">
												 <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
												 <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
												 </svg>
									     </button>
									</Link>
									
									</div>
								</div>
					</nav>
					
					</div>
	);
};
