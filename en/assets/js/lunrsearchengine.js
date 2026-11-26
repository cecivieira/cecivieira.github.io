
var documents = [{
    "id": 0,
    "url": "http://www.cecivieira.com.br//en/404.html",
    "title": "404",
    "body": "404 Eita. . . Não achei. . . Dá uma olhadinha na nossa página inicial ou usa a janela de busca! "
    }, {
    "id": 1,
    "url": "http://www.cecivieira.com.br//en/about/",
    "title": "",
    "body": "About me:       I’m glad you’re here. Welcome!     This blog documents what I’ve learned throughout the journey of a librarian who moved into Data Science. As I discover some techniques, experiment with others, and connect them with experiences in social movements, I organize my thoughts and share a few things that might be useful to others.     This path is built collectively, alongside other women, within tech communities, especially those grounded in “diversity and inclusion” and guided by open-source and hacker culture.     I really enjoy giving talks and usually work with topics such as “technology as a tool for promoting social justice”, “self-managed communities”, “women’s inclusion in tech”, “public transparency”, and “open data”, which allows me to speak in different spaces and meet incredible people. I’m also part of the data (Python) instructors team at the School of Data and LinkedIn Learning. Together with two friends, we produce the first and most beloved podcast in Portuguese about Data Science, Pizza de Datos.     Sharing what I learn is the way I found to contribute to other people’s professional development and give back to the communities that give me so much. I also have the great privilege of working with what truly makes me happy: managing the UFPE Open Data Portal and serving as Technical Lead for the data team at the Secretaria Nacional das Periferias (Ministério das Cidades).     Feel free to stay and look around. If you’d like to get in touch, you can find my contact information here.               "
    }, {
    "id": 2,
    "url": "http://www.cecivieira.com.br//en/categories/",
    "title": "",
    "body": ""
    }, {
    "id": 3,
    "url": "http://www.cecivieira.com.br//en/contact/",
    "title": "",
    "body": "Contact: Do you want to talk to me? Here are my contacts:   E-mail  LinkedIn  Lattes  GitHubMessage me. It will be great to talk to you. "
    }, {
    "id": 4,
    "url": "http://www.cecivieira.com.br//en/",
    "title": "",
    "body": "      Posts:             "
    }, {
    "id": 5,
    "url": "http://www.cecivieira.com.br//en/activities/",
    "title": "",
    "body": ""
    }, {
    "id": 6,
    "url": "http://www.cecivieira.com.br//en/subjects/",
    "title": "",
    "body": ""
    }, {
    "id": 7,
    "url": "http://www.cecivieira.com.br//en/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, ];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});