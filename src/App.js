import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/man.png';
import gptImgLogo from './assets/chatgptLogo.svg';

function App() {
  return (
    <div className="App">
      {/* sidebar section */}

      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">Chat Bot</span></div>
          <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="Query" />What is Programming ?</button>
            <button className="query"><img src={msgIcon} alt="Query" />How to use and API ?</button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={saved} alt="" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="" className="listItemsImg" />Upgrade to Pro</div>
        </div>
      </div>

      {/* main section  */}

      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className='chatImg' src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad dolores molestias consequatur placeat? Nobis provident eveniet deserunt. Culpa, quam!</p>
          </div>
          <div className="chat bot">
            <img className='chatImg' src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nihil, maxime neque, sequi minima necessitatibus at optio perspiciatis dolor impedit alias suscipit eaque harum voluptate consequuntur quo natus doloribus. Cupiditate quasi omnis blanditiis, earum, neque eveniet hic deserunt minus ipsum expedita soluta commodi voluptatum repellat eligendi. Id harum veniam beatae dolorem? Tenetur consectetur nesciunt cum unde, alias adipisci saepe velit incidunt beatae vero inventore dignissimos nulla mollitia culpa praesentium ab exercitationem molestias laboriosam dolore repellat voluptas a atque cumque dolorem! Reiciendis delectus tenetur repellendus nam accusamus ipsam quos sit architecto iste, a possimus consequatur qui dolorem fugiat eligendi atque labore?</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message'/><button className="send"><img src={sendBtn} alt="Send" /></button>
          </div>
          <p>ChatBot may produce inaccurate information about people, places, or facts. ChatBot August 20 Version.</p>
        </div>
      </div>

    </div>
  );
}

export default App;
