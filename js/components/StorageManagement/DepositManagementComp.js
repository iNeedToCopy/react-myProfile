import React, {Component} from 'react'
import Header from '../../components/common/HeaderComp'
import SideMenuComp from "../common/SideMenuComp";
import '../../../style/Common/css/bootstrap.min.css'
import '../../../style/StorageManagement/DepositManage.scss'
import drop_down from '../../../images/drop_down.png'
const defaultCons = {
  titles: ['新增', '修改', '删除', '退回', '撤销', '保存', '刷新', '产生', '打印', '导出', '设置'],
  formArr: ['生产厂家', '品  名' , '材  质', '规  格', '验收鉴定', '工  艺', '管理方式', '入库方式', '供货合同', '客户单据','计量方式', '运输方式', '车 号', '验收重量', '验收件数', '验收数量'],
  goodsList:['上账重量','消化量','套账编号','到达重量','到达件数','内转车号','接收人','车站','打印时间','备注'],
  listArr: ['跟踪号','磅次号','合磅重量','验收重量','数量','货权重量','标牌重量','检尺重量','库区',
    '库房','货位','堆号','垛位','层序','捆绑号','原厂跟踪号','炉批号','入库时间','备注'],
  listTable:[['Y486224','001','3.805','1.903','0','1.903','0','0','D区','D2库','D203','2','1','3','01','','','',''],
    ['Y486224','001','3.805','1.903','0','1.903','0','0','D区','D2库','D203','2','1','3','01','','','',''],
    ['Y486224','001','3.805','1.903','0','1.903','0','0','D区','D2库','D203','2','1','3','01','','','',''],
    ['Y486224','001','3.805','1.903','0','1.903','0','0','D区','D2库','D203','2','1','3','01','','','',''],
    ['Y486224','001','3.805','1.903','0','1.903','0','0','D区','D2库','D203','2','1','3','01','','','','']],
  tableInfo:[[148708,79437],[148716,779444],[148716,779444],[148716,779444],[148716,779444],
    [148716,779444],[148716,779444],[148716,779444],[148716,779444],[148716,779444]
    ,[148716,779444],[148716,779444]]
};
export default class DepositManagementComp extends Component{
  render(){
    return(
      <div className="depositContainer">
        <Header/>
        <div className="floatL">
          <SideMenuComp props={this.props}/>
        </div>
        <div className="rightContent floatL">
          <div className="deposit-top floatL">
            <div className="deposit-top-title floatL">
              <span className="titleFont">入库管理</span>
              <span>/</span>
              <span className="titleFont">存单管理</span>
            </div>
            <div className="deposit-top-title floatR">
              {defaultCons.titles.map((a, index) => {
                return (
                  <span key={index} className="titleFont">{a}</span>
                )
              })}
            </div>
          </div>
          <div className="depositContent floatL">
            <div className="depositContent-left floatL">
              <div className="depositLeftTitle">
                <span className="titleFont">存单管理</span>
              </div>
              <div className="form-title">
                <div className="form-title-font floatL">
                  <span className="formName">货主单位</span>
                  <input type="text" placeholder="点击搜索" className="formInput"/>
                </div>
                <div className="form-title-font floatR">
                  <span className="formName">单据号：</span>
                  <span className="formName">未生成</span>
                </div>
              </div>
              <div className="form-center floatL">
                {defaultCons.formArr.map((a, index) => {
                  return (
                    <div key={index} className="formRow" style={{marginRight:(index+1)%3===0?0:'15px',
                      marginTop:'20px',marginBottom:'20px',marginLeft:'3px'}}>
                      <span className="formNameF">{a}</span>
                      {(() => {
                        if(a==='验收重量'){
                          return (
                            <div className="inputDiv">
                            <input type="text" placeholder="点击搜索" className="formInputS"/>
                              <span className="unit">吨</span>
                            </div>
                          )
                        }else if(a==='验收件数'){
                          return (
                            <div className="inputDiv">
                              <input type="text" placeholder="点击搜索" className="formInputS"/>
                              <span className="unit">件</span>
                            </div>
                          )
                        }else if(a==='验收数量'){
                          return (
                            <div className="inputDiv">
                              <input type="text" placeholder="点击搜索" className="formInputS"/>
                              <span className="unit">支</span>
                            </div>
                          )
                        }else if(a==='计量方式'){
                          return (
                            <div className="inputImg">
                              <input type="text" placeholder="点击搜索" className="formInputI"/>
                              <img src={drop_down} className="imgSty" width="8px" height="4px"/>
                            </div>
                            )
                        }else if(a==='运输方式'){
                          return (
                            <div className="inputImg">
                              <input type="text" placeholder="点击搜索" className="formInputI"/>
                              <img src={drop_down} className="imgSty" width="8px" height="4px"/>
                            </div>
                          )
                        }else{
                          return (
                            <input type="text" placeholder="点击搜索" className="formInputE"/>
                          )
                        }
                      })()}
                    </div>
                  )
                })}
              </div>
              <div className="form-bottom floatL" style={{width:'664px'}}>
                {defaultCons.goodsList.map((a, index) => {
                  return (
                    <div key={index} className="formBottomRow" style={{marginRight:(index+1)%3===0?0:'15px',
                      marginTop:'20px',marginBottom:'20px',marginLeft:'3px'}}>
                      <span className="formNameB">{a}</span>
                      {(() => {
                       if(a==='内转车号'){
                          return (
                            <div className="inputBottomImg">
                              <input type="text" placeholder="点击搜索" className="formInputB"/>
                              <img src={drop_down} className="imgSty" width="8px" height="4px"/>
                            </div>
                          )
                        }else if(a==='车站'){
                          return (
                            <div className="inputBottomImg">
                              <input type="text" placeholder="点击搜索" className="formInputB"/>
                              <img src={drop_down} className="imgSty" width="8px" height="4px"/>
                            </div>
                          )
                        }else{
                          return (
                            <input type="text" placeholder="点击搜索" className="formInputBS"/>
                          )
                        }
                      })()}
                    </div>
                  )
                })}
              </div>
            </div>
           <div className="depositContent-right floatR">
             <div className="search-title">
                 <span className="findFont">查询</span>
             </div>
             <div className="search-name">
               <div>
               <label className="radio-inline">
                 <input type="radio" name="optionsRadiosinline" id="optionsRadios3" value="option1" checked/> 验收单号
               </label>
               </div>
               <div>
               <label className="radio-inline">
                 <input type="radio" name="optionsRadiosinline" id="optionsRadios3" value="option1" checked /> 交接单
               </label>
               </div>
             </div>
             <div className="search-input">
               <input type="text" placeholder="点击搜索" className="searchInput"/>
             </div>
             <div className="search-table">
               <table className="table table-bordered">
                 <thead style={{backgroundColor:'#ECEEEF'}}>
                 <tr>
                   <th>验收单号</th>
                   <th>交接单号</th>
                 </tr>
                 </thead>
                 <tbody>
                 {defaultCons.tableInfo.map((a, index) => {
                   return (
                     <tr key={index}>
                       {a.map((b,index1)=>{
                         return (
                           <td key={index1}>{b}</td>
                         )
                       })}
                     </tr>
                   )
                 })}
                 </tbody>
               </table>
             </div>
           </div>
          </div>
          <div className="depositBottom">
            <table className="table">
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
              {defaultCons.listTable.map((a, index) => {
              return (
                <tr key={index}>
                  {a.map((b,index1)=>{
                    return (
                      <td key={index1}>{b}</td>
                    )
                  })}
                </tr>
              )
            })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    )
  }
}
