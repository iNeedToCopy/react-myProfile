/**
 * Created by Aaron on 2017/11/20.
 */
import React, {Component} from 'react'
import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'
import '../../../style/StorageManagement/CompletedStorageBill.scss'
import SideMenu from '../../components/common/SideMenuComp'
import Header from '../../components/common/HeaderComp'
import NavBar from '../../components/common/NavBarComp'
import Pagination from '../../components/common/PaginationComp'
const defaultCons = {
  listArr:['入库单号','货主','车号','货品','到达重量（吨）','鉴定方式','创建时间','状态','备注'],
  listTable:{
    page:1,
    total:10,
    limit:2,
    tableInfo: [
        {ID:'A486220',company:'重庆亚欧物资有限公司',carNumber:'A12345',special:'螺纹钢 达钢 HRB400 12mm 9米',weight:'120.5',type:'检斤',time:'2017/11/11 11:05',state:'上账成功、入库完成',addition:'无'},
        {ID:'A486221',company:'重庆亚欧物资有限公司',carNumber:'A12345',special:'螺纹钢 达钢 HRB400 12mm 9米',weight:'120.5',type:'检斤',time:'2017/11/11 11:05',state:'上账成功、入库完成',addition:'无'},
        {ID:'A486222',company:'重庆旭升物资有限公司',carNumber:'A12345',special:'螺纹钢 达钢 HRB400 12mm 9米',weight:'120.5',type:'检斤',time:'2017/11/11 11:05',state:'上账成功、入库完成',addition:'无'},
        {ID:'A486223',company:'重庆旭升物资有限公司',carNumber:'A12345',special:'螺纹钢 达钢 HRB400 12mm 9米',weight:'120.5',type:'检斤',time:'2017/11/11 11:05',state:'上账成功、入库完成',addition:'无'},
        {ID:'A486224',company:'重庆同丰物资有限公司',carNumber:'A12345',special:'螺纹钢 达钢 HRB400 12mm 9米',weight:'120.5',type:'检斤',time:'2017/11/11 11:05',state:'上账成功、入库完成',addition:'无'},
        {ID:'A486225',company:'重庆同丰物资有限公司',carNumber:'A12345',special:'螺纹钢 达钢 HRB400 12mm 9米',weight:'120.5',type:'检斤',time:'2017/11/11 11:05',state:'上账成功、入库完成',addition:'无'},
        {ID:'A486226',company:'重庆亚欧物资有限公司',carNumber:'A12345',special:'螺纹钢 达钢 HRB400 12mm 9米',weight:'120.5',type:'检斤',time:'2017/11/11 11:05',state:'上账成功、入库完成',addition:'无'},
        {ID:'A486227',company:'重庆亚欧物资有限公司',carNumber:'A12345',special:'螺纹钢 达钢 HRB400 12mm 9米',weight:'120.5',type:'检斤',time:'2017/11/11 11:05',state:'上账成功、入库完成',addition:'无'},
        {ID:'A486228',company:'重庆亚欧物资有限公司',carNumber:'A12345',special:'螺纹钢 达钢 HRB400 12mm 9米',weight:'120.5',type:'检斤',time:'2017/11/11 11:05',state:'上账成功、入库完成',addition:'无'},
        {ID:'A486229',company:'重庆亚欧物资有限公司',carNumber:'A12345',special:'螺纹钢 达钢 HRB400 12mm 9米',weight:'120.5',type:'检斤',time:'2017/11/11 11:05',state:'上账成功、入库完成',addition:'无'},
        {ID:'A486230',company:'重庆海燕物资有限公司',carNumber:'A12345',special:'螺纹钢 达钢 HRB400 12mm 9米',weight:'120.5',type:'检斤',time:'2017/11/11 11:05',state:'上账成功、入库完成',addition:'无'}]
      }
  }

export default class CompletedStorageBillComp extends Component {
  constructor(props) {
    super(props);
    this.pageNext=this.pageNext.bind(this)
    this.setPage=this.setPage.bind(this)
    this.state = {
      btn_box: [],
      indexList:[],//当前渲染的页面数据
      totalData:defaultCons.listTable.tableInfo,
      current:defaultCons.listTable.page,//当前页码
      pageSize:defaultCons.listTable.limit,//每页显示的条数
      goValue:0,//要去的条数
      totalPage:0
    };
  }
  componentWillMount(){
    //设置总页数
    this.setState({totalPage:Math.ceil(this.state.totalData.length/this.state.pageSize)})
    this.pageNext(this.state.goValue)
  }
  componentWillUpdate() {

  }

  componentDidUpdate() {
  }
  pageNext(num){
    console.log("num==",num)
    this.setPage(num)
  }
  setPage(num){
    this.setState({
      indexList:this.state.totalData.slice(num,num+this.state.pageSize)
    })
  }
  render() {
    return (
      <div className="CompleteStorageContainer">
        <Header/>
        <div className="floatL">
          <SideMenu/>
        </div>
        <div className="StorageBill floatL">
          <NavBar props={this.props.location}/>
          <div className="StorageBillContent">
            <div className="StorageBillTitle">已完成入库单</div>
            <div className="StorageContent">
              <div className="Storage-top">
                 <div className="top-content-left floatL">
                   <label className="radio-inline">
                     <input type="radio" name="optionsRadiosinline" id="optionsRadios3" value="option1" checked/> 全部状态
                   </label>
                   <label className="radio-inline">
                     <input type="radio" name="optionsRadiosinline" id="optionsRadios3" value="option1" checked/> 只看票厅处理
                   </label>
                   <label className="radio-inline">
                     <input type="radio" name="optionsRadiosinline" id="optionsRadios3" value="option1" checked/> 只看现场处理
                   </label>
                 </div>
                <div className="top-content-right floatR">
                  <input type="text" className="searchInput"/>
                  <span className="searchText">搜索</span>
                </div>
              </div>
              <div className="table-info">
                <table className="table" style={{fontSize:'12px'}}>
                  <thead style={{backgroundColor:'#ECEEEF',fontSize:'12px'}}>
                  <tr>
                    {defaultCons.listArr.map((a, index) => {
                      return (
                        <td key={index}>{a}</td>
                      )
                    })}
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.indexList.map((a, index) => {
                    return (
                      <tr key={index}>
                        <td>{a.ID}</td>
                        <td>{a.company}</td>
                        <td>{a.carNumber}</td>
                        <td>{a.special}</td>
                        <td>{a.weight}</td>
                        <td>{a.type}</td>
                        <td>{a.time}</td>
                        <td style={{color:'#D9534F'}}>{a.state}</td>
                        <td>{a.addition}</td>
                      </tr>
                    )
                  })}
                  </tbody>
                </table>
              </div>
              <Pagination {...this.state} pageNext={this.pageNext}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
