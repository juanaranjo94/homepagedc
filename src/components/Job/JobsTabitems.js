import React, { Component } from "react";

class JobsTabItems extends Component {
  render() {

    let { NameJobs , DescripJobs , RequirJobs } = this.props;

    return (
                <div className="media">
                  <div className="media-left">
                    <p><i className="icon_clock_alt"></i>Full-time</p>
                    <p><i className="ti-money"></i>$ 3.000.000</p>
                    <p><i className="ti-write"></i>Contrato Fijo </p>
                    <p><i className="ti-location-pin"></i>Cali, Valle del Cauca</p>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">{NameJobs}</h3>
                    <span>{DescripJobs}</span>
                    <p>Requirements</p>
                    <span>{RequirJobs}</span>
                    <a href="/#contact" className="learn_btn">Apply Now<i className="ti-angle-right"></i></a>
                  </div>
                </div>              
    );
  }
}
export default JobsTabItems;
