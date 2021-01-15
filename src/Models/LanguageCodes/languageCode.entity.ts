import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Order from "../Order/order.entity";

@Entity("languageCodes")
class LanguageCode{

    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({unique:true,length:6})

    languageCode:string;

    @Column()
    description:string;

}
export default LanguageCode;
