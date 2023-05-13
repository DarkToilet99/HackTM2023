import { Component } from '@angular/core';
import { Recipe } from '../recipe.interface';

@Component({
  selector: 'recipes-table',
  templateUrl: './recipes-table.component.html',
  styleUrls: ['./recipes-table.component.scss']
})

export class RecipesTableComponent {
  public recipes: Recipe[] = [
    {
      id: '1',
      name: 'Pilaf cu pui',
      ingredients: [{name: 'orez', checked: false}, {name: 'piept de pui', checked: true}, {name: 'ceapa', checked: false}, {name: 'morcov', checked: false}, {name: 'ulei de masline', checked: true}, {name: 'sare', checked: false}, {name: 'piper', checked: false}],
      description: 'Se pune pe foc o oala cu apa si putina sare. Cand clocoteste apa se pune orezul si se lasa sa fiarba la foc mic. In timp ce fierbe pieptul de pui se taie bucatele se condimenteaza si se prajeste in 3-4 linguri de ulei de masline. Cand a scazut apa si incepe sa se rumeneasca se pune ceapa taiata rondele si daca doriți si morcovul taiat rondele. Se mai lasa cateva minute sa se caleasca ceapa si carnea sa fie rumenita si se adauga orezul ( scurs si strecurat). Se amesteca bine si se mai lasa 2-3 minute pe foc. Se serveste cald cu salata de varza sau muraturi.',
      store: 'Kaufland'
  },
    {
      id: '1',
      name: 'Pizza de casa',
      ingredients: [{name: 'orez', checked: false}, {name: 'piept de pui', checked: true}, {name: 'ceapa', checked: false}, {name: 'morcov', checked: false}, {name: 'ulei de masline', checked: true}, {name: 'sare', checked: false}, {name: 'piper', checked: false}],
      description: 'Se pune pe foc o oala cu apa si putina sare. Cand clocoteste apa se pune orezul si se lasa sa fiarba la foc mic. In timp ce fierbe pieptul de pui se taie bucatele se condimenteaza si se prajeste in 3-4 linguri de ulei de masline. Cand a scazut apa si incepe sa se rumeneasca se pune ceapa taiata rondele si daca doriți si morcovul taiat rondele. Se mai lasa cateva minute sa se caleasca ceapa si carnea sa fie rumenita si se adauga orezul ( scurs si strecurat). Se amesteca bine si se mai lasa 2-3 minute pe foc. Se serveste cald cu salata de varza sau muraturi.',
      store: 'Kaufland'
  },
    {
      id: '1',
      name: 'Pui cu orez',
      ingredients: [{name: 'orez', checked: false}, {name: 'piept de pui', checked: true}, {name: 'ceapa', checked: false}, {name: 'morcov', checked: false}, {name: 'ulei de masline', checked: true}, {name: 'sare', checked: false}, {name: 'piper', checked: false}],
      description: 'Se pune pe foc o oala cu apa si putina sare. Cand clocoteste apa se pune orezul si se lasa sa fiarba la foc mic. In timp ce fierbe pieptul de pui se taie bucatele se condimenteaza si se prajeste in 3-4 linguri de ulei de masline. Cand a scazut apa si incepe sa se rumeneasca se pune ceapa taiata rondele si daca doriți si morcovul taiat rondele. Se mai lasa cateva minute sa se caleasca ceapa si carnea sa fie rumenita si se adauga orezul ( scurs si strecurat). Se amesteca bine si se mai lasa 2-3 minute pe foc. Se serveste cald cu salata de varza sau muraturi.',
      store: 'Kaufland'
  }
];
}
