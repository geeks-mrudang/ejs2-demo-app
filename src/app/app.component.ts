import { Component, OnInit } from '@angular/core';
import { orderDetails } from '../data';
import { EditService, ToolbarService, PageService, InfiniteScrollService, InfiniteScrollSettingsModel, PageSettingsModel, FilterSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { DataManager, JsonAdaptor, ODataAdaptor, Query, UrlAdaptor } from '@syncfusion/ej2-data';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
import { ConfigService } from './config/config.service'

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    providers: [ToolbarService, EditService, PageService, InfiniteScrollService]
})

export class AppComponent {
    public data: DataManager;
    public editSettings!: Object;
    public toolbar!: string[];
    public orderidrules!: Object;
    public customeridrules!: Object;
    public freightrules!: Object;
    public pageSettings!: Object;
    public editparams!: Object;
    public options: PageSettingsModel;
    public infiniteOptions: InfiniteScrollSettingsModel
    public filterOptions: FilterSettingsModel;
    public toolbarOptions: ToolbarItems[];
    
    constructor(
        private configService: ConfigService
    ){}

    public ngOnInit(): void {
        // this.getAPIData()
        // this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        // this.toolbar = ['Add', 'Edit', 'Delete'];
        // this.editparams = { params: { popupHeight: '300px' } };
        // this.options = { pageSize: 50 };
        // this.infiniteOptions = { initialBlocks: 5 };
        this.toolbarOptions = ['ColumnChooser'];
        
        this.data = new DataManager({
            url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders',
            adaptor: new ODataAdaptor(),
            crossDomain: true
        });
        this.filterOptions = {
           type: 'Excel'
        };

    }

    // getAPIData() {
    //     this.configService.getData().subscribe((response: any) => {
    //         console.log(response)
    //         this.data = response.entries;
    //     })
    // }


    public menuItems: MenuItemModel[] = [
        {
            text: 'Cut'
        },
        {
            text: 'Copy'
        },
        {
            text: 'Paste'
        }
    ];

}
