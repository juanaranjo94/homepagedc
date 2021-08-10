import React, {Component} from 'react';
import Teamitem from '../Team/Teamitem';
import Reveal from 'react-reveal';
import SeoTitle from '../Title/SeoTitle';
import { translate } from "react-translate";

class Team extends Component{
    render(){

        let { t } = this.props;
       
        return(
            <section className="experts_team_area mt_80" id="team">
                <div className="container">
                    <div className="experts_team_content">
                        <div className="seo_title_area">
                            <SeoTitle 
                                Title={t(this.props.t_team)} 
                                TitleP={t(this.props.d_team)}
                                Tclass="text-center"/>
                        </div>
                        <Reveal bottom cascade>
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <Teamitem 
                                    teamImage="horacio.png" 
                                    memberN="Horacio Borrero" 
                                    memberd={t(this.props.p_name1)}
                                    memberE={t(this.props.d_name1)}/>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <Teamitem 
                                    teamImage="francisco.png" 
                                    memberN="Francisco Chaves" 
                                    memberd={t(this.props.p_name1)}
                                    memberE={t(this.props.d_name1)}/>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <Teamitem 
                                    teamImage="hernando.png" 
                                    memberN="Hernando Parrot" 
                                    memberd={t(this.props.p_name2)}
                                    memberE={t(this.props.d_name2)}/>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <Teamitem 
                                    teamImage="jonathan.png" 
                                    memberN="Jonathan Ortiz" 
                                    memberd={t(this.props.p_name3)}
                                    memberE={t(this.props.d_name3)}/>
                            </div>
                        </div>
                    </Reveal>
                    </div>
                </div>
            </section>
        
        )
    }    
}
export default translate('team_about')(Team);