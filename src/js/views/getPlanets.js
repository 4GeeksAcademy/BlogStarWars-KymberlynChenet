import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/demo.css";

const GetPlanets = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPlanets(); 
    }, []);

    return (
        <div className="container-getPlanets" style={{
            backgroundImage: `url('https://static-mapetitemercerie.o10c.net/114082-thickbox_default/flex-thermocollant-paillettes-noir-x-10-cm.jpg')`,
            backgroundSize: "cover", 
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", 
        }}>
            <div className="row">
                {store.planets.length > 0 ? (
                    store.planets.map((planet, index) => {

                        const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`;

                       return (
                       <div key={index} className="col-2 m-1 ms-5 mb-5">
                            <div className="card">
                            <img src={imageUrl} alt={planet.name} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{planet.name}</h5>
                                    <Link to={`/details/planets/${planet.uid}`} className="btn btn-outline-primary">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                       )
                     })
                ) : (
                    <p>Loading planets...</p>
                )}
            </div>
        </div>
    );
};

export default GetPlanets;
