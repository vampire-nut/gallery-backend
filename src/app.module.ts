import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from "@nestjs/axios";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Images } from './models/images.entity';
import { HashTag } from './models/hashtag.entity';
import { GalleryModule } from './gallery-images/gallery.module';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      envFilePath: ".env",
    }),
    SequelizeModule.forRoot({
      dialect: "mysql",
      host: process.env.DB_HOST,
      port: 3306,
      timezone: "+07:00",
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [
        Images,
        HashTag,
      ],
      autoLoadModels: true,
      synchronize: true,
      dialectOptions: {
        // allowPublicKeyRetrieval: true,
        ssl: false,
      },
    }),
    GalleryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
