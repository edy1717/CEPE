import { Injectable } from '@angular/core';
import { Profiles } from '../models/profiles';
import { Observable } from 'rxjs/internal/Observable';
import { ProductProfileInterface } from '../models/products-profile';


@Injectable({
  providedIn: 'root'
})
export class DummyService {


  guardarCliente : Profiles [] = [];
  respuestaAlta =[];
  profiles : Profiles [] = [
    {
      idProfile : 1,
      nombre: "Edwin Martinez",
      email: "edy_ies@systems.com",
      phone: "00000000",
      direccion: "San Pedro Xalpa, Col. Azcapotzalco"
    },
    {
      idProfile : 2,
      nombre: "Ana María",
      email: "ana@systems.com",
      phone: "00000001",
      direccion: "San Pedro , Col. Barrientos"
    },
    {
      idProfile : 3,
      nombre: "Alexis",
      email: "Alexis@systems.com",
      phone: "00000003",
      direccion: "Loma linda, Col. San agustin"
    },
    {
      idProfile : 4,
      nombre: "Denisse",
      email: "dennise@systems.com",
      phone: "00000004",
      direccion: "San Antonio, col. lomas de san agustin "
    },
    {
      idProfile: 5,
      nombre: "Movier Peralta",
      email: "peralta@systems.com",
      phone: "00000005",
      direccion: "San  Xalpa, Col. Mejico"
    },
    {
      idProfile : 6,
      nombre: "Daniela",
      email: "daniela@systems.com",
      phone: "00000006",
      direccion: "San Benito , Col. Portada"
    },
    {
      idProfile : 7,
      nombre: "Daniel Moreo",
      email: "moreo@systems.com",
      phone: "00000007",
      direccion: "San Tortuga, Col. Prudence"
    },
    {
      idProfile : 8,
      nombre: "Miriam",
      email: "miriam@systems.com",
      phone: "00000008",
      direccion: "Tambores, Col. Osha"
    },
    {
      idProfile : 9,
      nombre: "Thania Sotelo",
      email: "thanb@systems.com",
      phone: "00000009",
      direccion: "Cto. Circunvalción, Col Satelite"
    },
    {
      idProfile : 10,
      nombre: "Katt",
      email: "Katt@systems.com",
      phone: "00000010",
      direccion: "Cto. Circunvalción, Col Satelite"
    },
    {
      idProfile : 11,
      nombre: "Sotelo",
      email: "sotelo@systems.com",
      phone: "00000011",
      direccion: "Cto. Mejiquense, Col Potrero"
    },
    {
      idProfile : 12,
      nombre: "Porfirio",
      email: "porfi@systems.com",
      phone: "00000012",
      direccion: "Av. Cuaderno, Col. Xiomi"
    },
    {
      idProfile : 13,
      nombre: "Batman",
      email: "batman@systems.com",
      phone: "00000013",
      direccion: "Cto. Batiseñal, Col. Panteon"
    },
    {
      idProfile : 14,
      nombre: "Nemo",
      email: "nemo@systems.com",
      phone: "00000014",
      direccion: "Av. Cuaderno, Col. Xiomi"
    },
    {
      idProfile : 15,
      nombre: "Thor",
      email: "thor@systems.com",
      phone: "00000015",
      direccion: "Cto. Trueno, Col. Galaxya"
    },
    {
      idProfile : 16,
      nombre: "Spider-man",
      email: "araña@systems.com",
      phone: "00000016",
      direccion: "Av. Telaraña, Col. Telaraña"
    },
    {
      idProfile : 17,
      nombre: "Capiran america",
      email: "capi@systems.com",
      phone: "00000017",
      direccion: "Cto. Criptonita, Col. No tiene"
    },
    {
      idProfile : 18,
      nombre: "Yamile",
      email: "tamm@systems.com",
      phone: "00000018",
      direccion: "Av. Corazon, Col. Roto"
    },
    {
      idProfile : 19,
      nombre: "Ivonne",
      email: "bonis@systems.com",
      phone: "00000019",
      direccion: "Cto. Corazon, Col. Panteon"
    },
    {
      idProfile : 20,
      nombre: "Alexia",
      email: "aletxia@systems.com",
      phone: "00000020",
      direccion: "Av. Cuaderno, Col. Xiomi"
    }
  ];

