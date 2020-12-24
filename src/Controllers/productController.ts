import * as express from 'express';

import Controller from 'interfaces/controller.interface';

import validationMiddleware from "../middleware/validation.middleware";




import authMiddleware from "../middleware/auth.middleware";
import adminAuthorizationMiddleware from "../middleware/adminAuthorization.middleware";
import Material from "../Models/Materials/material.entity";
import CreateMaterialDto from "../Models/Materials/material.dto";
import MaterialNotFoundExceptionn from "../Exceptions/MaterialNotFoundException";
import Product from "../Models/Products/product.entity";
import ProductService from "../RepositoryServices/productRepositoryService";
import CreateProductDto from "../Models/Products/product.dto";
import ProductNotFoundExceptionn from "../Exceptions/ProductNotFoundException";
import * as multer from "multer";
import * as fs from "fs";
import {DrawingPaths} from "../Models/Products/drawingPaths";
import NoPngFileException from "../Exceptions/noPngFile";
const path = require('path');



class ProductController implements Controller{
    public path = '/products';
    public router = express.Router();
    public  service:ProductService=new ProductService();


    constructor() {
        this.initializeRoutes();
    }
    private handleError=(err:Error, res:express.Response) => {
        res
            .status(500)
            .contentType("text/plain")
            .end("Oops! Something went wrong!");
    };
    public upload = multer({
        dest: "../public/images"
        // you might also want to set some limits: https://github.com/expressjs/multer#limits

    });



    private initializeRoutes() {
        this.router.get(this.path, authMiddleware,adminAuthorizationMiddleware,this.getAllProducts);

        this.router.get(`${this.path}/:id`, this.getOneProductById);
        this.router.post(`${this.path}/:id`, this.updateProductById);//remeber to add authentication admin authorization middleware after tests
        this.router.delete(`${this.path}/:id`,authMiddleware,adminAuthorizationMiddleware, this.deleteOneProductById);
        this.router.post(this.path, this.addOneProduct);//remeber to add authentication admin authorization middleware after tests
        this.router.post(`/uploadDrawing`, this.upload.single("file"), this.uploadedDrawingToserwerCreaTeMiniatureAndReturnPaths);
        this.router.get(`/upload`, this.showUploadForm);
        this.router.post(`${this.path}/productInfo/getByTypeTopBottom`, this.getProductByProductTypeProductTopProductBottom)


    }

    private showUploadForm= async (req: express.Request, res: express.Response, next: express.NextFunction) => {

        res.render('../views/addProduct.ejs')

    }


    private addOneProduct = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const productData=req.body;
        console.log(productData);

        try {
            const product:Product = await this.service.addOneProduct(productData); // it is probably wrong path

            res.send({
                message:"new Product added:",
                product:product
            });
        } catch (error) {
            next(error);
        }
    }



    private updateProductById = async (request: express.Request, response: express.Response, next: express.NextFunction)=>{
        const productData:CreateProductDto=request.body;
        const id:string=request.params.id;

        try {
            const updatedProduct = await this.service.updateProductById(id, productData);
            if(updatedProduct){
                response.send(updatedProduct)}
            else {next(new ProductNotFoundExceptionn(id));

            }
        }
        catch (error) {
            next(error);
        }

    }

    private getAllProducts = async (request: express.Request, response: express.Response, next: express.NextFunction)=>
    {
        try{
            const products:Product[]=await this.service.findAllProducts();


            response.send(products);


        }
        catch (error) {
            next(error);
        }


    }

    private getOneProductById = async (request: express.Request, response: express.Response, next: express.NextFunction)=>{
        const id:string=request.params.id;
        try{
            const foundProduct:Product=await this.service.findOneProductById(id);
            if(foundProduct){

                response.send(foundProduct)
            }
            else {
                next(new ProductNotFoundExceptionn(id));
            }
        }
        catch (error) {
            next(error);
        }



    }
    private getProductByProductTypeProductTopProductBottom = async (request: express.Request, response: express.Response, next: express.NextFunction)=>{
        const createProductDto: CreateProductDto = request.body;
        try{
            const foundProduct:Product=await this.service.findOneProductByProductTypeProductTopTypeProductBottomTypeAndAppropriateCodes(createProductDto);
            if(foundProduct){

                response.send(foundProduct)
            }
            else {
                next(new ProductNotFoundExceptionn(null));
            }
        }
        catch (error) {
            next(error);
        }



    }

    private deleteOneProductById = async (request: express.Request, response: express.Response, next: express.NextFunction)=>{
        const id:string=request.params.id;
        try{
            const deleTedResponse=await this.service.deleteProductById(id);
            if(deleTedResponse.affected===1){
                response.send({
                    status:200,
                    message:`product with id= ${id} has beeen removed`
                });
            }
            else {
                next(new ProductNotFoundExceptionn(id));
            }
        }
        catch (error) {
            next(error);
        }

    }


    private uploadedDrawingToserwerCreaTeMiniatureAndReturnPaths= (req: express.Request, res: express.Response, next: express.NextFunction) => {
        // actually file is already uploaded by multer middleware we just check it path extension is correct and if not remove file by fs.unlink

        if(!req.file){
            res.send({
                   status:403,
                    message:"no drawign choosen"


            });

        }
        const tempPath :string= req.file.path;
        console.log(`tempPath= ${tempPath}`);


        const fileName:string=req.file.originalname;
        const date:Date=new Date();
        const time=date.getTime();

        const orginalDrawingPath:string = path.join(__dirname, `../public/images/`,`${time}${fileName}`);
        console.log(orginalDrawingPath);
        /* path starts from host*/
        const host = req.host;
        console.log(host);
        /* to make express static middleware work properly i need path to add to localhost:5000/drawingPathFromPublicDirecotry */
        const drawingPathFromPublicDirecotry =orginalDrawingPath.split('public')[1];
        console.log(`drawingPathToPublicDirecotry= ${drawingPathFromPublicDirecotry}`);



        if (path.extname(req.file.originalname).toLowerCase() === ".png") {
            fs.rename(tempPath, orginalDrawingPath, err => {
                if (err) {
                    //return this.handleError(err, res);
                }

            });
        } else {
            console.log("else before unlink execution");
            fs.unlink(tempPath, err => {
                //if (err) return this.handleError(err, res);

            });
           throw new NoPngFileException();
        }
        let miniaturePath =''; // need to be implemented
        const drawingPaths: DrawingPaths = {
            urlOfOrginalDrawing: drawingPathFromPublicDirecotry,
            urlOfThumbnailDrawing: miniaturePath
        };

        res.send(drawingPaths);

}


    }



export default ProductController;
