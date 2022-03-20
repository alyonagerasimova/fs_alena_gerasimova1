import './App.css';
import './module/components/forms.css';
import React from "react";
import {AnimalCreate} from "./module/components/AnimalCreate";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AnimalEdit} from "./module/components/AnimalEdit";
import {Home} from './module/components/Home';

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/create" element={
                    <div className="container">
                        <div className="content">
                            <AnimalCreate/>
                        </div>
                    </div>}>
                </Route>
                <Route path="/pet/:id" element={
                    <div className="container">
                        <div className="content">
                            <AnimalEdit/>
                        </div>
                    </div>
                }/>
            </Routes>
        </BrowserRouter>
    );
}
