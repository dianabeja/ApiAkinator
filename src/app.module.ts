import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './character/character.module';
import { Character } from './character/entities/character.entity';
import { TypeOrmModule} from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '240402',
    database: 'akinator2' ,
    entities: [Character],
    synchronize: true
  }),
    CharacterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
