import React from 'react'

import ContentWrapper from './ContentWrapper';
import { formatDate } from '../utils/formats'
import { getGravatarURL } from '../utils/getGravatarURL'
import styles from './ArticleMeta.module.css'

function ArticleMeta({ blogRoot, meta, readingTime, className }) {
  let photoURL = getGravatarURL({
    email: "alexander.behrens.84@gmail.com",
    size: 56,
  })

  let readingTimeElement
  if (readingTime) {
    let minutes = Math.max(Math.round(readingTime.minutes), 1)
    readingTimeElement =
      <React.Fragment>
        {' '}&bull;{' '}
        <span className={styles.readingTime}>
          {minutes} min read
        </span>
      </React.Fragment>
  }
      
  return (
    <ContentWrapper>
      <div className={`
        ${styles.bio}
        ${className || ''}
      `}>
        <img src={photoURL} alt="Me" />
        <div className={styles.information}>
          <div>Alexander Behrens</div>
          <small className={styles.ArticleMeta}>
            <time dateTime={meta.date.toUTCString()}>{formatDate(meta.date)}</time>
            {readingTimeElement || null}
          </small>
        </div>
      </div>
    </ContentWrapper>
  )
}

export default ArticleMeta
