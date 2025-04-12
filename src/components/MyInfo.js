import React from 'react';
import CardPlace from './CardPlace';
import './mycom.css';

function MyInfo() {
    return (
        <div className="my-info-container">
            <div className="about-me">
                <h2>About me:</h2>
                <p>
                    I am a student of Computer Science. I love creating things that are not just functional, but also aesthetic and modern.
                    My inspiration comes from stylish web design, interfaces you want to explore, and technologies that make life easier.
                    I believe a website is more than just code. It's an emotion.
                </p>
            </div>

            <h2 className="places-title">Places I dream to visit:</h2>

            <div className="places-container">
                <CardPlace
                    img="img/paris.webp"
                    title="Paris"
                    shortText="A city of details and inspiration. I want to see the Louvre, where every exhibit feels like its own universe..."
                    fullText="A city of details and inspiration. I want to see the Louvre, where every exhibit feels like its own universe. To walk along the narrow streets of Montmartre and have coffee on a balcony with a view of the city of dreams. For me, Paris is about slow life and beauty in the little things."
                />

                <CardPlace
                    img="img/milan.webp"
                    title="Milan"
                    shortText="The capital of fashion and style. I want to feel the atmosphere of cozy Italian streets mixed with luxury boutiques..."
                    fullText="The capital of fashion and style. I want to feel the atmosphere of cozy Italian streets mixed with luxury boutiques. Visiting Milan is about elegance, delicious coffee, and exploring the world of art and design."
                />

                <CardPlace
                    img="img/newyork.webp"
                    title="New York"
                    shortText="A city of energy, dreams, and big ambitions. New York for me is freedom to be yourself..."
                    fullText="A city of energy, dreams, and big ambitions. New York for me is freedom to be yourself. I want to see Central Park, walk along Times Square at night, and feel the crazy rhythm of this metropolis."
                />
            </div>
        </div>
    );
}

export default MyInfo;
