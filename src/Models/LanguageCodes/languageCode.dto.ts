import {IsString, Length} from "class-validator";

class CreateLanguageCodeDto
{

    @IsString()
    languageCode:string;
    @IsString()
    description:string;


}
export default CreateLanguageCodeDto;
