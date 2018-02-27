import React from 'react';
import Link from 'gatsby-link';

const Header = () => {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    marginLeft: '40px'
  };
  return <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/osp-gatsby"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Open Systems Pharmacology
        </Link>

        <Link style={linkStyle} to="/osp-gatsby/chapter1/">Chapter 1</Link>
        <Link style={linkStyle} to="/osp-gatsby/chapter2/">Chapter 2</Link>
      </h1>
    </div>
  </div>;
};

export default Header;
