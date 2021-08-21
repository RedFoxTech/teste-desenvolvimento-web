import {
  Card,
  Img,
  Title
}from './style';

interface ICardNav {
  to: string,
  img: any,
  title: string,
  isPage: boolean
}

function  CardNav({to, img, title, isPage}:ICardNav){
  return (
    <Card
      to={to}
      isPage={isPage}
    >
      <Img
        src={img}
      />
      <Title>
        {title}
      </Title>
    </Card>
  )
}

export { CardNav }