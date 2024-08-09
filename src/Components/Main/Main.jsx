import React, { useContext } from 'react'
import './Main.css'
import { Context } from '../../Context/Context'
const Main = () => {

    const {
        onSent,
        recentPrompt,
        showresult,
        loading,
        resultdata,
        setInput,
        input    
    } = useContext(Context)
  return (
    <>
     <div className="main">
        <div className="nav">
            <p>Geminie</p>
            <img src="./Images/account.png" alt="" id='gem' />
        </div>
        <div className="container">
            {!showresult?<>
        <div className="greets">
            <p><span>Hello, Dev.</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest me some beautiful places to visit or planing upcoming event</p>
                <img src="./Images/icons (1).png" alt="" />
            </div>
            <div className="card">
                <p>Briefly summarize this concept : urban planning</p>
                <img src="./Images/icons (2).png" alt="" />
            </div>
            <div className="card">
                <p>Brainstorm idea for our team work</p>
                <img src="./Images/Chat.png" alt="Caht" />
            </div>
            <div className="card">
                <p>Improve the redibility of the following code</p>
                <img src="./Images/icons (3).png" alt="" />
            </div>
        </div>
        </>: <div className="result">
            <div className="result-title">
                <img src="./Images/account.png" alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src="./Images/th.jfif" alt="" />
                {
                    loading? <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    </div> :
                    <p dangerouslySetInnerHTML= {{__html:resultdata}}></p>
                }
            </div>
        </div>
        }
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter Your Prompt Here' />
            <div>
                <img src="./Images/icons (4).png" alt="" />
                <img src="./Images/icons (5).png" alt="" />
               {input? <img onClick={()=>onSent()} src="./Images/icons (6).png" alt="" />:null}
            </div>
            </div>

            <div className="info">
                Geminie may show inaccurate info, about many people, so ba careful, because it is developed by M Awais.
            </div>
        </div>
        </div>
        </div> 
    </>
  )
}

export default Main
