import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
// import * as UserAction from '../actions/UserAction'


class ChangeAccountContainer extends Component {
  constructor(props, context) {
    super(props, context)
  }


  componentWillMount() {
  }

  componentDidMount() {
    //this.props.actions.acAsyncOoList()
    /*this.props.router.setRouteLeaveHook(
      this.props.route,
      this.routerWillLeave
    )*/
  }
  /*routerWillLeave(nextLocation){
    return '离开页面确认'
  }*/

  componentWillReceiveProps(nextProps) {
  }

  componentWillUpdate(nextProps, nextState) {
  }

  componentDidUpdate(prevProps, prevState) {
  }


  render() { 
    // actions,
    const {paramsBasket, dispatch} = this.props
    //console.log('111',this.props.paramsBasket.c_oo_list)
    var childrenWrapper = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(
        child,
        {
          paramsBasket,
          // actions,
          dispatch
        })
    })

    return (
      <div>
        {childrenWrapper}
      </div>
    )
  }
}

ChangeAccountContainer.propTypes = {
}

function mapStateToProps(state) {
  return {
    paramsBasket: {
      c_oo_list:state.user.c_oo_list
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // ...UserAction
    actions: bindActionCreators({}, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeAccountContainer)

