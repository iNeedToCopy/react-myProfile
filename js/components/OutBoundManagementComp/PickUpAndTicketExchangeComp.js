import React, {Component, PropTypes} from 'react'
import '../../../style/Common/css/bootstrap.min.css'
import '../../../style/OutBoundManagement/PickUpAndTicketExchange.scss'
import HeaderComp from '../common/HeaderComp'
import SideMenuComp from '../common/SideMenuComp'

import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'

const defaultCons = {navigation:['新增','修改','删除','退回','撤销','保存','刷新','生产','打印','导出','设置'],
  titleC:['发货车号','跟踪号','捆包号','实发重量','单位','出门证号','备注','数量','非标']
};
const defaultVars = {searchContent:[[87950,'科通'],[87950,'科通'],[87950,'科通'],[87950,'科通'],[87950,'科通'],[87950,'科通'],[87950,'科通']
  ,[87950,'科通'],[87950,'科通'],[87950,'科通'],[87950,'科通'],[87950,'科通']],
      contentC:[[6485324,'A336845','',6,'吨',138694,'无',0,0],[6485324,'A336845','',6,'吨',138694,'无',0,0],[6485324,'A336845','',6,'吨',138694,'无',0,0]
      ,[6485324,'A336845','',6,'吨',138694,'无',0,0],[6485324,'A336845','',6,'吨',138694,'无',0,0],[6485324,'A336845','',6,'吨',138694,'无',0,0]]};
export default class PickUpAndTicketExchangeComp extends Component{
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
            <p className="title-p">出库管理</p><p  className="title-xie">/</p><p className="title-p">续提换票</p>
            <ul className="list-unstyled title-bar">{
              defaultCons.navigation.map((item,index)=>{
                return <li key={index} className="title-bar-item">{item}</li>
              })
            }
            </ul>
          </div>
          <div className="right-BAR">
            <div className="right-bar-one">
              <p className="right-bar-one-title">查询</p>
              <div className="right-bar-one-content">
                <p className="p1">单据号</p>
                <p className="mLeft">21条记录</p>
                  <input type="text" placeholder="点击搜索"/>
                <div><p className="p2">车号</p><input type="text" placeholder="点击搜索" className="inputSmall"/></div>
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
          <div className="owner-Name">
            <h5 className="main-h5">续提换票</h5>
            <form action="" className="form-main">
              <label className="form-name">货主名称<input type="text" placeholder="点击搜索"/></label>
              <p className="form-number-title">交接单号：</p>
              <p className="form-number">未生成</p>
            </form>
          </div>
          <div className="main-Content">
            <form action="">
              <label htmlFor="" ><p className="authorize-key">生产厂家</p><input type="text" placeholder="点击搜索"/></label>
              <label htmlFor=""><p className="authorize-key margin-left">品&nbsp;&nbsp;&nbsp;&nbsp;名</p><input type="text" placeholder="点击搜索"/></label>
              <label htmlFor=""><p className="authorize-key margin-left">规&nbsp;&nbsp;&nbsp;&nbsp;格</p><input type="text" placeholder="点击搜索"/></label>
              <label htmlFor="" ><p className="authorize-key">钢&nbsp;&nbsp;牌&nbsp;&nbsp;号</p><input type="text" placeholder="点击搜索"/></label>
              <label htmlFor=""><p className="authorize-key margin-left">验收鉴定</p><input type="text" placeholder="点击搜索"/></label>
              <label htmlFor=""><p className="authorize-key margin-left">管理方式</p><input type="text" placeholder="点击搜索"/></label>
              <label htmlFor="" ><p className="authorize-key">计量方式</p><select>
                <option value ="volvo">点击搜索</option>
                <option value ="saab"> </option>
                <option value="opel"> </option>
                <option value="audi"> </option>
              </select></label>
              <label htmlFor=""><p className="authorize-key margin-left">提&nbsp;&nbsp;单&nbsp;&nbsp;号</p><input type="text" placeholder="点击搜索"/></label>
              <label htmlFor=""><p className="authorize-key margin-left">换票编号</p><input type="text" placeholder="默认"/></label>
              <label htmlFor="" ><p className="authorize-key">提货单位</p><input type="text" placeholder="宣春" className="inputLg"/></label>
              <label htmlFor="" ><p className="authorize-key margin-left">库&nbsp;&nbsp;&nbsp;&nbsp;房</p>
                <input type="text" placeholder="A区" className="input-small"/><input type="text" placeholder="A库"  className="input-small only-left"/></label>
              <label htmlFor="" ><p className="authorize-key">发货计量</p><input type="text" placeholder="检斤"/></label>
              <label htmlFor="" ><p className="authorize-key margin-left">计量方式</p><input type="text" placeholder="提货出库"/></label>
              <label htmlFor="" ><p className="authorize-key margin-left">限提幅度</p><input type="text" placeholder="无"/></label>
              <label htmlFor="" ><p className="authorize-key">预提件数</p><input type="text" placeholder="2" /><i>件</i></label>
              <label htmlFor=""><p className="authorize-key margin-left">预提重量</p><input type="text" placeholder="2"  /><i className="pad">吨</i></label>
              <label htmlFor=""><p className="authorize-key margin-left">预提数量</p><input type="text" placeholder="5" /><i className="pad">根</i></label>
              <label htmlFor="" ><p className="authorize-key">实发件数</p><input type="text" placeholder="2" /><i>件</i></label>
              <label htmlFor=""><p className="authorize-key margin-left">实发重量</p><input type="text" placeholder="2" /><i className="pad">吨</i></label>
              <label htmlFor=""><p className="authorize-key margin-left">实发数量</p><input type="text" placeholder="5" /><i className="pad">根</i></label>
              <label htmlFor=""><p className="authorize-key">备&nbsp;&nbsp;&nbsp;&nbsp;注</p><input type="text" className="beiZhu"/></label>
              <label htmlFor="" ><p className="authorize-key">提货车号</p><select>
                <option value ="volvo"> </option>
                <option value ="saab"> </option>
                <option value="opel"> </option>
                <option value="audi"> </option>
              </select></label>
              <label htmlFor="" ><p className="authorize-key margin-left">附加信息</p><input type="text" className="inputLg"/></label>

            </form>
          </div>
          <div className="delivery">
            <table className="table">
              <thead>
              <tr className="tW BG">
                {defaultCons.titleC.map((item,i)=>{
                  return <th key={i}>{item}</th>
                })}
              </tr>
              </thead>
              <tbody>
              {defaultVars.contentC.map((a,i)=>{
                return <tr key={i} className="tW">{a.map((b,index)=>{
                  return <td key={index}>{b}</td>
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
