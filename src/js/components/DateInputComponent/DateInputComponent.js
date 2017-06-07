/**
 * Created by FG0003 on 29/12/2016.
 */

import moment from 'moment';
import { AbstractInputController, AbstractInputComponent } from './../AbstractInputComponent/AbstractInputComponent';
import DateInputTemplate from './date-input.tpl.html';

class DateInputController extends AbstractInputController {

    constructor($scope, AngularUtilService, $mdDateLocale) {
        super($scope, AngularUtilService);
        this.dateService = $mdDateLocale;
        this.defaultDateFormat = 'YYYY-MM-DD HH:mm:ss';
    }

    $onInit(){
        /*Check if name is defined, if not generate one to prevent errors*/
        if(this.util.isUndefined(this.name)) this.name = '_input_'+Math.random().toString(36).substr(2, 5);
        this.model.$render = () => {
            /*Initialize value from model*/
            let parsed = this.parseDate(this.model.$viewValue);
            this.value = isNaN(parsed) ? null : parsed;
        };
        /*Force render if it not do automatic*/
        //this.model.$render();
    }

    initialize(){
        super.initialize();
        let _date = new Date();

        if(this.util.isUndefined(this.maxDate)) this.maxDate = new Date(_date.getFullYear() - 50, _date.getMonth(), _date.getDate());
        if(this.util.isUndefined(this.minDate)) this.minDate = new Date(_date.getFullYear() + 50, _date.getMonth(), _date.getDate());
        if(this.util.isUndefined(this.filterDate)) this.filterDate = function () { return true; };
        /*
        this.mdDateInputScope = this.util.element((angular.element(document).find('md-datepicker')[0].children[1].children[0])).scope();

        console.log(this.mdDateInputScope);
        */
        /*
        this.model.$formatters.forEach((formatter) => {
            this.mdDateInputScope.ctrl.ngModelCtrl.$formatters.push(formatter);
        });

        console.log(this.model.$formatters);
        console.log(this.form[this.name].$formatters);
        console.log(this.mdDateInputScope.ctrl.ngModelCtrl.$formatters);
        */
        /*Fix problem when model does not have date (initialize it with today date)*/
        //this.util.timeout(()=> { this.onChange(); }, 0);

        /*Add mask to mdDatePicker*/
        /*this.scope.$watch(() => this.mdDateInputScope.ctrl.ngModelCtrl.$viewValue, ()=>{
            console.log(this.mdDateInputScope.ctrl.ngModelCtrl);
        });
        this.scope.$watch(() => this.mdDateInputScope.ctrl.ngModelCtrl.$viewValue, ()=>{
            console.log(this.mdDateInputScope.ctrl.ngModelCtrl);
        });*/
    }

    setupValidation() {
        super.setupValidation();
    }

    onChange(){
        /*Update model val when input change*/
        this.model.$setViewValue(this.value != null ? moment(this.value).format(this.dateFormat || this.defaultDateFormat) : '');
        /*Add Mask to datepicker*/
        this.validate();
    }


    parseDate(dateString){
        var m = moment(dateString, this.dateFormat || this.defaultDateFormat, true);
        return m.isValid() ? m.toDate() : new Date(NaN);
    }
}

DateInputController.$inject = ['$scope', 'AngularUtilService', '$mdDateLocale'];

export let DateInputComponent = {
    selector: 'dateInput',
    require: {
        model: "ngModel"
    },
    bindings: Object.assign({
        dateFormat: '@',
        maxDate: '<',
        minDate: '<',
        filterDate:'<',
        dateMask:'@'
    }, AbstractInputComponent.bindings),
    controller: DateInputController,
    controllerAs: '$component',
    template: DateInputTemplate,
    transclude: true
};
