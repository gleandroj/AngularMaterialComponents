/**
 * Created by FG0003 on 10/04/2017.
 */
import CamDialogTemplate from './../components/CameraComponent/camera.tpl.html';
import { DefaultVars } from './ImageHelperService';

class CameraController {

    constructor($mdDialog, AngularUtilService, $log, $window, locals) {

        this.window = $window;
        this.dialogService = $mdDialog;
        this.util = AngularUtilService;
        this.log = $log;
        this.title = locals.title || 'Camera';
        this.captured = false;
        this.snapshot = '';
        this.dimensions = {
            height: locals.height || DefaultVars.height,
            width: locals.width || DefaultVars.width
        };
        this.loading = true;
        this.error = false;
        this.videoStream = null;

        this.elements = {
            root: null,
            video: null,
            canvas: null
        };

        this.util.timeout(()=> {
            this.initialize();
        }, 0);
    }

    getUserMedia() {
        navigator.getUserMedia = (this.window.navigator.getUserMedia ||
        this.window.navigator.webkitGetUserMedia ||
        this.window.navigator.mozGetUserMedia ||
        this.window.navigator.msGetUserMedia);
        return navigator.getUserMedia;
    }

    hasUserMedia() {
        return !!this.getUserMedia();
    }

    takeSnapshot() {
        var ctx = this.elements.canvas.getContext('2d');
        this.util.timeout(()=> {
            ctx.drawImage(this.elements.video, 0, 0, this.elements.video.videoWidth, this.elements.video.videoHeight);
            this.snapshot = this.elements.canvas.toDataURL();
            this.captured = true;
        }, 0);
    }

    initialize() {
        this._findElements();
        let self = this;

        if (!this.hasUserMedia()) return this.cancel();

        let onSuccess = (stream)=> {
            self.videoStream = stream;
            if (navigator.mozGetUserMedia) {
                self.elements.video.mozSrcObject = self.videoStream;
            } else {
                let vendorURL = window.URL || window.webkitURL;
                self.elements.video.src = vendorURL.createObjectURL(self.videoStream);
            }
            self.elements.video.addEventListener('loadeddata', ()=> {
                self.util.timeout(()=> {
                    self.dimensions.height = self.elements.video.videoHeight; //Real Height
                    self.dimensions.width = self.elements.video.videoWidth; //Real Width
                    self.loading = false;
                }, 0);
            });
        };

        var onFailure = function (err) {
            self.log.error(err.message);
            if (err.name == 'PermissionDeniedError') {
                self.message = err.message;
            }
            self.error = true;
            self.loading = false;
        };

        this.util.timeout(function () {
            navigator.getUserMedia({
                video: {
                    mandatory: {
                        maxWidth: self.dimensions.width,
                        maxHeight: self.dimensions.height
                    }
                },
                audio: false
            }, onSuccess, onFailure);
        }, 0);
    }

    _findElements() {
        this.elements.root = this.util.element(document.getElementById('camera-root'))[0];
        this.elements.video = this.util.element(document.getElementById('camera-video'))[0];
        this.elements.canvas = this.util.element(document.getElementById('camera-canvas'))[0];
    }

    stopVideo(){
        if (!this.error) {
            this.videoStream.getVideoTracks()[0].stop();
        }
    }

    salvar() {
        this.stopVideo();
        this.dialogService.hide(this.snapshot);
    }

    voltar() {
        this.captured = false;
        this.snapshot = '';
    }

    cancel() {
        this.stopVideo();
        this.dialogService.cancel('cancel');
    }
}

CameraController.$inject = ['$mdDialog', 'AngularUtilService', '$log', '$window', 'locals'];

export default class CameraService {
    
    constructor($mdDialog, AngularUtilService, $log){
        this.log = $log;
        this.util = AngularUtilService;
        this.dialogServiceService = $mdDialog;
    }

    showCamera(options) {
        options = options || {};
        let defer = this.util.defer();
        this.log.info("Camera started.");
        this.dialogServiceService.show({
            controller: CameraController,
            template: CamDialogTemplate,
            clickOutsideToClose: false,
            bindToController: true,
            preserveScope: true,
            parent: this.util.element(document.body),
            controllerAs: '$ctrl',
            fullscreen: false,
            autoWrap: true,
            locals: options
        }).then((response) => {
            defer.resolve(response);
            this.log.info("Camera stopped, reason: save.");
        }, (err) => {
            if (err !== 'cancel') {
                defer.reject(err);
            }
            this.log.info("Camera stopped, reason: " + err + ".");
        });
        return defer.promise;
    }

}

CameraService.$inject = ['$mdDialog', 'AngularUtilService', '$log'];