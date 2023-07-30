import "./App.css";
import Card from "./components/Card";
import { useState } from "react";
import { Button, Container, Grid, Stack, Input, Textarea } from '@mantine/core';

//let arr = [   nesneleri arr dizisi içinde tutuyoruz.
//let arr dizisini iptal edip kart bilgilerini useState'e aşağıdaki gibi atıyoruz
  const App = () => {
    const [title, setTitle] = useState("Başlık");
    const [paragraf, setParagraph] = useState("");
    const [list, setList] = useState([  
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
]);

/*const App = () => {
  const [title, setTitle] = useState("Başlık");
  const [paragraf, setParagraph] = useState("");
  const [list, setList] = useState(arr);*/
  /*const [lesson, setLesson] = useState([]);*/
  const click = () => {/*Kart Oluştur botonuna basılınca butona tanımlanan onClick={click} eventinin içindeki click fonksiyonu devreye girer*/
    setTitle("");/*setTitle fonksiyonunun içeriği "" ile boşaltılır ve Input.Wrapper'daki title boş görülür.*/
    setParagraph("");/*setParagraph fonksiyonunun içeriği "" ile boşaltılır ve Textarea'daki paragraf boş görülür.*/
    /*const copyList = [...list];/*copyList adında bir dizi oluşturduk. İçeriği arr dizisine eşlenmiş olan list dizisini ...ile kopyaladık ve içindeki nesneleri copyList dizisine kopyalamış olduk*/
    setList ([
      ...list,
      { 
        id: 5,
        title,
        par: paragraf
      }

    //Eğer copyList=list deseydik kopyalama yapamazdık, referans gösterirdi ve biz yeni nesneler push edemezdik.
    /*const copyList = [...List, değer] yaparsam kart sona eklenirdi yine
      const copyList = [değer,..List] yaparsam kart başa eklenirdi*/
    /*copyList.push(copyList değeri olan list, yani arr dizisine içeriği aşağıdaki veriler olan element ekliyoruz
      id: 5,
      title,
      par: paragraf,
    })*/
    /*setList(copyList)/*setList'in içeriğini arr'den değiştirip copyList yapıyoruz. list'in değeri artık arr'den değil copyList'ten belirleniyor.Ancak bunu kullanmak yerine yukarıda direkt setList [...list,değer] yazarak daha okunaklı hale getiriyoruz.*/
  ]);
};
  return (
    <Container>
      <h1>Kart Oluşturma Programı</h1>
      <Stack>{/*Öğeleri ve bileşenleri dikey esnek kapsayıcıda oluşturur*/}
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
      <Grid>{/*Mantine grid yapsını uygulamamızı sağlar*/}
        {list.map(({par, title}, i) => (
          <Grid.Col span={4} key={`index ${i}`}>
            <Card par={par} title={title}/*lesson={lesson}*/index={i}/>
          </Grid.Col>          
        ))}
      </Grid>
    </Container>
  );
};

export default App;
