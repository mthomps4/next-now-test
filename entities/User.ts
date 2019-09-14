import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { v4 } from 'uuid';

export const ALLOWED_ROLES = {
  VIEWER: 'VIEWER',
  EDITOR: 'EDITOR',
  SPEAKER: 'SPEAKER',
  ADMIN: 'ADMIN'
};

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ type: 'varchar', nullable: true })
  public firstName!: string | null;

  @Column({ type: 'varchar', nullable: true })
  public lastName!: string | null;

  @Index({ unique: true })
  @Column()
  public email!: string;

  @Column({ type: 'varchar', nullable: true })
  public phone!: string | null;

  @Column({
    type: 'enum',
    enum: Object.values(ALLOWED_ROLES),
    default: ALLOWED_ROLES.SPEAKER
  })
  public role!: string;

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  public updatedAt!: Date;

  @BeforeInsert()
  addId() {
    this.id = v4();
  }
  // async hashPassword() {
  //   this.password = await bcrypt.hash(this.password, 10);
  // }
  // await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
}
