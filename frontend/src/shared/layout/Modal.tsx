import React, {PropsWithChildren} from "react";
import ReactDOM from 'react-dom';
import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";
import './Modal.css';

// another component in the same file, but only for "local use" === used by modal:
const ModalOverlay: React.FC<PropsWithChildren<{header: string, onCancel: () => void}>> = (props) => {
  const content = (
    <div className="modal">
      <header className="modal-header">
        <h2>{props.header}</h2>
      </header>
      <div className="modal-content">
        {props.children}
      </div>
      <button className="modal-button" onClick={props.onCancel}>OK</button>
    </div>
  ) 
  return ReactDOM.createPortal(content, document.getElementById('modal-hook') as HTMLElement);
}

const Modal: React.FC<PropsWithChildren<{show: any, onCancel: () => void, header: string}>> = (props) => {
  return <React.Fragment>
    {props.show && <Backdrop onClick={props.onCancel} />}
    <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200} classNames="modal" />
    <ModalOverlay onCancel={props.onCancel} header={props.header} />
  </React.Fragment>
};

export default Modal;