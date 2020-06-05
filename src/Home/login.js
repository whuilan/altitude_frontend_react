import { Component } from 'react';

class App extends Component {

  clickedLogin = (data) => {
    console.log(data)
  }
  render () {
    return (
      <div className="App">
        {/* 这里是注释 */}
        {/* 命名统一采用pre-name的写法 */}
        <form>
          <div>
            <p>username:</p>
            <input type="text" name="username"></input>
          </div>
          <div>
            <p>password:</p>
            <input type="text" name="password"></input>
          </div>
          <input type="submit" value="Submit" onClick={this.clickedLogin(this)}></input>
        </form>

      </div>
    )
  }
}

export default App;
