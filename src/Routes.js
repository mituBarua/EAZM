import React from 'react'
import { Router, Switch, Route } from "react-router-dom";
import InfoModal from './Component/InfoModal';
import history from './history';
import Customization from './Component/Customization';
import ApplicationMethod  from './Component/ApplicationMethod';
import ChooseArtwork from './Component/ChooseArtwork';
import ChooseApplicationType from './Component/ChooseApplicationType';
import ConfigureLogo from './Component/ConfigureLogo';
import ConfigureForm from './Component/ConfigureForm';
import ChooseProduct from './Component/ChooseProduct';
import ProductDetails from './Component/ProductDetails';


export default function Routes() {
    return (
        <Router history={history}>
        <Switch>
            <Route path="/" exact component={ChooseProduct} />
            <Route path="/InfoModal" exact component={InfoModal} />
            <Route path="/Customization" component={Customization} />
            <Route path="/ApplicationMethod" component={ApplicationMethod} />
            <Route path="/ChooseArtwork" component={ChooseArtwork} />
            <Route path="/ChooseApplicationType" component={ChooseApplicationType} />
            <Route path="/ConfigureLogo" component={ConfigureLogo} />
            <Route path="/ConfigureForm" component={ConfigureForm} />
            <Route path="/ProductDetails" component={ProductDetails} />
        </Switch>
    </Router>
    )
}
