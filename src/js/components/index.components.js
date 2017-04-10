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

let components = angular.module('angular-material-components.components', ['ngMaterial', 'ngMessages']);

components.component(TextInputComponent.selector, TextInputComponent);
components.component(TextAreaInputComponent.selector, TextAreaInputComponent);
components.component(HtmlTextAreaInputComponent.selector, HtmlTextAreaInputComponent);
components.component(NumberInputComponent.selector, NumberInputComponent);
components.component(ImageInputComponent.selector, ImageInputComponent);
components.component(SearchInputComponent.selector, SearchInputComponent);
components.component(PaginationComponent.selector, PaginationComponent);
components.component(DateInputComponent.selector, DateInputComponent);
components.component(TimeInputComponent.selector, TimeInputComponent);

export default components;