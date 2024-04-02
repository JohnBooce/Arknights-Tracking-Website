import React from 'react';

const OperatorStars = ({ rarity }) => {

  const starImage = <img src="./rarity/star.png" alt="star" style={{ width: '30px', height: '30px' }}/>;

  const stars = Array.from({ length: rarity }, (_, index) => (
    <span key={index}>{starImage}</span>
  ));

  return <div className='flex '>{stars}</div>;
};

export default OperatorStars;