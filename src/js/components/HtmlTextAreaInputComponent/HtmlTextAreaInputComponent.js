/**
 * Created by FG0003 on 29/12/2016.
 */

import { AbstractInputController, AbstractInputComponent } from './../AbstractInputComponent/AbstractInputComponent';
import HtmlTextAreaInputTemplate from './html-text-area-input.tpl.html';

import xml_icon from './../../../icons/xml.svg';
import link_off from './../../../icons/link_off.svg';

class HtmlTextAreaInputController extends AbstractInputController {

    constructor($scope, AngularUtilService, $mdDialog) {
        super($scope, AngularUtilService);
        this.dialogService = $mdDialog;
        this.preview = this.showHtml = false;
        this.xml_icon = xml_icon;
        this.link_off = link_off;
    }

    initialize(){
        super.initialize();
        this.range = document.createRange();
        this.range.selectNode(document.querySelector('#inputElement'));
    }

    setupValidation(){
        super.setupValidation();
    }

    exec($event, command, paramns){
        $event.preventDefault();
        return document.execCommand(command, false, paramns);
    }

    toggleHtml(){
        this.showHtml = !this.showHtml;
    }

    inserLink($event){
        $event.preventDefault();

        let selection = this.selection;
        if(!selection && selection.rangeCount < 0) return;
        let textLink = this.selectedString;
        if(textLink == null || textLink == '') return;

        let self = this;
        let range = selection.getRangeAt(selection.rangeCount - 1).cloneRange();

        let dialogInput = this.dialogService.prompt()
            .title('Adicionar Link')
            .placeholder('Url')
            .ok('Salvar')
            .cancel('Cancelar');

        this.dialogService.show(dialogInput)
            .then((url)=>{
                self.selection.removeAllRanges();
                self.selection.addRange(range);
                self.exec($event, 'insertHTML', '<a href="' + url + '" target="_blank" aria-label="' + textLink + '">' + textLink + '</a>');
                self.onChange();

            }, ()=>{
                self.selection.removeAllRanges();
                self.selection.addRange(range);
            });
    }

    insertImage($event){
        $event.preventDefault();
        let self = this;
        let dialogInput = this.dialogService.prompt()
            .title('Adicionar Imagem')
            .placeholder('Url')
            .ok('Salvar')
            .cancel('Cancelar');

        this.dialogService.show(dialogInput)
            .then((url)=>{
                document.getElementById('inputElement').focus();
                self.exec($event, 'insertImage', url);
                self.onChange();
            }, ()=>{
                document.getElementById('inputElement').focus();
            });
    }

    clean($event){
        this.exec($event, 'selectAll');
        this.exec($event, 'removeFormat');
    }

    get selection(){
        var sel = null;
        if (typeof window.getSelection != "undefined") {
            sel = window.getSelection();
        }
        return sel;
    }

    get selectedString() {
        var html = null;
        var sel = this.selection;
        if (sel && sel.rangeCount > 0) {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                let range = sel.getRangeAt(i);
                if(this.range && this.range.isPointInRange(range.startContainer.parentNode,1) && this.range.isPointInRange(range.endContainer.parentNode,1)){
                    container.appendChild(range.cloneContents());
                    html = container.innerHTML;
                }
            }
        }
        return html;
    }

    get canDoAction(){
        return (this.selectedString != null && this.selectedString != '' && this.selectedString.length > 0) && !this.showHtml && !this.preview;
    }

    isElementTag(tag){
        if(!this.canDoAction) return false;
        let isTag = false;

        if (typeof window.getSelection != "undefined") {
            var sel = window.getSelection();
            if (sel.rangeCount) {
                for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                    let range = sel.getRangeAt(i);
                    isTag = isTag || range.startContainer.parentNode.tagName == tag || range.endContainer.parentNode.tagName == tag;
                }
            }
        }
        return isTag;
    }
}

HtmlTextAreaInputController.$inject = ['$scope', 'AngularUtilService', '$mdDialog'];

export let HtmlTextAreaInputComponent = {
    selector: 'htmlTextAreaInput',
    require: {
        model: "ngModel"
    },
    bindings: Object.assign({
        maxRows: '<',
        rows: '<'
    }, AbstractInputComponent.bindings),
    controller: HtmlTextAreaInputController,
    controllerAs: '$component',
    template: HtmlTextAreaInputTemplate,
    transclude: true
};
