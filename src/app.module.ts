import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { Pet } from './entities/pet.entity';
import { User } from './entities/user.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'pet-owner',
      entities: [User, Pet],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
