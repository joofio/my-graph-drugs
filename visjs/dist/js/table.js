$(document).ready(function () {
 // $('#example thead tr').clone(true).addClass('filters').appendTo( '#example thead' );

  var table = $('#example').DataTable({
   // lengthMenu: [[20, 50, 100, -1], [20, 50, 100, "All"]],
    pageLength: 5,
    orderCellsTop: true,
    fixedHeader: true,
  //  search: {
    //    return: true //for only processing when key is pressed - usefull for lots of data
   // },
    data: nodes,
    "columns": [
      { data: "productType",
      "defaultContent": "<i>Not Applicable</i>" },
      { data: "doseForm",
      "defaultContent": "<i>Not Applicable</i>",render:function ( data ) {
        return '<a href="'+data+'">'+data+'</a>';} },//links
      { data: "route",
      "defaultContent": "<i>Not Applicable</i>" },
      { data: "label"},
      { data: "Graph",
             "defaultContent": "<button type=\"button\" class=\"btn btn-primary\">See graph</button>" }

    ], 

    initComplete: function () {
      count = 0;
      this.api().columns().every(function () {
        var title = this.header();
        //replace spaces with dashes
        title = $(title).html().replace(/[\W]/g, '-');
        var column = this;
        var select = $('<select id="' + title + '" class="select2" ></select>')
          .appendTo($(column.header(2)))
          .on('change', function () {
            //Get the "text" property from each selected data 
            //regex escape the value and store in array
            var data = $.map($(this).select2('data'), function (value, key) {
              return value.text ? '^' + $.fn.dataTable.util.escapeRegex(value.text) + '$' : null;
            });

            //if no data selected use ""
            if (data.length === 0) {
              data = [""];
            }

            //join array into string with regex or (|)
            var val = data.join('|');

            //search for the option(s) selected
            column
              .search(val ? val : '', true, false)
              .draw();
          });
        console.log(column);
        column.data().unique().sort().each(function (d, j) {

          select.append('<option value="' + d + '">' + d + '</option>');
        });

        //use column title as selector and placeholder
        $('#' + title).select2({
          multiple: true,
          closeOnSelect: false,
          placeholder: "Select " + title
        });

        //initially clear select otherwise first option is selected
        $('.select2').val(null).trigger('change');
      });
    }
  });

});