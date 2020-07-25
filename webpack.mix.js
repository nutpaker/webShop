const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.options({
    processCssUrls: false
});

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');


/*
    ========================
            Assets Theme Backend
    ========================
*/

mix.sass('resources/sass/backend/assets/structure.scss', 'public/backend/assets/css/')
    .sass('resources/sass/backend/assets/loader.scss', 'public/backend/assets/css/')
    .sass('resources/sass/backend/assets/main.scss', 'public/backend/assets/css/')
    // .sass('resources/sass/backend/assets/scrollspy.scss', 'public/backend/assets/css/')

    // Apps
    .sass('resources/sass/backend/assets/apps/contacts.scss', 'public/backend/assets/css/apps')
    .sass('resources/sass/backend/assets/apps/invoice.scss', 'public/backend/assets/css/apps')
    .sass('resources/sass/backend/assets/apps/mailbox.scss', 'public/backend/assets/css/apps')
    .sass('resources/sass/backend/assets/apps/mailing-chat.scss', 'public/backend/assets/css/apps')
    .sass('resources/sass/backend/assets/apps/notes.scss', 'public/backend/assets/css/apps')
    .sass('resources/sass/backend/assets/apps/scrumboard.scss', 'public/backend/assets/css/apps')
    .sass('resources/sass/backend/assets/apps/todolist.scss', 'public/backend/assets/css/apps')

    // Authentication
    .sass('resources/sass/backend/assets/authentication/form-1.scss', 'public/backend/assets/css/authentication')
    .sass('resources/sass/backend/assets/authentication/form-2.scss', 'public/backend/assets/css/authentication')

    // Components
    .sass('resources/sass/backend/assets/components/custom-carousel.scss', 'public/backend/assets/css/components')
    .sass('resources/sass/backend/assets/components/custom-countdown.scss', 'public/backend/assets/css/components')
    .sass('resources/sass/backend/assets/components/custom-counter.scss', 'public/backend/assets/css/components')
    .sass('resources/sass/backend/assets/components/custom-list-group.scss', 'public/backend/assets/css/components')
    .sass('resources/sass/backend/assets/components/custom-media_object.scss', 'public/backend/assets/css/components')
    .sass('resources/sass/backend/assets/components/custom-modal.scss', 'public/backend/assets/css/components')
    .sass('resources/sass/backend/assets/components/custom-sweetalert.scss', 'public/backend/assets/css/components')
    .sass('resources/sass/backend/assets/components/cards/card.scss', 'public/backend/assets/css/components/cards')
    .sass('resources/sass/backend/assets/components/tabs-accordian/custom-accordions.scss', 'public/backend/assets/css/components/tabs-accordian')
    .sass('resources/sass/backend/assets/components/tabs-accordian/custom-tabs.scss', 'public/backend/assets/css/components/tabs-accordian')
    .sass('resources/sass/backend/assets/components/timeline/custom-timeline.scss', 'public/backend/assets/css/components/timeline')

    // Element
    .sass('resources/sass/backend/assets/elements/alert.scss', 'public/backend/assets/css/elements/')
    .sass('resources/sass/backend/assets/elements/avatar.scss', 'public/backend/assets/css/elements/')
    .sass('resources/sass/backend/assets/elements/breadcrumb.scss', 'public/backend/assets/css/elements/')
    .sass('resources/sass/backend/assets/elements/custom-pagination.scss', 'public/backend/assets/css/elements/')
    .sass('resources/sass/backend/assets/elements/custom-tree_view.scss', 'public/backend/assets/css/elements/')
    .sass('resources/sass/backend/assets/elements/infobox.scss', 'public/backend/assets/css/elements/')
    .sass('resources/sass/backend/assets/elements/miscellaneous.scss', 'public/backend/assets/css/elements/')
    .sass('resources/sass/backend/assets/elements/popover.scss', 'public/backend/assets/css/elements/')
    .sass('resources/sass/backend/assets/elements/search.scss', 'public/backend/assets/css/elements/')
    .sass('resources/sass/backend/assets/elements/tooltip.scss', 'public/backend/assets/css/elements/')

    // Forms
    .sass('resources/sass/backend/assets/forms/bootstrap-form.scss', 'public/backend/assets/css/forms/')
    .sass('resources/sass/backend/assets/forms/custom-clipboard.scss', 'public/backend/assets/css/forms/')
    .sass('resources/sass/backend/assets/forms/switches.scss', 'public/backend/assets/css/forms/')
    .sass('resources/sass/backend/assets/forms/theme-checkbox-radio.scss', 'public/backend/assets/css/forms/')

    // Pages
    .sass('resources/sass/backend/assets/pages/coming-soon/style.scss', 'public/backend/assets/css/pages/coming-soon/')
    .sass('resources/sass/backend/assets/pages/error/style-400.scss', 'public/backend/assets/css/pages/error/')
    .sass('resources/sass/backend/assets/pages/error/style-500.scss', 'public/backend/assets/css/pages/error/')
    .sass('resources/sass/backend/assets/pages/error/style-503.scss', 'public/backend/assets/css/pages/error/')
    .sass('resources/sass/backend/assets/pages/error/style-maintanence.scss', 'public/backend/assets/css/pages/error/')
    .sass('resources/sass/backend/assets/pages/faq/faq.scss', 'public/backend/assets/css/pages/faq/')
    .sass('resources/sass/backend/assets/pages/faq/faq2.scss', 'public/backend/assets/css/pages/faq/')
    .sass('resources/sass/backend/assets/pages/privacy/privacy.scss', 'public/backend/assets/css/pages/privacy/')
    .sass('resources/sass/backend/assets/pages/contact_us.scss', 'public/backend/assets/css/pages/')
    .sass('resources/sass/backend/assets/pages/helpdesk.scss', 'public/backend/assets/css/pages/')

    // Tables
    .sass('resources/sass/backend/assets/tables/table-basic.scss', 'public/backend/assets/css/tables/')

    // Users
    .sass('resources/sass/backend/assets/users/account-setting.scss', 'public/backend/assets/css/users/')
    .sass('resources/sass/backend/assets/users/user-profile.scss', 'public/backend/assets/css/users/')

    // Widgets
    .sass('resources/sass/backend/assets/widgets/modules-widgets.scss', 'public/backend/assets/css/widgets/')

    /*
        ========================
                Plugins
        ========================
    */

    // Animate
    .sass('resources/sass/backend/plugins/animate/animate.scss', 'public/backend/plugins/animate/')

    // Autocomplete
    .sass('resources/sass/backend/plugins/autocomplete/autocomplete.scss', 'public/backend/plugins/autocomplete/')

    // Bootstrap Range Slider
    .sass('resources/sass/backend/plugins/bootstrap-range-Slider/bootstrap-slider.scss', 'public/backend/plugins/bootstrap-range-Slider/')

    // Bootstrap Select
    .sass('resources/sass/backend/plugins/bootstrap-select/bootstrap-select.min.scss', 'public/backend/plugins/bootstrap-select/')

    // Bootstrap Touchspin
    .sass('resources/sass/backend/plugins/bootstrap-touchspin/jquery.bootstrap-touchspin.min.scss', 'public/backend/plugins/bootstrap-touchspin/')

    // Drag and Drop
    .sass('resources/sass/backend/plugins/drag-and-drop/dragula/dragula.scss', 'public/backend/plugins/drag-and-drop/dragula/')
    .sass('resources/sass/backend/plugins/drag-and-drop/dragula/example.scss', 'public/backend/plugins/drag-and-drop/dragula/')

    // Dropify
    .sass('resources/sass/backend/plugins/dropify/dropify.min.scss', 'public/backend/plugins/dropify/')

    // Editors
    .sass('resources/sass/backend/plugins/editors/markdown/simplemde.min.scss', 'public/backend/plugins/editors/markdown/')
    .sass('resources/sass/backend/plugins/editors/quill/quill.bubble.scss', 'public/backend/plugins/editors/quill/')
    .sass('resources/sass/backend/plugins/editors/quill/quill.snow.scss', 'public/backend/plugins/editors/quill/')

    // File Upload
    .sass('resources/sass/backend/plugins/file-upload/file-upload-with-preview.min.scss', 'public/backend/plugins/file-upload/')

    // Flatpickr
    .sass('resources/sass/backend/plugins/flatpickr/custom-flatpickr.scss', 'public/backend/plugins/flatpickr/')

    // Fullcalendar
    .sass('resources/sass/backend/plugins/fullcalendar/custom-fullcalendar.advance.scss', 'public/backend/plugins/fullcalendar/')
    .sass('resources/sass/backend/plugins/fullcalendar/fullcalendar.min.scss', 'public/backend/plugins/fullcalendar/')
    .sass('resources/sass/backend/plugins/fullcalendar/fullcalendar.scss', 'public/backend/plugins/fullcalendar/')

    // Jquery Step
    .sass('resources/sass/backend/plugins/jquery-step/jquery.steps.scss', 'public/backend/plugins/jquery-step/')

    // jVector
    .sass('resources/sass/backend/plugins/jvector/jquery-jvectormap-2.0.3.scss', 'public/backend/plugins/jvector/')

    // lightbox
    .sass('resources/sass/backend/plugins/lightbox/custom-photswipe.scss', 'public/backend/plugins/lightbox/')
    .sass('resources/sass/backend/plugins/lightbox/photoswipe.scss', 'public/backend/plugins/lightbox/')

    // Loaders
    .sass('resources/sass/backend/plugins/loaders/custom-loader.scss', 'public/backend/plugins/loaders/')

    // noUiSlider
    .sass('resources/sass/backend/plugins/noUiSlider/custom-nouiSlider.scss', 'public/backend/plugins/noUiSlider/')

    // Perfect Scrollbar
    .sass('resources/sass/backend/plugins/perfect-scrollbar/perfect-scrollbar.scss', 'public/backend/plugins/perfect-scrollbar/')

    // Pricing Table
    .sass('resources/sass/backend/plugins/pricing-table/css/component.scss', 'public/backend/plugins/pricing-table/')

    // Select2
    .sass('resources/sass/backend/plugins/select2/select2.min.scss', 'public/backend/plugins/select2/')

    // SweetAlerts
    .sass('resources/sass/backend/plugins/sweetalerts/sweetalert.scss', 'public/backend/plugins/sweetalerts/')
    .sass('resources/sass/backend/plugins/sweetalerts/sweetalert2.min.scss', 'public/backend/plugins/sweetalerts/')

    // DataTable
    .sass('resources/sass/backend/plugins/table/datatable/custom_dt_custom.scss', 'public/backend/plugins/table/datatable/')
    .sass('resources/sass/backend/plugins/table/datatable/custom_dt_html5.scss', 'public/backend/plugins/table/datatable/')
    .sass('resources/sass/backend/plugins/table/datatable/custom_dt_miscellaneous.scss', 'public/backend/plugins/table/datatable/')
    .sass('resources/sass/backend/plugins/table/datatable/custom_dt_multiple_tables.scss', 'public/backend/plugins/table/datatable/')
    .sass('resources/sass/backend/plugins/table/datatable/datatables.scss', 'public/backend/plugins/table/datatable/')
    .sass('resources/sass/backend/plugins/table/datatable/datatables-dark.scss', 'public/backend/plugins/table/datatable/')
    .sass('resources/sass/backend/plugins/table/datatable/datatables-light.scss', 'public/backend/plugins/table/datatable/')
    .sass('resources/sass/backend/plugins/table/datatable/dt-global_style.scss', 'public/backend/plugins/table/datatable/')
    .sass('resources/sass/backend/plugins/table/datatable/dt-global_style-dark.scss', 'public/backend/plugins/table/datatable/')
    .sass('resources/sass/backend/plugins/table/datatable/dt-global_style-light.scss', 'public/backend/plugins/table/datatable/')

    // Tag Input
    .sass('resources/sass/backend/plugins/tagInput/tags-input.scss', 'public/backend/plugins/tagInput/')


    /*
    ========================
            Storage
    ========================
    */

    // Storage
    .copy('storage/app/public/', 'public/storage/', false)


    /*
    ========================
            Assets Theme Web
    ========================
    */

    /* Page JS */
    .js('resources/js/pages/tables_datatables.js', 'public/js/pages/tables_datatables.js')
    .copy('resources/plugins/', 'public/plugins/', false)
    .copy('resources/mp3/', 'public/mp3/', false)
    .copy('resources/php/', 'public/php/', false)
    .copy('node_modules/ionicons/fonts/*','public/fonts')
    .copy('node_modules/summernote/dist/font/*','public/fonts')
    .copy('node_modules/photoswipe/dist/default-skin/*','public/css')

    /* Tools */
    .browserSync('localhost:8000')
    .disableNotifications()
