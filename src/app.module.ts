import { Module } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleModule } from 'modules/role/role.modules';
import { UserModule } from 'modules/user/user.module';
import envConfig from './config/env';
import { getDatabaseConfigConnection } from './config/env/connection';

const databaseOptions = {
  ...getDatabaseConfigConnection(),
};
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(databaseOptions),
    UserModule,
    RoleModule,
  ],
})
export class AppModule {}
