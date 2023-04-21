import React from "react";
import Card from "./Card";

const RelatedBlog = ({ blogs, id }) => {
  return (
    <div>
      <div className="blog-heading text-start pt-3 py-2 mb-4">
        PUBLICACIONES RELACIONADAS
      </div>
      <div className="col-md-12 text-left justify-content-center">
        <div className="row gx-5">
          {blogs.length === 1 && (
            <h5 className="text-center" style={{fontSize: 10}}>
              NO HAY PUBLICACIONES RELACIONADAS CON LA ACTUAL
            </h5>
          )}
          {blogs
            ?.filter((blogs) => blogs.id !== id)
            .map((item) => (
              <Card {...item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedBlog;
