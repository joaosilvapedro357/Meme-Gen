import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"

const MEME_API = "https://api.memegen.link"

function Meme() {
  

    const [memes, setMemes] = useState(); 
    const [newMemes, setNewMemes] = useState();
    
    /* {memes && 
      <div className="meme-blank">
        {memes.map((meme, index)=>{
        return(
            <div key={index}>
              <img src={meme.blank}/>
              
        </div> 
          )
      })}
        </div>}
        */

        
    useEffect(()=>{
        axios.get(`${MEME_API}/templates`).then((response)=>{
            const images = response.data;
            setMemes(images);
        })
        .catch((error) => console.log(error));
    }, [])
 


    const requestBody = {}

    

  return (
    <div>
        {memes && 
      <div className="meme-blank">
        {memes.map((meme, index)=>{
        return(
            <div key={index}>
              <img src={meme.blank}/>
        </div> 
          )
      })}
        </div>}
    </div>
  )
}

export default Meme

