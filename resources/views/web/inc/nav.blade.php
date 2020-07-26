<?php
$nav_opaque = isset($nav_opaque)?$nav_opaque:true;
$nav_contacts = isset($nav_contacts)?$nav_contacts:true;
?>


<header class="nk-header{{ $nav_opaque?' nk-header-opaque':'' }}">
@include("web.inc.nav-contact")
    <nav class="nk-navbar nk-navbar-top nk-navbar-sticky nk-navbar-autohide">
        <div class="container">
            <div class="nk-nav-table">
                <a href="/" class="nk-nav-logo">
                    <img src="{{asset("web/img/logo.svg")}}" alt="{{ config('app.name', 'Laravel') }}" >
                </a>

                <ul class="nk-nav nk-nav-right d-none d-lg-table-cell" data-nav-mobile="#nk-nav-mobile">

                    <li class="nk-drop-item">
                        <a href="#">
                            News
                        </a>
                        <ul class="dropdown">
                            <li>
                                <a href="news.html"> News </a>
                            </li>
                            <li class="nk-drop-item">
                                <a href="#"> Blog With Sidebar </a>
                                <ul class="dropdown">
                                    <li>
                                        <a href="#"> Blog Grid </a>
                                    </li>
                                    <li>
                                        <a href="#"> Blog List </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"> Blog Fullwidth </a>
                            </li>
                            <li>
                                <a href="#"> Blog Article </a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#"> Rules </a>
                    </li>
                    <li>
                        <a href="#"> Downloads </a>
                    </li>
                    <li>
                        <a href="#"> Random </a>
                    </li>
                    <li>
                        <a href="#"> STORE </a>
                    </li>

                    @guest
                    @else
                        <li>
                            <a href="#"> Profile </a>
                        </li>
                    @endauth


                </ul>

                <ul class="nk-nav nk-nav-right nk-nav-icons">
                    <li class="single-icon d-lg-none">
                        <a href="#" class="no-link-effect" data-nav-toggle="#nk-nav-mobile">
                                <span class="nk-icon-burger">
                                    <span class="nk-t-1"></span>
                                    <span class="nk-t-2"></span>
                                    <span class="nk-t-3"></span>
                                </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
