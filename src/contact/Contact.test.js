import React from 'react';
import Contact from './Contact';
import { shallow } from 'enzyme';

describe('<Contact />', () => {
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<Contact />);
    });

    it('should render the contact component', () =>{
        expect(wrapper).toHaveLength(1);
    });

});
