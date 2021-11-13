import React, {Component} from "react";
import "./ProposalWork.css";
import customise from "../../../../Assets/Images/customise.png";
import paymentVisa from "../../../../Assets/Images/paymentVisa.png";
import schedule from "../../../../Assets/Images/schedule.png";
import sectionDividerLeft from "../../../../Assets/Images/sectionDividerLeft.png";
import sectionDividerRight from "../../../../Assets/Images/sectionDividerRight.png";

class ProposalWork extends Component {
  render() {
    return (
      <section className='proposal-work'>
        <div className='container'>
          <div className='row justify-content-center py-5'>
            <div className='d-flex align-items-center col-xl-6 col-lg-6 p-5'>
              <div>
                <span className='work-header'>
                  Create customized proposals in seconds
                </span>
                <p className='work-para'>
                  Easily create new proposals with just a few clicks. Add your
                  own branding, images and custom slides that sell you and your
                  work.
                </p>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6 p-5 text-center'>
              <img src={customise} alt='customise' className='paymentRem' />
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
            <div className='col-xl-6 col-lg-6 p-5 text-center img-place'>
              <img src={paymentVisa} alt='paymentVisa' className='video-img' />
            </div>
            <div className='col-xl-6 col-lg-6 p-5'>
              <span className='work-header'>Get paid at signing</span>
              <p className='work-para'>
                Accept payments straight from your proposal. Simply have them
                sign your proposal and pay you right away in the same step.
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
                <span className='work-header'>Collect deposits</span>
                <p className='work-para'>
                  Charge your deposit at signing or automatically create and
                  send invoices for the deposit, making sure you get paid before
                  you work.
                </p>
              </div>
            </div>

            <div className='col-xl-6 col-lg-6 p-5 text-center'>
              <img src={schedule} alt='schedule' className='video-img' />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProposalWork;
