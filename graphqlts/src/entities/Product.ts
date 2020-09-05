import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { Productline } from "./Productline";
import { Orderdetail } from "./Orderdetail";

@Index("productLine", ["productLine"], {})
@Entity("products", { schema: "classicmodels" })
export class Product {

  @PrimaryColumn("varchar", { primary: true, name: "productCode", length: 15 })
  productCode!: string;

  @Column("varchar", { name: "productName", length: 70 })
  productName!: string;

  @Column("varchar", { name: "productLine", length: 50 })
  productLineId!: string;

  @Column("varchar", { name: "productScale", length: 10 })
  productScale!: string;

  @Column("varchar", { name: "productVendor", length: 50 })
  productVendor!: string;

  @Column("text", { name: "productDescription" })
  productDescription!: string;

  @Column("smallint", { name: "quantityInStock" })
  quantityInStock!: number;

  @Column("decimal", { name: "buyPrice", precision: 10, scale: 2 })
  buyPrice!: number;

  @Column("decimal", { name: "MSRP", precision: 10, scale: 2 })
  msrp!: number;

  @ManyToOne(() => Productline, (productline) => productline.product, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "productLine", referencedColumnName: "productLine" }])
  productLine!: Productline;

  @OneToMany(() => Orderdetail, (orderdetail) => orderdetail.productCode)
  orderdetails?: Orderdetail[];
}
