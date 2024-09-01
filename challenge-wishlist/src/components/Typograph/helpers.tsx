import _includes from "lodash/includes"
import { PresetValuesInterfarce, Weight, Colors, Decorations } from "./presets"

const sanatize = (presets: string | string[], value: string, defaultPreset: PresetValuesInterfarce) => {
    return _includes(presets, value) ? defaultPreset[value] : defaultPreset[0]
}

export const sanatizeWeight = (preset: PresetValuesInterfarce, weight: string) => {
    return sanatize(preset.weights, weight, Weight)
}

export const sanatizeColors = (preset: PresetValuesInterfarce, color: string) => {
    return sanatize(preset.colors, color, Colors)
}

export const sanatizeDecorations = (preset: PresetValuesInterfarce, decoration: string) => {
    return sanatize(preset.decorations, decoration, Decorations)
}