/**
 * Created by FG0003 on 09/03/2017.
 */

export class AbstractInputController {

    constructor($scope, AngularUtilService) {
        this.scope = $scope;
        this.util = AngularUtilService;
        this.value = null;
        this.initialized = false;
        this.modelOptions = {};
    }

    $onInit() {
        /*Check if name is defined, if not generate one to prevent errors*/
        if (this.util.isUndefined(this.name)) this.name = '_input_' + Math.random().toString(36).substr(2, 5);
        /*Get model value to local model value (used in input)*/
        this.model.$render = () => this.value = this.model.$viewValue;
        /*Force render if it not do automatic*/
        this.model.$render();
    }

    $postLink() {
        this.initialize();
        this.setupValidation();
        this.initialized = true;
    }

    initialize() {
        /*Initialize default var's*/
        if (this.util.isUndefined(this.modelOptions) || this.modelOptions == null) this.modelOptions = { allowInvalid: true, debounce: 150 };
        if (this.util.isUndefined(this.isDisabled)) this.isDisabled = false;
        if (this.util.isUndefined(this.isRequired)) this.isRequired = false;
        if (this.util.isUndefined(this.noFloat)) this.noFloat = false;
        if (this.util.isUndefined(this.minLength)) this.minLength = 0;
        if (this.util.isUndefined(this.label)) this.label = '';
        if (this.util.isUndefined(this.type)) this.type = 'text';
    }

    setupValidation() {
        /*Get all validators from input*/
        this.model.$validators = this.form[this.name].$validators;
        /*Override required validator*/
        this.addValidator('required', (modelValue, viewValue) => !this.isRequired || !this.model.$isEmpty(viewValue));
        /*Override pattern validator*/
        if (!this.util.isUndefined(this.pattern))
        /*Validate*/
        this.validate();
    }

    $onChanges(changesObj) {
        /*Validate when bindings update*/
        if (this.initialized) this.validate();
    }

    onChange() {
        /*Update model val when input change*/
        this.model.$setViewValue(this.value);
        /*Validate input*/
        this.validate();
    }

    get form() {
        /*Get form*/
        return this.scope['_form'];
    }

    set value(value) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    addValidator(key, fn) {
        /*Add a validator*/
        this.model.$validators[key] = this.form[this.name].$validators[key] = fn;
    }

    validate() {
        /*Validate model*/
        if (this.util.isDefined(this.model)) this.model.$validate();
        /*validate form*/
        if (this.util.isDefined(this.form) && this.util.isDefined(this.form[this.name])) this.form[this.name].$validate();
    }

    setTouched() {
        if (!this.model.$touched) {
            this.model.$setTouched();
            this.validate();
        }
    }

    setDirty() {
        if (!this.model.$touched) {
            this.model.$setDirty();
            this.validate();
        }
    }

    get errors() {
        return this.model.$error;
    }

    get valid() {
        return this.model && this.model.$valid;
    }

    get invalid() {
        return this.model && this.model.$invalid;
    }

    get touched() {
        return this.model && this.model.$touched;
    }

    get dirty() {
        return this.model && this.model.$dirty;
    }
}

export let AbstractInputComponent = {
    bindings: {
        pattern: '<',
        modelOptions: '<',
        isDisabled: '<',
        isRequired: '<',
        noFloat: '<',
        maxLength: '<',
        minLength: '<',
        name: '@',
        label: '@',
        icon: '@',
        type: '@'
    }
};