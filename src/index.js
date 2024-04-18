import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Allbook from "./Allbook";
import Bookdetails from "./Bookdetail";
import Form from "./Form";
import Home from "./Home";
import Layout from "./Layout";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/Allbook" element={<Allbook />}></Route>
        <Route path="/Bookdetail/:Id" element={<Bookdetails />}></Route>
        <Route path="/Allbook/Add" element={<Form />}></Route>
        <Route path="/Allbook/Edit/:Id" element={<Form />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
