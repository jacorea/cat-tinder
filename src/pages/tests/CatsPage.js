import React from 'react'
import ReactDOM from 'react-dom'
import Cats from '../CatsPage'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

it('Cats renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CatsPage />, div)
})