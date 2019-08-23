import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import Creatures from './Creatures';
import CreatureDetails from './CreatureDetails';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Routes', () => {
  it('should show App home page by default', () => {
    const wrapper = shallow( <MemoryRouter initialEntries={['/']} initialIndex={0} >
      <App />
    </MemoryRouter>
    );
    expect(wrapper.find(App)).toHaveLength(1);
  });

  it('should show Unicorns page when unicorn link is clicked', () => {
    const wrapper = mount( <MemoryRouter initialEntries={['/unicorns']} >
      <App />
    </MemoryRouter>
    );
    expect(wrapper.find(Creatures)).toHaveLength(1);
  });

  it('should show Puppies page when puppies link is clicked', () => {
    const wrapper = mount( <MemoryRouter initialEntries={['/puppies']} >
      <App />
    </MemoryRouter>
    );
    expect(wrapper.find(Creatures)).toHaveLength(1);
  });

  it('should show Sharks page when sharks link is clicked', () => {
    const wrapper = mount( <MemoryRouter initialEntries={['/sharks']} >
      <App />
    </MemoryRouter>
    );
    expect(wrapper.find(Creatures)).toHaveLength(1);
  });

  it('should not show anything when an invalid link is clicked', () => {
    const wrapper = mount( <MemoryRouter initialEntries={['/shark']} >
      <App />
    </MemoryRouter>
    );
    expect(wrapper.find(Creatures)).toHaveLength(0);
  });

  it('should not render anything when an invalid link is clicked', () => {
    const wrapper = mount( <MemoryRouter initialEntries={['/buzz']} >
      <App />
    </MemoryRouter>
    );
    expect(wrapper.find(Creatures)).toHaveLength(0);
  });

  it('should not show anything when an invalid link is clicked', () => {
    const wrapper = mount( <MemoryRouter initialEntries={['/sharks3']} >
      <App />
    </MemoryRouter>
    );
    expect(wrapper.find(Creatures)).toHaveLength(0);
  });

  it('should show a specific creature when selected', () => {
    const wrapper = mount( <MemoryRouter initialEntries={['/sharks/3']} >
      <App />
    </MemoryRouter>
    );
    expect(wrapper.find(CreatureDetails)).toHaveLength(1);
  });

  it('should not render anything when an invalid specific creature is selected', () => {
    const wrapper = mount( <MemoryRouter initialEntries={['/sharks/33']} >
      <App />
    </MemoryRouter>
    );
    expect(wrapper.find(CreatureDetails)).toHaveLength(0);
  });
});

