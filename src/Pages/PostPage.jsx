import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostPage = () => {
    const [post, setPost] = useState({

    })
    const { id } = useParams()

    useEffect(() => {
        function fetchPost() {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPost(res.data)
            })
        }
        fetchPost()
       return () => {
           
       }
    },[])
  return (
    <div>
        {JSON.stringify(post)}
    </div>
  )
}
export default PostPage