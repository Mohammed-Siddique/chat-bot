import './App.css';
import gptLogo from './assets/chatgpt.svg'

function App() {
  return (
    <div className="App">
      {/* sidebar section */}

      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="" className="logo" /><span className="brand">Chat Bot</span></div>
          <button className="midBtn"><img src="" alt="" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src="" alt="" />What is Programming?</button>
            <button className="query"><img src="" alt="" />What is Programming?</button>
          </div>
        </div>
        <div className="lowerSide"></div>
      </div>

      {/* main section  */}

      <div className="main">

      </div>

    </div>
  );
}

export default App;
