import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";

@Index("productCode", ["productCode"], {})
@Entity("orderdetails", { schema: "classicmodels" })
export class Orderdetail {
  
  @Column("int", { primary: true, name: "orderNumber" })
  orderNumber!: number;

  @Column("varchar", { primary: true, name: "productCode", length: 15 })
  productCode!: string;

  @Column("int", { name: "quantityOrdered" })
  quantityOrdered!: number;

  @Column("decimal", { name: "priceEach", precision: 10, scale: 2 })
  priceEach!: number;

  @Column("smallint", { name: "orderLineNumber" })
  orderLineNumber!: number;

  @ManyToOne(() => Order, (order) => order.orderDetails, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "orderNumber", referencedColumnName: "orderNumber" }])
  order!: Order;

  @ManyToOne(() => Product, (product) => product.orderdetails, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "productCode", referencedColumnName: "productCode" }])
  product!: Product;
}
