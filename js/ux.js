$(document).ready( function () {
    $('.ui.progress').progress();
    $('.ui.dropdown').dropdown();
    $('.ui.checkbox').checkbox();
    $('.ui.accordion').accordion();
    $('.menu .item').tab();

    $('.a-signup').click(function(){
        $('.ui.modal#signup').modal({centered: false}).modal('show');
    });
    $('.a-login').click(function(){
        $('.ui.modal#login').modal({centered: false}).modal('show');
    });
    $('.a-add-payment, .a-add-payment-s').click(function(){
        $('.ui.modal#add-payment').modal({centered: false}).modal('show');
    });
    $('.a-add-building').click(function(){
        $('.ui.modal#add-building').modal({centered: false}).modal('show');
    });
    $('.a-add-expense').click(function(){
        $('.ui.modal#add-expense').modal({centered: false}).modal('show');
    });
    $('.a-add-tenant').click(function(){
        $('.ui.modal#add-tenant').modal({centered: false}).modal('show');
    });
    $('.a-add-account').click(function(){
        $('.ui.modal#add-account').modal({centered: false}).modal('show');
    });
    $('.a-add-document').click(function(){
        $('.ui.modal#add-document').modal({centered: false}).modal('show');
    });
    $('.a-add-user').click(function(){
        $('.ui.modal#add-user').modal({centered: false}).modal('show');
    });
    $('.a-vacate-tenant').click(function(){
        $('.ui.modal#vacate-tenant').modal({centered: false}).modal('show');
    });

    $('.ui-datatable').DataTable({
        paging: true,
        autoWidth: true,
        searching: true,
        ordering: true,
        responsive: true,
        buttons: [
            'colvis',
            'excel',
            'print'
        ]
    });

    // Mobile Utilities
    $('.l-utility-header').click(function () {
        console.log('clicked');
        $('.l-utility-body').toggle();
    })
} );