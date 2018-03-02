/**
 * Created by 张宇浩 on 2017/11/13.
 */
import React, {Component} from 'react'
import '../../../style/BusinesQuery/queryHeader.scss'
import '../../../style/Common/css/bootstrap.min.css'

//待处理任务抽离上方导航条的小组件
//点击查询会调用父组件的弹出框,需要在引用该组件时传入响应数据，才可以在子组件中调用
export default class QueryHeader extends Component {
  //获取父组件传入的hintShow状态
  constructor(props) {
    super(props)
    this.state = {
      hintShow: this.props.hintShow,
      queryType: this.props.queryType.name
    }
  }

  componentWillReceiveProps(props){
    this.setState({
      hintShow: props.hintShow
    })
  }

  //调用父组件传入的_parConditionSet方法
  _chilConditionSet () {
    this.props._parConditionSet()
  }

  render () {
    return (
      <div className="query-title-nav">
        <div className="left-title">
          <span>业务查询</span>/<span>{this.state.queryType}</span>
        </div>
        <div className="right-title">
          <ul>
            <li><a href="#">新增</a></li>
            <li><a href="#">修改</a></li>
            <li><a href="#">删除</a></li>
            <li><a href="#">退回</a></li>
            <li><a href="#">撤销</a></li>
            <li><a href="#">保存</a></li>
            <li><a href="#">刷新</a></li>
            <li><a onClick={this._chilConditionSet.bind(this)} href="javascript:;">查询</a></li>
            <li><a href="#">打印</a></li>
            <li><a href="#">导出</a></li>
            <li><a href="#">设置</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

/*
const QueryHeader = () => (
  <div className="query-title">
    <div className="left-title">
      <span>业务查询</span>/<span>待处理任务</span>
    </div>
    <div className="right-title">
      <ul>
        <li><a href="#">新增</a></li>
        <li><a href="#">修改</a></li>
        <li><a href="#">删除</a></li>
        <li><a href="#">退回</a></li>
        <li><a href="#">撤销</a></li>
        <li><a href="#">保存</a></li>
        <li><a href="#">刷新</a></li>
        <li><a onClick={this._conditionSet} href="javascript:;">查询</a></li>
        <li><a href="#">打印</a></li>
        <li><a href="#">导出</a></li>
        <li><a href="#">设置</a></li>
      </ul>
    </div>
  </div>
)

export default QueryHeader
*/
