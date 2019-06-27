import React from 'react';

const Modal = (props) => {
    return (
        <div className="modal-container">
            <input id="modal-toggle" type="checkbox" />
            <button>Click me</button>
            <div className="modal-backdrop">
                <div className="modal-content">
                <label className="modal-close" for="modal-toggle">x</label>
                <h2>Modal title</h2>
                <hr />
                <p>Modal Content</p>
                <label className="modal-close button" for="modal-toggle">Close</label>
                </div>
            </div>
</div>    
    );
}; //end Modal

export default Modal;