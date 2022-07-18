import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker, { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { subDays } from "date-fns";
import SCalendarComponent from "./style";

registerLocale("fr", fr);

moment.locale("fr", {
  months:
    "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
      "_"
    ),
  weekdays: "Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi".split("_"),
  longDateFormat: {
    LLLL: "dddd D MMMM YYYY",
  },
});

function CalendarComponent() {
  const [startDate, setStartDate] = useState(new Date());
  const [isSelected, setIsSelected] = useState(false);
  const [isBook, setIsBook] = useState([]);

  const onChange = (date) => {
    setStartDate(date);
    setIsSelected(true);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/calendar`)
      .then(({ data }) => {
        setIsBook(data);
      });
  }, []);

  const hSubmit = (evt) => {
    evt.preventDefault();
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/calendar`, {
      myDate: startDate.toISOString().split("T")[0],
    });
  };

  if (!isBook.length) {
    return null;
  }

  return (
    <SCalendarComponent>
      <DatePicker
        locale="fr"
        selected={startDate}
        onChange={onChange}
        highlightDates={isBook.map((event) =>
          subDays(new Date(event.date_event), 0)
        )}
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
