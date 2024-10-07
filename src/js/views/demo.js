import React from "react";
import "../../styles/demo.css";
import { Link } from "react-router-dom";

export const Demo = () => {

	return ( <div className="Container"> 
		<div id="carouselExampleIndicators" className="carousel slide">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
					<img src='https://images.hdqwalls.com/download/darth-vader-hallway-e9-3840x2400.jpg' className="d-block w-100" alt="..."/>
					<div className="carousel-caption d-md-block">
						<div className="boton">
					 <Link to="/people">
					   <button type="button" className="btn btn-outline-danger">CHARACTERS</button>
					</Link> 
						</div>
						</div>
					</div>
					<div className="carousel-item">
					<img src='https://wallpapercave.com/wp/wp8179249.jpg' className="d-block w-100" alt="..."/>
					<div className="carousel-caption d-md-block">
						<div className="boton">
					 <Link to="/planets">
					   <button type="button" className="btn btn-outline-info">PLANETS</button>
					</Link> 
						</div>
						</div>
					</div>
					<div className="carousel-item">
					<img src='https://img5.goodfon.com/wallpaper/nbig/1/63/zvezda-smerti-2-boevaia-stantsiia-shattl-t-4a-tipa-liambda-i.jpg' className="d-block w-100" alt="..."/>
					<div className="carousel-caption d-md-block">
						<div className="boton">
					 <Link to="/vehicles">
					   <button type="button" className="btn btn-outline-primary">VEHICLES</button>
					</Link> 
						</div>
						</div>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
				</div>


</div>


);
};
