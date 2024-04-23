import React, { useState, useEffect } from "react";
import { homeData } from "../../data/homeData.js";

import Carousel from '../../components/Carousel/Carousel.jsx';
import Frame from '../../components/Frame/Frame.jsx';

export default function Home() {
    const [data, setData] = useState([])
    const [frame, setFrame] = useState(false)

    useEffect(() => {
        setData(homeData.cards)
    }, [])

    const cardChange = id => {
        const newCards = data.map(item => {
            item.active = false
            if (item.id === id) {
                item.active = true
            }
            return item
        })
        setData(newCards)
    }

    const toggleFrame = () => {
        setFrame(!frame)
    }
    return (
        <>
            <section className="hero">
                <div className="container hero__container">
                    {data && data.length > 0 && data.map(item => (
                        <div key={item.id} className={`hero__card ${item.active ? 'active' : undefined}`}>
                            <img src={item.cover} alt="Background Image" className={`hero__bg ${item.active ? 'active' : undefined}`} />
                            <h1 className="hero__card-title">{item.name}</h1>
                            <h4 className="hero__card-desc1">
                                <p>{item.type}</p>
                                <p>{item.rating}</p>
                                <p>{item.date}</p>
                                <p>{item.time}</p>
                                <p>{item.genre}</p>
                            </h4>
                            <p className="hero__card-desc2">
                                {item.desc}
                            </p>
                            {item.tags.map(tag => (
                                <h4 className="hero__card-desc3">
                                    <p>Tags:
                                        <span>{tag.tag1},</span>
                                        <span>{tag.tag2},</span>
                                        <span>{tag.tag3}</span>
                                    </p>
                                    <p>Starring:<span>{item.starring}</span></p>
                                </h4>
                            ))}
                            <a href="#" className={`hero__btn ${data.active ? 'active' : undefined}`} onClick={toggleFrame}>Watch trailer</a>
                            {data.active && <Frame media={data} toggleFrame={toggleFrame} />}
                        </div>
                    ))}
                </div>
            </section>

            <section className="carousel">
                <div className="container carousel__container">
                    {data && data.length > 0 && <Carousel cards={data} status={frame} cardsChange={cardChange} />}
                </div>
            </section>
        </>
    );
}