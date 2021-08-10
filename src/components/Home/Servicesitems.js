import React, {Component} from 'react';
import Plx from "react-plx";
import Reveal from 'react-reveal/Reveal';

class Servicesitems extends Component{
    render(){

        

        const ParallaxServices = [
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
                    startValue: 50,
                    endValue: 0,
                    property: "translateX"
                  }
              ]
            }
        ];
        const ParallaxServicesTxt = [
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

        let {rowClass, fimage, ftitle, descriptions, aClass, url, read_more}  = this.props;
        
        return(
            <div className={`agency_featured_item ${rowClass} `}>
                <div className="col-lg-6 align-self-center ">
                   <Reveal effect="fadeInLeft">
                        <Plx className="agency_featured_img text-right" parallaxData={ParallaxServices}>
                            <img src={require ("../../img/services/" + fimage).default} alt=""/>
                        </Plx>
                   </Reveal>
                </div>
                <div className="col-lg-6 align-self-center ">
                    <div className={`agency_featured_content fadeInLeft ${aClass}`} data-wow-delay="0.6s">
                    <Reveal effect="fadeInRight">
                        {/* <div className="dot">
                            <span className="dot1"></span>
                            <span className="dot2"></span>
                        </div> */}
                        <Plx parallaxData={ParallaxServicesTxt}>
                            <h3 className="title_services">{ftitle}</h3>
                            <p>{descriptions}</p>
                            <a href={`${url} `} className="learn_btn">{read_more}<i className="ti-arrow-right"></i></a>
                            
                        </Plx>
                    </Reveal>
                    </div>
                </div>
            </div>
        )
    }
}

export default Servicesitems;