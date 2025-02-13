import React from 'react';
import { useCalculatorStore } from '../store/calculatorStore';
import { useDrop } from 'react-dnd';
import { X } from 'lucide-react';

const DragDropArea = () => {
  const { components, addComponent, removeComponent } = useCalculatorStore();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'component',
    drop: (item) => {
      addComponent({ ...item, id: Math.random().toString() });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`min-h-[120px] p-4 rounded-lg border-2 border-dashed transition-colors ${
        isOver
          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
          : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50'
      }`}
    >
      <div className="flex flex-wrap gap-2">
        {components.map((component) => (
          <div
            key={component.id}
            className={`relative group flex items-center ${
              component.type === 'operation'
                ? 'bg-purple-500'
                : 'bg-blue-500'
            } text-white px-4 py-2 rounded-lg`}
          >
            <span className="text-lg">{component.value}</span>
            <button
              onClick={() => removeComponent(component.id)}
              className="absolute -top-2 -right-2 hidden group-hover:flex bg-red-500 rounded-full p-1 hover:bg-red-600 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
        {components.length === 0 && (
          <div className="w-full text-center text-gray-500 dark:text-gray-400">
            Drag numbers and operations here
          </div>
        )}
      </div>
    </div>
  );
};

export default DragDropArea;