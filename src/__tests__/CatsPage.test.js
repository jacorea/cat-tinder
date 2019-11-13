import React from 'react'
import ReactDOM from 'react-dom'
import CatsPage from '../pages/CatsPage';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import catData from '../cats.utls';

Enzyme.configure({ adapter: new Adapter() });

const cats = catData;

it('Cats renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CatsPage cats={cats} />, div);
});

it('Renders the cats', ()=>{
  const component = mount(<CatsPage cats={cats} />)
  const headings = component.find('h4 > .cat-name')
  expect(headings.length).toBe(3)
})