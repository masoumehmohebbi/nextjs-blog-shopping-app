import React from "react";

const PostComments = ({ post }) => {
  return (
    <div>
      <h2>ارسال نظرات</h2>
      {post.comments.map((comment, index) => {
        return (
          !comment.responseTo &&
          comment.status == 2 && <div key={comment._id}>jj</div>
        );
      })}

      {/* base comment form */}
      <form>
        <h3>ارسال نظر جدید</h3>
        <textarea name="" id=""></textarea>
      </form>
    </div>
  );
};

export default PostComments;
