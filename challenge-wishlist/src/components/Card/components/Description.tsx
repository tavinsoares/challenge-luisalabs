import { DescriptionProps } from "../card.types"

import Typography from "../../Typograph"
import { useCardContext } from "../context"

const Description = ({ classNames }: DescriptionProps) => {
    const context = useCardContext()

    const { name } = context;

    return (
        <Typography
            preset="bodyText"
            htmlTag="h3"
            color="black"
            weight="bold"
            classNames={classNames}
        >
            {name}
        </Typography>
    )
}

export default Description