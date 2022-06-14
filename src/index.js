import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
	apiKey: "AIzaSyAOIZDfXL26nK4OVzwI8jyCP1MS6M2g1X4",
	authDomain: "admin-panel-pad-project.firebaseapp.com",
	databaseURL: "https://admin-panel-pad-project-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "admin-panel-pad-project",
	storageBucket: "admin-panel-pad-project.appspot.com",
	messagingSenderId: "325831816269",
	appId: "1:325831816269:web:ab9af8af659b2a45195804"
 };
 
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
