/**
 * Created by Aaron on 2017/11/20.
 */
/**
 * Created by Aaron on 2017/11/13.
 */
import React, {Component} from 'react'
import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'
import '../../../style/Common/Pagination.scss'
import Empty from '../../utils/emptyUtils'

const defaultCons = {
};
let defaultVars = {};
export default class PaginationComp extends Component {
  constructor(props) {
    super(props);
    this.setNext=this.setNext.bind(this)
    this.setUp=this.setUp.bind(this)
    this.state = {
      num:0,
      pageNum:this.props.current,
      btn_box:[],
      currentIndex:0,
    };
  }
  componentWillUpdate() {

  }
  componentDidUpdate() {
  }
  setNext(){
    if(this.state.pageNum<this.props.totalPage){
      this.setState({
        num:this.state.num+this.props.pageSize,
        pageNum:this.state.pageNum+1
      },()=>{
        this.props.pageNext(this.state.num)
      })
    }
  }
  setUp(){
   if(this.state.pageNum>0){
      this.setState({
        num:this.state.num-this.props.pageSize,
        pageNum:this.state.pageNum-1,
      },()=>{
        this.props.pageNext(this.state.num)
      })
    }
  }
  handleMove(i){
    this.setState({
      pageNum:i+1,
      num:this.props.pageSize*i,
    },()=>{
      this.props.pageNext(this.state.num)
    })

  }
  render() {
    console.log("pageNum",this.state.pageNum)
    let btn_box=[];
    if(Empty.check(this.props)){
      let i=0
      for(i;i<this.props.totalPage;i++){
        btn_box[i]=[
          <button value={i+1} id={"button-box"+i}
                  className={(i+1)===this.state.pageNum?"buttonSty1":"buttonSty"} onClick={this.handleMove.bind(this,i)}>{i+1}</button>
        ]
      }
      this.state.btn_box=btn_box
    }
    return (
        <div className="Pagination">
          <button className="buttonSty" onClick={this.setUp}>《</button>
         {/* <button className="buttonSty">1</button>
          <button className="buttonSty">2</button>
          <button className="buttonSty">3</button>*/}
          {this.state.btn_box}
          <button className="buttonSty" onClick={this.setNext}>》</button>
        </div>
    )
  }
}
