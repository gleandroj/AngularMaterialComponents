/**
 * Created by FG0003 on 20/02/2017.
 */

import moment from 'moment';

DateTimeMaskConfig.$inject = ['$mdDateLocaleProvider', '$provide'];

export default function DateTimeMaskConfig($mdDateLocaleProvider, $provide) {

    //Default Date Format, you can override this on your config file
    $mdDateLocaleProvider.formatDate = function(date) {
        return moment(date).format('MM/DD/YYYY');
    };

    //Add Mask To <md-datepicker>
    $provide.decorator('mdDatepickerDirective', ['$delegate',
        function ($delegate) {
            let directive = $delegate[0];

            directive.scope.mdDate = '=mdDate';
            directive.scope.mdMask = '@mdMask';

            let template = directive.template;

            directive.template = function (tElement, tAttrs) {

                var originalTemplate = template.apply(this, arguments);

                var element = angular.element(originalTemplate);
                element.find('input').attr('mask-clean', 'false');
                element.find('input').attr('mask-restrict', 'reject');
                element.find('input').attr('mask-validate', 'false');
                element.find('input').attr('mask', '{{ ::ctrl.mdMask }}');
                element.find('input').attr('ng-model', 'ctrl.mdDate');

                let newTemplate = '';
                for(let i = 0; i < element.length ; i++)
                    newTemplate += element[i].outerHTML;
                return newTemplate;
            };

            return $delegate;
        }
    ]);
}
