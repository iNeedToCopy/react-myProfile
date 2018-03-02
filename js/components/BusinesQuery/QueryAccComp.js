/**
 * Created by 张宇浩 on 2017/11/14.
 */
//账页查询子组件
import React, {Component, PropTypes} from 'react'
import {IndexLink,Link, browserHistory, History} from 'react-router'

//引入小组件
import QueryHeader from './QueryHeaderComp'
//引入模态框
import ModalBox from './ModalBoxComp'
//引入header，侧边导航
import SideMenu from '../../components/common/SideMenuComp'
import Header from '../../components/common/HeaderComp'
import '../../../style/BusinesQuery/queryDeliver.scss'
import '../../../style/Common/css/bootstrap.min.css'


const defaultKeys = {
  queryKeyWords: ['账页号', '套账编号', '货主名称', '品名', '生产厂家', '规格', '材质'],
  htmlFors: ['accountNum', 'setsAccNum', 'owner', 'tradeName', 'productor', 'specification', 'texture'],
  title1: ['贷主名称', '账页号', '品名', '规格1', '规格2', '规格3', '材质', '厂家', '工艺', '结存数量', '结存重量', '结存非标', '验收鉴定', '计量方式', '管理方式'],
  title2: ['入/出', '客户单据', '方式', '入/出单据号', '件数', '数量', '上下账前重量', '重量', '作业时间']
}

export default class QueryAccComp extends Component {
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
    // $('.box').children().fadeToggle(200)
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

    var queryTitle2 = defaultKeys.title2.map((item, index) => {
      return (
        <td key={index}>{item}</td>
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
            <h5>账页查询</h5>
          </div>
          <div className="main-box">
            <div className="search-box">
              <form>
                {queryCont}
              </form>
            </div>
            <div className="times">
              <div className="radios">
                <div className="radio">
                  <label>
                    <input type="radio" name="optionsRadios" value="noteTime" defaultChecked />
                    建账时间
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

              </tbody>
            </table>
          </div>
          <div className="title2">
            <table className="table table-hover info">
              <thead>
              <tr>
                {queryTitle2}
              </tr>
              </thead>
              <tbody>

              </tbody>
            </table>
          </div>
        </div>
        <ModalBox hintShow={this.state.hintShow} _parConditionSet={this._parConditionSet.bind(this)} />
      </div>
    )
  }
}
