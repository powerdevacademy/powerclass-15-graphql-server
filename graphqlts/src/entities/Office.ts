import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Employee } from "./Employee";

@Entity("offices", { schema: "classicmodels" })
export class Office {

  @PrimaryColumn("varchar", { name: "officeCode", length: 10 })
  officeCode!: string;

  @Column("varchar", { name: "city", length: 50 })
  city!: string;

  @Column("varchar", { name: "phone", length: 50 })
  phone!: string;

  @Column("varchar", { name: "addressLine1", length: 50 })
  addressLine1!: string;

  @Column("varchar", { name: "addressLine2", nullable: true, length: 50 })
  addressLine2?: string;

  @Column("varchar", { name: "state", nullable: true, length: 50 })
  state?: string;

  @Column("varchar", { name: "country", length: 50 })
  country!: string;

  @Column("varchar", { name: "postalCode", length: 15 })
  postalCode!: string;

  @Column("varchar", { name: "territory", length: 10 })
  territory!: string;

  @OneToMany(() => Employee, (employee) => employee.officeCode)
  employees?: Employee[];
}
