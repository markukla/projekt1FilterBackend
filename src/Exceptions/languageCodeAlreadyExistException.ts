import HttpException from "./HttpException";

class LanguageCodeAlreadyExistException extends HttpException {
    constructor(languageCode: string) {

         if(languageCode){
            super(400, `Language Code with languageCode= ${languageCode} already exists`);
        }



    }
}

export default LanguageCodeAlreadyExistException;
