import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({
  name: "USER_INFO",
  database: "postgres",
  schema: "public",
  orderBy: {
    id: "ASC",
  },
})
export class UserInfo extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
