import styled from "styled-components";

export default styled.form`
  display: flex;
  flex-direction: column;

  .legende {
    margin: auto;
    margin-top: 0.5rem;
  }
  .react-datepicker {
    background-color: var(--main-color);
    border: none;
    margin-top: 5vh;
    width: 90vw;
  }

  .react-datepicker > div {
    width: 100%;
  }

  .react-datepicker__current-month {
    margin-bottom: 1rem;
    color: white;
    font-size: 1.4rem;
  }

  .react-datepicker__day-names {
    background-color: #c4c4c4;
    border-top-left-radius: 19px;
    border-top-right-radius: 19px;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: bold;
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
    padding: 0;
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
    margin: 0;
    border-bottom-left-radius: 19px;
    border-bottom-right-radius: 19px;
    padding-bottom: 0.5rem;
  }

  .selectedDate {
    font-family: "Raleway";
    font-style: normal;
    text-align: center;
    padding-top: 0.7rem;
    padding-bottom: 1.8rem;
    font-weight: bold;
  }

  .container {
    display: flex;
    height: 20vh;
    flex-direction: column;
    align-items: center;
    background: #c4c4c4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 19px;
    margin-top: 3rem;
  }

  .reservation {
    box-sizing: border-box;
    height: 4rem;
    width: 80%;
    background: #f77777;
    border: 1px solid #ffffff;
    border-radius: 27px;
    font-size: 1.3rem;
    color: #ffffff;
  }

  @media screen and (min-width: 500px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;

    .legende {
      position: absolute;
      top: 90%;
      left: 4%;
    }
    .react-datepicker {
      margin-top: 5vh;
      width: 70vw;
      margin: 4vw;
    }

    .react-datepicker__month {
      padding-bottom: 1rem;
    }

    .react-datepicker__day {
      width: 13%;
      height: 4.5rem;
    }
    .react-datepicker__day-name {
      width: 12.8%;
    }
  }
`;
