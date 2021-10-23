import gsap from 'gsap';

export default function loadAnimations() {
  const timeline = gsap.timeline({
    defaults: { duration: 2 },
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
