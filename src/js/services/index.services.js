/**
 * Created by FG0003 on 10/04/2017.
 */

import AngularUtilService from './AngularUtilService';
import ImageHelperService from './ImageHelperService';
import CameraService from './CameraService';

let services = angular.module('angular-material-simple-components.services', ['ngMaterial']);

services.service('AngularUtilService', AngularUtilService);
services.service('ImageHelperService', ImageHelperService);
services.service('CameraService', CameraService);

export default services;