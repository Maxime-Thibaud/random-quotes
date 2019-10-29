import React from 'react';

function QuoteCard({character}) {
  return (
    <div>
      <img
        src={character.image}
        alt={character.character}
      />
      <h3>{character.character}</h3>
      <p>{character.quote}</p>
    </div>
  );
};

export default QuoteCard;