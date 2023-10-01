import React, {Component} from 'react';
import './CircleScale.css';
import '../../css/styles.css'

interface ICircleScaleState {
  Radius: number;
  CircleLenghtStr: string;
  circleLen: number;
}

const Radius: number = 44;

function getCircleLenght(R: number): number {
  const L: number = 2 * Math.PI * R;
  return L;
}

interface ICircleScaleProps {
  ratio: number,
  text: string,
  color: string
}

export default class CircleScale extends Component <ICircleScaleProps, ICircleScaleState> {

  constructor (props?:any) {
    super(props);
    this.state = {
      Radius,
      circleLen: getCircleLenght(Radius),
      CircleLenghtStr: getCircleLenght(Radius).toFixed(0)
    }
  }


  private getArcLenghtByPrc(prc: number): string {
    const L: number = this.state.circleLen;
    const res: number = L * ((prc * 0.01));
    return res.toFixed(0);
  }

  render(): React.ReactNode {
    return (
      <>
        <svg version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="100%" height="100%"
            viewBox="0 0 100 100">
            <g transform='rotate(270 50 50)'>
              <circle 
              className="transition-all-eo-1s"
              cx="50" cy="50" r={this.state.Radius}
              stroke={this.props.color} strokeWidth="12"
              strokeDasharray = {this.state.CircleLenghtStr}
              strokeDashoffset= {this.getArcLenghtByPrc(this.props.ratio)}
              fill="transparent"/>
             </g>
             <text x="50%" y="50%"
                   dominantBaseline="central"
                   textAnchor="middle"
                   fontSize="32px"
                   fontWeight="bold"
              >{this.props.text}</text>
        </svg>
      </>
    );
  }
}

/*
             stroke-dasharray ="628"
             stroke-dashoffset="650"
             stroke="#673E93"
*/