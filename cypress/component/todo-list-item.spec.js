import React from 'react';
import { TodoListItem } from '../../src/components/todo/list/TodoListItem';
import { mount } from '@cypress/react';

describe('Todo list item', () => {
  it('renders todo item', () => {
    const todo = {
      id: 1,
      done: false,
      desc: 'new TODO',
    };
    mount(<TodoListItem todo={todo} index={1} />);
    cy.get('.list-group > .list-group-item:first > p')
      .first()
      .should('contain', '1. new TODO');
  });
});
