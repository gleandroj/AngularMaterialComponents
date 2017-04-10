/**
 * Created by FG0003 on 27/12/2016.
 */

import { ErrorMessageDirective } from './ErrorMessageDirective/ErrorMessageDirective';
import { ContentEditableDirective } from './ContentEditableDirective/ContentEditableDirective';

export default angular.module('runners.directives')
    .directive(ErrorMessageDirective.selector, ErrorMessageDirective.fn)
    .directive(ContentEditableDirective.selector, ContentEditableDirective.fn);