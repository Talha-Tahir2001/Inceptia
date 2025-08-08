import { Component, computed, inject, signal, Signal } from '@angular/core';
import { ThemeService } from '../../services/theme-service';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ToggleButtonModule, RouterLink],
  templateUrl: './header.html',
  styles: ``,
})
export class Header {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update((open) => !open);
  }
  themeService = inject(ThemeService);
  isDark: Signal<boolean> = computed(
    () => this.themeService.theme() === 'dark'
  );
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
