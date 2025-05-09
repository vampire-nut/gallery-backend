import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { GalleryController } from './gallery.controller';
import { GalleryService } from './gallery.service';
import { Images } from 'src/models/images.entity';
import { HashTag } from 'src/models/hashtag.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Images,
      HashTag,
    ]),
  ],
  controllers: [GalleryController],
  providers: [GalleryService, ConfigService],
})
export class GalleryModule {}
