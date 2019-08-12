import React from 'react';
import About from './About';
import { shallow } from 'enzyme';

describe('<About />', () => {
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<About />);
    });

    it('should render the about component', () =>{
        expect(wrapper).toHaveLength(1);
    });

});
