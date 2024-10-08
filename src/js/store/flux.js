const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			planets: [],
			vehicles: [],
            favorites: [],
			personDetails: {},   
            planetDetails: {},   
            vehicleDetails: {}   
			
		},
		actions: {
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getPeople: async () => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/people/`);
                    const data = await response.json();
                    setStore({ people: data.results });
                } catch (error) {
                    console.error("Error fetching people:", error);
                }
            },

			getPlanets: async () => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/planets`);
                    const data = await response.json();
                    setStore({ planets: data.results });
                } catch (error) {
                    console.error("Error fetching planets:", error);
                }
            },

			getVehicles: async () => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/vehicles`);
                    const data = await response.json();
                    setStore({ vehicles: data.results });
                } catch (error) {
                    console.error("Error fetching vehicles:", error);
                }
            },

			 
			 getPersonDetails: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
                    const data = await response.json();
                    setStore({ personDetails: data.result.properties });
                } catch (error) {
                    console.error("Error fetching person details:", error);
                }
            },

            
            getPlanetDetails: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
                    const data = await response.json();
                    setStore({ planetDetails: data.result.properties });
                } catch (error) {
                    console.error("Error fetching planet details:", error);
                }
            },

            
            getVehicleDetails: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
                    const data = await response.json();
                    setStore({ vehicleDetails: data.result.properties });
                } catch (error) {
                    console.error("Error fetching vehicle details:", error);
                }
            },

            addToFavorites: (item, imageUrl) => {

                const store = getStore();
                if (!store.favorites.find(fav => fav.uid === item.uid)) {
                    const newItem ={
                        ...item,
                        imageUrl
                    }
                    setStore({ favorites: [...store.favorites, newItem] });
                }
            },

            removeFromFavorites: (uid) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter(fav => fav.uid !== uid);
                setStore({ favorites: updatedFavorites });
            },
        
		
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
