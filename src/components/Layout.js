import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { createGlobalStyle } from 'styled-components';

import 'normalize.css/normalize.css';

import SEO from './SEO';

const GlobalStyle = createGlobalStyle`
  body {}
`;

const Layout = ({ children, title, description }) => {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <SEO
        title={title}
        description={description}
      />
      <header>
        <nav>
          <Link to="/">
            {siteMetadata.title}
          </Link>
        </nav>
      </header>
      <main role="main">
        {children}
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

Layout.defaultProps = {
  title: '',
  description: '',
};

export default Layout;
