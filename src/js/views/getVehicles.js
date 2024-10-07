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
            backgroundImage: `url('https://static-mapetitemercerie.o10c.net/114082-thickbox_default/flex-thermocollant-paillettes-noir-x-10-cm.jpg')`,
            backgroundSize: "cover", 
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", 
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
                                </div>
                            </div>
                        </div>)
                    })
                ) : (
                    <p>Loading vehicles...</p>
                )}
            </div>
        </div>
    );
};

export default GetVehicles;
