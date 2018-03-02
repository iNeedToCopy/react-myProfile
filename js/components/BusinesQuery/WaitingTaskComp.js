/**
 * Created by 张宇浩 on 2017/11/13.
 */
//待处理任务
import React, {Component, PropTypes} from 'react'
import {IndexLink,Link, browserHistory, History} from 'react-router'

//引入小组件
import QueryHeader from './QueryHeaderComp'
//引入模态框
import ModalBox from './ModalBoxComp'
//引入header，侧边导航
import SideMenu from '../../components/common/SideMenuComp'
import Header from '../../components/common/HeaderComp'
import '../../../style/BusinesQuery/waitingTask.scss'
import '../../../style/Common/css/bootstrap.min.css'

export default class WaitingTaskComp extends Component {
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
    return (
      <div className="waiting-task">
        <Header />
        <div className="floatL">
          <SideMenu />
        </div>
        <div className="query-cont">
          <QueryHeader queryType={this.props.location.state} hintShow={this.state.hintShow} _parConditionSet={this._parConditionSet.bind(this)} />
          <div className="query-header">
            <h5>待处理任务</h5>
          </div>
          <div className="tasks">
            <ul>
              <li><a href="#">到货预告</a></li>
              <li><a href="#">接运通知</a></li>
              <li><a href="#">入库任务</a></li>
              <li><a href="#">出库任务</a></li>
              <li><a href="#">装货车辆</a></li>
              <li><a href="#">在线车皮</a></li>
              <li><a href="#">业务日志</a></li>
            </ul>
          </div>
          <table className="table table-hover info">
            <thead>
              <tr>
                <td>货主名称</td>
                <td>车号</td>
                <td>品名</td>
                <td>厂家</td>
                <td>规格1</td>
                <td>规格2</td>
                <td>规格3</td>
                <td>到达件数</td>
                <td>到达重量</td>
                <td>备注</td>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
        <ModalBox hintShow={this.state.hintShow} _parConditionSet={this._parConditionSet.bind(this)} />
      </div>
    )
  }
}
