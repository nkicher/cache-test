import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PwaInstallService {
  private deferredPrompt: any;

  constructor() {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevents the default mini-infobar or install banner from appearing
      e.preventDefault();
      // Stashes the event for later use
      this.deferredPrompt = e;
    });
  }

  get canPrompt(): boolean {
    return !!this.deferredPrompt;
  }

  promptInstall(): void {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      // Reset the deferred prompt after the user makes a choice
      this.deferredPrompt.userChoice.then((choiceResult: any) => {
        console.log(choiceResult.outcome); // 'accepted' or 'dismissed'
        this.deferredPrompt = null;
      });
    }
  }
}