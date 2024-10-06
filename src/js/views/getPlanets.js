import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const GetPlanets = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPlanets(); 
    }, []);

    return (
        <div className="container">
            <h1>Planets</h1>
            <div className="row">
                {store.planets.length > 0 ? (
                    store.planets.map((planet, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">{planet.name}</h5>
                                    <Link to={`/details/planets/${planet.uid}`} className="btn btn-primary">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading planets...</p>
                )}
            </div>
        </div>
    );
};

export default GetPlanets;
