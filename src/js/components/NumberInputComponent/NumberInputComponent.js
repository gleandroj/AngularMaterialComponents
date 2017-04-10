/**
 * Created by FG0003 on 29/12/2016.
 */

import { AbstractInputController, AbstractInputComponent } from './../AbstractInputComponent/AbstractInputComponent';
import NumberInputTemplate from './number-input.tpl.html';

class NumberInputController extends AbstractInputController {

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

NumberInputController.$inject = ['$scope', 'AngularUtilService'];

export let NumberInputComponent = {
    selector: 'numberInput',
    require: {
        model: "ngModel"
    },
    bindings: Object.assign({
        max: '<',
        min: '<'
    }, AbstractInputComponent.bindings),
    controller: NumberInputController,
    controllerAs: '$component',
    template: NumberInputTemplate,
    transclude: true
};