import {Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Product from "./product.entity";
import ProductType from "./productType.entity";


@Entity("productTops")
class ProductTop {
    @PrimaryGeneratedColumn()
    public id?: number;
    @Column({unique:true})
    name:string;

    @Column({unique:true})
    code:string;

    @OneToMany(()=>Product,(productsWithThisTop :Product)=>productsWithThisTop.productTop)
    productsWithThisTop?:Product[]
    @ManyToMany(()=>ProductType,(productTypeswithThisTop:ProductType)=>productTypeswithThisTop.topsForThisProductType)
    productTypeswithThisTop?:ProductType[]

}

export default ProductTop;
