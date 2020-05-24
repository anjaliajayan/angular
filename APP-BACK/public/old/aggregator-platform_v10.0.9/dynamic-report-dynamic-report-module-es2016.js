(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dynamic-report-dynamic-report-module"],{

/***/ "./node_modules/angular-dual-listbox/__ivy_ngcc__/fesm2015/angular-dual-listbox.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/angular-dual-listbox/__ivy_ngcc__/fesm2015/angular-dual-listbox.js ***!
  \*****************************************************************************************/
/*! exports provided: AngularDualListBoxModule, BasicList, DualListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularDualListBoxModule", function() { return AngularDualListBoxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicList", function() { return BasicList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DualListComponent", function() { return DualListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




function DualListComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DualListComponent_form_4_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r230); const ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r229.available.picker = $event; })("ngModelChange", function DualListComponent_form_4_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r230); const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r231.onFilter(ctx_r231.available); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r225.available.picker);
} }
const _c0 = function (a0, a1) { return { selected: a0, disabled: a1 }; };
function DualListComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DualListComponent_li_7_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r235); const item_r232 = ctx.$implicit; const idx_r233 = ctx.index; const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r234.disabled ? null : ctx_r234.selectItem(ctx_r234.available.pick, item_r232); return ctx_r234.shiftClick($event, idx_r233, ctx_r234.available, item_r232); })("dragstart", function DualListComponent_li_7_Template_li_dragstart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r235); const item_r232 = ctx.$implicit; const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r236.drag($event, item_r232, ctx_r236.available); })("dragend", function DualListComponent_li_7_Template_li_dragend_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r235); const ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r237.dragEnd(ctx_r237.available); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r232 = ctx.$implicit;
    const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r226.isItemSelected(ctx_r226.available.pick, item_r232), ctx_r226.disabled))("draggable", !ctx_r226.disabled && ctx_r226.format.draggable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r232._name);
} }
function DualListComponent_form_16_Template(rf, ctx) { if (rf & 1) {
    const _r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DualListComponent_form_16_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r239); const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r238.confirmed.picker = $event; })("ngModelChange", function DualListComponent_form_16_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r239); const ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r240.onFilter(ctx_r240.confirmed); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r227.confirmed.picker);
} }
function DualListComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    const _r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DualListComponent_li_19_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r245); const item_r241 = ctx.$implicit; const idx_r242 = ctx.index; const ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r244.disabled ? null : ctx_r244.selectItem(ctx_r244.confirmed.pick, item_r241); return ctx_r244.shiftClick($event, idx_r242, ctx_r244.confirmed, item_r241); })("dragstart", function DualListComponent_li_19_Template_li_dragstart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r245); const item_r241 = ctx.$implicit; const ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r246.drag($event, item_r241, ctx_r246.confirmed); })("dragend", function DualListComponent_li_19_Template_li_dragend_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r245); const ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r247.dragEnd(ctx_r247.confirmed); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r241 = ctx.$implicit;
    const ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r228.isItemSelected(ctx_r228.confirmed.pick, item_r241), ctx_r228.disabled))("draggable", !ctx_r228.disabled && ctx_r228.format.draggable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r241._name);
} }
const _c1 = function (a0, a1) { return { "order": a0, "margin-left": a1 }; };
const _c2 = function (a0, a1) { return { "max-height": a0, "min-height": a1 }; };
const _c3 = function (a0) { return { over: a0 }; };
class BasicList {
    /**
     * @param {?} name
     */
    constructor(name) {
        this._name = name;
        this.last = null;
        this.picker = '';
        this.dragStart = false;
        this.dragOver = false;
        // Arrays will contain objects of { _id, _name }.
        this.pick = [];
        this.list = [];
        this.sift = [];
    }
    /**
     * @return {?}
     */
    get name() {
        return this._name;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var nextId = 0;
class DualListComponent {
    /**
     * @param {?} differs
     */
    constructor(differs) {
        this.differs = differs;
        this.id = `dual-list-${nextId++}`;
        this.key = '_id';
        this.display = '_name';
        this.height = '100px';
        this.filter = false;
        this.format = DualListComponent.DEFAULT_FORMAT;
        this.sort = false;
        this.disabled = false;
        this.destinationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sorter = (/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => { return (a._name < b._name) ? -1 : ((a._name > b._name) ? 1 : 0); });
        this.available = new BasicList(DualListComponent.AVAILABLE_LIST_NAME);
        this.confirmed = new BasicList(DualListComponent.CONFIRMED_LIST_NAME);
    }
    /**
     * @param {?} changeRecord
     * @return {?}
     */
    ngOnChanges(changeRecord) {
        if (changeRecord['filter']) {
            if (changeRecord['filter'].currentValue === false) {
                this.clearFilter(this.available);
                this.clearFilter(this.confirmed);
            }
        }
        if (changeRecord['sort']) {
            if (changeRecord['sort'].currentValue === true && this.compare === undefined) {
                this.compare = this.sorter;
            }
            else if (changeRecord['sort'].currentValue === false) {
                this.compare = undefined;
            }
        }
        if (changeRecord['format']) {
            this.format = changeRecord['format'].currentValue;
            if (typeof (this.format.direction) === 'undefined') {
                this.format.direction = DualListComponent.LTR;
            }
            if (typeof (this.format.add) === 'undefined') {
                this.format.add = DualListComponent.DEFAULT_FORMAT.add;
            }
            if (typeof (this.format.remove) === 'undefined') {
                this.format.remove = DualListComponent.DEFAULT_FORMAT.remove;
            }
            if (typeof (this.format.all) === 'undefined') {
                this.format.all = DualListComponent.DEFAULT_FORMAT.all;
            }
            if (typeof (this.format.none) === 'undefined') {
                this.format.none = DualListComponent.DEFAULT_FORMAT.none;
            }
            if (typeof (this.format.draggable) === 'undefined') {
                this.format.draggable = DualListComponent.DEFAULT_FORMAT.draggable;
            }
        }
        if (changeRecord['source']) {
            this.available = new BasicList(DualListComponent.AVAILABLE_LIST_NAME);
            this.updatedSource();
            this.updatedDestination();
        }
        if (changeRecord['destination']) {
            this.confirmed = new BasicList(DualListComponent.CONFIRMED_LIST_NAME);
            this.updatedDestination();
            this.updatedSource();
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.source && this.buildAvailable(this.source)) {
            this.onFilter(this.available);
        }
        if (this.destination && this.buildConfirmed(this.destination)) {
            this.onFilter(this.confirmed);
        }
    }
    /**
     * @param {?} source
     * @return {?}
     */
    buildAvailable(source) {
        /** @type {?} */
        const sourceChanges = this.sourceDiffer.diff(source);
        if (sourceChanges) {
            sourceChanges.forEachRemovedItem((/**
             * @param {?} r
             * @return {?}
             */
            (r) => {
                /** @type {?} */
                const idx = this.findItemIndex(this.available.list, r.item, this.key);
                if (idx !== -1) {
                    this.available.list.splice(idx, 1);
                }
            }));
            sourceChanges.forEachAddedItem((/**
             * @param {?} r
             * @return {?}
             */
            (r) => {
                // Do not add duplicates even if source has duplicates.
                if (this.findItemIndex(this.available.list, r.item, this.key) === -1) {
                    this.available.list.push({ _id: this.makeId(r.item), _name: this.makeName(r.item) });
                }
            }));
            if (this.compare !== undefined) {
                this.available.list.sort(this.compare);
            }
            this.available.sift = this.available.list;
            return true;
        }
        return false;
    }
    /**
     * @param {?} destination
     * @return {?}
     */
    buildConfirmed(destination) {
        /** @type {?} */
        let moved = false;
        /** @type {?} */
        const destChanges = this.destinationDiffer.diff(destination);
        if (destChanges) {
            destChanges.forEachRemovedItem((/**
             * @param {?} r
             * @return {?}
             */
            (r) => {
                /** @type {?} */
                const idx = this.findItemIndex(this.confirmed.list, r.item, this.key);
                if (idx !== -1) {
                    if (!this.isItemSelected(this.confirmed.pick, this.confirmed.list[idx])) {
                        this.selectItem(this.confirmed.pick, this.confirmed.list[idx]);
                    }
                    this.moveItem(this.confirmed, this.available, this.confirmed.list[idx], false);
                    moved = true;
                }
            }));
            destChanges.forEachAddedItem((/**
             * @param {?} r
             * @return {?}
             */
            (r) => {
                /** @type {?} */
                const idx = this.findItemIndex(this.available.list, r.item, this.key);
                if (idx !== -1) {
                    if (!this.isItemSelected(this.available.pick, this.available.list[idx])) {
                        this.selectItem(this.available.pick, this.available.list[idx]);
                    }
                    this.moveItem(this.available, this.confirmed, this.available.list[idx], false);
                    moved = true;
                }
            }));
            if (this.compare !== undefined) {
                this.confirmed.list.sort(this.compare);
            }
            this.confirmed.sift = this.confirmed.list;
            if (moved) {
                this.trueUp();
            }
            return true;
        }
        return false;
    }
    /**
     * @return {?}
     */
    updatedSource() {
        this.available.list.length = 0;
        this.available.pick.length = 0;
        if (this.source !== undefined) {
            this.sourceDiffer = this.differs.find(this.source).create(null);
        }
    }
    /**
     * @return {?}
     */
    updatedDestination() {
        if (this.destination !== undefined) {
            this.destinationDiffer = this.differs.find(this.destination).create(null);
        }
    }
    /**
     * @return {?}
     */
    direction() {
        return this.format.direction === DualListComponent.LTR;
    }
    /**
     * @param {?=} list
     * @return {?}
     */
    dragEnd(list = null) {
        if (list) {
            list.dragStart = false;
        }
        else {
            this.available.dragStart = false;
            this.confirmed.dragStart = false;
        }
        return false;
    }
    /**
     * @param {?} event
     * @param {?} item
     * @param {?} list
     * @return {?}
     */
    drag(event, item, list) {
        if (!this.isItemSelected(list.pick, item)) {
            this.selectItem(list.pick, item);
        }
        list.dragStart = true;
        // Set a custom type to be this dual-list's id.
        event.dataTransfer.setData(this.id, item['_id']);
    }
    /**
     * @param {?} event
     * @param {?} list
     * @return {?}
     */
    allowDrop(event, list) {
        if (event.dataTransfer.types.length && (event.dataTransfer.types[0] === this.id)) {
            event.preventDefault();
            if (!list.dragStart) {
                list.dragOver = true;
            }
        }
        return false;
    }
    /**
     * @return {?}
     */
    dragLeave() {
        this.available.dragOver = false;
        this.confirmed.dragOver = false;
    }
    /**
     * @param {?} event
     * @param {?} list
     * @return {?}
     */
    drop(event, list) {
        if (event.dataTransfer.types.length && (event.dataTransfer.types[0] === this.id)) {
            event.preventDefault();
            this.dragLeave();
            this.dragEnd();
            if (list === this.available) {
                this.moveItem(this.available, this.confirmed);
            }
            else {
                this.moveItem(this.confirmed, this.available);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    trueUp() {
        /** @type {?} */
        let changed = false;
        // Clear removed items.
        /** @type {?} */
        let pos = this.destination.length;
        while ((pos -= 1) >= 0) {
            /** @type {?} */
            const mv = this.confirmed.list.filter((/**
             * @param {?} conf
             * @return {?}
             */
            conf => {
                if (typeof this.destination[pos] === 'object') {
                    return conf._id === this.destination[pos][this.key];
                }
                else {
                    return conf._id === this.destination[pos];
                }
            }));
            if (mv.length === 0) {
                // Not found so remove.
                this.destination.splice(pos, 1);
                changed = true;
            }
        }
        // Push added items.
        for (let i = 0, len = this.confirmed.list.length; i < len; i += 1) {
            /** @type {?} */
            let mv = this.destination.filter((/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                if (typeof d === 'object') {
                    return (d[this.key] === this.confirmed.list[i]._id);
                }
                else {
                    return (d === this.confirmed.list[i]._id);
                }
            }));
            if (mv.length === 0) {
                // Not found so add.
                mv = this.source.filter((/**
                 * @param {?} o
                 * @return {?}
                 */
                (o) => {
                    if (typeof o === 'object') {
                        return (o[this.key] === this.confirmed.list[i]._id);
                    }
                    else {
                        return (o === this.confirmed.list[i]._id);
                    }
                }));
                if (mv.length > 0) {
                    this.destination.push(mv[0]);
                    changed = true;
                }
            }
        }
        if (changed) {
            this.destinationChange.emit(this.destination);
        }
    }
    /**
     * @param {?} list
     * @param {?} item
     * @param {?=} key
     * @return {?}
     */
    findItemIndex(list, item, key = '_id') {
        /** @type {?} */
        let idx = -1;
        /**
         * @param {?} e
         * @return {?}
         */
        function matchObject(e) {
            if (e._id === item[key]) {
                idx = list.indexOf(e);
                return true;
            }
            return false;
        }
        /**
         * @param {?} e
         * @return {?}
         */
        function match(e) {
            if (e._id === item) {
                idx = list.indexOf(e);
                return true;
            }
            return false;
        }
        // Assumption is that the arrays do not have duplicates.
        if (typeof item === 'object') {
            list.filter(matchObject);
        }
        else {
            list.filter(match);
        }
        return idx;
    }
    /**
     * @private
     * @param {?} source
     * @param {?} item
     * @return {?}
     */
    makeUnavailable(source, item) {
        /** @type {?} */
        const idx = source.list.indexOf(item);
        if (idx !== -1) {
            source.list.splice(idx, 1);
        }
    }
    /**
     * @param {?} source
     * @param {?} target
     * @param {?=} item
     * @param {?=} trueup
     * @return {?}
     */
    moveItem(source, target, item = null, trueup = true) {
        /** @type {?} */
        let i = 0;
        /** @type {?} */
        let len = source.pick.length;
        if (item) {
            i = source.list.indexOf(item);
            len = i + 1;
        }
        for (; i < len; i += 1) {
            // Is the pick still in list?
            /** @type {?} */
            let mv = [];
            if (item) {
                /** @type {?} */
                const idx = this.findItemIndex(source.pick, item);
                if (idx !== -1) {
                    mv[0] = source.pick[idx];
                }
            }
            else {
                mv = source.list.filter((/**
                 * @param {?} src
                 * @return {?}
                 */
                src => {
                    return (src._id === source.pick[i]._id);
                }));
            }
            // Should only ever be 1
            if (mv.length === 1) {
                // Add if not already in target.
                if (target.list.filter((/**
                 * @param {?} trg
                 * @return {?}
                 */
                trg => trg._id === mv[0]._id)).length === 0) {
                    target.list.push(mv[0]);
                }
                this.makeUnavailable(source, mv[0]);
            }
        }
        if (this.compare !== undefined) {
            target.list.sort(this.compare);
        }
        source.pick.length = 0;
        // Update destination
        if (trueup) {
            this.trueUp();
        }
        // Delay ever-so-slightly to prevent race condition.
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.onFilter(source);
            this.onFilter(target);
        }), 10);
    }
    /**
     * @param {?} list
     * @param {?} item
     * @return {?}
     */
    isItemSelected(list, item) {
        if (list.filter((/**
         * @param {?} e
         * @return {?}
         */
        e => Object.is(e, item))).length > 0) {
            return true;
        }
        return false;
    }
    /**
     * @param {?} event
     * @param {?} index
     * @param {?} source
     * @param {?} item
     * @return {?}
     */
    shiftClick(event, index, source, item) {
        if (event.shiftKey && source.last && !Object.is(item, source.last)) {
            /** @type {?} */
            const idx = source.sift.indexOf(source.last);
            if (index > idx) {
                for (let i = (idx + 1); i < index; i += 1) {
                    this.selectItem(source.pick, source.sift[i]);
                }
            }
            else if (idx !== -1) {
                for (let i = (index + 1); i < idx; i += 1) {
                    this.selectItem(source.pick, source.sift[i]);
                }
            }
        }
        source.last = item;
    }
    /**
     * @param {?} list
     * @param {?} item
     * @return {?}
     */
    selectItem(list, item) {
        /** @type {?} */
        const pk = list.filter((/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            return Object.is(e, item);
        }));
        if (pk.length > 0) {
            // Already in list, so deselect.
            for (let i = 0, len = pk.length; i < len; i += 1) {
                /** @type {?} */
                const idx = list.indexOf(pk[i]);
                if (idx !== -1) {
                    list.splice(idx, 1);
                }
            }
        }
        else {
            list.push(item);
        }
    }
    /**
     * @param {?} source
     * @return {?}
     */
    selectAll(source) {
        source.pick.length = 0;
        source.pick = source.sift.slice(0);
    }
    /**
     * @param {?} source
     * @return {?}
     */
    selectNone(source) {
        source.pick.length = 0;
    }
    /**
     * @param {?} source
     * @return {?}
     */
    isAllSelected(source) {
        if (source.list.length === 0 || source.list.length === source.pick.length) {
            return true;
        }
        return false;
    }
    /**
     * @param {?} source
     * @return {?}
     */
    isAnySelected(source) {
        if (source.pick.length > 0) {
            return true;
        }
        return false;
    }
    /**
     * @private
     * @param {?} source
     * @return {?}
     */
    unpick(source) {
        for (let i = source.pick.length - 1; i >= 0; i -= 1) {
            if (source.sift.indexOf(source.pick[i]) === -1) {
                source.pick.splice(i, 1);
            }
        }
    }
    /**
     * @param {?} source
     * @return {?}
     */
    clearFilter(source) {
        if (source) {
            source.picker = '';
            this.onFilter(source);
        }
    }
    /**
     * @param {?} source
     * @return {?}
     */
    onFilter(source) {
        if (source.picker.length > 0) {
            try {
                /** @type {?} */
                const filtered = source.list.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    if (Object.prototype.toString.call(item) === '[object Object]') {
                        if (item._name !== undefined) {
                            // @ts-ignore: remove when d.ts has locale as an argument.
                            return item._name.toLocaleLowerCase(this.format.locale).indexOf(source.picker.toLocaleLowerCase(this.format.locale)) !== -1;
                        }
                        else {
                            // @ts-ignore: remove when d.ts has locale as an argument.
                            return JSON.stringify(item).toLocaleLowerCase(this.format.locale).indexOf(source.picker.toLocaleLowerCase(this.format.locale)) !== -1;
                        }
                    }
                    else {
                        // @ts-ignore: remove when d.ts has locale as an argument.
                        return item.toLocaleLowerCase(this.format.locale).indexOf(source.picker.toLocaleLowerCase(this.format.locale)) !== -1;
                    }
                }));
                source.sift = filtered;
                this.unpick(source);
            }
            catch (e) {
                if (e instanceof RangeError) {
                    this.format.locale = undefined;
                }
                source.sift = source.list;
            }
        }
        else {
            source.sift = source.list;
        }
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    makeId(item) {
        if (typeof item === 'object') {
            return item[this.key];
        }
        else {
            return item;
        }
    }
    // Allow for complex names by passing an array of strings.
    // Example: [display]="[ '_type.substring(0,1)', '_name' ]"
    /**
     * @protected
     * @param {?} item
     * @param {?=} separator
     * @return {?}
     */
    makeName(item, separator = '_') {
        /** @type {?} */
        const display = this.display;
        /**
         * @param {?} itm
         * @return {?}
         */
        function fallback(itm) {
            switch (Object.prototype.toString.call(itm)) {
                case '[object Number]':
                    return itm;
                case '[object String]':
                    return itm;
                default:
                    if (itm !== undefined) {
                        return itm[display];
                    }
                    else {
                        return 'undefined';
                    }
            }
        }
        /** @type {?} */
        let str = '';
        if (this.display !== undefined) {
            switch (Object.prototype.toString.call(this.display)) {
                case '[object Function]':
                    str = this.display(item);
                    break;
                case '[object Array]':
                    for (let i = 0, len = this.display.length; i < len; i += 1) {
                        if (str.length > 0) {
                            str = str + separator;
                        }
                        if (this.display[i].indexOf('.') === -1) {
                            // Simple, just add to string.
                            str = str + item[this.display[i]];
                        }
                        else {
                            // Complex, some action needs to be performed
                            /** @type {?} */
                            const parts = this.display[i].split('.');
                            /** @type {?} */
                            const s = item[parts[0]];
                            if (s) {
                                // Use brute force
                                if (parts[1].indexOf('substring') !== -1) {
                                    /** @type {?} */
                                    const nums = (parts[1].substring(parts[1].indexOf('(') + 1, parts[1].indexOf(')'))).split(',');
                                    switch (nums.length) {
                                        case 1:
                                            str = str + s.substring(parseInt(nums[0], 10));
                                            break;
                                        case 2:
                                            str = str + s.substring(parseInt(nums[0], 10), parseInt(nums[1], 10));
                                            break;
                                        default:
                                            str = str + s;
                                            break;
                                    }
                                }
                                else {
                                    // method not approved, so just add s.
                                    str = str + s;
                                }
                            }
                        }
                    }
                    break;
                default:
                    str = fallback(item);
                    break;
            }
        }
        else {
            str = fallback(item);
        }
        return str;
    }
}
DualListComponent.ɵfac = function DualListComponent_Factory(t) { return new (t || DualListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"])); };
DualListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DualListComponent, selectors: [["dual-list"]], inputs: { id: "id", key: "key", display: "display", height: "height", filter: "filter", format: "format", sort: "sort", disabled: "disabled", compare: "compare", source: "source", destination: "destination" }, outputs: { destinationChange: "destinationChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], decls: 25, vars: 40, consts: [[1, "dual-list"], [1, "listbox", 3, "ngStyle"], ["type", "button", "name", "addBtn", 1, "btn", "btn-primary", "btn-block", 3, "ngClass", "disabled", "click"], ["class", "filter", 4, "ngIf"], [1, "record-picker"], [3, "ngStyle", "ngClass", "drop", "dragover", "dragleave"], [3, "ngClass", "draggable", "click", "dragstart", "dragend", 4, "ngFor", "ngForOf"], [1, "button-bar"], ["type", "button", 1, "btn", "btn-primary", "pull-left", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-default", "pull-right", 3, "disabled", "click"], ["type", "button", "name", "removeBtn", 1, "btn", "btn-primary", "btn-block", 3, "ngClass", "disabled", "click"], [1, "filter"], ["name", "filterSource", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngClass", "draggable", "click", "dragstart", "dragend"], ["name", "filterDestination", 1, "form-control", 3, "ngModel", "ngModelChange"], ["itmConf", ""]], template: function DualListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DualListComponent_Template_button_click_2_listener($event) { return ctx.moveItem(ctx.available, ctx.confirmed); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DualListComponent_form_4_Template, 2, 1, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function DualListComponent_Template_ul_drop_6_listener($event) { return ctx.drop($event, ctx.confirmed); })("dragover", function DualListComponent_Template_ul_dragover_6_listener($event) { return ctx.allowDrop($event, ctx.available); })("dragleave", function DualListComponent_Template_ul_dragleave_6_listener($event) { return ctx.dragLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DualListComponent_li_7_Template, 3, 6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DualListComponent_Template_button_click_9_listener($event) { return ctx.selectAll(ctx.available); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DualListComponent_Template_button_click_11_listener($event) { return ctx.selectNone(ctx.available); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DualListComponent_Template_button_click_14_listener($event) { return ctx.moveItem(ctx.confirmed, ctx.available); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DualListComponent_form_16_Template, 2, 1, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function DualListComponent_Template_ul_drop_18_listener($event) { return ctx.drop($event, ctx.available); })("dragover", function DualListComponent_Template_ul_dragover_18_listener($event) { return ctx.allowDrop($event, ctx.confirmed); })("dragleave", function DualListComponent_Template_ul_dragleave_18_listener($event) { return ctx.dragLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DualListComponent_li_19_Template, 4, 6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DualListComponent_Template_button_click_21_listener($event) { return ctx.selectAll(ctx.confirmed); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DualListComponent_Template_button_click_23_listener($event) { return ctx.selectNone(ctx.confirmed); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c1, ctx.direction() ? 1 : 2, ctx.direction() ? 0 : "10px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.direction() ? "point-right" : "point-left")("disabled", ctx.available.pick.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.format.add);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c2, ctx.height, ctx.height))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c3, ctx.available.dragOver));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.available.sift);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled || ctx.isAllSelected(ctx.available));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.format.all);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isAnySelected(ctx.available));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.format.none);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](32, _c1, ctx.direction() ? 2 : 1, ctx.direction() ? "10px" : 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.direction() ? "point-left" : "point-right")("disabled", ctx.confirmed.pick.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.format.remove);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](35, _c2, ctx.height, ctx.height))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c3, ctx.confirmed.dragOver));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.confirmed.sift);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled || ctx.isAllSelected(ctx.confirmed));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.format.all);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isAnySelected(ctx.confirmed));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.format.none);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["div.record-picker[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:auto;border:1px solid #ddd;border-radius:8px;position:relative;cursor:pointer;scrollbar-base-color:#337ab7;scrollbar-3dlight-color:#337ab7;scrollbar-highlight-color:#337ab7;scrollbar-track-color:#eee;scrollbar-arrow-color:gray;scrollbar-shadow-color:gray;scrollbar-dark-shadow-color:gray}div.record-picker[_ngcontent-%COMP%]::-webkit-scrollbar{width:12px}div.record-picker[_ngcontent-%COMP%]::-webkit-scrollbar-button{width:0;height:0}div.record-picker[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#eee;box-shadow:0 0 3px #dfdfdf inset;border-top-right-radius:8px;border-bottom-right-radius:8px}div.record-picker[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#337ab7;border:thin solid gray;border-top-right-radius:8px;border-bottom-right-radius:8px}div.record-picker[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#286090}.record-picker[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0 0 1px}.record-picker[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-top:thin solid #ddd;border-bottom:1px solid #ddd;display:block;padding:2px 2px 2px 10px;margin-bottom:-1px;font-size:.85em;cursor:pointer;white-space:nowrap;min-height:16px}.record-picker[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.record-picker[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{background-color:#d9edf7}.record-picker[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover{background-color:#c4e3f3}.record-picker[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]{opacity:.5;cursor:default;background-color:inherit}.record-picker[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{border-top-left-radius:8px;border-top-right-radius:8px;border-top:none}.record-picker[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-bottom:none}.record-picker[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:pointer;font-weight:inherit;font-size:14px;padding:4px;margin-bottom:-1px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.record-picker[_ngcontent-%COMP%]   ul.over[_ngcontent-%COMP%]{background-color:#d3d3d3}.dual-list[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-content:flex-start}.dual-list[_ngcontent-%COMP%]   .listbox[_ngcontent-%COMP%]{width:50%;margin:0}.dual-list[_ngcontent-%COMP%]   .button-bar[_ngcontent-%COMP%]{margin-top:8px}.point-right[_ngcontent-%COMP%]::after{content:\"\\25B6\";padding-left:1em}.point-left[_ngcontent-%COMP%]::before{content:\"\\25C0\";padding-right:1em}.dual-list[_ngcontent-%COMP%]   .button-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:47%}button.btn-block[_ngcontent-%COMP%]{display:block;width:100%;margin-bottom:8px}.filter[_ngcontent-%COMP%]{margin-bottom:-2.2em}.filter[_ngcontent-%COMP%]::after{content:\"o\";width:40px;color:transparent;font-size:2em;background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M0 64l192 192v192l128-32V256L512 64H0z\"/></svg>');background-repeat:no-repeat;background-position:center center;opacity:.2;top:-36px;left:calc(100% - 21px);position:relative}"] });
DualListComponent.AVAILABLE_LIST_NAME = 'available';
DualListComponent.CONFIRMED_LIST_NAME = 'confirmed';
DualListComponent.LTR = 'left-to-right';
DualListComponent.RTL = 'right-to-left';
DualListComponent.DEFAULT_FORMAT = {
    add: 'Add',
    remove: 'Remove',
    all: 'All',
    none: 'None',
    direction: DualListComponent.LTR,
    draggable: true,
    locale: undefined
};
/** @nocollapse */
DualListComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] }
];
DualListComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    filter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    format: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    compare: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    source: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    destination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    destinationChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DualListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dual-list',
                template: "<div class=\"dual-list\">\n\t<div class=\"listbox\" [ngStyle]=\"{ 'order' :  direction() ? 1 : 2, 'margin-left' : direction() ? 0 : '10px' }\">\n\t\t<button type=\"button\" name=\"addBtn\" class=\"btn btn-primary btn-block\"\n\t\t\t(click)=\"moveItem(available, confirmed)\" [ngClass]=\"direction() ? 'point-right' : 'point-left'\"\n\t\t\t[disabled]=\"available.pick.length === 0\">{{format.add}}</button>\n\n\t\t<form *ngIf=\"filter\" class=\"filter\">\n\t\t\t<input class=\"form-control\" name=\"filterSource\" [(ngModel)]=\"available.picker\" (ngModelChange)=\"onFilter(available)\">\n\t\t</form>\n\n\t\t<div class=\"record-picker\">\n\t\t\t<ul [ngStyle]=\"{'max-height': height, 'min-height': height}\" [ngClass]=\"{over:available.dragOver}\"\n\t\t\t\t(drop)=\"drop($event, confirmed)\" (dragover)=\"allowDrop($event, available)\" (dragleave)=\"dragLeave()\">\n\t\t\t\t<li *ngFor=\"let item of available.sift; let idx=index;\"\n\t\t\t\t\t(click)=\"disabled ? null : selectItem(available.pick, item); shiftClick($event, idx, available, item)\"\n\t\t\t\t\t[ngClass]=\"{selected: isItemSelected(available.pick, item), disabled: disabled}\"\n\t\t\t\t\t[draggable]=\"!disabled && format.draggable\" (dragstart)=\"drag($event, item, available)\" (dragend)=\"dragEnd(available)\"\n\t\t\t\t><label>{{item._name}}</label></li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"button-bar\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary pull-left\" (click)=\"selectAll(available)\"\n\t\t\t\t[disabled]=\"disabled || isAllSelected(available)\">{{format.all}}</button>\n\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" (click)=\"selectNone(available)\"\n\t\t\t\t[disabled]=\"!isAnySelected(available)\">{{format.none}}</button>\n\t\t</div>\n\t</div>\n\n\t<div class=\"listbox\" [ngStyle]=\"{ 'order' : direction() ? 2 : 1, 'margin-left' : direction() ? '10px' : 0 }\">\n\t\t<button type=\"button\" name=\"removeBtn\" class=\"btn btn-primary btn-block\"\n\t\t\t(click)=\"moveItem(confirmed, available)\" [ngClass]=\"direction() ? 'point-left' : 'point-right'\"\n\t\t\t[disabled]=\"confirmed.pick.length === 0\">{{format.remove}}</button>\n\n\t\t<form *ngIf=\"filter\" class=\"filter\">\n\t\t\t<input class=\"form-control\" name=\"filterDestination\" [(ngModel)]=\"confirmed.picker\" (ngModelChange)=\"onFilter(confirmed)\">\n\t\t</form>\n\n\t\t<div class=\"record-picker\">\n\t\t\t<ul [ngStyle]=\"{'max-height': height, 'min-height': height}\" [ngClass]=\"{over:confirmed.dragOver}\"\n\t\t\t\t(drop)=\"drop($event, available)\" (dragover)=\"allowDrop($event, confirmed)\" (dragleave)=\"dragLeave()\">\n\t\t\t\t<li #itmConf *ngFor=\"let item of confirmed.sift; let idx=index;\"\n\t\t\t\t\t(click)=\"disabled ? null : selectItem(confirmed.pick, item); shiftClick($event, idx, confirmed, item)\"\n\t\t\t\t\t[ngClass]=\"{selected: isItemSelected(confirmed.pick, item), disabled: disabled}\"\n\t\t\t\t\t[draggable]=\"!disabled && format.draggable\" (dragstart)=\"drag($event, item, confirmed)\" (dragend)=\"dragEnd(confirmed)\"\n\t\t\t\t><label>{{item._name}}</label></li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"button-bar\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary pull-left\" (click)=\"selectAll(confirmed)\"\n\t\t\t\t[disabled]=\"disabled || isAllSelected(confirmed)\">{{format.all}}</button>\n\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" (click)=\"selectNone(confirmed)\"\n\t\t\t\t[disabled]=\"!isAnySelected(confirmed)\">{{format.none}}</button>\n\t\t</div>\n\t</div>\n</div>\n",
                styles: ["div.record-picker{overflow-x:hidden;overflow-y:auto;border:1px solid #ddd;border-radius:8px;position:relative;cursor:pointer;scrollbar-base-color:#337ab7;scrollbar-3dlight-color:#337ab7;scrollbar-highlight-color:#337ab7;scrollbar-track-color:#eee;scrollbar-arrow-color:gray;scrollbar-shadow-color:gray;scrollbar-dark-shadow-color:gray}div.record-picker::-webkit-scrollbar{width:12px}div.record-picker::-webkit-scrollbar-button{width:0;height:0}div.record-picker::-webkit-scrollbar-track{background:#eee;box-shadow:0 0 3px #dfdfdf inset;border-top-right-radius:8px;border-bottom-right-radius:8px}div.record-picker::-webkit-scrollbar-thumb{background:#337ab7;border:thin solid gray;border-top-right-radius:8px;border-bottom-right-radius:8px}div.record-picker::-webkit-scrollbar-thumb:hover{background:#286090}.record-picker ul{margin:0;padding:0 0 1px}.record-picker li{border-top:thin solid #ddd;border-bottom:1px solid #ddd;display:block;padding:2px 2px 2px 10px;margin-bottom:-1px;font-size:.85em;cursor:pointer;white-space:nowrap;min-height:16px}.record-picker li:hover{background-color:#f5f5f5}.record-picker li.selected{background-color:#d9edf7}.record-picker li.selected:hover{background-color:#c4e3f3}.record-picker li.disabled{opacity:.5;cursor:default;background-color:inherit}.record-picker li:first-child{border-top-left-radius:8px;border-top-right-radius:8px;border-top:none}.record-picker li:last-child{border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-bottom:none}.record-picker label{cursor:pointer;font-weight:inherit;font-size:14px;padding:4px;margin-bottom:-1px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.record-picker ul.over{background-color:#d3d3d3}.dual-list{display:flex;flex-direction:row;align-content:flex-start}.dual-list .listbox{width:50%;margin:0}.dual-list .button-bar{margin-top:8px}.point-right::after{content:\"\\25B6\";padding-left:1em}.point-left::before{content:\"\\25C0\";padding-right:1em}.dual-list .button-bar button{width:47%}button.btn-block{display:block;width:100%;margin-bottom:8px}.filter{margin-bottom:-2.2em}.filter::after{content:\"o\";width:40px;color:transparent;font-size:2em;background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M0 64l192 192v192l128-32V256L512 64H0z\"/></svg>');background-repeat:no-repeat;background-position:center center;opacity:.2;top:-36px;left:calc(100% - 21px);position:relative}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], display: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], destinationChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], compare: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], destination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularDualListBoxModule {
}
AngularDualListBoxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularDualListBoxModule });
AngularDualListBoxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularDualListBoxModule_Factory(t) { return new (t || AngularDualListBoxModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularDualListBoxModule, { declarations: function () { return [DualListComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]; }, exports: function () { return [DualListComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularDualListBoxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                declarations: [DualListComponent],
                exports: [DualListComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-dual-listbox.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/dynamic-report/dynamic-report.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/dynamic-report/dynamic-report.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui top attached tabular menu \">\r\n    <div class=\"item \" data-tab=\"first\" routerLink=\"/report/booking-report\">\r\n        Booking\r\n    </div>\r\n    <div class=\"item \" data-tab=\"second\" routerLink=\"/report/segment-report\">Segment</div>\r\n    <div class=\"item\" data-tab=\"third\" routerLink=\"/report/mis-report\">MIS</div>\r\n    <div class=\"item\" data-tab=\"fourth\" routerLink=\"/report/search-log-report\">Search Log</div>\r\n    <div class=\"item\" data-tab=\"fifth\" routerLink=\"/report/audit-report\">Audit Trail Log</div>\r\n    <div class=\"item\" data-tab=\"sixth\" routerLink=\"/report/ticket-report\">Ticket</div>\r\n    <div class=\"item active\" data-tab=\"seventh\" routerLink=\"/report/dynamic-report\">Dynamic Report</div>\r\n</div>\r\n<div class=\"ui bottom attached tab segment tabContent-block active\" data-tab=\"seventh\">\r\n    <div class=\"ui fluid container\">\r\n        <div class=\"box-container\">\r\n            <div class=\"ui one column grid\">\r\n                <div class=\"column\">\r\n                    <form [formGroup]=\"dynamicReportForm\" (ngSubmit)=\"showReport()\" class=\"ui form \">\r\n                        <div class=\"ui segment\">\r\n                            <div class=\"\">\r\n                                <div class=\"result-block\">\r\n                                    <div class=\"ui small header\">Choose Parameters</div>\r\n                                    <div class=\"ui divider\"></div>\r\n                                    <div class=\"field\">\r\n                                        <div class=\"fields\">\r\n                                            <div class=\"six wide field dual-choose\" [ngClass]=\"{'error': ((submitted && f.reportBy.errors) && f.reportBy.errors.required) }\">\r\n                                                <label>Report By <span class=\"mandatory\">*</span></label>\r\n                                                <div class=\"ui fluid search selection dropdown\">\r\n                                                    <input type=\"hidden\" formControlName=\"reportBy\" name=\"reportBy\" value=\"\" required>\r\n                                                    <i class=\"dropdown icon\"></i>\r\n                                                    <div class=\"default text\">Report By</div>\r\n                                                    <div class=\"menu\">\r\n                                                        <!-- <div class=\"item\" (click)=\"setReportBy('option')\">Choose option</div> -->\r\n                                                        <div class=\"item\" (click)=\"setReportBy('organisation')\">Organisation</div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"six wide field dual-choose\">\r\n                                                <label>Report Type</label>\r\n                                                <div class=\"ui fluid search selection dropdown\">\r\n                                                    <input type=\"hidden\" formControlName=\"reportType\" name=\"reportType\" value=\"\">\r\n                                                    <i class=\"dropdown icon\"></i>\r\n                                                    <div class=\"default text\">Report Type</div>\r\n                                                    <div class=\"menu\">\r\n                                                        <div class=\"item\" (click)=\"setReportType('filghtBooking')\">Filght|Detail Booking</div>\r\n                                                        <!-- <div class=\"item\" (click)=\"setReportType('transaction')\">Transaction Report</div> -->\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- for dual-list -->\r\n                                    <div *ngIf=\"showChooseOrg\">\r\n                                        <div class=\"dual-list-choose-org\">\r\n                                            <dual-list [source]=\"source\" [(destination)]=\"confirmed\"></dual-list>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- <div class=\"field\">\r\n                                        <div class=\"fields\">\r\n                                        </div>\r\n                                    </div> -->\r\n                                    <br>\r\n                                    <div class=\"field\">\r\n                                        <div class=\"fields\">\r\n                                            <div class=\"six wide field bookings_pickers\" [ngClass]=\"{'error': ((submitted && f.reportStartDate.errors) && f.reportStartDate.errors.required) }\">\r\n                                                <label>Start Date<span class=\"mandatory\">*</span></label>\r\n                                                <div class=\"ui left icon input\">\r\n                                                    <input type=\"text\" placeholder=\"Start Date\" formControlName=\"reportStartDate\" name=\"reportStartDate\" value=\"\" required />\r\n                                                    <i class=\"icon\">\r\n                                                        <img src=\"./../../../../assets/icons/calendar.svg\" class=\"bookings_input__placeholder-icon cal\" />\r\n                                                    </i>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"six wide field bookings_pickers\" [ngClass]=\"{'error': ((submitted && f.reportEndDate.errors) && f.reportEndDate.errors.required) }\">\r\n                                                <label>End Date<span class=\"mandatory\">*</span></label>\r\n                                                <div class=\"ui left icon input\">\r\n                                                    <input type=\"text\" placeholder=\"End Date\" formControlName=\"reportEndDate\" name=\"reportEndDate\" value=\"\" required />\r\n                                                    <i class=\"icon\">\r\n                                                        <img src=\"./../../../../assets/icons/calendar.svg\" class=\"bookings_input__placeholder-icon cal\" />\r\n                                                    </i>          \r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"field\">\r\n                                        <div class=\"fields\">\r\n                                            <div class=\"sixteen wide field bookings_btn-panel\">\r\n                                                <button class=\"ui primary  button\">\r\n                                                    Show Report\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"fields agent-name-booking\" *ngIf=\"showExportButton\">\r\n                                    <div class=\"eight wide field ui small header\">Dynamic Report</div>\r\n                                    <div class=\"eight wide field bookings_btn-panel\">\r\n                                        <button class=\"ui export button\" (click)=\"exportPivotData()\" *ngIf=\"showExportButton\" title=\"Export\">\r\n                                            Export\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div id=\"output\" class=\"output-pivot\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- <button class=\"ui active button\" *ngIf=\"showExportButton\" (click)=\"exportPivotData()\">\r\n            <i class=\"download icon\"></i>\r\n            Export\r\n        </button> -->\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/layout/report/dynamic-report/dynamic-report-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/report/dynamic-report/dynamic-report-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DynamicReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicReportRoutingModule", function() { return DynamicReportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dynamic_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-report.component */ "./src/app/layout/report/dynamic-report/dynamic-report.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', component: _dynamic_report_component__WEBPACK_IMPORTED_MODULE_1__["DynamicReportComponent"] }
];
let DynamicReportRoutingModule = class DynamicReportRoutingModule {
};
DynamicReportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], DynamicReportRoutingModule);



/***/ }),

/***/ "./src/app/layout/report/dynamic-report/dynamic-report.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/layout/report/dynamic-report/dynamic-report.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bookings_btn-panel {\n  padding: 20px 2px 0px;\n  text-align: right;\n}\n\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 100;\n}\n\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\ntable {\n  font-family: \"Roboto\", sans-serif;\n  border-collapse: collapse;\n  width: 50%;\n  margin-left: 300px;\n}\n\ntd,\nth {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n}\n\nth {\n  padding: 20px;\n}\n\n.minimise-icon {\n  float: right;\n}\n\nmat-selection-list {\n  max-height: 200px;\n  overflow: auto;\n  width: 100%;\n  max-width: 300px;\n  border: 1px solid #0000001c;\n}\n\n.main_report-org__scroll {\n  width: 100%;\n  max-width: 300px;\n  border: 1px solid #0000001c;\n}\n\n.add-arrow-icon {\n  position: relative;\n  padding: 31px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.dual-list-choose-org {\n  padding-top: 20px;\n  margin-bottom: 20px;\n  width: 75%;\n  margin: 0 auto 20px;\n}\n\n.seven.wide.field.dual-choose {\n  margin-bottom: 20px;\n}\n\n.output-pivot {\n  margin-top: 30px;\n  max-width: 100%;\n  overflow-x: auto;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.dynamic-report-header {\n  position: relative;\n  left: 32%;\n  color: #0000007a;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 200;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.ui.form .three.wide.field {\n  margin-bottom: 16px;\n}\n\n.ui.divider {\n  margin-bottom: 30px;\n}\n\n.fields {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.output-pivot {\n  width: auto;\n  margin: 32px;\n}\n\n.output-pivot table {\n  background: #fff;\n  padding: 30px 40px;\n  box-shadow: 0px 2px 6px rgba(6, 40, 98, 0.1) !important;\n  border-radius: 4.96141px;\n}\n\n.agent-name-booking {\n  margin: auto 32px !important;\n}\n\n.agent-name-booking .eight.wide.field {\n  padding: 0px;\n}\n\n.agent-name-booking .eight.wide.field button {\n  margin-right: 0px;\n}\n\n.eight.field.bookings_btn-panel {\n  padding: 0px;\n  text-align: right;\n}\n\n@media (max-width: 1440px) {\n  .result-block {\n    width: auto;\n    margin: 24px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .result-block {\n    width: auto;\n    margin: 20px;\n  }\n}\n\n@media (max-width: 991px) {\n  .ui.form .six.wide.field {\n    width: 42.5% !important;\n  }\n}\n\n@media (max-width: 800px) {\n  .ui.top.attached.tabular.menu {\n    display: block;\n  }\n  .ui.top.attached.tabular.menu .item {\n    padding: 12px 0px;\n  }\n}\n\n@media (max-width: 767px) {\n  .field .six.wide.field:first-child {\n    padding-bottom: 16px;\n  }\n\n  .result-block {\n    margin: 20px 8px !important;\n  }\n\n  .dual-list-choose-org {\n    width: 100%;\n  }\n\n  .output-pivot {\n    margin: 32px 12px !important;\n  }\n\n  .agent-name-booking .eight.wide.field button {\n    margin-top: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydC9keW5hbWljLXJlcG9ydC9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHJlcG9ydFxcZHluYW1pYy1yZXBvcnRcXGR5bmFtaWMtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcmVwb3J0L2R5bmFtaWMtcmVwb3J0L2R5bmFtaWMtcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREdJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0FSOztBREVJO0VBQ0ksd0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNBUjs7QURFSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDQVI7O0FEQ1E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0NaOztBREFZO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDRWhCOztBREVJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDQVI7O0FEQ1E7RUFDSSw0QkFBQTtBQ0NaOztBRENRO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7QUNDWjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDREo7O0FESUE7RUFDSSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7O0VBRUkseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDREo7O0FEVUE7RUFFSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDUko7O0FEV0E7RUFFSSxtQkFBQTtBQ1RKOztBRFlBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNUSjs7QURZQTtFQUNJLDRDQUFBO0FDVEo7O0FEWUE7RUFDSSxnQkFBQTtBQ1RKOztBRFlBO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDVEo7O0FEWUE7RUFDSSxrQ0FBQTtFQUNBLHdDQUFBO0FDVEo7O0FEWUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUNUSjs7QURZQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ1RKOztBRFlBO0VBQ0ksbUJBQUE7QUNUSjs7QURZQTtFQUNJLG1CQUFBO0FDVEo7O0FEaUJBO0VBQ0ksd0JBQUE7VUFBQSx1QkFBQTtBQ2RKOztBRGlCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDZEo7O0FEZUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7RUFDQSx3QkFBQTtBQ2JSOztBRGlCQTtFQUNJLDRCQUFBO0FDZEo7O0FEZUk7RUFDSSxZQUFBO0FDYlI7O0FEY1E7RUFDSSxpQkFBQTtBQ1paOztBRGlCQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ2RKOztBRGdCQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNiTjtBQUNGOztBRGdCQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNkTjtBQUNGOztBRGlCQTtFQUNJO0lBQ0ksdUJBQUE7RUNmTjtBQUNGOztBRGtCQTtFQUNJO0lBQ0ksY0FBQTtFQ2hCTjtFRGlCTTtJQUNJLGlCQUFBO0VDZlY7QUFDRjs7QURtQkE7RUFFUTtJQUNJLG9CQUFBO0VDbEJWOztFRHFCRTtJQUNJLDJCQUFBO0VDbEJOOztFRG9CRTtJQUNJLFdBQUE7RUNqQk47O0VEbUJFO0lBQ0ksNEJBQUE7RUNoQk47O0VEa0JFO0lBQ0ksZ0JBQUE7RUNmTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3JlcG9ydC9keW5hbWljLXJlcG9ydC9keW5hbWljLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29raW5nc19idG4tcGFuZWwge1xyXG4gICAgcGFkZGluZzogMjBweCAycHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCB7XHJcbiAgICAmLmJvb2tpbmdzX2RhdGVwaWNrZXIge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMzhweFxyXG4gICAgfVxyXG4gICAgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuNikgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICB9XHJcbiAgICAuaWNvbiB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAgICAgJi5jYWwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlYXJjaC5kcm9wZG93biB7XHJcbiAgICAgICAgd2lkdGg6IDIxOHB4O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNDJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVmYXVsdC50ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDAgMCAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgYm90dG9tOiAyOHB4O1xyXG4gICAgbGVmdDogOXB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcclxufVxyXG5cclxudGQsXHJcbnRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG50aCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ubWluaW1pc2UtaWNvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbm1hdC1zZWxlY3Rpb24tbGlzdCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDFjO1xyXG59XHJcblxyXG4ubWFpbl9yZXBvcnQtb3JnX19zY3JvbGwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDFjO1xyXG59XHJcblxyXG4uYWRkLWFycm93LWljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMzFweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4vLyAuYm94LWNvbnRhaW5lciB7XHJcbi8vICAgICB3aWR0aDogNTAlO1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgbGVmdDogMjAlO1xyXG4vLyB9XHJcblxyXG4uZHVhbC1saXN0LWNob29zZS1vcmcge1xyXG4gICAgLy8gcGFkZGluZzogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xyXG59XHJcblxyXG4uc2V2ZW4ud2lkZS5maWVsZC5kdWFsLWNob29zZSB7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMTgwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ub3V0cHV0LXBpdm90IHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG4udGFiLnNlZ21lbnQge1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLm1lbnU+Lml0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI4NTcxNDI5cmVtIDAgMCAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmR5bmFtaWMtcmVwb3J0LWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAzMiU7XHJcbiAgICBjb2xvcjogIzAwMDAwMDdhO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuLnVpLmZvcm0gLmZpZWxkPmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDhweDtcclxufVxyXG5cclxuLnVpLmZvcm0gLnRocmVlLndpZGUuZmllbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLnVpLmRpdmlkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLy8gLnJlc3VsdC1ibG9jayB7XHJcbi8vICAgICB3aWR0aDogMTAwMHB4O1xyXG4vLyAgICAgbWFyZ2luOiAzMnB4IGF1dG87XHJcbi8vIH1cclxuXHJcbi5maWVsZHMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vdXRwdXQtcGl2b3Qge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW46IDMycHg7XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSg2LCA0MCwgOTgsIDAuMSkgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hZ2VudC1uYW1lLWJvb2tpbmcge1xyXG4gICAgbWFyZ2luOiBhdXRvIDMycHggIWltcG9ydGFudDtcclxuICAgIC5laWdodC53aWRlLmZpZWxkIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZWlnaHQuZmllbGQuYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIC5yZXN1bHQtYmxvY2sge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMjRweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgLnJlc3VsdC1ibG9jayB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC51aS5mb3JtIC5zaXgud2lkZS5maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDQyLjUlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIC5pdGVtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5maWVsZCB7XHJcbiAgICAgICAgLnNpeC53aWRlLmZpZWxkOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJlc3VsdC1ibG9jayB7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDhweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmR1YWwtbGlzdC1jaG9vc2Utb3JnIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5vdXRwdXQtcGl2b3Qge1xyXG4gICAgICAgIG1hcmdpbjogMzJweCAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYWdlbnQtbmFtZS1ib29raW5nIC5laWdodC53aWRlLmZpZWxkIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIH1cclxufSIsIi5ib29raW5nc19idG4tcGFuZWwge1xuICBwYWRkaW5nOiAyMHB4IDJweCAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQuYm9va2luZ3NfZGF0ZXBpY2tlciB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1heC13aWR0aDogMTM4cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC42KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTAwO1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbCB7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24ge1xuICB3aWR0aDogMjE4cHg7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biAuc2VhcmNoIHtcbiAgbWFyZ2luLWxlZnQ6IDQycHggIWltcG9ydGFudDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIC5kZWZhdWx0LnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcbn1cblxuLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE4cHg7XG4gIGJvdHRvbTogMjhweDtcbiAgbGVmdDogOXB4O1xufVxuXG50YWJsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMzAwcHg7XG59XG5cbnRkLFxudGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbnRoIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLm1pbmltaXNlLWljb24ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbm1hdC1zZWxlY3Rpb24tbGlzdCB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAxYztcbn1cblxuLm1haW5fcmVwb3J0LW9yZ19fc2Nyb2xsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAxYztcbn1cblxuLmFkZC1hcnJvdy1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAzMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZHVhbC1saXN0LWNob29zZS1vcmcge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbn1cblxuLnNldmVuLndpZGUuZmllbGQuZHVhbC1jaG9vc2Uge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ub3V0cHV0LXBpdm90IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4udGFiLnNlZ21lbnQge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udWkuYm90dG9tLmF0dGFjaGVkLmFjdGl2ZS50YWIuc2VnbWVudCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC5tZW51ID4gLml0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwLjI4NTcxNDI5cmVtIDAgMCAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uZHluYW1pYy1yZXBvcnQtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAzMiU7XG4gIGNvbG9yOiAjMDAwMDAwN2E7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4udWkuZm9ybSAuZmllbGQgPiBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGNvbG9yOiAjMTgxQjIwO1xuICBtYXJnaW46IDBweCAwcHggOHB4O1xufVxuXG4udWkuZm9ybSAudGhyZWUud2lkZS5maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi51aS5kaXZpZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmZpZWxkcyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ub3V0cHV0LXBpdm90IHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMzJweDtcbn1cbi5vdXRwdXQtcGl2b3QgdGFibGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAzMHB4IDQwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoNiwgNDAsIDk4LCAwLjEpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcbn1cblxuLmFnZW50LW5hbWUtYm9va2luZyB7XG4gIG1hcmdpbjogYXV0byAzMnB4ICFpbXBvcnRhbnQ7XG59XG4uYWdlbnQtbmFtZS1ib29raW5nIC5laWdodC53aWRlLmZpZWxkIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmFnZW50LW5hbWUtYm9va2luZyAuZWlnaHQud2lkZS5maWVsZCBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmVpZ2h0LmZpZWxkLmJvb2tpbmdzX2J0bi1wYW5lbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLnJlc3VsdC1ibG9jayB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAyNHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5yZXN1bHQtYmxvY2sge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC51aS5mb3JtIC5zaXgud2lkZS5maWVsZCB7XG4gICAgd2lkdGg6IDQyLjUlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAudWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUgLml0ZW0ge1xuICAgIHBhZGRpbmc6IDEycHggMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZpZWxkIC5zaXgud2lkZS5maWVsZDpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIH1cblxuICAucmVzdWx0LWJsb2NrIHtcbiAgICBtYXJnaW46IDIwcHggOHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZHVhbC1saXN0LWNob29zZS1vcmcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm91dHB1dC1waXZvdCB7XG4gICAgbWFyZ2luOiAzMnB4IDEycHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hZ2VudC1uYW1lLWJvb2tpbmcgLmVpZ2h0LndpZGUuZmllbGQgYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/report/dynamic-report/dynamic-report.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/report/dynamic-report/dynamic-report.component.ts ***!
  \**************************************************************************/
/*! exports provided: DynamicReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicReportComponent", function() { return DynamicReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/report/report.service */ "./src/app/shared/services/report/report.service.ts");
/* harmony import */ var src_app_shared_services_report_export_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/report/export-report.service */ "./src/app/shared/services/report/export-report.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");






