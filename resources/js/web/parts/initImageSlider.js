import { $ } from './_utility';

/*------------------------------------------------------------------

 Init Image Slider

 -------------------------------------------------------------------*/
function initImageSlider() {
    if (typeof window.Flickity === 'undefined') {
        return;
    }

    const $sliders = $('.nk-image-slider');

    if (!$sliders.length) {
        return;
    }

    const intervalCallbacks = [];

    setInterval(() => {
        intervalCallbacks.forEach((cb) => {
            cb(100);
        });
    }, 100);

    // prepare each slider
    $sliders.each(function () {
        const $this = $(this);
        const autoplay = parseFloat($this.attr('data-autoplay'), 10) || false;
        const slides = [];

        // parse all slides
        $this.find('.nk-image-slider-item').each(function () {
            const $slide = $(this);
            const $content = $slide.find('.nk-image-slider-content');

            slides.push({
                image: $slide.find('.nk-image-slider-img').attr('src'),
                thumb: $slide.find('.nk-image-slider-img').attr('data-thumb'),
                content: $content.html() || '',
            });

            $content.remove();
        });

        // no slides
        if (!slides.length) {
            $this.remove();
            return;
        }

        $this.flickity({
            pageDots: false,
            autoPlay: false,
            prevNextButtons: false,
            wrapAround: true,
            imagesLoaded: true,
        });

        // Content.
        $this.append(`
            <div class="nk-image-slider-content">
                <div class="nano">
                    <div class="nano-content"></div>
                </div>
            </div>
        `);
        const $content = $this.find('.nk-image-slider-content');

        // Display slide content.
        function displayContent(i) {
            if (slides[i]) {
                $content.find('.nano-content').html(slides[i].content);

                $content[slides[i].content ? 'addClass' : 'removeClass']('nk-image-slider-content-visible');

                // update nano
                if (typeof $.fn.nanoScroller !== 'undefined') {
                    $content.find('.nano').nanoScroller();
                }
            }
        }

        displayContent(0);
        $this.on('change.flickity', (event, index) => {
            displayContent(index);
        });

        // Add thumbs.
        let thumbs = '';
        slides.forEach((slideData) => {
            thumbs += `<div class="nk-image-slider-thumbs-item"><img src="${slideData.thumb}" alt=""></div>`;
        });
        $this.append(`
            <div class="nk-image-slider-thumbs">
                ${thumbs}
            </div>
        `);

        const $thumbs = $this.find('.nk-image-slider-thumbs');
        $thumbs.flickity({
            asNavFor: $this[0],
            contain: true,
            pageDots: false,
            prevNextButtons: false,
            cellAlign: 'left',
        });

        // Countdown.
        const $countdown = $('<div class="nk-image-slider-thumbs-count"></div>');

        function insertCountdown(i) {
            if (slides[i]) {
                $thumbs.find(`.nk-image-slider-thumbs-item:eq(${slides[i + 1] ? (i + 1) : 0})`).append($countdown);
            }
        }

        // Autoplay.
        if (autoplay) {
            // Pause control
            let isPaused = false;

            $this.on('mouseenter', () => {
                isPaused = true;
            });
            $this.on('mouseleave', () => {
                isPaused = false;
            });

            let percentTime = 0;
            let currentTimer = 0;

            insertCountdown(0);
            $thumbs.on('change.flickity', (event, index) => {
                insertCountdown(index);
                percentTime = 0;
            });

            intervalCallbacks.push((step) => {
                if (!isPaused) {
                    percentTime += step;

                    if (percentTime >= autoplay) {
                        $this.flickity('next');
                        percentTime = 0;
                    }
                }

                const newTimer = Math.ceil((autoplay - percentTime) / 1000);
                if (currentTimer !== newTimer) {
                    currentTimer = newTimer;
                    $countdown.html(newTimer);
                }
            });
        }
    });
}

export { initImageSlider };
