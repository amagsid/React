import React from "react";

//images
import shippingImg from "./assets/exercises/f-delivery.png";
import moneyImg from "./assets/exercises/coin.png";
import chatImg from "./assets/exercises/chat.png";

const Guarantee = (props) => {
  return (
    <div className="el">
      <img alt="" src={props.img}></img>
      <h3> {props.title}</h3>
      <p> {props.description} </p>
    </div>
  );
};

const CustomerServiceEL = () => {
  const customerService = [
    {
      img: shippingImg,
      title: "Free Shipping",
      description: `Ex ullamco ad esse dolore adipisicing dolor non reprehenderit Lorem sunt dolore. Irure velit dolor aliqua. `,
    },
    {
      img: moneyImg,
      title: "100% Money Back",
      description: `Duis adipisicing occaecat excepteur irure ex. Anim laboris aliquip nulla dolore ad non adipisicing esse.   `,
    },
    {
      img: chatImg,
      title: "Online support 24/7",
      description: `Tempor id exercitation reprehenderit elit eiusmod aliqua tempor occaecat ipsum. Id nisi ut pariatur ut est.  `,
    },
  ];
  return (
    <div className="customer-service">
      {customerService.map((el) => (
        <Guarantee img={el.img} title={el.title} description={el.description} />
      ))}
    </div>
  );
};

export default CustomerServiceEL;
