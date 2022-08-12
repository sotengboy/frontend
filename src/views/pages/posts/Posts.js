import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPen, cilTrash } from '@coreui/icons'
// import { DocsExample } from 'src/components'
// import { Link } from 'react-router-dom'

import { getPosts, movePost } from '../../../functions/posts'

const Posts = () => {
  const [activeKey, setActiveKey] = useState(1)
  const [posts, setPosts] = useState([])
  // const currentLocation = useLocation().pathname
  // console.log('CURRENT LOC', currentLocation)

  useEffect(() => {
    if (posts.length <= 0) {
      getPosts('10', '0').then((res) => {
        console.log('DATA', res.data)
        setPosts(res.data.articles)
      })
    }
  }, [posts])
  const handleTrash = (e) => {
    movePost(e)
      .then(() => window.location.reload())
      .catch((error) => alert('Failed to delete post'))
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>All Posts</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">List of Created Posts</p>
            {/* <p>{JSON.stringify(posts)}</p> */}
            <CNav variant="tabs" role="tablist">
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 1}
                  onClick={() => setActiveKey(1)}
                >
                  Published
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 2}
                  onClick={() => setActiveKey(2)}
                >
                  Drafts
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 3}
                  onClick={() => setActiveKey(3)}
                >
                  Trashed
                </CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent>
              <CTabPane role="tabpanel" aria-labelledby="publish-tab" visible={activeKey === 1}>
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {posts
                      .filter((post) => post.status === 'publish')
                      .map((p) => (
                        <CTableRow key={p.id}>
                          <CTableHeaderCell scope="row">{p.title}</CTableHeaderCell>
                          <CTableDataCell>{p.category}</CTableDataCell>
                          <CTableDataCell>
                            <a href={`/#/post/${p.id}`} className="p-2">
                              <CIcon icon={cilPen} size="m" />
                            </a>

                            <CIcon icon={cilTrash} size="m" onClick={() => handleTrash(p.id)} />
                          </CTableDataCell>
                        </CTableRow>
                      ))}
                  </CTableBody>
                </CTable>
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="draft-tab" visible={activeKey === 2}>
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {posts
                      .filter((post) => post.status === 'draft')
                      .map((p) => (
                        <CTableRow key={p.id}>
                          <CTableHeaderCell scope="row">{p.title}</CTableHeaderCell>
                          <CTableDataCell>{p.category}</CTableDataCell>
                          <CTableDataCell>
                            <a href={`/#/post/${p.id}`} className="p-2">
                              <CIcon icon={cilPen} size="m" />
                            </a>
                            <CIcon icon={cilTrash} size="m" onClick={() => handleTrash(p.id)} />
                          </CTableDataCell>
                        </CTableRow>
                      ))}
                  </CTableBody>
                </CTable>
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="trash-tab" visible={activeKey === 3}>
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {posts
                      .filter((post) => post.status === 'trash')
                      .map((p) => (
                        <CTableRow key={p.id}>
                          <CTableHeaderCell scope="row">{p.title}</CTableHeaderCell>
                          <CTableDataCell>{p.category}</CTableDataCell>
                          <CTableDataCell>
                            <a href={`/#/post/${p.id}`} className="p-2">
                              <CIcon icon={cilPen} size="m" />
                            </a>
                            <CIcon icon={cilTrash} size="m" onClick={() => handleTrash(p.id)} />
                          </CTableDataCell>
                        </CTableRow>
                      ))}
                  </CTableBody>
                </CTable>
              </CTabPane>
            </CTabContent>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Posts
