import './App.css'
import { useState } from 'react'

function TodoItem({todo}) {

  const [newComment, setNewComment] = useState("");      // เพิ่ม state newComment
  return (
    <li>
      <span className={todo.done ? "done" : ""}>{todo.title}</span>
      <button onClick={() => {toggleDone(todo.id)}}>Toggle</button>
      <button onClick={() => {deleteTodo(todo.id)}}>❌</button>
      {(todo.comments) && (todo.comments.length > 0) && (
       <>
          <b>Comments:</b>
              <ul>
                  {todo.comments.map(comment => (
                  <li key={comment.id}>{comment.message}</li>
                  ))}
              </ul>
            </>
          )}
        <div className="new-comment-forms">
          <input
            type="text"
            value={newComment}//value={newComments[todo.id] || ""}
            onChange={(e) => {
             const value = e.target.value;
            setNewComment(value);//setNewComments({ ...newComments, [todo.id]: value });
            }}
          />
          <button onClick={() => {                         // แก้ส่วนนี้
            addNewComment(todo.id, newComment);
            setNewComment("");
          }}>Add Comment</button>
        //<button onCick={() => {addNewComment(todo.id)}}>Add Comment</button>
        </div>
      </li>
  )
}

export default TodoItem
