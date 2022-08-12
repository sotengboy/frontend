import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CPagination,
  CPaginationItem,
} from '@coreui/react'
// import { DocsExample } from 'src/components'
import { useNavigate } from 'react-router-dom'

import { getPosts } from '../../../functions/posts'

const PostAdd = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    if (blogs.length <= 0) {
      getPosts('10', '1').then((res) => setBlogs(res.data.articles))
    }
  }, [])
  return (
    <CRow>
      <CCol xs={12}>
        {blogs.map((b) => (
          <CCard className="mb-4" key={b.id}>
            <CCardHeader>
              <h3>{b.title}</h3>
            </CCardHeader>
            <CCardBody>
              <p>{b.content}</p>
            </CCardBody>
          </CCard>
        ))}
        <CPagination aria-label="Page navigation example">
          <CPaginationItem>Previous</CPaginationItem>
          <CPaginationItem>1</CPaginationItem>
          <CPaginationItem>2</CPaginationItem>
          <CPaginationItem>3</CPaginationItem>
          <CPaginationItem>Next</CPaginationItem>
        </CPagination>
      </CCol>
    </CRow>
  )
}

export default PostAdd
