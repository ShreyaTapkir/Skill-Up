import React from "react";

export default function Footer(props) {
  return (
    <>
      <footer
        className="page-footer font-small blue footer"
        style={{ backgroundColor: "#fbd517" }}
      >
        <div
          className="footer-copyright text-center py-3"
          style={{ color: "rgb(55, 54, 54)" }}
        >
          © {props.year} Copyright: Shreya Tapkir
        </div>
      </footer>
    </>
  );
}
