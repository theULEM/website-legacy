import React from "react";

import styles from "./ImageModal.module.css";

import modalImg from "../../../assets/image/OctLOL.jpg";
// import modalImg from "../../../download/OctNewsletter.pdf";

const ImageModal = ({ id, title }) => {
  return (
    <div
      className="modal fade bd-example-modal-lg"
      id={id}
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div>
            <a
              href="http://bit.ly/LOL4UL"
              // href="https://bit.ly/ULEM1619"
              // href="https://myemail.constantcontact.com/ULEM-October-Update.html?soid=1102455592959&aid=mEevnvr5xt4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.modalImage} src={modalImg} alt="modal" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
