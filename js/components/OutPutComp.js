
import React, {Component, PropTypes} from 'react'
import '../../style/OutPutInfo.scss'
import {IndexLink,Link, browserHistory, History} from 'react-router'

const defaultInfo = {
  infoTitle: ['#', '出库单号', '货主', '品名', '材质', '规格', '长度', '厂家', '计划出库重量', '仓库', '库区', '货位', '堆位', '层序'],
  infoCont: [['1', '12345678', '重庆亚成物资有限公司', '螺纹钢', 'HRB400E', '20mm', '9000mm', '达钢', '90.123吨', '金田中钢库', 'A1', '12', '1', '10'],
    ['2', '12345678', '重庆亚成物资有限公司', '螺纹钢', 'HRB400E', '20mm', '9000mm', '达钢', '90.123吨', '金田中钢库', 'A1', '12', '1', '10'],
    ['3', '12345678', '重庆亚成物资有限公司', '螺纹钢', 'HRB400E', '20mm', '9000mm', '达钢', '90.123吨', '金田中钢库', 'A1', '12', '1', '10'],
    ['4', '12345678', '重庆亚成物资有限公司', '螺纹钢', 'HRB400E', '20mm', '9000mm', '达钢', '90.123吨', '金田中钢库', 'A1', '12', '1', '10'],
    ['5', '12345678', '重庆亚成物资有限公司', '螺纹钢', 'HRB400E', '20mm', '9000mm', '达钢', '90.123吨', '金田中钢库', 'A1', '12', '1', '10']]
}

export default class OutPutComp extends Component{
  constructor(props){
    super(props);
    this.state={
      carN:this.props.location.state.carNum?this.props.location.state.carNum:'AN8888'
    }
  }

  returnIndex() {
    browserHistory.push('/changeTicket')
  }
  goToAutoPay(){
    browserHistory.push('/AutoPay')
  }
  render() {
    var tableTitle = defaultInfo.infoTitle.map((item, index) => {
      return (
        <td key={index}>{item}</td>
      )
    })

    var tableCont = defaultInfo.infoCont.map((item, index) => {
      if (index === 8) {
        return (
          <td key={index} className="weight">{item}</td>
        )
      } else if (index > 9) {
        return (
          <td key={index} className="bold-font">{item}</td>
        )
      } else {
        return (
          <td key={index}>{item}</td>
        )
      }
    })

    return(
      <div className="output-container">
        <div className="output-box">
          <div className="title">
            <span className="company">重庆金田储运有限公司</span>
            <span className="autoPay" onClick={this.goToAutoPay}>切换至自动支付</span>
          </div>
          <div className="output-body">
            <span className="span">本车<em className="car-info">渝<span>{this.state.carN}</span></em>出库信息如下，请按以下信息到现场理货</span>
            <table className="table">
              <thead>
                <tr>
                  {defaultInfo.infoTitle.map((item,i)=>{
                    return <th key={i}>{item}</th>
                  })}
                </tr>
              </thead>
              <tbody>
              {defaultInfo.infoCont.map((a,i)=>{
                return <tr key={i}>{a.map((b,index)=>{
                  return <td key={index}>{b}</td>
                })}</tr>
              })}
              </tbody>
            </table>
            <div className="operation">
              <button onClick={this.returnIndex}>返回首页</button>
              <button onClick={window.print}>打印信息</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
