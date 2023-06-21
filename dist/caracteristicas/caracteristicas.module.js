"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaracteristicasModule = void 0;
const common_1 = require("@nestjs/common");
const caracteristicas_service_1 = require("./caracteristicas.service");
const caracteristicas_controller_1 = require("./caracteristicas.controller");
const typeorm_1 = require("@nestjs/typeorm");
const caracteristica_entity_1 = require("./entities/caracteristica.entity");
let CaracteristicasModule = class CaracteristicasModule {
};
CaracteristicasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([caracteristica_entity_1.Caracteristica])],
        controllers: [caracteristicas_controller_1.CaracteristicasController],
        providers: [caracteristicas_service_1.CaracteristicasService],
        exports: [caracteristicas_service_1.CaracteristicasService]
    })
], CaracteristicasModule);
exports.CaracteristicasModule = CaracteristicasModule;
//# sourceMappingURL=caracteristicas.module.js.map