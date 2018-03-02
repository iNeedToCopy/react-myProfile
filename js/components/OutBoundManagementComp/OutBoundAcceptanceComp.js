import React, {Component, PropTypes} from 'react'
import '../../../style/Common/css/bootstrap.min.css'
import '../../../style/OutBoundManagement/OutBoundAcceptance.scss'
import HeaderComp from '../common/HeaderComp'
import SideMenuComp from '../common/SideMenuComp'

import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'

const defaultCons = {navigation:['新增','修改','删除','退回','撤销','保存','刷新','生产','打印','导出','设置'],
        title:['库区','库房','货位','垛位','层序','捆包号','跟踪号','规格1','规格2','规格3','材质','厂家','炉批号','车号','验收重量','检尺重量','标重','备注']
};
const defaultVars = {content:[['A','','','','','','','','','','','','','','','','',''],['A','','','','','','','','','','','','','','','','','']
,['A','','','','','','','','','','','','','','','','',''],['A','','','','','','','','','','','','','','','','','']],
searchContent:[[87950,'科通'],[87950,'科通'],[87950,'科通'],[87950,'科通'],[87950,'科通'],[87950,'科通'],[87950,'科通']
  ,[87950,'科通'],[87950,'科通'],[87950,'科通'],[87950,'科通'],[87950,'科通']]};
export default class OutBoundAcceptanceComp extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <div className="container-page">
        <div className="companyName"><HeaderComp/></div>
        <div className="sideBar"><SideMenuComp/></div>
        <div className="main-container">
          <div className="main-title">
            <p className="title-p">出库管理</p><p  className="title-xie">/</p><p className="title-p">出库受理</p>
            <ul className="list-unstyled title-bar">{
              defaultCons.navigation.map((item,index)=>{
                return <li key={index} className="title-bar-item">{item}</li>
              })
            }
            </ul>
          </div>
          <div className="rightBar">
            <div className="right-bar-one">
              <p className="right-bar-one-title">查询</p>
              <div className="right-bar-one-content">
                  <p className="p1">单据号</p>
                  <p className="mLeft">21条记录</p>
                  <form action="">
                    <input type="text" placeholder="点击搜索"/>
                  </form>
              </div>
            </div>
            <div className="right-bar-two">
              <table className="table table-word">
                <thead>
                <tr className="table-h">
                  <td className="tdWidth"> </td>
                  <td> </td>
                </tr>
                </thead>
                <tbody>
                {defaultVars.searchContent.map((a,index)=>{
                  return <tr key={index}>{a.map((b,i)=>{
                    return <td key={i}>{b}</td>
                  })}</tr>
                })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="owner-name">
            <h5 className="main-h5">出库受理</h5>
            <form action="" className="form-main">
              <label className="form-name">货主名称<input type="text" placeholder="点击搜索"/></label>
              <label className="form-name"><input type="radio" className="form-radio"/>临时提单</label>

              <p className="form-number-title">交接单号：</p>
              <p className="form-number">未生成</p>
            </form>
          </div>
          <div className="main-content">
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
              <label htmlFor=""><p className="authorize-key">附加信息</p><input type="text" className="beiZhu"/></label>
              <div className="OutBound">
                <div className="outdoor-one">
                    <label htmlFor=""><input type="radio"/>立即放行</label>
                    <label htmlFor=""><input type="radio"/>暂不放行</label>
                </div>
                <div className="outdoor-two">
                  <p className="fTop">电子提单号:</p><p className="fTop">1071</p>
                  <p className="fLeft">提货人:</p><p className="fLeft width"> </p>
                  <p>证件号:</p><p> </p>
                </div>
              </div>
            </form>
          </div>
          <div className="list">
            <table className="table table-font">
              <thead>
              <tr className="active table-head">
                {defaultCons.title.map((item,index)=>{
                  return <th key={index} className="table-th">{item}</th>
                })}
              </tr>
              </thead>
              <tbody>
              {defaultVars.content.map((a,index)=>{
                return <tr key={index} className="table-item">{a.map((b,i)=>{
                  return <td key={i}>{b}</td>
                })}</tr>
              })}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    )
  }
}
