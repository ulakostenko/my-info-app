import React, { useState } from 'react';
import './mycom.css';

function CardPlace(props) {
    const [showMore, setShowMore] = useState(false);

    const toggleText = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="place-card">
            <img src={props.img} alt={props.title} />
            <div className="place-card-content">
                <h3>{props.title}</h3>
                <p>
                    {showMore ? props.fullText : props.shortText}
                </p>
            </div>
            <button
                className={`read-more-btn ${showMore ? 'hide-btn' : ''}`}
                onClick={toggleText}
            >
                {showMore ? 'Hide' : 'Read more'}
            </button>
        </div>
    );
}

export default CardPlace;
