import { click } from "@testing-library/user-event/dist/click";
import "./Card.css";
import { Card, Image, Text, /*Badge,*/ Button, CloseButton, Group } from '@mantine/core';

const CardComponent = ({title, par, i, click}) => (
<Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        {/*<Badge color="pink" variant="light">
          On Sale
        </Badge>*/}
        {/*Kart Silmek için onClick içerisinde click callbackfonksiyonunu çağırıyoruz*/}
        <CloseButton 
          aria-label="Close modal" 
          onClick={click}//click fonksiyonunu callback olarak App.js'ten aldık.
        //aşağıdaki onClick eventini kullanıyorduk ama callback olarak app.js te click fonksiyonu tanımladık ve dışarıdan çağırdık.
        /*onClick={() => {/*bu click eventini callback ile de dışarıdan props olarak gönderebiliriz.Bunun için app.js te Grid componentinin içinde Card componentine gideriz ve oraya click fonksiyonu ekleriz.
          console.log("Çarpıya basıldı", i);
        }}*/
        />{/*Kart içerisine sağ tarafa X şeklinde close buton oluşturuyoruz*/}

      </Group>

      <Text size="sm" color="dimmed">
        {par} 
      </Text>

      

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
);

export default CardComponent;/*App.js'e gidip orada import edersek kullanabiliriz...*/