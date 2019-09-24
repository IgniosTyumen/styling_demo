import React from 'react';
import './App.css';
import {RouteCard} from "./components/RouteCard/RouteCard";
import {TicketPreview} from "./components/TicketPreview/TicketPreview";
import {Loader} from "./components/Loader/Loader";

function App() {
  return (
    <div className="App">
      <RouteCard/>
      <RouteCard/>
    <TicketPreview/>
    <TicketPreview payed/>
    <Loader/>
    </div>
  );
}

export default App;
