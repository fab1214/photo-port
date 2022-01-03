import React from 'react';

//'render' renders the component in simulated DOM, 'cleanup' function removes
//components from DOM to prevent memory leaking, or collisions that could corrupt tests
import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import About from '..';

//cleanup after each test to leave no lingering data/results
afterEach(cleanup);

//describe what we are testing...
describe('About component',() => {
    //First test
    //'it()' or 'test()' works...
    test('renders', () => {
        render(<About></About>)
    })
    //Second test
    test('matches snapshot DOM node strcuture', () => {
        //asFragment returns Jest snapshot of the About component
        const { asFragment } = render(<About></About>);
        //test and compare the expected snapshot (above) to actual snapshot rendered
        expect(asFragment()).toMatchSnapshot();
    })
});