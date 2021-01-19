import RepositoryService from "../interfaces/service.interface";
import {DeleteResult, getRepository} from "typeorm";
import Language from "../Models/Languages/language.entity";
import LanguageCode from "../Models/LanguageCodes/languageCode.entity";
import CreateLanguageCodeDto from "../Models/LanguageCodes/languageCode.dto";
import LanguageNotFoundException from "../Exceptions/LanguageNotFoundException";
import LanguageAlreadyExistException from "../Exceptions/LanguageAlreadyExistException";

class LanguageService implements RepositoryService{

    public repository=getRepository(Language);

    public async findOneById(id:string):Promise<Language>{
        const foundRecord =await this.repository.findOne(id);
        if(!foundRecord){
            throw new LanguageNotFoundException(id);
        }
        return foundRecord;


    }
    public async findOneByLanguageCode(languageCode:string):Promise<Language>{
        const foundRecords =await this.repository.findOne({languageCode:languageCode});
        return foundRecords;



    }


    public async findAllDimensionCodes():Promise<Language[]>{
        const foundRecords =await this.repository.find();

        return foundRecords;

    }
    public async addOneDimensionCode(createLanguageDto:CreateLanguageCodeDto):Promise<Language>{
        const recordAlreadyExistInDatabase = await this.findOneByLanguageCode(createLanguageDto.languageCode)

        if(recordAlreadyExistInDatabase){
            throw new LanguageAlreadyExistException(createLanguageDto.languageCode);
        }


        const recordToSave={
            ...createLanguageDto
        };
        const savedRecord=await this.repository.save(recordToSave);
        return savedRecord;

    }
    public async updateDimensionCodeById(id:string, createLanguageDto:CreateLanguageCodeDto):Promise<Language>{
        const idOfExistingRecord:boolean=await this.findOneById(id)!==null;
        if(idOfExistingRecord){
            const recordWithThisCodeInDatabase= await this.findOneByLanguageCode(createLanguageDto.languageCode)
            // do not allow to update if other material with this code or name already exist and throw exception
            if(recordWithThisCodeInDatabase){
                if((recordWithThisCodeInDatabase.id!==Number(id))){
                    throw new LanguageAlreadyExistException(createLanguageDto.languageCode);
                }
            }

            const recordToUpdate = this.repository.create( {
                ...createLanguageDto,
                id: Number(id)

            });
            const updatedRecord=await this.repository.save(recordToUpdate);

            return updatedRecord;


        }
        else {
            throw new LanguageNotFoundException(id);
        }



    }
    public async deleteOneById(id:string):Promise<DeleteResult>{
        const idOfExistingRecord:boolean=await this.findOneById(id)!==null;
        if(idOfExistingRecord){
            const deleteResult:DeleteResult= await this.repository.delete(id);
            return deleteResult;
        }
        else {
            throw new LanguageNotFoundException(id);
        }




    }





}
export default LanguageService;
