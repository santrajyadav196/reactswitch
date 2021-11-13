import React, {Component} from "react";
import Slider from "react-slick";
import "./SlideShow.css";
import proposalImg from "../../../../Assets/Images/rectangle-6.png";
import slide1 from "../../../../Assets/Images/slide_2.jpg";
import slide2 from "../../../../Assets/Images/slide_5.jpg";
import slide3 from "../../../../Assets/Images/slide_7.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile, faFileAlt} from "@fortawesome/free-regular-svg-icons";
import {faDollarSign, faFileContract} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    title: "Proposals",
    desc: "Make them an offer they can't refuse",
  },
  {
    title: "Invoicing",
    desc: "Turn any day into pay day",
  },
  {
    title: "Payments",
    desc: "Take the Free out of freelancing",
  },
  {
    title: "Contracts",
    desc: "Shake hands. Everyone wins",
  },
  {
    title: "Statements",
    desc: "Make them an offer they can't refuse",
  },
  {
    title: "Clients",
    desc: "Make them an offer they can't refuse",
  },
];

const boxImages = [
  faFile,
  faFileAlt,
  faDollarSign,
  faFileContract,
  faFile,
  faFileContract,
];

class SlideShow extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      customPaging: function (i) {
        return (
          <div className='li-fit-content'>
            <div className='li-fit-left'>
              <div className='box-image'>
                <FontAwesomeIcon
                  icon={boxImages[i]}
                  className='img-centre'
                  size='3x'
                  color='#324168'
                />
              </div>
            </div>
            <div className='li-fit-right'>
              <span className='main-li-heading'>{features[i].title}</span>
              <span className='li-description'>{features[i].desc}</span>
            </div>
          </div>
        );
      },
    };
    return (
      <div className='app-container'>
        <Slider {...settings}>
          <div>
            <img src={slide1} alt='slide1' />
          </div>
          <div>
            <img src={slide2} alt='slide1' />
          </div>
          <div>
            <img src={proposalImg} alt='slide1' />
          </div>
          <div>
            <img src={slide1} alt='slide1' />
          </div>
          <div>
            <img src={slide3} alt='slide1' />
          </div>
          <div>
            <img src={proposalImg} alt='slide1' />
          </div>
        </Slider>
      </div>
    );
  }
}

export default SlideShow;
