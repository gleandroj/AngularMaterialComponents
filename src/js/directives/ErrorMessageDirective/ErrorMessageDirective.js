
export let ErrorMessageDirective = {
    selector:'errorMessage',
    fn: ()=>{
        return {
            scope:{
                name: '@',
                error: '@',
                message: '@',
                animation:'@'
            },
            transclude: true,
            template: '<div ng-message="{{ name || error }}" class="md-input-message-animation" style="opacity:1; margin-top: 0px;" ng-transclude>{{ message }}</div>'
        }
    }
};