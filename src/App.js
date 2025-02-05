import React, { useState, useEffect } from "react";

function App() {
  const [tarefas, setTarefas] = useState(
    ['Pagar a conta de luz', 'Estudar React']
  );
  const [input, setInput] = useState('');

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);



  function adicionarTarefas() {
    setTarefas([...tarefas, input]);
    setInput('');
  }
  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        )
        )}
      </ul>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button type="button" onClick={adicionarTarefas}>Adicionar</button>

    </div>
  );
}


export default App;

