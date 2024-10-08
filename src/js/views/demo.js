import React from "react";
import "../../styles/demo.css";
import { Link } from "react-router-dom";


const Demo = () => {

	return ( <div className="Container" style={{
		backgroundImage: `url('https://cdn.pixabay.com/animation/2023/03/19/02/34/02-34-11-741_512.gif')`,
		backgroundSize: "cover", 
		backgroundPosition: "center",
		backgroundRepeat: "repeat", 
	}}>  
				<div className="container text-center ">
			<div className="row">
				<div className="col mt-5">
					<Link to="/people">
					   <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462540486_1538090874254245_1373256494612479317_n.jpg?stp=dst-jpg_s403x403&_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Rx5goauNoEMQ7kNvgE4zhIc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=AutgFeIVkKYR8d1mXNJLPUo&oh=03_Q7cD1QFjdJUAOvvaMViFbyTDyV9piWGgdTna24xHliHat7-W3Q&oe=672D2D58" className="img-thumbnail" alt="..."/>
					</Link>
				</div>
				<div className="col  mt-5">
					<Link to="/planets">
                       <img src="https://scontent.fmad15-1.fna.fbcdn.net/v/t1.15752-9/462540918_1702205973895952_8597068637886813766_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=80wumYfjP74Q7kNvgE_u9DN&_nc_ht=scontent.fmad15-1.fna&_nc_gid=AZRd6qon9MFaw-BYnshuHtx&oh=03_Q7cD1QFWw64LC9GJ3vIGON6YtUh6lfDls__kYNgRmIrq3AKZhQ&oe=672D0D26" className="img-thumbnail" alt="..."/>
				    </Link>
				</div>
				<div className="col  mt-5">
					<Link to="/vehicles">
                      <img src="https://scontent.fmad15-1.fna.fbcdn.net/v/t1.15752-9/461646583_405842225707976_6039383370113596273_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=XzScsl5n72YQ7kNvgENC4_J&_nc_ht=scontent.fmad15-1.fna&_nc_gid=AmynbhB3Nk5jg0FmtBhX_N1&oh=03_Q7cD1QFgUGMvRZzbCR7Q_PeedYelbQoBkbn1vqYqKyjHqr9MgQ&oe=672D42B9" className="img-thumbnail" alt="..."/>
                     </Link>
				</div>
			</div>
			</div> 
	     <div> 
        </div>


</div>
     

);
};

export default Demo
