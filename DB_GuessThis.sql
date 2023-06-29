CREATE DATABASE guessthis;
drop database guessthis;
USE guessthis;
show tables from guessthis;
select * from personajes;
select * from caracteristica;

CREATE TABLE personajes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre_personaje VARCHAR(30) NOT NULL,
  descripcion_personaje TEXT NOT NULL,
  url_personaje VARCHAR(255) NOT NULL
);

create table caracteristica (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_personaje VARCHAR(30) NOT NULL, 
    caracteristicas_personaje VARCHAR(255) NOT NULL
);

INSERT INTO personajes (nombre_personaje, descripcion_personaje, url_personaje)
Values ('spiderman', 'Spider-Man, también conocido como Peter Parker, es uno de los superhéroes más populares y emblemáticos de Marvel. Al ser mordido por una araña radiactiva, obtiene poderes aracnidos, como el Sentido Aracnido y trepar en las paredes. Siendo un defensor de la justicia, Spider-Man protege la ciudad de Nueva York de una amplia variedad de enemigos', 'https://cdn.discordapp.com/attachments/1121103010580410459/1121103670776451123/Spidey.webp');

INSERT INTO personajes (nombre_personaje, descripcion_personaje, url_personaje) 
Values ('ironman', 'Iron Man, cuyo nombre real es Tony Stark, es un personaje emblemático de Marvel. Es un genio, millonario, playboy y filántropo. Fue un industrial y fabricante de armas que sufre un grave accidente que lo deja con una lesión en el pecho y a punto de morir. Para sobrevivir, construye un traje de alta tecnología impulsado por un reactor Arc que le otorga una fuerza sobrehumana, vuelo y una amplia gama de armas. Tony decide utilizar su traje para convertirse en un superhéroe y combatir el mal como Iron Man.', 'https://cdn.discordapp.com/attachments/1121103010580410459/1121103895817617468/Iron_Man_Armor_Model_37_from_Fear_Itself_Vol_1_1_cover.webp');

INSERT INTO personajes (nombre_personaje, descripcion_personaje, url_personaje) 
Values ('capita_america', 'Capitán América, cuyo nombre real es Steve Rogers, es uno de los superhéroes más emblemáticos de Marvel. La historia de Capitán América se desarrolla durante la Segunda Guerra Mundial. Steve Rogers era un joven frágil y débil que deseaba servir a su país en la guerra. Se sometió a un experimento científico que lo transformó en un supersoldado, otorgándole fuerza, agilidad y resistencia sobrehumanas. Steve se convierte en el Capitán América, el símbolo viviente de la libertad y la justicia. El icónico escudo del Capitán América, hecho de vibranium, es su arma principal y símbolo reconocible.', 'https://cdn.discordapp.com/attachments/1121103010580410459/1121104068115447898/f5715750aba7454ab8c5a107a7c78590--marvel-vs-marvel-heroes.jpg');

INSERT INTO personajes (nombre_personaje, descripcion_personaje, url_personaje) 
Values ('daredevil', 'Daredevil, cuyo nombre real es Matt Murdock. La historia de Daredevil se desarrolla en el barrio neoyorquino de Hells Kitchen. Matt Murdock es un abogado ciego que, a pesar de su discapacidad, posee sentidos superhumanos debido a un accidente químico que le otorgó habilidades amplificadas. Sus sentidos mejorados incluyen una audición extraordinaria, un sentido del tacto desarrollado y una percepción espacial mejorada. Bajo la identidad de Daredevil, Matt Murdock combina sus habilidades legales y sus destrezas de combate para luchar contra el crimen en Hells Kitchen.', 'https://cdn.discordapp.com/attachments/1121103010580410459/1121104210222645288/Daredevil-Marvel-Comics-Murdock-handbook-Deluxe-cover.jpg');

INSERT INTO personajes (nombre_personaje, descripcion_personaje, url_personaje) 
Values ('black_widow', 'Black Widow, cuyo nombre real es Natasha Romanoff, es una superheroína de Marvel Comics. Natasha Romanoff es una exespía rusa que se convierte en una agente altamente entrenada y letal. Su dominio en artes marciales, su habilidad en el combate cuerpo a cuerpo y su destreza en el espionaje la convierten en una de las agentes más peligrosas del mundo. Black Widow ha trabajado en varias organizaciones, incluyendo la KGB y la S.H.I.E.L.D., y ha sido miembro destacado de los Avengers.', 'https://cdn.discordapp.com/attachments/1121103010580410459/1121105115760312400/Black_Widow2.webp');

