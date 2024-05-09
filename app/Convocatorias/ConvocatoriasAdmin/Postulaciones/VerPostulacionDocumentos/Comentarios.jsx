import React, { useState } from "react";

function Comentarios() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = () => {
    if (newComment.trim() !== "") {
      const newComments = [...comments, { text: newComment, byAdmin: false }];
      setComments(newComments);
      setNewComment("");
    }
  };

  return (
    <div className="bg-blue-100 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Comentarios</h2>
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg ${
              comment.byAdmin ? "bg-blue-200" : "bg-white"
            }`}
          >
            <p className="text-sm">{comment.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <textarea
          className="w-full p-2 border rounded-lg focus:outline-none"
          rows="4"
          placeholder="Escribe un comentario..."
          value={newComment}
          onChange={handleCommentChange}
        ></textarea>
        <button
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default Comentarios;
