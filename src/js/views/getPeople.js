import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const GetPeople = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPeople(); // Llamamos a la acción para obtener los datos de personas
    }, []);

    return (
        <div className="container">
            <h1>People</h1>
            <div className="row">
                {store.people.length > 0 ? (
                    store.people.map((person, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">{person.name}</h5>
                                    {/* Link para acceder a los detalles */}
                                    <Link to={`/details/people/${person.uid}`} className="btn btn-primary">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading people...</p>
                )}
            </div>
        </div>
    );
};

export default GetPeople;
