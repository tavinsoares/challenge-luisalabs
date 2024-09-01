
import { render, screen } from "@testing-library/react"
import Popover from ".."

describe('Popover test', () => {
    it('Should render trigger and not render content when isOpen is false', () => {
        render(
            <Popover isOpen={false} content={() => <span>content</span>} trigger={() => <span>trigger</span>} />
        )

        const elementTrigger = screen.queryByText("trigger")
        const elementContent = screen.queryByText("content")

        expect(elementContent).not.toBeInTheDocument()
        expect(elementTrigger).toBeInTheDocument()
    });

    it('Shoud render trigger and content when isOpen is true', () => {
        render(
            <Popover isOpen={true} content={() => <span>content</span>} trigger={() => <span>trigger</span>} />
        )

        const elementTrigger = screen.queryByText("trigger")
        const elementContent = screen.queryByText("content")

        expect(elementContent).toBeInTheDocument()
        expect(elementTrigger).toBeInTheDocument()
    })
})