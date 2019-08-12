import React from 'react';
import Landing from './Landing';
import { shallow } from 'enzyme';

describe('<Landing />', () => {
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<Landing />);
    });

    it('should render the landing component', () =>{
        expect(wrapper).toHaveLength(1);
    });

});
