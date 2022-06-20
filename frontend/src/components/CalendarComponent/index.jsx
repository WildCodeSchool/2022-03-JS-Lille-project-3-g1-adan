import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import SCalendarComponent from "./style";

moment.locale("fr", {
  months:
    "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
      "_"
    ),
  monthsShort:
    "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
  monthsParseExact: true,
  weekdays: "Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi".split("_"),
  weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
  weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY",
  },
  // calendar: {
  //   sameDay: "[Aujourd’hui à] LT",
  //   nextDay: "[Demain à] LT",
  //   nextWeek: "dddd [à] LT",
  //   lastDay: "[Hier à] LT",
  //   lastWeek: "dddd [dernier à] LT",
  //   sameElse: "L",
  // },
  // relativeTime: {
  //   future: "dans %s",
  //   past: "il y a %s",
  //   s: "quelques secondes",
  //   m: "une minute",
  //   mm: "%d minutes",
  //   h: "une heure",
  //   hh: "%d heures",
  //   d: "un jour",
  //   dd: "%d jours",
  //   M: "un mois",
  //   MM: "%d mois",
  //   y: "un an",
  //   yy: "%d ans",
  // },
  // dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
  // ordinal(number) {
  //   return number + (number === 1 ? "er" : "e");
  // },
  // meridiemParse: /PD|MD/,
  // isPM(input) {
  //   return input.charAt(0) === "M";
  // },

  // meridiem(hours, minutes, isLower) {
  //   return hours < 12 ? "PD" : "MD";
  // },
  // week: {
  //   dow: 1, // Monday is the first day of the week.
  //   doy: 4, // Used to determine first week of the year.
  // },
});

function CalendarComponent() {
  const [startDate, setStartDate] = useState(new Date());
  const [isSelected, setIsSelected] = useState(false);

  const onChange = (date) => {
    setStartDate(date);
    setIsSelected(true);
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    axios.post("http://localhost:5000/projects", {
      myDate: startDate.toISOString().split("T")[0],
    });
  };

  return (
    <SCalendarComponent>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        minDate={new Date()}
        inline
      />
      {isSelected === true ? (
        <div className="container">
          <div className="selectedDate">
            {moment(startDate).locale("fr").format("LLLL")}
          </div>
          <button className="reservation" type="submit" onClick={hSubmit}>
            PROPOSER UN EVENEMENT
          </button>
        </div>
      ) : null}
    </SCalendarComponent>
  );
}

export default CalendarComponent;
