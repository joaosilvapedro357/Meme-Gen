import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"

const MEME_API = "https://api.memegen.link";

let targetMeme = useParams();

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

        const handleButtonClick = () => {
          // Logic for handling button click (e.g., generating a new meme)
          // You can add your logic here based on your application's requirements
        };
        
        
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
              <div className="get-card">
                <div>
                  <img className = "meme-blank-img" src={meme.blank}/>
                </div>
                <div>
                  <Link to={`/createpage/${meme.id}`} className="get-button"> Use this image</Link>
                  {/* <button className="button-use-image" onClick="">Use this Image</button> */}
                </div>
              </div>
        </div> 
          )
      })}
        </div>}
    </div>
  )
}

export default Meme

