//API KEY "AIzaSyBP-ogegw9GoUTDzBimXoDGK95GQ0vtup4"
var apiurl = 'https://www.googleapis.com/youtube/v3/search'


$('#search-form').submit(function(event) {
		console.log('submit');
		event.preventDefault();
		var query = $('#query-text').val();
		retrieveFromAPI(query, displaySearchResults);
		//displaysearchresuls is callback
});



function retrieveFromAPI(searchTerm, callback) {
	console.log(searchTerm);
	var query = {
		q: searchTerm,
		r: 'json',
		part: 'snippet',
		key: 'AIzaSyBP-ogegw9GoUTDzBimXoDGK95GQ0vtup4'
	}
	$.getJSON(apiurl, query, callback)
}


function displaySearchResults(data) {
	console.log(data);
	var searchResults = '';
	if (data.items.length > 0) {
    data.items.forEach(function(item) {
    searchResults += '<p>' + item.snippet.title + '</p>';
    });
  }
  else {
    searchResults += '<p>No results</p>';
  }
  console.log(searchResults);
  $('#search-results').empty().append(searchResults);
}

