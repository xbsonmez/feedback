import {render, cleanup, screen, fireEvent} from '@testing-library/react';
import App from './App';
import { testStore } from '../utils/testUtils';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

describe('App Component Test With React Testing Library', () => {

    afterEach(cleanup);
    
    const store = testStore();

    test('App render', () => {
      const { asFragment } = render(  <Provider store={store}> <App /> </Provider>);
      expect(asFragment(  <Provider store={store}> <App />  </Provider>)).toMatchSnapshot();
    
    });


    test('feedback-btn', () => {
        const handleClick = jest.fn();
        render( <Provider store={store}> <App /> </Provider> );
        const btn = screen.getByRole('button', {
            name: /feedback-btn/i
          });

        fireEvent.click(btn);
        expect(handleClick).toBeTruthy();
    });
});