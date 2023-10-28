import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pet } from './pet.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @OneToMany(() => Pet, (pet) => pet.owner)
  pets: Pet[];
}