INSERT INTO personajes (nombre_personaje, descripcion_personaje, url_personaje) 
Values ('sue_storm', 'Sue Storm, también conocida como la Mujer Invisible, es una superheroína de Marvel Comics. Sue Storm posee el poder de la invisibilidad y la capacidad de generar campos de fuerza energética, que puede utilizar tanto para la defensa como para crear proyecciones sólidas. Además, tiene la habilidad de volverse invisible a voluntad, lo que le permite sorprender a sus enemigos y realizar ataques estratégicos. Sue es conocida por su inteligencia y su papel como el "corazón" del equipo de los Cuatro Fantásticos. A lo largo de su historia, ha demostrado ser una estratega hábil y una figura materna y protectora para sus compañeros de equipo. Además de sus habilidades sobrehumanas, Sue Storm es una talentosa piloto y ha desarrollado su potencial como líder y científica.', 'https://discord.com/channels/1121102587937169451/1121103010580410459');

INSERT INTO personajes (nombre_personaje, descripcion_personaje, url_personaje) 
Values ('silk', 'Silk, cuyo nombre real es Cindy Moon, es una superheroína de Marvel Comics. Cindy Moon obtuvo sus poderes después de ser mordida por la misma araña radiactiva que le dio a Peter Parker sus habilidades como Spider-Man. Sin embargo, a diferencia de Peter, Cindy fue recluida y oculta durante muchos años debido a sus poderes. Eventualmente, ella se convirtió en la superheroína conocida como Silk. Silk posee habilidades similares a las de Spider-Man, como una fuerza y agilidad mejoradas, la capacidad de trepar paredes y un sentido arácnido. Sin embargo, también tiene algunas habilidades únicas, como su velocidad sobrehumana y la capacidad de producir hilos de seda orgánicos que utiliza para balancearse y atrapar a sus enemigos.', 'https://cdn.discordapp.com/attachments/1121103010580410459/1121105590828142724/Silk01_hr.webp');

INSERT INTO personajes (nombre_personaje, descripcion_personaje, url_personaje) 
Values ('she_hulk', 'She-Hulk, cuyo nombre real es Jennifer Walters, es una superheroína de Marvel Comics. Jennifer Walters es prima de Bruce Banner, también conocido como Hulk. La historia de She-Hulk se centra en Jennifer Walters, una abogada talentosa y valiente. Después de recibir una transfusión de sangre de emergencia de su primo Bruce, adquiere los poderes de Hulk, pero a diferencia de él, Jennifer mantiene su inteligencia y control emocional cuando se transforma en She-Hulk. She-Hulk posee una fuerza sobrehumana, resistencia y durabilidad, lo que la convierte en una formidable luchadora. A menudo rompe la cuarta pared y es consciente de que es un personaje de cómic, lo que le da un tono meta y divertido a sus historias.', 'https://cdn.discordapp.com/attachments/1121103010580410459/1121105733124100217/png-transparent-she-hulk-betty-ross-halkas-superhero-hulk-comics-avengers-fictional-character.png');

INSERT INTO personajes (nombre_personaje, descripcion_personaje, url_personaje) 
Values ('scarlet_witch', 'Scarlet Witch, cuyo nombre real es Wanda Maximoff, es una poderosa superheroína de Marvel Comics. Scarlet Witch es una mutante que posee el poder de alterar la realidad a nivel molecular y manipular las probabilidades. Sus habilidades se basan en la energía del caos, lo que le permite generar explosiones de energía, crear campos de fuerza y lanzar ataques místicos. Además de sus poderes, Scarlet Witch también es conocida por su conexión con su hermano gemelo, Pietro Maximoff, también conocido como Quicksilver. Juntos, han luchado del lado de los héroes y han enfrentado desafíos personales y familiares.', 'https://cdn.discordapp.com/attachments/1121103010580410459/1121113465306763535/Scarlet_Witch_Portrait_Art.webp');

INSERT INTO personajes (nombre_personaje, descripcion_personaje, url_personaje) 
Values ('jean_grey', 'Jean Grey, también conocida como Marvel Girl o Phoenix, es una poderosa mutante y superheroína de Marvel Comics. Jean Grey es conocida por su conexión con la Fuerza Fénix y su papel crucial en la historia de los X-Men. Jean Grey es una telepata y una poderosa telequinética. Sus habilidades psíquicas le permiten leer mentes, proyectar ilusiones y comunicarse telepáticamente. Además, puede mover objetos con la mente y generar campos de fuerza. A lo largo de su historia, Jean Grey ha sido miembro destacado de los X-Men. Sin embargo, su historia es especialmente conocida por su transformación en el ser cósmico conocido como Fénix. Jean adquiere el poder y la personalidad del Fénix, una entidad cósmica que posee un inmenso poder destructivo y regenerativo.', 'https://cdn.discordapp.com/attachments/1121103010580410459/1121113661491134464/JeanGreyPhoenix.png');

