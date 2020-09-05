import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Order } from "./Order";
import { Employee } from "./Employee";
import { Payment } from "./Payment";

@Index("salesRepEmployeeNumber", ["salesRepEmployeeNumber"], {})
@Entity("customers", { schema: "classicmodels" })
export class Customer {
  
  @PrimaryGeneratedColumn({ name: "customerNumber" })
  customerNumber!: number;

  @Column("varchar", { name: "customerName", length: 50 })
  customerName!: string;

  @Column("varchar", { name: "contactLastName", length: 50 })
  contactLastName!: string;

  @Column("varchar", { name: "contactFirstName", length: 50 })
  contactFirstName!: string;

  @Column("varchar", { name: "phone", length: 50 })
  phone!: string;

  @Column("varchar", { name: "addressLine1", length: 50 })
  addressLine1!: string;

  @Column("varchar", { name: "addressLine2", nullable: true, length: 50 })
  addressLine2?: string;

  @Column("varchar", { name: "city", length: 50 })
  city!: string;

  @Column("varchar", { name: "state", nullable: true, length: 50 })
  state?: string;

  @Column("varchar", { name: "postalCode", nullable: true, length: 15 })
  postalCode?: string;

  @Column("varchar", { name: "country", length: 50 })
  country!: string;

  @Column("int", { name: "salesRepEmployeeNumber", nullable: true })
  salesRepEmployeeNumber?: number;

  @Column("decimal", {
    name: "creditLimit",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  creditLimit?: number;

  @OneToMany(() => Order, (order) => order.customerNumber)
  orders?: Order[];

  @ManyToOne(() => Employee, (employee) => employee.customers, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "salesRepEmployeeNumber", referencedColumnName: "employeeNumber" },
  ])
  salesRepEmployee?: Employee;

  @OneToMany(() => Payment, (payment) => payment.customerNumber)
  payments?: Payment[];
}
