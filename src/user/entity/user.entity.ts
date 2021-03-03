import { ApiResponseProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { BaseEntity } from 'src/common/entities/base.entity'
import { Column, Entity } from 'typeorm'

/**
 * User Entity
 */
@Entity('users', {
  orderBy: {
    createdAt: 'DESC',
  },
})
export class User extends BaseEntity {
  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  email: string

  @Column()
  password: string

  @Expose()
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  // add more columns here
}
