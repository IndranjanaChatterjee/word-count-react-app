import React,{useState} from 'react';
import './DivStyle.css';


export default function Div(prop)
{
    const [text,newText]=useState('Enter text here');
    const convert1=()=>
    {
        console.log("clicked");
        let textcase=text.toUpperCase();
        newText(textcase);
    }
    const convert2=()=>
    {
        console.log("clicked");
        let textcase=text.toLowerCase();
        newText(textcase);
    }
    const change=(e)=>
    {
        console.log("clicked");
        newText(e.target.value);
    }
    
    return(
        <>
        <div class="container">

        <h1>Type here</h1>
        <div class='box'>
            <textarea id="text" rows="8"  value={text} onChange={change}></textarea>
        </div>
        <button id="click" onClick={convert1}>Convert to UpperCase</button>
        <button id="click" onClick={convert2}>Convert to LowerCase</button>
        <div class="count">
            <span>No. of words:{text.split(" ").length}</span>
            <span>No. of characters:{text.length}</span>
        </div>
        </div>

        </>
    )
}
