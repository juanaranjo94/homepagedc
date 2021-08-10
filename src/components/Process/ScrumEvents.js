import React, {Component} from 'react';
import Reveal from 'react-reveal';
import SeoTitle from '../Title/SeoTitle';
import { translate } from "react-translate";


class ScrumEvents extends Component {
    render(){

        let { t } = this.props;

        return(
            <section className="scrum_events_area sec_pad">
                <div className="container">
                    <div className="sec_title mb_70 wow fadeInUp" data-wow-delay="0.4s">
                    <Reveal effect="fadeInLeft">                  
                        <SeoTitle 
                            Title={t(this.props.Title)}
                            TitleP={t(this.props.Descrip)}
                            Tclass="text-center"/>
                    </Reveal>
                    </div>
                    <ul className="nav  scrum_events_tab" id="myTab" role="tablist">
                        <Reveal effect="fadeInLeft">
                            <li className="nav-item">
                            <a className="nav-link active" id="sprint-tab" data-toggle="tab" href="#sprint" role="tab" aria-controls="sprint" aria-selected="true">
                                
                                <h3>{t(this.props.event1)}</h3>
                            </a>
                            </li>
                        </Reveal>
                        <Reveal effect="fadeInLeft" duration={1400}>
                            <li className="nav-item">
                                <a className="nav-link" id="daily-tab" data-toggle="tab" href="#daily" role="tab" aria-controls="daily" aria-selected="false">
                                   
                                    <h3>{t(this.props.event2)}</h3>
                                </a>
                            </li>
                        </Reveal>
                        <Reveal effect="fadeInLeft" duration={2000}>
                            <li className="nav-item">
                                <a className="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">
                                    
                                    <h3>{t(this.props.event3)}</h3>
                                </a>
                            </li>
                        </Reveal>
                        <Reveal effect="fadeInLeft" duration={2400}>
                        <li className="nav-item">
                            <a className="nav-link" id="restrosp-tab" data-toggle="tab" href="#restrosp" role="tab" aria-controls="restrosp" aria-selected="false">
                                
                                <h3>{t(this.props.event4)}</h3>
                            </a>
                        </li>
                        </Reveal>
                    </ul>
                    <div className="tab-content scrum_events_tab_content bg-light" id="myTabContent">
                        <div className="tab-pane fade show active" id="sprint" role="tabpanel" aria-labelledby="sprint-tab">
                            <div className="scrum_events_tab_img">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="text-scrum">                                             
                                                <p>{t(this.props.event1Paragraph1)}</p>
                                                <p>{t(this.props.event1Paragraph2)}</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="scrum_event_img"><img className="mw-100" src={require ('../../img/process/sprint_planning.jpg').default} alt="text-scrum"/></div>
                                        </div>
                                    </div>
                                </div>                                  
                            </div>                               
                        </div>
                        <div className="tab-pane fade" id="daily" role="tabpanel" aria-labelledby="daily-tab">
                        <div className="scrum_events_tab_img">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="text-scrum">                                             
                                                <p>{t(this.props.event2Paragraph1)}</p>
                                                <p>{t(this.props.event2Paragraph2)}</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="scrum_event_img"><img className="mw-100" src={require ('../../img/process/planing.png').default} alt=""/></div>
                                        </div>
                                    </div>
                                </div>                                  
                            </div>  
                        </div>
                        <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                        <div className="scrum_events_tab_img">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="text-scrum">                                             
                                                <p>{t(this.props.event3Paragraph1)}</p>
                                                <p>{t(this.props.event3Paragraph2)}</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="scrum_event_img"><img className="mw-100" src={require ('../../img/process/sprint_review.jpg').default} alt=""/></div>
                                        </div>
                                    </div>
                                </div>                                  
                            </div>  
                        </div>
                        <div className="tab-pane fade" id="restrosp" role="tabpanel" aria-labelledby="restrosp-tab">
                        <div className="scrum_events_tab_img">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="text-scrum">                                             
                                                <p>{t(this.props.event4Paragraph1)}</p>
                                                <p>{t(this.props.event4Paragraph2)}</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="scrum_event_img"><img className="mw-100" src={require ('../../img/process/sprint_retrospectiva.jpg').default} alt=""/></div>
                                        </div>
                                    </div>
                                </div>                                  
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default translate('ScrumEvents')(ScrumEvents);
