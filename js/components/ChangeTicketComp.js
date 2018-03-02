import React, {Component, PropTypes} from 'react'
import  '../../style/ChangeTicket.scss'
import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'

const defaultCons = {

};
let defaultVars = {

};

export default class ChangeTicketComp extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    this.refs.carNumInput.focus();
  }
  componentWillUpdate(){

  }
  componentDidUpdate(){

  }
  goOutputInfo(){
    browserHistory.push({
      pathname: '/outPutInfo',
      state: {
        carNum:this.refs.carNumInput.value,
      },
    });

  }
  goToAutoPay(){
    browserHistory.push('/AutoPay')
  }
  render(){
    return(
      <div className="ticketContainer">
        <div className="title">
          <span className="company">重庆金田储运有限公司</span>
          <span className="autoPay" onClick={this.goToAutoPay}>切换至自动支付</span>
        </div>
        <div className="middle-container">
          <p className="subTitle">出库自动换票</p>

          <div className="small-container">
            <p className="city" >行&nbsp;驶&nbsp;证&nbsp;号</p>
            <input type="text" className="car-number" spellCheck={false} ref="carNumInput" maxLength={6}/>
          </div>
          <button className="change-button" onClick={this.goOutputInfo.bind(this)}>自动换票</button>
        </div>
      </div>
    )
  }
}

