import React, { useContext, useState } from 'react'
import './SIdebar.css'
import { Context } from '../../Context/Context';
const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const {onSent, previousPrompt, setRecentPrompt, newChat}= useContext(Context);
    const loadprompt = async (prompt)=>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
  return (
    <>
      <div className="sidebar">
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} src="./Images/menu.png" alt="menu" />
            <div onClick={()=>newChat()} className="new-chat">
                <img src="./Images/Add.png" alt="" />
               {extended? <p>New Chat</p>:null}
            </div>
                {extended?
            <div className="recent">
                <p className='recent-title'>Recent Chats</p> 
                {
                    previousPrompt.map((item,index)=>{
                        return(

                <div onClick={()=>loadprompt(item)} className="recent-entry">
                    <img src="./Images/Chat.png" alt="Caht" />
                    <p>{item.slice(0, 18)}...</p>
                </div>
                        )
                    })
                }
            </div>
:null}
        </div>
        <div className="bottom">
            <div className="bottom-entry recent-entry">
                <img src="./Images/Help.png" alt="" />
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-entry recent-entry">
                <img src="./Images/History.png" alt="" />
                {extended? <p>Activity</p> :null}
            </div>
            <div className="bottom-entry recent-entry">
                <img src="../../Images/Setting.png" alt="" />
                {extended?<p>Setting</p>:null}
            </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
