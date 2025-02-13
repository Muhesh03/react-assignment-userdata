import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Calculator from './components/Calculator';
import NumberPad from './components/NumberPad';
import Operations from './components/Operations';
import DragDropArea from './components/DragDropArea';
import { Calculator as CalculatorIcon } from 'lucide-react';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <CalculatorIcon className="w-8 h-8 text-blue-500 mr-2" />
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              Drag & Drop Calculator
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Numbers</h2>
                <NumberPad />
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Operations</h2>
                <Operations />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Expression Builder</h2>
                <DragDropArea />
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Result</h2>
                <Calculator />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;