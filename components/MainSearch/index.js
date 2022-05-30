import React, { useEffect } from 'react'
import styles from './MainSearch.module.css'

const MainSearch = ({ searchQuery, setSearchQuery }) => {

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Search</h1>
      <input className={styles.input} type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search or type a url' />
    </div>
  )
}

export default MainSearch