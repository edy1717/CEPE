import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ProductInterface } from '../models/products';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor( private afs: AngularFirestore ) { 
    this.productsCollection = afs.collection<ProductInterface>('products')
    this.products = this.productsCollection.valueChanges();
  }

  private productsCollection: AngularFirestoreCollection <ProductInterface>;
  private products : Observable <ProductInterface[]>;

  private productDoc : AngularFirestoreDocument <ProductInterface>
  private product : Observable <ProductInterface>
  public selectedProduct : ProductInterface = {
    id:null
  }


  getAllProducts(){
    return this.products = this.productsCollection.snapshotChanges()
    .pipe (map ( changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as ProductInterface;
        data.id = action.payload.doc.id;
        return data;
      })
    }))
  }

  getOneProduct (idProduct){
    this.productDoc = this.afs.doc<ProductInterface>(`products/${idProduct}`);
      return this.product = this.productDoc.snapshotChanges().pipe(map(action => {
        if( action.payload.exists === false){
          return null;
        }else {
          const data = action.payload.data() as ProductInterface;
          data.id = action.payload.id;
          return data;
        }
      }))
  }

  addProduct(product : ProductInterface):void{
    this.productsCollection.add(product)
  }
  
  updateProduct( product : ProductInterface ):void{
    let idProduct = product.id;
    this.productDoc = this.afs.doc<ProductInterface>(`products/${idProduct}`);
    this.productDoc.update(product)
  }
  deleteProduct(idProduct: string):void{
    this.productDoc = this.afs.doc<ProductInterface>(`products/${idProduct}`);
    this.productDoc.delete();
  }
}
