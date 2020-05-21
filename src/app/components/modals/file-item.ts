export class FileItem{
  public archivo: File;
  public nombreArvicho: String;
  public url: String;



  constructor( archivo:File){
    this.archivo=archivo;
    this.nombreArvicho = archivo.name;
  }
}
