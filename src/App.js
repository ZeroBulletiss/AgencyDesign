import React from "react";
import { NavBar } from "./components/NavBar";
import Hero from "./components/Hero";
import { Box } from "@chakra-ui/react";
import { Fonts } from "./components/Fonts";
import { Footer } from "./components/Footer";
import { WhatWeDo } from "./components/WhatWeDo";
import { Portfolio } from "./components/Portfolio";
import { Infos } from "./components/Infos";

function App() {
    return (
        <Box>
            <Fonts />
            <NavBar />
            <Hero />
            <WhatWeDo />
            <Infos />
            <Portfolio />
        </Box>
    );
}

export default App;
