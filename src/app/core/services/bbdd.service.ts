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

setValoracion(valoracion:valoracion, id:string){
  const ValRef=collection(this.firestore,'Valoraciones');
  return setDoc(doc(ValRef, id), valoracion)
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

  var idAux:string = "test";

  const valoraciones = querySnapshot.docs.map((doc) => {
    const valoracion = doc.data() as Valoracion;
    valoracion.id = doc.id;
    console.log("--------------------------------------");
    console.log(valoracion.id);
    console.log("--------------------------------------");
    idAux = valoracion.id;
    return valoracion;
  });

  if (valoraciones.length <= 0){
    this.addValoracion(val);
    console.log('insert');
  }else{
    console.log("--------------------------------------");
    console.log(valoraciones[0].id);
    console.log("--------------------------------------");
    this.setValoracion(val, idAux);
    console.log('update');
  }

  return valoraciones;
}

async selectInsertUpdateCambioLista(val: valoracion, listanum: number){
  const valRef = collection(this.firestore, 'Valoraciones');
  const q = query(valRef, 
    where('userID', '==', val.userID),
    where('gameID', '==', val.gameID)
  );

  const querySnapshot = await getDocs(q);

  var idAux:string = "test";

  const valoraciones = querySnapshot.docs.map((doc) => {
    const valoracion = doc.data() as Valoracion;
    valoracion.id = doc.id;
    console.log("--------------------------------------");
    console.log(valoracion.id);
    console.log("--------------------------------------");
    idAux = valoracion.id;
    return valoracion;
  });

  if (valoraciones.length <= 0){
    this.addValoracion(val);
    console.log('insert');
  }else{
    console.log("--------------------------------------");
    console.log(valoraciones[0].id);
    console.log("--------------------------------------");
    valoraciones[0].listaID = listanum
    this.setValoracion(valoraciones[0], idAux);
    console.log('update');
  }

  return valoraciones;
}


async selectGameAndUser(val: valoracion){
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

  return valoraciones;
}

async selectValoracionesFromGame (val: valoracion){
  const valRef = collection(this.firestore, 'Valoraciones');
  const q = query(valRef,
    where('gameID', '==', val.gameID)
  );

  const querySnapshot = await getDocs(q);

  const valoraciones = querySnapshot.docs.map((doc) => {
    const valoracion = doc.data() as Valoracion;
    valoracion.id = doc.id;
    return valoracion;
  });

  return valoraciones;
}
}
