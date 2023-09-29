import React, {Component} from 'react';
import './Info.css';
import '../../css/styles.css'
import CircleScale from '../../components/bar/CircleScale';

interface IInfo {
  ratio:number
}

export default class InfoBlock extends Component <{}, IInfo> {

  private updateTimer: any = undefined;

  constructor (props?:any) {
    super(props);
    this.state = {
      ratio: 60
    }
  }

  private async updateInfo(){
    let ratio: number = this.state.ratio;
    ratio = (ratio == 0) ? 60 : --ratio;
    this.setState({ratio});
  }

  componentDidMount(){
    this.updateInfo();
    this.updateTimer = setInterval(async ()=>{this.updateInfo()}, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.updateTimer);
  }

  render() {
    return(
      <div className='box'>
        <CircleScale ratio={100 - this.state.ratio * (10/6)}
                     text= {this.state.ratio.toString()}/>
      </div>
    )
  }
}