import './polyfills.server.mjs';
import{a as Se,b as Oe,c as xe,f as Ne,k as Pe,l as ke}from"./chunk-QF3ELAN5.mjs";import{$ as ve,$a as Ee,Ba as w,Ca as g,Da as ee,Ea as d,Fa as u,Ga as C,H as V,Ha as I,I as N,Ia as te,J as P,Ja as c,K as Z,Ka as T,La as G,M as v,P as X,Pa as Ae,S as E,T as k,U as Y,V as f,W as ye,_ as J,ab as ne,ca as K,da as F,db as Fe,h as pe,ia as _e,ib as we,jb as Ie,m as ge,oa as p,pa as l,qa as Ce,r as me,ra as Ve,sa as be,ta as Q,ua as De,va as Me,xa as _}from"./chunk-YKN3AYTC.mjs";import{a as h,b as y}from"./chunk-VVCT4QZE.mjs";var $e=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(l(Q),l(K))},e.\u0275dir=f({type:e});let t=e;return t})(),Mt=(()=>{let e=class e extends $e{};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=ve(e)))(o||e)}})(),e.\u0275dir=f({type:e,features:[_]});let t=e;return t})(),We=new v("");var At={provide:We,useExisting:N(()=>q),multi:!0};function Et(){let t=ne()?ne().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Ft=new v(""),q=(()=>{let e=class e extends $e{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Et())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(l(Q),l(K),l(Ft,8))},e.\u0275dir=f({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&I("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[T([At]),_]});let t=e;return t})();function m(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function qe(t){return t!=null&&typeof t.length=="number"}var ze=new v(""),Ze=new v(""),wt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,D=class{static min(e){return It(e)}static max(e){return St(e)}static required(e){return Ot(e)}static requiredTrue(e){return xt(e)}static email(e){return Nt(e)}static minLength(e){return Pt(e)}static maxLength(e){return kt(e)}static pattern(e){return Tt(e)}static nullValidator(e){return Xe(e)}static compose(e){return tt(e)}static composeAsync(e){return it(e)}};function It(t){return e=>{if(m(e.value)||m(t))return null;let i=parseFloat(e.value);return!isNaN(i)&&i<t?{min:{min:t,actual:e.value}}:null}}function St(t){return e=>{if(m(e.value)||m(t))return null;let i=parseFloat(e.value);return!isNaN(i)&&i>t?{max:{max:t,actual:e.value}}:null}}function Ot(t){return m(t.value)?{required:!0}:null}function xt(t){return t.value===!0?null:{required:!0}}function Nt(t){return m(t.value)||wt.test(t.value)?null:{email:!0}}function Pt(t){return e=>m(e.value)||!qe(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function kt(t){return e=>qe(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function Tt(t){if(!t)return Xe;let e,i;return typeof t=="string"?(i="",t.charAt(0)!=="^"&&(i+="^"),i+=t,t.charAt(t.length-1)!=="$"&&(i+="$"),e=new RegExp(i)):(i=t.toString(),e=t),n=>{if(m(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:i,actualValue:r}}}}function Xe(t){return null}function Ye(t){return t!=null}function Je(t){return Ae(t)?pe(t):t}function Ke(t){let e={};return t.forEach(i=>{e=i!=null?h(h({},e),i):e}),Object.keys(e).length===0?null:e}function Qe(t,e){return e.map(i=>i(t))}function Gt(t){return!t.validate}function et(t){return t.map(e=>Gt(e)?e:i=>e.validate(i))}function tt(t){if(!t)return null;let e=t.filter(Ye);return e.length==0?null:function(i){return Ke(Qe(i,e))}}function nt(t){return t!=null?tt(et(t)):null}function it(t){if(!t)return null;let e=t.filter(Ye);return e.length==0?null:function(i){let n=Qe(i,e).map(Je);return me(n).pipe(ge(Ke))}}function rt(t){return t!=null?it(et(t)):null}function Te(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function ot(t){return t._rawValidators}function st(t){return t._rawAsyncValidators}function ie(t){return t?Array.isArray(t)?t:[t]:[]}function B(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ge(t,e){let i=ie(e);return ie(t).forEach(r=>{B(i,r)||i.push(r)}),i}function je(t,e){return ie(e).filter(i=>!B(t,i))}var U=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=nt(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=rt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},M=class extends U{get formDirective(){return null}get path(){return null}},x=class extends U{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},H=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},jt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},kn=y(h({},jt),{"[class.ng-submitted]":"isSubmitted"}),at=(()=>{let e=class e extends H{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(l(x,2))},e.\u0275dir=f({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&ee("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[_]});let t=e;return t})(),lt=(()=>{let e=class e extends H{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(l(M,10))},e.\u0275dir=f({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&ee("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[_]});let t=e;return t})();var S="VALID",j="INVALID",b="PENDING",O="DISABLED";function ae(t){return(z(t)?t.validators:t)||null}function Rt(t){return Array.isArray(t)?nt(t):t||null}function le(t,e){return(z(e)?e.asyncValidators:t)||null}function Bt(t){return Array.isArray(t)?rt(t):t||null}function z(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function ut(t,e,i){let n=t.controls;if(!(e?Object.keys(n):n).length)throw new V(1e3,"");if(!n[i])throw new V(1001,"")}function dt(t,e,i){t._forEachChild((n,r)=>{if(i[r]===void 0)throw new V(1002,"")})}var A=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===S}get invalid(){return this.status===j}get pending(){return this.status==b}get disabled(){return this.status===O}get enabled(){return this.status!==O}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ge(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ge(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(je(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(je(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=b,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=O,this.errors=null,this._forEachChild(n=>{n.disable(y(h({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(y(h({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=S,this._forEachChild(n=>{n.enable(y(h({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(y(h({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===S||this.status===b)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?O:S}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=b,this._hasOwnPendingAsyncValidator=!0;let i=Je(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new F,this.statusChanges=new F}_calculateStatus(){return this._allControlsDisabled()?O:this.errors?j:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(b)?b:this._anyControlsHaveStatus(j)?j:S}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Rt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Bt(this._rawAsyncValidators)}},L=class extends A{constructor(e,i,n){super(ae(i),le(n,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,i){return this.controls[e]?this.controls[e]:(this.controls[e]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(e,i,n={}){this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(e,i,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],i&&this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,i={}){dt(this,!0,e),Object.keys(e).forEach(n=>{ut(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e={},i={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(e,i,n)=>(e[n]=i.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(i,n)=>n._syncPendingControls()?!0:i);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(i=>{let n=this.controls[i];n&&e(n,i)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[i,n]of Object.entries(this.controls))if(this.contains(i)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(i,n,r)=>((n.enabled||this.disabled)&&(i[r]=n.value),i))}_reduceChildren(e,i){let n=e;return this._forEachChild((r,o)=>{n=i(n,r,o)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var re=class extends L{};var ct=new v("CallSetDisabledState",{providedIn:"root",factory:()=>ue}),ue="always";function Ut(t,e){return[...e.path,t]}function Re(t,e,i=ue){de(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Lt(t,e),Wt(t,e),$t(t,e),Ht(t,e)}function Be(t,e,i=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),W(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function $(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function Ht(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function de(t,e){let i=ot(t);e.validator!==null?t.setValidators(Te(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=st(t);e.asyncValidator!==null?t.setAsyncValidators(Te(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();$(e._rawValidators,r),$(e._rawAsyncValidators,r)}function W(t,e){let i=!1;if(t!==null){if(e.validator!==null){let r=ot(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.validator);o.length!==r.length&&(i=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=st(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.asyncValidator);o.length!==r.length&&(i=!0,t.setAsyncValidators(o))}}}let n=()=>{};return $(e._rawValidators,n),$(e._rawAsyncValidators,n),i}function Lt(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ht(t,e)})}function $t(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ht(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function ht(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Wt(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function qt(t,e){t==null,de(t,e)}function zt(t,e){return W(t,e)}function Zt(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function Xt(t){return Object.getPrototypeOf(t.constructor)===Mt}function Yt(t,e){t._syncPendingControls(),e.forEach(i=>{let n=i.control;n.updateOn==="submit"&&n._pendingChange&&(i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Jt(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(o=>{o.constructor===q?i=o:Xt(o)?n=o:r=o}),r||n||i||null}function Kt(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function Ue(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function He(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var R=class extends A{constructor(e=null,i,n){super(ae(i),le(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),z(i)&&(i.nonNullable||i.initialValueIsDefault)&&(He(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ue(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ue(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){He(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Qt=t=>t instanceof R;var ft=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=f({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var pt=new v("");var en={provide:M,useExisting:N(()=>ce)},ce=(()=>{let e=class e extends M{constructor(n,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new F,this._setValidators(n),this._setAsyncValidators(r)}ngOnChanges(n){this._checkFormPresent(),n.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(W(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(n){let r=this.form.get(n.path);return Re(r,n,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(n),r}getControl(n){return this.form.get(n.path)}removeControl(n){Be(n.control||null,n,!1),Kt(this.directives,n)}addFormGroup(n){this._setUpFormContainer(n)}removeFormGroup(n){this._cleanUpFormContainer(n)}getFormGroup(n){return this.form.get(n.path)}addFormArray(n){this._setUpFormContainer(n)}removeFormArray(n){this._cleanUpFormContainer(n)}getFormArray(n){return this.form.get(n.path)}updateModel(n,r){this.form.get(n.path).setValue(r)}onSubmit(n){return this.submitted=!0,Yt(this.form,this.directives),this.ngSubmit.emit(n),n?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(n=void 0){this.form.reset(n),this.submitted=!1}_updateDomValue(){this.directives.forEach(n=>{let r=n.control,o=this.form.get(n.path);r!==o&&(Be(r||null,n),Qt(o)&&(Re(o,n,this.callSetDisabledState),n.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(n){let r=this.form.get(n.path);qt(r,n),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(n){if(this.form){let r=this.form.get(n.path);r&&zt(r,n)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){de(this.form,this),this._oldForm&&W(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(l(ze,10),l(Ze,10),l(ct,8))},e.\u0275dir=f({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&I("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:[E.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[T([en]),_,J]});let t=e;return t})();var tn={provide:x,useExisting:N(()=>he)},he=(()=>{let e=class e extends x{set isDisabled(n){}constructor(n,r,o,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new F,this._ngModelWarningSent=!1,this._parent=n,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Jt(this,s)}ngOnChanges(n){this._added||this._setUpControl(),Zt(n,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}get path(){return Ut(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(l(M,13),l(ze,10),l(Ze,10),l(We,10),l(pt,8))},e.\u0275dir=f({type:e,selectors:[["","formControlName",""]],inputs:{name:[E.None,"formControlName","name"],isDisabled:[E.None,"disabled","isDisabled"],model:[E.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[T([tn]),_,J]});let t=e;return t})();var nn=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Y({type:e}),e.\u0275inj=Z({});let t=e;return t})(),oe=class extends A{constructor(e,i,n){super(ae(i),le(n,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,i={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}insert(e,i,n={}){this.controls.splice(e,0,i),this._registerControl(i),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(e,i={}){let n=this._adjustIndex(e);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:i.emitEvent})}setControl(e,i,n={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),i&&(this.controls.splice(r,0,i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,i={}){dt(this,!1,e),e.forEach((n,r)=>{ut(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(e.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e=[],i={}){this._forEachChild((n,r)=>{n.reset(e[r],{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(i=>i._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((i,n)=>n._syncPendingControls()?!0:i,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((i,n)=>{e(i,n)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(i=>i.enabled&&e(i))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Le(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var gt=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let n=new e;return n.useNonNullable=!0,n}group(n,r=null){let o=this._reduceControls(n),s={};return Le(r)?s=r:r!==null&&(s.validators=r.validator,s.asyncValidators=r.asyncValidator),new L(o,s)}record(n,r=null){let o=this._reduceControls(n);return new re(o,r)}control(n,r,o){let s={};return this.useNonNullable?(Le(r)?s=r:(s.validators=r,s.asyncValidators=o),new R(n,y(h({},s),{nonNullable:!0}))):new R(n,r,o)}array(n,r,o){let s=n.map(a=>this._createControl(a));return new oe(s,r,o)}_reduceControls(n){let r={};return Object.keys(n).forEach(o=>{r[o]=this._createControl(n[o])}),r}_createControl(n){if(n instanceof R)return n;if(n instanceof A)return n;if(Array.isArray(n)){let r=n[0],o=n.length>1?n[1]:null,s=n.length>2?n[2]:null;return this.control(r,o,s)}else return this.control(n)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var mt=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:pt,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:ct,useValue:n.callSetDisabledState??ue}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Y({type:e}),e.\u0275inj=Z({imports:[nn]});let t=e;return t})();function on(t,e){t&1&&(d(0,"small"),c(1,"El correo debe ser @gmail.com o @itoaxaca.edu.mx."),u())}function sn(t,e){t&1&&(d(0,"small"),c(1,"El correo es requerido."),u())}function an(t,e){if(t&1&&(d(0,"div"),w(1,on,2,0,"small",6)(2,sn,2,0,"small",6),u()),t&2){let i,n,r=te();p(),g("ngIf",(i=r.loginForm.get("username"))==null||i.errors==null?null:i.errors.emailInvalid),p(),g("ngIf",(n=r.loginForm.get("username"))==null||n.errors==null?null:n.errors.required)}}function ln(t,e){t&1&&(d(0,"small"),c(1,"La contrase\xF1a debe tener una may\xFAscula, una min\xFAscula, un n\xFAmero y un car\xE1cter especial, y al menos 6 caracteres."),u())}function un(t,e){t&1&&(d(0,"small"),c(1,"La contrase\xF1a es requerida."),u())}function dn(t,e){if(t&1&&(d(0,"div"),w(1,ln,2,0,"small",6)(2,un,2,0,"small",6),u()),t&2){let i,n,r=te();p(),g("ngIf",(i=r.loginForm.get("password"))==null||i.errors==null?null:i.errors.passwordInvalid),p(),g("ngIf",(n=r.loginForm.get("password"))==null||n.errors==null?null:n.errors.required)}}var yt=(()=>{let e=class e{constructor(n,r){this.fb=n,this.router=r}ngOnInit(){this.loginForm=this.fb.group({username:["",[D.required,this.emailValidator]],password:["",[D.required,D.minLength(6),this.passwordValidator]]})}emailValidator(n){let r=/^[^\s@]+@(gmail\.com|itoaxaca\.edu\.mx)$/;return n.value&&!r.test(n.value)?{emailInvalid:!0}:null}passwordValidator(n){let r=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;return n.value&&!r.test(n.value)?{passwordInvalid:!0}:null}onLogin(){this.loginForm.valid?(console.log("Username:",this.loginForm.value.username),console.log("Password:",this.loginForm.value.password),this.router.navigate(["dashboard.html"])):console.log("Form is invalid")}};e.\u0275fac=function(r){return new(r||e)(l(gt),l(Pe))},e.\u0275cmp=k({type:e,selectors:[["app-login"]],standalone:!0,features:[G],decls:32,vars:3,consts:[[1,"login-container"],[1,"login-form",3,"ngSubmit","formGroup"],[1,"titulo"],[1,"input-group"],["for","username"],["type","text","id","username","formControlName","username","placeholder","Ingresa tu correo electronico"],[4,"ngIf"],["for","password"],["type","password","id","password","formControlName","password","placeholder","Ingresa tu contrase\xF1a"],[1,"options"],["type","checkbox","name","remember"],["href","#",1,"forgot-password"],["type","submit",1,"login-button"],["href","#"],[1,"social-login"],["href","https://www.facebook.com/share/wJvJ3Zja9vNHioua/?mibextid=qi2Omg",1,"social-button","facebook"],["href","https://www.instagram.com/quesito_27_10_22?igsh=djV0bG4wanEwZHpi","target","_blank",1,"social-button","instagram"],["href","https://github.com/CristianLeon12","target","_blank",1,"social-button","github"]],template:function(r,o){if(r&1&&(d(0,"div",0)(1,"form",1),I("ngSubmit",function(){return o.onLogin()}),d(2,"h2",2),c(3,"Inicio"),u(),d(4,"div",3)(5,"label",4),c(6,"Usuario o Correo"),u(),C(7,"input",5),w(8,an,3,2,"div",6),u(),d(9,"div",3)(10,"label",7),c(11,"Contrase\xF1a"),u(),C(12,"input",8),w(13,dn,3,2,"div",6),u(),d(14,"div",9)(15,"label"),C(16,"input",10),c(17," Volver a recordar "),u(),d(18,"a",11),c(19,"Olvidaste tu contrase\xF1a?"),u()(),d(20,"button",12),c(21,"Ingresar"),u(),d(22,"p"),c(23,"Aun no cuentas con tu cuenta? "),d(24,"a",13),c(25,"Registrate aqui"),u()(),d(26,"div",14)(27,"p"),c(28,"------------------ Contactanos en nuestras redes ------------------"),u(),C(29,"a",15)(30,"a",16)(31,"a",17),u()()()),r&2){let s,a;p(),g("formGroup",o.loginForm),p(7),g("ngIf",((s=o.loginForm.get("username"))==null?null:s.touched)&&((s=o.loginForm.get("username"))==null?null:s.invalid)),p(5),g("ngIf",((a=o.loginForm.get("password"))==null?null:a.touched)&&((a=o.loginForm.get("password"))==null?null:a.invalid))}},dependencies:[Ie,we,mt,ft,q,at,lt,ce,he],styles:[".login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background:url(/assets/img/pantalla.jpg) no-repeat center center fixed;background-size:cover}.login-form[_ngcontent-%COMP%]{background:#fff;padding:2rem;border-radius:8px;box-shadow:0 4px 6px #0000001a;width:400px;text-align:center;border-color:#000;border-inline-end-width:20px}.login-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:1rem}.input-group[_ngcontent-%COMP%]{margin-bottom:1rem;text-align:left}.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem}.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:.5rem;border:1px solid #ddd;border-radius:4px}.options[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem}.options[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%]{text-decoration:none;color:#3498db;font-size:.9rem}.login-button[_ngcontent-%COMP%]{background:#3498db;color:#fff;border:none;padding:.5rem;border-radius:4px;width:100%;cursor:pointer;margin-bottom:1rem}.social-login[_ngcontent-%COMP%]{text-align:center}.social-login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.5rem}.social-button[_ngcontent-%COMP%]{display:inline-block;margin:0 .5rem;padding:.5rem;border:none;border-radius:50%;cursor:pointer;color:#fff;width:30px;height:30px;background-size:cover;background-position:center;background-repeat:no-repeat}.social-button.facebook[_ngcontent-%COMP%]{background-image:url(/assets/img/face.png)}.social-button.instagram[_ngcontent-%COMP%]{background-image:url(/assets/img/insta.png)}.social-button.github[_ngcontent-%COMP%]{background-image:url(/assets/img/git.png)}.titulo[_ngcontent-%COMP%]{font-size:40px;margin-top:0%}"]});let t=e;return t})();var vt=(()=>{let e=class e{constructor(){this.title="login_cristian"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=k({type:e,selectors:[["app-root"]],standalone:!0,features:[G],decls:1,vars:0,template:function(r,o){r&1&&C(0,"app-login")},dependencies:[yt]});let t=e;return t})();var _t=[];var cn="@",hn=(()=>{let e=class e{constructor(n,r,o,s,a){this.doc=n,this.delegate=r,this.zone=o,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=X(Ve,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-5TRGJ7W7.mjs")).catch(r=>{throw new V(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc,this.scheduler);let s=new o(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(n,r){let o=this.delegate.createRenderer(n,r);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let s=new fe(o);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let Dt=a.createRenderer(n,r);s.use(Dt)}).catch(a=>{s.use(o)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(r){Ce()},e.\u0275prov=P({token:e,factory:e.\u0275fac});let t=e;return t})(),fe=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let i of this.replay)i(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,i){return this.delegate.createElement(e,i)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,i){this.delegate.appendChild(e,i)}insertBefore(e,i,n,r){this.delegate.insertBefore(e,i,n,r)}removeChild(e,i,n){this.delegate.removeChild(e,i,n)}selectRootElement(e,i){return this.delegate.selectRootElement(e,i)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,i,n,r){this.delegate.setAttribute(e,i,n,r)}removeAttribute(e,i,n){this.delegate.removeAttribute(e,i,n)}addClass(e,i){this.delegate.addClass(e,i)}removeClass(e,i){this.delegate.removeClass(e,i)}setStyle(e,i,n,r){this.delegate.setStyle(e,i,n,r)}removeStyle(e,i,n){this.delegate.removeStyle(e,i,n)}setProperty(e,i,n){this.shouldReplay(i)&&this.replay.push(r=>r.setProperty(e,i,n)),this.delegate.setProperty(e,i,n)}setValue(e,i){this.delegate.setValue(e,i)}listen(e,i,n){return this.shouldReplay(i)&&this.replay.push(r=>r.listen(e,i,n)),this.delegate.listen(e,i,n)}shouldReplay(e){return this.replay!==null&&e.startsWith(cn)}};function Ct(t="animations"){return De("NgAsyncAnimations"),ye([{provide:be,useFactory:(e,i,n)=>new hn(e,i,n,t),deps:[Fe,Se,Me]},{provide:_e,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Vt={providers:[ke(_t),xe(),Ct()]};var fn={providers:[Ne()]},bt=Ee(Vt,fn);var pn=()=>Oe(vt,bt),ui=pn;export{ui as a};
