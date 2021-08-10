import React from 'react';
import Sectitle from '../Title/Sectitle';
import Teamitem from '../Team/Teamitem';
import Reveal from 'react-reveal';
const AppTeam =()=>{
    return(
        <section className="experts_team_area sec_pad" id="team">
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="Meet Our Team" tClass="t_color3" TitleP="Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot richard cheers the little rotter.!"/>
                <Reveal bottom cascade>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <Teamitem teamImage="horacio.png" memberN="Horacio Borrero" memberd="General Manager, Parther" 
                            memberE="With more than 24 years of experience, Horacio’s knowledge and expertise in software development is unrivaled. 
                            Horacio served as the principal technical architect for one of the largest software companies in the billing system in Latin America. 
                            He participated in large projects for telecommunications and public services companies, giving him a strong background in Oracle RDBMS and making him a valuable member of the team."/>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Teamitem teamImage="francisco.png" memberN="Francisco Chaves" memberd="Development Manager, Partner"
                            memberE="With more than 22 years of experience in the development of mission critical applications for telecommunications companies. 
                            He has been involved in the specification, design, architecture, development and execution of several software projects for renowned 
                            companies in Latin America. He currently leads the process of architecture, design and software development."/>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Teamitem teamImage="hernando.png" memberN="Hernando Parrot" memberd="Executive Director, Partner"
                            memberE="Senior Executive, with the ability to develop strategic vision and execute at detail level, engaged in business development, 
                            technology and mission critical solution selling and delivery over the past 25 years. I enjoy assembling, leading and mentoring winning teams, 
                            developing deep relationships with partners, providers and customers and leading change and transformation to achieve operational excellence."/>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Teamitem teamImage="jonathan.png" memberN="Jonathan Ortiz" memberd="Software Development Leader"
                            memberE="Software Engineer with more than 9 years of experience in the life cycle of software development. 
                            He has focused on the construction of business application and the specification, design, architecture, development and execution of software projects for
                             telecommunications and cable companies in Latin America. In DreamCode, leads the development team using Scrum as a development methodology."/>
                        </div>
                        {/* <div className="col-lg-12 text-center">
                            <a href=".#" className="learn_btn">Meet All Team <i className="ti-arrow-right"></i></a>
                        </div> */}
                    </div>
                </Reveal>
            </div>
        </section>
        
    )
}
export default AppTeam;