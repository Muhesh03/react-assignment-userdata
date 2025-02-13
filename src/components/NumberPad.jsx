import React from 'react';
import { useDrag } from 'react-dnd';

const numbers = Array.from({ length: 10 }, (_, i) => i);

const NumberPad = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {numbers.map((num) => (
        <NumberButton key={num} value={num} />
      ))}
    </div>
  );
};

const NumberButton = ({ value }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'component',
    item: { type: 'number', value },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <button
      ref={drag}
      className={`${
        isDragging ? 'opacity-50' : 'opacity-100'
      } bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-xl font-semibold transition-colors`}
    >
      {value}
    </button>
  );
};

export default NumberPad;