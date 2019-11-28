import React from 'react';

function Post(data) {
  // return <div>{JSON.stringify(data)}</div>;
  return (
    <div className="post">
      <div className="post-header">
        <img className="avatar" src={data.author.avatar} />
        <div className="post-details">
          <span>{data.author.name}</span>
          <span>{data.date}</span>
        </div>
      </div>
      <p className="post-content">{data.content}</p>
      <div className="post-comments">
        {data.comments.map(comment => (
          <div key={comment.id} className="comment">
            <img className="comment-avatar" src={comment.author.avatar} />
            <p>
              <span>{comment.author.name}</span>
              {comment.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
