import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton, IonText } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';

const Register: React.FC = () => {

	const [username, setUserName] = useState<string>();
	const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>アカウント登録</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList>
					<IonItem>
            <IonLabel position="stacked">
              User Name<IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput type="text" required value={username} placeholder="Enter your name" onIonChange={e => setUserName(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">
              Email<IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput type="email" required value={email} placeholder="Enter your email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">
              Password<IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput type="password" required value={password} placeholder="Enter your possword" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
        </IonList>
        <div>
          <IonButton expand="block" type="submit" class="ion-no-margin">ユーザー登録</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
