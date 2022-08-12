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
import { useParams, Link } from 'react-router-dom'
// import { DocsExample } from 'src/components'
import { getPostById } from '../../../functions/posts'

const PostEdit = (props) => {
  const [activeKey, setActiveKey] = useState(1)
  const [posts, setPostEdit] = useState([])
  //   const [searchParams] = useSearchParams()
  const { id } = useParams

  useEffect(() => {
    if (posts.length <= 0) {
      getPostById(id).then((res) => {
        console.log('DATA', res.data)
        setPostEdit(res.data.articles)
      })
    }
  }, [posts])
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>All PostEdit</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">List of Created PostEdit</p>
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
                            <Link to={`/post/${p.id}`}>Edite</Link>
                            <button>Delete</button>
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
                            <button>Edit</button>
                            <button>Delete</button>
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
                            <button>Edit</button>
                            <button>Delete</button>
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

export default PostEdit
