export default class SearchFilter extends EventTarget {
    constructor(searchString){
        super();
        this.searchString = searchString;
    }

    doesFilmMatch(films){
        return title.includes(this.searchString) || desc.includes(this.searchString);
    }

    render(){
        const searchBar = document.createElement('div');

        const searchBarLabel = document.createElement('h3');
        searchBarLabel.textContent = "Sök film";
        searchBar.append(searchBarLabel);

        const searchBarInput = document.createElement('input');
        input.addEventListener('keyup', () => {
            this.searchString = input.value;
            this.dispatchEvent(new Event('change'));
        });

        searchBar.append(searchBarInput);
    }
}
