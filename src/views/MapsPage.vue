<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mapa</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Mapa</ion-title>
        </ion-toolbar>
      </ion-header>
      
     
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, onIonViewDidLeave } from '@ionic/vue';
import {meuMapa} from '@/composable/maps';
export default defineComponent({
  name: 'Tab2Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  ionViewDidEnter(){
    console.log('Entrou na página');
  },
  ionViewDidLeave(){
      console.log('Saiu da página');
  },
  ionViewWillEnter(){
      const {pegarCoordenadas} = meuMapa();
      pegarCoordenadas();
  },
  ionViewWillLeave(){
      console.log('Vai sair da página');
  },

});
</script>
