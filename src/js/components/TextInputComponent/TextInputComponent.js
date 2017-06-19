/**
 * Created by FG0003 on 29/12/2016.
 */

import { AbstractInputController, AbstractInputComponent } from './../AbstractInputComponent/AbstractInputComponent';
import TextInputTemplate from './text-input.tpl.html';

class TextInputController extends AbstractInputController {

    constructor($scope, AngularUtilService) {
        super($scope, AngularUtilService);
        this.type = 'text';
    }

    initialize(){
        super.initialize();
        if (this.util.isUndefined(this.checkMatch)) this.checkMatch = false;
        if(this.type != 'text' && this.type != 'email' && this.type != 'password' && this.type != 'url')
            throw 'The type must be equals "text", "email", "password" or "url"';
    }

    setupValidation(){
        super.setupValidation();
    }

    validate(){
        super.validate();
        if(this.checkMatch)
            this.checkMatchFn(this.model.$viewValue, this.match);
    }

    checkMatchFn(value1, value2){
        this.model.$setValidity('match', ((value1 == null || value1 == "") && (value2 == null || value2 == "")) || (value1 == value2));
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
    bindToController: true,
    controller: TextInputController,
    controllerAs: '$component',
    template: TextInputTemplate,
    transclude: true
};