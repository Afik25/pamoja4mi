import React from "react";
import "./schedule.css";

const Schedule = () => {
  return (
    <div className="schedule">
      <div className="container">
        <p className="t-1">Disponibilté des Pasteurs</p>
        <p className="t-2">Periode allant du 20 au 27 Mai 2024</p>
        <div className="content">
          <div className="item">
            <div className="i-head">
              <h3 className="t-1">Lundi</h3>
              <p className="t-3">20 Mai 2024</p>
            </div>
            <div className="i-body">
              <button className="button inactive">09:00 AM</button>
              <button className="button">10:00 AM</button>
              <button className="button">11:00 AM</button>
              <button className="button">12:00 PM</button>
              <button className="button active">13:00 PM</button>
              <button className="button">14:00 PM</button>
              <button className="button">15:00 PM</button>
            </div>
          </div>
          <div className="item">
            <div className="i-head">
              <h3 className="t-1">Mardi</h3>
              <p className="t-3">21 Mai 2024</p>
            </div>
            <div className="i-body">
              <button className="button">09:00 AM</button>
              <button className="button">10:00 AM</button>
              <button className="button">11:00 AM</button>
              <button className="button">12:00 PM</button>
              <button className="button">13:00 PM</button>
              <button className="button">14:00 PM</button>
              <button className="button">15:00 PM</button>
            </div>
          </div>
          <div className="item">
            <div className="i-head">
              <h3 className="t-1">Mercredi</h3>
              <p className="t-3">22 Mai 2024</p>
            </div>
            <div className="i-body">
              <button className="button">09:00 AM</button>
              <button className="button">10:00 AM</button>
              <button className="button">11:00 AM</button>
              <button className="button">12:00 PM</button>
              <button className="button">13:00 PM</button>
              <button className="button">14:00 PM</button>
              <button className="button">15:00 PM</button>
            </div>
          </div>
          <div className="item">
            <div className="i-head">
              <h3 className="t-1">Jeudi</h3>
              <p className="t-3">23 Mai 2024</p>
            </div>
            <div className="i-body">
              <button className="button">09:00 AM</button>
              <button className="button">10:00 AM</button>
              <button className="button">11:00 AM</button>
              <button className="button">12:00 PM</button>
              <button className="button">13:00 PM</button>
              <button className="button">14:00 PM</button>
              <button className="button">15:00 PM</button>
            </div>
          </div>
          <div className="item">
            <div className="i-head">
              <h3 className="t-1">Vendredi</h3>
              <p className="t-3">24 Mai 2024</p>
            </div>
            <div className="i-body">
              <button className="button">09:00 AM</button>
              <button className="button">10:00 AM</button>
              <button className="button">11:00 AM</button>
              <button className="button">12:00 PM</button>
              <button className="button">13:00 PM</button>
              <button className="button">14:00 PM</button>
              <button className="button">15:00 PM</button>
            </div>
          </div>
          <div className="item">
            <div className="i-head">
              <h3 className="t-1">Samedi</h3>
              <p className="t-3">25 Mai 2024</p>
            </div>
            <div className="i-body">
              <button className="button">09:00 AM</button>
              <button className="button">10:00 AM</button>
              <button className="button">11:00 AM</button>
              <button className="button">12:00 PM</button>
              <button className="button">13:00 PM</button>
              <button className="button">14:00 PM</button>
              <button className="button">15:00 PM</button>
            </div>
          </div>
          <div className="item">
            <div className="i-head">
              <h3 className="t-1">Dimache</h3>
              <p className="t-3">26 Mai 2024</p>
            </div>
            <div className="i-body">
              <button className="button">09:00 AM</button>
              <button className="button">10:00 AM</button>
              <button className="button">11:00 AM</button>
              <button className="button">12:00 PM</button>
              <button className="button">13:00 PM</button>
              <button className="button">14:00 PM</button>
              <button className="button">15:00 PM</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Schedule;
