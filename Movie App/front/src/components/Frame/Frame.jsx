import React from "react";

export default function Frame({ media, status, toggleFrame }) {
    return (
        <div className={`movie-frame ${status ? 'active' : undefined}`}>
            <a href="#" className="frame-close" onClick={toggleFrame}>
                X
            </a>
            <iframe
                width="1280"
                height="720"
                src={media.video}
                title={media.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </div>
    )
}