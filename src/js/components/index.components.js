/**
 * Created by Gabriel L on 10/04/2017.
 */

import { TextInputComponent } from './TextInputComponent/TextInputComponent';
import { TextAreaInputComponent } from './TextAreaInputComponent/TextAreaInputComponent';
import { HtmlTextAreaInputComponent } from './HtmlTextAreaInputComponent/HtmlTextAreaInputComponent';
import { NumberInputComponent } from './NumberInputComponent/NumberInputComponent';
import { ImageInputComponent } from './ImageInputComponent/ImageInputComponent';
import { SearchInputComponent } from './SearchInputComponent/SearchInputComponent';
import { PaginationComponent } from './PaginationComponent/PaginationComponent';
import { DateInputComponent } from './DateInputComponent/DateInputComponent';
import { TimeInputComponent } from './TimeInputComponent/TimeInputComponent';

export default angular.module('angular-material-components.components')
    .component(TextInputComponent.selector, TextInputComponent)
    .component(TextAreaInputComponent.selector, TextAreaInputComponent)
    .component(HtmlTextAreaInputComponent.selector, HtmlTextAreaInputComponent)
    .component(NumberInputComponent.selector, NumberInputComponent)
    .component(ImageInputComponent.selector, ImageInputComponent)
    .component(SearchInputComponent.selector, SearchInputComponent)
    .component(PaginationComponent.selector, PaginationComponent)
    .component(DateInputComponent.selector, DateInputComponent)
    .component(TimeInputComponent.selector, TimeInputComponent);