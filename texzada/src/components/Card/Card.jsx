import React from 'react';
import './Card.scss'
import { useEffect,useState } from 'react';
import axios from 'axios';


const Card = () => {

    const [data, setData] = useState({})
    const [a, setA] = useState();
    const [b, setB] = useState();


    useEffect(()=>{
        const randomPage = Math.floor(Math.random() * 4) + 1;
        if (randomPage < 2) {
            setA(0);
            setB(6);
        }else{
            setA(6);
            setB(12);
        }
        axios(`https://rickandmortyapi.com/api/character?page=${randomPage}`)
        .then(({data}) => setData(data));
        
    },[])
    

    return (
        <div className='card-cont'>
            
            {
                data.results?.slice(a, b).map((item) => {
                    return <div className="card" key={item.id}>

                    <img src={item.image} alt="card-img" />
    
                    <div className="card-items">
    
                        <section>
                            <a id='title' href={'https://rickandmortyapi.com/api/character/' + item.id} target='_blank'>{item.name}</a>
                            <p><span className='status_icon'></span>{item.status} - {item.species}</p>
                        </section>
    
                        <section>
                            <p className='gray-text'>Last known location</p>
                            <a href={"https://rickandmortyapi.com/api/location/" + item.id} target='_blank'>{item.location.name}</a>
                        </section>
                        
                        <section>
                            <p className='gray-text'>First seen in:</p>
                            <a href='' id='a'>{item.origin.name}</a>
                        </section>
    
                    </div>
                </div>
            })
            }


            
        </div>
    );
}

export default Card;
