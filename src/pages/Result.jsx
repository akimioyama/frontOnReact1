import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/Cheque.css';
import QRCode from "react-qr-code";

function Result() {

  const [data, setData] = useState([])
  const {id} = useParams();
  
  useEffect(() => {
    const axios = require("axios").default;
    axios.get("http://172.20.10.2:47127/api/users/qwe/" + id)
    .then(function (response) {
      console.log(response.data)
      setData(response.data)
      var qwe = "t=" + data.date + "&s=" + data.price + "&fn=" + data.fsNumber
      + "&fp" + data.fp + "&n=1"
      console.log(qwe)
    })
  }, [])
  var qrstring = "t=" + data[2] + "&s=" + data[8] + "&fn=" + data[6]
  + "&fp" + data[9] + "&n=1"
  console.log(qrstring)

  return (
    <div className="App">
        <div className="myModalContent">
        <div className="header">
          <h3>Кассовый чек / Приход</h3>
        </div>
        <div className="name">ООО "{data[1]}"</div>
        <div className="fn">
          <div>Фискальный документ:</div>
          <div>№ {data[3]}</div>
        </div>
        <div className="fn">
          <div>Дата выдачи:</div>
          <div>{data[2]}</div>
        </div>
        <div className="fn">
          <div>Номер смены:</div>
          <div>№ {data[4]}</div>
        </div>
        <div className="fn">
          <div>Номер документа:</div>
          <div>№ {data[5]}</div>
        </div>
        <div className="fn">
          <div>Номер ФН:</div>
          <div>{data[6]}</div>
        </div>
        <div className="fn">
          <div>ОФД ИНН:</div>
          <div>{data[7]}</div>
        </div>
        <br />
        <div className="qr">
        <QRCode 
          className="mx-auto mt-20"
          value={qrstring}
          // value={'http://172.20.10.2:3000/posts/' + id} 
        />
        </div>
        <br />
        <div className="fn">
          <div>Продукт:</div>
          <div>Оплата водоснобжения по ЛC {data[9]}</div>
        </div>
        <div className="fn">
          <div>Сумма к оплате:</div>
          <div>{data[8]} рублей, НДС 20%</div>
        </div>
      </div>
    </div>
  );
}

export default Result;