export type TGoodsType = 'fruits' | 'vegetables' | 'drinks' | 'meat' | 'dairy' | 'grains' | 'sweets'

export interface IGoodsItemModel {
    id: string
    name: string
    type: TGoodsType
    price: number
    description: string
    short_description: string
    image: string
}