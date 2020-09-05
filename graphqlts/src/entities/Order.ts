import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customer } from "./Customer";
import { Orderdetail } from "./Orderdetail";

@Index("customerNumber", ["customerNumber"], {})
@Entity("orders", { schema: "classicmodels" })
export class Order {
  
  @PrimaryGeneratedColumn({ name: "orderNumber" })
  orderNumber!: number;

  @Column("date", { name: "orderDate" })
  orderDate!: string;

  @Column("date", { name: "requiredDate" })
  requiredDate!: string;

  @Column("date", { name: "shippedDate", nullable: true })
  shippedDate?: string;

  @Column("varchar", { name: "status", length: 15 })
  status!: string;

  @Column("text", { name: "comments", nullable: true })
  comments?: string;

  @Column("int", { name: "customerNumber" })
  customerNumber!: number;

  @ManyToOne(() => Customer, (customer) => customer.orders, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "customerNumber", referencedColumnName: "customerNumber" },
  ])
  customer!: Customer;

  @OneToMany(() => Orderdetail, (orderdetail) => orderdetail.orderNumber)
  orderDetails?: Orderdetail[];
}
