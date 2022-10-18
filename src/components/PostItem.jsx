import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  const [payw, setPayw] = useState({});

  const paypay = (e) => {
    e.preventDefault();

    String.prototype.hashCode = function () {
      var hash = 0,
        i,
        chr;
      if (this.length === 0) return hash;
      for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
    };

    const str = props.info.price + props.info.id + props.info.pd;

    console.log(
      'https://pay.pay-ok.org/demo/?REQ={"PAY_ID": "' +
        str.hashCode() +
        '","PAY_ACTION": "REG","PAY_DATE": "' +
        Date.now() +
        '","PAY_EMAIL": "","PAY_LS": "' +
        props.info.id +
        '","PAY_ITOG":"17359","PAY_NAME": "Оплата водопотребления л/с ' +
        props.info.id +
        '"}'
    );

    // const axios = require("axios").default;
    // axios.default.headers.get['Access-Control-Allow-Origin'] = '*';
    // axios
    //   .get(
    //     'https://pay.pay-ok.org/demo/?REQ={"PAY_ID": "' +
    //       str.hashCode() +
    //       '","PAY_ACTION": "REG","PAY_DATE": "' +
    //       Date.now() +
    //       '","PAY_EMAIL": "","PAY_LS": "' +
    //       props.info.id +
    //       '","PAY_ITOG":"17359","PAY_NAME": "Оплата водопотребления л/с ' +
    //       props.info.id +
    //       '"}'
    //   )
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     console.log("done");
    //   });

    // console.log(
    //   'https://pay.pay-ok.org/demo/?REQ={"PAY_ID": "' +
    //     str.hashCode() +
    //     '","PAY_ACTION": "GET_INFO"}'
    // );

    let respons = fetch(
      'https://pay.pay-ok.org/demo/?REQ={"PAY_ID": "' +
        str.hashCode() +
        '","PAY_ACTION": "REG","PAY_DATE": "' +
        Date.now() +
        '","PAY_EMAIL": "","PAY_LS": "' +
        props.info.id +
        '","PAY_ITOG":"17359","PAY_NAME": "Оплата водопотребления л/с ' +
        props.info.id +
        '"}',
      {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
      }
    );
    // console.log(respons)
    let newrespons = fetch(
      'https://pay.pay-ok.org/demo/?REQ={"PAY_ID": "' +
        str.hashCode() +
        '","PAY_ACTION": "GET_INFO"}',
      {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
      }
    )
    console.log(newrespons)
  };

  return (
    <div className="item">
      <div className="item_header">
        <h3>{/* {props.info.fio} */}</h3>
      </div>
      <div className="item_body">
        <div className="item_body_symma">
          <div>
            Сумма к оплате:
            <span className="symma">{props.info.price}</span>
          </div>
        </div>
      </div>
      <div className="item_footer">
        <MyButton onClick={paypay}> Оплатить </MyButton>
      </div>
    </div>
  );
};
export default PostItem;
