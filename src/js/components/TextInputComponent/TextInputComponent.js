/**
 * Created by FG0003 on 29/12/2016.
 */

import { AbstractInputController, AbstractInputComponent } from './../AbstractInputComponent/AbstractInputComponent';
import TextInputTemplate from './text-input.tpl.html';

class TextInputController extends AbstractInputController {

    constructor($scope, AngularUtilService) {
        super($scope, AngularUtilService);
        this.type = 'text';
        this.checkMatch = false;
        this.match = null;
    }

    initialize(){
        super.initialize();

        if(this.type != 'text' && this.type != 'email' && this.type != 'password')
            throw 'O tipo deve ser "text" ou "email" ou "password"';
    }

    setupValidation(){
        super.setupValidation();
        if(this.util.isDefined(this.checkMatch) && this.checkMatch){
            this.addValidator('match', () => TextInputController.checkMatchFn(this.model.$viewValue, this.match));
        }
        this.validate();
    }

    static checkMatchFn(value1, value2){
        return ((value1 === null || value1 === "" || value1 === undefined) && (value2 === null || value2 === "" || value2 === undefined)) || (value1 === value2);
    }
}

TextInputController.$inject = ['$scope', 'AngularUtilService'];

export let TextInputComponent = {
    selector: 'textInput',
    require: {
        model: "ngModel"
    },
    bindings: Object.assign({
        checkMatch: '<',
        match: '<'
    }, AbstractInputComponent.bindings),
    controller: TextInputController,
    controllerAs: '$component',
    template: TextInputTemplate,
    transclude: true
};