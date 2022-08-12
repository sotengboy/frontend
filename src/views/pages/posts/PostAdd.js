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
  CFormSelect,
  CButton,
} from '@coreui/react'
import { useParams } from 'react-router-dom'
// import { DocsExample } from 'src/components'
import { getPostById, updatePost } from '../../../functions/posts'

const PostEdit = (props) => {
  const [posts, setPostEdit] = useState({})
  const { id } = useParams()

  useEffect(() => {
    if (posts) {
      getPostById(id).then((res) => {
        console.log('DATA', res.data)
        setPostEdit(res.data)
      })
    }
  }, [])
  const handleChange = (e) => {
    setPostEdit({ ...posts, [e.target.name]: e.target.value })
  }

  const handleUpdate = (e) => {
    const data = { ...posts, status: e }
    console.log('UPDATE SUBMIT', data)
    updatePost(id, data)
      .then((res) => {
        alert(`Post Update as ${e} Successfully`)
      })
      .catch((error) => alert('Update Error', error))
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Edit Post</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">Edit Form {id}</p>

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

export default PostEdit
