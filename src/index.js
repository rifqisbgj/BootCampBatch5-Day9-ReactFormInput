import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import MyForm from "./Form";

const nav = document.getElementById("nav");
// meminta React untuk ambil kendali atas id root pada HTML
const navigation = ReactDOM.createRoot(nav);
navigation.render(<Nav />);

const form = document.getElementById("form");
const formInput = ReactDOM.createRoot(form);
formInput.render(<MyForm />);
