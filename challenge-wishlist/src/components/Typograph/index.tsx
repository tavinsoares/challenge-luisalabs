import classnames from "classnames"

import { Presets } from "./presets"
import { sanatizeColors, sanatizeDecorations, sanatizeWeight } from "./helpers"

type TypographyProps = {
    preset: string,
    htmlTag: keyof JSX.IntrinsicElements,
    weight: "bold" | "regular",
    color: "white" | "black" | "yellow" | "gray" | "purple",
    decoration?: string,
    classNames?: string
}

const Typography = ({
    preset: presetName,
    htmlTag: HtmlTag,
    weight,
    color,
    decoration = "",
    children,
    classNames
}: React.PropsWithChildren<TypographyProps>)  => {
    const preset = Presets[presetName]

    const classes = classnames(
        preset.fonts,
        sanatizeWeight(preset, weight),
        sanatizeColors(preset, color),
        sanatizeDecorations(preset, decoration),
        classNames
    )

    return (
        <HtmlTag className={classes}>
            {children}
        </HtmlTag>
    )
}

export default Typography