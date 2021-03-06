import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, Link, graphql } from 'gatsby'

import Header from '../components/Header'
import Tagline from '../components/Tagline'
import background from './remote-background.jpeg'
import './layout.css'
import './background.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query siteData {
        site {
          siteMetadata {
            name
            tagline
          }
        }
      }
    `}
    render={data => (
      <div
        id="main"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <Helmet
          title={data.site.siteMetadata.name}
          meta={[
            {
              name: 'description',
              content:
                'Javascript is one of the fastest growing languages in the world, and is the most popular langauge on Github. Get up to speed or sharpen your existing javascript knowledge with these free talks.',
            },
            {
              name: 'keywords',
              content:
                'javascript, es2016, node.js, angular.js, react.js, vue.js, feathers.js',
            },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: 'anywherejs' },
            {
              name: 'twitter:title',
              content: 'Feeling crunched for javascript learning time?',
            },
            {
              name: 'twitter:description',
              content:
                'Sign up, plug in, and level up with this meetup! Get the very best talks, all without the travel.',
            },
            {
              name: 'twitter:image:src',
              content: `http://anywherejs.com${background}`,
            },
            {
              property: 'og:title',
              content: 'Feeling crunched for javascript learning time?',
            },
            {
              property: 'og:site_name',
              content: 'AnywhereJS - The remote meetup for the world',
            },
            { property: 'og:url', content: 'http://anywherejs.com/' },
            {
              property: 'og:description',
              content:
                'Sign up, plug in, and level up with this meetup! Get the very best talks, all without the travel.',
            },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:image',
              content: `http://anywherejs.com${background}`,
            },
            { property: 'og:image:height', content: '1890' },
            { property: 'og:image:width', content: '3000' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.name} />
        <div
          style={{
            margin: '0 auto',
            padding: '0px 5rem 1.45rem',
            paddingTop: 0,
          }}
        >
          <Tagline tagline={data.site.siteMetadata.tagline} />
          {children}
        </div>
      </div>
    )}
  />
)

// Layout.propTypes = {
//   children: PropTypes.func,
// }

export default Layout
