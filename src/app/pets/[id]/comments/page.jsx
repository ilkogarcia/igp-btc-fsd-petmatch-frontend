
/**
 * @module src/app/pets/[id]/comments/page
 * @description Route to show all comments for an specific pet
 */

const fetchComments = async (id) => {
  // TODO: Remove this timeout when the API is ready
  await new Promise(resolve => setTimeout(resolve, 1000))
  // TODO: Remove this error when the API is ready
  throw new Error('Error al cargar los comentarios')

  // return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
  //   next: {
  //     revalidate: 60
  //   }
  // })
  //   .then(res => res.json())
}

export default async function Pet ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}
