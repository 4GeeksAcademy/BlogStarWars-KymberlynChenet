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
			personDetails: {},   // Detalles de una persona específica
            planetDetails: {},   // Detalles de un planeta específico
            vehicleDetails: {}   // Detalles de un vehículo específico
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getPeople: async () => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/people`);
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

			 // Fetch details of a specific person
			 getPersonDetails: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
                    const data = await response.json();
                    setStore({ personDetails: data.result.properties });
                } catch (error) {
                    console.error("Error fetching person details:", error);
                }
            },

            // Fetch details of a specific planet
            getPlanetDetails: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
                    const data = await response.json();
                    setStore({ planetDetails: data.result.properties });
                } catch (error) {
                    console.error("Error fetching planet details:", error);
                }
            },

            // Fetch details of a specific vehicle
            getVehicleDetails: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
                    const data = await response.json();
                    setStore({ vehicleDetails: data.result.properties });
                } catch (error) {
                    console.error("Error fetching vehicle details:", error);
                }
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
