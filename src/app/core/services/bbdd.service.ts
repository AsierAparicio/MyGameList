import { Injectable } from '@angular/core';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';
import { getDocs, query, where } from 'firebase/firestore';
import valoracion from 'src/app/interfaces/Valoracion.interfaces';
import Valoracion from 'src/app/interfaces/Valoracion.interfaces';

@Injectable()
export class BbddService {

constructor(private firestore:Firestore) { }

addValoracion(valoracion:valoracion){
  const ValRef=collection(this.firestore,'Valoraciones');
  return addDoc(ValRef,valoracion);
}

async select(user: string, lista: number) {
  const valRef = collection(this.firestore, 'Valoraciones');
  const q = query(valRef, 
                  where('userID', '==', user),
                  where('listaID', '==', lista)
                  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((valoracion) => {
    console.log(valoracion.id, " => ", valoracion.data());
  });
  
  return(querySnapshot);
}

}
