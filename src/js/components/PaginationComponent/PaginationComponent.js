/**
 * Created by FG0003 on 09/02/2017.
 */
import Template from './pagination.tpl.html';

import previous from './../../../icons/previous.svg';
import next from './../../../icons/next.svg';
import first from './../../../icons/first.svg';
import last from './../../../icons/last.svg';

class PaginationController{

    constructor(AngularUtilService){
        this.util = AngularUtilService;
        this.previous = previous;
        this.next = next;
        this.first = first;
        this.last = last;
    }

    get page(){
        if(this.currentPage != null && this.currentPage != 0)
            return this.currentPage;
        return 1;
    }

    set page(value){
        this.currentPage = value;
    }

    $onChanges(){
        if(this.currentPage > this.numberOfPages){
            this.currentPage = this.numberOfPages;
        }
    }

    $onInit(){

    }

    get numberOfPages(){
        if(this.nItems == 0)
            return 1;
        return Math.ceil(this.nItems/this.itemsPerPage);
    }
}

PaginationController.$inject = ['AngularUtilService'];

export let PaginationComponent = {
    selector:'mdPagination',
    bindings:{
        itemsPerPage:'=',
        currentPage:'=',
        nItems: '<',
        isDisabled: '<'
    },
    controller:PaginationController,
    controllerAs:'$pagination',
    template: Template
};
