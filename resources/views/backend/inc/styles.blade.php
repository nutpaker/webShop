<link href="{{asset('backend/assets/css/loader.css')}}" rel="stylesheet" type="text/css" />
<script src="{{asset('backend/assets/js/loader.js')}}"></script>

<!-- BEGIN GLOBAL MANDATORY STYLES -->
<link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet">
<link href="{{asset('bootstrap/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css" />

@if ($page_name != 'coming_soon' && $page_name != 'contact_us' && $page_name != 'error404' && $page_name != 'error500' && $page_name != 'error503' && $page_name != 'faq' && $page_name != 'helpdesk' && $page_name != 'maintenence' && $page_name != 'privacy' && $page_name != 'auth_boxed' && $page_name != 'auth_default')
<link href="{{asset('backend/assets/css/plugins.css')}}" rel="stylesheet" type="text/css" />
<link href="{{asset('backend/assets/css/scrollspyNav.css')}}" rel="stylesheet" type="text/css" />
@endif
<!-- END GLOBAL MANDATORY STYLES -->
