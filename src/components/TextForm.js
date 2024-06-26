import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const [isBold, setisBold] = useState(false)

    const handleUpClick = ()=>{
      let newText = text.toUpperCase();
      setText(newText)
      setisBold(true)
      props.showAlert("convertd to UpperCase", "success")
    }
    const handleLowClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
      setisBold(true)
      props.showAlert("convertd to LowerCase", "success")
    }
    const handleChange = (event)=>{
      setText(event.target.value);
      setisBold(false)
    }
    const clear_text = ()=>{
      setText('')
      props.showAlert("Text is cleared", "success")
    }
  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{fontWeight: isBold? 'bold' : 'normal',
         backgroundColor : props.mode==='dark'?'#213e5e':'white', color : props.mode==='dark'?'white':'black'}}
          value={text} 
          onChange={handleChange}
         id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}>convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleLowClick}>convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={clear_text}>clear text</button>
        
    </div>
    <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
      <h2>words and characters</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length } words and {text.length} characters</p>
      <p>{.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Reads</p>
      <h2>Preview</h2>
      <p>{text.length>0? text : "Enter something above in the textarea"}</p>
    </div>
    </>
  )
}
