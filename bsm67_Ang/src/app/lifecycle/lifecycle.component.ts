import { Input, Component, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, OnInit} from '@angular/core';


@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() bindable: number =0;
  constructor() { 
    this.log('constructor called!');
  }

  ngOnInit(): void {
    this.log('ngOnInit called!');
    
  }

  ngOnChanges(): void{
    this.log('ngOnChanges called!');
  }

  ngDoCheck() {
    this.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy called!');
  }
  private log(hook: string) {
    console.log(hook);
  }

}
