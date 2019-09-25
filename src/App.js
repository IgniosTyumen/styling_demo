import React from 'react';
import './App.scss';
import {RouteCard} from "./components/RouteCard/RouteCard";
import {TicketPreview} from "./components/TicketPreview/TicketPreview";
import {Loader} from "./components/Loader/Loader";
import {RouteSelector} from "./components/RouteSelector/RouteSelector";

function App() {
  return (
    <div className="App">
      <RouteCard/>
      ожидание оплаты
    <TicketPreview/>
    оплаченный
    <TicketPreview payed/>
    <Loader/>
    <RouteSelector/>
    </div>
  );
}

export default App;
