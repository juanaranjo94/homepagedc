import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
import Plx from "react-plx";

class SeoTitle extends Component {
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
        const ParallaxTitleP = [
            {
              start: 'self',
              duration: 300,
              properties: [
                
                {
                    startValue: 60,
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


        let {Title, TitleP, Tclass} = this.props;
        return(
            <div className={`seo_title mb_80 ${Tclass} `}>           
                <Reveal effect="fadeInUp" duration={1300}>
                    <Plx parallaxData={ParallaxTitle}>
                        <h2>
                            {Title}
                        </h2>
                    </Plx>
                </Reveal> 
                <Reveal effect="fadeInUp" duration={1600}>
                    <Plx parallaxData={ParallaxTitleP}>
                        <p>
                            {TitleP}
                        </p>
                    </Plx>
                </Reveal>
            </div>
        )
    }
}
export default SeoTitle;
