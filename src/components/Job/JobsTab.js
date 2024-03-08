import React, { Component } from "react";
import ServTitle from '../../components/Home/ServTitle';
import JobsTabAreas from '../../components/Job/JobsTabAreas';
import JobsTabItems from '../../components/Job/JobsTabitems';
import { translate } from "react-translate";

class JobsTab extends Component {
  render() {

    let { t } = this.props;

    return (
      <section className="jobs_area sec_pad" >
        <div className="container">
             <ServTitle Title={t(this.props.title)} TitleP={t(this.props.titleD)} />

          <div className="jobs_content">
            <ul className="nav nav-tabs jobs_tab" role="tablist">
              <li className="nav-item fadeInUp" data-wow-delay="0.4s">
                <JobsTabAreas                    
                    active="active"
                    idArea = "one-tab"
                    hrefArea = "#one"
                    ariactr = "one"
                    nameArea = "Engineering"              
                />
              </li>
              <li className="nav-item fadeInUp" data-wow-delay="0.6s">
                <JobsTabAreas                    
                    idArea = "two-tab"
                    hrefArea = "#two"
                    ariactr = "two"
                    nameArea = "Administrative"              
                />
              </li>
              <li className="nav-item fadeInUp" data-wow-delay="0.8s">
                <JobsTabAreas                    
                    idArea = "three-tab"
                    hrefArea = "#three"
                    ariactr = "three"
                    nameArea = "Human Talent"              
                />
              </li>
            </ul>
            <div className="tab-content jobs_tab_content">
              {/* Section Area #1 */}
              <div className="tab-pane fade show active" id="one" role="tabpanel" aria-labelledby="one-tab">
                <JobsTabItems  
                  NameJobs ="Design UI/UX"
                  DescripJobs="Full Stack Developer who will be in charge of designing, building and implementing software with high standards of high development quality and thus being able to automate, facilitate and increase the efficiency of a process or an activity."
                  RequirJobs="Have knowledge of Javascript (Angular, react, and / or node), AWS, Agile Methodologies (Scrum, DevOps), GitLab or Github, CSS, Bootstrap, Html 5."
                />
                <JobsTabItems  
                  NameJobs ="Web Engineer Intern"
                  DescripJobs="Full Stack Developer who will be in charge of designing, building and implementing software with high standards of high development quality and thus being able to automate, facilitate and increase the efficiency of a process or an activity."
                  RequirJobs="Have knowledge of Javascript (Angular, react, and / or node), AWS, Agile Methodologies (Scrum, DevOps), GitLab or Github, CSS, Bootstrap, Html 5."
                />
                <JobsTabItems  
                  NameJobs ="Junior Web Developer"
                  DescripJobs="Full Stack Developer who will be in charge of designing, building and implementing software with high standards of high development quality and thus being able to automate, facilitate and increase the efficiency of a process or an activity."
                  RequirJobs="Have knowledge of Javascript (Angular, react, and / or node), AWS, Agile Methodologies (Scrum, DevOps), GitLab or Github, CSS, Bootstrap, Html 5."
                />
              </div>
              {/* Section Area #2 */}
              <div className="tab-pane fade" id="two" role="tabpanel" aria-labelledby="two-tab">
              <JobsTabItems  
                  NameJobs ="Assistent "
                  DescripJobs="Full Stack Developer who will be in charge of designing, building and implementing software with high standards of high development quality and thus being able to automate, facilitate and increase the efficiency of a process or an activity."
                  RequirJobs="Have knowledge of Javascript (Angular, react, and / or node), AWS, Agile Methodologies (Scrum, DevOps), GitLab or Github, CSS, Bootstrap, Html 5."
                />
              </div>
              {/* Section Area #3 */}
              <div className="tab-pane fade" id="three" role="tabpanel" aria-labelledby="three-tab">
              <JobsTabItems  
                  NameJobs ="Psychology"
                  DescripJobs="Full Stack Developer who will be in charge of designing, building and implementing software with high standards of high development quality and thus being able to automate, facilitate and increase the efficiency of a process or an activity."
                  RequirJobs="Have knowledge of Javascript (Angular, react, and / or node), AWS, Agile Methodologies (Scrum, DevOps), GitLab or Github, CSS, Bootstrap, Html 5."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default translate('jobs_items')(JobsTab);
