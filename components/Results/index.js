import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

import InfiniteScroll from "react-infinite-scroll-component";

import styles from './Results.module.css'

const Results = ({ results }) => {
  const router = useRouter()

  const [data, setData] = useState(results.hits)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setData(results.hits)

    return () => {
      setData([])
    }
  }, [results])


  const loadMore = async () => {
    const url = `http://hn.algolia.com/api/v1/search?query=${router.query.query}&page=${page + 1}&hitsPerPage=7`
    const response = await fetch(url)
    const resData = await response.json()
    setData(data => [...data, ...resData.hits])
    setPage(page => page + 1)
  }

  const singleResult = ({ url, author, title, comment_text, story_id }) => {
    let description = comment_text
    if (comment_text && comment_text.length > 300) {
      description = comment_text.substring(0, 300) + "..."
    }
    return (
      <div key={Math.random()} className={styles.container}>
        <a href={url} target="_blank"><p className={styles.url}>{url}</p></a>
        <a href={url} target="_blank"><p className={styles.title}>{title}</p></a>
        <p className={styles.description}>{description}</p>
        <p className={styles.info}>Uploaded by - {author}</p>
      </div >
    )
  }

  const renderResults = () => {
    return (
      <InfiniteScroll
        dataLength={data.length}
        next={loadMore}
        hasMore
        endMessage={<h3>Nothing to show.</h3>}
      >
        <div>
          {data?.map((item) => singleResult(item))}
        </div>
      </InfiniteScroll>
    )
  }

  return (
    <div style={{ marginTop: 50 }}>
      {renderResults()}
    </div>
  )
}

export default Results