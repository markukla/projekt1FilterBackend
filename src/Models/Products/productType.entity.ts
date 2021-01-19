import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Product from "./product.entity";
import ProductTop from "./productTop.entity";
import ProductBottom from "./productBottom.entity";


@Entity("productTypes")
class ProductType {
    @PrimaryGeneratedColumn()
    public id?: number;
    @Column()
    name:string;

    @Column()
    code:string;

    @OneToMany(()=>Product,(productsWithThisType:Product)=>productsWithThisType.productType)
    productsWithThisType?:Product[];

    @ManyToMany(()=>ProductTop, (topsForThisProductType: ProductTop)=> topsForThisProductType.productTypeswithThisTop)
    @JoinTable({name:"productType_productTop_id_pairs"})
    topsForThisProductType:ProductTop[];

    @ManyToMany(()=>ProductBottom, (bottomsForThisProductType:ProductBottom) => bottomsForThisProductType.productTypesWithThisBottom)
    @JoinTable({name:"productType_productBottom_id_pairs"})
    bottomsForThisProductType:ProductBottom[];



}
export default ProductType;


