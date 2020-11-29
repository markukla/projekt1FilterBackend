import {IsBoolean, IsEmail, IsString} from "class-validator";

class UpdateBussinessPartnerWithoutPasswordAndActive  {
    @IsString()
    fulName: string;
    @IsEmail()
    email: string;
    @IsString()
    code: string;
    @IsString()
    businesPartnerCompanyName: string;


}
export default UpdateBussinessPartnerWithoutPasswordAndActive;
