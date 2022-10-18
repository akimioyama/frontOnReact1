import React from "react";
import { useState, useEffect } from "react";
import MyButton from "./UI/button/MyButton";
import DropList from "./UI/droplist/DropList";
import MyLable from "./UI/lable/MyLable";

const PostFormWithoutID = ({ find }) => {
  const [citisAll, setCitisAll] = useState([]);
  const [streetAll, setStreetAll] = useState([]);
  const [houseAll, setHouseAll] = useState([]);
  const [apartAll, setApartAll] = useState([]);
  const [person, setPerson] = useState({
    city: "",
    street: "",
    house: "",
    apart: "",
  });
  const findPost = (e) => {
    e.preventDefault();
    const axios = require("axios").default;
    axios.get("http://localhost:47127/api/users/" + person.city + "/" + person.street +"/"
    + person.house + "/" + person.apart)
    .then(function (response) {
      const newPost = {
        id: response.data[2],
        fio: response.data[0],
        price: response.data[1],
        pd: response.data[3]
      };
      find(newPost);
    }).catch(function (error) {
      console.log(error)
    });
  };


  useEffect(() => {
    const axios = require("axios").default;
    axios.get("http://localhost:47127/api/users/c").then(function (response) {
      setCitisAll(response.data);
    }).catch(function (error) {
      console.log(error)
    });
  }, []);

  const changeCitis = (temp) => {
    console.log();
    setPerson({
      city: temp,
      street: "",
      house: "",
      apart: ""
    });
    const axios = require("axios").default;
    axios.get("http://localhost:47127/api/users/c/" + temp)
    .then(function (response) {
      setStreetAll(response.data);
    }).catch(function (error) {
      console.log(error)
    });
  };



  const changeStreets = (temp) => {
    setPerson({
      city: person.city,
      street: temp,
      house: "",
      apart: ""
    })
    const axios = require("axios").default;
    axios.get("http://localhost:47127/api/users/cs/" + person.city + "/" + temp)
    .then(function (response) {
      setHouseAll(response.data);
    }).catch(function (error) {
      console.log(error)
    });
  };


  const changeHouses = (temp) => {
    setPerson({
      city: person.city,
      street: person.street,
      house: temp,
      apart: ""
    })
    const axios = require("axios").default;
    axios.get("http://localhost:47127/api/users/csh/" + person.city + "/" + person.street + "/" + temp)
    .then(function (response) {
      setApartAll(response.data);
    }).catch(function (error) {
      console.log(error)
    });
  };

  const changeAparts = (temp) => {
    setPerson({
      city: person.city,
      street: person.street,
      house: person.house,
      apart: temp
    })
  };

  return (
    <form className="form">
      <div className="formwithoutid">
        <div className="citis">
          <MyLable children="Город" />
          <br />
          <DropList
            defaultValue=""
            data={citisAll}
            value={person.city}
            onChange={changeCitis}
          />
        </div>
        <div className="streetAndHouse">
          <div className="left">
            <MyLable children="Улица" />
            <br />
            <DropList
              defaultValue=""
              data={streetAll}
              value={person.street}
              onChange={changeStreets}
            />
          </div>

          <div className="rigth">
            <MyLable children="Дом" />
            <br />
            <DropList
              defaultValue=""
              data={houseAll}
              value={person.house}
              onChange={changeHouses}
            />
          </div>
        </div>

        <div className="apart">
          <MyLable children="Квартира" />
          <br />
          <DropList
            defaultValue=""
            data={apartAll}
            value={person.apart}
            onChange={changeAparts}
          />
        </div>
      </div>
      <div className="formID_btn">
        <MyButton onClick={findPost}>Найти</MyButton>
      </div>
      <div>
        <hr className="root_hr" color="teal" />
      </div>
    </form>
  );
};

export default PostFormWithoutID;
