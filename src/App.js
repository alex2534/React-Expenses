import React from "react";

import TodoList from "./componensts/TodoList";



function App() {

  const coisasAParaFazer = [
    {
      id: 'e1',
      title: 'limpar casa',
      time: '1 hora',
      date: new Date(2020, 7, 14),
    },
    { id: 'e2',
      title: 'Limpar carro',
       time: '2 horas',
       date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Lava cachorro',
      time: '1 hora',
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Arrumar escritorio',
      time: '1 hora',
      date: new Date(2021, 5, 12),
    },
  ];




  return (
    <div className="App">
    <TodoList  
      title={coisasAParaFazer[0].title}
      time={coisasAParaFazer[0].time}
      date={coisasAParaFazer[0].date}
    />
<TodoList  
      title={coisasAParaFazer[1].title}
      time={coisasAParaFazer[1].time}
      date={coisasAParaFazer[1].date}
    />
<TodoList  
      title={coisasAParaFazer[2].title}
      time={coisasAParaFazer[2].time}
      date={coisasAParaFazer[2].date}
    />
<TodoList  
      title={coisasAParaFazer[3].title}
      time={coisasAParaFazer[3].time}
      date={coisasAParaFazer[3].date}
    />


    </div>
  );
}

export default App;
