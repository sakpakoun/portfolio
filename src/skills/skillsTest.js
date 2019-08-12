import React from 'react';
import Skills from './Skills';
import { shallow } from 'enzyme';

describe('<Skills />', () => {
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<Skills />);
    });

    it('should render the skills component', () =>{
        expect(wrapper).toHaveLength(1);
    });

});