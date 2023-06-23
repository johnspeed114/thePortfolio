import React, { useState } from 'react';
import './styles.scss';

const FormPopup = ({ resizeSketch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    resizeSketch(Number(value));
    handleClose();
  };

  return (
    <div>
      <button className='resizeButton' onClick={handleOpen}>
        Restart and Resize
      </button>
      {isOpen && (
        <div className='form-popup' id='popupForm'>
          <form className='form-container' onSubmit={handleSubmit}>
            <h1>Change Grid Size</h1>
            <label>
              <b>Enter new grid size:</b>
            </label>
            <input
              type='number'
              placeholder='Enter Size'
              value={value}
              onChange={handleChange}
              required
            />
            <button type='submit' className='btn'>
              Resize
            </button>
            <button className='btn btnCancel' onClick={handleClose}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FormPopup;
