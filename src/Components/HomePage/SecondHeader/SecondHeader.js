import React, { Component } from 'react';
import './SecondHeader.css';
import SlideShow from '../SecondHeader/Slider/SlideShow';
import MobileSlider from './MobileSlider/MobileSlider';

class SecondHeader extends Component{

    render(){
        return (
            <section className="Features">
                <header className = "app-container">
                    <h2 className="Features-title">
                        Smart, seamless freelancer tools to build, manage, and grow your business.
                    </h2>
                    <SlideShow />
                    <MobileSlider />
                </header>
            </section>
        )
    }
}

export default SecondHeader;
