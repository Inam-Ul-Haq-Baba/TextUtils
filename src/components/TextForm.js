import React,{useState} from "react";


export default function Textform({
        heading,
        mode,
        showAlert
    })

{
    const handleUpClick = () =>{
        setText(text.toUpperCase())
        showAlert("Converted to UPPERCASE","Success")
    }
    const handleLowClick = () =>{
        setText(text.toLowerCase())
    }
    const handleClear = () =>{

        let newText="";
        setText(newText)
    }
    const handleTrim = () =>{
        setText(text.trim())
    }
    const handleCopy = () =>{
        navigator.clipboard.writeText(text)
        window.getSelection().removeAllRanges();        // Deselects text
        showAlert("Text Copied","Success")
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
    }
    const handleCapitalize = () => {
    let newText = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        setText(newText);
    }
    const handleOnChange = (event) =>{

        setText(event.target.value)
    }


    const [text, setText] = useState("Enter Text Here");
    // text = "Enter new Text";    // Wrong way to change the state
    // setText("Enter new Text");    // Correct way to change the state

    return (
        <>
            <h1 className={`text-center text-3xl font-bold underline py-2 text-${mode=== 'light' ? 'black' : 'white'} `}>{heading} </h1>
            <div className="flex justify-center items-center gap-3">
                <label className="text-xl font-bold text-orange-600" htmlFor="myTextBox">Enter Text</label>
                <textarea className={`border-2 border-orange-600 rounded-lg  text-sm w-1/2 h-full ${mode==='dark' ? 'bg-gray-500 text-white' : 'bg-white text-gray-600'}`} rows={6} onChange={handleOnChange} value={text} name="" id="myTextBox"></textarea>
            </div>
            <div className="flex justify-center gap-3 my-2">
                <button disabled={text.length===0} className="bg-yellow-400 px-2 py-1 rounded-lg font-semibold" onClick={handleUpClick}>Convert to UPPERCASE</button>
                <button disabled={text.length===0} className="bg-blue-400 px-2 py-1 rounded-lg font-semibold" onClick={handleCapitalize}>Capitalize</button>
                <button disabled={text.length===0}  className="bg-green-400 px-2 py-1 rounded-lg font-semibold" onClick={handleLowClick}>Convert to LOWERCASE</button>
                <button disabled={text.length===0} className="bg-red-600 px-2 py-1 rounded-lg font-semibold" onClick={handleClear}>Clear</button>
                <button disabled={text.length===0} className="bg-orange-600 px-2 py-1 rounded-lg font-semibold" onClick={handleTrim}>Trim</button>
                <button disabled={text.length===0} className="bg-gray-500 px-2 py-1 rounded-lg font-semibold" onClick={handleCopy}>Copy</button>
                <button disabled={text.length===0} className="bg-purple-700 px-2 py-1 rounded-lg font-semibold" onClick={handleExtraSpaces}>Delete Extra Spaces</button>
            </div>
            <div className="w-4/5 mx-auto text-center">
                <h2 className={`text-2xl underline font-semibold ${mode==='dark' ? 'text-yellow-500' : 'text-blue-900'} mt-3`}>Your Text Summary</h2>
                <p className={`${mode==='dark' ? 'text-white' : 'text-gray-700'} `}>{text.split("/\s+/").filter((element)=>{return element.length!=0}).length} Words, {text.length} Characters</p>
                <p className={`${mode==='dark' ? 'text-white' : 'text-gray-700'} `}>{0.008 * (text.split(" ").filter((element)=>{return element.length!=0}).length)} Minutes Read </p>  {/* because according to google, it takes about 0.008 seconds to read a word */}
                <h2 className={`text-2xl underline font-semibold ${mode==='dark' ? 'text-yellow-500' : 'text-blue-900'} mt-3 `}>Preview</h2>
                <p className={`${mode==='dark' ? 'text-white' : 'text-gray-700'} `}>{text.length>0 ? text : 'Enter Some Text to Preview'}</p>
            </div>
        </>
    )
}