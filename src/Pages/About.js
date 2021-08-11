import React, { Component } from 'react';
import SecBanner from '../components/Banner/SecBanner';
import OurHistory from "../components/About/OurHistory";




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


            </div>


		
		);
	}
}	

export default about;