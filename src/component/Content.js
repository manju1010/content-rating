import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import contentData from './contentData';

function Content() {
    const generateRandomIndex = () => Math.floor(Math.random() * contentData.length);

    const [currentIndex, setCurrentIndex] = useState(generateRandomIndex());
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const [totalRating, setTotalRating] = useState(0);

    const currentContent = contentData[currentIndex]; // Get current content based on the index

    function handleLike() {
        setLike(prev => prev + 1);
        setTotalRating(prev => prev + 1);
    }

    function handleDislike() {
        setDislike(prev => prev + 1);
        setTotalRating(prev => prev + 1);
    }

    function handleRandom() {
        const newIndex = generateRandomIndex(); // Get a new random index
        setCurrentIndex(newIndex);
        setLike(0);
       setDislike(0);
       setTotalRating(0);
    }

    return (
        <div className="content-rating">
            <p>{currentContent?.text}</p>

            <div className='rating-button'>
                <button className='like-button' onClick={handleLike}> Like ({like}) </button>
                <button className='dislike-button' onClick={handleDislike}> Dislike ({dislike}) </button>
            </div>

            <p className='total-rating'>Total rating: {totalRating}</p>

            <div className='icon-next-previous'>
                <FontAwesomeIcon icon={faChevronLeft} className='left' onClick={handleRandom} />
                <FontAwesomeIcon icon={faChevronRight} className='right' onClick={handleRandom} />
            </div>
        </div>
    );
}

export default Content;
