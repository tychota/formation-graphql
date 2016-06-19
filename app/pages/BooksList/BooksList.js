import React from 'react';
import 'react-toolbox/lib/commons.scss';           // Import common styles
import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';

const BooksList = () => (
  <List selectable ripple>
    <ListSubHeader caption='Book choice' />
    <ListItem
      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
      caption='Dr. Manhattan'
      legend="Jonathan 'Jon' Osterman"
      rightIcon='thumb_up'
      rightActions={[<div>test</div>]}
    />
    <ListItem
      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
      caption='Ozymandias'
      legend='Adrian Veidt'
      rightIcon='thumb_up'
    />
    <ListItem
      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
      caption='Rorschach'
      legend='Walter Joseph Kovacs'
      rightIcon='thumb_up'
    />
  </List>
);

export default BooksList;