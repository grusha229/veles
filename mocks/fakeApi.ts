import { IGoodsItemModel } from "@/models/goods";
import { goodsMockData } from "./goods.mock";

export const getProductById = async (id: string, delay: number = 1000): Promise<IGoodsItemModel | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = goodsMockData.find(product => product.id === id) || null;
            resolve(product);
        }, delay);
    });
};