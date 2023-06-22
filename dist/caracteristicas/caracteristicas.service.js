"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaracteristicasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const caracteristica_entity_1 = require("./entities/caracteristica.entity");
let CaracteristicasService = class CaracteristicasService {
    constructor(caracteristicasRepository) {
        this.caracteristicasRepository = caracteristicasRepository;
    }
    create(createCaracteristicaDto) {
        return this.caracteristicasRepository.save(createCaracteristicaDto);
    }
    findAll() {
        return this.caracteristicasRepository.find();
    }
    async findOne(nombre) {
        const resultado = await this.caracteristicasRepository.findOne({
            where: { nombre_personaje: nombre },
        });
        return resultado;
    }
    remove(id) {
        return `This action removes a #${id} caracteristica`;
    }
    async randomCararacteristica() {
        const obtenerPersonajes = await this.caracteristicasRepository.find();
        const personajesCaracteristicas = obtenerPersonajes.map((personajes) => personajes.caracteristicas_personaje);
        const arrayCaracteristicas = personajesCaracteristicas.reduce((objeto, elemento) => {
            const caracteristica = elemento.split(',');
            return { caracteristica: objeto.caracteristica.concat(caracteristica) };
        }, { caracteristica: [] });
        const filtrarCaracteristicas = arrayCaracteristicas.caracteristica.filter((valor, indice) => {
            return arrayCaracteristicas.caracteristica.indexOf(valor) === indice;
        });
        const numeroRandom = Math.floor(Math.random() * filtrarCaracteristicas.length);
        const caracteristicaRandom = filtrarCaracteristicas[numeroRandom];
        return caracteristicaRandom;
    }
    async randomPersonajes(personaje, quitar) {
        const a = personaje.split(',');
        let obtenerPersonajes = [];
        const b = quitar.split(',');
        for (let i = 0; i < a.length; i++) {
            let personajeEncontrado = await this.caracteristicasRepository.findOne({
                where: { nombre_personaje: a[i] },
            });
            obtenerPersonajes.push(personajeEncontrado);
        }
        const personajesCaracteristicas = obtenerPersonajes.map((personajes) => personajes.caracteristicas_personaje);
        const arrayCaracteristicas = personajesCaracteristicas.reduce((objeto, elemento) => {
            const caracteristica = elemento.split(',');
            return { caracteristica: objeto.caracteristica.concat(caracteristica) };
        }, { caracteristica: [] });
        const filtrarCaracteristicas = arrayCaracteristicas.caracteristica.filter((valor, indice) => {
            return arrayCaracteristicas.caracteristica.indexOf(valor) === indice;
        });
        const caracteristicasFiltradas = filtrarCaracteristicas.filter((valor) => {
            return !b.includes(valor);
        });
        const numeroRandom = Math.floor(Math.random() * caracteristicasFiltradas.length);
        const caracteristicaRandom = caracteristicasFiltradas[numeroRandom];
        return caracteristicaRandom;
    }
};
CaracteristicasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(caracteristica_entity_1.Caracteristica)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CaracteristicasService);
exports.CaracteristicasService = CaracteristicasService;
//# sourceMappingURL=caracteristicas.service.js.map