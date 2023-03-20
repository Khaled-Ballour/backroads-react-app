import React from 'react';
import './index.css';

export const Book = (props) => {
  const { title, auther, image, getBook, id, number } = props;
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{auther.toUpperCase()}</h4>
      <span className="number">{`#${number + 1}`}</span>
      <button onClick={getBook.bind(id)}>Click</button>
    </article>
  );
};
