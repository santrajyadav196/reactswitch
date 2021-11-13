import React, {Component} from "react";
import layer from "../../../../Assets/Images/layer.png";
import reciepts from "../../../../Assets/Images/reciepts.png";
import sectionDividerLeft from "../../../../Assets/Images/sectionDividerLeft.png";

class ExpenseTrackingWork extends Component {
  render() {
    return (
      <section className='expense-tracking-work'>
        <div className='container'>
          <div className='row justify-content-center py-5'>
            <div className='col-xl-6 col-lg-6 p-5'>
              <span className='work-header'>Connect your Credit Card</span>
              <p className='work-para'>
                Import your Credit Card and bank account transactions
                automatically to claim all tax deductions!
              </p>
            </div>
            <div className='d-flex align-items-center col-xl-6 col-lg-6 p-5 text-center'>
              <img src={layer} alt='layer' className='video-img' />
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
              <img src={reciepts} alt='reciepts' className='paymentRem' />
            </div>
            <div className='col-xl-6 col-lg-6 p-5'>
              <span className='work-header'>Just forward your receipts</span>
              <p className='work-para'>
                Got receipts via email? Just forward them to AND.CO to simply
                file them in the app.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ExpenseTrackingWork;
