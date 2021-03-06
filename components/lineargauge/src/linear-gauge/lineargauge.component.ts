import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { LinearGauge } from '@syncfusion/ej2-lineargauge';
import { Template } from '@syncfusion/ej2-angular-base';
import { AxesDirective } from './axes.directive';
import { AnnotationsDirective } from './annotations.directive';

export const inputs: string[] = ['annotations','axes','background','border','container','description','enablePersistence','enableRtl','format','height','locale','margin','orientation','rangePalettes','tabIndex','theme','title','titleStyle','tooltip','useGroupingSeparator','width'];
export const outputs: string[] = ['animationComplete','annotationRender','axisLabelRender','beforePrint','dragEnd','dragMove','dragStart','gaugeMouseDown','gaugeMouseLeave','gaugeMouseMove','gaugeMouseUp','load','loaded','resized','tooltipRender','valueChange'];
export const twoWays: string[] = [''];

/**
 * Linear Gauge Component
 * ```html
 * <ej-lineargauge></ej-lineargauge>
 * ```
 */
@Component({
    selector: 'ejs-lineargauge',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childAxes: new ContentChild(AxesDirective), 
        childAnnotations: new ContentChild(AnnotationsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class LinearGaugeComponent extends LinearGauge implements IComponentBase {
    public context : any;
    public tagObjects: any;
    public childAxes: QueryList<AxesDirective>;
    public childAnnotations: QueryList<AnnotationsDirective>;
    public tags: string[] = ['axes', 'annotations'];

    @ContentChild('tooltipTemplate')
    @Template()
    public tooltip_template: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('LinearGaugeGaugeTooltip');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('LinearGaugeAnnotations');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context  = new ComponentBase();
    }

    public ngOnInit() {
        this.context.ngOnInit(this);
    }

    public ngAfterViewInit(): void {
        this.context.ngAfterViewInit(this);
    }

    public ngOnDestroy(): void {
        this.context.ngOnDestroy(this);
    }

    public ngAfterContentChecked(): void {
        this.tagObjects[0].instance = this.childAxes;
        if (this.childAnnotations) {
                    this.tagObjects[1].instance = this.childAnnotations as any;
                }
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

