import React from 'react';

const PageLink = (props) => {
  return (
    <li className={props.itemClass}>
      <a href={props.href}>{props.text}</a>
    </li>
  );
};

export default PageLink;
