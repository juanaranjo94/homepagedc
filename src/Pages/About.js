import React, { Component } from 'react';
import SecBanner from '../components/Banner/SecBanner';
import OurHistory from "../components/About/OurHistory";
import OurValues from "../components/About/OurValues";
import Team from '../components/About/AppTeam';
import Expertise from "../components/Expertise";


class about extends Component{
	render(){
		
		return (
            <div className="body_wrapper about menu_white" id="about">
                <SecBanner 
                    title="titleAbout" 
                    txt_d="txt_dAbout"/>
                <OurHistory 
                    title_s="title_s" 
                    txt_p1="txt_p1" 
                    txt_p2="txt_p2" 
                    txt_p3="txt_p3"/>
                <OurValues 
                    title_v="title_v" 
                    value1="value1" 
                    value2="value2" 
                    value3="value3"/> {/* Sección de Valores */}
                <Expertise
                    title_e="title_e"
                    exp_1="exp_1"
                    exp_2="exp_2"
                    exp_3="exp_3"
                    exp_4="exp_4"
                    exp_5="exp_5"
                    exp_6="exp_6"
                    exp_7="exp_7"
                    exp_8="exp_8"
                /> {/* Sección de Expertise */}
                <Team
                	t_team = "t_team"
                    d_team = "d_team"
                    p_name1 = "p_name1"
                    p_name2 = "p_name2"
                    p_name3 = "p_name3"
                    p_name4 = "p_name4"
                    d_name1 = "d_name1"
                    d_name2 = "d_name2"
                    d_name3 = "d_name3"
                    d_name4 = "d_name4"                
                /> {/* Sección de Equipo */}
            </div>


		
		);
	}
}	

export default about;