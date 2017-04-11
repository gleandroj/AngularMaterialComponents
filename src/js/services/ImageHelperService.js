/**
 * Created by FG0003 on 10/04/2017.
 */

export const DefaultVars = {
    height: 250,
    width: 300
};

export default class ImageHelperService{

    constructor(AngularUtilService){
        this.util = AngularUtilService;
    }

    getResizeArea(){
        let resizeAreaId = 'resize-area';

        let resizeArea = document.getElementById(resizeAreaId);

        if(resizeArea == null){
            resizeArea = document.createElement('canvas');
            resizeArea.id = resizeAreaId;
            resizeArea.style.visibility = 'hidden';
            resizeArea.style.display = 'none';
        }

        document.body.appendChild(resizeArea);

        return resizeArea;
    }

    resizeImage(origImage, options) {

        let maxHeight = options.maxHeight || DefaultVars.height;
        let maxWidth = options.maxWidth || DefaultVars.width;
        let quality = options.quality || 0.7;
        let type = options.resizeType || 'image/png';

        let canvas = this.getResizeArea();

        let height = origImage.height;
        let width = origImage.width;

        // calculate the width and height, constraining the proportions
        if (width > height) {
            if (width > maxWidth) {
                height = Math.round(height *= maxWidth / width);
                width = maxWidth;
            }
        } else {
            if (height > maxHeight) {
                width = Math.round(width *= maxHeight / height);
                height = maxHeight;
            }
        }

        canvas.width = width;
        canvas.height = height;

        //draw image on canvas
        let ctx = canvas.getContext("2d");
        ctx.drawImage(origImage, 0, 0, width, height);

        // get the data from canvas as 70% jpg (or specified type).
        return canvas.toDataURL(type, quality);
    }

    createImage(url) {
        let deferred = this.util.defer();
        let image = new Image();
        image.onload = (e) => deferred.resolve(image);
        image.onerror = (e) => deferred.reject(e);
        image.src = url;
        return deferred.promise;
    }

    fileToDataURL(file) {
        let deferred = this.util.defer();
        let reader = new FileReader();
        reader.onload = (e) => deferred.resolve(e.target.result);
        reader.onerror = (e) => deferred.reject(e);
        reader.readAsDataURL(file);
        return deferred.promise;
    }

    checkImage(modelValue) {
        return ((new RegExp(/^(data:image\/(jpeg|png|jpg|gif|bmp);base64)/)).test(modelValue)
        || (new RegExp(/(http(s?):)|([\/|.|\w|\s])*\.(?:jpeg|png|jpg|gif|bmp)/)).test(modelValue)
        || modelValue == null || modelValue == "");
    }
}

ImageHelperService.$inject = ['AngularUtilService'];
