import {Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity("languages")
class Language {
    @PrimaryGeneratedColumn()
    public id?: number;
    @Column({unique: true})
    languageCode: string;
    @Column()
    languageName: string;
    @Column()
    active: boolean;
}

export default Language;
