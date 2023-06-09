import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
    ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroService.getHeroes().subscribe((heroes) => (this.heroes) = heroes);
    this.heroService.getHeroes().subscribe(
      (value) => {
        this.heroes = value;
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("finalizado com sucesso!");
      }
    );
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.setMessage(`HeroesComponent: Selected Hero, id=${hero.id}`)
  }

}
