import { Routes, Route } from "react-router-dom";

import {Inicial, SobreNos, Erro404 } from "./pages";
import { LayoutPadrao } from "./layouts";

const Router = () => {
    return(
        <Routes>

            <Route path="/" element={<LayoutPadrao/>}>

            <Route path="/" element={<Inicial/>}/>
            <Route path="/sobre-nos" element={<SobreNos/>}/>

            <Route path="*" element={<Erro404/>}/>

            </Route>

        </Routes>
    )
}

export {Router}; 