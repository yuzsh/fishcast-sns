import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { podium, camera, home, personOutline } from 'ionicons/icons';
import Predict from './pages/Predict';
import Submit from './pages/Submit';
import Home from './pages/Home';
import Details from './pages/Details';
import UserMenu from './pages/UserMenu';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterBase from './pages/RegisterBase';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Global CSS */
import './global.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/Predict" component={Predict} exact={true} />
          <Route path="/Submit" component={Submit} exact={true} />
          <Route path="/Submit/details" component={Details} />
          <Route path="/Home" component={Home} />
          <Route path="/UserMenu" component={UserMenu} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/RegisterBase" component={RegisterBase} />
          <Route path="/" render={() => <Redirect to="/Predict" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/Home">
            <IonIcon icon={home} />
            <IonLabel>検索</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Predict" href="/Predict">
            <IonIcon icon={podium} />
            <IonLabel>予測</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Submit" href="/Submit">
            <IonIcon icon={camera} />
            <IonLabel>登録</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Login" href="/Login">
            <IonIcon icon={personOutline} />
            <IonLabel>ログイン</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
