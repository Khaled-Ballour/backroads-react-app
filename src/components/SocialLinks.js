import React from 'react';
import { socialLinks } from '../data';
import SocialLink from './SocialLink';
const SocialLinks = (props) => {
  return (
    <ul className={props.parentClass}>
      {socialLinks.map((link) => {
        return (
          <SocialLink key={link.id} itemClass={props.itemClass} {...link} />
        );
      })}
    </ul>
  );
};

export default SocialLinks;
