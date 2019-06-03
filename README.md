10 Angular - Les Services
En programmation orientée objet, les mocks (simulacres ou mock object) sont des objets simulés qui reproduisent le comportement d'objets réels de manière contrôlée.

 Objectifs
Découvrir les services et leur utilité
Créer un service
Se faire injecter et utiliser un service
 Étapes
C'est l'histoire d'un service client qui entre dans un bar ...
Explications complémentaires
 Challenge
Créer un service "CocktailService"
Créer un service "CocktailService" permettant de retourner un certain nombre d'objets de type Cocktail. Un objet de type "Cocktail" doit posséder les caractéristiques suivantes:

Un champ nom
Un champ price
Un champ img ( contenant l'url de la photo du cocktail )
Le service contient une méthode getCocktails retournant l'ensemble des cocktails La liste des cocktails s'affiche dans un composant nommé CocktailListComponent.

Crée un fichier nommé test.spec.ts et place-le dans le dossier app/ et colle à l'intérieur le code suivant:

import { TestBed, async } from '@angular/core/testing';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import {CocktailService} from './cocktail.service';

describe('Quest Test Suite', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CocktailListComponent
      ],
    }).compileComponents();
  }));

  fit('service should be created', () => {
    const service: CocktailService = TestBed.get(CocktailService);
    expect(service).toBeTruthy();
  });

  fit('service should have a "getCocktails" method which returns at least one object', () => {
    const service: CocktailService = TestBed.get(CocktailService);
    const tab = service.getCocktails();
    expect(tab.length).toBeGreaterThan(0);
  });

  fit('should create a CocktailListComponent instance', async(() => {
    const fixture = TestBed.createComponent(CocktailListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  fit(
    'component should have a public property named "cocktails"',
    async(
      () => {
        const fixture = TestBed.createComponent(CocktailListComponent);
        fixture.detectChanges();
        expect(fixture.componentInstance.cocktails).toBeTruthy();
      }
    )
  );

  fit(
    'component should display at least one cocktail',
    async(
      () => {
        const fixture = TestBed.createComponent(CocktailListComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        const content = compiled.textContent;
        const first = fixture.componentInstance.cocktails[0];
        expect(content).toContain(first.name);
      }
    )
  );
});


Critères de validation
Le service contient une méthode getCocktails retournant l'ensemble des cocktails.
Le composant doit posséder une propriété publique nommée cocktails.
Le service CocktailService est injecté au sein du composant.
Le composant utilise la méthode getCocktails du service et récupère les cocktails.
L'ensemble des cocktails est affiché via la directive ngFor au sein du template associé au composant.
Le code de ton composant doit se trouver dans le dossier app/cocktail-list/
Le code de ton service doit se trouver dans le dossier app/
Le code doit passer les tests unitaires, pour ce faire, utilise la commande ng test
