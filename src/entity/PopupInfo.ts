import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
  name: "SYS_POPUP_INFO",
  database: "postgres",
  schema: "public",
  orderBy: {
    popup_uid: "ASC",
  },
})
export class PopupInfo {
  @PrimaryGeneratedColumn()
  popup_uid: number;

  @Column()
  subject: string;
  @Column()
  contents: string;
  @Column()
  date_start: string;
  @Column()
  date_end: string;
  @Column()
  link_target_div: string;
  @Column()
  size_width: string;
  @Column()
  size_height: number;
  @Column()
  position_width: number;
  @Column()
  position_height: number;
  @Column()
  zindex: number;
  @Column()
  del_yn: string;
  @Column()
  use_yn: string;
  @Column({ type: "timestamp" })
  insert_date: Date;
  @Column()
  insert_user: string;
  @Column({ type: "timestamp" })
  update_dateDate: Date;
  @Column()
  update_user: string;
  @Column()
  link_url: string;
  @Column()
  real_filename: string;
  @Column()
  sys_filename: string;
  @Column()
  file_path: string;
  @Column()
  is_first: string;
}
