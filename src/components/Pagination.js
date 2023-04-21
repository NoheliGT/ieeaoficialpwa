import React from "react";

const Pagination = ({ currentPage, handlePageChange, noOfPages }) => {
  return (
    <div>
      <div className="row mx-0">
        <div className="">
          <button
            className="btn_mange_pagging"
            disabled={currentPage === 1}
            onClick={() => handlePageChange("Prev")}
          >
            <i className="fa fa-long-arrow-left"></i>&nbsp;&nbsp;VOLVER
          </button>
          <span className="btn_pagging">{currentPage}</span>
          <button
            className="btn_mange_pagging"
            disabled={currentPage === noOfPages}
            onClick={() => handlePageChange("Next")}
          >
            SIGUIENTE <i className="fa fa-long-arrow-right"></i>&nbsp;&nbsp;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
