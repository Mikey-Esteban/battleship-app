import App from './App';

import { shallow, mount } from 'enzyme';

describe('App', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Has a Battleship component', () => {
    wrapper = mount(<App />);
    expect(wrapper.contains('Battleship')).toBeTruthy();
  })
})
