// app/containers/Pages/Index.js
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
//import fetch from 'isomorphic-fetch'
//import { PAGES_ENDPOINT } from '../../constants/endpoints'
import { loadPages } from '../../actions/page'
import { Pages } from '../../components'

class PagesContainer extends Component {
  // ตอนนี้ state ของเราบรรจุเข้า store แทนแล้ว
  // state = {
  //   pages: []
  // }

  static propTypes = {
    pages: PropTypes.array.isRequired,
    onLoadPages: PropTypes.func.isRequired
  }

  shouldComponentUpdate(nextProps) {
      return this.props.page !== nextProps.pages;
  }

  onReloadPages = () => {
    //เมื่อกดปุ่ม Reload page ให้สร้าง obj action ผ่าน action creator ชื่อ loadPages
    //loadPages ตัวนี้เป็น props ที่ได้มาจากค่าที่ mapDispatchToProps ส่งออกมา
    //เมื่อเราเรียกฟังก์ชันนี้ มันจะ dispatch ก้อนอ็อบเจ็กต์ของ action ไปให้ reducer
    this.props.onLoadPages()
    // fetch('http://localhost:5000/api/v1/pages')
    //   .then((response) => response.json())
    //   .then((pages) => this.setState({ pages }))
  }
  componentDidMount() {
    this.onReloadPages()
  }

  render() {
    return (
      <Pages
        pages={this.props.pages}
        onReloadPages={this.onReloadPages} />
    )
  }
}

export default connect(
  (state) => ({ pages: state.pages }),
  { onLoadPages: loadPages }
)(PagesContainer)
