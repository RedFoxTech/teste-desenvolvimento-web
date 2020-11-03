import React from 'react';
import {
  Card,
  CardContent,
  CardImage,
  Media,
  MediaLeft,
  MediaContent,
  Title,
  SubTitle,
  Content,
  Tag,
} from 'reactbulma';

const Header = () => (
  <Card>
    <CardImage src="http://bulma.io/images/placeholders/1280x960.png" ratio="4by3" />
    <CardContent>
      <Media>
        <MediaLeft>
          <Title is="4">#id</Title>
        </MediaLeft>
        <MediaContent>
          <Title is="4">Nome pokemon</Title>
          <SubTitle is="6">Geração:</SubTitle>
        </MediaContent>
      </Media>
      <Content>
        <Tag medium>type1</Tag>
        <Tag medium>type2</Tag>
      </Content>
    </CardContent>
  </Card>
);

export default Header;
