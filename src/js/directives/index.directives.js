/**
 * Created by FG0003 on 27/12/2016.
 */

import { ErrorMessageDirective } from './ErrorMessageDirective/ErrorMessageDirective';
import { ContentEditableDirective } from './ContentEditableDirective/ContentEditableDirective';

let directives = angular.module('angular-material-simple-components.directives', ['ngMaterial', 'ngMessages']);

directives.directive(ErrorMessageDirective.selector, ErrorMessageDirective.fn);
directives.directive(ContentEditableDirective.selector, ContentEditableDirective.fn);

export default directives;