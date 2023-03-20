import React from 'react';

const SocialLink = (props) => {
  return (
    <li className={props.itemClass}>
      <a
        href={props.href}
        target="_blank"
        rel="noreferrer"
        className="nav-icon"
      >
        <i className={props.icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
