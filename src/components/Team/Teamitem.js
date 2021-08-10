import React, {Component} from 'react';

class Teamitem extends Component {
    render(){
        var {teamImage, memberN, memberd, memberE}= this.props;
        return(
            <div className="ex_team_item">
                <img src={require ("../../img/teams/" + teamImage).default} alt="team"/>
                <div className="team_content">
                    <h3 className="f_p f_size_16 f_600 t_color3">{memberN}</h3>
                    <h5>{memberd}</h5>
                </div>
                <div className="hover_content">
                    <div className="n_hover_content">
                        <h4>{memberE}</h4>
                    </div>
                </div>
            </div>
        )
    }
}
export default Teamitem;