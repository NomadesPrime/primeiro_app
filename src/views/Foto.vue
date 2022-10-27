<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Galeria de Fotos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Fotos</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row>
          <ion-col size="6" :key="photo" v-for="photo in photos">
            <ion-img :src="photo.webviewPath" @click="showActionSheet(photo)"></ion-img>
          </ion-col>        
        </ion-row>
      </ion-grid>
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button>
      <ion-icon :icon="camera" @click="takePhoto()"></ion-icon>
    </ion-fab-button>
   </ion-fab>

     
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonGrid,IonIcon, IonFabButton, IonRow, IonCol, IonImg, IonFab ,IonToolbar, IonTitle, IonContent, actionSheetController } from '@ionic/vue';
import { camera, trash, close } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '@/composable/usePhotoGallery';
export default  defineComponent({
  name: 'ContatoPage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonGrid, IonRow,IonImg,IonFab,IonCol, IonFabButton, IonIcon},
  
  setup() {
   const showActionSheet = async (photo: UserPhoto) => {
   const actionSheet = await actionSheetController.create({
    header: 'Photos',
    buttons: [
      {
        text: 'Delete',
        role: 'destrictive',
        icon: trash,
        handler: () => {
          deletePhoto(photo);
        },
      },
      {
        text: 'Cancel',
        role: 'cancel',
        icon: close,
        handler: () =>{
          // nada ocorre
        },
      },
    ],
   });
   await actionSheet.present();

  };
    const { takePhoto, photos, deletePhoto } = usePhotoGallery();
    return{
    showActionSheet,
    deletePhoto,
    takePhoto,
    camera,
    trash,
    close,
    photos,
  }
}
});
</script>
<style>
.meuElemento {
  text-align: center;
  background-color: #083621;
  color: aliceblue;
}
h1 {
  text-align: right;
  padding-right: 2em;
}
</style>
