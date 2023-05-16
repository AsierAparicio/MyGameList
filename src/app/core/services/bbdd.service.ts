import { Injectable } from '@angular/core';
import { Firestore,collection,addDoc,collectionData, query, where, getDocs } from '@angular/fire/firestore';
import { doc, setDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

import valoracion from 'src/app/interfaces/Valoracion.interfaces';
import Valoracion from 'src/app/interfaces/Valoracion.interfaces';

@Injectable()
export class BbddService {

constructor(private firestore:Firestore) { }

addValoracion(valoracion:valoracion){
  const ValRef=collection(this.firestore,'Valoraciones');
  return addDoc(ValRef,valoracion);
}

setValoracion(valoracion:valoracion){
  const ValRef=collection(this.firestore,'Valoraciones');
  return setDoc(doc(ValRef, valoracion.userID), valoracion)
}

async select(user: string, lista: number): Promise<Valoracion[]> {
  const valRef = collection(this.firestore, 'Valoraciones');
  const q = query(valRef, 
    where('userID', '==', user),
    where('listaID', '==', lista)
  );

  const querySnapshot = await getDocs(q);

  const valoraciones = querySnapshot.docs.map((doc) => {
    const valoracion = doc.data() as Valoracion;
    valoracion.id = doc.id;
    return valoracion;
  });

  console.log(valoraciones);

  return valoraciones;
}

async selectInsertUpdate(val: valoracion){
  const valRef = collection(this.firestore, 'Valoraciones');
  const q = query(valRef, 
    where('userID', '==', val.userID),
    where('gameID', '==', val.gameID)
  );

  const querySnapshot = await getDocs(q);

  const valoraciones = querySnapshot.docs.map((doc) => {
    const valoracion = doc.data() as Valoracion;
    valoracion.id = doc.id;
    return valoracion;
  });

  if (valoraciones.length <= 0){
    this.addValoracion(val);
    console.log('pitilin');
  }else{
    this.setValoracion(val);
    console.log(valoraciones);
  }

  return valoraciones;
}


}
