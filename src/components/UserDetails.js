import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
  // get url params
  const parmas = useParams();
  return (
    <div>Details about user {parmas.userId}</div>
  )
}

export default UserDetails