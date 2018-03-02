/**
 * Created by 张宇浩 on 2017/11/14.
 */
//发货单查询子组件
import React, {Component, PropTypes} from 'react'
import {IndexLink,Link, browserHistory, History} from 'react-router'

//引入小组件
import QueryHeader from './QueryHeaderComp'
//引入模态框
import ModalBox from './ModalBoxComp'
import '../../../style/BusinesQuery/queryDeliver.scss'
import '../../../style/Common/css/bootstrap.min.css'
//引入header，侧边导航
import SideMenu from '../../components/common/SideMenuComp'
import Header from '../../components/common/HeaderComp'


const defaultKeys = {
  queryKeyWords: ['出库单号', '货主名称', '提货车号', '品名', '生产厂家', '规格', '材质', '出库方式', '提单号'],
  htmlFors: ['listNum', 'goodsOwner', 'carNum', 'tradeName', 'productor', 'specification', 'texture', 'outWay', 'bringNum'],
  title1: ['客户简称', '网单号', '状态', '出库单号', '提货车号', '提货人', '厂家', '品名', '规格1', '规格2', '规格3', '材质', '开票重量', '实发重量', '账页号', '验收鉴定'],
  tableContent: [['测试1', '111', '实发', '222', '川A0000', 'qqq', '海说', '钢', '000', '无', '111', 'HR111', '9', '9', '111', '正常'],['测试2', '33', '实发', '222', '川A0000', 'qqq', '海说', '钢', '000', '无', '111', 'HR111', '11', '9', '111', '正常']]
}

export default class QueryListComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hintShow: false
    }
  }

  //显示条件设置
  _parConditionSet () {
    this.setState({
      hintShow: !this.state.hintShow
    })
  }

  render() {
    //搜索字段遍历
    var queryCont = defaultKeys.queryKeyWords.map((item, index) => {
      if (item === '规格') {
        return (
          <div key={index} className="form-item">
            <label key={index} htmlFor={defaultKeys.htmlFors[index]}>{item}</label>
            <input type="text" className="small-input" placeholder="点击搜索" />
            <input type="text" className="small-input" placeholder="点击搜索" />
            <input type="text" className="small-input" placeholder="点击搜索" />
          </div>
        )
      } else {
        return (
          <div key={index} className="form-item">
            <label key={index} htmlFor={defaultKeys.htmlFors[index]}>{item}</label>
            <input id={defaultKeys.htmlFors[index]} type="text" placeholder="点击搜索" />
          </div>
        )
      }
    })

    //查询结果头遍历
    var queryTitle1 = defaultKeys.title1.map((item, index) => {
      return (
        <td key={index}>{item}</td>
      )
    })

    //内容遍历
    var queryContent = defaultKeys.tableContent.map((trItem, trIndex) => {
      return (
        <tr key={trIndex}>
          {trItem.map((tdItem, tdIndex) => {
            return (
              <td key={tdIndex}>{tdItem}</td>
            )
          })}
        </tr>
      )
    })

    return (
      <div className="deliver-query">
        <Header />
        <div className="floatL">
          <SideMenu props={this.props} />
        </div>
        <div className="deliver-cont">
          <QueryHeader queryType={this.props.location.state} hintShow={this.state.hintShow} _parConditionSet={this._parConditionSet.bind(this)} />
          <div className="deliver-header">
            <h5>电子提单查询</h5>
          </div>
          <div className="main-box">
            <div className="search-box">
              <form className="form-inline">
                {queryCont}
              </form>
            </div>
            <div className="times">
              <div className="radios">
                <div className="radio">
                  <label>
                    <input type="radio" name="optionsRadios" value="noteTime" defaultChecked />
                    开票时间
                  </label>
                </div>
              </div>
            </div>
            <div className="timeSet">
              <label htmlFor="startTime">
                起始时间<input type="datetime-local" />
              </label>
              <label htmlFor="startTime">
                结束时间<input type="datetime-local" />
              </label>
            </div>
          </div>
          <div className="title1">
            <table className="table table-hover info">
              <thead>
              <tr>
                {queryTitle1}
              </tr>
              </thead>
              <tbody>
                {queryContent}
              </tbody>
            </table>
          </div>
        </div>
        <ModalBox hintShow={this.state.hintShow} _parConditionSet={this._parConditionSet.bind(this)} />
      </div>
    )
  }
}
