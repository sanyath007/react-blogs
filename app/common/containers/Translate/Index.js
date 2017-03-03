//app/containers/Translate/Index.js

import React, { Component } from 'react'
import translate from 'google-translate-api'
import ShowTranslate from '../../components'

export default class TranslateContainer extends Component {
  state = {
    text: ''
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //     return this.state.text !== nextState.texts;
  // }

  componentDidMount() {
    translate('master', {from: 'en', to: 'th'})
      .then((response) => response.json())
      .then((text) => this.setState({ text }))
  }

  render() {
    return (
      <ShowTranslate
        text={this.state.text} />
    )
  }
}
