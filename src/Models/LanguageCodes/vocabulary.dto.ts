import {IsObject, IsString, Length} from "class-validator";
import Language from "../Languages/language.entity";

class CreateVocabularyDto
{

    @IsString()
    variableName:string;
    @IsObject()
    language:Language;


}
export default CreateVocabularyDto;
