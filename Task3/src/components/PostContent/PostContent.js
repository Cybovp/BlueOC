import "./PostContent.css"

const PostContent = ({ content }) => {
  return (
    <div className="post">
      <article key={content.id}>
        <h3>{content.title}</h3>
        <p>{content.body}</p>
      </article>
    </div>
  )
}

export default PostContent;