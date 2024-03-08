import React, { Component } from "react";


class JobsTabAreas extends Component {
  render() {

    let { nameArea, idArea, hrefArea, ariactr, active } = this.props;

    return (
                <a
                  className={`nav-link ${active}`}
                  id={idArea}
                  data-toggle="tab"
                  href={hrefArea}
                  role="tab"
                  aria-controls={ariactr}
                  aria-selected="true">
                  <h5>{nameArea}</h5>                 
                </a>
    );
  }
}
export default JobsTabAreas;
