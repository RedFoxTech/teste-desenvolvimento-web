/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __values } from "tslib";
import { Injectable, EventEmitter, RendererFactory2, Inject, Optional } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { ModalBackdropComponent } from './modal-backdrop.component';
import { ModalContainerComponent } from './modal-container.component';
import { CLASS_NAME, modalConfigDefaults, ModalOptions, TRANSITION_DURATIONS, MODAL_CONFIG_DEFAULT_OVERRIDE } from './modal-options.class';
import { BsModalRef } from './bs-modal-ref.service';
var BsModalService = /** @class */ (function () {
    function BsModalService(rendererFactory, clf, modalDefaultOption) {
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
    /** Shows a modal */
    /**
     * Shows a modal
     * @template T
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    BsModalService.prototype.show = /**
     * Shows a modal
     * @template T
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    function (
    // tslint:disable-next-line:no-any
    content, config) {
        this.modalsCount++;
        this._createLoaders();
        /** @type {?} */
        var id = (config === null || config === void 0 ? void 0 : config.id) || (new Date()).getUTCMilliseconds();
        this.config = this.modalDefaultOption ?
            Object.assign({}, modalConfigDefaults, this.modalDefaultOption, config) :
            Object.assign({}, modalConfigDefaults, config);
        this.config.id = id;
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    /**
     * @param {?=} id
     * @return {?}
     */
    BsModalService.prototype.hide = /**
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        if (this.modalsCount === 1 || id == null) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 && id != null ? this.modalsCount - 1 : 0;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._hideModal(id);
            _this.removeLoaders(id);
        }), this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
    };
    /**
     * @return {?}
     */
    BsModalService.prototype._showBackdrop = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        /** @type {?} */
        var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
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
    };
    /**
     * @return {?}
     */
    BsModalService.prototype._hideBackdrop = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        /** @type {?} */
        var duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.removeBackdrop(); }), duration);
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} content
     * @return {?}
     */
    BsModalService.prototype._showModal = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        var e_1, _a;
        var _b;
        /** @type {?} */
        var modalLoader = this.loaders[this.loaders.length - 1];
        if (this.config && this.config.providers) {
            try {
                for (var _c = __values(this.config.providers), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var provider = _d.value;
                    modalLoader.provide(provider);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        /** @type {?} */
        var bsModalRef = new BsModalRef();
        /** @type {?} */
        var modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: BsModalRef, useValue: bsModalRef })
            .attach(ModalContainerComponent)
            .to('body');
        bsModalRef.hide = (/**
         * @return {?}
         */
        function () { return modalContainerRef.instance.hide(); });
        bsModalRef.setClass = (/**
         * @param {?} newClass
         * @return {?}
         */
        function (newClass) {
            modalContainerRef.instance.config.class = newClass;
        });
        bsModalRef.onHidden = new EventEmitter();
        bsModalRef.onHide = new EventEmitter();
        this.copyEvent(modalLoader.onBeforeHide, bsModalRef.onHide);
        this.copyEvent(modalLoader.onHidden, bsModalRef.onHidden);
        // call 'show' method after assign setClass in bsModalRef.
        // it makes modal component's bsModalRef available to call setClass method
        modalContainerRef.show({
            content: content,
            isAnimated: this.config.animated,
            initialState: this.config.initialState,
            bsModalService: this,
            id: this.config.id
        });
        modalContainerRef.instance.level = this.getModalsCount();
        bsModalRef.content = modalLoader.getInnerComponent() || null;
        bsModalRef.id = (_b = modalContainerRef.instance.config) === null || _b === void 0 ? void 0 : _b.id;
        return bsModalRef;
    };
    /**
     * @param {?=} id
     * @return {?}
     */
    BsModalService.prototype._hideModal = /**
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        if (id != null) {
            /** @type {?} */
            var indexToRemove = this.loaders.findIndex((/**
             * @param {?} loader
             * @return {?}
             */
            function (loader) { return loader.instance.config.id === id; }));
            /** @type {?} */
            var modalLoader = this.loaders[indexToRemove];
            if (modalLoader) {
                modalLoader.hide(id);
            }
        }
        else {
            this.loaders.forEach((/**
             * @param {?} loader
             * @return {?}
             */
            function (loader) {
                loader.hide(loader.instance.config.id);
            }));
        }
    };
    /**
     * @return {?}
     */
    BsModalService.prototype.getModalsCount = /**
     * @return {?}
     */
    function () {
        return this.modalsCount;
    };
    /**
     * @param {?} reason
     * @return {?}
     */
    BsModalService.prototype.setDismissReason = /**
     * @param {?} reason
     * @return {?}
     */
    function (reason) {
        this.lastDismissReason = reason;
    };
    /**
     * @return {?}
     */
    BsModalService.prototype.removeBackdrop = /**
     * @return {?}
     */
    function () {
        this._renderer.removeClass(document.body, CLASS_NAME.OPEN);
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /** Checks if the body is overflowing and sets scrollbar width */
    /** @internal */
    /** Checks if the body is overflowing and sets scrollbar width */
    /**
     * \@internal
     * @return {?}
     */
    BsModalService.prototype.checkScrollbar = /** Checks if the body is overflowing and sets scrollbar width */
    /**
     * \@internal
     * @return {?}
     */
    function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @return {?}
     */
    BsModalService.prototype.setScrollbar = /**
     * @return {?}
     */
    function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window
            .getComputedStyle(document.body)
            .getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    /**
     * @private
     * @return {?}
     */
    BsModalService.prototype.resetScrollbar = /**
     * @private
     * @return {?}
     */
    function () {
        document.body.style.paddingRight = this.originalBodyPadding + "px";
    };
    // thx d.walsh
    // thx d.walsh
    /**
     * @private
     * @return {?}
     */
    BsModalService.prototype.getScrollbarWidth = 
    // thx d.walsh
    /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(document.body, scrollDiv);
        /** @type {?} */
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    };
    /**
     * @private
     * @return {?}
     */
    BsModalService.prototype._createLoaders = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var loader = this.clf.createLoader(null, null, null);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    };
    /**
     * @private
     * @param {?=} id
     * @return {?}
     */
    BsModalService.prototype.removeLoaders = /**
     * @private
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        if (id != null) {
            /** @type {?} */
            var indexToRemove = this.loaders.findIndex((/**
             * @param {?} loader
             * @return {?}
             */
            function (loader) { return loader.instance.config.id === id; }));
            if (indexToRemove >= 0) {
                this.loaders.splice(indexToRemove, 1);
                this.loaders.forEach((/**
                 * @param {?} loader
                 * @param {?} i
                 * @return {?}
                 */
                function (loader, i) {
                    loader.instance.level = i + 1;
                }));
            }
        }
        else {
            this.loaders.splice(0, this.loaders.length);
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    BsModalService.prototype.copyEvent = 
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    function (from, to) {
        var _this = this;
        from.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            to.emit(_this.lastDismissReason || data);
        }));
    };
    BsModalService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BsModalService.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: ComponentLoaderFactory },
        { type: ModalOptions, decorators: [{ type: Optional }, { type: Inject, args: [MODAL_CONFIG_DEFAULT_OVERRIDE,] }] }
    ]; };
    return BsModalService;
}());
export { BsModalService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvbW9kYWwvIiwic291cmNlcyI6WyJicy1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLFVBQVUsRUFFVixZQUFZLEVBRVosZ0JBQWdCLEVBQ2hCLE1BQU0sRUFDTixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFtQixzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFDTCxVQUFVLEVBQ1YsbUJBQW1CLEVBQ25CLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsNkJBQTZCLEVBQzlCLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXBEO0lBNEJFLHdCQUNFLGVBQWlDLEVBQ3pCLEdBQTJCLEVBQ3dCLGtCQUFnQztRQURuRixRQUFHLEdBQUgsR0FBRyxDQUF3QjtRQUN3Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWM7O1FBekI3RixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7O1FBRS9DLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7UUFFaEQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOztRQUUvQyxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkMsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUV4QixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUlyQixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixzQkFBaUIsR0FBUSxJQUFJLENBQUM7UUFF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dEMsaUNBQWlFOzs7OztJQUVqRSxtQ0FBNkI7Ozs7O0lBSTNCLDZCQUFtQzs7Ozs7SUFDbkMsNENBQTJGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50UmVmLFxuICBJbmplY3RhYmxlLFxuICBUZW1wbGF0ZVJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBSZW5kZXJlcjIsXG4gIFJlbmRlcmVyRmFjdG9yeTIsXG4gIEluamVjdCxcbiAgT3B0aW9uYWxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbXBvbmVudExvYWRlciwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5pbXBvcnQgeyBNb2RhbEJhY2tkcm9wQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1iYWNrZHJvcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgQ0xBU1NfTkFNRSxcbiAgbW9kYWxDb25maWdEZWZhdWx0cyxcbiAgTW9kYWxPcHRpb25zLFxuICBUUkFOU0lUSU9OX0RVUkFUSU9OUyxcbiAgTU9EQUxfQ09ORklHX0RFRkFVTFRfT1ZFUlJJREVcbn0gZnJvbSAnLi9tb2RhbC1vcHRpb25zLmNsYXNzJztcbmltcG9ydCB7IEJzTW9kYWxSZWYgfSBmcm9tICcuL2JzLW1vZGFsLXJlZi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzTW9kYWxTZXJ2aWNlIHtcbiAgLy8gY29uc3RydWN0b3IgcHJvcHNcbiAgY29uZmlnOiBNb2RhbE9wdGlvbnM7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvblNob3c6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uU2hvd246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uSGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByb3RlY3RlZCBpc0JvZHlPdmVyZmxvd2luZyA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgb3JpZ2luYWxCb2R5UGFkZGluZyA9IDA7XG5cbiAgcHJvdGVjdGVkIHNjcm9sbGJhcldpZHRoID0gMDtcblxuICBwcm90ZWN0ZWQgYmFja2Ryb3BSZWY6IENvbXBvbmVudFJlZjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBfYmFja2Ryb3BMb2FkZXI6IENvbXBvbmVudExvYWRlcjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBtb2RhbHNDb3VudCA9IDA7XG4gIHByaXZhdGUgbGFzdERpc21pc3NSZWFzb246IGFueSA9IG51bGw7XG5cbiAgcHJpdmF0ZSBsb2FkZXJzOiBDb21wb25lbnRMb2FkZXI8TW9kYWxDb250YWluZXJDb21wb25lbnQ+W10gPSBbXTtcblxuICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICBwcml2YXRlIGNsZjogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1PREFMX0NPTkZJR19ERUZBVUxUX09WRVJSSURFKSBwcml2YXRlIG1vZGFsRGVmYXVsdE9wdGlvbjogTW9kYWxPcHRpb25zKSB7XG4gICAgdGhpcy5fYmFja2Ryb3BMb2FkZXIgPSB0aGlzLmNsZi5jcmVhdGVMb2FkZXI8TW9kYWxCYWNrZHJvcENvbXBvbmVudD4oXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGxcbiAgICApO1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICAgIHRoaXMuY29uZmlnID0gbW9kYWxEZWZhdWx0T3B0aW9uID9cbiAgICAgIChPYmplY3QuYXNzaWduKHt9LCBtb2RhbENvbmZpZ0RlZmF1bHRzLCBtb2RhbERlZmF1bHRPcHRpb24pKSA6XG4gICAgICBtb2RhbENvbmZpZ0RlZmF1bHRzO1xuICB9XG5cbiAgLyoqIFNob3dzIGEgbW9kYWwgKi9cbiAgc2hvdzxUID0gT2JqZWN0PihcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiB8IHsgbmV3KC4uLmFyZ3M6IGFueVtdKTogVCB9LFxuICAgIGNvbmZpZz86IE1vZGFsT3B0aW9uczxUPlxuICApOiBCc01vZGFsUmVmPFQ+IHtcbiAgICB0aGlzLm1vZGFsc0NvdW50Kys7XG4gICAgdGhpcy5fY3JlYXRlTG9hZGVycygpO1xuXG4gICAgY29uc3QgaWQgPSBjb25maWc/LmlkIHx8IChuZXcgRGF0ZSgpKS5nZXRVVENNaWxsaXNlY29uZHMoKTsgLy8gbXVzdCBiZSBkaWZmZXJlbnQgcGVyIGV2ZXJ5IHNob3coKSBjYWxsXG4gICAgdGhpcy5jb25maWcgPSB0aGlzLm1vZGFsRGVmYXVsdE9wdGlvbiA/XG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBtb2RhbENvbmZpZ0RlZmF1bHRzLCB0aGlzLm1vZGFsRGVmYXVsdE9wdGlvbiwgY29uZmlnKSA6XG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBtb2RhbENvbmZpZ0RlZmF1bHRzLCBjb25maWcpO1xuICAgIHRoaXMuY29uZmlnLmlkID0gaWQ7XG5cbiAgICB0aGlzLl9zaG93QmFja2Ryb3AoKTtcbiAgICB0aGlzLmxhc3REaXNtaXNzUmVhc29uID0gbnVsbDtcblxuICAgIHJldHVybiB0aGlzLl9zaG93TW9kYWwoY29udGVudCk7XG4gIH1cblxuICBoaWRlKGlkPzogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubW9kYWxzQ291bnQgPT09IDEgfHwgaWQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5faGlkZUJhY2tkcm9wKCk7XG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsYmFyKCk7XG4gICAgfVxuICAgIHRoaXMubW9kYWxzQ291bnQgPSB0aGlzLm1vZGFsc0NvdW50ID49IDEgJiYgaWQgIT0gbnVsbCA/IHRoaXMubW9kYWxzQ291bnQgLSAxIDogMDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2hpZGVNb2RhbChpZCk7XG4gICAgICB0aGlzLnJlbW92ZUxvYWRlcnMoaWQpO1xuICAgIH0sIHRoaXMuY29uZmlnLmFuaW1hdGVkID8gVFJBTlNJVElPTl9EVVJBVElPTlMuQkFDS0RST1AgOiAwKTtcbiAgfVxuXG4gIF9zaG93QmFja2Ryb3AoKTogdm9pZCB7XG4gICAgY29uc3QgaXNCYWNrZHJvcEVuYWJsZWQgPVxuICAgICAgdGhpcy5jb25maWcuYmFja2Ryb3AgfHwgdGhpcy5jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnO1xuICAgIGNvbnN0IGlzQmFja2Ryb3BJbkRPTSA9XG4gICAgICAhdGhpcy5iYWNrZHJvcFJlZiB8fCAhdGhpcy5iYWNrZHJvcFJlZi5pbnN0YW5jZS5pc1Nob3duO1xuXG4gICAgaWYgKHRoaXMubW9kYWxzQ291bnQgPT09IDEpIHtcbiAgICAgIHRoaXMucmVtb3ZlQmFja2Ryb3AoKTtcblxuICAgICAgaWYgKGlzQmFja2Ryb3BFbmFibGVkICYmIGlzQmFja2Ryb3BJbkRPTSkge1xuICAgICAgICB0aGlzLl9iYWNrZHJvcExvYWRlclxuICAgICAgICAgIC5hdHRhY2goTW9kYWxCYWNrZHJvcENvbXBvbmVudClcbiAgICAgICAgICAudG8oJ2JvZHknKVxuICAgICAgICAgIC5zaG93KHsgaXNBbmltYXRlZDogdGhpcy5jb25maWcuYW5pbWF0ZWQgfSk7XG4gICAgICAgIHRoaXMuYmFja2Ryb3BSZWYgPSB0aGlzLl9iYWNrZHJvcExvYWRlci5fY29tcG9uZW50UmVmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9oaWRlQmFja2Ryb3AoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmJhY2tkcm9wUmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYmFja2Ryb3BSZWYuaW5zdGFuY2UuaXNTaG93biA9IGZhbHNlO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5jb25maWcuYW5pbWF0ZWQgPyBUUkFOU0lUSU9OX0RVUkFUSU9OUy5CQUNLRFJPUCA6IDA7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbW92ZUJhY2tkcm9wKCksIGR1cmF0aW9uKTtcbiAgfVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIF9zaG93TW9kYWwoY29udGVudDogYW55KTogQnNNb2RhbFJlZiB7XG4gICAgY29uc3QgbW9kYWxMb2FkZXIgPSB0aGlzLmxvYWRlcnNbdGhpcy5sb2FkZXJzLmxlbmd0aCAtIDFdO1xuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5wcm92aWRlcnMpIHtcbiAgICAgIGZvciAoY29uc3QgcHJvdmlkZXIgb2YgdGhpcy5jb25maWcucHJvdmlkZXJzKSB7XG4gICAgICAgIG1vZGFsTG9hZGVyLnByb3ZpZGUocHJvdmlkZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGJzTW9kYWxSZWYgPSBuZXcgQnNNb2RhbFJlZigpO1xuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyUmVmID0gbW9kYWxMb2FkZXJcbiAgICAgIC5wcm92aWRlKHsgcHJvdmlkZTogTW9kYWxPcHRpb25zLCB1c2VWYWx1ZTogdGhpcy5jb25maWcgfSlcbiAgICAgIC5wcm92aWRlKHsgcHJvdmlkZTogQnNNb2RhbFJlZiwgdXNlVmFsdWU6IGJzTW9kYWxSZWYgfSlcbiAgICAgIC5hdHRhY2goTW9kYWxDb250YWluZXJDb21wb25lbnQpXG4gICAgICAudG8oJ2JvZHknKTtcbiAgICBic01vZGFsUmVmLmhpZGUgPSAoKSA9PiBtb2RhbENvbnRhaW5lclJlZi5pbnN0YW5jZS5oaWRlKCk7XG4gICAgYnNNb2RhbFJlZi5zZXRDbGFzcyA9IChuZXdDbGFzczogc3RyaW5nKSA9PiB7XG4gICAgICBtb2RhbENvbnRhaW5lclJlZi5pbnN0YW5jZS5jb25maWcuY2xhc3MgPSBuZXdDbGFzcztcbiAgICB9O1xuXG4gICAgYnNNb2RhbFJlZi5vbkhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIGJzTW9kYWxSZWYub25IaWRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICB0aGlzLmNvcHlFdmVudChtb2RhbExvYWRlci5vbkJlZm9yZUhpZGUsIGJzTW9kYWxSZWYub25IaWRlKTtcbiAgICB0aGlzLmNvcHlFdmVudChtb2RhbExvYWRlci5vbkhpZGRlbiwgYnNNb2RhbFJlZi5vbkhpZGRlbik7XG4gICAgLy8gY2FsbCAnc2hvdycgbWV0aG9kIGFmdGVyIGFzc2lnbiBzZXRDbGFzcyBpbiBic01vZGFsUmVmLlxuICAgIC8vIGl0IG1ha2VzIG1vZGFsIGNvbXBvbmVudCdzIGJzTW9kYWxSZWYgYXZhaWxhYmxlIHRvIGNhbGwgc2V0Q2xhc3MgbWV0aG9kXG4gICAgbW9kYWxDb250YWluZXJSZWYuc2hvdyh7XG4gICAgICBjb250ZW50LFxuICAgICAgaXNBbmltYXRlZDogdGhpcy5jb25maWcuYW5pbWF0ZWQsXG4gICAgICBpbml0aWFsU3RhdGU6IHRoaXMuY29uZmlnLmluaXRpYWxTdGF0ZSxcbiAgICAgIGJzTW9kYWxTZXJ2aWNlOiB0aGlzLFxuICAgICAgaWQ6IHRoaXMuY29uZmlnLmlkXG4gICAgfSk7XG4gICAgbW9kYWxDb250YWluZXJSZWYuaW5zdGFuY2UubGV2ZWwgPSB0aGlzLmdldE1vZGFsc0NvdW50KCk7XG5cbiAgICBic01vZGFsUmVmLmNvbnRlbnQgPSBtb2RhbExvYWRlci5nZXRJbm5lckNvbXBvbmVudCgpIHx8IG51bGw7XG4gICAgYnNNb2RhbFJlZi5pZCA9IG1vZGFsQ29udGFpbmVyUmVmLmluc3RhbmNlLmNvbmZpZz8uaWQ7XG5cbiAgICByZXR1cm4gYnNNb2RhbFJlZjtcbiAgfVxuXG4gIF9oaWRlTW9kYWwoaWQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IHRoaXMubG9hZGVycy5maW5kSW5kZXgobG9hZGVyID0+IGxvYWRlci5pbnN0YW5jZS5jb25maWcuaWQgPT09IGlkKTtcbiAgICAgIGNvbnN0IG1vZGFsTG9hZGVyID0gdGhpcy5sb2FkZXJzW2luZGV4VG9SZW1vdmVdO1xuICAgICAgaWYgKG1vZGFsTG9hZGVyKSB7XG4gICAgICAgIG1vZGFsTG9hZGVyLmhpZGUoaWQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRlcnMuZm9yRWFjaChcbiAgICAgICAgKGxvYWRlcjogQ29tcG9uZW50TG9hZGVyPE1vZGFsQ29udGFpbmVyQ29tcG9uZW50PikgPT4ge1xuICAgICAgICAgIGxvYWRlci5oaWRlKGxvYWRlci5pbnN0YW5jZS5jb25maWcuaWQpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGdldE1vZGFsc0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxzQ291bnQ7XG4gIH1cblxuICBzZXREaXNtaXNzUmVhc29uKHJlYXNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5sYXN0RGlzbWlzc1JlYXNvbiA9IHJlYXNvbjtcbiAgfVxuXG4gIHJlbW92ZUJhY2tkcm9wKCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIENMQVNTX05BTUUuT1BFTik7XG4gICAgdGhpcy5fYmFja2Ryb3BMb2FkZXIuaGlkZSgpO1xuICAgIHRoaXMuYmFja2Ryb3BSZWYgPSBudWxsO1xuICB9XG5cbiAgLyoqIENoZWNrcyBpZiB0aGUgYm9keSBpcyBvdmVyZmxvd2luZyBhbmQgc2V0cyBzY3JvbGxiYXIgd2lkdGggKi9cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBjaGVja1Njcm9sbGJhcigpOiB2b2lkIHtcbiAgICB0aGlzLmlzQm9keU92ZXJmbG93aW5nID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGggPSB0aGlzLmdldFNjcm9sbGJhcldpZHRoKCk7XG4gIH1cblxuICBzZXRTY3JvbGxiYXIoKTogdm9pZCB7XG4gICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub3JpZ2luYWxCb2R5UGFkZGluZyA9IHBhcnNlSW50KFxuICAgICAgd2luZG93XG4gICAgICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpXG4gICAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykgfHwgJzAnLFxuICAgICAgMTBcbiAgICApO1xuXG4gICAgaWYgKHRoaXMuaXNCb2R5T3ZlcmZsb3dpbmcpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dGhpcy5vcmlnaW5hbEJvZHlQYWRkaW5nICtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJXaWR0aH1weGA7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXNldFNjcm9sbGJhcigpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMub3JpZ2luYWxCb2R5UGFkZGluZ31weGA7XG4gIH1cblxuICAvLyB0aHggZC53YWxzaFxuICBwcml2YXRlIGdldFNjcm9sbGJhcldpZHRoKCk6IG51bWJlciB7XG4gICAgY29uc3Qgc2Nyb2xsRGl2ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3Moc2Nyb2xsRGl2LCBDTEFTU19OQU1FLlNDUk9MTEJBUl9NRUFTVVJFUik7XG4gICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuYm9keSwgc2Nyb2xsRGl2KTtcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LCBzY3JvbGxEaXYpO1xuXG4gICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlTG9hZGVycygpOiB2b2lkIHtcbiAgICBjb25zdCBsb2FkZXIgPSB0aGlzLmNsZi5jcmVhdGVMb2FkZXI8TW9kYWxDb250YWluZXJDb21wb25lbnQ+KFxuICAgICAgbnVsbCxcbiAgICAgIG51bGwsXG4gICAgICBudWxsXG4gICAgKTtcbiAgICB0aGlzLmNvcHlFdmVudChsb2FkZXIub25CZWZvcmVTaG93LCB0aGlzLm9uU2hvdyk7XG4gICAgdGhpcy5jb3B5RXZlbnQobG9hZGVyLm9uU2hvd24sIHRoaXMub25TaG93bik7XG4gICAgdGhpcy5jb3B5RXZlbnQobG9hZGVyLm9uQmVmb3JlSGlkZSwgdGhpcy5vbkhpZGUpO1xuICAgIHRoaXMuY29weUV2ZW50KGxvYWRlci5vbkhpZGRlbiwgdGhpcy5vbkhpZGRlbik7XG4gICAgdGhpcy5sb2FkZXJzLnB1c2gobG9hZGVyKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTG9hZGVycyhpZD86IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICBjb25zdCBpbmRleFRvUmVtb3ZlID0gdGhpcy5sb2FkZXJzLmZpbmRJbmRleChsb2FkZXIgPT4gbG9hZGVyLmluc3RhbmNlLmNvbmZpZy5pZCA9PT0gaWQpO1xuICAgICAgaWYgKGluZGV4VG9SZW1vdmUgPj0gMCkge1xuICAgICAgICB0aGlzLmxvYWRlcnMuc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpO1xuICAgICAgICB0aGlzLmxvYWRlcnMuZm9yRWFjaChcbiAgICAgICAgICAobG9hZGVyOiBDb21wb25lbnRMb2FkZXI8TW9kYWxDb250YWluZXJDb21wb25lbnQ+LCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGxvYWRlci5pbnN0YW5jZS5sZXZlbCA9IGkgKyAxO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkZXJzLnNwbGljZSgwLCB0aGlzLmxvYWRlcnMubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByaXZhdGUgY29weUV2ZW50KGZyb206IEV2ZW50RW1pdHRlcjxhbnk+LCB0bzogRXZlbnRFbWl0dGVyPGFueT4pIHtcbiAgICBmcm9tLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICB0by5lbWl0KHRoaXMubGFzdERpc21pc3NSZWFzb24gfHwgZGF0YSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==