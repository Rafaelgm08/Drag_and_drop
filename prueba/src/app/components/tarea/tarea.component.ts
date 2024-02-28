import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit, inject,} from '@angular/core';
import { BoardItemComponent } from '../board-item/board-item.component';
import { find, findIndex } from 'rxjs';
import { ref, uploadBytes } from 'firebase/storage';
import { Storage } from '@angular/fire/storage';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent {
  //crear un nuevo array
  todo: string[] = ['Hacer la comida', 'Lavar los Platos', 'Lavar la Ropa']

  progress: string [] = [];

  done: string [] = [];
  tarea = '';

  

  constructor(private storage: Storage) {


    
   }

subirArchivo($event:any) {
  console.log($event);
  const text = $event.target.text[0];

  const fileRef = ref(this.storage, `archivos/${text.name}`);

  uploadBytes(fileRef, text.name).then(x => {
    console.log(x);

  }).catch(error => console.log(error));

}


  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  agregarTarea(){
    if (this.tarea === ''){
      return;
    }
    
this.todo.push(this.tarea);
this.tarea = '';
  }


  deleteMe(event: any, data: any) {
    console.log(data)
    for (let todo of this.todo) {
      const findOne = this.todo.findIndex(f => todo === todo)
      if (findOne > -1) 
        this.todo.splice(findOne, 1)
      break;  
    }
  }


//   onFileSelected(event:any) {
//     const archivoSeleccionado: File = event.target.files[0];
//     this.uploadFile(archivoSeleccionado);
//   }

// async uploadFile(file:File){
//   const filePath = `archivos/${file.name}`;
//   const fileRef = ref(this.storage,filePath);
//   const uploadBytes = uploadBytesResumable(fileRef, file);
// }

}

