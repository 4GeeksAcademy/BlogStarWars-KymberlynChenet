import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/demo.css";

const GetPeople = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPeople(); 
    }, []);

    return (
        <div className="container-getPeople"  style={{
            backgroundImage: `url('https://static-mapetitemercerie.o10c.net/114082-thickbox_default/flex-thermocollant-paillettes-noir-x-10-cm.jpg')`,
            backgroundSize: "cover", 
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", 
        }}>   
            <div className="row">
                {store.people.length > 0 ? (
                    store.people.map((person, index) => {
                        const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`;   
                      
                        return (
                       <div key={index} className="col-2 m-1 ms-5 mb-5">
                                <div className="card">
                                        <img src={imageUrl} alt={person.name} className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">{person.name}</h5>
                                    <Link to={`/details/people/${person.uid}`} className="btn btn-outline-danger">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                      )
                    })
                ) : (
                    <p>Loading people...</p>
                )}
            </div>
        </div>
    );
};

export default GetPeople;
