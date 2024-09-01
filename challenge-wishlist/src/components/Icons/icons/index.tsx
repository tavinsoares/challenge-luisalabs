import { SVGProps } from 'react'
import User from './User'
import WishList from './WishList'
import Logo from './Logo'
import HeartFull from './HeartFull'
import HeartOutline from './HeartOutline'
import Close from './Close'

export const icons: { [key: string]: React.FC } = {
    user: (props: SVGProps<SVGSVGElement>) => <User {...props} />,
    wishList: (props: SVGProps<SVGSVGElement>) => <WishList {...props} />,
    logo: (props: SVGProps<SVGSVGElement>) => <Logo {...props} />,
    heartFull: (props: SVGProps<SVGSVGElement>) => <HeartFull {...props} />,
    heartOutline: (props: SVGProps<SVGSVGElement>) => <HeartOutline {...props} />,
    close: (props: SVGProps<SVGSVGElement>) => <Close {...props} />,
}