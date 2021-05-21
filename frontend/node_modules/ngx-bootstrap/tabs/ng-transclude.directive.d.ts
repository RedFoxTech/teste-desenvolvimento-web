import { TemplateRef, ViewContainerRef } from '@angular/core';
export declare class NgTranscludeDirective {
    viewRef: ViewContainerRef;
    protected _viewRef: ViewContainerRef;
    protected _ngTransclude: TemplateRef<any>;
    set ngTransclude(templateRef: TemplateRef<any>);
    get ngTransclude(): TemplateRef<any>;
    constructor(viewRef: ViewContainerRef);
}
