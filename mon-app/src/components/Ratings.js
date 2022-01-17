import React from 'react';
import StarGray from '../assets/star_gray.svg';
import StarRed from '../assets/star_red.svg';
import '../styles/Rating.css';

const Ratings = (props) => {
    const {number} = props
    const arrayStars = Array(5).fill("StarGray");
    const nbOfRating = arrayStars.map((star,index)=> index < number ? "StarRed" : "StarGray" );

    return (
        <div>
            <ul className='stars_list'>
                {nbOfRating.map((rating)=>(rating === "StarRed"? <div className='star_red'><li><img src={StarRed} alt=""/></li></div> : <div className='star_gray'><li><img src={StarGray} alt=""/></li></div> ))}
            </ul>
        </div>
    );
};

export default Ratings;