import {Column} from "typeorm";
import LocalizedName from "../DimesnionCodes/localizedName";
import Vocabulary from "./vocabulary.entity";
const initialVocabularyForDatabase: Vocabulary[] = [];

const materialTable1: Vocabulary = {
    variableName : 'materialCode',
    localizedNames: [new LocalizedName('PL', 'Kod Materiału'), new LocalizedName('CZE', 'Kod Materiału po czesku')]
}
initialVocabularyForDatabase.push(materialTable1);
const materialTable2: Vocabulary = {
    variableName: 'materialName',
    localizedNames: [new LocalizedName('PL', 'Nazwa Materiału'), new LocalizedName('CZE', 'Nazwa Materiału po czesku')]
}
initialVocabularyForDatabase.push(materialTable2);
const materialTable3: Vocabulary = {
    variableName: 'addNewMaterial',
    localizedNames: [new LocalizedName('PL', 'Dodaj Nowy Materiał'), new LocalizedName('CZE', 'Dodaj nowy materiał po czesku')]
}
initialVocabularyForDatabase.push(materialTable3);
const generalTable1: Vocabulary = {
    variableName: 'quantity',
    localizedNames: [new LocalizedName('PL', 'Ilość'), new LocalizedName('CZE', 'Ilość po czesku')]
}
initialVocabularyForDatabase.push(generalTable1);
const generalTable2: Vocabulary = {
    variableName: 'search',
    localizedNames: [new LocalizedName('PL', 'Wyszukaj'), new LocalizedName('CZE', 'Wyszukaj po czesku')]
}
initialVocabularyForDatabase.push(generalTable2);

export {initialVocabularyForDatabase};


