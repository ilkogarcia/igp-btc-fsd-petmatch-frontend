import Image from 'next/image'

const fetchComments = async (id) => {
  // TODO: Remove this timeout when the API is ready
  // await new Promise(resolve => setTimeout(resolve, 1000))
  // TODO: Remove this error when the API is ready
  // throw new Error('Error al cargar los comentarios')

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function Pet ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <Image width='50' height='50' alt={comment.name} src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} />
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}
