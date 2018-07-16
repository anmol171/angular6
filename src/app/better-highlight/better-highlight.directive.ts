import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor:string = 'transparent';
  @Input('appBetterHighlight') highlightColor:string = 'blue';


  //@HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
//  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
@HostBinding('style.backgroundColor') backgroundColor: string;
  
  constructor(private element: ElementRef, private renderer: Renderer2) { }

    ngOnInit() { 
      this.backgroundColor = this.defaultColor;
        // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'blue');
    }

    @HostListener('mouseenter') mouseover(eventData: Event){

 //     this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'blue');
      
    //this.backgroundColor = 'blue';
    this.backgroundColor = this.highlightColor;

    }

    @HostListener('mouseleave') mouseleave(eventData: Event){

 //     this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'transparent');
      //this.backgroundColor = 'transparent';
      this.backgroundColor = this.defaultColor;
   
    }

}
