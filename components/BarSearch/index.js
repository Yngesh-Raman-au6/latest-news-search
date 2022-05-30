import React from 'react'
import styles from './BarSearch.module.css'
import Link from 'next/link'
const BarSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>
          <h1 className={styles.logo}>Search</h1>
        </a>
      </Link>
      <input className={styles.input} type='text' placeholder='Start typing to search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
    </div>
  )
}

export default BarSearch