  products : ProductProfileInterface [] = [

    {
      id: 1456,
      nombre: " Aguacate Criollo",
      profil : {
        idProfile : 1,
        nombre: "Edwin Martinez",
        email: "edy_ies@systems.com",
        phone: "00000000",
        direccion: "San Pedro Xalpa, Col. Azcapotzalco",
      },
      descripcion: "Variedad que crece naturalmente en las zonas altas de México. Se caracteriza por una piel comestible muy fina y oscura cuando está maduro.",
      portada: "https://revolucion.news/cienciario.mx/wp-content/uploads/2017/09/AGUACATE-CRIOLLO-FIGURA-1-min.png",
      cantidad: "20",
      medida:"Kg"
    },
//     {
//       id: 4885,
//       nombre: "Tomate de Cascara "

//       descripcion: "Es una especie fanerógama de la familia Solanaceae. La palabra miltomate procede del náhuat milli, milpa, sembrado, y tomatl, tomate.",
//       portada: "https://s3-us-west-1.amazonaws.com/smattcom.com/productos-agricolas/tomatillo/header-tomatillo.png",
//       cantidad: "5",
//       medida:"Kg"
//     },
//     {
//       id: 5566,
//       nombre: " Papaya",
//       descripcion: "Carica papaya es una especie de planta arbustiva del género Carica en la familia Caricaceae.",
//       portada: "https://exoticfruitbox.com/wp-content/uploads/2015/10/papaya-3-Exotic.jpg",
//       cantidad: "3",
//       medida:"Kg"
//     },
//     {
//       id: 2256,
//       nombre: " Chayote",
//       descripcion: "El chayote, es decir el fruto de la Sechium edule, es similar a una pera grande. La tonalidad de su piel puede variar entre el verde oscuro y el amarillo pálido. ... La pulpa del fruto sepresenta en una coloración blanquecina y en el centro posee una única semilla de forma plana y lisa, rodeada de una formación fibrosa.",
//       portada: "https://terrafreshfoods.com/blog/es/wp-content/uploads/2015/09/Chayote1-1024x1024.jpg",
//       cantidad: "2",
//       medida:"Kg"
//     },
//     {
//       id: 5887,
//       nombre: " Jicama",
//       descripcion: "La jícama es tubérculo que en México se come generalmente como fruta. Por fuera se parece un poco en su forma al nabo y está cubierta de una delgada cáscara de color café grisáceo. Por dentro es blanca y tiene la textura crujiente de una papa cruda o de una pera.",
//       portada: "https://www.aboutespanol.com/thmb/Y77UFlg8A23VTe0Qo6LKu_dRq64=/1885x1414/smart/filters:no_upscale()/jicama-5af32e818e1b6e0036007fcd.jpg",
//       cantidad: "4",
//       medida:"Kg"
//     },
//     {
//       id: 3555,
//       nombre: " Chile Habanero",
//       descripcion: "Es el único chile perteneciente a la variedad Capsicum chinense que se utiliza en México. Tiene textura suave y forma globosa. Mide 4 cm de largo y tres de ancho, y se considera el chile más picoso utilizado en México.",
//       portada: "https://hablemosdealimentos.com/wp-content/uploads/2018/09/Chile-Habanero-2.jpg",
//       cantidad: "8",
//       medida:"Kg"
//     },
//     {
//       id: 5684,
//       nombre: " Calabaza",
//       descripcion: "Se denomina calabaza a la calabacera (una planta que pertenece a la familia de las cucurbitáceas) y a su fruto (que es comestible y puede tener diferentes dimensiones, formas y colores).",
//       portada: "https://4.bp.blogspot.com/-ZkBiFouZYtI/WLAbmcL0OzI/AAAAAAAAMkc/FsGshqpP3LUTe3xzzuyq091whI6t94SuACLcB/s1600/CALABAZA.jpg",
//       cantidad: "15",
//       medida:"Kg"
//     },
//     {
//       id: 6228,
//       nombre: " Maíz",
//       descripcion: "El maíz es uno de los cereales más abundantes y populares en el mundo, y asimismo de los más consumidos.El maíz o Zea mays de acuerdo a su nombre científico es una planta gramínea, lo cual significa que tiene un tallo cilíndrico y hojas largas y gruesas, su altura oscila entre el metro y los tres de alto.",
//       portada: "https://www.caracteristicas.co/wp-content/uploads/2018/10/maiz-2-1-e1581908276964.jpg",
//       cantidad: "20",
//       medida:"Kg"
//     },
//     {
//       id: 8995,
//       nombre: " Nopal",
//       descripcion: "El nopal es una planta suculenta que mide de media entre 1,5 y 3 metros de altura. Los tallos (cladodios o “palas”) son aplanados y de color verde grisáceo.",
//       portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDUI76xpzb6IE4aGQhn3P2WL4WTzyqBZqi7X8Dx9s6csbElVSX&usqp=CAUg",
//       cantidad: "3",
//       medida:"Kg"
//     },
//     {
//       id: 8546,
//       nombre: " Espinaca",
//       descripcion: "La espinaca pertenece a la familia Chenopodiaceae y la especie Spinacea oleracea.Esta planta, en una primera fase forma una roseta de hojas de la que posteriormente emiteel tallo.",
//       portada: "https://lh3.googleusercontent.com/proxy/V1tjw1eVDm16--sK6BqpQTz6sJjvnv9511RQOxE88QHnQNyY0BsKoiYuQqJUIPDFHARTAbGDIryxzkcZ4jNqjpYj6f4Qbx0Y3gZB6tYbBh3wsBXkXHI3",
//       cantidad: "8",
//       medida:"Kg"
//     },
//     {
//       id: 6897,
//       nombre: " Setas Comestibles",
//       descripcion: "Las setas u hongos comestibles incluyen muchos tipos de hongos o setas que son recolectados, cultivados y otros que no son cultivados fácilmente, y que son muy apreciados en la gastronomía.",
//       portada: "https://t2.uc.ltmcdn.com/images/8/2/0/img_cuales_son_las_setas_comestibles_mas_comunes_en_espana_20028_600_square.jpg",
//       cantidad: "7",
//       medida:"Kg"
//     },
//     {
//       id: 7458,
//       nombre: " Chicharo",
//       descripcion: "El chícharo, guisante, arveja o arbeyu, entre otros nombres, es como se conoce a las semillas de la planta Pisum sativum, denominada generalmente con los mismos nombres coloquiales. Los chícharos son alimentos muy populares y apreciados por su valor nutricional.",
//       portada: "https://elpoderdelconsumidor.org/wp-content/uploads/2016/10/chicharos.jpg",
//       cantidad: "10",
//       medida:"Kg"
//     },
//     {
//       id: 5423,
//       nombre: " Durazno",
//       descripcion: "Su fruto, el melocotón o durazno, contiene una única semilla encerrada en una cáscara dura, el «hueso». Esta fruta, normalmente de piel aterciopelada, posee una carne amarilla o blanquecina de sabor dulce y aroma delicado.",
//       portada: "https://www.bioenciclopedia.com/wp-content/uploads/2016/06/duraznos_caracteristicas.jpg",
//       cantidad: "5",
//       medida:"Kg"
//     },
//     {
//       id: 4956,
//       nombre: " Granada",
//       descripcion: "El granado o granada (Punica granatum) es un arbusto frutal caducifolio que puede alcanzar de a 8 m de altura y cuyo fruto es la granada.",
//       portada: "https://i.pinimg.com/originals/9c/b2/87/9cb2878dc907fe48853557208505669e.jpg",
//       cantidad: "5",
//       medida:"Kg"
//     },
//     {
//       id: 7469,
//       nombre: " Guayaba ",
//       descripcion: "El guayabo, y su fruto, la guayaba (palabra de origen arahuaca, siendo su nombre científico Psidium guajava), es una especie de pequeño árbol perteneciente a la familia de las mirtáceas. Es un arbusto o árbol pequeño natural de América tropical que se ha asilvestrado en otras zonas tropicales del planeta.",
//       portada: "https://www.ecured.cu/images/6/6a/Guayaba_psidiun.jpeg",
//       cantidad: "12",
//       medida:"Kg"
//     },
//     {
//       id: 1476,
//       nombre: " Limón Persa  ",
//       descripcion: "El limón persa se considera como un híbrido desarrollado entre Citrus aurantifolia y algún otro Citrus sp. Se desarrolla en áreas tropicales y subtropicales.",
//       portada: "https://www.justtrademex.com/wp-content/uploads/2015/07/LIMON-PERSA.jpg",
//       cantidad: "7",
//       medida:"Kg"
//     },
//     {
//       id: 2785,
//       nombre: " Mango ",
//       descripcion: "El mango de la especie Mangifera indica es una fruta jugosa (más especificamente una drupa) y tiene numerosas variedades con formas, colores, texturas y sabores muy variables. Es redondo a oblongo y puede tener pesos de menos de 50 g a más de 2 kg. Consta de una cáscara, una pulpa comestible (el mesocarpio) y un endocarpio duro que contiene una semilla.",
//       portada: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Mango_and_cross_section_edit.jpg/1024px-Mango_and_cross_section_edit.jpg",
//       cantidad: "12",
//       medida:"Kg"
//     },
//     {
//       id: 1439,
//       nombre: " Naranja ",
//       descripcion: "La naranja es la fruta cítrica del naranjo (Citrus aurantium), con dos subespecies principales: el naranjo dulce (subespecie Sinensis) y agrio (subespecie Amara). Se la denomina cítrica por su contenido en ácido cítrico, que le confiere el sabor amargo.",
//       portada: "https://ae01.alicdn.com/kf/HTB1qN3FgxSYBuNjSspjq6x73VXaS/1-pieza-decoraci-n-artificial-fruta-naranja-frutas-falso-ayuda-cognitiva-ense-anza-fruta-EVA-pl.jpg_960x960.jpg",
//       cantidad: "20",
//       medida:"Kg"
//     },
//     {
//       id: 8897,
//       nombre: " Piña ",
//       descripcion: "La piña tropical o piña americana (Ananas comosus) es la fruta obtenida de la planta que recibe el mismo nombre. Su forma es ovalada y gruesa, con aproximadamente 30 cm de largo y 15 cm de diámetro. ",
//       portada: "https://www.bioenciclopedia.com/wp-content/uploads/2016/07/pinas.jpg",
//       cantidad: "7",
//       medida:"Kg"
//     },

// {
//       id: 7735,
//       nombre: " Platano ",
//       descripcion: "El plátano o banano es una fruta amarilla, de forma alargada, que encontramos en el mercado en grupos de tres a veinte, de forma similar a un pepino triangular, oblongo y normalmente de color amarillo.El plátano es rico en fibra, potasio y algunas vitaminas beneficiosas para la salud.",
//       portada: "https://www.definicionabc.com/wp-content/uploads/2013/12/Pl%C3%A1tano-450x299.jpg",
//       cantidad: "17",
//       medida:"Kg"
//     },

// {
//       id: 1849,
//       nombre: " Sandía ",
//       descripcion: "La sandía es un fruto grande y de forma más o menos esférica que suele consumirse cruda como postre. Su pulpa es de color rojizo o amarillento y de sabor dulce. Resulta un alimento muy refrescante que aporta muy pocas calorías al organismo, también aporta algunas vitaminas y minerales.",
//       portada: "https://www.bioenciclopedia.com/wp-content/uploads/2016/07/sandia_rebanada.jpg",
//       cantidad: "10",
//       medida:"Kg"
//     },

// {
//       id: 9745,
//       nombre: " Cebolla Morada ",
//       descripcion: "La variedad morada es un tipo de cebolla con la piel roja púrpura y la carne blanca con matices rojizos. Tiende a ser de tamaño medio con sabor dulce y suave y se consume cruda, asada o levemente cocinada.",
//       portada: "https://www.jericoo.com/2772-large_default/cebolla-morada-100gr.jpg",
//       cantidad: "7",
//       medida:"Kg"
//     },

// {
//       id: 5219,
//       nombre: " Fresa ",
//       descripcion: "Una fresa o frutilla es una planta perenne de la familia de las Rosáceas, cuyo fruto es comestible. La planta presenta tallos rastreros, con estolones, hojas vellosas y flores blancas o amarillentas.",
//       portada: "https://definicion.de/wp-content/uploads/2009/06/fresa.jpg",
//       cantidad: "7",
//       medida:"Kg"
//     },

// {
//       id: 7873,
//       nombre: " Melón ",
//       descripcion: "El melón es una fruta globosa, redonda o alargada, de 20 a 30cm de largo y hasta 2kg de peso. La corteza surcada o reticulada puede ser de color amarillo claro, verde o combinaciones de ambos según la variedad, la pulpa es aromática, jugosa y dulce, puede ser blanca o blanca verdosa, amarilla y anaranjada.",
//       portada: "https://www.flores.ninja/wp-content/uploads/2017/01/El-mel%C3%B3n.jpg",
//       cantidad: "18",
//       medida:"Kg"
//     },

//     {
//       id: 9531,
//       nombre: " Mandarina ",
//       descripcion: "La mandarina es el fruto de un árbol, el mandarino, de la familia de las rutáceas (género Citrus), algo más pequeño que el naranjo. Los frutos (hespérides), de tamaño menor que la naranja, están distribuidos en gajos y tienen una pulpa formada por vesículas llenas de jugo muy aromático.",
//       portada: "https://www.ecured.cu/images/thumb/f/f2/Mandara.jpg/260px-Mandara.jpg",
//       cantidad: "4",
//       medida:"Kg"
//     },
//     {
//       id: 3330,
//       nombre: " Tejocote ",
//       descripcion: "Tejocote (Crataegus pubescens) La pulpa es carnosa, dura, color anaranjado amarillento y de sabor un poco ácido. Se cultiva desde San Luis Potosí hasta Jalisco y desde Veracruz hasta Chiapas, por lo regular en huertos familiares o a las orillas de los terrenos de cultivo.",
//       portada: "https://laroussecocina.mx/wp-content/uploads/2018/01/Tejocote.jpg",
//       cantidad: "11",
//       medida:"Kg"
//     },
//     {
//       id: 9638,
//       nombre: " Tamarindo ",
//       descripcion: "Tamarindus indica (tamarindo) es un árbol tropical y la única especie del género Tamarindus, perteneciente a las Fabaceae (Leguminosae), subfamilia Caesalpinioideae, de frutos comestibles muy apreciados en diversos países.",
//       portada: "https://kanankab.files.wordpress.com/2016/10/tamarindo-diabetes.jpg",
//       cantidad: "6",
//       medida:"Kg"
//     },
//     {
//       id: 7068,
//       nombre: " Lima ",
//       descripcion: "La lima es una fruta exótica y fuertemente aromática perteneciente a la familia de los cítricos. Es el fruto del limero (Citrus aurantifolia). Existen muchas variedades de lima pero generalmente son de pequeño tamaño, color verde o amarillo. Su sabor es entre ácido y dulce, según la variedad, a veces es amargo.",
//       portada: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Lime_Blossom.jpg/220px-Lime_Blossom.jpg",
//       cantidad: "12",
//       medida:"Kg"
//     },
//     {
//       id: 1763,
//       nombre: " Mamey ",
//       descripcion: "El mamey es una fruta nativa del continente americano y específicamente de las Antillas. Científicamente se le conoce como: “Mammea americana L” y pertenece al grupo de las Clusiaceae, conocidas por ser arbustos que da frutos de forma alargada.",
//       portada: "https://www.monografias.com/trabajos89/ficha-tecnica-del-mamey/image001.jpg",
//       cantidad: "2",
//       medida:"Kg"
//     },
//     {
//       id: 3750,
//       nombre: " Toronja ",
//       descripcion: "La toronja pertenece a la familia de los cítricos. Híbrido entre la naranja dulce y el pomelo, ahora es una planta autónoma desde siglos. La toronja está cubierta por una cáscara lisa que puede ser amarilla o rosada y de la pulpa interna se extrae un jugo ligeramente acidulado.",
//       portada: "https://www.justtrademex.com/wp-content/uploads/2015/07/TORONJA-ROJA.jpg",
//       cantidad: "4",
//       medida:"Kg"
//     },
//     {
//       id: 5091,
//       nombre: " Ciruela ",
//       descripcion: "La ciruela es la fruta del ciruelo, nombre común de varias especies arbóreas pertenecientes al subgénero Prunus. La ciruela es una drupa, es decir, un fruto carnoso con una única semilla rodeada de un endocarpo leñoso.",
//       portada: "https://http2.mlstatic.com/frutal-ciruela-cereza-enano-importante-ver-descripcion-D_NQ_NP_737707-MLM31229314672_062019-F.jpg",
//       cantidad: "5",
//       medida:"Kg"
//     },
//     {
//       id: 2509,
//       nombre: " Chabacano ",
//       descripcion: "El chabacano es una fruta de un árbol generalmente pequeño llamado albaricoquero y se consume bajo de diversas formas, fresco, seco, en compota, en mermelada, en tartas, en jarabe pero también en acompañamiento de platos salados, como el lomo de conejo a los albaricoques secos.",
//       portada: "https://http2.mlstatic.com/arbol-de-chabacano-frutal-enano-para-maceta-ver-descripcion-D_NQ_NP_756656-MLM31368412723_072019-F.jpg",
//       cantidad: "5",
//       medida:"Kg"
//     },
//     {
//       id: 6826,
//       nombre: " Uva ",
//       descripcion: "La uva es un fruta que crece en racimos apretados. Su pulpa es blanca o púrpura y de sabor dulce. Su pulpa es blanca o púrpura y de sabor dulce. Se consume como fruta fresca o zumo, aunque su utilidad principal es la obtención de vinos.",
//       portada: "https://http2.mlstatic.com/arbol-uva-enano-para-maceta-importante-ver-descripcion-D_NQ_NP_722328-MLM31227789027_062019-F.jpg",
//       cantidad: "14",
//       medida:"Kg"
//     },
//     {
//       id: 3071,
//       nombre: " Membrillo ",
//       descripcion: "El membrillo, es un pomo de color amarillo-dorado brillante cuando está maduro, periforme, de 7 a 12 cm de largo y de 6 a 9 cm de ancho; su pulpa es dura y muy aromática.",
//       portada: "https://www.bioenciclopedia.com/wp-content/uploads/2016/07/membrillero_planta.jpg",
//       cantidad: "5",
//       medida:"Kg"
//     },
//     {
//       id: 7300,
//       nombre: " Tuna ",
//       descripcion: "La tuna es una fruta de la familia de las cactáceas. Tiene cáscara gruesa y espinosa con una pulpa abundante en semillas. La investigación moderna sugiere nuevos e importantes usos medicinales para el nopal principalmente en el tratamiento de la diabetes.",
//       portada: "https://www.inforural.com.mx/wp-content/uploads/2018/08/Tuna_2-660x330.jpg",
//       cantidad: "12",
//       medida:"Kg"
//     },
//     {
//       id: 1001,
//       nombre: " Capulin ",
//       descripcion: "Prunus salicifolia, conocida comúnmente como cereza, cereza de monte o capulín, es una especie botánica de árbol frutal.",
//       portada: "https://www.teorema.com.mx/wp-content/uploads/capulines01.jpg",
//       cantidad: "7",
//       medida:"Kg"
//     },
//     {
//       id: 5626,
//       nombre: " Pera ",
//       descripcion: "La pera es una fruta comestible que procede del Pyrus communis, un árbol que se conoce coloquialmentecomo peral común. Existen, de todas maneras, muchas clases de peras, que son producidaspor otros árboles del género Pyrus.",
//       portada: "https://definicion.de/wp-content/uploads/2013/03/Pera.jpg",
//       cantidad: "8",
//       medida:"Kg"
//     },
//     {
//       id: 1133,
//       nombre: " Perón ",
//       descripcion: "Perón (Pyrus malus Fruto perteneciente a la familia de las rosáceas, semejante a una manzana; es de forma redonda consistencia firme, cáscara delgada de color verde o amarillo, la pulpa es de color amarill verdoso o amarillo claro, con sabor agridulce y olor fresco y suave.",
//       portada: "https://www.tierra-inca.com/album/photos/012/01269.jpg",
//       cantidad: "20",
//       medida:"Kg"
//     },
//     {
//       id: 2287,
//       nombre: " Chicozapote ",
//       descripcion: "Su fruto contiene compuestos cianogénicos, glucosídicos, fenólicos, y terpenoides Sus semillas tienen propiedades diuréticas y antipiréticas. Los frutos del nísper son comestible, dulces y con un sabor muy fino.",
//       portada: "https://www.lifeder.com/wp-content/uploads/2019/06/sapodilla-2463738_640-1280x720.jpg",
//       cantidad: "8",
//       medida:"Kg"
//     },
//     {
//       id: 3377,
//       nombre: " Caña ",
//       descripcion: "La caña de azúcar es una gramínea tropical. Es un pasto gigante que tiene un tallo maciz de dos a cinco metros de altura y entre cinco a seis centímetros de diámetro.S nombre científico es saccharum officinarum.",
//       portada: "https://www.bioenciclopedia.com/wp-content/uploads/2016/06/cana_de_azucar_plantacion.jpg",
//       cantidad: "20",
//       medida:"Kg"
//     },
//     {
//       id: 4460,
//       nombre: " Tejocote ",
//       descripcion: "Tejocote (Crataegus pubescen La pulpa es carnosa, dura, color anaranjado amarillento y de sabor un poco ácido. Se cultiva des San Luis Potosí hasta Jalisco y desde Veracruz hasta Chiapas.",
//       portada: "https://laroussecocina.mx/wp-content/uploads/2018/01/Tejocote.jpg",
//       cantidad: "10",
//       medida:"Kg"
//     },
//      {
//       id: 8880,
//       nombre: " Manzana Fuji ",
//       descripcion: "Las manzanas Fuji suelen ser grandes o muy grandes y redondas, de media del tamaño de una pelota de estenis. Contienen entre un 9 y un 11% de azúcares por peso y tienen una carne densa más dulce y escrujiente que las de muchas otras variedades de manzana, lo que las hace popular entre consumidores esde todo el mundo.",
//       portada: "https://www.lafruteria.es/260-home_default/manzana-fuji.jpg",
//       cantidad: "12",
//       medida:"Kg"
//     },
//      {
//       id: 9990,
//       nombre: " Manzana Golden ",
//       descripcion: "Es una de las variedades de manzana más cultivadas en todo el mundo. En su estado óptimo de maduración tiene una forma redondeada, color de la piel amarillo, carne de consistencia crujiente, jugosa, ligeramente amargo y es rica en fructosa.",
//       portada: "https://plantasyflores.pro/wp-content/uploads/2019/01/Manzana-Golden-Delicious1_opt.jpg",
//       cantidad: "15",
//       medida:"Kg"
//     },
//      {
//       id: 1000,
//       nombre: " Manzana Granny Smith ",
//       descripcion: "Fruto verde con lenticelas blancas, características de la variedad, con la pulpa blanca con textura consistente, firme y crujiente. De sabor altamente acidularo es redonda ligeramente alargada y simétrica, con pedúnculo corto.",
//       portada: "https://www.comenaranjas.com/images/stories/virtuemart/product/manzana-granny-smith.jpg",
//       cantidad: "7",
//       medida:"Kg"
//     },
//      {
//       id: 5554,
//       nombre: " Manzana Reineta ",
//       descripcion: "La manzana Reineta es grande, de forma achatada y redondeada. La piel suele ser amarilla con motas o verdosa y posee un intenso sabor agridulce. Su pulpa es de color blanco y iene un sabor agridulce que recuerda a un toque de moscatel.",
//       portada: "https://www.comenaranjas.com/images/stories/virtuemart/product/manzana-reineta-2.jpg",
//       cantidad: "16",
//       medida:"Kg"
//     },
//      {
//       id: 8863,
//       nombre: " Manzana Red Delicious ",
//       descripcion: "Manzana Red Delicious, tiene piel o cáscara color rojo brillante, pulpa blanquecina, es algo arenosa y con un sabor algo ácido.",
//       portada: "https://oswadotcom.files.wordpress.com/2011/11/manzana-delicia.jpg?w=584",
//       cantidad: "12",
//       medida:"Kg"
//     },
//      {
//       id: 5005,
//       nombre: " Manzana Startinkg ",
//       descripcion: "La variedad Starking procede de Estados Unidos. Su piel es brillante con estrías rojas y verdosas. Su carne es blanca amarillenta y crujiente, de sabor dulce.",
//       portada: "https://frutasyverduras.info/wp-content/uploads/2019/02/manzana-1024x683.jpg",
//       cantidad: "12",
//       medida:"Kg"
//     },
//      {
//       id: 7774,
//       nombre: " Manzana Royal Gala ",
//       descripcion: "La Royal Gala es una manzana de tamaño pequeño a medio con un sabor dulce, ideal para tartas, salsas y ensaladas. También muy rica como merienda o tentempié,  Se caracteriza por un tono rojo intenso de piel, el color varía de amarillo a cas, naranja con rayas de color naranja intenso sobre un fondo amarillo verdoso.",
//       portada: "https://www.comenaranjas.com/images/stories/virtuemart/product/manzana-royal.jpg",
//       cantidad: "6",
//       medida:"Kg"
//     },
//      {
//       id: 8003,
//       nombre: " Ajo ",
//       descripcion: "El ajo o Allium sativum es una planta bulbosa, vivaz y rústica que pertenece a la familia de las Liliaceae, subfam. Allioideae. Su raíz se compone de 6-12 bulbillos, conocidos tradicionalmente como dientes de ajo, unidos por la base formando un cuerpo con forma redondeada llamada cabeza de ajos.",
//       portada: "https://1.bp.blogspot.com/-p-FHUAnpNDQ/T7ySiH8lJtI/AAAAAAAAAQ8/nLbLwE37vrI/s1600/285.jpg",
//       cantidad: "7",
//       medida:"Kg"
//     },
//      {
//       id: 4407,
//       nombre: " Ruda ",
//       descripcion: "Ruta graveolens, comúnmente llamada ruda, es una especie de la familia Rutaceae, nativa del sur de Europa.  Se suele cultivar como planta ornamental de jardín, en especial por sus hojas azuladas y por su tolerancia a suelos secos y al calor. También se cultiva como hierba medicinal y condimento.",
//       portada: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Ruta_graveolens_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-259.jpg",
//       cantidad: "12",
//       medida:"Kg"
//     },
//     {
//       id: 7022,
//       nombre: " Aguacate Hass ",
//       descripcion: "El Aguacate Hass, se conoce también como “la fruta del corazón”, no sólo por su similitud con el órgano vital sino porque sus aceites son benéficos para reducir el colesterol y proteger el sistema cardio-circulatorio.",
//       portada: "https://2.bp.blogspot.com/-Srs6UxqhjFg/T8VmlWjzfxI/AAAAAAAAAEY/Mhvjt5433UI/s1600/images+(5).jpg",
//       cantidad: "2",
//       medida:"Kg"
//     },
//      {
//       id: 1199,
//       nombre: " Aguacate Bacón ",
//       descripcion: "El aguacate bacon es una variedad de aguacate de piel verde y buena calidad. El aguacate Bacon es un tipo de aguacate de tamaño mediano que está disponible desde finales del otoño hasta la primavera.",
//       portada: "https://www.campodebenamayor.es/wp-content/uploads/Aguacate-bacon-W4-300-237.jpg",
//       cantidad: "10",
//       medida:"Kg"
//     },
//      {
//       id: 5904,
//       nombre: " Aguacate Pinkerton ",
//       descripcion: "El aguacate Pinkerton tiene hueso pequeño. El árbol produce más frutos que en otras variedades de aguacate. Su piel es gruesa, de color verde muy oscuro y la pulpa es cremosa, de color verde pálido",
//       portada: "https://www.tropicultura.com/wp-content/uploads/2019/01/aguacate-pinkerton-ecol%C3%B3gico.jpg",
//       cantidad: "6",
//       medida:"Kg"
//     },
//      {
//       id: 6010,
//       nombre: " Hierba Menta ",
//       descripcion: "Es una planta herbácea perenne estolonífera con raíces en rizoma que se desarrollan intensamente en el terreno. Es un género que tiene un aspecto muy variable según la especie.",
//       portada: "https://www.elicriso.it/es/plantas_medicinales/menta/fiore.jpg",
//       cantidad: "25",
//       medida:"g"
//     },
//      {
//       id: 2208,
//       nombre: " Aguacate Reed ",
//       descripcion: "Reed es un aguacate de piel de color verde oscuro y brillante, ligeramente gruesa. Tiene un aroma suave y su pulpa es mantecosa y de muy buen sabor. ",
//       portada: "https://www.interempresas.net/FotosArtProductos/P73378.jpg",
//       cantidad: "8",
//       medida:"Kg"
//     },
//      {
//       id: 4631,
//       nombre: " Epazote ",
//       descripcion: "El epazote es una planta medicinal utilizada en casi todo México para tratar diversos dolores estomacales, cólicos y parásitos intestinales, para ello se toma la infusión de las hojas con agua o leche en ayunas.",
//       portada: "https://www.mexicodesconocido.com.mx/wp-content/uploads/2017/01/epazote.jpg",
//       cantidad: "100",
//       medida:"g"
//     },
//      {
//       id: 9990,
//       nombre: " Hierbabuena ",
//       descripcion: "La hierbabuena es una hierba que pertenece al grupo familiar de las labiadas ya que su corola se encuentra dividida en dos labios o segmentos.",
//       portada: "https://definicion.de/wp-content/uploads/2018/04/hierbabuena.jpg",
//       cantidad: "200",
//       medida:"g"
//     },
//      {
//       id: 7751,
//       nombre: " Arnica ",
//       descripcion: "Árnica montana es una planta que crece de forma silvestre con la forma de tallos altos de más de medio metro de altura con hojas alargadas y unas hermosas flores amarillas muy características.",
//       portada: "https://www.definicionabc.com/wp-content/uploads/general/Arnica-2.jpg",
//       cantidad: "110",
//       medida:"g"
//     },
//      {
//       id: 8700,
//       nombre: " Romero ",
//       descripcion: " El romero es un arbusto aromático, leñoso, de hojas perennes, muy ramificado y ocasionalmente achaparrado y que puede llegar a medir hasta 2 metros de altura.",
//       portada: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Rosmarinus_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-258.jpg/250px-Rosmarinus_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-258.jpg",
//       cantidad: "300",
//       medida:"g"
//     },
//      {
//       id: 3309,
//       nombre: " Valeriana  ",
//       descripcion: "La valeriana es una planta herbáceo, vivaz, de taa  hueco, liso que alcanza 2m. de altura.",
//       portada: "https://www.ecured.cu/images/thumb/0/0e/Valeriana_officinalis_flor.jpg/200px-Valeriana_officinalis_flor.jpg",
//       cantidad: "300",
//       medida:"g"
//     },
//      {
//       id: 3031,
//       nombre: " Sábila Mexicana  ",
//       descripcion: "La sábila es una planta con múltiples propiedades medicinales que ayudan, sobre todo, a tratar problemas en la epidermis. ... La sábila ha sido utilizada como planta medicinal desde haca muchos años.",
//       portada: "https://www.mexicodesconocido.com.mx/wp-content/uploads/2010/08/aloe-vera-1045_960_720.jpg",
//       cantidad: "2",
//       medida:"Kg"
//     },
//      {
//       id: 9077,
//       nombre: " Achiote ",
//       descripcion: "El achiote, también llamado annatto u onoto, es un pigmento natural, de coloración rojo-amarilla, ampliamente utilizado en la industria alimentaria y cosmética.  ",
//       portada: "https://www.flores.ninja/wp-content/uploads/2016/10/Achiote-qu%C3%A9-es-caracter%C3%ADsticas-fruto-usos-informaci%C3%B3n-Planta-arbusto.jpg",
//       cantidad: "7",
//       medida:"Kg"
//     },
//      {
//       id: 7726,
//       nombre: " Nopal ",
//       descripcion: "El nopal es una planta suculenta que mide de media entre 1,5 y 3 metros de altura. Los tallos (cladodios o “palas”) son aplanados y de color verde grisáceo.",
//       portada: "https://ladespensadefrida.es/wp-content/uploads/2019/09/cactus-nopal-600x400.jpg",
//       cantidad: "6",
//       medida:"Kg"
//     },
//      {
//       id: 3302,
//       nombre: " Cacao ",
//       descripcion: "Es un árbol de hoja perenne y tronco larguirucho, aunque realmente es una especie pequeña. Mide de 4 a 8 metros de altura y de 5 a 20 centímetros de ancho.",
//       portada: "https://www.bioenciclopedia.com/wp-content/uploads/2016/01/cacao4.jpg",
//       cantidad: "10",
//       medida:"Kg"
//     },
//      {
//       id: 7770,
//       nombre: " Jengibre ",
//       descripcion: "El jengibre es una planta perenne que alcanza una altura de casi el metro de altura. De sus tallos erectos no leñosos se disponen las hojas alternadas. Estas sons largas y lanceoladas, nacen directamente del tallo principal sin peciolo. La parte del jengibre  que más se utiliza es su tallo subterráneo",
//       portada: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Gingembre.jpg/250px-Gingembre.jpg",
//       cantidad: "500",
//       medida:"g"
//     },
//      {
//       id: 6993,
//       nombre: " Nuez Moscada  ",
//       descripcion: "La nuez moscada es una especia originaria de Indonesia pero que hoy en día se cultiva en varios países, es fruto de una planta de hoja perenne que lleva el nombre científico de Myristica, árbol de la nuez moscada.",
//       portada: "https://media.mercola.com/assets/images/foodfacts/nutmeg-nutrition-facts.jpg",
//       cantidad: "5",
//       medida:"Kg"
//     },
//      {
//       id: 9663,
//       nombre: " Manzanilla ",
//       descripcion: "La manzanilla es una hierba aromática que ha sido utilizada desde hace siglos con fines medicinales. Su nombre botánico es Matricaria Recutita.",
//       portada: "https://www.ecoherbes.com/wp-content/uploads/2017/06/manzanilla-portada.jpg",
//       cantidad: "300",
//       medida:"g"
//     },
//      {
//       id: 7889,
//       nombre: " Plátano Dominico  ",
//       descripcion: "El Plátano Dominico se caracteriza por producir un mayor número de manos o gajas y dedos por racimo .",
//       portada: "https://shoplu.com.mx/128-large_default/platano-dominico.jpg",
//       cantidad: "7",
//       medida:"Kg"
//     },
//      {
//       id: 2068,
//       nombre: " Berenjena ",
//       descripcion: "La berenjena es un fruto de forma variable que puede ir de esférica a ovoide y oblonga. El color es morado y más o menos intenso, blanca con bandas blancas moradas, amarillas, anaranjadas o incluso negras",
//       portada: "https://www.flores.ninja/wp-content/uploads/2016/11/Berenjena.jpg",
//       cantidad: "4",
//       medida:"Kg"
//     },
//     {
//       id: 3337,
//       nombre: " Chile Manzano ",
//       descripcion: "Este chile tiene semillas negras y es muy picante. La planta tiene unos 60 a 100 cm de altura y los chiles tienen 5 cm de largo y 5 cm de diámetro.",
//       portada: "https://hablemosdealimentos.com/wp-content/uploads/2018/09/chile-m-1.jpg",
//       cantidad: "5",
//       medida:"Kg"
//     },
//     {
//       id: 7008,
//       nombre: " Chile Morrón ",
//       descripcion: "El pimiento morrón es uno de los clásicos en nuestros mercados, en nuestras mesas, es un pimiento carnoso, dulce en mayor o menor medida.",
//       portada: "https://gastronomiaycia.republica.com/wp-content/uploads/2010/06/pimiento_morron.jpg",
//       cantidad: "10",
//       medida:"Kg"
//     },
//     {
//       id: 9400,
//       nombre: " Tomate saladette ",
//       descripcion: "Posee una carne más firme y menos semillas, lo cual lo hace ideal para cocinarlo en salsas y otras preparaciones.",
//       portada: "https://seminismexico.s3.amazonaws.com/app/uploads/2018/04/Tomate-saladette-DRD8551.jpg",
//       cantidad: "7",
//       medida:"Kg"
//     },
//     {
//       id: 4445,
//       nombre: " Tomate uva ",
//       descripcion: "El tomate grape tiene la forma y el tamaño parecido al de una uva grande. Un hibrido, con una buena cubierta de hoja y de sabor dulce.",
//       portada: "https://www.agricolachaparral.com/images/grape_down.jpg",
//       cantidad: "8",
//       medida:"Kg"
//     },
//     {
//       id: 7390,
//       nombre: " Pepino ",
//       descripcion: "El pepino es el fruto de la planta Cucumis sativus, originaria de la India, tiene forma alargada y es de color verde en su exterior, su pulpa es blanquecina y tiene una gran cantidad de semillas ovoides en todo su interior.",
//       portada: "https://images-na.ssl-images-amazon.com/images/I/61h3OO2v2WL._AC_SX450_.jpg",
//       cantidad: "5",
//       medida:"Kg"
//     },
//     {
//       id: 6002,
//       nombre: "Brócoli",
//       descripcion: "Brócoli: planta anual de tallo corto y erecto culminando en una inflorescencia de color verde grisáceo con hojas laterales que la tapan. Hojas alargadas y onduladas, de limbo color verde oscuro con un nervio central de color blanco.",
//       portada: "https://ecoinventos.com/wp-content/uploads/2015/11/Brocoli.jpg",
//       cantidad: "7",
//       medida:"Kg"
//     },
//     {
//       id: 3928,
//       nombre: " Lechuga Romana ",
//       descripcion: "Es una variedad de lechuga que crece con una larga cabeza y que posee una hojas robustas, alargadas y con un robusto nervio central.",
//       portada: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Romaine_lettuce.jpg",
//       cantidad: "4",
//       medida:"Kg"
//     },
//     {
//       id: 8612,
//       nombre: "  Lechuga iceberg ",
//       descripcion: "Tiene forma redonda, hojas grandes, crujientes y prietas. Es verde por fuera y más blanca cuando nos acercamos al tronco.",
//       portada: "https://www.calfruitos.com/es/fotos/pr_160_20170919152613.png",
//       cantidad: "12",
//       medida:"Kg"
//     },
//     {
//       id: 6613,
//       nombre: " Papa blanca  ",
//       descripcion: "La papa blanca para que sea de Buena calidad debe ser firme, de piel suave y de color blanco cremoso brillante.",
//       portada: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:good/gr/images/product-images/img_large/00000000004083L.jpg",
//       cantidad: "7",
//       medida:"Kg"
//     },
//     {
//       id: 9614,
//       nombre: " Papa Cambray ",
//       descripcion: "La papa cambray puede medir de 1 a 3 cm de diámetro y por eso casi siempre se comen enteras o partidas por la mitad.",
//       portada: "https://www.lacomer.com.mx/superc/img_art/4589_3.jpg",
//       cantidad: "5",
//       medida:"Kg"
//     },
//     {
//       id: 5052,
//       nombre: " Papa Russet Burbank ",
//       descripcion: "Es una patata cultivar con la piel de color marrón oscuro y unos ojos que es la papa que más se cultiva en América del Norte. Un tipo russet, su carne es blanca, seca y harinosa, y es bueno para la cocción , maceración, y las patatas fritas .",
//       portada: "https://www.argenpapa.com.ar/images/noticias/1452962192_big.jpg",
//       cantidad: "10",
//       medida:"Kg"
//     },
//     {
//       id: 6053,
//       nombre: " Papa galeana ",
//       descripcion: " Alcanza un alto costo y no se encuentra todo el año. Es de pulpa amarillenta y se puede comer pelada o con todo y cáscara.",
//       portada: "https://image.posta.com.mx/sites/default/files/styles/full_article_phone_1x/public/cntx160628019.jpg",
//       cantidad: "7",
//       medida:"Kg"
//     },
//     {
//       id: 8026,
//       nombre: " Papa roja o colorada ",
//       descripcion: "Son ricas en potasio, calcio, hierro y fósforo poseen grandes cantidades de vitamina C, así como vitamina A, vitamina B y vitamina P (bioflavonoides).",
//       portada: "https://ep01.epimg.net/elcomidista/imagenes/2017/02/22/articulo/1487804099_363696_1487805024_sumario_normal.jpg",
//       cantidad: "5",
//       medida:"Kg"
//     },
//     {
//       id: 5027,
//       nombre: " Garbanzo ",
//       descripcion: "El garbanzo o chícharo (Cicer arietinum) es una leguminosa de la familia de las fabáceas, muy extendida en la India y en el ámbito mediterráneo. Se trata de una planta herbácea, de aproximadamente 50 cm de altura, con flores blancas que desarrollan una vaina en cuyo interior se encontrarán 2 ó 3 semillas como máximo.",
//       portada: "https://saborgourmet.com/wp-content/uploads/garbanzos-cocidos-600x600.jpg",
//       cantidad: "7",
//       medida:"Kg"
//     },
//     {
//       id: 9926,
//       nombre: " Cebolla Chalota ",
//       descripcion: "Son unos bulbos pequeños y hay distintas variedades siendo la más común la alargada y rosácea en su interior.",
//       portada: "https://www.tuberculos.org/wp-content/uploads/2018/10/chalotas-1200x900.jpg",
//       cantidad: "8",
//       medida:"Kg"
//     },
//     {
//       id: 1927,
//       nombre: " Cebolla blanca ",
//       descripcion: " Es el bulbo subterráneo y comestible que crece en la planta del mismo nombre. Pertenece a la familia de las Liliáceas, y su nombre científico es Allium cepa.",
//       portada: "https://thumbs.dreamstime.com/b/cebolla-blanca-18420731.jpg",
//       cantidad: "20",
//       medida:"Kg"
//     },
//     {
//       id: 4406,
//       nombre: " Cebollin ",
//       descripcion: "El cebollino pertenece a la familia de la cebolla, el ajo y el puerro. Es una planta resistente que tolera las sequías y alcanza entre 10 y 12 pulgadas de altura.",
//       portada: "https://autoserviciosantander.com/wp-content/uploads/2019/11/Ceboll%C3%ADn.png",
//       cantidad: "8",
//       medida:"Kg"
//     },
//     {
//       id: 6407,
//       nombre: " Cebolla Dorada ",
//       descripcion: "Es una planta de ciclo bianual, que se cultiva como anual cuando se aprovecha el bulbo y como bianual cuando se pretende obtener semillas.",
//       portada: "https://www.eluniversal.com.mx/sites/default/files/u21998/dorada.jpg",
//       cantidad: "7",
//       medida:"Kg"
//     },
//     {
//       id: 1413,
//       nombre: " Haba ",
//       descripcion: "El haba tiene porte recto y erguido, con tallos fuertes y angulosos de hasta 1,6 m de altura. Sus hojas aparecen sobre el tallo en disposición alterna, son compuestas paripinnadas",
//       portada: "https://www.lavanguardia.com/r/GODO/LV/p4/WebSite/2017/04/02/Recortada/img_npalou_20170402-233430_imagenes_lv_otras_fuentes_wakan-haba-km9B-U421407915518VwE-992x558@LaVanguardia-Web.jpg",
//       cantidad: "12",
//       medida:"Kg"
//     },
//     {
//       id: 1416,
//       nombre: " Frijol Ayocote Morado ",
//       descripcion: "Phaseolus coccineus. L. Phaseolus coccineus, conocido como ayocote o ayecote (nahuatlismo de ayecohtli) o judía escarlata, es una planta herbácea, anual, cultivada y originaria de México. ",
//       portada: "https://consumaconciencia.com/wp-content/uploads/2020/03/Frijol-Ayocote-Morado-3.jpg",
//       cantidad: "10",
//       medida:"Kg"
//     },
//     {
//       id: 6046,
//       nombre: " Frijol rosa crema ",
//       descripcion: "Suave textura y sabor delicado. Lo puedes guisar: De preferencia en sopa o en crema de frijol.",
//       portada: "https://thumbs.dreamstime.com/b/spotted-beans-23800469.jpg",
//       cantidad: "7",
//       medida:"Kg"
//     },
//     {
//       id: 2064,
//       nombre: " Frijol Sangre de toro ",
//       descripcion: "Es una variedad de crecimiento arbustivo de semilla alargada, redonda y cicatriz embrionaria central.",
//       portada: "https://img.freepik.com/foto-gratis/primer-frijol-rojo-fondo-vista-superior_36140-123.jpg?size=626&ext=jpg",
//       cantidad: "500",
//       medida:"g"
//     },
//     {
//       id: 1226,
//       nombre: " Frijol San Francisco ",
//       descripcion: "En boca es tierno y de textura carnosa. Proviene de algunas comunidades de Puebla e Hidalgo",
//       portada: "https://gourmetdemexico.com.mx/wp-content/uploads/2017/09/frijol-sanfrancisco-gourmet.jpg",
//       cantidad: "800",
//       medida:"g"
//     },
//     {
//       id: 7726,
//       nombre: " Frijol Vaquita ",
//       descripcion: "Es una de las variedades más exóticas y hermosas entre las leguminosas de nuestro país. Sus manchas pueden ser negras, rojas, cafés o incluso moradas.",
//       portada: "https://gourmetdemexico.com.mx/wp-content/uploads/2017/09/frijol-vaquita.jpg",
//       cantidad: "550",
//       medida:"g"
//     },
//     {
//       id: 6610,
//       nombre: " Frijol negro ",
//       descripcion: "Se entiendo por frijol negro los grano quepresentan dicho color en una tonalidaduniforme, este no puede contener más de 5%de frijol de otras clases. Son una excelentefuente de proteínas y fibra.",
//       portada: "https://www.inforural.com.mx/wp-content/uploads/2019/07/frijol-negro21-310x165.jpg",
//       cantidad: "7",
//       medida:"Kg"
//     },
//     {
//       id: 9611,
//       nombre: " Frijol  Bayo  ",
//       descripcion: "Variedad de frijol que puede tener tonos desde café claro hasta café oscuro.",
//       portada: "https://cdn.shopify.com/s/files/1/0080/1076/0255/products/frijol_bayo_1.jpg?v=1554192125",
//       cantidad: "17",
//       medida:"Kg"
//     },
//     {
//       id: 5520,
//       nombre: " Limón verde o amargo  ",
//       descripcion: "El limón verde se origina de la especie Citrus latifolia y pertenece a la familia de las Nutriceae. En México, las primeras huertas de limón mexicano se establecieron en Michoacán en 1912.",
//       portada: "https://www.inforural.com.mx/wp-content/uploads/2012/08/arton10530.jpg",
//       cantidad: "7",
//       medida:"Kg"
//     },
//     {
//       id: 2012,
//       nombre: " Limón Amarillo ",
//       descripcion: "El fruto, el limón es de color amarillo pálido. Es de forma ovoide con un pezón en la punta, de unos 10 centímetros de largo, con una pulpa jugosa dividida en gajos (de 8 a 14), de sabor ácido.",
//       portada: "https://arbolesfrutales.org/wp-content/uploads/2014/10/limones.jpg",
//       cantidad: "5",
//       medida:"Kg"
//     },
//     {
//       id: 2026,
//       nombre: " Tomate Cherry ",
//       descripcion: "El tomate cereza también denominado tomate pasa, tomate uva o tomate cherry es un fruto pequeño y redondeado que se cree es una mezcla genética entre Solanum pimpinellifolium y tomates de jardín dom ",
//       portada: "https://i.blogs.es/35edfc/1366_2000-8-/450_1000.jpg",
//       cantidad: "4",
//       medida:"Kg"
//     },

   /*
   {
    id: 1234,
    Nombre: "Arándano",
    Descripción: "El arándano es un fruto que crece silvestre en zonas frescas del hemisferio norte. Es una baya globosa de color negro azulado que mide unos 6mm de diámetro. Se consume sobre todo en mermeladas, tartas o como acompañamiento de diversos platos. Es un alimento rico en vitaminas que además aporta pocas calorías al organismo",
    Portada: " https://es.wikipedia.org/wiki/Ar%C3%A1ndano_rojo#/media/Archivo:Cranberries20101210.jpg ",
    Cantidad: "20",
    Medida: "Kilos"
    },
    {
    id: 4321,
    Nombre: "Frambuesa",
    Descripción: "La frambuesa es el fruto del frambueso o sangüeso. Esta planta crece silvestre en diversas regiones de Europa, aunque también se cultiva, siendo su cultivo bastante importante. Es una fruta pequeña, cónica o redondeada con una piel aterciopelada de color rojo o amarillento. La pulpa es muy aromática y su sabor es agridulce. Se puede consumir cruda o emplearse para elaborar mermeladas, jaleas y bebidas. También se puede encontrar congelada",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4479374_640px.jpg?1518780769  ",
    Cantidad: "10",
    Medida: "kg"
    },
    {
    Id: 1122,
    Nombre: "Grosella Espinosa",
    Descripción:" La grosella espinosa o también denominada agrazón o uva espina es una baya que según la especie puede ser blanca, amarilla, roja o verde, con una piel espinosa, vellosa o suave. Las diferentes variedades se diferencian entre sí por la época de maduración, sabor, color, tamaño, forma del fruto y modo de consumo. Predomina el fruto amarillento con piel vellosa, aunque existen también variedades de piel rojiza, verde oscura y verde pálida blancuzca",
    Portada: " https://www.ecured.cu/Grosella_espinosa_india#/media/File:16849194-grosella-espinosa-india-con-vitamina-c.jpg ",
    Cantidad: "12",
    Medida: "kg"
    },
    {
    Id: 2233,
    Nombre: "Grosella Negra",
    Descripción:" La grosella negra es una baya de pulpa translúcida con tonos rojos o verdes y de sabor agridulce. El fruto es pequeño, de color azul negro y esférico con un sabor intenso cuando está completamente maduro. Esta baya está recubierta de vello y su pulpa contiene muchas semillas pequeñas. Estos frutos no son sueltos, sino que crecen en racimos.",
    Portada:"https://www.beaunefrancia.com/sites/ot-beaune/files/styles/gallery_lightbox/public/content/images/img04917.jpg?itok=ybkeRKUr ",
    Cantidad: "90",
    Medida: "kg"
    },
    {
    Id: 3344,
    Nombre: "Grosella Roja",
    Descripción:" Las grosellas rojas son unas pequeñas frutas redondas de color rojo. Aunque se pueden consumir crudas, su sabor agridulce las hace indicadas para la elaboración de mermeladas, batidos, helados, etc. Son ricas en vitaminas y minerales",
    Portada:" https://www.ecured.cu/Grosella_roja#/media/File:Grosellas_roja.jpg ",
    Cantidad: "90",
    Medida: "kg"
    },
    {
    Id: 4455,
    Nombre: "Zarzamora",
    Descripción:" La zarzamora es una planta generalmente silvestre de la que se aprovechan sus frutos, unas bayas pequeñas de color negro muy aromáticas y algo ácidas. Se consumen crudas, aunque también se emplean en la elaboración de compotas, macedonias, tartas, etc. Son ricas en vitaminas y minerales. Además, aportan fibra y contienen pocas calorías.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4479372_640px.jpg?1518780769 ",
    Cantidad: "7000",
    Medida: "kg"
    },
    {
    Id: 5566,
    Nombre: "Pomelo",
    Descripción:" El pomelo es una fruta cítrica que pertenece a la familia de las rutáceas y que procede del árbol Citrus paradisi. De unos 15 centímetros de tamaño, está recubierta con una cáscara gruesa y carnosa, amarilla o rosácea. No se conoce su procedencia, pero como en el resto de cítricos, se cree que puede venir de Asia.",
    Portada:" http://www.saludalavista.com/wp-content/woo_custom/1199-pomelo.jpg ",
    Cantidad: "70",
    Medida: "kg"
    },
    {
    Id: 6677,
    Nombre: "Carambola",
    Descripción:" La carambola, o fruta de estrella con sus cinco picos, es una fruta verde-amarillenta, de textura cerosa, que se origina en las tierras bochornosas de los trópicos de Sri Lanka. La fruta crece en un pequeño y tupido árbol perenne, primero vestido con pequeños racimos de flores acampanadas color lila que se convierten en las largas frutas.",
    Portada: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Carambola_Starfruit.jpg ",
    Cantidad: "80",
    Medida: "kg"
    },
    {
    Id: 7788,
    Nombre: "Chirimoya",
    Descripción:" La chirimoya es una fruta tropical de pulpa refrescante y muy aromática, con sabor dulce ligeramente ácido que recuerda a una mezcla de piña y plátano, o al sabor de la pera. Es muy fácil de comer, se parte en dos mitades y se toma la pulpa con una cuchara, evitando las semillas. Procede de un árbol que le da nombre, el chirimoyo.",
    Portada:" https://consejonutricion.files.wordpress.com/2012/10/placer-blanco-chirimoya-fortalece-corazon_1_638200.jpg ",
    Cantidad: "1190",
    Medida: "kg"

    },
    {
    Id: 8899,
    Nombre: "Coco",
    Descripción:" El coco es un fruto redondo y alargado de carne blanca, fibrosa y aceitosa cubierta por una cáscara dura, de color marrón y peluda. El coco tiene una envuelta fibrosa, una carne blanca dentro que recibe el nombre de copra y, cuando el fruto está aún tierno, un líquido lechoso que se suele usar como alimento básico de algunas zonas.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4479392_640px.jpg?1518780769 ",
    Cantidad: "9000",
    Medida: "kg"
    },
    {
    Id: 9900,
    Nombre: "Dátil",
    Descripción:" El dátil es una fruta desecada natural, no se somete a un proceso de desecación, sino que se seca al sol en el mismo árbol y después se recolecta, escribe Maribel Arias García, dietista-nutricionista del equipo Alimmenta en la web del colectivo.",
    Portada:" https://upload.wikimedia.org/wikipedia/commons/1/1d/Mata_de_Datil.JPG ",
    Cantidad: "10000",
    Medida: "kg"
    },
    {
    Id: 9099,
    Nombre: "Kiwi",
    Descripción:" El kiwi es un fruto de forma ovoide, de tamaño variable y recubierto de una piel fina de color marrón, ligeramente vellosa. Puede tener de 4 a 7,5cm de longitud por 3,5 a 5cm de anchura y el peso varía de 30-150g en función de la variedad, las condiciones climáticas y del sistema de cultivo. La pulpa puede ser de color verde de distinta tonalidad según la variedad, tierna, jugosa y de sabor agridulce. Presenta numerosas y pequeñas semillas negras comestibles. El color de la pulpa y el sabor delicado de la misma que recuerda en parte a la uva, a la fresa y a la piña, lo hacen muy agradable.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4479412_640px.jpg?1518780769 ",
    Cantidad: "11000",
    Medida: "kg"
    },
    {
    Id: 9988,
    Nombre: "Litchi",
    Descripción:" El litchi es un fruto oriental redondeado, de unos 2,5-4cm de diámetro. Es de color rojo con la piel rugosa. La pulpa es blanca, dulce y jugosa. Se suele consumir crudo, aunque en China se combina con la carne y el pescado. También se usa en helados o batidos. Es un alimento que aporta vitaminas y minerales al organismo.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4479381_640px.jpg?1518780769 ",
    Cantidad: "22000",
    Medida: "kg"
    },
    {
    Id: 8877,
    Nombre: "Albaricoque",
    Descripción:" El albaricoque es un fruto similar al melocotón pero mucho más pequeño, de color amarillo pálido o anaranjado con alguna sombra roja. La pulpa no es muy jugosa, tiene cierta textura fibrosa y consistencia harinosa cuando el albaricoque está maduro. Se consume principalmente como fruta fresca, aunque también se utiliza para fabricar algunos derivados como compotas, mermeladas, zumos y los famosos ‘orejones’ que no son más que albaricoques secos. ",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4479361_640px.jpg?1518780769 ",
    Cantidad: "33000",
    Medida: "kg"
    },
    {
    Id:7766,
    Nombre:" Cereza",
    Descripción:" La cereza es un fruto que puede consumirse fresco o utilizarse en la elaboración de tartas, mousses, mermeladas y compotas. Generalmente las cerezas de mayor tamaño son las que tienen mejor textura y sabor. ",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4479375_640px.jpg?1518780769 ",
    Cantidad: "44000",
    Medida: "kg"
    },
    {
    Id: 5544,
    Nombre: "Higo",
    Descripción:" El higo se considera un falso fruto, es un receptáculo que contiene cientos de pequeños frutos que vulgarmente llamamos pepitas. Se utiliza como fruta para consumo en fresco, desecado, como puré para confiterías, en conserva o confitado.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4480075_640px.jpg?1518780769 ",
    Cantidad: "66000",
    Medida: "kg"
    },
    {
    Id: 4433,
    Nombre: "Kaki",
    Descripción:" El kaki es una fruta tropical de color más o menos anaranjado, con la piel lisa y un sabor muy dulce. Se consume como fruta fresca, aunque se puede emplear en pasteles o mermeladas. Es una fuente importante de vitaminas A y C.",
    Portada:" https://es.wikipedia.org/wiki/Caqui#/media/Archivo:Persimmon_0375.jpg.",
    Cantidad: "77000",
    Medida: "kg"
    },
    {
    Id: 3322,
    Nombre: "Melocotón",
    Descripción:" El melocotón es un fruto redondo, coloreado, jugoso y típicamente veraniego. Su producción se extiende a lo largo de los países por lo que podemos disponer de este fruto a lo largo de todo el año.",
    Portada:"https://es.wikipedia.org/wiki/Prunus_persica#/media/Archivo:Illustration_Prunus_persica0.jpg ",
    Cantidad: "88000",
    Medida: "kg"
    },
    {
    Id:2211,
    Nombre:" Nectarina",
    Descripción:" La nectarina es un fruto redondo, con carne jugosa, con hueso, parecido al melocotón. Su piel no es vellosa sino lisa como la de la ciruela y se puede consumir sin pelar o pelado. La época de recolección de la nectarina es durante el mes de mayo en el hemisferio norte, aunque se puede encontrar en los mercados durante todo al año ya que se cultiva en muchos países del mundo.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4479363_640px.jpg?1518780769 ",
    Cantidad: "99000",
    Medida: "kg"
    },
    {
    Id:1112,
    Nombre: "Níspero",
    Descripción:" El níspero es un fruto redondeado de color anaranjado que es apreciado por su carne aromática, dulce y algo ácida. Se suele consumir en crudo, aunque se elaboran diversos preparados como mermeladas, pasteles o zumos. Apenas aporta nutrientes al organismo, aunque contiene potasio en cantidades apreciables y algunas vitaminas.",
    Portada: "https://es.wikipedia.org/wiki/Eriobotrya_japonica#/media/Archivo:Eriobotrya_japonica_SZ97.png ",
    Cantidad: "1100",
    Medida: "kg"
    },
    {
    Id:2223,
    Nombre: "Almendra",
    Descripción:" La almendra es la semilla comestible del fruto del almendro dulce, de color blanco brillante envuelta con una cubierta marrón rojizo. Se consume como fruto seco, frito y/o salado y también se elaboran productos tan conocidos como el turrón y el mazapán.",
    Portada:" https://es.wikipedia.org/wiki/Almendra#/media/Archivo:Mandel_Gr_99.jpg ",
    Cantidad:" 2200",
    Medida: "kg"
    },
    {
    Id:3334,
    Nombre:" Avena",
    Descripción:" Es una planta anual que crece de forma vertical, con el tallo principal liso y erecto que mide de 40 a 180 centímetros de largo. Tiene tallos lisos con panículas de espiguillas en verano y hojas verdes y planas. Dichas panículas de ramitas caídas son inflorescencias de espiguillas colgantes y separadas unas de otras con 2-3 flósculos (flores pequeñas).  Las semillas son color oro pálido.",
    Portada:" https://es.wikipedia.org/wiki/Avena#/media/Archivo:Avena-sativa.jpg ",
    Cantidad: "3300",
    Medida: "kg"
    },
    {
    Id:4445,
    Nombre:" Cacahuate",
    Descripción:" El cacahuete o maní es un fruto seco muy apreciado y popular. Los venden con cáscara o pelados, salados o no y muchas veces tostados Es ingrediente de algunos productos de bollería y con él se elabora la manteca de cacahuete. El cacahuete se conoce familiarmente por otros nombres como el de maní, cachué, alfóncigo de tierra y cacao de tierra. Es un fruto seco muy apreciado y popular.",
    Portada:"https://es.wikipedia.org/wiki/Arachis_hypogaea#/media/Archivo:Arachis_hypogaea_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-163.jpg",
    Cantidad: "4400",
    Medida: "kg"
    },
    {
    Id:5556,
    Nombre:" Castaña",
    Descripción:" La castaña es el fruto del castaño, de forma redondeada y plana, por un lado, normalmente de color marrón brillante por fuera y la pulpa blanco-amarillenta y de sabor dulce. Suelen comerse asadas, aunque hay muchos más usos y formas de presentación en el mercado.",
    Portada:"https://es.wikipedia.org/wiki/Casta%C3%B1a#/media/Archivo:Illustration_Castanea_sativa0.jpg ",
    Cantidad:" 5500",
    Medida: "kg"
    },
    {
    Id:6667,
    Nombre:" Nuez",
    Descripción:" La nuez es el fruto del nogal, de forma redondeada u ovoide, con una cáscara dura y rugosa de color pardo rojiza. La parte comestible de su interior tiene un sabor dulce particular. En el mercado hay nueces descascarilladas, troceadas o molidas y productos elaborados con ellas.",
    Portada:"https://es.wikipedia.org/wiki/Anexo:Nueces_con_valor_culinario#/media/Archivo:Bellota_Encina_Carrasca.jpg ",
    Cantidad: "6600",
    Medida: "kg"
    },
    {
    Id:7778,
    Nombre:" Pacana",
    Descripción:" Es un fruto seco muy similar a la nuez por lo que se conoce como ‘nuez americana’ o ‘Nuez Pecan’. Se consume al natural y se utiliza para elaborar muchos postres.Es una fuente importante de proteínas.",
    Portada:"https://es.wikipedia.org/wiki/Carya_illinoinensis#/media/Archivo:Carya_illinoinensis.jpg",
    Cantidad:" 7700",
    Medida: "kg"
    },
    {
    Id:8889,
    Nombre: "Pistacho",
    Descripción:" El pistacho es un fruto seco de pequeño tamaño, alargado con una cáscara dura, delgada y de color marrón claro. La parte comestible es verde-amarillenta y tierna. Se usan en productos comestibles y hasta en cosméticos, por lo que hay mucha demanda. El pistacho es un fruto de gran categoría y es muy apreciado tanto para su consumo en fresco como para la industria.",
    Portada:"https://es.wikipedia.org/wiki/Pistacia_vera#/media/Archivo:Pistachio_vera.jpg",
    Cantidad:" 8800",
    Medida: "kg"
    },
    {
    Id:9990,
    Nombre:" Alquejenje",
    Descripción:" El physalis o alquejenje (también se la conoce por el nombre de tomatillo o farolillo chino) es una fruta exótica de color naranja con forma de cereza y envuelta en sus propias hojas. Originaria de zonas cálidas de clima tropical de Sudamérica, el alquejenje ya se cultiva en las zonas cálidas de España, porque cada vez son más preciadas sus propiedades nutritivas y antioxidantes, por lo que la OMS recomienda su consumo.",
    Portada:"https://es.wikipedia.org/wiki/Physalis_alkekengi#/media/Archivo:PhysalisAlkekengi-balloon.jpg",
    Cantidad: "9900",
    Medida: "kg"
    },
    {
    Id:6009,
    Nombre:" Chirimoya",
    Descripción:" La chirimoya es un fruto de origen tropical de forma más o menos redondeada y de piel verde reticulada, que se consume por su pulpa blanca, dulce y muy aromática. Se toma principalmente cruda, aunque también se emplea en mermeladas, batidos o helados. Es un alimento rico en vitaminas y minerales.",
    Portada:"https://es.wikipedia.org/wiki/Annona_cherimola#/media/Archivo:Cherimoya_tree_hg.jpg",
    Cantidad: "110",
    Medida: "kg"
    },
    {
    Id:9998,
    Nombre:" Kumquat",
    Descripción:" El kumquat, mejor conocida como naranja enana, es una fruta del género Citrus, perteneciente a la familia de las Rutáceas. Es una especie de baya ovoide, cubierta por una piel anaranjada que, a pesar de ser endurecida, resulta comestible.",
    Portada:"https://st-listas.20minutos.es/images/2014-07/384094/4480127_640px.jpg?1518780769",
    Cantidad:" 220",
    Medida: "kg"
    },
    {
    Id:8887,
    Nombre:" Mangostino",
    Descripción:" Se trata de una fruta con corteza dura y de forma esférica, que adquiere un color entre rojo y púrpura cuando está en su punto óptimo de maduración, volviéndose blanda y fácil de abril. Este fruto tiene un gusto agridulce, parecido a un cítrico.",
    Portada:"https://es.wikipedia.org/wiki/Garcinia_mangostana#/media/Archivo:Mangosteen_scale_v2.jpg",
    Cantidad: "330",
    Medida: "kg"
    },
    {
    Id:7776,
    Nombre: "Maracuya",
    Descripción:" Maracuyá, parcha, parchita y chinola, son los nombres populares de una fruta que se produce en las zonas tropicales de Centro y Suramérica, y que se considera originaria de la región amazónica, muy posiblemente de Brasil.",
    Portada:"https://st-listas.20minutos.es/images/2014-07/384094/4479393_640px.jpg?1518780769",
    Cantidad: "440",
    Medida: "kg"
    },
    {
    Id:6665,
    Nombre: "Pitahaya",
    Descripción:" La fruta del dragón se divide en dos especies principales: la H. triangularis o pitahaya amarilla y la H. ocamposis o pitahaya roja. Cada ejemplar presenta sus propias ventajas e inconvenientes, aunque ambas disfrutan de una gran acogida en lo que a consumo se refiere. La pitahaya roja es mucho más atractiva a la vista gracias a una piel de color rosa intenso, sin embargo, es más frágil y delicada, sobre todo a la hora de transportarla y manejarla durante el mercadeo. En cambio, la pitahaya amarilla ofrece mejores posibilidades comerciales por su resistencia e increíble sabor, pero también es menos perecedera.",
    Portada:"https://es.wikipedia.org/wiki/Pitahaya#/media/Archivo:Yellow_pitaya.jpg",
    Cantidad: "550",
    Medida: "Gramos"
    },
    {
    Id:5554,
    Nombre: "Rambután",
    Descripción:" Es pequeño, de forma ovalada y muy dulce, con cierto parecido a la pulpa de la uva. Tiene un sabor fresco, jugoso y un poco ácido. Su aspecto exterior está formado por una delgada capa alrededor de la pulpa, rodeada de espinas o pelos inofensivos al tacto. Su color es rojo por fuera, blanco en el interior y contiene dentro de la pulpa una semilla venenosa.",
    Portada:"https://es.wikipedia.org/wiki/Nephelium_lappaceum#/media/Archivo:Rambutan.jpg",
    Cantidad: "660",
    Medida: "kg"
    },
    {
    Id:4443,
    Nombre: "Tamarillo",
    Descripción: "También conocido con el nombre de tomate de árbol, el tamarillo es muy similar al tomate pero de forma más ovalada. Se cultiva en zonas tropicales como Colombia y Brasil, pertenece a la familia de las Solanáceas y es muy rico en calcio, magnesio, fósforo, hierro, y vitaminas A y C.",
    Portada:"https://es.wikipedia.org/wiki/Solanum_betaceum#/media/Archivo:Tamarillos.jpg",
    Cantidad: "770",
    Medida: "kg"
    },
    {
    Id:3332,
    Nombre:" Dátil",
    Descripción:" El dátil es le fruto de la palmera datilera. Es una baya de color amarillo dorado o rojo parduzco en la madurez. Su carne es blanda, aromática y de sabor dulce. En su interior posee un hueso alargado con un surco longitudinal.Los dátiles pueden consumirse frescos o secos y constituyen un alimento básico para los habitantes del norte de África y el Cercano Oriente, quienes son los principales productores.",
    Portada:" https://es.wikipedia.org/wiki/D%C3%A1til#/media/Archivo:Owoce_Daktyl.jpg",
    Cantidad: "880",
    Medida: "kg"
    },
    {
    Id:2221,
    Nombre:" Higo seco",
    Descripción:" El higo se considera un falso fruto, es un receptáculo que contiene cientos de pequeños frutos que vulgarmente llamamos pepitas. Se utiliza como fruta para consumo en fresco, desecado, como puré para confiterías, en conserva o confitados.",
    Portada:"https://st-listas.20minutos.es/images/2014-07/384094/4480075_640px.jpg?1518780769",
    Cantidad: "990",
    Medida: "Gramos"
    },
    {
    Id:1110,
    Nombre: "Orejones de albaricoque",
    Descripción: "Los orejones de albaricoque y de melocotón son una buena fuente de betacaroteno precursor de la vitamina A de gran efecto antioxidante, ayudándonos a prevenir las enfermedades degenerativas, las cardiovasculares y el cáncer.",
    Portada:"https://es.wikipedia.org/wiki/Orej%C3%B3n_(alimento)#/media/Archivo:Orejones.jpg",
    Cantidad: "10100",
    Medida: "kg"
    },
    {
    Id:1029,
    Nombre:" Orejones de melocotón",
    Descripción:" En el caso de los orejones de melocotón, son una muy buena fuente de potasio, de calcio, de hierro, de provitamina A (que se convierte en vitamina A en el organismo) y vitamina B3 (o niacina)",
    Portada:"https://es.wikipedia.org/wiki/Fruta_seca#/media/Archivo:Dry_fruit.jpg",
    Cantidad: "11110",
    Medida: "kg"
    },
    {
    Id:3847,
    Nombre:" Uva pasa",
    Descripción: "Las uvas pasas, como su nombre indica, son uvas pasadas, secas, deshidratadas, ya que simplemente se dejan a secar hasta que se queda un fruto dulce y de color oscuro.",
    Portada:"https://es.wikipedia.org/wiki/Pasa#/media/Archivo:Sunmaid-Raisin-Pile.jpg",
    Cantidad: "12120",
    Medida: "kg"
    },
    {
    Id:5665,
    Nombre: "Pepino cohombro",
    Descripción:" El pepino es una hortaliza de verano, de forma alargada y de unos 15cm de largo. Su piel es de color verde que se aclara hasta volverse amarilla en la madurez. Actualmente puede encontrarse en los mercados europeos a lo largo de todo el año. Pueden adquirirse pepinos frescos o encurtidos en vinagreta.",
    Portada:"https://es.wikipedia.org/wiki/Cucumis_sativus#/media/Archivo:Illustration_Cucumis_sativus0.jpg",
    Cantidad: "13130",
    Medida: "kg"
    },
    {
    id:1111,
    nombre: "Cilantro",
    descripción:" El cilantro pertenece al grupo familiar de las umbelíferas o apiáceas. Su tallo puede medir hasta ochenta centímetros de altura, presentando hojas filiformes en su parte superior y dentadas en su parte inferior. ... Cuando está fresco, el cilantro no se cocina ya que el calor modifica su sabor y su fragancia.",
    portada:"https://es.wikipedia.org/wiki/Coriandrum_sativum#/media/Archivo:Coriandrum_sativum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-193.jpg",
    cantidad: "14140",
    medida: "kg"
    },
    {
    Id:2222,
    Nombre: "Ají",
    Descripción: "El Ají o también llamado chile en México y otros países, es el fruto de diversas especies del género Capsicum. Este se caracteriza por ser altamente oxidante, de bajo aporte calórico y muy variable en cuanto a su pungencia (picor).",
    Portada:"https://es.wikipedia.org/wiki/Capsicum#/media/Archivo:Illustration_Capsicum_annuum0.jpg",
    Cantidad: "15150",
    Medida: "kg"
    },
    {
    Id:3333,
    Nombre:" Moras",
    Descripción:" El moral o morera es un árbol del cual se obtienen frutos conocidos como moras. Estas moras, además de ser sabrosas y nutritivas, poseen propiedades terapéuticas que permiten ser aprovechadas para diferentes usos medicinales.Las moras también conocidas con el nombre científico Morus nigra, son frutas originarias de Europa y Asia.Estas además de tener características organolépticas especiales, contienen propiedades terapéuticas que les permiten ser utilizadas con diferentes usos medicinales.",
    Portada:"https://es.wikipedia.org/wiki/Mora_(fruta)#/media/Archivo:Black_Butte_blackberry.jpg",
    Cantidad: "1616",
    Medida: "kg"
    },
    {
    Id:5555,
    Nombre: "Cafeto",
    Descripción:" El cafeto es un arbusto o árbol pequeño, perennifolio, de fuste recto que puede alcanzar los 10 metros en estado silvestre; en los cultivos se los mantiene normalmente en tamaño más reducido, alrededor de 3 metros. Las hojas son elípticas, oscuras y coriáceas.",
    Portada:"https://es.wikipedia.org/wiki/Coffea#/media/Archivo:Diagram_of_Coffea_arabica.jpg",
    Cantidad:" 1818",
    Medida: "kg"
    },
    {
    Id:7777,
    Nombre: "Algodón",
    Descripción:" Es una angiosperma, planta dicotiledónea, que pertenece a la familia de las Malvaceae. Es nativo de Asia y África. Exactamente como ocurre con los tomates, pimientos y otras plantas, el algodón es nativamente una planta perenne, pero hoy en día se cultiva anual.",
    Portada:"https://es.wikipedia.org/wiki/Algod%C3%B3n#/media/Archivo:CottonPlant.JPG",
    Cantidad: "2020",
    Medida: "kg"
    },
    {
    Id:8888,
    Nombre: "Soja",
    Descripción:" Glycine max, llamada popularmente soja, es una especie de la familia Fabaceae, o familia de las leguminosas. Se cultiva por sus semillas, de medio contenido en aceite (véase planta oleaginosa) y alto de proteína.",
    Portada:"https://es.wikipedia.org/wiki/Glycine_max#/media/Archivo:Soybean.USDA.jpg",
    Cantidad: "2121",
    Medida:" kg"
    },
    {
    Id:9999,
    Nombre: "Adelfa",
    Descripción:" La adelfa, conocida científicamente como Nerium oleander, es un arbusto que puede llegar a alcanzar los 6 metros de altura. Se trata de una especie perennifolia que se caracteriza por contar con un follaje siempre verde durante todo el año. Se trata de un árbol de crecimiento rápido y densa ramificación.",
    Portada:"https://es.wikipedia.org/wiki/Nerium_oleander#/media/Archivo:Nerium_oleander_flowers_leaves.jpg",
    Cantidad: "2222",
    Medida: "kg"
    },
    {
    Id:7531,
    Nombre:" Culantrillo",
    Descripción:" Es un helecho muy popular debido a su pequeño tamaño y a la frescura que aportan sus hojas. El culantrillo también es conocido por el nombre de hierba de las fuentes y la razón de este nombre residen en que de forma natural suele crecer junto a las fuentes. ",
    Portada: "https://es.wikipedia.org/wiki/Adiantum_capillus-veneris#/media/Archivo:Adiantum_capillus-veneris_(USDA).jpg",
    Cantidad:" 2525",
    Medida: "kg"
    },
    {
    Id:6600,
    Nombre: "Cúrcuma",
    Descripción: "La cúrcuma (Cúrcuma longa L.) es una planta de la Familia Zingiberaceae originaria del sudeste asiático. Es conocida mundialmente como especia aromática, utilizada en la gastronomía asiática para dar un toque de color y sabor picante a los platos.",
    Portada:"https://es.wikipedia.org/wiki/Curcuma_longa#/media/Archivo:Curcuma_longa_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-199.jpg",
    Cantidad: "2626",
    Medida: "kg"
    },
    {
    Id:9989,
    Nombre:" Feijoa",
    Descripción:" Feijoa sellowiana), también denominado guayabo, feijoa, guayaba o guayabo del Brasil, es una especie botánica arbustiva, ramificada, que alcanza 4 m de altura. Es originario de las tierras altas del sur de Brasil, Argentina y Uruguay. Resiste el frío, aunque no por debajo de los -12 °C.",
    Portada:"https://es.wikipedia.org/wiki/Acca_sellowiana#/media/Archivo:Acca_sellowiana_Fruit_MHNT_Fronton.jpg",
    Cantidad: "2727",
    Medida: "kg"
    },
    {
    Id: 1005,
    Nombre: "Durián",
    Descripción:" La fruta más apestosa del mundo se llama durián. Tiene un gusto afrutado, una textura con cierta cremosidad y un final entre amargo y fermentado. Está cubierto de espinas y porta un tamaño similar al de una sandía. ... El Durio Ziberthinus es una fruta exótica originaria de Asia.",
    Portada:"https://es.wikipedia.org/wiki/Durio_zibethinus#/media/Archivo:Durio_Zibethinus_Van_Nooten.jpg",
    Cantidad: "2828",
    Medida: "kg"
    },
    {
    Id:2005,
    Nombre: "Pomelo",
    Descripción: "El pomelo es un fruto en forma de globo ligeramente achatado, de corteza lisa o rugosa, de color amarillo pálido o rojizo. Se consume principalmente como fruta fresca, y posee numerosas cualidades digestivas, estomacales y antisépticas.",
    Portada:"https://es.wikipedia.org/wiki/Citrus_%C3%97_paradisi#/media/Archivo:Pummelo_or_Pamplemousse_(Citrus_maxima_(Burm.)_Merr.);_flowe_Wellcome_V0042686.jpg",
    Cantidad: "2929",
    Medida: "kg"
    },
    {
    Id:3005,
    Nombre:" Chile Poblano",
    Descripción:" El chile poblano (fresco) o chile ancho (seco) es una variedad del chile Capsicum annuum. Es muy apreciado en la gastronomía mexicana, donde se usa en todo tipo de recetas, como en los populares chiles rellenos.",
    Portada:"https://es.wikipedia.org/wiki/Chile_poblano#/media/Archivo:Poblano_Pepper.jpg",
    Cantidad:" 3030",
    Medida: "kg"
    },
    {
    Id:4005,
    Nombre: "Nectarinas",
    Descripción:"  La nectarina es un fruto redondo, con carne jugosa, con hueso, parecido al melocotón. ... La nectarina es un fruto redondo, con carne jugosa, con hueso, parecido al melocotón. Su piel no es vellosa sino lisa como la de la ciruela y se puede consumir sin pelar o pelado.",
    Portada: "https://es.wiktionary.org/wiki/nectarina#/media/Archivo:Nectarine_CDC.jpg",
    Cantidad: "3131",
    Medida: "kg"
    },
    {
    Id:5005,
    Nombre:" Zapote",
    Descripción:" El zapote es una fruta tropical consumida en México y América Central, según la variedad su pulpa puede ser amarilla, blanca, negra o rojiza, el fruto puede ser redondo, ovoide o elíptico, a menudo termina en punta en el ápice.",
    Portada:"https://es.wikipedia.org/wiki/Zapote_(fruta)#/media/Archivo:Zapote_y_pl%C3%A1tano_en_Iquitos.jpg",
    Cantidad: "3232",
    Medida: "kg"
    },
    {
    Id:6005,
    Nombre: "Fruta Sharon",
    Descripción:" El caqui es una fruta originaria de China que tiene una piel fina y lisa de color naranja brillante, con pulpa de color naranja. Su corona es verde y medio deshidratada y ocasionalmente produce 2-8 semillas no comestibles. ... Caquis Hachiya, que solo se comen maduros y el.",
    Portada: "https://es.wikipedia.org/wiki/Caqui#/media/Archivo:Persimmon_0375.jpg",
    Cantidad: "3333",
    Medida: "kg"
    },
    {
    id: 5005,
    Nombre:" Kiwi amarillo",
    Descripción: "El kiwi amarillo es un fruto de forma ovoide, de tamaño variable y recubierto de una piel fina de color marrón, ligeramente vellosa. Puede tener de 4 a 7,5cm de longitud por 3,5 a 5cm de anchura y el peso varía de 30-150g en función de la variedad, las condiciones climáticas y del sistema de cultivo. ",
    Portada: "https://st-listas.20minutos.es/images/2014-07/384094/4480073_640px.jpg?1518780769",
    Cantidad: "3434",
    Medida: "kg"
    },
    {
    Id:8005,
    Nombre:" Albaricoque",
    Descripción:" Su pulpa es amarillenta y su sabor va del dulce al agridulce. Es redondeado, y posee un surco que lo divide longitudinalmente a la mitad. Presenta una piel suave y aterciopelada, cuyo color varía entre rojo, blanco, amarillo y anaranjado.",
    Portada: "https://st-listas.20minutos.es/images/2014-07/384094/4479361_640px.jpg?1518780769",
    Cantidad: "3535",
    Medida: "kg"
    },
    {
    Id:9005,
    Nombre:" Rambutan",
    Descripción:" Es un una pequeña fruta de la familia de las Sapindaceas originaria de Malasia. Su principal característica es su aspecto piloso, ya que su cáscara aparece cubierta de espinas que adquieren un tono rojizo cuando el fruto está maduro.",
    Portada: "https://st-listas.20minutos.es/images/2014-07/384094/4480124_640px.jpg?1518780769",
    Cantidad: "10",
    Medida: "kg"
    },
    {
    Id:1102,
    Nombre: "Uchuva",
    Descripción:" La uchuva es una fruta semiácida, redonda, amarilla, dulce y pequeña (mide entre 1,25 y 2 cm de diámetro), y viene envuelta en una cáscara protectora. A la uchuva se le considera una fruta exótica, se utiliza para preparar helados, yogurt, glaseados y "chutneys".",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4480123_640px.jpg?1518780769",
    Cantidad: "20",
    Medida: "kg"
    },
    {
    Id:6103,
    Nombre: "Pera Red Bartlett",
    Descripción:" Pera: Red Bartlett. ... Más conocida en otras regiones del mundo como Max Red Bartlett, fue descubierta como una mutación gemaria de Williams, en 1938, en el estado de Washington, USA. Es una variedad precoz de producción moderada, a veces es necesario realizar un raleo para evitar la alternancia.",
    Portada: "https://st-listas.20minutos.es/images/2014-07/384094/4478857_640px.jpg?1518780769",
    Cantidad: "30",
    Medida: "kg"
    },
    {
    Id:5104,
    Nombre:" Pasas",
    Descripción: "Como su nombre lo indica son uvas pasadas, deshidratadas y secas; el resultado es el fruto dulce de color oscuro; conserva todas las propiedades de la uva natural, sin embargo muchas personas no la consumen.",
    Portada: "https://st-listas.20minutos.es/images/2014-07/384094/4479378_640px.jpg?1518780769",
    Cantidad: "40",
    Medida: "kg"
    },
    {
    Id:2105,
    Nombre: "Caimito",
    Descripción:" El caimito (Chrysophyllum cainito) es un árbol tropical de la familia Sapotaceae, originario de las áreas de baja elevación de América Central y del Caribe. Crece rápidamente y puede llegar a una altura de veinte metros. ... También se le conoce por el nombre de achras caimito.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4480126_640px.jpg?1518780769",
    Cantidad: "50",
    Medida: "kg"
    },
    {
    Id:2106,
    Nombre:" Kiwano",
    Descripción:" Kiwano. Fruto comestible de forma ovalada, con una piel gruesa que lo cubre de color amarillo o naranja. La familia de este fruto incluye numerosas y variadas especies, generalmente grandes y de corteza muy dura, como la sandía y el melón. Es en realidad un fruto silvestre, muy aromático y sabroso.",
    Portada: "https://st-listas.20minutos.es/images/2014-07/384094/4480125_640px.jpg?1518780769",
    Cantidad: "60",
    Medida: "kg"
    },
    {
    Id:7107,
    Nombre:" Noni",
    Descripción:" Morinda citrifolia, llamada comúnmente noni, guanábana cimarrona, fruta del diablo, fruta del paraiso o mora de la India,  es una planta arbórea o arbustiva de la familia de las rubiáceas; originaria del sureste asiático, ha sido introducida a la India, la Polinesia y Panamá.",
    Portada: "https://st-listas.20minutos.es/images/2014-07/384094/4479399_640px.jpg?1518780769",
    Cantidad: "70",
    Medida: "kg"
    },
    {
    Id:1108,
    Nombre: "Darian",
    Descripción:" El durián crece en los árboles conocidos como durio y se encuentra presente en todo el sudeste asiático, aunque es una fruta nativa de Indonesia, Malasia y Brunei. Es una fruta fácil de reconocer, no sólo por su intenso olor, sino por su aspecto.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4480120_640px.jpg?1518780769",
    Cantidad: "80",
    Medida: "kg"
    },
    {
    Id:5109,
    Nombre: "Naranjilla",
    Descripción:" La naranjilla (Solanum quitoense Lam) es una planta arbustiva, perteneciente a la familia solanácea, esta planta se caracteriza por presentar frutos comestibles, redondos de color naranja.",
    Portada: "https://st-listas.20minutos.es/images/2014-07/384094/4480117_640px.jpg?1518780769",
    Cantidad: "90",
    Medida: "kg"
    },
    {
    Id:2200,
    Nombre: "Plátano Tabasco",
    Descripción:" Tabasco: son de tamaño mediano y de sabor muy dulce. Es rico en fósforo, zinc y calcio. Es el más conocido entre la variedad de los plátanos y se pueden disfrutar con crema, mermelada, en postres y malteadas.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4479366_640px.jpg?1518780769",
    Cantidad: "100",
    Medida: "kg"
    },
    {
    Id:9100,
    Nombre: "Uva Blanca",
    Descripción:" La uva es una fruta que crece en racimos apretados. Su pulpa es blanca o púrpura y de sabor dulce. Se consume como fruta fresca o zumo, aunque su utilidad principal es la obtención de vinos. ... La piel puede ser verdosa, amarillenta o purpúrea, y la pulpa es jugosa y dulce, conteniendo varias semillas o pepitas.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4479388_640px.jpg?1518780769 ",
    Cantidad: "110",
    Medida: "kg"
    },
    {
    Id:3300,
    Nombre: "Mango Paraíso",
    Descripción:" Este tipo de mango fue el resultado de la polinización cruzada de varias variedades (incluyendo una variedad india) en la región de Soconusco, al sur de México, en el estado de Chiapas, en la frontera con Guatemala. Fueron nombrados por el cultivador Ataúlfo Morales Gordillo.",
    Portada: "https://st-listas.20minutos.es/images/2014-07/384094/4479398_640px.jpg?1518780769",
    Cantidad: "120",
    Medida: "kg"
    },
    {
    Id:4400,
    Nombre: "Uva Roja",
    Descripción:" La uva es el fruto que se obtiene de la vid. Se trata de una baya jugosa, de forma redondeada, que crece formando racimos y que se emplea de distintas maneras.",
    Portada: "https://st-listas.20minutos.es/images/2014-07/384094/4479386_640px.jpg?1518780769",
    Cantidad: "130",
    Medida: "kg"
    },
    {
    Id:5000,
    Nombre: "Limón",
    Descripción:" El limón es una fruta cítrica, caracterizada por un fuerte sabor ácido, tiene forma esférica y se encuentra revestido por una concha gruesa, lisa, de color verde intenso, su interior es de color amarillo, allí el jugo se distribuye en el interior de pequeñas vesículas que se agrupan formando gajos.",
    Portada: "https://st-listas.20minutos.es/images/2014-07/384094/4479410_640px.jpg?1518780769",
    Cantidad: "140",
    Medida: "kg"
    },
    {
    Id:6600,
    Nombre:" Manzana Gray Smith",
    Descripción: "Fruto verde con lenticelas blancas, características de la variedad, con la pulpa blanca con textura consistente, firme y crujiente. De sabor altamente acidular, es redonda ligeramente alargada y simétrica, con pedúnculo corto. De calibre medio-alto.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4478852_640px.jpg?1518780769",
    Cantidad: "150",
    Medida: "kg"
    },
    {
    Id:7700,
    Nombre: "Aguacate",
    Descripción: "Aguacate es el nombre del árbol y el fruto, y es una palabra que proviene del náhuatl ahuacatl. En efecto, esta especie es originaria de América, pero en el presente el gusto por el sabor de su fruto es mundial. ... Se le conoce también como palta, avocado, abacate y cura.",
    Portada: "https://st-listas.20minutos.es/images/2014-07/384094/4479400_640px.jpg?1518780769",
    Medida: "kg"
    },
    {
    Id:0900,
    Nombre:" Manzana Royal Gala",
    Descripción: "La Royal Gala es una manzana de tamaño pequeño a medio con un sabor dulce, ideal para tartas, salsas y ensaladas. También muy rica como merienda o tentempié. Se caracteriza por un tono rojo intenso de piel, el color varía de amarillo a casi naranja con rayas de color naranja intenso sobre un fondo amarillo verdoso.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4478853_640px.jpg?1518780769",
    Cantidad: "190",
    Medida: "kg"
    },
    {
    Id:1213,
    Nombre: "Ciruela Roja",
    Descripción: "La ciruela es una fruta de hueso, redonda o alargada que puede ser de color amarillo, verde, rojo o lila. En general es muy nutritiva y rica en vitaminas, destacando la vitamina C. Según su contenido en agua es más o menos jugosa. Las ciruelas pasas o deshidratadas se conservan más tiempo y son muy dulces.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4479365_640px.jpg?1518780769 ",
    Cantidad: "200",
    Medida: "kg"
    },
    {
    Id:1214,
    Nombre: "Uva Azul",
    Descripción:" La uva Azul es una fruta obtenida de la vid. Las uvas vienen en racimos, son pequeñas y dulces.",
    Portada: "https://st-listas.20minutos.es/images/2014-07/384094/4479391_640px.jpg?1518780769",
    Cantidad: "300",
    Medida:" Gramos"
    },
    {
    Id:1215,
    Nombre: "Pera Anjou",
    Descripción: "El d'Anjou se considera una pera mediana a grande, típicamente alrededor de 270–285 gramos, 85 mm de altura y 80 mm de diámetro. Tiene una base ancha, globular, tallo corto y piel delgada con muchas lenticelas notables.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4478855_640px.jpg?1518780769",
    Cantidad:" 400",
    Medida: "kg"
    },
    {
    Id:1216,
    Nombre: "Caña de 	Azúcar",
    Descripción: "La caña de azúcar es una planta herbácea perenne que forma parte de la familia de las gramíneas; por lo tanto, está emparentada con el arroz, el maíz, el sorgo, la avena y el bambú.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4479408_640px.jpg?1518780769",
    Cantidad: "500",
    Medida: "kg"
    },
    {
    Id:1217,
    Nombre: "Guaya",
    Descripción: "La guaya (Melicoccus bijugatus) también conocida como maco, mamoncillo, papamundo y quenepa procede de la zona tropical de América, principalmente de Colombia y México. Se trata de una fruta de sabor agridulce, redonda y pequeña, tiene entre 2 y 4 centímetros de diámetro, de cáscara verde delgada, y pulpa anaranjada.",
    Portada: "https://st-listas.20minutos.es/images/2014-07/384094/4479404_640px.jpg?1518780769",
    Cantidad: "600",
    Medida: "kg"
    },
    {
    Id:1218,
    Nombre: "Plátano Macho",
    Descripción:" El plátano macho es originario de Asia. Crece de manera natural desde la India hasta China. Se introdujo en África y ahora ya se cultiva en zonas tropicales y subtropicales de América Latina. Es la planta herbácea perenne más alta del mundo y puede llegar a medir unos quince metros.",
    Portada: "https://st-listas.20minutos.es/images/2014-07/384094/4479367_640px.jpg?1518780769",
    Cantidad: "700",
    Medida: "kg"
    },
    {
    Id:1219,
    Nombre: "Ciruela Negra",
    Descripción: "Ciruela negra. Prunus domestica, el ciruelo europeo y sus múltiples variedades/cultivares, es una especie de pequeño árbol perteneciente a la familia de las rosáceas. ... Árbol de hasta 7(10) m, caducifolio e inerme con ramillas glabrescentes, en general rojizas y brillantes.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4479364_640px.jpg?1518780769",
    Cantidad: "800",
    Medida: "kg"
    },
    {
    Id:1220,
    Nombre: "Toronja o Pomelo",
    Descripción:" El pomelo es un fruto en forma de globo ligeramente achatado, de corteza lisa o rugosa, de color amarillo pálido o rojizo. ... En realidad la toronja, Citrus Grandis, es otro fruto cítrico diferente al pomelo, cultivado exclusivamente en climas tropicales y casi no tiene importancia en el comercio mundial.",
    Portada: "https://st-listas.20minutos.es/images/2014-07/384094/4480118_640px.jpg?1518780769",
    Cantidad: "900",
    Medida: "kg"
    },
    {
    Id:1221,
    Nombre: "Mara cuya Amarillo",
    Descripción: "Maracuyá amarillo (Passiflora edulis f. flavicarpa). Es una planta trepadora de la familia de las Passifloráceas, originaria en su forma morada de Brasil, la forma amarilla derivó de la morada en Australia de donde volvió a América.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4479395_640px.jpg?1518780769",
    Cantidad: "1000",
    Medida: "kg"
    },
    {
    Id:1222,
    Nombre:" Melón chino",
    Descripción: "El melón chino es una fruta globosa, redonda o alargada, de 20 a 30cm de largo y hasta 2kg de peso. La corteza surcada o reticulada puede ser de color amarillo claro, verde o combinaciones de ambos según la variedad, la pulpa es aromática, jugosa y dulce, puede ser blanca o blanca verdosa, amarilla y anaranjada.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4479360_640px.jpg?1518780769",
    Cantidad: "1100",
    Medida: "kg"
    },
    {
    Id:1223,
    Nombre: "Guayabas Silvestres",
    Descripción:" El guayabo, y su fruto, la guayaba (palabra de origen arahuaca, siendo su nombre científico Psidium guajava), es una especie de pequeño árbol perteneciente a la familia de las mirtáceas. Es un arbusto o árbol pequeño natural de América tropical que se ha asilvestrado en otras zonas tropicales del planeta.",
    Portada: "https://st-listas.20minutos.es/images/2014-07/384094/4479406_640px.jpg?1518780769",
    Cantidad: "1200",
    Medida: "kg"
    },
    {
    Id:1224,
    Nombre: "Fruta estrella o carambola",
    Descripción: "Es también llamada la fruta estrella, debido a su forma estrellada al cortarla de forma transversa. Su piel es fina, comestible, de un amarillo claro que se transforma en amarillo dorado cuando la fruta está madura.",
    Portada: "https://st-listas.20minutos.es/images/2014-07/384094/4480122_640px.jpg?1518780769",
    Cantidad: "1300",
    Medida: "kg"
    },
    {
    Id:1225,
    Nombre:" Uva Rosada",
    Descripción: "La uva es una fruta obtenida de la vid. Las uvas vienen en racimos, son pequeñas y dulces. Se comen frescas y se utilizan para producir agraz, mosto, vino, brandy, vinagre y pisco. Crecen agrupadas en racimos de entre 6 y 300 uvas. Pueden ser negras, moradas, amarillas, doradas, púrpura, rosadas.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4479389_640px.jpg?1518780769 ",
    Cantidad: "1400",
    Medida: "kg"
    },
    {
    Id:1226,
    Nombre: "Melón verde",
    Descripción: "Melón verde. El melón verde, casaba, melón rocío de miel o melón tuna (conocido en inglés como honeydew) es un fruto de la familia de melones que se cultiva para el consumo gastronómico. La fruta es similar al melón anaranjado, pero tiene un sabor más dulce, contiene más agua y posee un color verde pálido o claro.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4480115_640px.jpg?1518780769",
    Cantidad: "1500",
    Medida: "kg"
    },
    {
    Id:1227,
    Nombre: "Plátano rojo",
    Descripción: "Rico en vitamina C y mangnesio el plátano rojo es un buen antioxidante que ayuda a estimular el sistema inmunológico para prevenir resfriados o gripe. Bueno para la digestión. Es rico en potasio y tiene la capacidad de aliviar problemas gastrointestinales.",
    Portada:"https://es.wikipedia.org/wiki/Musa_acuminata#/media/Archivo:Musa_acuminata1.jpg",
    Cantidad: "1600",
    Medida: "kg"
    },
    {
    Id:1228,
    Nombre: "Pera Bosc",
    Descripción: "Las peras bosc suelen ser de tamaño medio y tienen forma de botella, además de la piel dorada y marrón. Asimismo, la pulpa es jugosa y un poco ácida. Pera bosc, cruda y sin procesar; la bosc es una variedad antigua de pera. Pyrus communis.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4478859_640px.jpg?1518780769",
    Cantidad: "1700",
    Medida: "kg"
    },
    {
    Id:1229,
    Nombre: "Jitomate",
    Descripción: "El tomate es el fruto de la planta conocida como tomatera, una especie herbácea que pertenece a la familia de las solanáceas y es nativa del continente americano. Los tomates son bayas de color rojizo que se caracterizan por su pulpa con múltiples semillas y por su jugo.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4480116_640px.jpg?1518780769",
    Cantidad: "1800",
    Medida: "kg"
    },
    {
    Id:1230,
    Nombre: "Guanábana",
    Descripción:" La guanábana es una deliciosa fruta originaria de Perú, es el fruto de un árbol de la familia Annonaceae, genero Annona, y es conocida en algunas regiones de Suramérica como graviola. Este fruto se caracteriza por una corteza verde rugosa espinosa y una pulpa blanquecina muy blanda con grandes semillas de color negro.",
    Portada:" https://st-listas.20minutos.es/images/2014-07/384094/4479382_640px.jpg?1518780769",
    Cantidad: "1900",
    Medida: "kg"
    },
    {
    Id:1240,
    Nombre: "Chile jalapeño",
    Descripción:" El fruto del jalapeño es carnoso y alargado, alcanzando los 7 cm de largo y alrededor de 3 de ancho en la base. Se emplea tanto antes como después de la maduración; una parte importante de la producción total se destina al secado, proceso tras el cual se lo conoce como chile chipotle (del náhuatl chilpoctli, que significa "chile ahumado"). Es una variedad de fruta medianamente picante, entre 2500 y 8000 puntos en la escala Scoville, aunque la intensidad del sabor depende en gran medida de las características del terreno y de la variedad de semilla; las más habituales son conocidas como típico, meco y morita. Buena parte de la capsaicina, el alcaloide que provoca la picazón, se concentra en las venas y semillas en el interior del fruto; retirarlas antes de su empleo proporciona un sabor más delicado.",
    Portada:"https://es.wikipedia.org/wiki/Chile_jalape%C3%B1o#/media/Archivo:Immature_jalapeno_capsicum_annuum_var_annuum.jpeg",
    Cantidad:"1994",
    Medida: "kg"
    },
    {
    Id:1250,
    Nombre: "Chile serrano",
    Descripción:" El chile serrano (Capsicum annuum cv. ‘Serrano Sinahusia’) también conocido como chile verde es una variedad de chile de origen y consumo en México, caracterizado por ser pequeño, de forma cilíndrica y a veces terminado en punta. Se considera picante y generalmente se acompaña con sus semillas y venas, también muy picantes. La mayor parte de las veces se consume fresco, es decir inmaduro, aunque también puede consumirse en su estado maduro cuando presenta un color rojo. Menos común es el chile serrano seco, que se puede utilizar completo o molido. ",
    Portada:"https://es.wikipedia.org/wiki/Chile_serrano#/media/Archivo:Chiles_serranos.jpg",
    Cantidad: "1995",
    Medida: "kg"
    },
    {
    Id:1280,
    Nombre: "Chile güero",
    Descripción: "Es una de las cinco especies domesticadas de chiles o ajíes.1 Variedades importantes de Capsicum chinense incluyen el chile habanero, la más común, el ají panca y el ají limo. Las variedades de ají panca y ají limo se cultivan en Perú y México.",
    Portada: "https://upload.wikimedia.org/wikipedia/commons/1/12/Chile_Guero.JPG",
    Cantidad: "1998",
    Medida: "kg"
    },
*/
  ];


  constructor() { }

  consultaProfile(){
    return this.profiles;

  }

  consultaProducts(){
    return this.products;
  }

  consultaProducto(){
    return this.products;
  }



}
