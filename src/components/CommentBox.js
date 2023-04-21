import React from "react";
import { useNavigate } from "react-router-dom";

const CommentBox = ({ userId, userComment, setUserComment, handleComment }) => {
  const navigate = useNavigate();
  return (
    <>
      <form className="row blog-form">
        <div className="col-12 py-3">
          <textarea
            rows="4"
            value={userComment}
            onChange={(e) => setUserComment(e.target.value)}
            className="form-control description"
          />
        </div>
      </form>
      {!userId ? (
        <>
          <h5>INICIE SESIÓN PARA PUBLICAR UN COMENTARIO EXTRA</h5>
          <br></br>
          <button className="btn btn-danger" onClick={() => navigate("/auth")}>
            INICIAR SESIÓN
          </button>
        </>
      ) : (
        <>
          <button
            className="btn btn-danger"
            type="submit"
            onClick={handleComment}
            style={{fontWeight: "bold", fontSize: 12}}
          >
            PUBLICAR COMENTARIO
          </button>
        </>
      )}
    </>
  );
};

export default CommentBox;
