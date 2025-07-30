import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';

function App() {
  return (
    <div className="App">
      {/* sidebar section */}

      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">Chat Bot</span></div>
          <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="Query" />What is Programming?</button>
            <button className="query"><img src={msgIcon} alt="Query" />How to use and API?</button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="" className="listItems" />Home</div>
          <div className="listItems"><img src={saved} alt="" className="listItems" />Saved</div>
          <div className="listItems"><img src={rocket} alt="" className="listItems" />Upgrade to Pro</div>
        </div>
      </div>

      {/* main section  */}

      <div className="main">

      </div>

    </div>
  );
}

export default App;
