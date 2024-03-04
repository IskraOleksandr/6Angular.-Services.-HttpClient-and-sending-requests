import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Artwork } from './artwork';

@Injectable()
export class ArtworkService {
    constructor(private http: HttpClient) { }

    getArtworks() {
        return this.http.get('https://localhost:7028/api/ArtWorks');
    }

    getArtwork(id: number) {
        return this.http.get('https://localhost:7028/api/ArtWorks/' + id);
    }

}