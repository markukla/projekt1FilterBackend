import HttpException from "./HttpException";

class LanguageCodeNotFoundException extends HttpException{

    constructor(id:string) {

        if(id){
            super(404,`LanguageCode with id ${id} not found`);
        }

    }
}
export default LanguageCodeNotFoundException;
