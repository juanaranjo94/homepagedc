import React, { Component } from "react";

class ScrumTeamItem extends Component {
    render(){
        let{url, title, ptext, image}=this.props;
        return(
            <div className="col-lg-4 col-sm-6">
                <div className="scrum_team_item text-left wow fadeInUp">
                    {/* <img src={require ("../../img/process/" + image).default} alt=""/> */}
                    <h5 >{title}</h5>
                    <p >{ptext}</p>
                    
                </div>
            </div>
        )
    }
}

export default ScrumTeamItem;
