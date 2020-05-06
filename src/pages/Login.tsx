import React, { useState } from 'react';
import { 
  IonContent
  , IonHeader
  , IonPage
  , IonTitle
  , IonToolbar
  , IonInput
  , IonItem
  , IonLabel
  , IonList
  , IonButton
  , IonRouterLink
  , IonGrid
  , IonRow
  , IonCol
  , IonCard
  , IonIcon 
} from '@ionic/react';

import { 
  logoGoogle
  , logoTwitter 
} from 'ionicons/icons';

import './Login.css';

const Login: React.FC = () => {

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ログイン</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow class="ion-justify-content-center">
          <IonCol　size-sm="10" size-md="6">
          <IonCard class="card_padding">
            <IonList>
              <div>
                <IonButton expand="block" fill="outline" type="submit" class="ion-text-capitalize card_contents_vmargin">
                  <IonIcon slot="start" icon={logoGoogle} />
                  Googleでログイン
                </IonButton>
                <IonButton expand="block" fill="outline" type="submit" class="ion-text-capitalize card_contents_vmargin">
                  <IonIcon slot="start" icon={logoTwitter} />
                  Twitterでログイン
                </IonButton>
              </div>
              <IonItem class="ion-padding-top">
                <IonLabel position="stacked">
                  Email
                </IonLabel>
                <IonInput type="email" required value={email} placeholder="Enter your email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
              </IonItem>
              <IonItem class="card_contents_vmargin">
                <IonLabel position="stacked">
                  Password
                </IonLabel>
                <IonInput type="password" required value={password} placeholder="Enter your possword" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
              </IonItem>
              <IonButton expand="block" type="submit" class="card_contents_vmargin">ログイン</IonButton>
              <IonLabel class="caution_text">
                パスワードをお忘れの方は<IonRouterLink href="/Login">こちら</IonRouterLink>
              </IonLabel>
            </IonList>
          </IonCard>
          <IonCard class="card_padding">
					<IonList>
            <IonLabel color="dark">
              初めての方はこちら
            </IonLabel>
            <IonButton expand="block" type="submit" color="success" href="/RegisterBase" class="card_contents_vmargin">新規アカウント登録</IonButton>
					</IonList>
					</IonCard>
          </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
