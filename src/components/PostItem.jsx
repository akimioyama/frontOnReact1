import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {

    return (
        <div className="item">
            <div className="item_header">
                <h3>
                    {props.info.fio}
                </h3>
            </div>
            <div className="item_body">
                <div className="item_body_symma">
                    <div>Номер счета: {props.info.id}</div>
                    <div>Сумма к оплате:
                        <span className="symma">
                            {props.info.price}
                        </span>
                    </div>

                </div>
            </div>
            <div className="item_footer">
                <MyButton> Оплатить </MyButton>
            </div>
        </div>
    );
};
export default PostItem