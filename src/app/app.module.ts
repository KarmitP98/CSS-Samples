import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NeonButtonComponent} from './neon-button/neon-button.component';
import {TransparentButtonComponent} from './transparent-button/transparent-button.component';
import {TranparentFormComponent} from './tranparent-form/tranparent-form.component';
import {HeartbeatComponent} from './heartbeat/heartbeat.component';
import {ToastComponent} from './toast/toast.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StartupPageComponent} from './startup-page/startup-page.component';
import {HexagonHoverComponent} from './hexagon-hover/hexagon-hover.component';
import {NeomorphComponent} from './neomorph/neomorph.component';

import {CustomCompsComponent} from './custom-comps/custom-comps.component';
import {PanelComponent} from './panel/panel.component';
import {SlideComponent} from './slide/slide.component';
import {TempComponent} from './temp/temp.component';

import {GlassMorphismComponent} from './glass-morphism/glass-morphism.component';
import {ComponentsComponent} from './components/components.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {VideoComponent} from './video/video.component';
import {WebcamModule} from 'ngx-webcam';
import {DropdownMenuComponent} from './dropdown-menu/dropdown-menu.component';
import {MatIconModule} from '@angular/material/icon';
import {DragAndDropComponent} from './drag-and-drop/drag-and-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {CardsComponent} from './cards/cards.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    NeonButtonComponent,
    TransparentButtonComponent,
    TranparentFormComponent,
    HeartbeatComponent,
    ToastComponent,
    StartupPageComponent,
    HexagonHoverComponent,
    NeomorphComponent,
    DropdownMenuComponent,
    CustomCompsComponent,
    PanelComponent,
    SlideComponent,
    TempComponent,
    GlassMorphismComponent,
    ComponentsComponent,
    SideMenuComponent,
    VideoComponent,
    DragAndDropComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WebcamModule,
    MatIconModule,
    DragDropModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
