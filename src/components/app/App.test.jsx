import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('Should render App', () => {
    shallow(<App>Hello World!</App>);
});
