/**
 * Created by FG0003 on 29/12/2016.
 */

import moment from 'moment';
import { AbstractInputController, AbstractInputComponent } from './../AbstractInputComponent/AbstractInputComponent';
import TimeInputTemplate from './time-input.tpl.html';
import access_time from './../../../icons/access_time.svg';


class TimeInputController extends AbstractInputController {

    constructor($scope, AngularUtilService) {
        super($scope, AngularUtilService);
        this.fallbackIcon = access_time;
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
        /*Fix problem when model does not have date (initialize it with today date)*/
        this.util.timeout(()=> { this.onChange(); }, 0);
    }

    setupValidation() {
        super.setupValidation();
    }

    onChange(){
        /*Update model val when input change*/
        this.model.$setViewValue(this.value != null ? moment(this.value).format('YYYY-MM-DD HH:mm:ss') : '');
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
}

TimeInputController.$inject = ['$scope', 'AngularUtilService'];

export let TimeInputComponent = {
    selector: 'timeInput',
    require: {
        model: "ngModel"
    },
    bindings: Object.assign({}, AbstractInputComponent.bindings),
    controller: TimeInputController,
    controllerAs: '$component',
    template: TimeInputTemplate,
    transclude: true
};
