/**
 * Created by 张宇浩 on 2017/11/13.
 */
import React, {Component} from 'react'
import '../../../style/BusinesQuery/modalBox.scss'
import '../../../style/Common/css/bootstrap.min.css'

//待处理任务抽离上方导航条的小组件
//点击查询会调用父组件的弹出框,需要在引用该组件时传入响应数据，才可以在子组件中调用
const defultData = {
  conditions: ['货主名称', '车号', '品名', '厂家', '规格1', '规格2', '规格3', '材质', '到达件数', '到达重量', '备注', '登记时间', '登记人']
}
export default class ModalBox extends Component {
  //获取父组件传入的hintShow状态
  constructor(props) {
    super(props)
    this.state = {
      hintShow: this.props.hintShow,
      conditionId: 'nowCondition',
      condition: ''
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

  addCondition (e) {
    var chooseCondition = $(e.target).parent().text()
    this.setState({
      condition: chooseCondition
    })
    $('#nowCondition').val(chooseCondition)
  }

  render () {
    var conditionArr = defultData.conditions.map((item, index) => {
      return (
        <div key={index} className="checkbox">
          <label>
            <input key={index} onClick={this.addCondition.bind(this)} type="checkbox"/>{item}
          </label>
        </div>
      )
    })

    return (
      <div className="box">
        <div className={this.state.hintShow ? 'hint' : 'hidden'}>
          <div className="setting-title">
            <h5>查询条件设置</h5>
          </div>
          <div className="setting-cont">
            <div className="setting-box">
              {conditionArr}
            </div>
            <div className="left-arrow">
              <span className="glyphicon glyphicon-arrow-left"></span>
            </div>
            <div className="conditions">
              <table className="table table-hover">
                <thead>
                <tr>
                  <td>查询条件</td>
                  <td>组合条件</td>
                </tr>
                </thead>
              </table>
              <span className="glyphicon glyphicon-arrow-up"></span>
            </div>
            <div className="judge">
              <form action="" className="form-inline">
                <div className="form-group">
                  <input defaultValue={this.state.condition} type="text" className="form-control" id={this.state.conditionId} disabled />
                </div>
                <select className="form-control" name="condition">
                  <option value="0">等于</option>
                  <option value="1">大于</option>
                  <option value="2">小于</option>
                  <option value="3">不等于</option>
                </select>
                <div className="form-group">
                  <input type="text" className="form-control"/>
                </div>
                <select className="form-control" name="result">
                  <option value="0">并且</option>
                  <option value="1">或者</option>
                </select>
              </form>
            </div>
          </div>
          <div className="setting-foot">
            <button>确定</button>
            <button onClick={this._chilConditionSet.bind(this)}>取消</button>
          </div>
        </div>
        <div className={this.state.hintShow ? 'cover' : 'hidden'}></div>
      </div>
    )
  }
}
