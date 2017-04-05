import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TermsModal from '../Modal/TermsModal'
var I18n = require('react-redux-i18n').I18n;
import Ps from 'perfect-scrollbar';
class HTMLEncodeComponent extends Component{
  componentDidMount() {
    Ps.initialize(ReactDOM.findDOMNode(this.refs.terms_content));
  }
  render(){
    let markup = { __html: this.props.htmlToRender }
    return(
      <div style={ { 'height' : '100%', 'position' : 'relative' } } ref='terms_content' dangerouslySetInnerHTML={ markup }></div>
    )
  }
}
class Landing extends Component{
  render(){
    return(
      <div className='splashComponent'>
        <div className='wrapper'>
          <div className='header padding-15 clearfix'>
            <a href='#login' className='btn btn-trans float-right'> {I18n.t('landing.login')} </a>
          </div>
          <div className='intro-banner pos-rel'>
            <div className='content pos-abs'>
              <p> {I18n.t('landing.slogan')} </p>
              <a href='#signup' className='btn btn-regular'> {I18n.t('landing.signup')} </a>
            </div>
          </div>
        </div>
        <div className='footer clearfix'>
          <a href>{I18n.t('landing.copyright')}</a>
          <span className='padding-lr-5'> | </span>
          <TermsModal title={ I18n.t('landing.terms') } parentClass='terms' buttonTitle={ I18n.t('landing.terms') }>
            <HTMLEncodeComponent htmlToRender={ I18n.t('terms_content') } />
          </TermsModal>
        </div>
      </div>
    )
  }
}

export default Landing;