INSERT INTO personajes (nombre_personaje, descripcion_personaje, url_personaje) 
Values ('punisher', ' Después de presenciar el asesinato de su familia, Frank Castle se convierte en un justiciero que busca venganza contra los criminales y los responsables de la tragedia que arruinó su vida. A diferencia de muchos otros héroes de Marvel, el Punisher no posee superpoderes. En cambio, confía en su habilidad táctica, su destreza física y su arsenal de armas letales para enfrentarse a los delincuentes. Su determinación implacable y su falta de remordimientos le han ganado una reputación temible entre los criminales. Es conocido por su postura moral ambigua y su enfoque extremo hacia la justicia. Aunque su violencia extrema a menudo lo coloca en conflicto con otros héroes, su lealtad y dedicación a su misión han atraído a una base de fanáticos leales.', 'https://cdn.discordapp.com/attachments/1121103010580410459/1121114323239055410/0eb54df01cfaa38bfb8be0cea282386d.jpg') ;

INSERT INTO personajes (nombre_personaje, descripcion_personaje, url_personaje) 
Values ('deadpool', 'Deadpool, cuyo nombre real es Wade Wilson, es un personaje de Marvel Comics conocido por su irreverencia, humor y habilidades regenerativas. Wade Wilson es un mercenario desfigurado que posee un factor de curación acelerado similar al de Wolverine, lo que le permite regenerar tejidos y recuperarse de heridas casi instantáneamente. Sin embargo, a diferencia de otros personajes, Deadpool también es conocido por su capacidad para romper la cuarta pared y hablar directamente con el lector, lo que genera un tono cómico y metaficticio en sus historias. Aunque Deadpool es un antihéroe, a menudo se asocia con los X-Men y ha colaborado con otros personajes del Universo Marvel.', 'https://cdn.discordapp.com/attachments/1121103010580410459/1121115041270345862/Deadpool_Portrait_Art.webp');

INSERT INTO personajes (nombre_personaje, descripcion_personaje, url_personaje) 
Values ('venom', 'Venom, cuyo nombre real es un simbionte extraterrestre conocido como Venom, es un personaje de Marvel Comics. El simbionte Venom es una forma de vida alienígena que requiere un huésped para sobrevivir. Se fusiona con Eddie Brock, un periodista que siente rencor hacia Spider-Man y Peter Parker. Juntos, forman una entidad poderosa y peligrosa. Venom posee fuerza sobrehumana, agilidad y velocidad, además de la capacidad de adherirse a superficies y cambiar de forma. También cuenta con una habilidad única: la capacidad de generar telarañas orgánicas similares a las de Spider-Man. Aunque inicialmente era un villano de Spider-Man, Venom ha pasado a veces por una línea más gris, actuando como un antihéroe y protegiendo a los inocentes de amenazas aún mayores.', 'https://cdn.discordapp.com/attachments/1121103010580410459/1121119056553058364/Venom-PNG-Image-HD.png');

INSERT INTO personajes (nombre_personaje, descripcion_personaje, url_personaje) 
Values ('wolverine' ,'Wolverine es un mutante con habilidades regenerativas que le permiten curarse rápidamente de heridas y prolongar su longevidad. Además, cuenta con un esqueleto recubierto de adamantium, un metal indestructible, y garras retráctiles afiladas que pueden salir de sus nudillos. Con una personalidad ruda y un pasado misterioso, Wolverine se ha convertido en uno de los miembros más populares de los X-Men. Wolverine ha sido retratado como un antihéroe y un justiciero solitario en varias ocasiones. Su naturaleza violenta y su capacidad para entrar en frenesí de batalla lo convierten en una fuerza temible para sus oponentes. Sin embargo, también se ha mostrado como un personaje complejo con un código de honor y una profunda conexión con sus amigos y seres queridos.', 'https://cdn.discordapp.com/attachments/1121103010580410459/1121119245481283594/desktop-wallpaper-wolverine-png-transparent-wolverine-png-chibi-wolverine.jpg');

