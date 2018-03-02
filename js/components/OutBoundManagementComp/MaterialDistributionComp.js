import React, {Component, PropTypes} from 'react'
import Header from '../../components/common/HeaderComp'
import SideMenuComp from '../common/SideMenuComp'
import '../../../style/Common/css/bootstrap.min.css'
import '../../../style/OutBoundManagement/MaterialDistribution.scss'

const defaultCons = {
  titles: ['分零', '未完结', '实物查询', '换发实物', '打开电子秤', '退回', '提交', '删除', '刷新'],
  formArr:['发货单号','提货单号','提货人','货主名称','品名','生产厂家','规格','材质','工  艺','验收鉴定','其他属性','计量方式',
    '发货方式','出库方式','附加信息','限提幅度'],
  smallFormArr:['开票重量','开票件数','开票数量','开票非标','提货车号','实发重量','实发件数','实发数量','实发非标','定尺'],
  listArr:['跟踪号','磅次','合磅重量','实发重量','货位','堆位','层序','提货车号','标牌重量','库区号','库房号','比重值','厂家','规格1','规格2','规格3','材质','手工'],
  listTable:[['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
    ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
    ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
    ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']]
};
const defaultVars = {};
export default class MaterialDistributionComp extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <div className="container-Materials">
        <Header />
        <div className="floatL">
          <SideMenuComp props={this.props}/>
        </div>
        <div className="right-Materials floatL">
          <div className="Materials-top floatL">
            <div className="Materials-top-title floatL">
              <span className="titleFont">出库管理</span>
              <span>/</span>
              <span className="titleFont">物资发放</span>
            </div>
            <div className="Materials-top-title floatR">
              {defaultCons.titles.map((a,index)=>{
                if(index<2){
                  return (
                    <div key={index} className="radioDiv">
                      <input type="radio" />
                      <span className="_titleFont">{a}</span>
                    </div>
                  )
                }else{
                  return (
                    <span key={index} className="titleFont">{a}</span>
                  )
                }
              })}
            </div>
          </div>
          <div className="material-content floatL">
            <div className="material-content-top">
              <span className="titleFont">物资发放</span>
            </div>
            <div className="material-form-top floatL">
              {defaultCons.formArr.map((a,index)=>{
                return (
                  <div key={index} className="formRow" style={{marginRight:(index+1)%4===0?'201px':'18px',
                    marginTop:index<4?'24px':'21px',marginLeft:'2px'}}>
                    <span className="formNameF">{a}</span>
                    <input type="text" placeholder="点击搜索" className="formInput"/>
                  </div>
                )
              })}
            </div>
            <div className="material-form-bottom floatL">
              {defaultCons.smallFormArr.map((a,index)=>{
                if(a==='定尺'){
                  return (
                      <span className="formNameFS" style={{border:'1px solid #1C7CD5',color:'#1C7CD5',borderRadius:'5px',padding:'2px 5px'}}>{a}</span>
                  )
                }else{
                  return (
                    <div key={index} className="formSmallRow" style={{marginRight:'18px',
                      marginTop:index<4?'24px':'21px',marginLeft:'2px'}}>
                      <span className="formNameFS">{a}</span>
                      <input type="text" placeholder="点击搜索" className="formInputS"/>
                    </div>
                  )
                }

              })}
            </div>
          </div>
          <div className="material-bottom floatL">
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
