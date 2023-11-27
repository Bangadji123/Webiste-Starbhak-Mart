$(document).ready(function() {
    let ascending = true;

    $('#sortByName').on('click', function() {
        var items = $('.isi').detach();

        items.sort(function(a, b) {
            var nameA = $(a).find('p').text().toUpperCase();
            var nameB = $(b).find('p').text().toUpperCase();

            return ascending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        });

        ascending = !ascending;

        $('.kanan > section').html(items);
    });
});
