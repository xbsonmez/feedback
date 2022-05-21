import React from "react";
import {render, cleanup, screen, fireEvent} from '@testing-library/react';
import Message from "../Message";
import '@testing-library/jest-dom';

describe('Message Component Test', () => {

  afterEach(cleanup);

  const initialProps = {
    onSend: jest.fn(),
   
  };
    it('Should Take A Snapshot', () => {
      const { asFragment } = render(<Message { ...initialProps }/>)
      expect(asFragment(<Message { ...initialProps }/>)).toMatchSnapshot()
    
    });
    it("render without crash", () =>{
        const div = document.createElement("div");
        render(<Message {...initialProps}/>, div);
    });

    it("onSend Click Test", () =>{
        const handleClick = jest.fn();
        render(<Message  onSend= { handleClick }/>);
        const btn = screen.getByRole('button', {
          name: /onSend/i
        });
        fireEvent.click(btn);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("textarea rendered test", () =>{
        const div = document.createElement("div");
        render(<Message {...initialProps}/>, div);
        screen.queryByTestId(`text-area`).textContent='undefined';
        const textarea = screen.queryByTestId(`text-area`);
        expect(textarea).toHaveTextContent();
    });
});