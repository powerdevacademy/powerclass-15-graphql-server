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
import { Office } from "./Office";

@Index("reportsTo", ["reportsTo"], {})
@Index("officeCode", ["officeCode"], {})
@Entity("employees", { schema: "classicmodels" })
export class Employee {

  @PrimaryGeneratedColumn({ name: "customerNumber" })
  employeeNumber!: number;

  @Column("varchar", { name: "lastName", length: 50 })
  lastName!: string;

  @Column("varchar", { name: "firstName", length: 50 })
  firstName!: string;

  @Column("varchar", { name: "extension", length: 10 })
  extension!: string;

  @Column("varchar", { name: "email", length: 100 })
  email!: string;

  @Column("varchar", { name: "officeCode", length: 10 })
  officeCode!: string;

  @Column("int", { name: "reportsTo", nullable: true })
  reportsToId?: number;

  @Column("varchar", { name: "jobTitle", length: 50 })
  jobTitle!: string;

  @OneToMany(() => Customer, (customer) => customer.salesRepEmployeeNumber)
  customers?: Customer[];

  @ManyToOne(() => Employee, (employee) => employee.employees, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "reportsTo", referencedColumnName: "employeeNumber" }])
  reportsTo?: Employee;

  @OneToMany(() => Employee, (employee) => employee.reportsToId)
  employees?: Employee[];

  @ManyToOne(() => Office, (office) => office.employees, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "officeCode", referencedColumnName: "officeCode" }])
  office!: Office;
}
