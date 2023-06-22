// @ts-nocheck
import React, { useState, useEffect } from 'react';

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

const SketchApp = () => {
  const initialGridSize = 256;
  const [gridSize, setGridSize] = useState(initialGridSize);
  const [gridItems, setGridItems] = useState([]);

  useEffect(() => {
    createGridSize(gridSize);
  }, [gridSize]);

  function createGridSize(size) {
    const newGridItems = Array.from({ length: size }, (_, index) => ({
      id: index,
      color: 'rgb(242, 244, 250)',
    }));

    setGridItems(newGridItems);
  }

  function handleMouseEnter(id) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`;

    setGridItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, color: newColor } : item
      )
    );
  }

  function resizeSketch(newSize) {
    if (newSize <= 1) {
      console.log('Enter An Appropriate Number Larger than 0.');
      return false;
    } else {
      const newGridSize = newSize * newSize;
      setGridSize(newGridSize);
    }
  }

  function clearGrid() {
    setGridItems((prevItems) =>
      prevItems.map((item) => ({ ...item, color: 'rgb(242, 244, 250)' }))
    );
  }

  return (
    <div className='bg-green mt-5 text-center'>
      <h2>Randomized Sketch App</h2>
      <div className='bg-grey'>
        <div className='containerGrid mt-2'>
          {gridItems.map((item) => (
            <div
              key={item.id}
              className='gridbox'
              style={{ backgroundColor: item.color }}
              onMouseEnter={() => handleMouseEnter(item.id)}
            />
          ))}
        </div>
        <FormPopup resizeSketch={resizeSketch} />
        <button className='clearButton' onClick={clearGrid}>
          Clear Sketch
        </button>
      </div>
    </div>
  );
};

export default SketchApp;
