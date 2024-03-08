import React from 'react';
import SecBanner from '../components/Job/SecBanner';

import JobsTab from '../components/Job/JobsTab';


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


        </div>
    )
}
export default Jobs;