import React from "react";
import SignleComment from "./SingleComment";

const ReplyComment = ({ parentCommentId, comments, postId }) => {
  return comments.map((comment) => {
    return (
      parentCommentId === comment.responseTo && (
        <div className="mr-2 md:mr-5" key={comment._id}>
          <React.Fragment key={comment._id}>
            <SignleComment comment={comment} postId={postId} />
            <ReplyComment
              comments={comments}
              parentCommentId={comment._id}
              postId={postId}
            />
          </React.Fragment>
        </div>
      )
    );
  });
};

export default ReplyComment;
