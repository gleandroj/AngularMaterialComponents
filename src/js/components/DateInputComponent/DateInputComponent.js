/**
 * Created by FG0003 on 29/12/2016.
 */

import moment from 'moment';
import { AbstractInputController, AbstractInputComponent } from './../AbstractInputComponent/AbstractInputComponent';
import DateInputTemplate from './date-input.tpl.html';

class DateInputController extends AbstractInputController {

    constructor($scope, AngularUtilService) {
        super($scope, AngularUtilService);
    }

    $onInit(){
        /*Check if name is defined, if not generate one to prevent errors*/
        if(this.util.isUndefined(this.name)) this.name = '_input_'+Math.random().toString(36).substr(2, 5);
        this.model.$render = () => {
            /*Initialize value from model*/
            this.value = this.parseDate(this.model.$viewValue);
        };
        /*Force render if it not do automatic*/
        this.model.$render();
    }

    initialize(){
        super.initialize();
        let _date = new Date();

        if(this.util.isUndefined(this.maxDate)) this.maxDate = new Date(_date.getFullYear() - 50, _date.getMonth(), _date.getDate());
        if(this.util.isUndefined(this.minDate)) this.minDate = new Date(_date.getFullYear() + 50, _date.getMonth(), _date.getDate());
        if(this.util.isUndefined(this.filterDate)) this.filterDate = function () { return true; };

        /*Fix problem when model does not have date (initialize it with today date)*/
        this.util.timeout(()=> { this.onChange(); }, 0);
    }

    setupValidation() {
        super.setupValidation();
    }

    onChange(){
        /*Update model val when input change*/
        this.model.$setViewValue(this.value != null ? moment(this.value).format('YYYY-MM-DD HH:mm:ss') : '');
        /*Add Mask to datepicker*/
        this.maskDate = this.value != null ? moment(this.value).format('DD/MM/YYYY') : '';
        /*Validate input*/
        this.validate();
    }

    validate(){
        super.validate();
    }

    parseDate(dateString){
        var m = moment(dateString, 'YYYY-MM-DD HH:mm:ss');
        /*Try parse date string, if not return today date*/
        return m.isValid() ? m.toDate() : new Date();
    }

    get errors(){
        return this.form.$error;
    }
}

DateInputController.$inject = ['$scope', 'AngularUtilService'];

export let DateInputComponent = {
    selector: 'dateInput',
    require: {
        model: "ngModel"
    },
    bindings: Object.assign({
        maxDate: '<',
        minDate: '<',
        filterDate:'<'
    }, AbstractInputComponent.bindings),
    controller: DateInputController,
    controllerAs: '$component',
    template: DateInputTemplate,
    transclude: true
};
