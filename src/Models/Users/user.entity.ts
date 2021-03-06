import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import Role from "../Role/role.entity";
import {IsBoolean} from "class-validator";
import Order from "../Order/order.entity";
import OrderDetails from "../OrderDetail/orderDetails.entity";

@Entity("users")
class User {

    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    fulName: string;

    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    active: boolean;

    @Column({nullable:true})
    code?: string;
    @Column({nullable:true})
    businesPartnerCompanyName?: string;
    @Column({nullable: true})
    softDeleteDate?:Date;

@ManyToMany(()=>Role)  //here we reference to entity name, not table name
    @JoinTable()

    roles: Role[];

@OneToMany(()=>Order,(order:Order)=>order.businessPartner)  //one businessPartene:USer can be asigned to many orders
    ordersOfPartner?:Order[];


@OneToMany(()=>Order,(order:Order)=>order.creator)  // user can create many orders
orderCreatedByUser?:Order[];

}

export default User;
