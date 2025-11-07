import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario: string;

    @Column()
    clave: string

    @Column()
    rol: string;
}
