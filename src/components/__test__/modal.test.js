import React from "react";
import {render, cleanup, screen, fireEvent} from '@testing-library/react';
import Modal from "../Modal";
import '@testing-library/jest-dom';

describe('Modal Component Test With React Testing Library', () => {

  afterEach(cleanup);

  const initialProps = {
    onClose: jest.fn(),
    children: "test child",
    title: "test title",
    isOpen:true
  };
  
    it('Should Take A Snapshot', () => {
      const { asFragment } = render(<Modal { ...initialProps }/>)
      expect(asFragment(<Modal { ...initialProps }/>)).toMatchSnapshot();
     });
     
     it('Click Close Event', () => {
      const handleClick = jest.fn();
      render(<Modal isOpen={true} onClose={handleClick}/>);
      const btn = screen.getByRole('button', {
        name: /close/i
      });
      fireEvent.click(btn);
      expect(handleClick).toHaveBeenCalledTimes(1);
     });

     it('Test Title', () => {
       const inputTitle = 'test';
      render(<Modal isOpen={true} title={inputTitle}/>);
      expect(screen.getByText(`test`)).toBeInTheDocument();
     });

     it('Test Childeren', () => {
      const inputChildren = 'test';
     render(<Modal isOpen={true} children={inputChildren}/>);
     expect(screen.getByText(`test`)).toBeInTheDocument();
    });

});