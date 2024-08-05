// Write your code here
import {Component} from 'react'

import './index.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImg: headImage,
    headCount: 0,
    tailCount: 0,
  }

  onClickToss = () => {
    const {headCount, tailCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let latestHeadCount = headCount
    let latestTailCount = tailCount
    let tossImg = ''

    if (toss === 0) {
      tossImg = headImage
      latestHeadCount = latestHeadCount + 1
    } else {
      tossImg = tailImage
      latestTailCount = latestTailCount + 1
    }

    this.setState({
      tossResultImg: tossImg,
      headCount: latestHeadCount,
      tailCount: latestTailCount,
    })

    
  }

  render() {
    const {tossResultImg, headCount, tailCount} = this.state
    const totalCount = headCount + tailCount
    return (
      <div className="main">
        <div className="box">
          <h1 className="head">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img className="toss-img" src={tossResultImg} />
          <button type="button" className="button" onClick={this.onClickToss}>
            {' '}
            Toss Coin
          </button>
          <div className="count-box">
            <p className="count-para">Total Count:{totalCount}</p>
            <p className="count-para">Head Count:{headCount}</p>
            <p className="count-para">Tail Count:{tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
