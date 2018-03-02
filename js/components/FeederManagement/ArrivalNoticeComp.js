/**
 * Created by Aaron on 2017/11/13.
 */
import React, {Component} from 'react'
import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'
import '../../../style/FeederManagement/ArrivalNotice.scss'
import SideMenu from '../../components/common/SideMenuComp'
import Header from '../../components/common/HeaderComp'

const defaultCons = {
  titles: ['新增', '修改', '删除', '退回', '撤销', '保存', '刷新', '产生', '打印', '导出', '设置'],
  formArr: ['货主名称', '品  名' , '生产厂家', '材  质', '规  格', '到达件数', '到达重量', '车  号', '运输方式', '备  注'],
  listArr: ['选择', '货主名称', '车号', '品名', '厂家', '规格1', '规格2', '规格3', '材质', '到达件数', '到达重量', '运输方式']
};
let defaultVars = {};

export default class ArrivalNoticeComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUpdate() {

  }

  componentDidUpdate() {
  }

  render() {
    return (
      <div className="mainContainer">
        <Header/>
        <div className="floatL">
          <SideMenu/>
        </div>
        <div className="rightMenu floatL">
          <div className="containTop">
            <div className="floatL topTitle">
              <span className="titleFont">接运管理</span>
              <span>/</span>
              <span className="titleFont">到货预告</span>
            </div>
            <div className="floatR topTitle">
              {defaultCons.titles.map((a, index) => {
                return (
                  <span key={index} className="titleFont">{a}</span>
                )
              })}
            </div>
          </div>
          <div className="containMiddle">
            <div className="arrivalTitle">
              <span>到货预告</span>
            </div>
            <div className="containForm">
              {defaultCons.formArr.map((a, index) => {
                return (
                  <div key={index} className="formDiv">
                    <span className="formName">{a}</span>
                    {(() => {
                      if (a === '规  格') {
                        return (
                          <div className="formD3">
                            <input type="text" placeholder="点击搜索" className="_formInput"/>
                            <input type="text" placeholder="点击搜索" className="_formInput"/>
                            <input type="text" placeholder="点击搜索" className="_formInput"/>
                          </div>
                        )
                      } else {
                        return (
                          <input type="text" placeholder="点击搜索" className="formInput"/>
                        )
                      }
                    })()}
                  </div>
                )
              })}
              <div className="chooseAll">
                <input type="radio"/>
                <label>&nbsp;全选</label>
              </div>
            </div>
            <div className="containList">
              {defaultCons.listArr.map((a, index) => {
                return (
                  <div key={index} className="listDiv"><span>{a}</span></div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

