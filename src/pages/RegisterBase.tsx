import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton, IonText, IonGrid, IonRow, IonCol, IonCard } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';

const RegisterBase: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>新規アカウント登録</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
			<IonGrid>
				<IonRow class="ion-justify-content-center">
				<IonCol size="1"></IonCol>
                <IonCol　size="6">
					<IonCard class="card_padding">
					<IonList>
                    <IonButton expand="block" fill="outline" type="submit" href="/Register" class="ion-text-capitalize card_contents_vmargin">メールアドレスで登録</IonButton>
                    <IonButton expand="block" fill="outline" type="submit" class="ion-text-capitalize card_contents_vmargin">Googleアカウントで登録</IonButton>
                    <IonButton expand="block" fill="outline" type="submit" class="ion-text-capitalize card_contents_vmargin">Twitterアカウントで登録</IonButton>
					</IonList>
					</IonCard>
				</IonCol>
				<IonCol size="1"></IonCol>
				</IonRow>
			</IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default RegisterBase;
