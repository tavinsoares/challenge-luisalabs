import { render , screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom';

import userEvent from "@testing-library/user-event"
import Header from ".."

describe('Header test', () => {
    it('Should open the menu when user click in the user icon', () => {
        render(<Header />, { wrapper: BrowserRouter })

        const menuItems = ["Entrar", "Minha conta", "Endereços", "Minha Netshoes"];
       
        menuItems.map(item => {
            expect(screen.queryByText(item)).not.toBeInTheDocument()
        })

        const button = screen.queryByTestId('button-header')

        userEvent.click(button)

        menuItems.map(item => {
            expect(screen.getByText(item)).toBeInTheDocument()
        })
    })
})