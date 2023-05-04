import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SendMessage } from "..";

describe('Test SendMessage component', () => {

  test('Should be render button and input correctly', () => {

    const { getByRole } = render(<SendMessage onClickFn={vi.fn} />)

    const button = getByRole('button');
    const inputMessage = getByRole('textbox');

    expect(button).toBeInTheDocument();
    expect(inputMessage).toBeInTheDocument();
  });

  test('Should be get message correctly when click the button', () => {

    let message = '';

    const { getByRole } = render(<SendMessage onClickFn={(messageContent) => message = messageContent} />);

    const inputMessage = getByRole('textbox') as HTMLInputElement;
    const button = getByRole('button');

    fireEvent.change(inputMessage, { target: { value: 'john doe' } });
    fireEvent.click(button);

    expect(message).toEqual('john doe')
  });

  test('Should be get message correctly when press Enter key', () => {

    let message = '';

    const { getByRole } = render(<SendMessage onClickFn={(messageContent) => message = messageContent} />);

    const inputMessage = getByRole('textbox');

    fireEvent.change(inputMessage, { target: { value: 'john doe' } });
    fireEvent.keyDown(inputMessage, { key: 'Enter' });

    expect(message).toEqual('john doe')
  });

  test('Should be return empty value when clicked or pressed Enter', () => {

    const clickFn = vi.fn();
    const { getByRole } = render(<SendMessage onClickFn={clickFn} />)

    const button = getByRole('button');
    const inputMessage = getByRole('textbox') as HTMLInputElement;

    fireEvent.click(button);

    expect(clickFn).toBeCalled();
    expect(inputMessage.value).toBe('')


    fireEvent.keyDown(inputMessage, { key: 'Enter' });

    expect(clickFn).toBeCalled();
    expect(inputMessage.value).toBe('')
  });
})
