import React from 'react'
import ReactDOM from 'react-dom'
import NewCatPage from '../pages/NewCatPage'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewCatPage />, div)
})

it('has a name input', ()=>{
  const component = mount(<NewCatPage />)
 expect(component.find('label#name').text()).toBe("Name")
})

it('has a age input', ()=>{
  const component = mount(<NewCatPage />)
  expect(component.find('label#age').text()).toBe("Age")
})

it('has a enjoys input', ()=>{
  const component = mount(<NewCatPage />)
  expect(component.find('label#enjoys').text()).toBe("Enjoys")
})

it('has a submit button', ()=>{
    const component = mount(<NewCatPage />)
    expect(component.find('button#submit').text()).toBe("Create Cat Profile")
  })