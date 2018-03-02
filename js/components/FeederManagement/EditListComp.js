/**
 * Created by Aaron on 2017/11/14.
 */
import React, {Component} from 'react'
import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'
import '../../../style/FeederManagement/EditList.scss'
import SideMenu from '../../components/common/SideMenuComp'
import Header from '../../components/common/HeaderComp'

const defaultCons = {
  titles: ['新增', '修改', '删除', '退回', '撤销', '保存', '刷新', '产生', '打印', '导出', '设置'],
  formArr: ['货票号', '到货日期' , '卸车日期', '卸车情况', '交接情况', '出厂时间', '附带资料', '车  号', '受理人', '运输方式','始发站','入库方式','内转车号',
  '接车人','车  站'],
  _formArr:['生产厂家','品  名','规格1','规格2','长  度','材  质','验收鉴定'],
  formArr_:[['到达重量','吨'],['到达件数','件'],['交接重量','吨'],['交接件数','件']],
  listArr:['货主','厂家','品名','材质','规格1','规格2','长度','到达重量','重量单位','到达件数','包装单位','交接重量','验收鉴定'],
  stuffArr:[['87950','渝A8888','重庆科通建筑材料有限公司','无']]
};
let defaultVars = {};

export default class EditListComp extends Component {
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
              <span className="titleFont">编辑交接单</span>
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
            <div className="containLeft floatL">
              <div className="EditTitle">
                <span>编辑交接单</span>
              </div>
              <div className="tabDiv">
                <span className="tabName">货主名称</span>
                <input type="text" placeholder="点击搜索" className="formInput"/>
                <span className="floatR _tabName">交接单号:未生成</span>
              </div>
              <div className="listDiv">
                {defaultCons.formArr.map((a, index) => {
                  return (
                    <div key={index} className="formDiv">
                      <span className="formName">{a}</span>
                      <input type="text" placeholder="点击搜索" className="formInput"/>
                    </div>
                  )
                })}
              </div>
              <div className="_listDiv">
                {defaultCons._formArr.map((a, index) => {
                  return (
                    <div key={index} className="formDiv">
                      <span className="formName">{a}</span>
                      <input type="text" placeholder="点击搜索" className="formInput"/>
                    </div>
                  )
                })}
                <div className="formDiv">
                  <span className="formName">工&nbsp;&nbsp;艺</span>
                  <input type="text" placeholder="热轧" className="formInput"/>
                </div>
                <div className="formDiv">
                  <span className="formName">计量方式</span>
                  <input type="text" placeholder="检斤" className="formInput"/>
                </div>
                {defaultCons.formArr_.map((a,index)=>{
                  return(
                    <div key={index} className="formDiv positionR">
                      <span className="formName">{a[0]}</span>
                      <input type="text" className="formInput"/>
                      <span className="unit">{a[1]}</span>
                    </div>
                  )
                })}
                <div className="formDiv">
                  <span className="formName">备注</span>
                  <input type="text" className="formInput"/>
                </div>
              </div>
              <div className="addDiv">增加</div>
              <div className="tabList">
                {
                  defaultCons.listArr.map((a,index)=>{
                    return(
                      <div key={index} className={index>6 ? '_tabItems' : 'tabItems'}>{a}</div>
                    )
                  })
                }
              </div>
            </div>
            <div className="containRight floatR">
              <div className="queryDiv">查询</div>
              <div className="radioDiv">
                <div className="radioPos">
                  <input type="radio"/>
                  <span>&nbsp;交接单号</span>
                </div>
                <div className="radioPos">
                  <input type="radio"/>
                  <span>&nbsp;车号</span>
                </div>
              </div>
              <input type="text" className="searchDiv" placeholder="点击搜索"/>
              <div className="stuffTab">
                <div className="stuff_1">交接单</div>
                <div className="stuff_2">车号</div>
                <div className="stuff_3">货主</div>
                <div className="stuff_4">车皮</div>
              </div>
              <div className="stuffContain">
                {
                  defaultCons.stuffArr.map((a,index)=>{
                    return(
                      <div key={index} className="stuffSin">
                        <div className="stuff_1">{a[0]}</div>
                        <div className="stuff_2">{a[1]}</div>
                        <div className="stuff_3">{a[2]}</div>
                        <div className="stuff_4">{a[3]}</div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

