import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Order from "../Order/order.entity";
import Language from "../Languages/language.entity";

@Entity("vocabularies")
class Vocabulary {

    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({unique:true})
    variableName:string;

    @Column()
    language:Language;

}
export default Vocabulary;
