import {Component, Input, ElementRef} from '@angular/core';

@Component({
    selector: 'custom-select',
    styles: [`
        .select-zippy {
            width: 150px; 
            height: auto;
            border: 1px solid #ccc;
            border-radius: 2px;
        }
        
        .select-zippy .select-title {
            background: #f6f6f6;
            padding: 5px;
            font-weight: bold;
        }
        
        .select-zippy .select-title:hover{
            background: #f0f0f0;
            cursor: pointer;
        }
       chev {
               margin: 4px 0px;
        }
        .select-zippy .select-content {
            padding: 5px;
        }
        .item {
            list-style-type: none;
            cursor: pointer;
        }
        .list {
            
            max-height: 70px;
            height: auto;
            overflow: auto;
        }
    `],
    template: `
    <div class="select-zippy">
        <div 
            class="select-title"
            (click)="toggle()">
            {{title}}
            <i
                class="pull-right glyphicon chev"
                [ngClass]="
                    {
                        'glyphicon-chevron-down': !isExpanded,
                        'glyphicon-chevron-up': isExpanded
                    }
                ">
            </i>
         </div>
         <div *ngIf="isExpanded" class="select-content">
            <ul class="list" >
                <li class="item"  *ngFor="let item of list" (click)="item($event)"  >
                    {{ item }}
                </li>
            </ul>
         </div>
    </div>
            {{print}}
    `
    
})

export class SelectComponent {
    isExpanded = false;
    print:string = "hoho";
    list:string[] = ["Bulgarian","Danish", "English", "Italian", "Spanish"];
    @Input() title:string;  
    
    constructor(private elementRef: ElementRef) {
         this.print = elementRef.nativeElement;
         console.log(elementRef);
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
    item(event) {  
         console.log(event);
    }
}