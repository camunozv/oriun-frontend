import React from "react";
import { useForm } from "react-hook-form";
import { adminApplications } from "@/app/api/ConvocatoriasAdmin/adminApplications";

function Comentarios({ call_id, student_id, token }) {
  const { register, handleSubmit, reset } = useForm();

  const mySubmit = handleSubmit((data) => {
    if (!data.comment) {
      alert("No has escrito comentarios.");
      return;
    }

    adminApplications
      .postCommentApplication(call_id, student_id, data.comment, token)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });

    reset();
  });

  return (
    <form className="bg-blue-100 p-4 rounded-lg" onSubmit={mySubmit}>
      <h2 className="text-xl font-bold mb-4">Comentarios</h2>
      <div className="mt-4">
        <textarea
          className="w-full p-2 border rounded-lg focus:outline-none"
          rows="4"
          placeholder="Escribe un comentario..."
          {...register("comment")}
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

export default Comentarios;
