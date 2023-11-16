import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import ChoicesItem from './Components/ChoicesItem'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {score: 0, userChoice: '', systemChoice: '', Check: false}

  onClickChoice = id => {
    const rand = Math.ceil(Math.random() * 3) - 1
    console.log(rand)
    const id2 = choicesList[rand].id
    console.log(id2)
    this.setState({userChoice: id, systemChoice: id2, Check: true})
  }

  renderAll = () => (
    <div className="bg-choice-container">
      <div className="choiceContainer">
        {choicesList.map(each => (
          <ChoicesItem
            onClickChoice={this.onClickChoice}
            data={each}
            key={each.id}
          />
        ))}
      </div>
    </div>
  )

  onClickPlayAgain = () => {
    this.setState({Check: false, userChoice: '', systemChoice: ''})
  }

  renderRes = () => {
    const {userChoice, systemChoice, score} = this.state
    const userchoiceImgEl = choicesList.filter(each => each.id === userChoice)
    const userchoiceImg = userchoiceImgEl[0].imageUrl
    // console.log(userchoiceImg)
    const systemchoiceImgEl = choicesList.filter(
      each => each.id === systemChoice,
    )
    const systemchoiceImg = systemchoiceImgEl[0].imageUrl
    // console.log(systemchoiceImg)
    let a
    let s = score
    if (userChoice === systemChoice) {
      a = 'IT IS DRAW'
    } else if (
      (userChoice === 'ROCK' && systemChoice === 'SCISSORS') ||
      (userChoice === 'SCISSORS' && systemChoice === 'PAPER') ||
      (userChoice === 'PAPER' && systemChoice === 'ROCK')
    ) {
      a = 'YOU WON'
      s = score + 1
    } else {
      a = 'YOU LOSE'
      s = score - 1
    }

    return (
      <div className="res-main-container">
        <div className="Res-mini-container">
          <div>
            <p>YOU</p>
            <img
              className="yourChoiceImg"
              alt="your choice"
              src={userchoiceImg}
            />
          </div>
          <div>
            <p>OPPONENT</p>
            <img
              className="yourChoiceImg"
              alt="opponent choice"
              src={systemchoiceImg}
            />
          </div>
        </div>
        <div>
          <p>{a}</p>
          <button
            onClick={this.onClickPlayAgain}
            className="playAgainBtn"
            type="button"
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {Check, score} = this.state

    return (
      <div className="main-bg-container">
        <div>
          <div className="chioce-name-container">
            <div>
              <h1>Rock Paper Scissors</h1>
            </div>
            <div className="score-container">
              <p className="score-para">Score</p>
              <p className="score">{score}</p>
            </div>
          </div>
          {Check ? this.renderRes() : this.renderAll()}
          <div className="popup-close-container">
            <Popup
              modal
              trigger={
                <button type="button" className="trigger-button">
                  RULES
                </button>
              }
            >
              {close => (
                <>
                  <div className="rules-container">
                    <div className="close-btn-container">
                      <button
                        type="button"
                        className="trigger-button"
                        onClick={() => close()}
                        aria-label="Close"
                      >
                        <RiCloseLine />
                      </button>
                    </div>
                    <div>
                      <img
                        className="rules-img"
                        alt="rules"
                        src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      />
                    </div>
                  </div>
                </>
              )}
            </Popup>
          </div>
        </div>
      </div>
    )
  }
}

export default App
