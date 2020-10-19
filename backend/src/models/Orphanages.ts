import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Image from './Images'

@Entity('orphanages')
export default class Orphanages{
  @PrimaryGeneratedColumn('increment')
  id: Number;
  
  @Column()
  name: string;
  
  @Column()
  latitude:Number;
  
  @Column()
  longitude:Number;
  
  @Column()
  about: string;
  
  @Column()
  instructions: string;
  
  @Column()
  opening_hours: string;
  
  @Column()
  open_on_weekends:boolean;

  @OneToMany(() => Image, image=> image.orphanage,{
    cascade:['insert', 'update']
  })
  @JoinColumn({name:'orpanhages_id'})
  images:Image[]
}