import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { TabComponent } from "../tab/tab.component";

@Component({
  selector: "cws-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"]
})
export class TabsComponent implements OnInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  dynamicTabs: TabComponent[] = [];

  @ViewChild("dynamicTab", { read: ViewContainerRef })
  dynamicTabPlaceholder;

  @Input() hasFeaturedButton: boolean = false;
  @Input() featuredButtonText: string;
  @Output() onFeaturedButtonClick = new EventEmitter();

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {}

  ngAfterContentInit(): void {}

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => (tab.active = false));
    this.dynamicTabs.forEach(tab => (tab.active = false));

    // activate the tab the user has clicked on.
    tab.active = true;
  }

  featuredButtonClick() {
    this.onFeaturedButtonClick.emit();
  }
}
