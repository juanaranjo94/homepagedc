import React, {Component} from 'react';
import SeoTitle from '../Title/SeoTitle';
import { translate } from "react-translate";
import Plx from "react-plx";
import Reveal from 'react-reveal/Reveal';



class OurHistory extends Component {
    render(){

        const ParallaxAboutStory = [
            {
              start: 'self',
              duration: 400,
              properties: [
                
                {
                    startValue: 0,
                    endValue: 1,
                    property: "opacity"
                },
                {
                    startValue: -50,
                    endValue: 0,
                    property: "translateX"
                  }
              ]
            }
        ];

        let { t } = this.props;

        return(
            <section className="our_history_area bg-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Reveal effect="fadeInLeft">
                                <Plx  className="our_history_img text-center" parallaxData={ParallaxAboutStory}>
                                    <img className="wow fadeInUp" src={require("../../img/about/about_img_1.jpg").default} alt=""/>
                                </Plx>
                            </Reveal>
                        </div>
                        <div className="col-lg-6">
                            <div className="our_history_content">
                                <SeoTitle 
                                    Title={t(this.props.title_s)} 
                                    Tclass='text-left'/>
                                <p className="wow fadeInUp" data-wow-delay="0.3s">{t(this.props.txt_p1)}</p>
                                <p className="wow fadeInUp" data-wow-delay="0.3s">{t(this.props.txt_p2)}</p>
                                <p className="wow fadeInUp" data-wow-delay="0.3s">{t(this.props.txt_p3)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default translate('story_about')(OurHistory);