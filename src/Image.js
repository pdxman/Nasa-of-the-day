import React, {useState, useEffect} from 'react'
import key from './key/key'
import { FaRocket } from 'react-icons/fa';

export default function Image(){
    const [imageInfo, setImageInfo] = useState([])
    const [loading, setLoading] = useState(false)

   useState(async () => {
       setLoading(true)
        await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
        .then(response => response.json())
        .then(data => setImageInfo(data))
        setLoading(false)
    }, [])

    console.log(imageInfo)
   
    return(
        <div style={{ margin: '0 auto', width: '30em'}}>
            <p><strong>{imageInfo.title}</strong></p>
           {loading ? <FaRocket /> : <img style={{ 
                width: '500px', 
                height: 'auto',
                borderRadius: '10px',
                boxShadow: '3px 3px 5px #4a4a4a'
                }} src={imageInfo.hdurl} />}
            <p style={{textAlign: 'left'}}>{imageInfo.explanation}</p>
         </div>
    ) 
}