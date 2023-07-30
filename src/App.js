import "./App.css";
import Card from "./components/Card";
import { useState } from "react";
import { Button, Container, Grid, Stack, Input, Textarea } from '@mantine/core';

let arr = [
  {
    id: 1,
    title:"Dağ 1",
    par:"Açıklama 1",
  },
  {
    id: 2,
    title:"Dağ 2",
    par:"Açıklama 2",
  },
  {
    id: 3,
    title:"Dağ 3",
    par:"Açıklama 3",
  },
  {
    id: 4,
    title:"Dağ 4",
    par:"Açıklama 4",
  },
];

const App = () => {
  const [title, setTitle] = useState("Başlık");
  const [paragraf, setParagraph] = useState("");
  const [list, setList] = useState(arr);
  /*const [lesson, setLesson] = useState([]);*/
  const click = () => {
    setTitle("");
    setParagraph("");
    const copyList = [...list];
    copyList.push({
      id: 5,
      title,
      par: paragraf,
    })
    setList(copyList)
  };
  return (
    <Container>
      <h1>Kart Oluşturma Programı</h1>
      <Stack>
        <Input.Wrapper label="Başlık">
          <Input placeholder="Başlık yazınız" 
          width={400} 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}/>
        </Input.Wrapper>
        <Textarea 
          placeholder="Paragraf yazınız" 
          label="Paragraf"
          value={paragraf}
          onChange={(e) => setParagraph(e.target.value)}/>
        <Button variant="outline" onClick={click}>
        Kart Oluştur
        </Button>
      </Stack>
      <h2>Kartlar:</h2>
      <Grid>
        {list.map(({par, title}, i) => (
          <Grid.Col span={4} key={`index ${i}`}>
            <Card 
              par={par}
              title={title}
              /*lesson={lesson}*/
              index={i}
            />
          </Grid.Col>          
        ))}
      </Grid>
    </Container>
  );
};

export default App;
