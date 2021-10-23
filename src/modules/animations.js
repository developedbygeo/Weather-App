import gsap from 'gsap';

function loadAnimations() {
  const timeline = gsap.timeline({
    defaults: { duration: 1.5 },
  });

  timeline
    .from('.search-wrapper', {
      y: -100,
      stagger: 0.5,
      opacity: 0,
      ease: 'Power1.easeOut',
    })
    .from(
      'article',
      {
        x: -150,
        opacity: 0,
        stagger: 0.4,
        ease: 'slow(0.7, 0.7)',
      },
      '-=0.5'
    )
    .from(
      'aside',
      { x: 150, opacity: 0, ease: 'slow(0.7, 0.7)', stagger: 0.4 },
      '-=1'
    )
    .from(
      '.img-wrapper',
      { opacity: 0, x: 180, ease: 'Power0.easeNone' },
      '-=0.5'
    )
    .from(
      '.txt-wrapper',
      { opacity: 0, x: -150, ease: 'Power0.easeNone' },
      '-=1'
    );
}
class ApiAnimations {
  constructor() {
    this.timeline = gsap.timeline({
      defaults: {
        duration: 0.3,
        ease: 'Power2.easeInOut',
        opacity: 0,
        stagger: 0.4,
      },
    });
  }

  enable() {
    this.timeline
      .to('.location-wrapper', {
        x: '-100%',
        ease: 'slow(0.7, 0.7)',
        stagger: 0.4,
      })
      .to('.temp-feeling', { x: '100%' })
      .to('.date-wrapper', { x: '-100%' }, '-=0.15')
      .to('.humidity', { x: '100%' }, '-=0.15')
      .to('.temp-wrapper', { x: '-100%' }, '-=0.15')
      .to('.rain-chance', { x: '100%' }, '-=0.15')
      .to('.desc-wrapper', { x: '-100%' }, '-=0.2')
      .to('.wind', { x: '100%' }, '-=0.2')
      .to('.weather-display', { opacity: 0 }, '-=0.2')
      .to('.weather-minmax', { opacity: 0 }, '-=0.2');
  }

  reverse() {
    this.timeline.reverse();
  }
}

export { loadAnimations, ApiAnimations };
