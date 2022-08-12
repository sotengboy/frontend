import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CButton,
} from '@coreui/react'
// import { DocsExample } from 'src/components'
import { useNavigate } from 'react-router-dom'

import { createPost } from '../../../functions/posts'

const PostAdd = () => {
  const [posts, setPostAdd] = useState({})
  const navigate = useNavigate()
  const handleChange = (e) => {
    setPostAdd({ ...posts, [e.target.name]: e.target.value })
  }

  const handleUpdate = (e) => {
    const data = { ...posts, status: e }
    console.log('UPDATE SUBMIT', data)
    createPost(data)
      .then((res) => {
        alert(`Post Created as ${e} Successfully`)
        navigate('/posts', { replace: true })
      })
      .catch((error) => alert('Update Error', error))
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Add Post</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">Add Form</p>

            <CForm className="mb-3">
              <CFormLabel>Title</CFormLabel>
              <CFormInput value={posts.title} name="title" onChange={handleChange} />
            </CForm>
            <CForm className="mb-3">
              <CFormLabel>Content</CFormLabel>
              <CFormTextarea
                aria-label="With textarea"
                value={posts.content}
                onChange={handleChange}
                name="content"
              ></CFormTextarea>
            </CForm>
            <CForm className="mb-3">
              <CFormLabel>Category</CFormLabel>
              <CFormInput
                value={posts.category}
                aria-label="Username"
                name="category"
                onChange={handleChange}
                aria-describedby="basic-addon1"
              />
            </CForm>

            <CButton color="primary" onClick={() => handleUpdate('publish')} className="m-2">
              Publish
            </CButton>
            <CButton color="secondary" onClick={() => handleUpdate('draft')} className="2-2">
              Draft
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default PostAdd
