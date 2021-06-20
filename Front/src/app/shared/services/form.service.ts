import { Injectable } from '@angular/core';
import { NbToastRef, NbToastrService } from '@nebular/theme';

@Injectable({ providedIn: 'root' })
export class FormService {
  toastRef: NbToastRef;

  constructor(private readonly toastrService: NbToastrService) {}

  saveEvent(message: string): boolean {
    this.showToast('top-right', 'success', message);
    return false;
  }

  private showToast(position, status, message: string): void {
    this.toastRef = this.toastrService.show(message, 'Enregistré !', {
      position,
      status,
    });
  }
}
