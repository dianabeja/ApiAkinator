import { Controller, Get } from '@nestjs/common';
import { PrologService } from './prolog.service';

@Controller()
export class PrologController {
  constructor(private readonly prologService: PrologService) {}

  
  @Get('consulta/')
  async consultarPadre() {
    const query = "obtener_personajes([humano],Personajes)";
    const result = await this.prologService.consultarProlog(query);
    return result;
  }

  @Get('/consulta2/')
  async consulta(){
    return await this.prologService.consultarProlog1();
  }
}