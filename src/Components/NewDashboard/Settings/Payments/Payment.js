import React, {useState} from "react";

import arrowFarward from "../../../../Assets/assetsnew/arrow-farward.svg";
import PayPal from "../../../../Assets/assetsnew/paypal.jpg";

import "./Payment.css";
const Payment = () => {
  const [selector, setSelector] = useState("PaymentList");
  const updateSelector = (value) => {
    setSelector(value);
  };

  const UiRender = () => {
    switch (selector) {
      case "PaymentList":
        return (
          <>
            <PaymentList />
          </>
        );
      default:
        return <>Not Selected</>;
    }
  };

  const PaymentList = () => {
    return (
      <>
        <div
          className='Setting-Payment-Rectangle'
          onClick={() => {
            updateSelector("stripe");
          }}>
          <div className='row Setting-Payment-Stripe-Margin'>
            <div className='col Setting-Payment-Stripe-Margin'>
              <div className='Setting-Payment-TextFontOne-BigFontOne'>
                stripe
              </div>
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse mt-2'>
                <img src={arrowFarward} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div
          className='Setting-Payment-Rectangle'
          onClick={() => {
            updateSelector("Paypal");
          }}>
          <div className='row'>
            <div className='col'>
              <img src={PayPal} alt='' />
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse mt-1'>
                <img src={arrowFarward} alt='' />
                <span className='Setting-TextFontTwo mr-2'>
                  santrajyadav196@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className='Setting-Payment-Rectangle'
          onClick={() => {
            updateSelector("PayMe Page");
          }}>
          <div className='row'>
            <div className='col mt-1'>
              <div className='Setting-TextFontOne'>PayMe Page</div>
            </div>
            <div className='col'>
              <div className='d-flex justify-content-center mt-1'>
                <span className='Setting-TextFontTwo mr-2'>
                  https://me.and.co/santrajyadav
                </span>
              </div>
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse mt-1'>
                <img src={arrowFarward} alt='' />
                <span className='Setting-TextFontTwo mr-2'>View Page</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <UiRender />
    </>
  );
};

export default Payment;
