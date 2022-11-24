const _cat0: Categorie = {id: 0, name: "Categorie 0"},
_cat1: Categorie = {id: 1, name: "Categorie 1"};

export class Categorie {
    id!: number;
    name!: string;
    description?: string;

    static all: Categorie[] = [_cat0, _cat1];

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
