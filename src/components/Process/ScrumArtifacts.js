import React, {Component} from 'react';
import SeoTitle from '../Title/SeoTitle'
import { translate } from "react-translate";

class ScrumArtifacts extends Component {
    render(){

        let { t } = this.props;

    return(
        <section className="scrum_artifacts_area sec_pad">
            <div className="container">
                <SeoTitle 
                    Title={t(this.props.Title)}
                    Tclass="text-center" 
                    TitleP={t(this.props.Descrip)}
                />
                <div className="scrum_artifacts_content">
                    <div className="row mt-5">
                        <div className="col-lg-6 align-items-center">
                            <div className="mt_75">
                                <div className="fadeInUp">
                                    <h5>{t(this.props.Artf1)}</h5>                              
                                </div>
                                <div className="txt_artif">
                                        <p>{t(this.props.Artf1Descrip)}</p>
                                </div>
                            </div>  
                            <div className="mt_130">
                                <div className="fadeInUp">
                                    <h5>{t(this.props.Artf3)}</h5>                              
                                </div>
                                <div className="txt_artif">
                                        <p>{t(this.props.Artf3Descrip)}</p>
                                </div> 
                            </div>  
                        </div>
                        <div className="col-lg-6 align-items-center align-self-center">
                            <div className="">
                                <div className="fadeInUp">
                                    <h5>{t(this.props.Artf2)}</h5>                              
                                </div>
                                <div className="txt_artif">
                                        <p>{t(this.props.Artf2Descrip)}</p>
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

export default translate('ScrumArtifacts')(ScrumArtifacts);
