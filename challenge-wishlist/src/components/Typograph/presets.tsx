export interface PresetValuesInterfarce {
    [key: string]: string[] | string,
}

export interface PresetInterface {
    [id: string]: PresetValuesInterfarce
}

const headings = {
    weights: ["regular", "bold"],
    colors: ["white", "black", "yellow", "gray", "purple"]
}

export const Presets: PresetInterface = {
    h1: {
        ...headings,
        fonts: 'tw-text-46 md:tw-text-56',
    },
    h2: {
        ...headings, 
        fonts: 'tw-text-32 md:tw-text-46',
    },
    h3: {
        ...headings,
        fonts: 'tw-text-24 md:tw-text-24'
    },
    h4: {
        ...headings,
        fonts: 'tw-text-20 md:tw-text-24'
    },
    h5: {
        ...headings,
        fonts: 'tw-text-16 md:tw-text-20'
    },
    bodyText: {
        ...headings,
        fonts: "tw-text-14 md:tw-text-16"
    },
    legalText: {
        colors: ["black", "yellow", "white", "purple"],
        decorations: ["stroke"],
        fonts: "tw-text-12 md:tw-text-14"
    }
}

export const Weight: PresetValuesInterfarce = {
    regular: 'tw-font-normal',
    bold: 'tw-font-bold',
}

export const Colors: PresetValuesInterfarce = {
    white: "tw-text-white",
    black: "tw-text-black",
    yellow: "tw-text-yellow",
    gray: "tw-text-gray-400",
    purple: "tw-text-purple"
}

export const Decorations: PresetValuesInterfarce = {
    stroke: "tw-line-through"
}