import React from "react";
import { Greet } from "./components/Greet";
import { Card, CardContent } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fruit } from "./components/Fruit";
import { Monument } from "./components/Monument";
import { Speedo } from "./components/Speedo";
import { Navlist } from "./components/Navlist";

function App() {
  return (
    <Card sx={{ bgcolor: "lightgoldenrodyellow" }}>
      <CardContent>
        <BrowserRouter>
          <Navlist />
          <Routes>
            <Route path="/" element={<Greet />} />
            <Route path="/fruit" element={<Fruit />} />
            <Route path="/monument" element={<Monument />} />
            <Route path="/speedo" element={<Speedo />} />
          </Routes>
        </BrowserRouter>
      </CardContent>
    </Card>
  );
}

export default App;
