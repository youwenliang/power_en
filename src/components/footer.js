import React from 'react'

var titles = {
	"link1": "Grant",
	"link2": "g0v",
	"link3": "Jothon",
	"link4": "Transaction"
}

export default () => (
  <footer id="footer"  className='tc pv4 pv5-ns bg-dark-black'>
    <img src="images/g0v-logo.svg" width="199" height="32" alt="g0v-logo"/>
    <div className="fb-like ml3 pb1" data-href="https://www.facebook.com/g0v.tw" data-width="200px" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="false"></div>
    <h2 className='f6 fw2 tracked moon-gray'>
    	<a href="https://grants.g0v.tw/" target="_blank" rel="noopener noreferrer" className="u-line moon-gray dib relative">{titles.link1}</a> • <a href="http://g0v.tw/" target="_blank" rel="noopener noreferrer" className="u-line moon-gray dib relative">{titles.link2}</a> • <a href="https://hack.g0v.tw/" target="_blank" rel="noopener noreferrer" className="u-line moon-gray dib relative">{titles.link3}</a> • <a href="https://hack.g0v.tw/transaction" target="_blank" rel="noopener noreferrer" className="u-line moon-gray dib relative">{titles.link4}</a>
    </h2>
  </footer>
)