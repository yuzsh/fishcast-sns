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
	, IonText
	, IonGrid
	, IonRow
	, IonCol
	, IonCard
 } from '@ionic/react';

import './Login.css';

const Register: React.FC = () => {

	const [username, setUserName] = useState<string>();
	const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

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
						<IonItem class="card_contents_vmargin">
							<IonLabel position="stacked">
								ユーザー名<IonText color="danger">*</IonText>
							</IonLabel>
							<IonInput type="text" required value={username} placeholder="Enter your name" onIonChange={e => setUserName(e.detail.value!)}></IonInput>
						</IonItem>
						<IonItem class="card_contents_vmargin">
							<IonLabel position="stacked">
								メールアドレス<IonText color="danger">*</IonText>
							</IonLabel>
							<IonInput type="email" required value={email} placeholder="Enter your email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
						</IonItem>
						<IonItem class="card_contents_vmargin">
							<IonLabel position="stacked">
								パスワード<IonText color="danger">*</IonText>
							</IonLabel>
							<IonInput type="password" required value={password} placeholder="Enter your possword" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
						</IonItem>
						<div>
							<IonButton expand="block" type="submit">ユーザー登録</IonButton>
						</div>
					</IonList>
					</IonCard>
				</IonCol>
				</IonRow>
			</IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
