import { Component, OnInit } from "@angular/core";
import { Artwork } from "./artwork";
import {ArtworkService} from "./artwork.service";
//
@Component({
  selector: "my-app",
  styleUrls: ["./app.component.css"],
  template: `<div id="dv1" style="margin-left: -5px;margin-right: -5px;">
      <div class="dv3" *ngFor="let artwork of this.artworks; index as i;">
        <img
                (click)="showImage(i+1)"
          class="img1"
          src="{{ artwork.img }}"
          alt="{{ artwork.title }}"
        />
      </div>
    </div>

    <div id="dv2">
      <h1>{{ im.title }}</h1>
      <img class="leftimg" src="{{ im.img }}" alt="{{ im.title }}" />

      <h3>
        Год создания: <span>{{ im.year }}</span>
      </h3>
      <h3>
        Автор: <span>{{ im.author }}</span>
      </h3>
      <h3>
        Размеры: <span>{{ im.size }}</span>
      </h3>
      <h3>
        Местоположение: <span>{{ im.location }}</span>
      </h3>
      <p>{{ im.plot }}</p>
    </div>`,

  providers: [ArtworkService],
})
// Все используемые сервисы должны быть определены в коллекции providers.
// После этого мы можем задействовать встроенный в Angular механизм dependency injection и получить объект сервиса в конструкторе компонента
export class AppComponent implements OnInit {
    artworks: Array<Artwork>;
    im: Artwork;

  constructor(private dataService: ArtworkService) {
    this.artworks = new Array<Artwork>();
  }

  ngOnInit() {
    this.loadArtworks();
  }

  private loadArtworks() {
    this.dataService.getArtworks().subscribe({
      next: (data: Artwork[]) => {
        this.artworks = data;
        this.im = this.artworks[0];
      }
    });
  }

  showImage(id:number) {
    this.dataService.getArtwork(id).subscribe(
        {
          next: (data: Artwork) => {
              this.im = data;
          }
        }
    );
  }
}
