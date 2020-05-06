import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './UserMenu.css';

const UserMenu: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>メニュー</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">メニュー</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="User menu page" />
      </IonContent>
    </IonPage>
  );
};

export default UserMenu;
