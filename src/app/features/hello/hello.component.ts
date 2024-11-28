import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CanComponentDeactivate } from '../../guards/can-deactivate.guard';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div>
      <h2>{{ greeting }}</h2>
      <form>
        <div>
          <label for="message">Message:</label>
          <input 
            id="message" 
            [(ngModel)]="message" 
            name="message" 
            (ngModelChange)="onChange()"
          >
        </div>
      </form>
      <p>This is a standalone component with unsaved changes protection.</p>
    </div>
  `
})
export class HelloComponent implements CanComponentDeactivate {
  greeting = 'Hello from the new component!';
  message = '';
  hasUnsavedChanges = false;

  onChange() {
    this.hasUnsavedChanges = true;
  }

  canDeactivate(): boolean {
    if (this.hasUnsavedChanges) {
      return window.confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }
}