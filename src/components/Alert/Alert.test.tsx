import React from 'react';
import { render, screen ,fireEvent } from '@testing-library/react';
import Alert ,{ AlertType } from './Alert'



describe('test Alert component',()=>{
    it('should render the correct default alert',()=>{
        render(<Alert type={AlertType.Default} title='百度title' description='百度description'></Alert>);
        const title = screen.getByText('百度title')
        const description = screen.getByText('百度description')
       const alert = screen.getByRole('alert')
        expect(title).toBeInTheDocument()
        expect(description).toBeInTheDocument()
        expect(alert).toHaveClass('alert')
    })
    it('should destory when trigger close btn',()=>{
        render(<Alert type={AlertType.Default} title='百度title' close={true} description='百度description'></Alert>);
        const closeBtn = screen.getByRole('alert-close');
        const alert = screen.getByRole('alert')
        fireEvent.click(closeBtn);
        expect(alert).toBeVisible()
    })
})