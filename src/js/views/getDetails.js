import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Details = () => {
    const { store, actions } = useContext(Context);
    const { type, id } = useParams(); 

    useEffect(() => {
       
        if (type === "people") {
            actions.getPersonDetails(id);
        } else if (type === "planets") {
            actions.getPlanetDetails(id);
        } else if (type === "vehicles") {
            actions.getVehicleDetails(id);
        }
    }, [type, id]);

    
    let details;
    if (type === "people") {
        details = store.personDetails;
    } else if (type === "planets") {
        details = store.planetDetails;
    } else if (type === "vehicles") {
        details = store.vehicleDetails;
    }

    
    if (!details || Object.keys(details).length === 0) {
        return <div>Loading details...</div>; 
    }

    return (
        <div className="container">
            <h1>{details.name}</h1>
            <ul>
                {type === "people" && (
                    <>
                        <li><strong>Birth Year:</strong> {details.birth_year}</li>
                        <li><strong>Height:</strong> {details.height}cm</li>
                        <li><strong>Mass:</strong> {details.mass}kg</li>
                        <li><strong>Gender:</strong> {details.gender}</li>
                        <li><strong>Hair Color:</strong> {details.hair_color}</li>
                        <li><strong>Skin Color:</strong> {details.skin_color}</li>
                        <li><strong>Eye Color:</strong> {details.eye_color}</li>
            
                    </>
                )}

                {type === "planets" && (
                    <>
                        <li><strong>Population:</strong> {details.population}</li>
                        <li><strong>Rotation Period:</strong> {details.rotation_period} days</li>
                        <li><strong>Orbital Period:</strong> {details.orbital_period} days</li>
                        <li><strong>Diameter:</strong> {details.diameter}km</li>
                        <li><strong>Gravity:</strong> {details.gravity}</li>
                        <li><strong>Terrain:</strong> {details.terrain}</li>
                        <li><strong>Surface Water:</strong> {details.surface_water}%</li>
                        <li><strong>Climate:</strong> {details.climate}</li>

                        
                    </>
                )}

                {type === "vehicles" && (
                    <>
                        <li><strong>Model:</strong> {details.model}</li>
                        <li><strong>Manufacturer:</strong> {details.manufacturer}</li>
                        <li><strong>Class:</strong> {details.vehicle_class}</li>
                        <li><strong>Cost:</strong> {details.cost_in_credits} credits</li>
                        <li><strong>Speed:</strong> {details.max_atmosphering_speed}km/h</li>
                        <li><strong>Length:</strong> {details.length}m</li>
                        <li><strong>Cargo Capacity:</strong> {details.cargo_capacity}kg</li>
                        <li><strong>Mimimum Crew:</strong> {details.crew}</li>
                        <li><strong>Passengers:</strong> {details.passengers}</li>
                        
                    </>
                )}
            </ul>
        </div>
    );
};

export default Details;
