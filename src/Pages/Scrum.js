import React from 'react';
import BannerProcess from '../components/Banner/BannerProcess';
import ScrumTeam from '../components/Process/ScrumTeam';
import ScrumEvents from '../components/Process/ScrumEvents';
import ScrumArtifacts from '../components/Process/ScrumArtifacts';



const Scrum = () => {
    return(
        <div className="body_wrapper">
 
            <BannerProcess 
                Pclass="scrum_banner_area"                
                P2class="shape"
                Title="TitleScrum" 
                TextD="TextDScrum"
                img_process="img-scrum-int.png"/>            
            <ScrumEvents
                Title="Title"
                Descrip="Descrip"
                event1="event1"
                event1Paragraph1="event1Paragraph1"
                event1Paragraph2="event1Paragraph1"
                event2="event2"
                event2Paragraph1="event1Paragraph2"
                event2Paragraph2="event1Paragraph2"
                event3="event3"
                event3Paragraph1="event1Paragraph1"
                event3Paragraph2="event1Paragraph2"
                event4="event4"
                event4Paragraph1="event1Paragraph1"
                event4Paragraph2="event1Paragraph2"
            />
            <ScrumTeam
                Title="Title"
                Descrip="Descrip"
                Team1="Team1"
                Team1Descrip="Team1Descrip"
                Team2="Team2"
                Team2Descrip="Team2Descrip"
                Team3="Team3"
                Team3Descrip="Team3Descrip"
            />
            <ScrumArtifacts
                Title="Title"
                Descrip="Descrip"
                Artf1="Artf1"
                Artf1Descrip="Artf1Descrip"
                Artf2="Artf2"
                Artf2Descrip="Artf2Descrip"
                Artf3="Artf3"
                Artf3Descrip="Artf3Descrip"
            />
        </div>
    )
}
export default Scrum;