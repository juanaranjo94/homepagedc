import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal'

const DevOpsBanner =()=> {
    return (
        <section className="devops_banner_area">
            <img className="devops_banner_img s_shap" src={require ("../../img/about/shap.png").default} alt=""/>
            <div className="s_round one"></div>
            <div className="s_round two"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center">
                        <Reveal effect="fadeInLeft" duration={1200}>
                            <div className="devops_banner_content">
                                <h2 className="wow fadeInUp" data-wow-delay="0.3s">¿Qué es DevOps?</h2>
                                <p className="f_400 w_color l_height28 wow fadeInUp" data-wow-delay="0.4s">DevOps is the combination of cultural philosophies, practices, and tools that increases an organization’s ability to deliver applications and services at high velocity: evolving and improving products at a faster pace than organizations using traditional software development and infrastructure management processes. This speed enables organizations to better serve their customers and compete more effectively in the market.</p>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-lg-6" >
                        <Reveal effect="fadeInRight" duration={1200}>
                            <div className="banner_img">
                                <img src={require ("../../img/about/banner.png").default} alt=""/>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default DevOpsBanner;