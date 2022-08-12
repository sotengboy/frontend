import axios from 'axios'

export const getPosts = async (limit, offset) => {
  return await axios.get(`${process.env.REACT_APP_API}/article/${limit}/${offset}`)
}
export const getPostById = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API}/article/${id}`)
}
