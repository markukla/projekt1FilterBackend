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
initialVocabularyForDatabase.push(generalTable2)
const generalTable3: Vocabulary = {
    variableName: 'deleteButtonInfo',
    localizedNames: [new LocalizedName('PL', 'Usuń'), new LocalizedName('CZE', 'Usuń po czesku')]
}
initialVocabularyForDatabase.push(generalTable3);
const generalTable4: Vocabulary = {
    variableName: 'updateButtonInfo',
    localizedNames: [new LocalizedName('PL', 'Modyfikuj'), new LocalizedName('CZE', 'Modyfikuj po czesku')]
}
initialVocabularyForDatabase.push(generalTable4);
const generalTable5: Vocabulary = {
    variableName: 'operationAddSuccessStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Dodano nowy rekord do bazy danych'), new LocalizedName('CZE', 'Dodano nowy rekord do bazy danych po czesku')]
}
initialVocabularyForDatabase.push(generalTable5);
const generalTable6: Vocabulary = {
    variableName: 'operationAddFailerStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Nie udało się dodać nowego rekordu do bazy danych'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable6);


const generalTable7: Vocabulary = {
    variableName: 'operationUpdateSuccessStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Pomyślnie zaktualizowano wybrany rekord w bazie danych'), new LocalizedName('CZE', 'Dodano nowy rekord do bazy danych po czesku')]
}
initialVocabularyForDatabase.push(generalTable7);
const generalTable8: Vocabulary = {
    variableName: 'operationUpdateFailerStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Nie udało się zaktualizować wybranego rekordu w bazie danych'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable8);

const generalTable9: Vocabulary = {
    variableName: 'operationDeleteSuccessStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Usunięto wybrany rekord'), new LocalizedName('CZE', 'Dodano nowy rekord do bazy danych po czesku')]
}
initialVocabularyForDatabase.push(generalTable9);
const generalTable10: Vocabulary = {
    variableName: 'operationDeleteFailerStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Nie udało się usunąć wybranego rekordu'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable10);
const generalTable11: Vocabulary = {
    variableName: 'name',
    localizedNames: [new LocalizedName('PL', 'Nazwa'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable11);
const generalTable12: Vocabulary = {
    variableName: 'seeDrawing',
    localizedNames: [new LocalizedName('PL', 'Zobacz Rysunek'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable12);
const generalTable13: Vocabulary = {
    variableName: 'seeHistory',
    localizedNames: [new LocalizedName('PL', 'Zobacz Historię'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable13);





const generalUser1: Vocabulary = {
    variableName: 'partnerCode',
    localizedNames: [new LocalizedName('PL', 'Kod parntera handlowego'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser1)
const generalUser2: Vocabulary = {
    variableName: 'partnerCompanyName',
    localizedNames: [new LocalizedName('PL', 'Nazwa Partnera Handlowego'), new LocalizedName('CZE', 'CZE ....')]
}
const generalUser3: Vocabulary = {
    variableName: 'addNewBusinessPartner',
    localizedNames: [new LocalizedName('PL', 'Dodaj nowego Partnera Handlowego'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser3)
const generalUser4: Vocabulary = {
    variableName: 'addNewUser',
    localizedNames: [new LocalizedName('PL', 'Dodaj nowego użytkownika'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser4)

const generalUser5: Vocabulary = {
    variableName: 'fullName',
    localizedNames: [new LocalizedName('PL', 'Imię i nazwisko'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser5)
const generalUser6: Vocabulary = {
    variableName: 'email',
    localizedNames: [new LocalizedName('PL', 'email'), new LocalizedName('CZE', 'email')]
}
initialVocabularyForDatabase.push(generalUser6)

const generalUser7: Vocabulary = {
    variableName: 'changePassword',
    localizedNames: [new LocalizedName('PL', 'Zmień Hasło'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser7)
const generalUser8: Vocabulary = {
    variableName: 'blockUser',
    localizedNames: [new LocalizedName('PL', 'Zablokuj Użytkownika'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser8)
const generalUser9: Vocabulary = {
    variableName: 'unblockUser',
    localizedNames: [new LocalizedName('PL', 'Odblokuj użytkownika'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser9)
const generalUser10: Vocabulary = {
    variableName: 'businessPartnerOrders',
    localizedNames: [new LocalizedName('PL', 'Zapytania o indeks worka'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser10)

const generalUser11: Vocabulary = {
    variableName: 'userStatusBlocked',
    localizedNames: [new LocalizedName('PL', 'Zablokowany'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser11)
const generalUser12: Vocabulary = {
    variableName: 'userStatusActive',
    localizedNames: [new LocalizedName('PL', 'Aktywny'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser12)

const generalUser13: Vocabulary = {
    variableName: 'userHasBennBlockedMessage',
    localizedNames: [new LocalizedName('PL', 'Użytkownik został zablokowany'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser13)
const generalUser14: Vocabulary = {
    variableName: 'userHasBeenUnblockedMessage',
    localizedNames: [new LocalizedName('PL', 'Użytkownik został odblokowany'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser14)
const generalUser15: Vocabulary = {
    variableName: 'admins',
    localizedNames: [new LocalizedName('PL', 'Administatorzy'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser15)
const generalUser16: Vocabulary = {
    variableName: 'editors',
    localizedNames: [new LocalizedName('PL', 'Edytorzy'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser16)

export {initialVocabularyForDatabase};


