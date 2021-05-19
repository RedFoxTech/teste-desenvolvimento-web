/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter, RendererFactory2, Inject, Optional } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { ModalBackdropComponent } from './modal-backdrop.component';
import { ModalContainerComponent } from './modal-container.component';
import { CLASS_NAME, modalConfigDefaults, ModalOptions, TRANSITION_DURATIONS, MODAL_CONFIG_DEFAULT_OVERRIDE } from './modal-options.class';
import { BsModalRef } from './bs-modal-ref.service';
export class BsModalService {
    /**
     * @param {?} rendererFactory
     * @param {?} clf
     * @param {?} modalDefaultOption
     */
    constructor(rendererFactory, clf, modalDefaultOption) {
        this.clf = clf;
        this.modalDefaultOption = modalDefaultOption;
        // tslint:disable-next-line:no-any
        this.onShow = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.onShown = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.onHide = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.onHidden = new EventEmitter();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = null;
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(null, null, null);
        this._renderer = rendererFactory.createRenderer(null, null);
        this.config = modalDefaultOption ?
            (Object.assign({}, modalConfigDefaults, modalDefaultOption)) :
            modalConfigDefaults;
    }
    /**
     * Shows a modal
     * @template T
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    show(
    // tslint:disable-next-line:no-any
    content, config) {
        this.modalsCount++;
        this._createLoaders();
        /** @type {?} */
        const id = (config === null || config === void 0 ? void 0 : config.id) || (new Date()).getUTCMilliseconds();
        this.config = this.modalDefaultOption ?
            Object.assign({}, modalConfigDefaults, this.modalDefaultOption, config) :
            Object.assign({}, modalConfigDefaults, config);
        this.config.id = id;
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    }
    /**
     * @param {?=} id
     * @return {?}
     */
    hide(id) {
        if (this.modalsCount === 1 || id == null) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 && id != null ? this.modalsCount - 1 : 0;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._hideModal(id);
            this.removeLoaders(id);
        }), this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
    }
    /**
     * @return {?}
     */
    _showBackdrop() {
        /** @type {?} */
        const isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        /** @type {?} */
        const isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    }
    /**
     * @return {?}
     */
    _hideBackdrop() {
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        /** @type {?} */
        const duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
        setTimeout((/**
         * @return {?}
         */
        () => this.removeBackdrop()), duration);
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} content
     * @return {?}
     */
    _showModal(content) {
        var _a;
        /** @type {?} */
        const modalLoader = this.loaders[this.loaders.length - 1];
        if (this.config && this.config.providers) {
            for (const provider of this.config.providers) {
                modalLoader.provide(provider);
            }
        }
        /** @type {?} */
        const bsModalRef = new BsModalRef();
        /** @type {?} */
        const modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: BsModalRef, useValue: bsModalRef })
            .attach(ModalContainerComponent)
            .to('body');
        bsModalRef.hide = (/**
         * @return {?}
         */
        () => modalContainerRef.instance.hide());
        bsModalRef.setClass = (/**
         * @param {?} newClass
         * @return {?}
         */
        (newClass) => {
            modalContainerRef.instance.config.class = newClass;
        });
        bsModalRef.onHidden = new EventEmitter();
        bsModalRef.onHide = new EventEmitter();
        this.copyEvent(modalLoader.onBeforeHide, bsModalRef.onHide);
        this.copyEvent(modalLoader.onHidden, bsModalRef.onHidden);
        // call 'show' method after assign setClass in bsModalRef.
        // it makes modal component's bsModalRef available to call setClass method
        modalContainerRef.show({
            content,
            isAnimated: this.config.animated,
            initialState: this.config.initialState,
            bsModalService: this,
            id: this.config.id
        });
        modalContainerRef.instance.level = this.getModalsCount();
        bsModalRef.content = modalLoader.getInnerComponent() || null;
        bsModalRef.id = (_a = modalContainerRef.instance.config) === null || _a === void 0 ? void 0 : _a.id;
        return bsModalRef;
    }
    /**
     * @param {?=} id
     * @return {?}
     */
    _hideModal(id) {
        if (id != null) {
            /** @type {?} */
            const indexToRemove = this.loaders.findIndex((/**
             * @param {?} loader
             * @return {?}
             */
            loader => loader.instance.config.id === id));
            /** @type {?} */
            const modalLoader = this.loaders[indexToRemove];
            if (modalLoader) {
                modalLoader.hide(id);
            }
        }
        else {
            this.loaders.forEach((/**
             * @param {?} loader
             * @return {?}
             */
            (loader) => {
                loader.hide(loader.instance.config.id);
            }));
        }
    }
    /**
     * @return {?}
     */
    getModalsCount() {
        return this.modalsCount;
    }
    /**
     * @param {?} reason
     * @return {?}
     */
    setDismissReason(reason) {
        this.lastDismissReason = reason;
    }
    /**
     * @return {?}
     */
    removeBackdrop() {
        this._renderer.removeClass(document.body, CLASS_NAME.OPEN);
        this._backdropLoader.hide();
        this.backdropRef = null;
    }
    /** Checks if the body is overflowing and sets scrollbar width */
    /**
     * \@internal
     * @return {?}
     */
    checkScrollbar() {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    }
    /**
     * @return {?}
     */
    setScrollbar() {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window
            .getComputedStyle(document.body)
            .getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = `${this.originalBodyPadding +
                this.scrollbarWidth}px`;
        }
    }
    /**
     * @private
     * @return {?}
     */
    resetScrollbar() {
        document.body.style.paddingRight = `${this.originalBodyPadding}px`;
    }
    // thx d.walsh
    /**
     * @private
     * @return {?}
     */
    getScrollbarWidth() {
        /** @type {?} */
        const scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(document.body, scrollDiv);
        /** @type {?} */
        const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    }
    /**
     * @private
     * @return {?}
     */
    _createLoaders() {
        /** @type {?} */
        const loader = this.clf.createLoader(null, null, null);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    }
    /**
     * @private
     * @param {?=} id
     * @return {?}
     */
    removeLoaders(id) {
        if (id != null) {
            /** @type {?} */
            const indexToRemove = this.loaders.findIndex((/**
             * @param {?} loader
             * @return {?}
             */
            loader => loader.instance.config.id === id));
            if (indexToRemove >= 0) {
                this.loaders.splice(indexToRemove, 1);
                this.loaders.forEach((/**
                 * @param {?} loader
                 * @param {?} i
                 * @return {?}
                 */
                (loader, i) => {
                    loader.instance.level = i + 1;
                }));
            }
        }
        else {
            this.loaders.splice(0, this.loaders.length);
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    copyEvent(from, to) {
        from.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            to.emit(this.lastDismissReason || data);
        }));
    }
}
BsModalService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BsModalService.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: ComponentLoaderFactory },
    { type: ModalOptions, decorators: [{ type: Optional }, { type: Inject, args: [MODAL_CONFIG_DEFAULT_OVERRIDE,] }] }
];
if (false) {
    /** @type {?} */
    BsModalService.prototype.config;
    /** @type {?} */
    BsModalService.prototype.onShow;
    /** @type {?} */
    BsModalService.prototype.onShown;
    /** @type {?} */
    BsModalService.prototype.onHide;
    /** @type {?} */
    BsModalService.prototype.onHidden;
    /**
     * @type {?}
     * @protected
     */
    BsModalService.prototype.isBodyOverflowing;
    /**
     * @type {?}
     * @protected
     */
    BsModalService.prototype.originalBodyPadding;
    /**
     * @type {?}
     * @protected
     */
    BsModalService.prototype.scrollbarWidth;
    /**
     * @type {?}
     * @protected
     */
    BsModalService.prototype.backdropRef;
    /**
     * @type {?}
     * @private
     */
    BsModalService.prototype._backdropLoader;
    /**
     * @type {?}
     * @private
     */
    BsModalService.prototype.modalsCount;
    /**
     * @type {?}
     * @private
     */
    BsModalService.prototype.lastDismissReason;
    /**
     * @type {?}
     * @private
     */
    BsModalService.prototype.loaders;
    /**
     * @type {?}
     * @private
     */
    BsModalService.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    BsModalService.prototype.clf;
    /**
     * @type {?}
     * @private
     */
    BsModalService.prototype.modalDefaultOption;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvbW9kYWwvIiwic291cmNlcyI6WyJicy1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsVUFBVSxFQUVWLFlBQVksRUFFWixnQkFBZ0IsRUFDaEIsTUFBTSxFQUNOLFFBQVEsRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDekYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUNMLFVBQVUsRUFDVixtQkFBbUIsRUFDbkIsWUFBWSxFQUNaLG9CQUFvQixFQUNwQiw2QkFBNkIsRUFDOUIsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHcEQsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQTJCekIsWUFDRSxlQUFpQyxFQUN6QixHQUEyQixFQUN3QixrQkFBZ0M7UUFEbkYsUUFBRyxHQUFILEdBQUcsQ0FBd0I7UUFDd0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFjOztRQXpCN0YsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOztRQUUvQyxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7O1FBRWhELFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7UUFFL0MsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZDLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQix3QkFBbUIsR0FBRyxDQUFDLENBQUM7UUFFeEIsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFJckIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsc0JBQWlC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QzthQUNIO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFHTyxTQUFTLENBQUMsSUFBdUIsRUFBRSxFQUFxQjtRQUM5RCxJQUFJLENBQUMsU0FBUzs7OztRQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7WUFDM0IsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF6UEYsVUFBVTs7OztZQWpCVCxnQkFBZ0I7WUFLUSxzQkFBc0I7WUFNOUMsWUFBWSx1QkFxQ1QsUUFBUSxZQUFJLE1BQU0sU0FBQyw2QkFBNkI7Ozs7SUE1Qm5ELGdDQUFxQjs7SUFHckIsZ0NBQStDOztJQUUvQyxpQ0FBZ0Q7O0lBRWhELGdDQUErQzs7SUFFL0Msa0NBQWlEOzs7OztJQUVqRCwyQ0FBb0M7Ozs7O0lBQ3BDLDZDQUFrQzs7Ozs7SUFFbEMsd0NBQTZCOzs7OztJQUU3QixxQ0FBNEQ7Ozs7O0lBQzVELHlDQUFpRTs7Ozs7SUFDakUscUNBQXdCOzs7OztJQUN4QiwyQ0FBc0M7Ozs7O0lBRXRDLGlDQUFpRTs7Ozs7SUFFakUsbUNBQTZCOzs7OztJQUkzQiw2QkFBbUM7Ozs7O0lBQ25DLDRDQUEyRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0YWJsZSxcbiAgVGVtcGxhdGVSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgUmVuZGVyZXIyLFxuICBSZW5kZXJlckZhY3RvcnkyLFxuICBJbmplY3QsXG4gIE9wdGlvbmFsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgTW9kYWxCYWNrZHJvcENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtYmFja2Ryb3AuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIENMQVNTX05BTUUsXG4gIG1vZGFsQ29uZmlnRGVmYXVsdHMsXG4gIE1vZGFsT3B0aW9ucyxcbiAgVFJBTlNJVElPTl9EVVJBVElPTlMsXG4gIE1PREFMX0NPTkZJR19ERUZBVUxUX09WRVJSSURFXG59IGZyb20gJy4vbW9kYWwtb3B0aW9ucy5jbGFzcyc7XG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gZnJvbSAnLi9icy1tb2RhbC1yZWYuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCc01vZGFsU2VydmljZSB7XG4gIC8vIGNvbnN0cnVjdG9yIHByb3BzXG4gIGNvbmZpZzogTW9kYWxPcHRpb25zO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgb25TaG93OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvbkhpZGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcm90ZWN0ZWQgaXNCb2R5T3ZlcmZsb3dpbmcgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIG9yaWdpbmFsQm9keVBhZGRpbmcgPSAwO1xuXG4gIHByb3RlY3RlZCBzY3JvbGxiYXJXaWR0aCA9IDA7XG5cbiAgcHJvdGVjdGVkIGJhY2tkcm9wUmVmOiBDb21wb25lbnRSZWY8TW9kYWxCYWNrZHJvcENvbXBvbmVudD47XG4gIHByaXZhdGUgX2JhY2tkcm9wTG9hZGVyOiBDb21wb25lbnRMb2FkZXI8TW9kYWxCYWNrZHJvcENvbXBvbmVudD47XG4gIHByaXZhdGUgbW9kYWxzQ291bnQgPSAwO1xuICBwcml2YXRlIGxhc3REaXNtaXNzUmVhc29uOiBhbnkgPSBudWxsO1xuXG4gIHByaXZhdGUgbG9hZGVyczogQ29tcG9uZW50TG9hZGVyPE1vZGFsQ29udGFpbmVyQ29tcG9uZW50PltdID0gW107XG5cbiAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgcHJpdmF0ZSBjbGY6IENvbXBvbmVudExvYWRlckZhY3RvcnksXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChNT0RBTF9DT05GSUdfREVGQVVMVF9PVkVSUklERSkgcHJpdmF0ZSBtb2RhbERlZmF1bHRPcHRpb246IE1vZGFsT3B0aW9ucykge1xuICAgIHRoaXMuX2JhY2tkcm9wTG9hZGVyID0gdGhpcy5jbGYuY3JlYXRlTG9hZGVyPE1vZGFsQmFja2Ryb3BDb21wb25lbnQ+KFxuICAgICAgbnVsbCxcbiAgICAgIG51bGwsXG4gICAgICBudWxsXG4gICAgKTtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgICB0aGlzLmNvbmZpZyA9IG1vZGFsRGVmYXVsdE9wdGlvbiA/XG4gICAgICAoT2JqZWN0LmFzc2lnbih7fSwgbW9kYWxDb25maWdEZWZhdWx0cywgbW9kYWxEZWZhdWx0T3B0aW9uKSkgOlxuICAgICAgbW9kYWxDb25maWdEZWZhdWx0cztcbiAgfVxuXG4gIC8qKiBTaG93cyBhIG1vZGFsICovXG4gIHNob3c8VCA9IE9iamVjdD4oXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gfCB7IG5ldyguLi5hcmdzOiBhbnlbXSk6IFQgfSxcbiAgICBjb25maWc/OiBNb2RhbE9wdGlvbnM8VD5cbiAgKTogQnNNb2RhbFJlZjxUPiB7XG4gICAgdGhpcy5tb2RhbHNDb3VudCsrO1xuICAgIHRoaXMuX2NyZWF0ZUxvYWRlcnMoKTtcblxuICAgIGNvbnN0IGlkID0gY29uZmlnPy5pZCB8fCAobmV3IERhdGUoKSkuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7IC8vIG11c3QgYmUgZGlmZmVyZW50IHBlciBldmVyeSBzaG93KCkgY2FsbFxuICAgIHRoaXMuY29uZmlnID0gdGhpcy5tb2RhbERlZmF1bHRPcHRpb24gP1xuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgbW9kYWxDb25maWdEZWZhdWx0cywgdGhpcy5tb2RhbERlZmF1bHRPcHRpb24sIGNvbmZpZykgOlxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgbW9kYWxDb25maWdEZWZhdWx0cywgY29uZmlnKTtcbiAgICB0aGlzLmNvbmZpZy5pZCA9IGlkO1xuXG4gICAgdGhpcy5fc2hvd0JhY2tkcm9wKCk7XG4gICAgdGhpcy5sYXN0RGlzbWlzc1JlYXNvbiA9IG51bGw7XG5cbiAgICByZXR1cm4gdGhpcy5fc2hvd01vZGFsKGNvbnRlbnQpO1xuICB9XG5cbiAgaGlkZShpZD86IG51bWJlcikge1xuICAgIGlmICh0aGlzLm1vZGFsc0NvdW50ID09PSAxIHx8IGlkID09IG51bGwpIHtcbiAgICAgIHRoaXMuX2hpZGVCYWNrZHJvcCgpO1xuICAgICAgdGhpcy5yZXNldFNjcm9sbGJhcigpO1xuICAgIH1cbiAgICB0aGlzLm1vZGFsc0NvdW50ID0gdGhpcy5tb2RhbHNDb3VudCA+PSAxICYmIGlkICE9IG51bGwgPyB0aGlzLm1vZGFsc0NvdW50IC0gMSA6IDA7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9oaWRlTW9kYWwoaWQpO1xuICAgICAgdGhpcy5yZW1vdmVMb2FkZXJzKGlkKTtcbiAgICB9LCB0aGlzLmNvbmZpZy5hbmltYXRlZCA/IFRSQU5TSVRJT05fRFVSQVRJT05TLkJBQ0tEUk9QIDogMCk7XG4gIH1cblxuICBfc2hvd0JhY2tkcm9wKCk6IHZvaWQge1xuICAgIGNvbnN0IGlzQmFja2Ryb3BFbmFibGVkID1cbiAgICAgIHRoaXMuY29uZmlnLmJhY2tkcm9wIHx8IHRoaXMuY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJztcbiAgICBjb25zdCBpc0JhY2tkcm9wSW5ET00gPVxuICAgICAgIXRoaXMuYmFja2Ryb3BSZWYgfHwgIXRoaXMuYmFja2Ryb3BSZWYuaW5zdGFuY2UuaXNTaG93bjtcblxuICAgIGlmICh0aGlzLm1vZGFsc0NvdW50ID09PSAxKSB7XG4gICAgICB0aGlzLnJlbW92ZUJhY2tkcm9wKCk7XG5cbiAgICAgIGlmIChpc0JhY2tkcm9wRW5hYmxlZCAmJiBpc0JhY2tkcm9wSW5ET00pIHtcbiAgICAgICAgdGhpcy5fYmFja2Ryb3BMb2FkZXJcbiAgICAgICAgICAuYXR0YWNoKE1vZGFsQmFja2Ryb3BDb21wb25lbnQpXG4gICAgICAgICAgLnRvKCdib2R5JylcbiAgICAgICAgICAuc2hvdyh7IGlzQW5pbWF0ZWQ6IHRoaXMuY29uZmlnLmFuaW1hdGVkIH0pO1xuICAgICAgICB0aGlzLmJhY2tkcm9wUmVmID0gdGhpcy5fYmFja2Ryb3BMb2FkZXIuX2NvbXBvbmVudFJlZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaGlkZUJhY2tkcm9wKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5iYWNrZHJvcFJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmJhY2tkcm9wUmVmLmluc3RhbmNlLmlzU2hvd24gPSBmYWxzZTtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuY29uZmlnLmFuaW1hdGVkID8gVFJBTlNJVElPTl9EVVJBVElPTlMuQkFDS0RST1AgOiAwO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW1vdmVCYWNrZHJvcCgpLCBkdXJhdGlvbik7XG4gIH1cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBfc2hvd01vZGFsKGNvbnRlbnQ6IGFueSk6IEJzTW9kYWxSZWYge1xuICAgIGNvbnN0IG1vZGFsTG9hZGVyID0gdGhpcy5sb2FkZXJzW3RoaXMubG9hZGVycy5sZW5ndGggLSAxXTtcbiAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcucHJvdmlkZXJzKSB7XG4gICAgICBmb3IgKGNvbnN0IHByb3ZpZGVyIG9mIHRoaXMuY29uZmlnLnByb3ZpZGVycykge1xuICAgICAgICBtb2RhbExvYWRlci5wcm92aWRlKHByb3ZpZGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBic01vZGFsUmVmID0gbmV3IEJzTW9kYWxSZWYoKTtcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lclJlZiA9IG1vZGFsTG9hZGVyXG4gICAgICAucHJvdmlkZSh7IHByb3ZpZGU6IE1vZGFsT3B0aW9ucywgdXNlVmFsdWU6IHRoaXMuY29uZmlnIH0pXG4gICAgICAucHJvdmlkZSh7IHByb3ZpZGU6IEJzTW9kYWxSZWYsIHVzZVZhbHVlOiBic01vZGFsUmVmIH0pXG4gICAgICAuYXR0YWNoKE1vZGFsQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgLnRvKCdib2R5Jyk7XG4gICAgYnNNb2RhbFJlZi5oaWRlID0gKCkgPT4gbW9kYWxDb250YWluZXJSZWYuaW5zdGFuY2UuaGlkZSgpO1xuICAgIGJzTW9kYWxSZWYuc2V0Q2xhc3MgPSAobmV3Q2xhc3M6IHN0cmluZykgPT4ge1xuICAgICAgbW9kYWxDb250YWluZXJSZWYuaW5zdGFuY2UuY29uZmlnLmNsYXNzID0gbmV3Q2xhc3M7XG4gICAgfTtcblxuICAgIGJzTW9kYWxSZWYub25IaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBic01vZGFsUmVmLm9uSGlkZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgdGhpcy5jb3B5RXZlbnQobW9kYWxMb2FkZXIub25CZWZvcmVIaWRlLCBic01vZGFsUmVmLm9uSGlkZSk7XG4gICAgdGhpcy5jb3B5RXZlbnQobW9kYWxMb2FkZXIub25IaWRkZW4sIGJzTW9kYWxSZWYub25IaWRkZW4pO1xuICAgIC8vIGNhbGwgJ3Nob3cnIG1ldGhvZCBhZnRlciBhc3NpZ24gc2V0Q2xhc3MgaW4gYnNNb2RhbFJlZi5cbiAgICAvLyBpdCBtYWtlcyBtb2RhbCBjb21wb25lbnQncyBic01vZGFsUmVmIGF2YWlsYWJsZSB0byBjYWxsIHNldENsYXNzIG1ldGhvZFxuICAgIG1vZGFsQ29udGFpbmVyUmVmLnNob3coe1xuICAgICAgY29udGVudCxcbiAgICAgIGlzQW5pbWF0ZWQ6IHRoaXMuY29uZmlnLmFuaW1hdGVkLFxuICAgICAgaW5pdGlhbFN0YXRlOiB0aGlzLmNvbmZpZy5pbml0aWFsU3RhdGUsXG4gICAgICBic01vZGFsU2VydmljZTogdGhpcyxcbiAgICAgIGlkOiB0aGlzLmNvbmZpZy5pZFxuICAgIH0pO1xuICAgIG1vZGFsQ29udGFpbmVyUmVmLmluc3RhbmNlLmxldmVsID0gdGhpcy5nZXRNb2RhbHNDb3VudCgpO1xuXG4gICAgYnNNb2RhbFJlZi5jb250ZW50ID0gbW9kYWxMb2FkZXIuZ2V0SW5uZXJDb21wb25lbnQoKSB8fCBudWxsO1xuICAgIGJzTW9kYWxSZWYuaWQgPSBtb2RhbENvbnRhaW5lclJlZi5pbnN0YW5jZS5jb25maWc/LmlkO1xuXG4gICAgcmV0dXJuIGJzTW9kYWxSZWY7XG4gIH1cblxuICBfaGlkZU1vZGFsKGlkPzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IGluZGV4VG9SZW1vdmUgPSB0aGlzLmxvYWRlcnMuZmluZEluZGV4KGxvYWRlciA9PiBsb2FkZXIuaW5zdGFuY2UuY29uZmlnLmlkID09PSBpZCk7XG4gICAgICBjb25zdCBtb2RhbExvYWRlciA9IHRoaXMubG9hZGVyc1tpbmRleFRvUmVtb3ZlXTtcbiAgICAgIGlmIChtb2RhbExvYWRlcikge1xuICAgICAgICBtb2RhbExvYWRlci5oaWRlKGlkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkZXJzLmZvckVhY2goXG4gICAgICAgIChsb2FkZXI6IENvbXBvbmVudExvYWRlcjxNb2RhbENvbnRhaW5lckNvbXBvbmVudD4pID0+IHtcbiAgICAgICAgICBsb2FkZXIuaGlkZShsb2FkZXIuaW5zdGFuY2UuY29uZmlnLmlkKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBnZXRNb2RhbHNDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1vZGFsc0NvdW50O1xuICB9XG5cbiAgc2V0RGlzbWlzc1JlYXNvbihyZWFzb246IHN0cmluZykge1xuICAgIHRoaXMubGFzdERpc21pc3NSZWFzb24gPSByZWFzb247XG4gIH1cblxuICByZW1vdmVCYWNrZHJvcCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBDTEFTU19OQU1FLk9QRU4pO1xuICAgIHRoaXMuX2JhY2tkcm9wTG9hZGVyLmhpZGUoKTtcbiAgICB0aGlzLmJhY2tkcm9wUmVmID0gbnVsbDtcbiAgfVxuXG4gIC8qKiBDaGVja3MgaWYgdGhlIGJvZHkgaXMgb3ZlcmZsb3dpbmcgYW5kIHNldHMgc2Nyb2xsYmFyIHdpZHRoICovXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgY2hlY2tTY3JvbGxiYXIoKTogdm9pZCB7XG4gICAgdGhpcy5pc0JvZHlPdmVyZmxvd2luZyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLnNjcm9sbGJhcldpZHRoID0gdGhpcy5nZXRTY3JvbGxiYXJXaWR0aCgpO1xuICB9XG5cbiAgc2V0U2Nyb2xsYmFyKCk6IHZvaWQge1xuICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmcgPSBwYXJzZUludChcbiAgICAgIHdpbmRvd1xuICAgICAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KVxuICAgICAgICAuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpIHx8ICcwJyxcbiAgICAgIDEwXG4gICAgKTtcblxuICAgIGlmICh0aGlzLmlzQm9keU92ZXJmbG93aW5nKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMub3JpZ2luYWxCb2R5UGFkZGluZyArXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGh9cHhgO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRTY3JvbGxiYXIoKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmd9cHhgO1xuICB9XG5cbiAgLy8gdGh4IGQud2Fsc2hcbiAgcHJpdmF0ZSBnZXRTY3JvbGxiYXJXaWR0aCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHNjcm9sbERpdiA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHNjcm9sbERpdiwgQ0xBU1NfTkFNRS5TQ1JPTExCQVJfTUVBU1VSRVIpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmJvZHksIHNjcm9sbERpdik7XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keSwgc2Nyb2xsRGl2KTtcblxuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUxvYWRlcnMoKTogdm9pZCB7XG4gICAgY29uc3QgbG9hZGVyID0gdGhpcy5jbGYuY3JlYXRlTG9hZGVyPE1vZGFsQ29udGFpbmVyQ29tcG9uZW50PihcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgbnVsbFxuICAgICk7XG4gICAgdGhpcy5jb3B5RXZlbnQobG9hZGVyLm9uQmVmb3JlU2hvdywgdGhpcy5vblNob3cpO1xuICAgIHRoaXMuY29weUV2ZW50KGxvYWRlci5vblNob3duLCB0aGlzLm9uU2hvd24pO1xuICAgIHRoaXMuY29weUV2ZW50KGxvYWRlci5vbkJlZm9yZUhpZGUsIHRoaXMub25IaWRlKTtcbiAgICB0aGlzLmNvcHlFdmVudChsb2FkZXIub25IaWRkZW4sIHRoaXMub25IaWRkZW4pO1xuICAgIHRoaXMubG9hZGVycy5wdXNoKGxvYWRlcik7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUxvYWRlcnMoaWQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IHRoaXMubG9hZGVycy5maW5kSW5kZXgobG9hZGVyID0+IGxvYWRlci5pbnN0YW5jZS5jb25maWcuaWQgPT09IGlkKTtcbiAgICAgIGlmIChpbmRleFRvUmVtb3ZlID49IDApIHtcbiAgICAgICAgdGhpcy5sb2FkZXJzLnNwbGljZShpbmRleFRvUmVtb3ZlLCAxKTtcbiAgICAgICAgdGhpcy5sb2FkZXJzLmZvckVhY2goXG4gICAgICAgICAgKGxvYWRlcjogQ29tcG9uZW50TG9hZGVyPE1vZGFsQ29udGFpbmVyQ29tcG9uZW50PiwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBsb2FkZXIuaW5zdGFuY2UubGV2ZWwgPSBpICsgMTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZGVycy5zcGxpY2UoMCwgdGhpcy5sb2FkZXJzLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIGNvcHlFdmVudChmcm9tOiBFdmVudEVtaXR0ZXI8YW55PiwgdG86IEV2ZW50RW1pdHRlcjxhbnk+KSB7XG4gICAgZnJvbS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgdG8uZW1pdCh0aGlzLmxhc3REaXNtaXNzUmVhc29uIHx8IGRhdGEpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=