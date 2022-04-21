import React, {useState, useEffect} from 'react'
import key from './key/key'

export default function Image(){
    const [imageInfo, setImageInfo] = useState([])

   useState(async () => {
        await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
        .then(response => response.json())
        .then(data => setImageInfo(data))
        
    }, [])

    console.log(imageInfo)
    
    return(
        <div style={{ margin: '0 auto', width: '30em'}}>
            <p><strong>{imageInfo.title}</strong></p>
            <img style={{ 
                width: '500px', 
                height: 'auto',
                borderRadius: '10px',
                boxShadow: '3px 3px 5px #4a4a4a'
                }} src={imageInfo.hdurl} />
            <p style={{textAlign: 'left'}}>{imageInfo.explanation}</p>
        </div>
    ) 
}