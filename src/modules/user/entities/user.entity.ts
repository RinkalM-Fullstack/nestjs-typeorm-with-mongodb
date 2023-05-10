import * as mongoose from "mongoose";
import { Column, Entity, JoinColumn, ObjectId, ObjectIdColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'user' })
class User {
    @ObjectIdColumn()
    id: ObjectId;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    firstName: string;

    @Column({ unique: true })
    lastName: string;

    @Column({ unique: true })
    dob: mongoose.Date;

    @Column()
    password: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}

export default User;