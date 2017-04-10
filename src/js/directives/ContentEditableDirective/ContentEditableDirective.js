/**
 * Created by FG0003 on 13/02/2017.
 */


export let ContentEditableDirective = {
    selector:'contenteditable',
    fn: ['AngularUtilService', (AngularUtilService)=>{

        return {
            require:'?ngModel',
            link:(scope, element, attrs, ngModel)=>{
                if(!ngModel) return; // do nothing if no ng-model

                // Specify how UI should be updated
                ngModel.$render = function() {
                    element.html(ngModel.$viewValue || '');
                };

                // Listen for change events to enable binding
                element.on('blur keyup change', function() {
                    if(!scope.$$phase) {
                        AngularUtilService.timeout(()=>{
                            scope.$apply(read);
                        }, 1);
                    }
                });
                ngModel.$render();
                //read(); // initialize
                // Write data to the model
                function read() {
                    var html = element.html();
                    // When we clear the content editable the browser leaves a <br> behind
                    // If strip-br attribute is provided then we strip this out
                    if( attrs.stripBr && html == '<br>' ) {
                        html = '';
                    }
                    ngModel.$setViewValue(html);
                }
            }
        }
    }]
};