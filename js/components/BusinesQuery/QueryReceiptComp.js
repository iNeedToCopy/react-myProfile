/**
 * Created by 张宇浩 on 2017/11/14.
 */
//验收单查询子组件
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
  queryKeyWords: ['交接单号', '验收单号', '货主名称', '品名', '生产厂家', '规格', '材质', '车号', '入库方式'],
  htmlFors: ['connetNum', 'checkNum', 'owner', 'tradeName', 'productor', 'specification', 'texture', 'carNum', 'storageWay'],
  title1: ['交接单号', '验收单号', '客户', '客户单据', '品名', '规格1', '规格2', '规格3', '材质', '库区', '厂家', '入库方式', '状态', '车号', '车站', '验收重量'],
  title2: ['跟踪号', '状态', '合磅重量', '验收重量', '检斤重量', '检尺重量', '标牌重量', '规格1', '规格2', '规格3', '其他属性', '库区号', '货位', '装货重量', '开票']
}

export default class QueryReceiptComp extends Component {
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
            <h5>验收单查询</h5>
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
                    受理时间
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" name="optionsRadios" value="sendTime" />
                    验收时间
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" name="optionsRadios" value="recheckTime" />
                    复核时间
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" name="optionsRadios" value="recheckTime" />
                    上账时间
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
