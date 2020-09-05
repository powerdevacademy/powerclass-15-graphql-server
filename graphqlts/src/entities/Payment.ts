import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Customer } from "./Customer";

@Entity("payments", { schema: "classicmodels" })
export class Payment {

  @Column("int", { primary: true, name: "customerNumber" })
  customerNumber!: number;

  @Column("varchar", { primary: true, name: "checkNumber", length: 50 })
  checkNumber!: string;

  @Column("date", { name: "paymentDate" })
  paymentDate!: string;

  @Column("decimal", { name: "amount", precision: 10, scale: 2 })
  amount!: number;

  @ManyToOne(() => Customer, (customer) => customer.payments, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "customerNumber", referencedColumnName: "customerNumber" },
  ])
  customer!: Customer;
}
