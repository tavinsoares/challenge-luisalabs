import { useCardContext } from "../context"
const ImageCard = () => {
    const context = useCardContext()
    const { image, name } = context

    return (
        <div>
            <img src={image} alt={name} loading="lazy" />
        </div>
    )   
}

export default ImageCard