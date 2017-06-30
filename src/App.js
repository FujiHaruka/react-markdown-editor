import React, { Component } from 'react'
import autoBind from 'react-autobind'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    autoBind(this)
    this.state = {
      text: '',
      lines: []
    }
  }

  render () {
    let {
      text,
      lines
    } = this.state
    return (
      <div className='App'>
        <div className='App-header'>
          Markdown Editor
        </div>
        <div className='App-body'>
          <textarea
            className='App-box App-textarea'
            value={text}
            onChange={this.onChangeText}
          />
          <div className='App-box App-textview'>
            {
              lines.map((line, i) =>
                <div className='App-line' key={i}>{line}</div>
              )
            }
          </div>
        </div>
      </div>
    )
  }

  onChangeText (e) {
    let text = e.target.value
    let lines = text.split('\n')
    this.setState({
      text: e.target.value,
      lines: lines
    })
  }
}

export default App
