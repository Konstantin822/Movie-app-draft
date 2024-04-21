import React from "react";

export default function Frame() {
    return (
        <div className="movie-frame">
            <a href="#" className="frame-close">
                X
            </a>
            <iframe
                width="560"
                height="315"
                src="video"
                title="movie-title"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>
        </div>
    )
}