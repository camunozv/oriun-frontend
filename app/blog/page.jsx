import React from 'react'
import Link from 'next/link'

function BlogPage() {
  return (
    <main>
      <h1>
        BLOG PAGE
      </h1>
      <Link href="./blog/post-1">Post1</Link>
      <Link href="./blog/post-2">Post2</Link>
    </main>
  )
}

export default BlogPage
