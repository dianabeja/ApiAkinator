% Hechos de personajes y caracteristiacas

personaje(spiderman, [humano, hombre, heroe, aracnido, trepamuros]).
personaje(ironman, [humano, hombre, heroe, genio_inventor, millonario]).
personaje(capita_america, [humano, hombre, heroe, patriota, super_soldado]).
personaje(daredevil, [humano, hombre, heroe, ciego, artista_marcial]).
personaje(black_widow, [humano, mujer, heroe, espia, artista_marcial]).
personaje(sue_storm, [humano, mujer, heroe, invisible, fuerte]).
personaje(silk, [humano, mujer, heroe, tejedora, trepamuros]).
personaje(she_hulk, [humano, mujer, heroe, verde, super_fuerte]).
personaje(scarlet_witch, [humano, mujer, heroe, hechicera, fuerte]).
personaje(jean_grey, [mutante, mujer, heroe, telepata, dark_fenix]).
personaje(punisher, [humano, hombre, antiheroe, vengativo, artista_marcial]).
personaje(deadpool, [mutante, hombre, antiheroe, mercenario, gracioso]).
personaje(venom, [alien, hombre, antiheroe, aracnido, simbionte]).
personaje(wolverine, [mutante, hombre, antiheroe, salvaje, inmortal]).
personaje(x_23, [mutante, mujer, antiheroe, experta_rastreadora, clon]).
personaje(thanos, [alien, hombre, villano, titan, loco]).
personaje(magneto, [mutante, hombre, villano, defensor_de_mutantes, poderoso]).
personaje(hela, [alien, mujer, villano, diosa_de_la_muerte, super_fuerte]).
personaje(la_encantadora, [alien, mujer, villano, hechicera, manipuladora]).
personaje(deathbird, [alien, mujer, villano, princesa, conquistadora]).

% Regla para verificar si un personaje cumple con ciertas características
cumple_caracteristicas(Personaje, Caracteristicas) :-
    personaje(Personaje, ListaCaracteristicas),
    forall(member(Caracteristica, Caracteristicas), member(Caracteristica, ListaCaracteristicas)).

% Regla para obtener los personajes que cumplen con todas las características dadas
obtener_personajes(Caracteristicas, Personajes) :-
    findall(Personaje, cumple_caracteristicas(Personaje, Caracteristicas), Personajes).
