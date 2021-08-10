import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
import Plx from "react-plx";

class ServTitle extends Component {
    render(){

        const ParallaxTitle = [
            {
              start: 'self',
              duration: 300,
              properties: [
                
                {
                    startValue: -60,
                    endValue: 0,
                    property: "translateY"
                  },
                  {
                    startValue: 0,
                    endValue: 1,
                    property: "opacity"
                  }
              ]
            }
        ];


        let {Title, TitleP} = this.props;
        return(
            <div className="seo_title text-center mb_70">
                <Reveal effect="fadeInUp" duration={1300}>
                    <Plx parallaxData={ParallaxTitle}>
                        <h2>
                            {Title}
                        </h2>
                    </Plx>
                </Reveal>
                <Reveal effect="fadeInUp" duration={1600}>
                    <Plx parallaxData={ParallaxTitle}>
                        <p>
                            {TitleP}
                        </p>
                    </Plx>
                </Reveal>
            </div>
        )
    }
}
export default ServTitle;
