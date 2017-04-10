/**
 * Created by FG0003 on 10/04/2017.
 */

import AngularUtilService from './AngularUtilService';
import ImageHelperService from './ImageHelperService';
import CameraService from './CameraService';

export default angular.module('angular-material-components.services')
                        .service('AngularUtilService', AngularUtilService)
                        .service('ImageHelperService', ImageHelperService)
                        .service('CameraService', CameraService);