import React from 'react'
import { Link } from 'react-navi'
import { formatDate } from '../utils/formats'
import styles from './ArticleSummary.module.css'

function ArticleSummary({ blogRoot, route }) {
  return (
    <article className={styles.ArticleSummary}>
      <h2><Link href={route.url.href}>{route.title}</Link></h2>
      <small className={styles.ArticleMeta}>
        <time dateTime={route.data.date.toUTCString()}>{formatDate(route.data.date)}</time>
      </small>
      <p>{route.data.spoiler}</p>
    </article>
  )
}

export default ArticleSummary
