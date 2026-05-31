import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth';

@Component({
  selector: 'app-juegos',
  imports: [RouterLink],
  templateUrl: './juegos.html',
  styleUrl: './juegos.css',
})
export class JuegosComponent implements OnInit {
  authService = inject(AuthService)

  ngOnInit(): void {
    
  }
}
