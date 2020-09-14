class TagHTML {
    constructor(element, searchResultType) {
        this.p_tag = element;
        this.tagName = searchResultType;
    }


    // obter função para definir a tag
    getFunctionToSetTag() {
        let acceptedTypes = {
            music: function(element) {
                element.addClass("tags tags-musicas");
                element.text("Música");
            },
            movies: function(element) {
                element.addClass("tags tags-filmes");
                element.text("Filme");
            },
            shows: function(element) {
                element.addClass("tags tags-series");
                element.text("Série");
            },
            books: function(element) {
                element.addClass("tags tags-livros");
                element.text("Livro");
            },
            authors: function(element) {
                element.addClass("tags tags-autores");
                element.text("Autor");
            },
            games: function(element) {
                element.addClass("tags tags-jogos");
                element.text("Jogo");
            },
            podcasts: function(element) {
                element.addClass("tags tags-podcasts");
                element.text("Podcast");
            }
        };

        return acceptedTypes[this.tagName];
    }


    // definir elemento HTML da tag
    setTag(applyTag) {
        applyTag(this.p_tag);
    }
}