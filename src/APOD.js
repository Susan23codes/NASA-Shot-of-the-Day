import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from 'moment'


export default function APOD() {
    const [data, setData] = useState('')

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=XEc1LCIaC9g6SPHUWMQD6AgalbwyEBqpkcK3Gun2')
            .then(res => {
                console.log(res.data)
                let data = res.data
                setData(data)

            })
    }, [])

    return (
        <>
            {data &&
                <>
                    <h1 style={{ textAlign: 'center', marginBottom:'1em' }}>{data.title}</h1>
                    <h2 style={{textAlign: 'center', marginBottom: '2em'}}>Shot of the Day from {moment(data.date).format('MMMM Do, YYYY')}</h2>
                    <div className='image-and-text'>
                    <img src={data.url} alt="NASA shot of the day" style={{ maxWidth: '45vw', height:'auto' }} />
                    <div className='date-and-explanation'>
                        <p>{data.explanation}</p>
                        <p>Image Credit & Copyright: {data.copyright}</p>
                    </div>
                    </div>
                </>
            }
        </>
    )
}