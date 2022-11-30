const _cat0: Categorie = {id: 0, name: "Poissons", icon: "fish"},
_cat1: Categorie = {id: 1, name: "Coquillages", icon: "sparkles"},
_cat2: Categorie = {id: 1, name: "Crustacés", icon: "bonfire"};



export class Categorie {
    id!: number;
    name!: string;
    icon!: string;
    description?: string;

    static all: Categorie[] = [_cat0, _cat1, _cat2];

    static fromId(id: number): Categorie {
        let cat!: Categorie;
        switch (id) {
            case 0:
                cat = _cat0;
                break;
            case 1:
                cat = _cat1;
                break;
        }
        return cat;
    }
}