let DynamicReportComponent = class DynamicReportComponent {
    constructor(fb, ReportService, exportReportService, toastr) {
        this.fb = fb;
        this.ReportService = ReportService;
        this.exportReportService = exportReportService;
        this.toastr = toastr;
        this.selectedReports = [];
        this.choosedOrganisation = [];
        this.showChooseOrg = false;
        this.showExportButton = false;
        this.submitted = false;
        this.newOrganiseObj = {};
        this.source = [];
        this.confirmed = [];
        this.newDynamicReportObj = {};
        this.showReportResults = [];
        this.bookingsLoader = false;
        this.dynamicReportForm = this.fb.group({
            reportBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            reportType: [''],
            selectedOrg: [''],
            reportStartDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            reportEndDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.loadStartDate = () => {
            var scope = this;
            $(function () {
                $('input[name="reportStartDate"]').daterangepicker({
                    singleDatePicker: true,
                    showDropdowns: true,
                    minYear: 1901,
                    startDate: moment().subtract(90, 'day'),
                    autoUpdateInput: false,
                }, function (start, end, label) {
                    var years = moment().diff(start, 'years');
                    scope.dynamicReportForm.get('reportStartDate').setValue(moment(start).format('DD-MM-YYYY'));
                });
            });
        };
        this.loadEndDate = () => {
            var scope = this;
            $(function () {
                $('input[name="reportEndDate"]').daterangepicker({
                    singleDatePicker: true,
                    showDropdowns: true,
                    minYear: 1901,
                    startDate: moment(),
                    // minDate: moment(),
                    autoUpdateInput: false,
                }, function (start, end, label) {
                    var years = moment().diff(start, 'years');
                    scope.dynamicReportForm.get('reportEndDate').setValue(moment(start).format('DD-MM-YYYY'));
                });
            });
        };
        this.setReportType = (value) => {
            this.dynamicReportForm.get('reportType').setValue(value);
        };
        this.setReportBy = (value) => {
            if (value == 'option') {
                this.showChooseOrg = false;
            }
            else {
                this.showChooseOrg = true;
                this.fetchAllOrganization();
            }
            this.dynamicReportForm.get('reportBy').setValue(value);
        };
        this.showReport = () => {
            this.bookingsLoader = true;
            this.submitted = true;
            if (this.dynamicReportForm.invalid) {
                return;
            }
            this.newDynamicReportObj.start_date = this.dynamicReportForm.get('reportStartDate').value;
            this.newDynamicReportObj.end_date = this.dynamicReportForm.get('reportEndDate').value;
            this.dynamicReportForm.get('selectedOrg').setValue(this.confirmed);
            this.dynamicReportForm.get('selectedOrg').setValue(this.MapNametoIds(this.confirmed));
            this.newDynamicReportObj.organisation_ids = this.dynamicReportForm.get('selectedOrg').value;
            this.ReportService.NewDynamicPivotTable(this.newDynamicReportObj).subscribe((results) => {
                if (results.type == 'result') {
                    this.bookingsLoader = false;
                    var arr = results.Output;
                    if (arr.length != 0) {
                        this.showReportResults = results.Output;
                    }
                    else {
                        this.toastr.info(`There is no data available to show`, `Oops!!`, {
                            timeOut: 3000,
                            progressBar: false,
                            positionClass: 'toast-bottom-right'
                        });
                    }
                    this.pivotTable();
                }
                else {
                    this.bookingsLoader = false;
                    this.toastr.error(`${results.msg}`, `${results.msg}`, {
                        timeOut: 10000,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                }
            });
        };
        this.exportPivotData = () => {
            var d = new Date();
            var crntDate = d.getFullYear() + "_" + (d.getMonth() + 1) + "_" + d.getDate();
            $("#output").table2excel({
                exclude: ".noExl",
                name: "Report ",
                filename: "CustomReport" + crntDate //do not include extension
            });
        };
    }
    // convenience getter for easy access to form fields
    get f() { return this.dynamicReportForm.controls; }
    ngOnInit() { }
    ngAfterViewInit() {
        $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.dropdown').dropdown();
        });
        this.loadEndDate();
        this.loadStartDate();
    }
    fetchAllOrganization() {
        this.ReportService.GetAllOrganization().subscribe((res) => {
            if (res.status) {
                res.result.data.forEach(element => {
                    if (element.name != null)
                        this.source.push(element.name);
                });
                this.orginalOrganisationsResult = res.result.data;
            }
            else {
                this.toastr.error(`${res.message}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    pivotTable() {
        this.showExportButton = true;
        $.pivotUtilities.tipsData = this.showReportResults;
        var renderers = $.extend($.pivotUtilities.renderers, $.pivotUtilities.plotly_renderers);
        var derivers = $.pivotUtilities.derivers;
        $("#output").pivotUI($.pivotUtilities.tipsData, { renderers: renderers, });
    }
    ;
    MapNametoIds(selected) {
        var original = this.orginalOrganisationsResult;
        var tmp = [];
        for (let i = 0; i < selected.length; i++) {
            const name_org = selected[i];
            var rest = original.filter(obj => obj.name == name_org);
            if (rest.length >= 0)
                tmp.push(rest[0].parent_id);
        }
        return tmp;
    }
};
DynamicReportComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"] },
    { type: src_app_shared_services_report_export_report_service__WEBPACK_IMPORTED_MODULE_4__["ExportReportService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
DynamicReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dynamic-report',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dynamic-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/dynamic-report/dynamic-report.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dynamic-report.component.scss */ "./src/app/layout/report/dynamic-report/dynamic-report.component.scss")).default]
    })
], DynamicReportComponent);



/***/ }),

/***/ "./src/app/layout/report/dynamic-report/dynamic-report.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/report/dynamic-report/dynamic-report.module.ts ***!
  \***********************************************************************/
/*! exports provided: DynamicReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicReportModule", function() { return DynamicReportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _dynamic_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamic-report.component */ "./src/app/layout/report/dynamic-report/dynamic-report.component.ts");
/* harmony import */ var _dynamic_report_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-report-routing.module */ "./src/app/layout/report/dynamic-report/dynamic-report-routing.module.ts");
/* harmony import */ var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-dual-listbox */ "./node_modules/angular-dual-listbox/__ivy_ngcc__/fesm2015/angular-dual-listbox.js");








let DynamicReportModule = class DynamicReportModule {
};
DynamicReportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dynamic_report_component__WEBPACK_IMPORTED_MODULE_4__["DynamicReportComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            // BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _dynamic_report_routing_module__WEBPACK_IMPORTED_MODULE_5__["DynamicReportRoutingModule"],
            angular_dual_listbox__WEBPACK_IMPORTED_MODULE_6__["AngularDualListBoxModule"]
        ],
    })
], DynamicReportModule);



/***/ }),

/***/ "./src/app/shared/services/report/export-report.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/report/export-report.service.ts ***!
  \*****************************************************************/
/*! exports provided: ExportReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportReportService", function() { return ExportReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);




const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
let ExportReportService = class ExportReportService {
    constructor() { }
    exportAsExcelFile(json, excelFileName) {
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(json);
        console.log('worksheet', worksheet);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    saveAsExcelFile(buffer, fileName) {
        const data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
};
ExportReportService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ExportReportService);



/***/ })

}]);
//# sourceMappingURL=dynamic-report-dynamic-report-module-es2016.js.map