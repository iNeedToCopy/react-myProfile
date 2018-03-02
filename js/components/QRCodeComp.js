import React, {Component, PropTypes} from 'react'
import  '../../style/ChangeTicket.scss'
import '../../style/QRCode.scss'
import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'

const defaultCons = {
  infoTitle: ['#', '出库单号', '货主', '品名', '材质', '规格', '长度', '厂家', '计划出库重量', '仓库', '库区', '货位', '堆位', '层序'],

};
const defaultVars = {
  infoCont: [['1', '12345678', '重庆亚成物资有限公司', '螺纹钢', 'HRB400E', '20mm', '9000mm', '达钢', '80.123吨', '金田中钢库', 'A1', '12', '1', '10'],
    ['2', '12345678', '重庆亚成物资有限公司', '螺纹钢', 'HRB400E', '20mm', '9000mm', '达钢', '80.123吨', '金田中钢库', 'A1', '12', '1', '10'],
    ['3', '12345678', '重庆亚成物资有限公司', '螺纹钢', 'HRB400E', '20mm', '9000mm', '达钢', '80.123吨', '金田中钢库', 'A1', '12', '1', '10']],
  pic:[require('../../images/temp.gif'),require('../../images/temp.gif')]
};

export default class QRCodeComp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      pay:true,
      number:this.props.location.state.carNumber?this.props.location.state.carNumber:'AN8888',
    };
    this.pay = this.pay.bind(this);
  }

  componentDidMount(){
  }
  componentWillUpdate(){

  }
  componentDidUpdate(){

  }
  toAutoPay(){
    browserHistory.push('/AutoPay')
  }
  goToChangeTicket(){
    browserHistory.push('/changeTicket')
  }
  pay(){
    this.setState({
      pay:!this.state.pay,
    });
}
  render(){
    return(
      <div className="ticketContainer">
        <div className="title">
          <span className="company">重庆金田储运有限公司</span>
          <span className="autoPay" onClick={this.goToChangeTicket}>切换至自助换票</span>
        </div>
        <span className="money">本车<em>渝<span>{this.state.number}</span></em>出库信息如下，出库费用共计<em>5608.06元</em>，请扫描支付二维码自助支付</span>
        <table className="table table-defined">
          <thead>
          <tr>
            {defaultCons.infoTitle.map((item,i)=>{
              return <th key={i}>{item}</th>
            })}
          </tr>
          </thead>
          <tbody>
          {defaultVars.infoCont.map((a,i)=>{
            return <tr key={i}>{a.map((b,index)=>{
              return <td key={index}>{b}</td>
            })}</tr>
          })}
          </tbody>
        </table>
        <div className="code">
          {defaultVars.pic.map((item,i)=>{
            return <img src={item} alt="" key={i} className={this.state.pay?"img":"img none"}/>
          })}
          <span className={this.state.pay?"pay":"pay show"}>已支付成功！</span>
        </div>
        <div className="payButton">
          <button onClick={this.toAutoPay}>返回</button>
          <button>打印出门条</button>
        </div>
      </div>
    )
  }
}

