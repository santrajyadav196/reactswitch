import React, {Component} from "react";
import "./ContractWork.css";
import contractAgreement from "../../../../Assets/Images/contractAgreement .png";
import mobileContract from "../../../../Assets/Images/mobileContract.png";
import contractAlert from "../../../../Assets/Images/contractAlert.png";
import sectionDividerLeft from "../../../../Assets/Images/sectionDividerLeft.png";
import sectionDividerRight from "../../../../Assets/Images/sectionDividerRight.png";

class ContractWork extends Component {
  render() {
    return (
      <section className='contract-work'>
        <div className='container'>
          <div className='row justify-content-center py-5'>
            <div className='d-flex align-items-center col-xl-6 col-lg-6 p-5'>
              <div>
                <span className='work-header'>E-signing included</span>
                <p className='work-para'>
                  You and your clients can sign contracts online. Finally no
                  print, scan, send anymore!
                </p>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6 p-5 text-center'>
              <img
                src={contractAgreement}
                alt='contractAgreement'
                className='paymentRem-img'
              />
            </div>
          </div>
          <div className='row justify-content-center '>
            <div className='col-xl-7 col-lg-7 col-md-10 px-5'>
              <img
                src={sectionDividerLeft}
                alt='sectionDividerLeft'
                className='video-img'
              />
            </div>
          </div>
          <div className='row justify-content-center py-5'>
            <div className='col-xl-6 col-lg-6 p-5 text-center back-contract-img img-place'>
              <img
                src={mobileContract}
                alt='mobileContract'
                className='paymentRem-img mobileContract'
              />
            </div>
            <div className='col-xl-6 col-lg-6 p-5'>
              <span className='work-header'>E-signing included</span>
              <p className='work-para'>
                You and your clients can sign contracts online. Finally no
                print, scan, send anymore!
              </p>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-xl-7 col-lg-7 col-md-10 px-5'>
              <img
                src={sectionDividerRight}
                alt='sectionDividerRight'
                className='video-img'
              />
            </div>
          </div>
          <div className='row justify-content-center py-5'>
            <div className='d-flex align-items-center col-xl-6 col-lg-6 p-5'>
              <div>
                <span className='work-header'>Smart Alerts</span>
                <p className='work-para'>
                  Get alerts when the contract is viewed, signed and when the
                  project starts. Never miss anything.
                </p>
              </div>
            </div>

            <div className='col-xl-6 col-lg-6 p-5 text-center'>
              <img
                src={contractAlert}
                alt='contractAlert'
                className='paymentRem-img'
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContractWork;
