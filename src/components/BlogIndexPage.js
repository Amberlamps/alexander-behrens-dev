import React from 'react'
import { Link } from 'react-navi'
import siteMetadata from '../siteMetadata'
import ArticleSummary from './ArticleSummary'
import Bio from './Bio'
import Pagination from './Pagination'
import ContentWrapper from './ContentWrapper';
import styles from './BlogIndexPage.module.css'

function BlogIndexPage({ blogRoot, pageCount, pageNumber, postRoutes }) {
  return (
    <div>
      <ContentWrapper header>
        <header>
          <h1 className={styles.title}>
            <Link href={blogRoot}>{siteMetadata.title}</Link>
          </h1>
        </header>
      </ContentWrapper>
      <ContentWrapper>
        <Bio />
        <ul className={styles.articlesList}>
          {postRoutes.map(route =>
            <li key={route.url.href}>
              <ArticleSummary blogRoot={blogRoot} route={route} />
            </li>
          )}
        </ul>
        {
          pageCount > 1 &&
          <Pagination
            blogRoot={blogRoot}
            pageCount={pageCount}
            pageNumber={pageNumber}
          />
        }
        <footer className={styles.footer}>
          <div>
            <a
              href='./rss.xml'
              target='_blank'
              style={{ float: 'right' }}>
              RSS
            </a>
            <a href='https://github.com/frontarm/create-react-blog'>
              Source
            </a>
          </div>
        </footer>
      </ContentWrapper>
    </div>
  )
}

export default BlogIndexPage
