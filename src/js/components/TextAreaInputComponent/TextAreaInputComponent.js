/**
 * Created by FG0003 on 29/12/2016.
 */

import { AbstractInputController, AbstractInputComponent } from './../AbstractInputComponent/AbstractInputComponent';
import TextAreaInputTemplate from './text-area-input.tpl.html';

class TextAreaInputController extends AbstractInputController {

    constructor($scope, AngularUtilService) {
        super($scope, AngularUtilService);
    }

    initialize(){
        super.initialize();
    }

    setupValidation(){
        super.setupValidation();
    }

}

TextAreaInputController.$inject = ['$scope', 'AngularUtilService'];

export let TextAreaInputComponent = {
    selector: 'textAreaInput',
    require: {
        model: "ngModel"
    },
    bindings: Object.assign({
        maxRows: '<',
        rows: '<'
    }, AbstractInputComponent.bindings),
    controller: TextAreaInputController,
    controllerAs: '$component',
    template: TextAreaInputTemplate,
    transclude: true
};
