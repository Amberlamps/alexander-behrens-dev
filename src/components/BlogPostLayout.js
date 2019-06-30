import React from 'react'
import { View, Link, useCurrentRoute } from 'react-navi'
import { MDXProvider } from '@mdx-js/react'
import withUtterances from 'with-utterances';
import ArticleMeta from './ArticleMeta'
import ContentWrapper from './ContentWrapper';
import styles from './BlogPostLayout.module.css'

function BlogPostLayout({ blogRoot }) {
  let { title, data, url } = useCurrentRoute()

  return (
    <View>
      {({ MDXComponent, readingTime }) =>
        // The content for posts is an MDX component, so we'll need
        // to use <MDXProvider> to ensure that links are rendered
        // with <Link>, and thus use pushState.
        <article className={styles.container}>
          <header className={styles.header}>
            <ContentWrapper header>
              <h1 className={styles.title}>
                <Link href={url.pathname}>{title}</Link>
              </h1>
            </ContentWrapper>
            <ArticleMeta
              blogRoot={blogRoot}
              meta={data}
              readingTime={readingTime}
            />
          </header>
          <ContentWrapper>
            <MDXProvider components={{
              a: Link,
              wrapper: ({ children }) =>
                  <div className={styles.content}>
                    {children}
                  </div>
            }}>
              <MDXComponent />
            </MDXProvider>
          </ContentWrapper>
        </article>
      }
    </View>
  )
}

export default withUtterances(BlogPostLayout, 'Amberlamps/alexander-behrens-dev', 'github-light', 'title');
