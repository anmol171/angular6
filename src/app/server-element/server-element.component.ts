import { Component,
   OnInit,
   Input,
   ViewEncapsulation,
  OnChanges,
   SimpleChanges,
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewChecked,
   AfterViewInit, 
   OnDestroy,
   ViewChild,
  ElementRef,
  ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class ServerElementComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewChecked,
AfterViewInit,
OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph : ElementRef;

  constructor() { 
    console.log('Constructor called!');
  }
ngOnChanges(changes: SimpleChanges){
  console.log('OnChange called!');
  console.log(changes);

}
  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('TextField: ' + this.header.nativeElement.textContent);
    console.log('Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('Do Check called');
  }
  ngAfterContentInit(){
  console.log('AfterContentInit called');
  console.log('Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(){
    console.log('AfterContentChecked called');
    }
    ngAfterViewInit(){
      console.log('AfterContentInit called');
      console.log('TextField: ' + this.header.nativeElement.textContent);
      }
      ngAfterViewChecked(){
        console.log('AfterContentChecked called');
        }
      
        ngOnDestroy(){
          console.log('OnDestroy Called!');
        }

}