INSERT INTO personajes (nombre_personaje, descripcion_personaje, url_personaje) 
Values ('x-23', 'X-23, cuyo nombre real es Laura Kinney, es un personaje de Marvel Comics. X-23 fue creada como parte de un proyecto secreto llamado "X-23" en el que se intentaba recrear las habilidades y el esqueleto de adamantium de Wolverine. Al igual que Wolverine, X-23 posee un factor de curación acelerado, garras retráctiles de adamantium en sus manos y pies, y habilidades de combate altamente entrenadas. Aunque inicialmente fue criada y entrenada para ser una asesina, X-23 logra escapar y encuentra su camino hacia la redención y la lucha por la justicia. Ella se une a los X-Men y se convierte en una heroína en su propio derecho, adoptando el nombre de X-23 en honor a su origen.', 'https://cdn.discordapp.com/attachments/1121103010580410459/1121119617876775042/41-411912_laura-kinney-x-23-23-marvel-vs-capcom.jpg');

INSERT INTO personajes (nombre_personaje, descripcion_personaje, url_personaje) 
Values ('thanos', 'Thanos, conocido también como el "Titán Loco", es un personaje icónico de Marvel Comics. Thanos es reconocido como uno de los villanos más formidables y peligrosos del Universo Marvel. Thanos es un ser de origen alienígena y proviene del planeta Titán. Es conocido por su apariencia distintiva, con una complexión musculosa y piel púrpura, así como por su temible personalidad y su obsesión con la muerte. Su objetivo principal es obtener el poder supremo y la inmortalidad para impresionar a la personificación de la muerte, a la que busca conquistar y cortejar. Thanos representa la búsqueda despiadada de poder y las consecuencias destructivas que pueden surgir de ello.', 'https://cdn.discordapp.com/attachments/1121103010580410459/1121120650766069870/mvnmr95774.webp');

INSERT INTO personajes (nombre_personaje, descripcion_personaje, url_personaje) 
Values ('magneto',' Magneto, cuyo nombre real es Erik Lehnsherr, es un personaje de Marvel Comics y uno de los villanos más emblemáticos de los X-Men. Magneto es conocido por sus poderes magnéticos y su lucha por los derechos y la supervivencia de los mutantes. Magneto es un mutante con la capacidad de controlar y manipular campos magnéticos. Puede generar y controlar campos electromagnéticos, lo que le permite levitar objetos metálicos, crear barreras de protección y desatar devastadores ataques magnéticos. Además, posee una capacidad de supervivencia excepcional y envejece lentamente.', 'https://cdn.discordapp.com/attachments/1121103010580410459/1121120748484964472/Magneto.webp');

INSERT INTO personajes (nombre_personaje, descripcion_personaje, url_personaje) 
Values ('hela', 'Hela es un personaje de Marvel Comics, conocida como la Diosa de la Muerte. Hela es la gobernante del reino de Hel y Niflheim, lugares de la mitología nórdica asociados con el inframundo y los muertos. Hela es retratada como una figura poderosa y oscura, con una apariencia siniestra y una conexión innata con la muerte. Como la personificación de la muerte en la mitología nórdica, Hela tiene un poderoso control sobre los muertos y los espíritus, y posee una fuerza y resistencia sobrehumanas. En los cómics, Hela a menudo se cruza con Thor y los Asgardianos, siendo un enemigo formidable para ellos. Su objetivo principal es extender su reino y reclamar almas para su dominio. A través de su influencia y poder, ha desafiado y amenazado a los héroes, así como a los dioses de Asgard.', 'https://cdn.discordapp.com/attachments/1121103010580410459/1121120868005855262/Hela_Earth-TRN789_from_Marvel_Super_War_002.webp');

INSERT INTO personajes (nombre_personaje, descripcion_personaje, url_personaje) 
Values ('la_encantadora', 'Enchantress, cuyo nombre real es Amora, es un personaje de Marvel Comics. Enchantress es conocida por ser una poderosa hechicera y una seductora manipuladora. Amora es una asgardiana y, como su nombre lo indica, tiene habilidades mágicas y encantadoras. Es experta en la manipulación de ilusiones, hechizos y manipulación mental, lo que le permite seducir y controlar a otros para lograr sus propósitos. Además, tiene una longevidad extendida y una fuerza sobrehumana. Enchantress es conocida por su amor obsesivo hacia el Poderoso Thor y ha competido con otras mujeres, como Lady Sif, por su atención. Su deseo de obtener poder y dominación ha sido un motor para muchas de sus acciones, lo que la lleva a buscar artefactos mágicos y a aliarse con otros villanos.', 'https://cdn.discordapp.com/attachments/1121103010580410459/1121121440612237482/a094f565c9a2404ba83cdd0f3a4dddc5.png');

