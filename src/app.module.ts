import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './character/character.module';
import { Personajes } from './character/entities/character.entity';
import { TypeOrmModule} from '@nestjs/typeorm'
import { CaracteristicasModule } from './caracteristicas/caracteristicas.module';
import { PrologService } from './prolog/prolog.service';
import { PrologController } from './prolog/prolog.controller';
import { Caracteristica } from './caracteristicas/entities/caracteristica.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '240402',
    database: 'guessthis' ,
    entities: [Personajes, Caracteristica],
    synchronize: false
  }),
    CharacterModule,
    CaracteristicasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
