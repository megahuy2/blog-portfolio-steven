
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Fix: Corrected import path for HeaderComponent.
import { HeaderComponent } from './components/header/header.component';
// Fix: Corrected import path for FooterComponent.
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  // Fix: Corrected templateUrl to match component filename.
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class AppComponent {}