import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Product } from "./Product";

@Entity("productlines", { schema: "classicmodels" })
export class Productline {

  @PrimaryColumn("varchar", { primary: true, name: "productLine", length: 50 })
  productLine!: string;

  @Column("varchar", { name: "textDescription", nullable: true, length: 4000 })
  textDescription?: string;

  @Column("mediumtext", { name: "htmlDescription", nullable: true })
  htmlDescription?: string;

  @Column("mediumblob", { name: "image", nullable: true })
  image?: Buffer;

  @OneToMany(() => Product, (product) => product.productLine)
  product!: Product[];
}
