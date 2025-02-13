import React from 'react';
import { useDrag } from 'react-dnd';
import { Plus, Minus, X, Divide } from 'lucide-react';

const operations = [
  { symbol: '+', icon: Plus },
  { symbol: '-', icon: Minus },
  { symbol: '*', icon: X },
  { symbol: '/', icon: Divide },
];

const Operations = () => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {operations.map((op) => (
        <OperationButton key={op.symbol} value={op.symbol} Icon={op.icon} />
      ))}
    </div>
  );
};

const OperationButton = ({ value, Icon }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'component',
    item: { type: 'operation', value },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <button
      ref={drag}
      className={`${
        isDragging ? 'opacity-50' : 'opacity-100'
      } bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-lg transition-colors`}
    >
      <Icon className="w-6 h-6 mx-auto" />
    </button>
  );
};

export default Operations;