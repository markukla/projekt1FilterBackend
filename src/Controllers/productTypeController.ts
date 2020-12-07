import * as express from 'express';

import Controller from 'interfaces/controller.interface';

import CreateProductTypeDto from "../Models/Products/createProductType.dto";
import ProductTypeService from "../RepositoryServices/productTypeRepositoryService";
import ProductType from "../Models/Products/productType.entity";
import ProductTypeNotFoundException from "../Exceptions/ProductTypeNotFoundException";
import validationMiddleware from "../middleware/validation.middleware";


class ProductTypeController implements Controller {
    public path = '/productTypes';
    public router = express.Router();
    public service: ProductTypeService = new ProductTypeService();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, this.getAllProductTypes);
        this.router.get(`${this.path}/:id`, this.getOneProductTypeById);
        this.router.patch(`${this.path}/:id`, validationMiddleware(CreateProductTypeDto, true), this.updateProductTypeById);
        this.router.delete(`${this.path}/:id`, this.deleteOneProductTypeById);
        this.router.post(this.path, validationMiddleware(CreateProductTypeDto), this.addOneProductType);
        this.router.get(`${this.path}/names/:name`, this.isNameTaken);
        this.router.get(`${this.path}/:id/names/:name`, this.isNameTakenForUpdate);
        this.router.get(`${this.path}/codes/:code`, this.isCodeTaken);
        this.router.get(`${this.path}/:id/codes/:code`, this.isCodeTakenForUpdate);
    }

    private isNameTaken = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const id: string = request.params.id;
        const name: string= request.params.name;
        try {
            const foundProductTop = await this.service.fndOneProductTypeByName(name);
            if(foundProductTop) {
                response.send(true);
            }
            else {
                response.send(false);
            }



        } catch (error) {
            next(error);
        }


    }
    private isCodeTaken = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const id: string = request.params.id;
        const code: string= request.params.code;
        try {
            const foundProductTop = await this.service.findOneProductTypeByCode(code);
            if(foundProductTop) {
                response.send(true);
            }
            else {
                response.send(false);
            }



        } catch (error) {
            next(error);
        }


    }

    private isNameTakenForUpdate = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const id: string = request.params.id;
        const name: string= request.params.name;
        try {
            const foundProductTop = await this.service.fndOneProductTypeByName(name);
            if(foundProductTop&&foundProductTop.id!==Number(id)) {
                response.send(true);
            }
            else {
                response.send(false);
            }



        } catch (error) {
            next(error);
        }


    }
    private isCodeTakenForUpdate = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const id: string = request.params.id;
        const code: string= request.params.code;
        try {
            const foundProductTop = await this.service.findOneProductTypeByCode(code);
            if(foundProductTop&&foundProductTop.id!==Number(id)) {
                response.send(true);
            }
            else {
                response.send(false);
            }

        } catch (error) {
            next(error);
        }
    }


    private addOneProductType = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const productTypeData: CreateProductTypeDto = request.body;
        try {
            const productType: ProductType = await this.service.addOneProductType(productTypeData);

            response.send(productType);
        } catch (error) {
            next(error);
        }
    }


    private updateProductTypeById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const productData: CreateProductTypeDto = request.body;
        const id: string = request.params.id;
        try {
            const updatedProductType = await this.service.updateProductTypeById(id, productData);
            if (updatedProductType) {
                response.send({
                    message: "Product Type updated",
                    updatedProductType: updatedProductType
                });
            }
            else {
                throw new ProductTypeNotFoundException(id);
            }


        } catch (error) {
            next(error);
        }

    }

    private getAllProductTypes = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            const productTypes: ProductType[] = await this.service.findAllProductsTypes();


            response.send(productTypes);


        } catch (error) {
            next(error);
        }


    }

    private getOneProductTypeById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const id: string = request.params.id;
        try {
            const foundProductType = await this.service.findOneProductTypeById(id);
            if (foundProductType) {
                response.send(foundProductType)
            } else {
                next(new ProductTypeNotFoundException(id));
            }
        } catch (error) {
            next(error);
        }


    }
    private deleteOneProductTypeById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const id: string = request.params.id;
        try {
            const deleTedResponse = await this.service.deleteProductTypeById(id);
            if (deleTedResponse.affected === 1) {
                response.send({
                    status: 200,
                    message: `Product type with id= ${id} has beeen removed`
                })
            } else {
                next(new ProductTypeNotFoundException(id));
            }
        } catch (error) {
            next(error);
        }

    }


}

export default ProductTypeController;
