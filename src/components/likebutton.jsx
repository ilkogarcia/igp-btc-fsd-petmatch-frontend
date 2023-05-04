/**
 * @file LikeButton.jsx
 * @description Component that displays a button to like a post.
 */

'use client'

import { useState } from 'react'

export function LikeButton ({ id }) {
  const [liked, setLiked] = useState(false)

  return (
    // TODO: Call API endpoint to like or unlike a pet with the given id.
    <button onClick={() => setLiked(!liked)}>
      {liked ? '❤️' : '🤍'}
    </button>
  )
}
