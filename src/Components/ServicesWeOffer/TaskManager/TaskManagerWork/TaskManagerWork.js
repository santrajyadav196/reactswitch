import React, {Component} from "react";
import "./TaskManagerWork.css";
import magicWork from "../../../../Assets/Images/magicWork.png";
import workflow from "../../../../Assets/Images/workflow.png";
import focus from "../../../../Assets/Images/focus.png";
import sectionDividerLeft from "../../../../Assets/Images/sectionDividerLeft.png";
import sectionDividerRight from "../../../../Assets/Images/sectionDividerRight.png";

class TaskManagerWork extends Component {
  render() {
    return (
      <section className='task-manager-work'>
        <div className='container'>
          <div className='row justify-content-center py-5'>
            <div className='d-flex align-items-center col-xl-6 col-lg-6 p-5'>
              <div>
                <span className='work-header'>Magic Tasks</span>
                <p className='work-para'>
                  AND.CO automatically creates tasks based on your deadlines,
                  projects and contract terms. New invoices to send? We put them
                  on your desk. Contracts to sign? We put them on your desk.
                  Expenses to file? We put them on your desk.
                </p>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6 p-5 text-center'>
              <img src={magicWork} alt='magicWork' className='paymentRem' />
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
              <img src={workflow} alt='workflow' className='video-img' />
            </div>
            <div className='d-flex align-items-center col-xl-6 col-lg-6 p-5'>
              <div>
                <span className='work-header'>Your Lists Your Workflow</span>
                <p className='work-para'>
                  Organize your business tasks in custom lists that you can
                  access right from your Desk. Create lists for clients,
                  projects or whatever else you come up with.
                </p>
              </div>
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
                <span className='work-header'>Designed To Help You Focus</span>
                <div className='work-para'>
                  My Desk only shows you tasks when you need to act on them.
                  <div className='mt-3'>
                    Got a task you need to take care of in the future? Just
                    defer it to a later date. Can’t act upon a specific task
                    right now? Just defer it. Done with a task? Mark it as done
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xl-6 col-lg-6 p-5 text-center'>
              <img src={focus} alt='focus' className='video-img' />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TaskManagerWork;
