import { createContext, useContext } from "react"
import { ICard } from "./card.types"

export const CardContext = createContext<ICard | null>(null)

export const useCardContext = () => {
    const context = useContext(CardContext)

    if(!context) {
        throw new Error('Without context')
    }

    return context
}