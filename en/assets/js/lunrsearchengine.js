
var documents = [{
    "id": 0,
    "url": "http://www.cecivieira.com//en/404.html",
    "title": "404",
    "body": "404 Eita. . . Não achei. . . Dá uma olhadinha na nossa página inicial ou usa a janela de busca! "
    }, {
    "id": 1,
    "url": "http://www.cecivieira.com//en/about/",
    "title": "",
    "body": "About me:       I am a librarian who loves to work with data and information, but a few years ago I wanted to expand my      action beyond a traditional library. This is how I started my forays into technology, looking for a new      professional passion.         This path has been built collectively, through technology communities, especially those whose axes are       diversity and inclusion , in addition to being guided by the  open source  and  hacker  culture.         Learning software development in this welcoming and collaborative environment makes the trip more pleasant,      while allowing me to contribute to projects with a social impact, such as  Querido Diário  (Open Knowledge      Brazil), where I was a data analyst, and with the event organization, such as the  Python Brasil  conference      and the  Women in Data Science Valencia (ES) .         Being a speaker is one of my greatest satisfactions as a content creator. Being able to share there,      instantly, about a technical topic that I'm passionate about and making exchanges on the subject is      something, in fact, very rewarding. I find the same satisfaction being on the instructor teams at the School      of Data and LinkedIn Learning, where      I facilitate classes on courses, mainly about Python tools.         Sharing my learning is how I contribute to the professional training of others and return to the communities      what I receive. This blog was born with that purpose, to record what I have learned along the way and to      provide free information that may be useful to someone else.         Currently, I am on the team of the Pizza de Dados podcast, the first      and most beloved Brazilian podcast about data science. A project that aims to contribute to technological      and data literacy in Portuguese, and of which I am very proud to be a part.         On data transparency field, I'm an ambassador of the  Data Science for Citizen Innovation  project      of Open Knowledge Brazil and manager of the Open Data Portal of UFPE.         My professional performance in these collaborative spaces carries with it the feminist and anti-racist      activism that are the cornerstones of my civic education. And so, I contribute my grain of sand while      changing my world.                         Ana Cecília Vieira                  "
    }, {
    "id": 2,
    "url": "http://www.cecivieira.com//en/categories/",
    "title": "",
    "body": ""
    }, {
    "id": 3,
    "url": "http://www.cecivieira.com//en/contact/",
    "title": "",
    "body": "Contact: Hi, You could contact me by email cecivieira@gmail. com. "
    }, {
    "id": 4,
    "url": "http://www.cecivieira.com//en/",
    "title": "",
    "body": "      Posts:             "
    }, {
    "id": 5,
    "url": "http://www.cecivieira.com//en/activities/",
    "title": "",
    "body": ""
    }, {
    "id": 6,
    "url": "http://www.cecivieira.com//en/subjects/",
    "title": "",
    "body": ""
    }, {
    "id": 7,
    "url": "http://www.cecivieira.com//en/robots.txt",
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