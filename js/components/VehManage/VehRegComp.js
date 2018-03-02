import React, {Component, PropTypes} from 'react'
import '../../../style/VehManage/VehManage.scss'
import {Link, browserHistory, History, hashHistory} from 'react-router'
import '../../../style/Common/css/bootstrap.min.css'
import HeaderComp from '../common/HeaderComp'
import SideMenuComp from '../common/SideMenuComp'

let test_data=[[356,'川Q35626','进库','','2015/12/28'],
[356,'川Q35626','进库','','2015/12/28'],
[356,'川Q35626','进库','','2015/12/28'],
[356,'川Q35626','进库','','2015/12/28'],
[356,'川Q35626','进库','','2015/12/28'],
[356,'川Q35626','进库','','2015/12/28'],
[356,'川Q35626','进库','','2015/12/28'],
[356,'川Q35626','进库','','2015/12/28'],
[356,'川Q35626','进库','','2015/12/28'],
[356,'川Q35626','进库','','2015/12/28'],
[356,'川Q35626','进库','','2015/12/28']];

let my_data=test_data.map((all,i)=>{
  return(<tr key={i}>{all.map((item,index)=>{
    return <td key={index}>{item}</td>
  })}</tr>);
});


export default class VehRegComp extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div className="veh-container">
        <HeaderComp></HeaderComp>
        <div style={{float:'left'}}>
          <SideMenuComp/>
        </div>

  			{/*正题勿改*/}
  			<div className="veh-content">
  				<div className="veh-col-1086">
  					<ul className="veh-breadcrumb">
  					    <li><a href="#">车辆管理</a></li>
  					    <li><a href="#">车辆登记放行</a></li>
  					</ul>
            <div className="tx">
              <span>在库车辆</span>
              <input type="text"/>
              <span>出库总量</span>
              <input type="text"/>
            </div>
  					<ul className="syzz-action">
  						<li><a href="#">检测</a></li>
  						<li><a href="#">放行</a></li>
  						<li><a href="#">登记</a></li>
  						<li><a href="#">回收</a></li>
  					</ul>
  				</div>
          <h5 className="veh-title-reg">车 辆 登 记 放 行</h5>
          <div className="veh-search">
            <div className="veh-input">
              <span>车号</span>
              <select></select>
            </div>
            <div className="veh-input">
              <span>卡号</span>
              <input type="text" placeholder="点击搜索"/>
            </div>
            <div className="veh-input">
              <span>出门证</span>
              <input type="text" placeholder="点击搜索"/>
            </div>
          </div>
          <div className="veh-remark">
            <span>备注</span>
            <input type="text"/>
          </div>
          <div className="reg-info">车辆信息登记</div>
          <table className="veh-vr-table">
            <thead>
              <tr>
                <th>车号</th>
                <th>卡号</th>
                <th>状态</th>
                <th>备注</th>
                <th>进库时间</th>
              </tr>
            </thead>
            <tbody>
              {my_data}
            </tbody>
          </table>
          <div className="veh-info">出库信息</div>
          <table className="veh-info-table">
            <thead>
              <tr>
                <th>发货重量</th>
                <th>数量</th>
                <th>品名</th>
                <th>规格1</th>
                <th>规格2</th>
                <th>规格3</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    )
  }
}
