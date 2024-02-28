import { EnvironmentInjector, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { FormsModule } from '@angular/forms';
import { BoardItemComponent } from './components/board-item/board-item.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';



@NgModule({
  declarations: [
    AppComponent, 
    TareaComponent, BoardItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
provideFirebaseApp(() => initializeApp({"projectId":"prueba-tecnica-2f0a7","appId":"1:364560581090:web:dc4c3e0d9945a91330f9bb","storageBucket":"prueba-tecnica-2f0a7.appspot.com","apiKey":"AIzaSyBCCrK5Rn_Lfd6Un_iLWHu2Jtciu0rAzqs","authDomain":"prueba-tecnica-2f0a7.firebaseapp.com","messagingSenderId":"364560581090"})),
    provideStorage(() => getStorage())
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
