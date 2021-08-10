import React from 'react';


// components
import SliderHome from '../components/SliderHome/SliderHome';
import AboutUs from '../components/Home/AboutUs';
import Services from '../components/Home/Services';
import OurClients from '../components/OurClients';
import OurProcess from "../components/OurProcess";
import AppTestimonial from '../components/Home/AppTestimonial';
import Bannerhome from '../components/Bannerhome';
import CasosExito from '../components/Casos/CasosExito';
import Contacts from '../components/Contacts';


export default function Home () {

        return (
            <div className="body_wrapper">
 
                <SliderHome 
                    read_more="read_more" serv_title="serv_title" 
                    serv1_t="serv1_t" serv1_d="serv1_d" 
                    serv2_t="serv2_t" serv2_d="serv2_d" 
                    serv3_t="serv3_t" serv3_d="serv3_d" 
                    serv4_t="serv4_t" serv4_d="serv4_d"/>
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
                <AppTestimonial 
                
                />
                <Bannerhome 
                    txt_banner="txt_banner"/> 
                <CasosExito
                    casos_title="casos_title"
                    casos_title_d="casos_title_d"/>
                <Contacts 
                    title="title" 
                    titleP="titleP"
                    name="name" 
                    email="email" 
                    subject="subject" 
                    message="message" 
                    btn="btn"/>
                
            </div>
        )
};