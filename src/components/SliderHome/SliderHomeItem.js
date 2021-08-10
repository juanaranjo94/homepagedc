import React, { Component } from "react";
import Reveal from 'react-reveal';

class SliderHomeItem extends Component {
    render(){
        let { description, image2, titulo, url, styleSlider, sliderClass, btnSlider} = this.props;


        return(
            <div >
            <div className={`services ${styleSlider}`}>
                <section >
                <div className="container">
                    <div className={`row ${sliderClass}`}>
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.4s">
                            <Reveal left cascade>
                            <div className="banner_img">
                                                              
                                <img src={require ("../../img/sliderImg/" + image2).default} alt=""/>
                            </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <Reveal bottom cascade duraton={1200}>
                                <div className="slider_home_content">
                                    {/* Titulo*/}<h2 className="f_700 f_size_40 l_height50 w_color mb_20 wow fadeInRight" data-wow-delay="0.3s"><span>{titulo}</span></h2> 
                                    {/* Descripcion*/}<p className="f_400 w_color l_height28 wow fadeInRight" data-wow-delay="0.4s">{description}</p>
                                   {/* Boton*/} <div className="action_btn d-flex align-items-center mt_40 wow fadeInRight" data-wow-delay="0.6s">
                                        <a href={url} className="transparent btn_hover app_btn">{btnSlider} <i className="ti-arrow-right"></i></a>
                                    </div>
                                </div>
                            </Reveal>
                            
                        </div>
                    </div>
                </div>
            </section>
            </div>
            </div>

            

        )
    }
}

export default SliderHomeItem;
