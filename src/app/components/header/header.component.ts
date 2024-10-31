import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen: boolean = false

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
    this.setBodyOverflow()
    
  }

  navClick() {
    this.isMenuOpen = false
    this.setBodyOverflow()
  }

  setBodyOverflow() {
    const body = document.getElementById('body')

    if (this.isMenuOpen)  {
      body.style.overflow = 'hidden'
    }
    if (!this.isMenuOpen) {
      body.style.overflow = 'auto'
    }
  }
}
