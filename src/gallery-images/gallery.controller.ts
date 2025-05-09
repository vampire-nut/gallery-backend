import {
  Body,
  Controller,
  Post
} from '@nestjs/common';
import { ParamPaginate } from 'src/center/param-paginate.interface';
import { GalleryService } from './gallery.service';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Post('all')
  findAll(@Body() body: ParamPaginate) {
    return this.galleryService.findAll(body);
  }

}
