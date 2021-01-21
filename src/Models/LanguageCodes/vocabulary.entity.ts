import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Order from "../Order/order.entity";
import Language from "../Languages/language.entity";
import languageRepositoryService from "../../RepositoryServices/languageRepositoryService";

@Entity("vocabularies")
class Vocabulary {

    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({unique:true})
    variableName:string;

   @ManyToOne(() => Language, (language: Language) => language.vocabularies, {eager: true})
    language:Language;

}
export default Vocabulary;
