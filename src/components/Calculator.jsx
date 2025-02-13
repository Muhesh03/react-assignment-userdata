import React, { useState } from 'react';
import { useCalculatorStore } from '../store/calculatorStore';
import { RotateCcw, RotateCw, Trash2 } from 'lucide-react';

const Calculator = () => {
  const { components, undo, redo, clearComponents } = useCalculatorStore();
  const [result, setResult] = useState('');

  const evaluateExpression = () => {
    try {
      const expression = components.map(c => c.value).join('');
      // Using Function instead of eval for better security
      const result = new Function('return ' + expression)();
      setResult(Number(result).toFixed(2));
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
        <div className="text-right text-xl font-mono mb-2 min-h-[2rem] text-gray-700 dark:text-gray-200">
          {components.map(c => c.value).join(' ')}
        </div>
        <div className="text-right text-3xl font-mono font-bold min-h-[2.5rem] text-blue-600 dark:text-blue-400">
          {result}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={undo}
          className="flex items-center justify-center p-2 bg-gray-200 dark:bg-gray-600 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
        <button
          onClick={redo}
          className="flex items-center justify-center p-2 bg-gray-200 dark:bg-gray-600 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
        >
          <RotateCw className="w-5 h-5" />
        </button>
        <button
          onClick={clearComponents}
          className="flex items-center justify-center p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

      <button
        onClick={evaluateExpression}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold transition-colors"
      >
        Calculate
      </button>
    </div>
  );
};

export default Calculator;