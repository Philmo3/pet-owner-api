import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  dateOfBirth: Date;

  @ManyToOne(() => User, (user) => user.pets)
  owner: User;
}
