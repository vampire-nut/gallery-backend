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
    HasOne
} from 'sequelize-typescript';
import { HashTag } from './hashtag.entity';

@Table({ tableName: 'images', timestamps: true, paranoid: true })
export class Images extends Model {
    @PrimaryKey
    @IsUUID('all')
    @Default(UUIDV4)
    @AllowNull(false)
    @Column({ field: 'image_id', type: DataType.INTEGER })
    image_id: number;

    @Column({ field: 'title', type: DataType.STRING(200) })
    title: string;

    @Column({ field: 'image', type: DataType.TEXT })
    image: string;

    @Column({ field: "rows", type: DataType.TINYINT })
    rows: number;

    @Column({ field: "cols", type: DataType.TINYINT })
    cols: number;

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

    @HasMany(() => HashTag)
    hashtag: HashTag;
}










