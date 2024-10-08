import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Favorites = () => {
    const { store, actions } = useContext(Context);


    return (
        <div className="container-favorites" style={{
            backgroundImage: `url('https://cdn.pixabay.com/animation/2023/03/19/02/34/02-34-11-741_512.gif')`,
            backgroundSize: "cover", 
            backgroundPosition: "center",
            backgroundRepeat: "repeat", 
        }}>
            
            <table className="table-warning">SAVED</table>
            <div className="row">
                {store.favorites.length > 0 ? (
                    store.favorites.map((item, index) => {
                        return (
                            <div key={index} className="col-2 m-1 ms-5 mb-5">
                                <div className="card">
                                    <img src={item.imageUrl} alt={item.name} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <Link to={`/details/${item.type}/${item.uid}`} className="btn btn-outline-danger m-4">
                                            View Details
                                        </Link>
                                        <button
                                            className="btn btn-outline-danger"
                                            onClick={() => actions.removeFromFavorites(item.uid)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <table className="table-warning">No items saved for later</table>
                )}
            </div>
        </div>
    );
};

export default Favorites;
