import { instance } from "../axios"

export const getProducts = async () => {
    try {
        const response = await instance.get("/products")

        return response.data
    } catch(e) {
        throw new Error("Error on get products")
    }
}