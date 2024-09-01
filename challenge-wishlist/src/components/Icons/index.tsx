import { SVGProps } from 'react'
import { icons } from './icons'

type IconPropsDefault  = {
    name: string,
}

export type IconProps = IconPropsDefault & SVGProps<SVGSVGElement>

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
    const Component = icons[name]

    if(!Component) {
        console.warn(`${name} icon not exists.`)
        return null
    }

    return (
        <Component {...props}  />
    )
}

export default Icon