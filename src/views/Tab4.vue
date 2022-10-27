<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Inputs de formulario</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-item>
          <ion-select placeholder="">
             <ion-select-option value="apples">Maçãs</ion-select-option>    
             <ion-select-option value="oranges">Laranjas</ion-select-option>  
             <ion-select-option value="bananas">Bananas</ion-select-option>   
         </ion-select>
        </ion-item>
      </ion-list>
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';


export default defineComponent({
  name: 'Tab3Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>
