// import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

// @Entity()
// export class Photo {
//     @PrimaryGeneratedColumn ---> auto increment
//     or
//     @PrimaryColumn()
//     id: number

//         @Column({
//    length: 100,   ---> VARCHAR(length: 100)
// })
//     name: string

//     @Column("text")
//     description: string

//     @Column() ---> by default VARCHAR(255)
//     filename: string

//      @Column("double")
//     views: number

//     @Column()
//     isPublished: boolean
// }