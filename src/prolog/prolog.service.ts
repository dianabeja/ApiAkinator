import { Injectable } from '@nestjs/common';
import * as pl from 'tau-prolog';
import * as fs from 'fs';

@Injectable()
export class PrologService {
  consultarPersonajes(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      const session = pl.create();
      const filePath = './ejemplo.pl';

      session.consult(filePath, {
        success: () => {
          const query = `obtener_personajes([humano], Personajes).`;

          const results: string[] = [];
          session.query(query);

          const callback = (answer) => {
            if (answer === pl.type.SUCCESS) {
              const personajes = session.answers.map((ans) =>
                ans.links.Personajes.id.toString()
              );
              results.push(...personajes);
              session.answer(callback);
            } else if (answer === pl.type.FAIL) {
              resolve(results);
            } else if (answer === pl.type.ERROR) {
              reject(new Error(session.getError()));
            }
          };

          session.answer(callback);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }
}

