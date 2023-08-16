/* eslint-disable prettier/prettier */

import { Column, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
import { Permission } from './permission.entity';

@Entity({
  name: 'roles',
})
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 20,
    comment: '角色名',
  })
  name: string;

  @ManyToMany(() => Permission)
  @JoinTable({
    name: 'role-permissions',
  })
  permissions: Permission[];
}
