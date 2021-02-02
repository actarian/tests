import { CoreModule, Module } from 'rxcomp';
import { AppComponent } from './app.component';
import { ItemComponent } from './item.component';

export class AppModule extends Module { }

AppModule.meta = {
    imports: [
        CoreModule
    ],
    declarations: [
        ItemComponent,
    ],
    bootstrap: AppComponent,
};
