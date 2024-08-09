import { createContext, useState } from "react";
import run from "../Config/Geminie";

export const Context = createContext();

const ContextProvider = (props)=>{

    const[input, setInput] = useState("");
    const[recentPrompt, setRecentPrompt] = useState("");
    const[previousPrompt, setPreviousPrompt] = useState([]);
    const[showresult, setShowresult] = useState(false);
    const[loading, setLoading] = useState(false);
    const[resultdata, setResultdata] = useState("");

    const delaypara = (index, nextword)=>{
        setTimeout( function () {
            setResultdata(prev=>prev+nextword)
        }, 75*index);
    }

    const newChat = ()=>{
        setLoading(false);
        setShowresult(false)
    }

    const onSent = async(prompt)=>{
        setResultdata("");
        setLoading(true);
        setShowresult(true);
        let response;
        if (prompt!==undefined) {
            response = await run(prompt);
            setRecentPrompt(prompt);
        }
        else{
            setPreviousPrompt(prev=>[...prev, input])
            setRecentPrompt(input)
            response = await run(input)
        }
        // setRecentPrompt(input);
        // setPreviousPrompt(prev=>[...prev, input])
        // const response =  await run(input);
        let responsearray = response.split("**");
        let newString = "";
        for (let i = 0; i <= responsearray.length; i++) {
            if (i===0 || i%2!==1) {
                newString += responsearray[i];
            }
            else{
                newString += "<b>"+ responsearray[i] +"</b>"
            }
            
        }
        let newresponse = newString.split("*").join("</br>")
        let newresponseArray = newresponse.split(" ")
        for (let i = 0; i < newresponseArray.length; i++) {
            const nextword = newresponseArray[i];
            delaypara(i, nextword+" ")
            
        }
        setLoading(false)
        setInput("")
    }

    // onSent("What is react js");
    const contextValue = {
        previousPrompt,
        setPreviousPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showresult,
        loading,
        resultdata,
        input,
        setInput,
        newChat
    }

    return(
        <Context.Provider value={contextValue}>
                {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;