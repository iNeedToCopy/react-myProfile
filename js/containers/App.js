import 'babel-polyfill'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import configureStore from '../store/configureStore'
import DevTools from './DevTools'
import { jQuery } from 'jquery/dist/jquery.min'
import empty from '../utils/emptyUtils'

require('es6-promise').polyfill()

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentWillReceiveProps (nextProps) {
  }

  componentDidMount () {
  }

  render () {
    // console.log('app render')
    let {actions, dispatch, paramsBasket} = this.props
    var childrenWrapper = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(
        child,
        {
          paramsBasket,
          actions,
          dispatch,
        })
    })
    return (
      <div>
        {childrenWrapper}
      </div>
    )
  }
}

App.propTypes = {}

function mapStateToProps (state) {
  return {
    paramsBasket: {
    }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
