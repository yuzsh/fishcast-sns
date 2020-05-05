import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonText, IonButton, IonRouterLink } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
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
        <IonList>
          <IonItem>
            <IonLabel position="stacked">
              Email
            </IonLabel>
            <IonInput type="email" required value={email} placeholder="Enter your email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">
              Password
            </IonLabel>
            <IonInput type="password" required value={password} placeholder="Enter your possword" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
        </IonList>
        <div>
          <IonButton expand="block" type="submit" class="ion-no-margin">Login</IonButton>
        </div>
        <div>
          <IonLabel>
            アカウントを持っていませんか？<IonRouterLink href="/Register">アカウント登録</IonRouterLink>
          </IonLabel>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
