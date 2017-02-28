import React, { Component } from 'react'
import { VideoItem, ShoppingCart } from './components/index'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { videoListData } from '../../public/API'

import '../../public/workshop/css/reset.css'
import '../../public/workshop/css/app.css'

export default class App extends Component {

  state = {
    totalPrice: 0,
    confirmed: false
  }

  onBuy () {
    this.setState({
      confirmed: true
    })
  }

  updateTotal (price, inCart) {
    this.setState({
      totalPrice: inCart ? this.state.totalPrice + price : this.state.totalPrice - price
    })
  }

  render () {
    const { totalPrice, confirmed } = this.state

    return (
      <div>
        <header className="header">
          <h1 className="header_logo"><span>Festival Store</span></h1>
          <h2 className="header_title">New in the Festival Store Today</h2>
        </header>
        <section className="store">
          <main className="store_content">
            <ReactCSSTransitionGroup
              transitionName="closeStoreContent"
              transitionEnterTimeout={ 500 }
              transitionLeaveTimeout={ 500 }>
            { !confirmed &&
            <ul className="video_items">
            {
              videoListData.map( ({ id, name, price, photoPath }) => {
                return <VideoItem 
                  key={ id }
                  name={ name }
                  price={ price }
                  photoPath={ photoPath }
                  updateTotal= { this.updateTotal.bind(this) }
                  />
              })
            }
            </ul>
          }
          </ReactCSSTransitionGroup>
          </main>
          <ShoppingCart 
            totalPrice={ totalPrice }
            confirmed={ confirmed }
            onBuy={ this.onBuy.bind(this) }
          />
        </section>
        <footer className="footer">
          Festival Store - 123 Lorem ipsum dolor sit amet, consectetur adipiscing elit, San Francisco, CA
        </footer>
      </div>
    )
  }
}
