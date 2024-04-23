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
                
            </div>
        )
};