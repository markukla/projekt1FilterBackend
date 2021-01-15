import Controller from "../interfaces/controller.interface";
import * as express from "express";
import DimensionCodeService from "../RepositoryServices/dimensionCodeRepositoryService";
import authMiddleware from "../middleware/auth.middleware";
import adminAuthorizationMiddleware from "../middleware/adminAuthorization.middleware";
import validationMiddleware from "../middleware/validation.middleware";
import CreateDimensionCodeDto from "../Models/DimesnionCodes/createDimensionCode.dto";
import DimensionCode from "../Models/DimesnionCodes/diemensionCode.entity";
import LanguageCodeService from "../RepositoryServices/languageCodeRepositoryService";
import CreateLanguageCodeDto from "../Models/LanguageCodes/languageCode.dto";
import LanguageCode from "../Models/LanguageCodes/languageCode.entity";

class LanguageCodeController implements Controller{
    public path = '/languageCodes';
    public router = express.Router();
    public  service:LanguageCodeService=new LanguageCodeService();
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, authMiddleware,this.getAllLanguageCodes);
        this.router.get(`${this.path}/:id`, authMiddleware, this.getOneLanguageCodeById);
        this.router.get(`${this.path}/codes/:code`,authMiddleware,adminAuthorizationMiddleware, this.languageCodeWithThisCodeExists);
        this.router.patch(`${this.path}/:id`, authMiddleware,adminAuthorizationMiddleware, validationMiddleware(CreateLanguageCodeDto, true), this.updateLanguageCode);
        this.router.delete(`${this.path}/:id`,authMiddleware,adminAuthorizationMiddleware, this.deleteOneDimensionById);
        this.router.post(this.path, authMiddleware,adminAuthorizationMiddleware, validationMiddleware(CreateLanguageCodeDto), this.addOneLanguageCode);
        // this.router.get(`${this.path}/names/:name`,authMiddleware,adminAuthorizationMiddleware, this.materialWithThisNameExist);
    }
//findOneMaterialByCode
    private addOneLanguageCode = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const languageData: CreateLanguageCodeDto = request.body;
        try {
            const languageCode:LanguageCode = await this.service.addOneLanguageCode(languageData);
            response.send(
                languageCode);
        } catch (error) {
            next(error);
        }
    }


    private updateLanguageCode = async (request: express.Request, response: express.Response, next: express.NextFunction)=>{
        const dimensionData: CreateLanguageCodeDto = request.body;
        const id:string=request.params.id;
        try {
            const updatedLanguageCOde = await this.service.updateLanguageCodeById(id, dimensionData);
            if(updatedLanguageCOde){
                response.send(updatedLanguageCOde)
            }

        }
        catch (error) {
            next(error);
        }

    }

    private getAllLanguageCodes = async (request: express.Request, response: express.Response, next: express.NextFunction)=>
    {
        try{
            const languageCodes:LanguageCode[]=await this.service.findAllLanguageCodes();

            response.send(languageCodes);
        }
        catch (error) {
            next(error);
        }
    }

    private getOneLanguageCodeById = async (request: express.Request, response: express.Response, next: express.NextFunction)=>{
        const id:string=request.params.id;
        try{
            const foundLanguageCOde=await this.service.findOneLanguageCodeById(id);
            if(foundLanguageCOde){
                response.send(foundLanguageCOde)
            }
        }
        catch (error) {
            next(error);
        }



    }
    private getOneLanguageCodeByCode = async (request: express.Request, response: express.Response, next: express.NextFunction)=>{
        const code:string=request.params.code;
        try{
            const foundLanguageCOde=await this.service.findOneLanguageCodeById(code);
            if(foundLanguageCOde){
                response.send(foundLanguageCOde)
            }
        }
        catch (error) {
            next(error);
        }



    }
    private deleteOneDimensionById = async (request: express.Request, response: express.Response, next: express.NextFunction)=>{
        const id:string=request.params.id;
        try{
            const deleTedResponse=await this.service.deleteLanguageCodeById(id);
            if(deleTedResponse.affected===1){
                response.send({
                    status:200,
                    message:`languageCode with id= ${id} has beeen removed`
                })
            }

        }
        catch (error) {
            next(error);
        }

    }

    private languageCodeWithThisCodeExists = async (request: express.Request, response: express.Response, next: express.NextFunction)=> {


        const code = request.params.code;
        let isTaken: boolean = false;
        try {
            const foundLanguageCode = await this.service.findOneLanguageCodeByCode(code);
            if (foundLanguageCode) {
                isTaken = true;

            } else {
                isTaken = false;
            }
            response.send(isTaken);
        } catch (error) {
            next(error);
        }


    }




}

export default LanguageCodeController;
