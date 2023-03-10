import React from "react";

export default function Search(props) {
  const getSearchTerm = (e) => {
    props.searchKeyword(e.target.value);
  };
  return (
    <div>

      <div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="form">
              <i className="ri-search-line"></i>
              <input
                type="text"
                className="form-control form-input"
                placeholder="Search courses..."
                value={props.navTerm}
                onChange={getSearchTerm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
