import { Injectable } from '@nestjs/common';
import * as pl from 'tau-prolog';
import * as fs from 'fs';

@Injectable()
export class PrologService {
  consultarProlog(query) {
    try {
      const session = pl.create();
      const filePath = './ejemplo.pl';

      // Consulta el archivo Prolog
      session.consult(filePath, {
        success: () => {
          // Archivo Prolog cargado correctamente
        },
        error: (err) => {
          console.error('Error al cargar el archivo Prolog:', err);
        },
      });

      const result = session.query(query);
      console.log('result: '+result);

      const callback = function (answer) {
        console.log("formato: ", session.format_answer(answer));
        console.log('answer: '+ answer)
      };

      const success = session.answer(callback);

      // La sesión se destruirá automáticamente al cerrar el alcance de la función
      console.log(success);
      return success;
    } catch (error) {
      console.error('Error al ejecutar la consulta Prolog:', error);
      return false;
    }
  }

  async consultarProlog1() {
    const goal='obtener_personajes([humano],Personajes';
    const session = pl.create();
    const filePath = './ejemplo.pl';
    await session.consult(filePath);
    await session.query(goal)
    let answer= session.answers()
    console.log(session.format_answer(answer));
    }
}