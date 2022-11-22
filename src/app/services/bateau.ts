import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Bateau } from "../models/bateau";

export class BateauService {
    bateauList!: Bateau[];

    constructor(private http: HttpClient) {
        this._loadBoats();
    }

    _loadBoats() : Observable<Object> {
        let prom = this.http.get('./assets/data/bateaux.json');
        prom.subscribe({
            next: list => this.bateauList = list as Bateau[],
            error: err => console.log(err),
        });
        return prom;
    }

    getBateaux() : Bateau[] {
        return this.bateauList;
    }

    getBateauxAsync(): Observable<object> {
        return this._loadBoats();
    }
}