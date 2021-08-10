import React from 'react';
import SecBanner from '../components/Banner/SecBanner';
import HowDevOpsWorks from '../components/Process/HowDevOpsWorks';
import JobsTab from '../components/JobsTab';


const Jobs = () => {
    return(
        <div className="body_wrapper menu_white">           
            <SecBanner 
                    title="titleJobs" 
                    txt_d="txt_dJobs"/>
            <JobsTab 
                title="title" 
                titleD="titleD"
            />
            <HowDevOpsWorks/>

        </div>
    )
}
export default Jobs;