import React, { Component } from 'react'
import autoBind from 'react-autobind'
import marked from 'marked'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    autoBind(this)
    this.state = {
      text: '',
      markedLines: []
    }
  }

  render () {
    let {
      text,
      markedLines
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
              markedLines.map((line, i) =>
                <div
                  key={i}
                  className='App-line'
                  dangerouslySetInnerHTML={line}
                   />
              )
            }
          </div>
        </div>
      </div>
    )
  }

  onChangeText (e) {
    let text = e.target.value
    let markedLines = text
      .split('\n')
      .map((line) => ({ __html: marked(line) }))
    this.setState({
      text,
      markedLines
    })
  }
}

export default App
