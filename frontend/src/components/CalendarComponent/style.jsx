import styled from "styled-components";

export default styled.form`
  display: flex;
  flex-direction: column;

  .react-datepicker {
    background-color: var(--main-color);
    /* height: 26vh; */
    border: none;
    margin-top: 5vh;
    width: 90vw;
  }

  .react-datepicker > div {
    width: 100%;
  }

  .react-datepicker__current-month {
    margin-bottom: 1rem;
  }

  .react-datepicker__day-names {
    background-color: #c4c4c4;
  }

  .react-datepicker__day {
    width: 13%;
    height: 2.5rem;
  }
  .react-datepicker__day-name {
    width: 11.7%;
  }

  .react-datepicker__week > div {
    border: 0.5px black solid;
    margin: 0%;
  }

  .react-datepicker__header {
    border: none;
    background-color: var(--main-color);
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border: none;
  }
  .react-datepicker__day--disabled {
    color: rgba(0, 0, 0, 0.25);
  }

  .react-datepicker__month {
    background-color: #c4c4c4;
    box-sizing: border-box;
  }

  .selectedDate {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
  }

  .container {
    display: flex;
    height: 14vh;
    flex-direction: column;
    align-items: center;
    background: #c4c4c4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 19px;
    margin-top: 10rem;
  }

  .reservation {
    box-sizing: border-box;
    width: 224.24px;
    height: 61px;
    left: 1140.65px;
    top: 639px;
    background: #f77777;
    border: 1px solid #ffffff;
    border-radius: 27px;
    font-size: 1.3rem;
    color: #ffffff;
  }
`;
