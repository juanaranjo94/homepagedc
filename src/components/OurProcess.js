import React, {Component} from 'react';
import Plx from "react-plx";
import { translate } from "react-translate";


class OurProcess extends Component {
    render(){
        let { t } = this.props;
        const ParallaxProcess = [
            {
              start: 'self',
              duration: 400,
              properties: [
                
                  {
                    startValue: 0,
                    endValue: 15,
                    property: "padding-right"
                  },
                  {
                    startValue: 0,
                    endValue: 15,
                    property: "padding-left"
                  }
              ]
            }
        ];

        const ParallaxProcessTwo = [
            {
              start: 'self',
              duration: 400,
              properties: [
                
                {
                    startValue: 0,
                    endValue: 15,
                    property: "padding-right"
                  },
                  {
                    startValue: 0,
                    endValue: 15,
                    property: "padding-left"
                  }
              ]
            }
        ];
        
        return(
        
            <section className="our_process_area bg-light" id="process">
                <div className="container-fluid">
                
                    <div className="row">
                    <Plx className="col-lg-6 h-75 col_scrum" parallaxData={ParallaxProcess}>
                        <div className="our_process_feedback">
                            <a className="w-100" href="/scrum">
                                <div className="clients_feedback_item">
                                
                                    <div className="feedback_body">
                                    <h3 className="f_name">Agil Scrum</h3>
                                        <p>{t(this.props.process_d)}</p>
                                        <a href="/scrum" className="learn_btn"><strong>{t(this.props.read_more)}</strong><i className="ti-arrow-right"></i></a>
                                    </div>
                                    <img className="paddingg" src={require("../img/process/img-scrum.png").default} alt=""/>
                                </div>
                            </a>
                        </div>
                    </Plx>
                    <Plx className="col-lg-6 h-75 col_devops" parallaxData={ParallaxProcessTwo}>
                        <div className="our_process_feedback process_two">                           
                            <a className="w-100" href="/devops">
                                <div className="clients_feedback_item">
                                    <img className="devops_banner_img s_shap" src={require ("../img/about/shap.png").default} alt=""/>
                                    <div className="s_round one"></div>
                                    <div className="s_round two"></div>

                                    <div className="feedback_body">
                                    <h3 className="f_name">DevOps</h3>
                                        <p>{t(this.props.process_d)}</p>
                                        <a href="/devops" className="learn_btn"><strong>{t(this.props.read_more)}</strong><i className="ti-arrow-right"></i></a>
                                    </div>                                  
                                    <img className="paddingg" src={require("../img/process/img-devops.png").default} alt=""/>                                  
                                </div>
                            </a>
                        </div>
                    </Plx>
                    </div>
                </div>
            </section>
        
        )
    }
}

export default translate('process_home')(OurProcess);

