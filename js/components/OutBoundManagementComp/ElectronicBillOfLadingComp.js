import React, {Component, PropTypes} from 'react'
import '../../../style/Common/css/bootstrap.min.css'
import '../../../style/OutBoundManagement/ElectronicBillOfLading.scss'
import HeaderComp from '../common/HeaderComp'
import SideMenuComp from '../common/SideMenuComp'

import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'

const defaultCons = {navigation:['新增','修改','删除','退回','撤销','保存','刷新','生产','打印','导出','设置'],
  titleA:['网单号','提货车号','客户']
};
const defaultVars = {contentA:[[988791698,'晋AYH98','科通'],[988791698,'晋AYH98','科通'],
  [988791698,'晋AYH98','科通'],[988791698,'晋AYH98','科通'],[988791698,'晋AYH98','科通'],
  [988791698,'晋AYH98','科通'],[988791698,'晋AYH98','科通'],[988791698,'晋AYH98','科通'],
  [988791698,'晋AYH98','科通'],[988791698,'晋AYH98','科通'],[988791698,'晋AYH98','科通']]};
export default class ElectronicBillOfLadingComp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      date:new Date().toLocaleString()
    };
  }
  render(){
    return(
      <div className="container-page">
        <div className="companyName"><HeaderComp/></div>
        <div className="sideBar"><SideMenuComp/></div>
        <div className="main-container">
          <div className="mainTitle">
            <p className="title-p">出库管理</p><p  className="title-xie">/</p><p className="title-p">电子提单</p>
            <ul className="list-unstyled title-bar">{
              defaultCons.navigation.map((item,index)=>{
                return <li key={index} className="title-bar-item">{item}</li>
              })
            }
            </ul>
          </div>
          <div className="right">
            <div className="right-bar-one">
              <p className="right-bar-one-title">查询</p>
              <div className="right-bar-one-content">
                  <p>客&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;户</p><input type="text"/>
                  <p>网&nbsp;&nbsp;单&nbsp;&nbsp;号</p><input type="text"/>
                  <p>随机密码</p><input type="text"/>
                  <p>提货车号</p><input type="text"/>
              </div>
            </div>
            <div className="right-bar-two">
              <table className="table">
                <thead>
                <tr className="table-h bgC">
                <td className="tdWidth">网单号</td>
                <td className="tdWidthP">提货车号</td>
                <td>客户</td>
                </tr>
                </thead>
                <tbody>
                {defaultVars.contentA.map((a,i)=>{
                  return <tr key={i} className="table-h">{a.map((b,index)=>{
                    return <td key={index}>{b}</td>
                  })}</tr>
                })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="ownerName">
            <h5 className="main-h5">电子提单</h5>
            <form action="" className="form-main">
              <label className="form-name">货主名称<input type="text" placeholder="点击搜索"/></label>
              <p className="form-number-title">交接单号：</p>
              <p className="form-number">未生成</p>
            </form>
          </div>
          <div className="mainContent">
            <form action="" className="form-border">
              <label htmlFor="" ><p className="authorize-key">生产厂家</p><input type="text" placeholder="点击搜索"/></label>
              <label htmlFor=""><p className="authorize-key margin-left">品&nbsp;&nbsp;&nbsp;&nbsp;名</p><input type="text" placeholder="点击搜索"/></label>
              <label htmlFor=""><p className="authorize-key margin-left">规&nbsp;&nbsp;&nbsp;&nbsp;格</p><input type="text" placeholder="点击搜索"/></label>
              <label htmlFor="" ><p className="authorize-key">材&nbsp;&nbsp;&nbsp;&nbsp;质</p><input type="text" placeholder="点击搜索"/></label>
              <label htmlFor=""><p className="authorize-key margin-left">验收鉴定</p><select>
                <option value ="volvo">点击搜索</option>
                <option value ="saab"> </option>
                <option value="opel"> </option>
                <option value="audi"> </option>
              </select></label>
              <label htmlFor=""><p className="authorize-key margin-left">管理方式</p><select>
                <option value ="volvo">点击搜索</option>
                <option value ="saab"> </option>
                <option value="opel"> </option>
                <option value="audi"> </option>
              </select></label>
              <label htmlFor="" ><p className="authorize-key">出库方式</p><select>
                <option value ="volvo">点击搜索</option>
                <option value ="saab"> </option>
                <option value="opel"> </option>
                <option value="audi"> </option>
              </select></label>
              <label htmlFor=""><p className="authorize-key margin-left">提&nbsp;&nbsp;单&nbsp;&nbsp;号</p><select>
                <option value ="volvo">点击搜索</option>
                <option value ="saab"> </option>
                <option value="opel"> </option>
                <option value="audi"> </option>
              </select></label>
              <label htmlFor=""><p className="authorize-key margin-left">换票编号</p><input type="text" placeholder="默认"/></label>
              <label htmlFor="" ><p className="authorize-key">提货单位</p><input type="text" placeholder="点击搜索" className="inputLg"/></label>
              <label htmlFor="" ><p className="authorize-key margin-left">提货车号</p><select className="select-small">
                <option value ="volvo">点击搜索</option>
                <option value ="saab"> </option>
                <option value="opel"> </option>
                <option value="audi"> </option>
              </select><span>读卡</span></label>
              <label htmlFor="" ><p className="authorize-key">发货计量</p><select>
                <option value ="volvo">点击搜索</option>
                <option value ="saab"> </option>
                <option value="opel"> </option>
                <option value="audi"> </option>
              </select></label>
              <label htmlFor="" ><p className="authorize-key margin-left">计量方式</p><select>
                <option value ="volvo">点击搜索</option>
                <option value ="saab"> </option>
                <option value="opel"> </option>
                <option value="audi"> </option>
              </select></label>
              <label htmlFor="" ><p className="authorize-key margin-left">限提幅度</p><select>
                <option value ="volvo">无</option>
                <option value ="saab"> </option>
                <option value="opel"> </option>
                <option value="audi"> </option>
              </select></label>
              <label htmlFor="" ><p className="authorize-key">预提件数</p><input type="text" /><i>件</i></label>
              <label htmlFor=""><p className="authorize-key margin-left">预提重量</p><input type="text" /><i className="pad">吨</i></label>
              <label htmlFor=""><p className="authorize-key margin-left">预提数量</p><input type="text" /><i className="pad">根</i></label>
              <label htmlFor=""><p className="authorize-key">备&nbsp;&nbsp;&nbsp;&nbsp;注</p><input type="text" className="beiZhu"/></label>
              <label htmlFor="" ><p className="authorize-key">套账编号</p><input type="text" placeholder="默认"/></label>
              <label htmlFor="" ><p className="authorize-key margin-left">附加信息</p><input type="text" className="inputLg"/></label>
              <label htmlFor="" ><p className="authorize-key">提&nbsp;&nbsp;货&nbsp;&nbsp;人</p><input type="text"/></label>
              <label htmlFor="" ><p className="authorize-key margin-left">证件号码</p><input type="text" className="inputLg"/></label>
              <div className="goodsNumber">
                <div className="outdoor">
                  <label htmlFor=""><input type="radio"/>立即放行</label>
                  <label htmlFor=""><input type="radio"/>暂不放行</label>
                </div>
                <p className="p1">提货码:</p>
                <p>uyxzt</p>
              </div>

            </form>
          </div>
          <div className="time">
            <p className="p1">制单日期</p>
            <p className="p2">{this.state.date}</p>
          </div>
        </div>

      </div>
    )
  }
}
