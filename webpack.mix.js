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
 |--------------------------------------------------------------------------
 | Assets Theme Backend
 |--------------------------------------------------------------------------
 */

mix.sass('resources/sass/theme/assets/structure.scss', 'public/theme/assets/css/')
    .sass('resources/sass/theme/assets/loader.scss', 'public/theme/assets/css/')
    .sass('resources/sass/theme/assets/main.scss', 'public/theme/assets/css/')
    // .sass('resources/sass/theme/assets/scrollspy.scss', 'public/theme/assets/css/')

    // Apps
    .sass('resources/sass/theme/assets/apps/contacts.scss', 'public/theme/assets/css/apps')
    .sass('resources/sass/theme/assets/apps/invoice.scss', 'public/theme/assets/css/apps')
    .sass('resources/sass/theme/assets/apps/mailbox.scss', 'public/theme/assets/css/apps')
    .sass('resources/sass/theme/assets/apps/mailing-chat.scss', 'public/theme/assets/css/apps')
    .sass('resources/sass/theme/assets/apps/notes.scss', 'public/theme/assets/css/apps')
    .sass('resources/sass/theme/assets/apps/scrumboard.scss', 'public/theme/assets/css/apps')
    .sass('resources/sass/theme/assets/apps/todolist.scss', 'public/theme/assets/css/apps')

    // Authentication
    .sass('resources/sass/theme/assets/authentication/form-1.scss', 'public/theme/assets/css/authentication')
    .sass('resources/sass/theme/assets/authentication/form-2.scss', 'public/theme/assets/css/authentication')

    // Components
    .sass('resources/sass/theme/assets/components/custom-carousel.scss', 'public/theme/assets/css/components')
    .sass('resources/sass/theme/assets/components/custom-countdown.scss', 'public/theme/assets/css/components')
    .sass('resources/sass/theme/assets/components/custom-counter.scss', 'public/theme/assets/css/components')
    .sass('resources/sass/theme/assets/components/custom-list-group.scss', 'public/theme/assets/css/components')
    .sass('resources/sass/theme/assets/components/custom-media_object.scss', 'public/theme/assets/css/components')
    .sass('resources/sass/theme/assets/components/custom-modal.scss', 'public/theme/assets/css/components')
    .sass('resources/sass/theme/assets/components/custom-sweetalert.scss', 'public/theme/assets/css/components')
    .sass('resources/sass/theme/assets/components/cards/card.scss', 'public/theme/assets/css/components/cards')
    .sass('resources/sass/theme/assets/components/tabs-accordian/custom-accordions.scss', 'public/theme/assets/css/components/tabs-accordian')
    .sass('resources/sass/theme/assets/components/tabs-accordian/custom-tabs.scss', 'public/theme/assets/css/components/tabs-accordian')
    .sass('resources/sass/theme/assets/components/timeline/custom-timeline.scss', 'public/theme/assets/css/components/timeline')

    // Element
    .sass('resources/sass/theme/assets/elements/alert.scss', 'public/theme/assets/css/elements/')
    .sass('resources/sass/theme/assets/elements/avatar.scss', 'public/theme/assets/css/elements/')
    .sass('resources/sass/theme/assets/elements/breadcrumb.scss', 'public/theme/assets/css/elements/')
    .sass('resources/sass/theme/assets/elements/custom-pagination.scss', 'public/theme/assets/css/elements/')
    .sass('resources/sass/theme/assets/elements/custom-tree_view.scss', 'public/theme/assets/css/elements/')
    .sass('resources/sass/theme/assets/elements/infobox.scss', 'public/theme/assets/css/elements/')
    .sass('resources/sass/theme/assets/elements/miscellaneous.scss', 'public/theme/assets/css/elements/')
    .sass('resources/sass/theme/assets/elements/popover.scss', 'public/theme/assets/css/elements/')
    .sass('resources/sass/theme/assets/elements/search.scss', 'public/theme/assets/css/elements/')
    .sass('resources/sass/theme/assets/elements/tooltip.scss', 'public/theme/assets/css/elements/')

    // Forms
    .sass('resources/sass/theme/assets/forms/bootstrap-form.scss', 'public/theme/assets/css/forms/')
    .sass('resources/sass/theme/assets/forms/custom-clipboard.scss', 'public/theme/assets/css/forms/')
    .sass('resources/sass/theme/assets/forms/switches.scss', 'public/theme/assets/css/forms/')
    .sass('resources/sass/theme/assets/forms/theme-checkbox-radio.scss', 'public/theme/assets/css/forms/')

    // Pages
    .sass('resources/sass/theme/assets/pages/coming-soon/style.scss', 'public/theme/assets/css/pages/coming-soon/')
    .sass('resources/sass/theme/assets/pages/error/style-400.scss', 'public/theme/assets/css/pages/error/')
    .sass('resources/sass/theme/assets/pages/error/style-500.scss', 'public/theme/assets/css/pages/error/')
    .sass('resources/sass/theme/assets/pages/error/style-503.scss', 'public/theme/assets/css/pages/error/')
    .sass('resources/sass/theme/assets/pages/error/style-maintanence.scss', 'public/theme/assets/css/pages/error/')
    .sass('resources/sass/theme/assets/pages/faq/faq.scss', 'public/theme/assets/css/pages/faq/')
    .sass('resources/sass/theme/assets/pages/faq/faq2.scss', 'public/theme/assets/css/pages/faq/')
    .sass('resources/sass/theme/assets/pages/privacy/privacy.scss', 'public/theme/assets/css/pages/privacy/')
    .sass('resources/sass/theme/assets/pages/contact_us.scss', 'public/theme/assets/css/pages/')
    .sass('resources/sass/theme/assets/pages/helpdesk.scss', 'public/theme/assets/css/pages/')

    // Tables
    .sass('resources/sass/theme/assets/tables/table-basic.scss', 'public/theme/assets/css/tables/')

    // Users
    .sass('resources/sass/theme/assets/users/account-setting.scss', 'public/theme/assets/css/users/')
    .sass('resources/sass/theme/assets/users/user-profile.scss', 'public/theme/assets/css/users/')

    // Widgets
    .sass('resources/sass/theme/assets/widgets/modules-widgets.scss', 'public/theme/assets/css/widgets/')

    /*
        ========================
                Plugins
        ========================
    */

    // Animate
    .sass('resources/sass/theme/plugins/animate/animate.scss', 'public/theme/plugins/animate/')

    // Autocomplete
    .sass('resources/sass/theme/plugins/autocomplete/autocomplete.scss', 'public/theme/plugins/autocomplete/')

    // Bootstrap Range Slider
    .sass('resources/sass/theme/plugins/bootstrap-range-Slider/bootstrap-slider.scss', 'public/theme/plugins/bootstrap-range-Slider/')

    // Bootstrap Select
    .sass('resources/sass/theme/plugins/bootstrap-select/bootstrap-select.min.scss', 'public/theme/plugins/bootstrap-select/')

    // Bootstrap Touchspin
    .sass('resources/sass/theme/plugins/bootstrap-touchspin/jquery.bootstrap-touchspin.min.scss', 'public/theme/plugins/bootstrap-touchspin/')

    // Drag and Drop
    .sass('resources/sass/theme/plugins/drag-and-drop/dragula/dragula.scss', 'public/theme/plugins/drag-and-drop/dragula/')
    .sass('resources/sass/theme/plugins/drag-and-drop/dragula/example.scss', 'public/theme/plugins/drag-and-drop/dragula/')

    // Dropify
    .sass('resources/sass/theme/plugins/dropify/dropify.min.scss', 'public/theme/plugins/dropify/')

    // Editors
    .sass('resources/sass/theme/plugins/editors/markdown/simplemde.min.scss', 'public/theme/plugins/editors/markdown/')
    .sass('resources/sass/theme/plugins/editors/quill/quill.bubble.scss', 'public/theme/plugins/editors/quill/')
    .sass('resources/sass/theme/plugins/editors/quill/quill.snow.scss', 'public/theme/plugins/editors/quill/')

    // File Upload
    .sass('resources/sass/theme/plugins/file-upload/file-upload-with-preview.min.scss', 'public/theme/plugins/file-upload/')

    // Flatpickr
    .sass('resources/sass/theme/plugins/flatpickr/custom-flatpickr.scss', 'public/theme/plugins/flatpickr/')

    // Fullcalendar
    .sass('resources/sass/theme/plugins/fullcalendar/custom-fullcalendar.advance.scss', 'public/theme/plugins/fullcalendar/')
    .sass('resources/sass/theme/plugins/fullcalendar/fullcalendar.min.scss', 'public/theme/plugins/fullcalendar/')
    .sass('resources/sass/theme/plugins/fullcalendar/fullcalendar.scss', 'public/theme/plugins/fullcalendar/')

    // Jquery Step
    .sass('resources/sass/theme/plugins/jquery-step/jquery.steps.scss', 'public/theme/plugins/jquery-step/')

    // jVector
    .sass('resources/sass/theme/plugins/jvector/jquery-jvectormap-2.0.3.scss', 'public/theme/plugins/jvector/')

    // lightbox
    .sass('resources/sass/theme/plugins/lightbox/custom-photswipe.scss', 'public/theme/plugins/lightbox/')
    .sass('resources/sass/theme/plugins/lightbox/photoswipe.scss', 'public/theme/plugins/lightbox/')

    // Loaders
    .sass('resources/sass/theme/plugins/loaders/custom-loader.scss', 'public/theme/plugins/loaders/')

    // noUiSlider
    .sass('resources/sass/theme/plugins/noUiSlider/custom-nouiSlider.scss', 'public/theme/plugins/noUiSlider/')

    // Perfect Scrollbar
    .sass('resources/sass/theme/plugins/perfect-scrollbar/perfect-scrollbar.scss', 'public/theme/plugins/perfect-scrollbar/')

    // Pricing Table
    .sass('resources/sass/theme/plugins/pricing-table/css/component.scss', 'public/theme/plugins/pricing-table/')

    // Select2
    .sass('resources/sass/theme/plugins/select2/select2.min.scss', 'public/theme/plugins/select2/')

    // SweetAlerts
    .sass('resources/sass/theme/plugins/sweetalerts/sweetalert.scss', 'public/theme/plugins/sweetalerts/')
    .sass('resources/sass/theme/plugins/sweetalerts/sweetalert2.min.scss', 'public/theme/plugins/sweetalerts/')

    // DataTable
    .sass('resources/sass/theme/plugins/table/datatable/custom_dt_custom.scss', 'public/theme/plugins/table/datatable/')
    .sass('resources/sass/theme/plugins/table/datatable/custom_dt_html5.scss', 'public/theme/plugins/table/datatable/')
    .sass('resources/sass/theme/plugins/table/datatable/custom_dt_miscellaneous.scss', 'public/theme/plugins/table/datatable/')
    .sass('resources/sass/theme/plugins/table/datatable/custom_dt_multiple_tables.scss', 'public/theme/plugins/table/datatable/')
    .sass('resources/sass/theme/plugins/table/datatable/datatables.scss', 'public/theme/plugins/table/datatable/')
    .sass('resources/sass/theme/plugins/table/datatable/datatables-dark.scss', 'public/theme/plugins/table/datatable/')
    .sass('resources/sass/theme/plugins/table/datatable/datatables-light.scss', 'public/theme/plugins/table/datatable/')
    .sass('resources/sass/theme/plugins/table/datatable/dt-global_style.scss', 'public/theme/plugins/table/datatable/')
    .sass('resources/sass/theme/plugins/table/datatable/dt-global_style-dark.scss', 'public/theme/plugins/table/datatable/')
    .sass('resources/sass/theme/plugins/table/datatable/dt-global_style-light.scss', 'public/theme/plugins/table/datatable/')

    // Tag Input
    .sass('resources/sass/theme/plugins/tagInput/tags-input.scss', 'public/theme/plugins/tagInput/')


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
    .browserSync('localhost:8080')
    .disableNotifications()