INSERT INTO personajes (nombre_personaje, descripcion_personaje, url_personaje) 
Values ('deathbird', 'Deathbird, cuyo nombre real es Calsyee Neramani, es un personaje de Marvel Comics. Deathbird es conocida por ser una aliada ocasional y enemiga recurrente de los X-Men y la hermana de la Emperatriz Lilandra Neramani del Imperio Shiar. Deathbird es una guerrera formidable y astuta. Posee habilidades físicas mejoradas, incluyendo fuerza, velocidad y resistencia sobrehumanas. Además, tiene alas retráctiles que le permiten volar y garras afiladas que utiliza en combate. Deathbird ha participado en numerosos enfrentamientos con los X-Men y ha estado involucrada en tramas que involucran el control del trono Shiar y la lucha por el poder en el Imperio. Su relación complicada con su hermana Lilandra ha sido un punto focal en su historia y ha generado conflictos y alianzas cambiantes.', 'https://cdn.discordapp.com/attachments/1121103010580410459/1121121855101734993/f76dfc51d4c0021f4392d3bf8ff82c20.jpg');



INSERT INTO caracteristica (nombre_personaje, caracteristicas_personaje) 
Values ('spiderman','humano,hombre,heroe,aracnido,trepamuros');

INSERT INTO caracteristica (nombre_personaje, caracteristicas_personaje) 
Values ('ironman', 'humano,hombre,heroe,genio_inventor,millonario');

INSERT INTO caracteristica (nombre_personaje, caracteristicas_personaje) 
Values ('capita_america', 'humano,hombre,heroe,patriota,super_soldado');

INSERT INTO caracteristica (nombre_personaje, caracteristicas_personaje) 
Values ('daredevil', 'humano,hombre,heroe,ciego,artista_marcial');

INSERT INTO caracteristica (nombre_personaje, caracteristicas_personaje) 
Values ('black_widow', 'humano,mujer,heroe,espia,artista_marcial');

INSERT INTO caracteristica (nombre_personaje, caracteristicas_personaje) 
Values ('sue_storm', 'humano,mujer,heroe,invisible,fuerte');

INSERT INTO caracteristica (nombre_personaje, caracteristicas_personaje) 
Values ('silk', 'humano,mujer,heroe,tejedora,trepamuros');

INSERT INTO caracteristica (nombre_personaje, caracteristicas_personaje) 
Values ('she_hulk', 'humano, mujer,heroe,verde,super_fuerte');

INSERT INTO caracteristica (nombre_personaje, caracteristicas_personaje) 
Values ('scarlet_witch', 'humano,mujer,heroe,hechicera,fuerte');

INSERT INTO caracteristica (nombre_personaje, caracteristicas_personaje) 
Values ('jean_grey','mutante,mujer,heroe,telepata,dark_fenix');

INSERT INTO caracteristica (nombre_personaje, caracteristicas_personaje) 
Values ('punisher', 'humano,hombre,antiheroe,vengativo,artista_marcial');

INSERT INTO caracteristica (nombre_personaje, caracteristicas_personaje) 
Values ('deadpool', 'mutante,hombre,antiheroe,mercenario,gracioso');

INSERT INTO caracteristica (nombre_personaje, caracteristicas_personaje) 
Values ('venom', 'alien,hombre,antiheroe,aracnido,simbionte');

INSERT INTO caracteristica (nombre_personaje, caracteristicas_personaje) 
Values ('wolverine', 'mutante,hombre,antiheroe,salvaje,inmortal');

INSERT INTO caracteristica (nombre_personaje, caracteristicas_personaje) 
Values ('x_23', 'mutante,mujer,antiheroe,experta_rastreadora,clon');

INSERT INTO caracteristica (nombre_personaje, caracteristicas_personaje) 
Values ('thanos', 'alien,hombre,villano,titan,loco');

INSERT INTO caracteristica (nombre_personaje, caracteristicas_personaje) 
Values ('magneto', 'mutante,hombre,villano,defensor_de_mutantes,poderoso');

INSERT INTO caracteristica (nombre_personaje, caracteristicas_personaje) 
Values ('hela', 'alien,mujer,villano,diosa_de_la_muerte,super_fuerte');

INSERT INTO caracteristica (nombre_personaje, caracteristicas_personaje) 
Values ('la_encantadora', 'alien,mujer,villano,hechicera,manipuladora');

INSERT INTO caracteristica (nombre_personaje, caracteristicas_personaje) 
Values ('deathbird', 'alien,mujer,villano,princesa,conquistadora');