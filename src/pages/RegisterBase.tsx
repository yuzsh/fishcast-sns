import React, { useState } from 'react';
import { 
    IonContent
    , IonHeader
    , IonPage
    , IonTitle
    , IonToolbar
    , IonList
    , IonButton
    , IonGrid
    , IonRow
    , IonCol
    , IonCard
    , IonIcon
 } from '@ionic/react';

import { 
    logoGoogle
    , logoTwitter
    , mail
  } from 'ionicons/icons';

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
                <IonCol size-sm="10" size-md="6">
					<IonCard class="card_padding">
					<IonList>
                    <IonButton expand="block" fill="outline" type="submit" href="/Register" class="ion-text-capitalize card_contents_vmargin">
                        <IonIcon slot="start" icon={mail} />
                        メールアドレスで登録
                    </IonButton>
                    <IonButton expand="block" fill="outline" type="submit" class="ion-text-capitalize card_contents_vmargin">
                        <IonIcon slot="start" icon={logoGoogle} />
                        Googleで登録
                    </IonButton>
                    <IonButton expand="block" fill="outline" type="submit" class="ion-text-capitalize card_contents_vmargin">
                        <IonIcon slot="start" icon={logoTwitter} />
                        Twitterで登録
                    </IonButton>
					</IonList>
					</IonCard>
				</IonCol>
				</IonRow>
			</IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default RegisterBase;
