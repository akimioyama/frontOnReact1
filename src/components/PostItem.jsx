import React, { useState } from "react";
import MyAlert from "./UI/alert/MyAlert";
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/MyModal/MyModal";

const PostItem = (props) => {
  const [pay, setPay] = useState("");
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({});
  const [vis, setVis] = useState(true);
  const [vis1, setVis1] = useState(true)

  var qq = false;
  var api;
  var idid;

  const paypay = (e) => {
    if (qq === false) {
      setVis(false);
      return;
    }
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
      return Math.abs(hash);
    };

    const str = props.info.price + props.info.id + props.info.pd;

    const axios = require("axios").default;
    var date = new Date();
    idid = str.hashCode();

    var priceprice = String(props.info.price);
    var temp = priceprice.split(",");
    var temp1 = String(temp[0]);
    temp1 = temp1.replace(/\s/g, "");
    var qqq = Number(temp1) * 100;
    var summ = qqq + temp[1];
    console.log(summ);

    // let datedate = String(date.getDate().padStart(2, '0')+'.'+String(date.getMonth()+1).padStart(2, '0') + '.'+ date.getFullYear())
    axios
      .get(
        'https://pay.pay-ok.org/demo/?REQ={"PAY_ID": "' +
          idid +
          '","PAY_ACTION": "REG","PAY_DATE": "' +
          date.toLocaleDateString() +
          '","PAY_EMAIL": "","PAY_LS": "' +
          props.info.id +
          '","PAY_ITOG":"' +
          summ +
          '","PAY_NAME": "Оплата водопотребления л/с ' +
          props.info.id +
          '"}'
      )
      .then(function (response) {
        console.log(response.data);
        const axios = require("axios").default;
        axios
          .get(
            'https://pay.pay-ok.org/demo/?REQ={"PAY_ID": "' +
              str.hashCode() +
              '","PAY_ACTION": "GET_INFO"}'
          )
          .then(function (response) {
            let res = response.data.STATUS.params.OD_PARAMS;
            let resres = JSON.parse(res);
            console.log(response.data.STATUS);

            var price1 = String(props.info.price);
            price1 = price1.replace(/\s/g, "");

            setData({
              name: resres.ofdName,
              documentNumber: resres.documentNumber,
              date: resres.processedAt,
              shiftNumber: resres.shiftNumber,
              documentIndex: resres.documentIndex,
              fsNumber: resres.fsNumber,
              ofdinn: resres.ofdinn,
              price: price1,
              about: "Оплата водоснобжения по ЛC " + props.info.id,
              idid: idid,
              fp: resres.fp,
            });
            setModal(true);
            var newdata = {
              name: resres.ofdName,
              documentNumber: resres.documentNumber,
              date: resres.processedAt,
              shiftNumber: resres.shiftNumber,
              documentIndex: resres.documentIndex,
              fsNumber: resres.fsNumber,
              ofdinn: resres.ofdinn,
              price: price1,
              about: "Оплата водоснобжения по ЛC " + props.info.id,
              idid: props.info.id,
              fp: resres.fp,
            };
            console.log(newdata);
            api =
              "http://172.20.10.2:47127/api/users/" +
              idid +
              "/" +
              newdata.name +
              "/" +
              newdata.date +
              "/" +
              newdata.documentNumber +
              "/" +
              newdata.shiftNumber +
              "/" +
              newdata.documentIndex +
              "/" +
              newdata.fsNumber +
              "/" +
              newdata.ofdinn +
              "/" +
              newdata.price +
              "/" +
              newdata.idid +
              "/" +
              newdata.fp;
            console.log(api);

            const axios = require("axios").default;
            axios.get(api).then(function (response) {
              console.log(response);
            });
          });
      });
  };
  const close = (qwe) => {
    setModal(qwe);
  };
  const aaa = (newVis) =>{
    setVis(newVis)
    setVis1(newVis)
  }
  const payQ = (e) => {
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
      return Math.abs(hash);
    };
    const str = props.info.price + props.info.id + props.info.pd;
    idid = str.hashCode();

    var number = String(props.info.id);
    var price = props.info.price;
    price = price.replaceAll(",", ".");
    price = price.replaceAll(/\s/g, "");
    price = Number(price) * 100;
    price = price.toFixed(0);
    price = String(price);
    console.log(number, price);

    let url =
      "https://pay.pay-ok.org/demo/?REQ={" +
      '"PAY_ACTION": "REG_PAYMENT",' +
      '"PAY_ITOG": "' +
      price +
      '",' +
      '"PAY_NAME": "Оплата водопотребления л/с ' +
      number +
      '" }';
    console.log(url);

    const axios = require("axios").default;
    axios.get(url).then(function (response) {
      var data = response.data.PAY_URL;
      var pay_id = response.data.PAY_ID;
      console.log(data);
      var win = window.open(data, "_blank");
      var url =
        "http://172.20.10.2:47127/api/users/" +
        idid +
        "/" +
        "qq" +
        "/" +
        pay_id;
      console.log(url);
      const axios = require("axios").default;
      axios.get(url).then(function (response) {
        console.log(response);
        setPay(String(pay_id));
      });
    });
  };
  const trytry = (e) => {
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
      return Math.abs(hash);
    };
    const str = props.info.price + props.info.id + props.info.pd;
    idid = str.hashCode();

    var url = "http://172.20.10.2:47127/api/users/qq/" + idid;
    console.log(url);

    const axios = require("axios").default;
    axios.get(url).then(function (response) {

      try{
        var pay_id = response.data[0].pay;
        console.log(pay_id);
      }
      catch{
        setVis(false)
        return
      }

      var api =
        "https://pay.pay-ok.org/demo/?REQ={" +
        '"PAY_ACTION": "GET_PAYMENT_INFO",' +
        '"PAY_ID":"' +
        pay_id +
        '" }';
      console.log(api);

      const axios = require("axios").default;
      axios.get(api).then(function (response) {
        var ww = response.data.STATUS.params.textstatus;
        console.log(ww);
        if (ww !== "APPROVED") {
          qq = false;
          var xxx =
            "http://172.20.10.2:47127/api/users/qqqq/" + idid + "/" + ww;
          const axios = require("axios").default;
          axios.get(xxx);
          setVis(false)
        } else {
          qq = true;
          var xxx =
            "http://172.20.10.2:47127/api/users/qqqq/" + idid + "/" + ww;
          axios.get(xxx);
          setVis(true)
          setVis1(false)
        }
      });
    });
  };

  return (
    <div>
      <MyAlert severity="error" hidden={vis} close={aaa}>Неоплачено!</MyAlert>
      <MyAlert severity="success" hidden={vis1} close={aaa}>Оплачено :)</MyAlert>
      <div className="item">
        <div className="item_header">{/* <h3>{props.info.id}</h3> */}</div>
        <div className="item_body">
          <div className="item_body_symma">
            <div>
              Сумма к оплате:
              <span className="symma">{props.info.price}</span>
            </div>
          </div>
        </div>
        <div className="item_footer">
          <MyButton onClick={payQ}> Оплатить </MyButton>
          <MyButton onClick={trytry}> Проверить оплату </MyButton>
          <MyButton onClick={paypay}> Показать чек </MyButton>
        </div>
        <MyModal
          data={data}
          visible={modal}
          setVisible={setModal}
          close={close}
        ></MyModal>
      </div>
    </div>
  );
};
export default PostItem;
