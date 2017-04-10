/**
 * Created by FG0003 on 29/12/2016.
 */

import { AbstractInputController, AbstractInputComponent } from './../AbstractInputComponent/AbstractInputComponent';
import SearchInputTemplate from './search-input.tpl.html';

class SearchInputController extends AbstractInputController {

    constructor($scope, AngularUtilService) {
        super($scope, AngularUtilService);
    }

    focus(id){
        document.getElementById(id).focus();
    }

    clean(){
        this.value = null;
        this.onChange();
    }
}

SearchInputController.$inject = ['$scope', 'AngularUtilService'];

export let SearchInputComponent = {
    selector: 'searchInput',
    require: {
        model: "ngModel"
    },
    bindings: Object.assign({}, AbstractInputComponent.bindings),
    controller: SearchInputController,
    controllerAs: '$component',
    template: SearchInputTemplate,
    transclude: true
};
