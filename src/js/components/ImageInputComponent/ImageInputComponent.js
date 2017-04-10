/**
 * Created by FG0003 on 29/12/2016.
 */

import { AbstractInputController } from './../AbstractInputComponent/AbstractInputComponent';
import ImageInputTemplate from './image-input.tpl.html';
import FallbackImg from './../../../icons/ic_photo_black_48px.svg';

class ImageInputController extends AbstractInputController {

    constructor($scope, AngularUtilService, CameraService, ImageHelperService) {
        super($scope, AngularUtilService);
        this.cameraService = CameraService;
        this.imageHelper = ImageHelperService;
    }

    initialize() {
        super.initialize();
        if(this.util.isUndefined(this.fallbackImg)) this.fallbackImg = FallbackImg;
        if(this.util.isUndefined(this.allowWebcam)) this.allowWebcam = true;
        if(this.util.isUndefined(this.showButtons)) this.showButtons = false;
        if(this.util.isUndefined(this.preview)) this.preview = false;
        if(this.util.isUndefined(this.overrideClass)) this.overrideClass = '';
        this.inputElement.on('change', (e) => this.onImageSelected(e));
    }

    setupValidation() {
        super.setupValidation();
        this.addValidator('image', (b64) => this.imageHelper.checkImage(b64));
        this.validate();
    }

    onImageSelected(e) {
        if(e.target.files.length > 0){
            //Converte file to Base64 URL
            this.imageHelper.fileToDataURL(e.target.files[0]).then((b64)=>{
                //Converte Base64 URL to <Image> Object
                this.imageHelper.createImage(b64).then((imageObj) => {
                    //Resize <Image> Object and return new Base64 URL and set to model
                    this.value = this.imageHelper.resizeImage(imageObj, {quality:1});
                })
            });
        }
    }

    showCamera() {
        this.cameraService.showCamera().then((img) => this.value = img);
    }

    get inputElement() {
        return this.form[this.name].$$element;
    }

    clean() {
        this.value = null;
        this.validate();
    }
}

ImageInputController.$inject = ['$scope', 'AngularUtilService', 'CameraService', 'ImageHelperService'];

export let ImageInputComponent = {
    selector: 'imageInput',
    require: {
        model: "ngModel"
    },
    bindings: {
        isDisabled: '<',
        isRequired: '<',
        preview: '<',
        showButtons: '<',
        allowWebcam: '<',
        overrideClass: '<',
        fallbackImg: '<',
        name: '@'
    },
    controller: ImageInputController,
    controllerAs: '$component',
    template: ImageInputTemplate,
    transclude: true
};
