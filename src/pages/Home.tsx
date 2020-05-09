import React from 'react';
//import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet } from '@ionic/react';
import { camera } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import { useReport } from '../hooks/useReport';
import './Home.css';

const Home: React.FC = () => {
  const { getReport } = useReport();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>FishcastSns</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => getReport()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Home;
