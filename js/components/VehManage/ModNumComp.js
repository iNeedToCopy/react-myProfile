import React, {Component, PropTypes} from 'react'
import '../../../style/VehManage/VehManage.scss'
import {Link, browserHistory, History, hashHistory} from 'react-router'
import '../../../style/Common/css/bootstrap.min.css'
import HeaderComp from '../common/HeaderComp'
import SideMenuComp from '../common/SideMenuComp'

let test_data=[['川Q35626',365,'进库','2015/12/28',''],
['川Q35626',365,'进库','2015/12/28',''],
['川Q35626',365,'进库','2015/12/28',''],
['川Q35626',365,'进库','2015/12/28',''],
['川Q35626',365,'进库','2015/12/28',''],
['川Q35626',365,'进库','2015/12/28',''],
['川Q35626',365,'进库','2015/12/28',''],
['川Q35626',365,'进库','2015/12/28',''],
['川Q35626',365,'进库','2015/12/28',''],
['川Q35626',365,'进库','2015/12/28','']];

let my_data=test_data.map((all,i)=>{
  return(<tr key={i}>{all.map((item,index)=>{
    return <td key={index}>{item}</td>
  })}</tr>);
});



export default class ModNumComp extends Component{
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
  					    <li><a href="#">车号修改</a></li>
  					</ul>
  					<ul className="syz-action">
  						<li><a href="#">新增</a></li>
  						<li><a href="#">修改</a></li>
  						<li><a href="#">删除</a></li>
  						<li><a href="#">退回</a></li>
  						<li><a href="#">撤销</a></li>
  						<li><a href="#">保存</a></li>
  						<li><a href="#">刷新</a></li>
  						<li><a href="#">产生</a></li>
  						<li><a href="#">打印</a></li>
  						<li><a href="#">导出</a></li>
  						<li><a href="#">设置</a></li>
  					</ul>
  				</div>
          <h5 className="veh-title">车 号 修 改</h5>
          <div className="veh-search">
            <div className="veh-input">
              <span>车号</span>
              <select></select>
            </div>
            <div className="veh-input">
              <span>卡号</span>
              <input type="text" placeholder="点击搜索"/>
            </div>
          </div>
          <table className="veh-mn-table">
            <thead>
              <tr>
                <th>车号</th>
                <th>卡号</th>
                <th>进库时间</th>
                <th>备注</th>
              </tr>
            </thead>
            <tbody>
              {my_data}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
