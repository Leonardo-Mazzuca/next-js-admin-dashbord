

import BackButton from '@/components/back-button'
import PostPagination from '@/components/posts/post-pagination'
import PostTable from '@/components/posts/post-table'
import React from 'react'

const PostsPage = () => {

  return (
    <>

        <BackButton link='/' text='Go back' />
        <PostTable />
        <PostPagination />
        
    </>
  )

}

export default PostsPage