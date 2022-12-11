import React from "react";
import QRCode from "react-qr-code";
import MyButton from "../button/MyButton";
import cl from "./MyModal.module.css";

const MyModal = ({ visible, setVisible, close, data }) => {
  const rootClasses = [cl.myModal];
  var api = String(data.idid)

  if (visible) {
    rootClasses.push(cl.active);
  }
  const qwe = () => {
    close(false);
  };
  var qrstring = "t=" + data.date + "&s=" + data.price + "&fn=" + data.fsNumber
  + "&fp" + data.fp + "&n=1"

  return (
    <div className={rootClasses.join(" ")}>
      <div className={cl.myModalContent}>
        <div className={cl.header}>
          <h3>Кассовый чек / Приход</h3>
        </div>
        <div className={cl.name}>ООО "{data.name}"</div>
        <div className={cl.fn}>
          <div>Фискальный документ:</div>
          <div>№ {data.documentNumber}</div>
        </div>
        <div className={cl.fn}>
          <div>Дата выдачи:</div>
          <div>{data.date}</div>
        </div>
        <div className={cl.fn}>
          <div>Номер смены:</div>
          <div>№ {data.shiftNumber}</div>
        </div>
        <div className={cl.fn}>
          <div>Номер документа:</div>
          <div>№ {data.documentIndex}</div>
        </div>
        <div className={cl.fn}>
          <div>Номер ФН:</div>
          <div>{data.fsNumber}</div>
        </div>
        <div className={cl.fn}>
          <div>ОФД ИНН:</div>
          <div>{data.ofdinn}</div>
        </div>
        <br />
        <div className={cl.qr}>
        <QRCode 
          className="mx-auto mt-20"
          value={'http://172.20.10.2:3000/posts/' + api} 
          // value={qrstring} 
        />
        </div>
        <br />
        <div className={cl.fn}>
          <div>Продукт:</div>
          <div>{data.about}</div>
        </div>
        <div className={cl.fn}>
          <div>Сумма к оплате:</div>
          <div className={cl.price1}>{data.price} рублей, НДС 20%</div>
        </div>
        <MyButton onClick={qwe}>Закрыть</MyButton>
      </div>
    </div>
  );
};

export default MyModal;
