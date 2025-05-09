import { UUIDV4 } from 'sequelize';
import {
  AllowNull,
  Column,
  CreatedAt,
  DataType,
  Default,
  DeletedAt,
  ForeignKey,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
  BelongsTo,
  HasOne,
} from 'sequelize-typescript';
import { Images } from './images.entity';

@Table({ tableName: 'hash_tag', timestamps: true, paranoid: true })
export class HashTag extends Model {
  @PrimaryKey
  @IsUUID('all')
  @Default(UUIDV4)
  @AllowNull(false)
  @Column({ field: 'tag_id', type: DataType.INTEGER })
  tag_id: number;

  @ForeignKey(() => Images)
  @Column({ field: 'image_id', type: DataType.INTEGER })
  image_id: number;

  @Column({ field: 'tag', type: DataType.STRING(255) })
  tag: string;

  @CreatedAt
  @Column
  create_date: Date;

  @UpdatedAt
  @Column
  modify_date: Date;

  @DeletedAt
  @Column
  delete_date: Date;

  @Column({ field: 'create_by', type: DataType.STRING(50) })
  create_by: string | null;

  @Column({ field: 'modify_by', type: DataType.STRING(50) })
  modify_by: string | null;

  @Column({ field: 'delete_by', type: DataType.STRING(50) })
  delete_by: string | null;

  @Default(false)
  @Column({ field: 'is_delete', type: DataType.BOOLEAN })
  is_delete: boolean;

  @BelongsTo(() => Images)
  images: Images;
}
