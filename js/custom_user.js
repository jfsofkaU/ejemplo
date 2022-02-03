require(['jquery', 'jqueryui'], function ($, jqui) {
    var jq = jQuery.noConflict();
    jq('table.collapsable tbody').hide();
    jq('table.collapsable thead th').click(function (e) {
        var clase = jq(this).attr('class');
        if (clase == 'act') {
            jq(this).removeClass('act');
            jq(this).parent().parent().parent().find('tbody').hide('blind');
        } else {
            jq(this).addClass('act');
            jq(this).parent().parent().parent().find('tbody').show('blind');
        }
    });
    jq(document).ready(function () {
        jq('a.modal_meto').click(function (e) {
            e.preventDefault;
            jq('.modal').empty();
            var contenido = jq('table.table_meto').clone();
            open_modal(contenido);
            return false;
        });
        jq('a.modal_eval').click(function (e) {
            e.preventDefault;
            jq('.modal').empty();
            var contenido = jq('table.table_eval').clone();
            open_modal(contenido);
            return false;
        });
        jq('a.modal_obje').click(function (e) {
            e.preventDefault;
            jq('.modal').empty();
            var contenido = jq('table.table_obje').clone();
            open_modal(contenido);
            return false;
        });
        jq('a.modal_cron').click(function (e) {
            e.preventDefault;
            jq('.modal').empty();
            var contenido = jq('table.table_cron').clone();
            open_modal(contenido);
            return false;
        });
    });

    function open_modal(contenido) {           
        jq('.modal').html(contenido);
        jq('.modal').dialog({
            closeText: 'X',   
            draggable: false,
            modal: false,
            resizable: false
        });
    }
});
var modal_el = document.createElement('div');
modal_el.className = 'modal';
document.getElementsByTagName("head")[0].appendChild(modal_el);


var contenidofoo = '<div class="copy">' +
    '   <p>Universidad de los Andes | Vigilada MineducaciÃ³n</p>' +
    '   <p>Reconocimiento como Universidad: Decreto 1297 del 30 de mayo de 1964.</p>' +
    '   <p>Reconocimiento personerÃ­a jurÃ­dica: ResoluciÃ³n 28 del 23 de febrero de 1949 Minjusticia.</p>' +
    '   <p>Cra 1 NÂº 18A- 12 BogotÃ¡, (Colombia) | CÃ³digo postal: 111711 | Tels: +571 3394949 - +571 3394999</p>' +
    '   <p>PolÃ­tica Institucional de Seguridad de la InformaciÃ³n</p>' +
    '</div>'
var newItem = document.createElement("div");
newItem.innerHTML = contenidofoo;
newItem.id = "custom_footer_cate_8";
var io = document.getElementsByClassName("category-8")[0];

var list = document.getElementById("page-footer");
io.insertBefore(newItem, list);