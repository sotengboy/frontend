import axios from 'axios'

export const getPosts = async (limit, offset) => {
  return await axios.get(`${process.env.REACT_APP_API}/article/${limit}/${offset}`)
}
export const getPostById = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API}/article/${id}`)
}
export const updatePost = async (id, posts) => {
  return await axios.patch(`${process.env.REACT_APP_API}/article/${id}`, posts)
}
export const movePost = async (id) => {
  const post = await axios.get(`${process.env.REACT_APP_API}/article/${id}`)
  const data = { ...post.data, status: 'trash' }
  console.log('DATA TRASH', data)
  return await axios.patch(`${process.env.REACT_APP_API}/article/${id}`, data)
}
export const createPost = async (posts) => {
  return await axios.post(`${process.env.REACT_APP_API}/article`, posts)
}
