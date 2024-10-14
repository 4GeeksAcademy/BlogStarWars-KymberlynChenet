import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/demo.css";

const GetVehicles = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getVehicles(); 
    }, []);

    return (
        <div className="container-getVehicles" style={{
            backgroundImage: `url('https://cdn.pixabay.com/animation/2023/03/19/02/34/02-34-11-741_512.gif')`,
            backgroundSize: "cover", 
            backgroundPosition: "center",
            backgroundRepeat: "repeat", 
        }}>

            <div className="row">
                {store.vehicles.length > 0 ? (
                    store.vehicles.map((vehicle, index) => { 
                       
        const imageUrl = `https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`;
                 return ( 
                    <div key={index} className="col-2 m-1 ms-5 mb-5">
                            <div className="card">
                            <img src={imageUrl} alt={vehicle.name} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{vehicle.name}</h5>
                                    <Link to={`/details/vehicles/${vehicle.uid}`} className="btn btn-outline-info">
                                        View Details
                                    </Link>
                                    <button className="btn btn-outline-danger d-flex justify-content-around mt-3"
                                        onClick={() => actions.addToFavorites(vehicle, imageUrl)}
                                    >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                                            <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                            </svg>
                                    </button>

                                </div>
                            </div>
                        </div>)
                    })
                ) : (
                    <div>
                        <div className="spinner-grow text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                   </div>
                )}
            </div>
        </div>
    );
};

export default GetVehicles;
