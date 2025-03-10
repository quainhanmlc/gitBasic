// App.tsx
import React from 'react';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Home />
    </div>
  );
};

export default App;