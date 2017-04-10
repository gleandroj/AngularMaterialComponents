/**
 * Created by FG0003 on 10/04/2017.
 */
import './../css/angular-material-components.css'

import AngularMaterialConfigs from './configs/index.configs';
import AngularMaterialServices from './services/index.services';
import AngularMaterialComponents from './components/index.components';
import AngularMaterialDirectives from './directives/index.directives';

export default angular.module('angular-material-components', [

    AngularMaterialConfigs.name,
    AngularMaterialServices.name,
    AngularMaterialComponents.name,
    AngularMaterialDirectives.name

]).name;

