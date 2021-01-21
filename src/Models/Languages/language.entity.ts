import {Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Vocabulary from "../LanguageCodes/vocabulary.entity";

@Entity("aplicationLanguages")
class Language {
    @PrimaryGeneratedColumn()
    public id?: number;
    @Column({unique: true})
    languageCode: string;
    @Column()
    languageName: string;
    @Column()
    active: boolean;
    @OneToMany( ()=> Vocabulary, (vocabularies: Vocabulary) => vocabularies.language)
    vocabularies: Vocabulary[];
}

export default Language;
