import { Profiles } from './profiles';

export interface ProductProfileInterface{
  id? : string,
  nombre?: string,
  profil?: Profiles,
  descripcion?: string,
  portada?: string,
  cantidad?: string,
  medida?: string,
}
