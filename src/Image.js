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
        <div style={{ margin: '0 auto', maxWidth: '30em', margin: '1em auto'}}>
            <h2 style={{
                opacity: '0',
                transform: 'translateY(2em)',
                animation: 'fadeIn 1s .5s forwards'
            }}><strong>{imageInfo.title}</strong></h2>
           {loading ? <FaRocket /> : <img style={{ 
                display: 'block',
                maxWidth: '100%', 
                height: 'auto',
                margin: '0 auto',
                borderRadius: '10px',
                boxShadow: '3px 3px 5px #4a4a4a',
                opacity: '0',
                transform: 'translateY(2em)',
                animation: 'fadeIn 1s 1s forwards'
                }} src={imageInfo.hdurl} />}
            <p style={{
                maxWidth: '100%',
                padding: '1em',
                borderRadius: '8px',
                boxShadow: '3px 3px 5px #4a4a4a',
                background: 'grey',
                textAlign: 'left',
                opacity: '0',
                transform: 'translateY(2em)',
                animation: 'fadeIn 1s 2s forwards'}}>{imageInfo.explanation}</p>
         </div>
    ) 
}