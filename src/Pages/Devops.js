import React from 'react';
import BannerProcess from '../components/Banner/BannerProcess';
import DevOpsBanner from '../components/Banner/DevOpsBanner';
import DevOpsItem from '../components/Process/DevOpsItem';
import HowDevOpsWorks from '../components/Process/HowDevOpsWorks';
import BenefitsDevOps from '../components/Process/BenefitsDevOps';
import PracticesDevOps from '../components/Process/PracticesDevOps';

const DevOps = () => {
    return(
        <div className="body_wrapper">
            <BannerProcess 
                Pclass="devops_banner_area"
                P2class="s_round one"
                P3class="s_round two"
                Title="TitleDevOps" 
                TextD="TextDDevOps"
                img_process="img-devops-int.png"/>   
           
            <DevOpsItem
                Dev_txt="Dev_txt"
                Ops_txt="Ops_txt"/>
            <HowDevOpsWorks
                Title = "Title"
                txt1="txt1"
                txt2="txt2"/>
            <BenefitsDevOps
                Title = "Title"
                Benefits1Title="Benefits1Title"
                Benefits1Descrip="Benefits1Descrip"
                Benefits2Title="Benefits2Title"
                Benefits2Descrip="Benefits2Descrip"
                Benefits3Title="Benefits3Title"
                Benefits3Descrip="Benefits3Descrip"
                Benefits4Title="Benefits4Title"
                Benefits4Descrip="Benefits4Descrip"
                Benefits5Title="Benefits5Title"
                Benefits5Descrip="Benefits5Descrip"
                Benefits6Title="Benefits5Title"
                Benefits6Descrip="Benefits5Descrip"
                />                          
            <PracticesDevOps
                DevOpsTitle="DevOpsTitle"
                DevOpsDescrip="DevOpsDescrip"
                DevOpsTitle2="DevOpsTitle2"
                DevOpsDescrip2="DevOpsDescrip2"
            />
        </div>
    )
}
export default DevOps;