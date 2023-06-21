"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrologService = void 0;
const common_1 = require("@nestjs/common");
const pl = require("tau-prolog");
let PrologService = class PrologService {
    consultarPersonajes() {
        return new Promise((resolve, reject) => {
            const session = pl.create();
            const filePath = './ejemplo.pl';
            session.consult(filePath, {
                success: () => {
                    const query = `obtener_personajes([humano], Personajes).`;
                    const results = [];
                    session.query(query);
                    const callback = (answer) => {
                        if (answer === pl.type.SUCCESS) {
                            const personajes = session.answers.map((ans) => ans.links.Personajes.id.toString());
                            results.push(...personajes);
                            session.answer(callback);
                        }
                        else if (answer === pl.type.FAIL) {
                            resolve(results);
                        }
                        else if (answer === pl.type.ERROR) {
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
};
PrologService = __decorate([
    (0, common_1.Injectable)()
], PrologService);
exports.PrologService = PrologService;
//# sourceMappingURL=prolog.service.js.map