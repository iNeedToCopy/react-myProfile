/**
 * Created by Aaron on 2017/11/13.
 */
import React, {Component} from 'react'
import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'
import '../../../style/StorageManagement/GoodsAccept.scss'
import SideMenu from '../../components/common/SideMenuComp'
import Header from '../../components/common/HeaderComp'

const defaultCons = {
  titles: ['分零', '未完结', '实物查询', '换发实物', '打开电子秤', '退回', '提交', '删除', '刷新'],
  listArr: ['跟踪号', '磅次', '合磅重量', '验收重量', '数量', '标牌重量', '净重', '货位', '堆位', '层序', '毛重', '非标', '非标规格1',
    '非标规格2', '非标规格3', '捆包号', '炉批号', '原厂跟踪号', '其他属性'],
  formArr:['交接单号','品  名','规  格','货主名称','运输方式','生产厂家','车船号','始发站','材质','工  艺','验收鉴定','其他属性','管理方式',
  '入库方式','计量方式','合同号','交接重量','交接件数','客户单据','收货库房','验收重量','验收件数','验收数量']
};
let defaultVars = {};

export default class GoodsAcceptComp extends Component {
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
      <div className="_mainContainer">
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
                if (index < 2) {
                  return (
                    <div key={index} className="radioDiv">
                      <input type="radio" name="radioS"/>
                      <span className="_titleFont">{a}</span>
                    </div>
                  )
                } else {
                  return (
                    <span key={index} className="titleFont">{a}</span>
                  )
                }
              })}
            </div>
          </div>
          <div className="containTitle">物资验收</div>
          <div className="containMiddle">
            {defaultCons.formArr.map((a, index) => {
              return (
                <div key={index} className="formDiv">
                  <span className="formName">{a}</span>
                  {(() => {
                    if (a === '收货库房' || a === '验收件数') {
                      return (
                        <div className="formD3">
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
          </div>
          <div className="containBottom">
            <div className="listTab">
              {
                defaultCons.listArr.map((a, index) => {
                  if (index == 12 || index == 13 || index == 14 || index == 17) {
                    return (
                      <div className="listItem">
                        <span>{a}</span>
                      </div>
                    )
                  } else {
                    return (
                      <div className="listItems">
                        <span>{a}</span>
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

