import React from 'react';
const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
  const mockCurrentCategory = jest.fn();
  const mockSetCurrentCategory = jest.fn();

//'render' renders the component in simulated DOM, 'cleanup' function removes
//components from DOM to prevent memory leaking, or collisions that could corrupt tests
import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Nav from '..';

//cleanup after each test to leave no lingering data/results
afterEach(cleanup);

describe("Nav component", () => {
    //baseline test
    test('renders', () => {
        render(<Nav
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
        />);
      })
    //snapshot test
    test('matches snapshot', () => {
        const { asFragment } = render(<Nav></Nav>);
        expect(asFragment()).toMatchSnapshot();
    })
    //snapshot test
});

//test if camera emoji is visible
describe('emoji is visible', () => {
    test('inserts emoji into h2', () => {
        //Arrange
        const { getByLabelText } = render(<Nav></Nav>);
        //Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
});

//test if Nav links are visible
describe('nav links are visible', () => {
    test('inserts text into the links', () => {
        const { getByTestId } = render(<Nav></Nav>);

        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');
    })
});