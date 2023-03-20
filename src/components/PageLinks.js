import React from 'react';
import { pageLinks } from '../data';
import PageLink from './PageLink';

const PageLinks = (props) => {
  return (
    <ul className={props.parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return <PageLink key={link.id} {...link} itemClass={props.itemClass} />;
      })}
    </ul>
  );
};

export default PageLinks;
