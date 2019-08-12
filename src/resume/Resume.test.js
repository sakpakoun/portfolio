import React from 'react';
import Resume from './Resume';
import { shallow } from 'enzyme';

describe('<Resume />', () => {
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<Resume />);
    });

    it('should render the resume component', () =>{
        expect(wrapper).toHaveLength(1);
    });

});
