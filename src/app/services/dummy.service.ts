import { Injectable } from '@angular/core';
import { Profiles } from '../models/profiles';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DummyService {


  guardarCliente : Profiles [] = [];
  respuestaAlta =[];
  profiles : Profiles [] = [
    {
      id : 1,
      nombre: "Edwin Martinez",
      email: "edy_ies@systems.com",
      phone: "00000000",
      direccion: "San Pedro Xalpa, Col. Azcapotzalco"
    },
    {
      id : 2,
      nombre: "Ana María",
      email: "ana@systems.com",
      phone: "00000001",
      direccion: "San Pedro , Col. Barrientos"      
    },
    {
      id : 3,
      nombre: "Alexis",
      email: "Alexis@systems.com",
      phone: "00000003",
      direccion: "Loma linda, Col. San agustin"
    },
    {
      id : 4,
      nombre: "Denisse",
      email: "dennise@systems.com",
      phone: "00000004",
      direccion: "San Antonio, col. lomas de san agustin "      
    },
    {
      id : 5,
      nombre: "Movier Peralta",
      email: "peralta@systems.com",
      phone: "00000005",
      direccion: "San  Xalpa, Col. Mejico"
    },
    {
      id : 6,
      nombre: "Daniela",
      email: "daniela@systems.com",
      phone: "00000006",
      direccion: "San Benito , Col. Portada"      
    },
    {
      id : 7,
      nombre: "Daniel Moreo",
      email: "moreo@systems.com",
      phone: "00000007",
      direccion: "San Tortuga, Col. Prudence"
    },
    {
      id : 8,
      nombre: "Miriam",
      email: "miriam@systems.com",
      phone: "00000008",
      direccion: "Tambores, Col. Osha"      
    },
    {
      id : 9,
      nombre: "Thania Sotelo",
      email: "thanb@systems.com",
      phone: "00000009",
      direccion: "Cto. Circunvalción, Col Satelite"
    },
    {
      id : 10,
      nombre: "Katt",
      email: "Katt@systems.com",
      phone: "00000010",
      direccion: "Cto. Circunvalción, Col Satelite"      
    },
    {
      id : 11,
      nombre: "Sotelo",
      email: "sotelo@systems.com",
      phone: "00000011",
      direccion: "Cto. Mejiquense, Col Potrero"
    },
    {
      id : 12,
      nombre: "Porfirio",
      email: "porfi@systems.com",
      phone: "00000012",
      direccion: "Av. Cuaderno, Col. Xiomi"      
    },
    {
      id : 13,
      nombre: "Batman",
      email: "batman@systems.com",
      phone: "00000013",
      direccion: "Cto. Batiseñal, Col. Panteon"
    },
    {
      id : 14,
      nombre: "Nemo",
      email: "nemo@systems.com",
      phone: "00000014",
      direccion: "Av. Cuaderno, Col. Xiomi"      
    },
    {
      id : 15,
      nombre: "Thor",
      email: "thor@systems.com",
      phone: "00000015",
      direccion: "Cto. Trueno, Col. Galaxya"
    },
    {
      id : 16,
      nombre: "Spider-man",
      email: "araña@systems.com",
      phone: "00000016",
      direccion: "Av. Telaraña, Col. Telaraña"      
    },
    {
      id : 17,
      nombre: "Capiran america",
      email: "capi@systems.com",
      phone: "00000017",
      direccion: "Cto. Criptonita, Col. No tiene"
    },
    {
      id : 18,
      nombre: "Yamile",
      email: "tamm@systems.com",
      phone: "00000018",
      direccion: "Av. Corazon, Col. Roto"      
    },
    {
      id : 19,
      nombre: "Ivonne",
      email: "bonis@systems.com",
      phone: "00000019",
      direccion: "Cto. Corazon, Col. Panteon"
    },
    {
      id : 20,
      nombre: "Alexia",
      email: "aletxia@systems.com",
      phone: "00000020",
      direccion: "Av. Cuaderno, Col. Xiomi"      
    }, 
  ]

  constructor() { }

  consultaProfile(){
    return this.profiles;
  }

  

}
