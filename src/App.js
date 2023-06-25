import "./App.css";
import 'Card' from "./components/Card";
import { useState } from "react";

let arr = [
  {
    id:1,
    title:"Dağ 1",
    par:"Açıklama 1",
  },
  {
    id:2,
    title:"Dağ 2",
    par:"Açıklama 2",
  },
  {
    id:3,
    title:"Dağ 3",
    par:"Açıklama 3",
  },
];

const App = () => {
  const [lesson, setLesson]= useState(11);
  return (
    <div>
      <h1>Başlık</h1>
      <p>Ders {lesson}</p>
      <buttın
        onClick={() =>{
          setLesson(lesson+1);
        }}
      >
        Ders Arttır
      </buttın>
      <buttın
        onClick={() => {
          setLesson(lesson-1);
        }}
      >
        Ders Azalt
      </buttın>
      <button
        onClick={() => {
          setLesson(100);
        }}
      >
        Ders 100
      </button>

      <p>Başlangıç</p>
      <div className='Cards'>
        {arr.map(({par, title}, i)=>(
          <Card key={`index ${i}`} par={par} title={title} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default App;
