import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button, { ButtonSize, ButtonType } from './Button'




describe('test Button component', () => {
    it('should render the correct default button', () => {
        render(<Button buttonType={ButtonType.Primary} size={ButtonSize.Small}>小按钮</Button>);
        const button = screen.getByRole('button')
        expect(button).toHaveClass('btn btn-primary btn-sm')
        expect(button).toBeInTheDocument()
    })
    it('should render link the correct button', () => {
        render(<Button buttonType={ButtonType.Link}>Link</Button>);
        const link = screen.getByRole('link')
        expect(link).toHaveClass('btn btn-link')
        expect(link).toBeInTheDocument()
    })
    it('should destory when trigger the currect button', () => {
        let count = 1
        render(<Button buttonType={ButtonType.Primary} onClick={() => { count++ }} size={ButtonSize.Small}>小按钮</Button>);
        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(count).toBe(2)
    })
})