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
                    <div className='NASA-logo-and-title'>
                        <img style={{ paddingLeft: '1rem' }} src='/NASA_logo.svg' />
                        <h1 style={{ textAlign: 'center', marginBottom: '2em', width: '100%', paddingTop: '1rem' }}>{data.title}</h1>
                    </div>
                    <div className='image-and-text'>
                        <img className='image' src={data.url} alt="NASA shot of the day" />
                        <div className='date-and-explanation'>
                            <h2 style={{ textAlign: 'center', marginBottom: '2em' }}>
                                Shot of the Day from {moment(data.date).format('MMMM Do, YYYY')}</h2>
                            <p>{data.explanation.slice(0, -79)}</p>
                            {data.copyright ? (
                                <p>Image Credit & Copyright: {data.copyright}</p>
                            ) : (
                                ''
                            )
                            }
                        </div>
                    </div>
                </>
            }
        </>
    )
}