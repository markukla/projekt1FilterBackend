import HttpException from "./HttpException";


class ProductTypeAlreadyExistsException extends HttpException {
    constructor() {
        super(400,"ProductType which you are trying to add already exist in database");

    }
}

export default ProductTypeAlreadyExistsException;
