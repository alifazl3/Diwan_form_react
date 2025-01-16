import React from "react";
import ReactDOM from "react-dom/client"; // Use the correct import for createRoot
import App from "./App";
import "./i18n"; // Import i18n configuration

const root = ReactDOM.createRoot(document.getElementById("root")); // Initialize root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
