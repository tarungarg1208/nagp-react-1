function CommentsComponent(props) {
    const prop_id = props.id

    const comments = props.comments;
    return (
        <div>
            {comments.map((current_comment) => {
                // return only if the comment is active and is associated with the same blog id
                if (current_comment.isActive && current_comment.blogId === prop_id) {
                    return (<div key={current_comment.id}>{current_comment.comment}</div>)
                }
            })}
        </div>
    )
}

export default CommentsComponent