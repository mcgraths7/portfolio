import React from 'react';
import Link from 'next/link';

const CustomLink = ({ href, external = false, children }) => (
  <Link href={href} className="underline" target={external ? '_blank' : ''} rel={external ? 'noreferrer nofollow' : ''}>
    {children}
  </Link>
);
export default CustomLink;
