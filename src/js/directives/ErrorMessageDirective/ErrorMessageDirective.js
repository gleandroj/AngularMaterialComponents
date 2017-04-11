
export let ErrorMessageDirective = {
    selector:'errorMessage',
    fn: ()=>{
        return {
            scope:{
                error: '@',
                message: '@'
            },
            transclude: true,
            template: '<div ng-message="{{ error }}" class="md-input-message-animation" style="opacity:1; margin-top: 0px;" ng-transclude>{{ message }}</div>'
        }
    }
};