import Language from "../Models/Languages/language.entity";

const PL: Language = {
    active: true,
    languageCode: 'PL',
    languageName: 'polski'
}
const CZE: Language = {
    active: true,
    languageCode: 'CZE',
    languageName: 'polski'
}
const Languages: Language[] = [PL, CZE];
export {Languages};
