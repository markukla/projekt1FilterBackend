import RepositoryService from "../interfaces/service.interface";
import {DeleteResult, getRepository} from "typeorm";
import Material from "../Models/Materials/material.entity";
import MaterialNotFoundExceptionn from "../Exceptions/MaterialNotFoundException";
import CreateMaterialDto from "../Models/Materials/material.dto";
import MaterialAlreadyExistsException from "../Exceptions/MaterialAlreadyExistsException";
import LanguageCode from "../Models/LanguageCodes/languageCode.entity";
import CreateLanguageCodeDto from "../Models/LanguageCodes/languageCode.dto";
import LanguageCodeAlreadyExistException from "../Exceptions/languageCodeAlreadyExistException";
import LanguageCodeNotFoundException from "../Exceptions/languageCodeNotFoundException";

class LanguageCodeService implements RepositoryService{

    public repository=getRepository(LanguageCode);

    public async findOneLanguageCodeById(id:string):Promise<LanguageCode>{
        const foundCode:LanguageCode=await this.repository.findOne(id);
        if(!foundCode){
            throw new LanguageCodeNotFoundException(id);
        }
        return foundCode;


    }
    public async findOneLanguageCodeByCode(languageCode:string):Promise<LanguageCode> {
        const foundLanguageCode: LanguageCode = await this.repository.findOne({languageCode: languageCode});

        return foundLanguageCode;

    }
    public async findAllLanguageCodes():Promise<LanguageCode[]>{
        const foundCodes:LanguageCode[]=await this.repository.find();

        return foundCodes;

    }


    public async addOneLanguageCode(createLanguageCodeDto:CreateLanguageCodeDto):Promise<LanguageCode>{
        const languageCodeWithThisCodeInDatabase=await this.findOneLanguageCodeByCode(createLanguageCodeDto.languageCode);

        if(languageCodeWithThisCodeInDatabase){
            throw new LanguageCodeAlreadyExistException(createLanguageCodeDto.languageCode);
        }

        const languageCode:LanguageCode={
            ...createLanguageCodeDto
        };
        const savedLanguageCode=await this.repository.save(languageCode);
        return savedLanguageCode;

    }
    public async updateLanguageCodeById(id:string, createLanguageCodeDto:CreateLanguageCodeDto):Promise<LanguageCode>{
        const idOfExistingUser:boolean=await this.findOneLanguageCodeById(id)!==null;
        if(idOfExistingUser){
            const languageCodeWithThisCode=await this.findOneLanguageCodeByCode(createLanguageCodeDto.languageCode);
            // do not allow to update if other material with this code or name already exist and throw exception

            if(languageCodeWithThisCode){
                if(languageCodeWithThisCode.id!==Number(id)){
                    throw new LanguageCodeAlreadyExistException(createLanguageCodeDto.languageCode)
                }

            }

            const languageCode = this.repository.create( {
                ...createLanguageCodeDto,
                id: Number(id)

            });
            const updatedLanguageCode=await this.repository.save(languageCode);

            return updatedLanguageCode;


        }



    }
    public async deleteLanguageCodeById(id:string):Promise<DeleteResult>{
        const idOfExistingUser:boolean=await this.findOneLanguageCodeById(id)!==null;
        if(idOfExistingUser){
            const deleteResult:DeleteResult= await this.repository.delete(id);
            return deleteResult;
        }




    }

}
export default LanguageCodeService;
