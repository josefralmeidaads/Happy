import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Images';

@Entity('orphanages')
export default class Orphanage {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column('decimal')
  latitude: number;

  @Column('decimal')
  longitude: number;

  @Column('text')
  about: string;

  @Column('text')
  instructions: string;

  @Column()
  opening_hours: string;

  @Column('boolean')
  open_on_weekends: boolean;

  @OneToMany(() => Image, image => image.orphanage, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'orphanages_id'})
  images: Image[];
}