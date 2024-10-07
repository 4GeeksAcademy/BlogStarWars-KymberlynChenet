import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Demo } from "./views/demo";

import GetPeople from "./views/getPeople";
import GetPlanets from "./views/getPlanets";
import GetVehicles from "./views/getVehicles";
import Details from "./views/getDetails";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/demo" element={<Demo />} />
                        <Route path="/people" element={<GetPeople />} />
                        <Route path="/planets" element={<GetPlanets />} />
                        <Route path="/vehicles" element={<GetVehicles />} />
                        <Route path="/details/:type/:id" element={<Details />} /> 
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>

                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
