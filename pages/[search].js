import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import BarSearch from '../components/BarSearch'
import Results from '../components/Results'

const ResulsPage = ({ results }) => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState(router.query.query)

  useEffect(() => {
    const handleKeypress = (e) => {
      if (e.key === 'Enter') {
        router.push(`/search?query=${searchQuery}`)
      }
    }
    document.addEventListener("keypress", handleKeypress)
    return () => {
      document.removeEventListener("keypress", handleKeypress)
    }
  })

  return (
    <div>
      <BarSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Results results={results} />
    </div>
  )
}

export default ResulsPage

export const getServerSideProps = async (ctx) => {
  const url = `http://hn.algolia.com/api/v1/search?query=${ctx.query.query}&page=1&hitsPerPage=7`
  const response = await fetch(url)
  const data = await response.json()
  return { props: { results: data } }
}