import { Profiles } from './profiles';

export interface ProductProfileInterface{
  id : number,
  nombre: string,
  profil: Profiles,
  descripcion: string,
  portada: string,
  cantidad: string,
  medida: string,
}
