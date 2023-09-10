
import React, { useState } from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  const [comment] = useState(props.post)
  return (
    <div>

     {comment.map((comment)=>{
      return <Comment key={comment.id} comment={comment}/>
     })}
      
    </div>
  );
};

export default Comments;
