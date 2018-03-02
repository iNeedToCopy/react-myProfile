/*调帐报表*/
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as UserAction from '../../actions/UserAction'


class AccFormContainer extends Component {
  constructor(props, context) {
    super(props, context)
  }


  componentWillMount() {
  }

  componentDidMount() {
  }


  componentWillReceiveProps(nextProps) {
  }

  componentWillUpdate(nextProps, nextState) {
  }

  componentDidUpdate(prevProps, prevState) {
  }


  render() {
    const {paramsBasket, actions, dispatch} = this.props
    //console.log('111',this.props.paramsBasket.c_oo_list)
    var childrenWrapper = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(
        child,
        {
          paramsBasket,
          actions,
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

AccFormContainer.propTypes = {
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
    actions: bindActionCreators({...UserAction}, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccFormContainer)

