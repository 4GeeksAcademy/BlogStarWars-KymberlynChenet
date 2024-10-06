import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const GetVehicles = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getVehicles(); // Llamamos a la acción para obtener los datos de vehículos
    }, []);

    return (
        <div className="container">
            <h1>Vehicles</h1>
            <div className="row">
                {store.vehicles.length > 0 ? (
                    store.vehicles.map((vehicle, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">{vehicle.name}</h5>
                                    <Link to={`/details/vehicles/${vehicle.uid}`} className="btn btn-primary">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading vehicles...</p>
                )}
            </div>
        </div>
    );
};

export default GetVehicles;
