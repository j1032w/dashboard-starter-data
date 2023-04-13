import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongoModule } from 'nest-mongodb';
import { HeaderResolver } from 'nestjs-i18n';
import { I18nModule } from 'nestjs-i18n/dist/i18n.module';
import * as path from 'path';
import appConfig from './config/app.config';
import { DasRealtorModule } from './das/realtor/dasRealtorModule';
import { HomeModule } from './home/home.module';

const mongoUri = process.env.MONGO_URI;
const mongoDbName = process.env.MONGO_DB_NAME;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        // databaseConfig,
        // authConfig,
        appConfig,
        // mailConfig,
        // fileConfig,
        // facebookConfig,
        // googleConfig,
        // twitterConfig,
        // appleConfig,
      ],
      envFilePath: ['.env'],
    }),
    // TypeOrmModule.forRootAsync({
    //   useClass: TypeOrmConfigService,
    //   dataSourceFactory: async (options) => {
    //     const dataSource = await new DataSource(options).initialize();
    //     return dataSource;
    //   },
    // }),
    // MailerModule.forRootAsync({
    //   useClass: MailConfigService,
    // }),
    I18nModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        fallbackLanguage: configService.get('app.fallbackLanguage'),
        loaderOptions: { path: path.join(__dirname, '/i18n/'), watch: true },
      }),
      resolvers: [
        {
          use: HeaderResolver,
          useFactory: (configService: ConfigService) => {
            return [configService.get('app.headerLanguage')];
          },
          inject: [ConfigService],
        },
      ],
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    // UsersModule,
    // FilesModule,
    // AuthModule,
    // AuthFacebookModule,
    // AuthGoogleModule,
    // AuthTwitterModule,
    // AuthAppleModule,
    // ForgotModule,
    // MailModule,

    MongoModule.forRoot(mongoUri, mongoDbName),

    DasRealtorModule,
    HomeModule,
  ],
})
export class AppModule {}
