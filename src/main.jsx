import React, { useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { createGoldenEggDomain } from './domain/goldenEgg.js';
import './styles.css';

function App() {
  const egg = useMemo(() => createGoldenEggDomain({ radius: 5, shineLevel: 3 }), []);
  return (
    <main className="shell">
      <section className="panel">
        <p className="eyebrow">Golden Egg Tech</p>
        <h1>Domain Directive Renderer</h1>
        <p className="directive">{egg.directive}</p>
        <pre>{JSON.stringify(egg, null, 2)}</pre>
      </section>
      <section className="eggStage" aria-label="Golden egg render stage">
        <div className="orbit" />
        <div className="egg" />
        <div className="slice vertical" />
        <div className="slice horizontal" />
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
