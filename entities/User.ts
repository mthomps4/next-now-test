import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export const ALLOWED_ROLES = {
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

  @Column()
  public password!: string;

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
}
