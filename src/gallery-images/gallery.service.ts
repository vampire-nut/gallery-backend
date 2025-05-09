import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ParamPaginate } from 'src/center/param-paginate.interface';
import { HashTag } from 'src/models/hashtag.entity';
import { Images } from 'src/models/images.entity';

@Injectable()
export class GalleryService {
  constructor(@InjectModel(Images) private imagesModel: typeof Images) {}


  async findAll({page, limit}: ParamPaginate): Promise<any> {
    try {

      const offset = page * limit - limit;
      const findAll = await this.imagesModel.findAll({
        attributes: ['image_id', 'title', 'image', 'rows', 'cols'],
        include: [
          {
            model: HashTag,
            attributes: [
              "tag_id",
              "tag",
            ],
            required: true,
          },
        ],
        where: {
          is_delete: false,
        },
        limit,
        offset,
      });
   
      const data = await Promise.all(
        findAll.map(async (d) => {
          return {
            ...d.toJSON(),
          };
        })
      );

      return {
        success: true,
        data,
        code: 200,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        error: error,
        code: 500,
      };
    }
  }
}
