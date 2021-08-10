import React, { Component } from "react";
import ScrumTeamItem from './ScrumTeamItem';
import SeoTitle from '../Title/SeoTitle';
import { translate } from "react-translate";


class ScrumTeam extends Component {
    
    render(){

        let { t } = this.props;

        return(
        <section className="scrum_team_area bg-white">
            <div className="container">
                <div className="hosting_title security_title text-center">
                  <SeoTitle 
                  Tclass="text-center" 
                  Title={t(this.props.Title)}
                  TitleP={t(this.props.Descrip)} />
                </div>
                <div className="row scrum_team_inner pt-5">
                    <ScrumTeamItem 
                          
                        title={t(this.props.Team1)} 
                        ptext={t(this.props.Team1Descrip)}  
                    />
                    <ScrumTeamItem 
                        
                        title={t(this.props.Team2)}
                        ptext={t(this.props.Team2Descrip)}  
                    />
                    <ScrumTeamItem 
                         
                        title={t(this.props.Team3)}
                        ptext={t(this.props.Team3Descrip)} 
                    /> 
                    
                </div>
            </div>
        </section>
        )
    }
}

export default translate('ScrumTeam')(ScrumTeam);