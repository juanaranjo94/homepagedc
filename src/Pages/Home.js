import React from 'react';


// components

import AboutUs from '../components/Home/AboutUs';
import Services from '../components/Home/Services';
import OurClients from '../components/Home/OurClients';
import OurProcess from "../components/Home/OurProcess";
import Bannerhome from '../components/Home/Bannerhome';



export default function Home () {

        return (
            <div className="body_wrapper">
 
                <AboutUs 
                    read_more="read_more" 
                    about_home_d="about_home_d"
                    about_home_title="about_home_title"/>  
                <OurClients 
                    read_more="read_more" 
                    clients_home_d="clients_home_d" 
                    clients_home_title="clients_home_title" />
                <Services 
                    serv_title="serv_title" 
                    serv_title2="serv_title2"
                    serv1_t="serv1_t" serv1_d="serv1_d" 
                    serv2_t="serv2_t" serv2_d="serv2_d" 
                    serv3_t="serv3_t" serv3_d="serv3_d" 
                    serv4_t="serv4_t" serv4_d="serv4_d"
                    read_more="read_more" />
                <OurProcess 
                    read_more="read_more" 
                    process_d="process_d" 
                    process2_d="process2_d"  />

                <Bannerhome 
                    txt_banner="txt_banner"/> 
                
            </div>
        )
};