<div class="nk-contacts-top">
    <div class="container">
        <div class="nk-contacts-left">
            <ul class="nk-social-links">
{{--                <?php $socials = App\Models\Configs::config("social");?>--}}
{{--                @if (isset($socials) || !empty($socials))--}}
{{--                    @foreach($socials as $social)--}}
{{--                        <li><a href="{{$social["value"]}}" class="nk-social-{{$social["key"]}}"><span--}}
{{--                                    class="fab fa-{{$social["key"]}}"></span></a>--}}
{{--                        </li>--}}
{{--                    @endforeach--}}
{{--                @endif--}}
            </ul>
        </div>
        <div class="nk-contacts-right">
{{--            <ul class="nk-contacts-icons">--}}
{{--                @guest--}}
{{--                    <li>--}}
{{--                        <a href="#" data-toggle="modal" data-target="#modalLogin">--}}
{{--                            <span class="fa fa-user"></span>--}}
{{--                            SIGN IN--}}
{{--                        </a>--}}
{{--                    </li>--}}
{{--                @else--}}
{{--                    <li>--}}
{{--                        <a href="#">--}}
{{--                            <span class="fa fa-usd"></span>--}}
{{--                            {{ number_format(Auth::user()->points, 2, '.', ',')}}--}}
{{--                        </a>--}}
{{--                    </li>--}}

{{--                    <li>--}}
{{--                        <a href="#">--}}
{{--                            <span class="fa fa-user"></span>--}}
{{--                            {{ Auth::user()->realname }}--}}
{{--                        </a>--}}
{{--                    </li>--}}
{{--                @if( Auth::user()->role !== "member")--}}
{{--                        <li>--}}
{{--                            <a href="{{ route('backend.dashboard') }}">--}}
{{--                                <span class="fa fa-cog"></span>--}}
{{--                                Dashboard--}}
{{--                            </a>--}}
{{--                        </li>--}}
{{--                    @endif--}}



{{--                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">--}}
{{--                        @csrf--}}
{{--                    </form>--}}
{{--                    <li>--}}
{{--                        <a href="{{ route('logout') }}"--}}
{{--                           onclick="event.preventDefault();--}}
{{--                                                     document.getElementById('logout-form').submit();">--}}
{{--                            <span class="fa fa-sign-out"></span>--}}
{{--                        </a>--}}
{{--                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">--}}
{{--                            @csrf--}}
{{--                        </form>--}}

{{--                    </li>--}}
{{--                @endguest--}}
{{--            </ul>--}}
        </div>
    </div>
</div>
