export const animateCss = `
@keyframes bounce {

  0%,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(.215, .61, .355, 1);
    transform: translateZ(0)
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(.755, .05, .855, .06);
    transform: translate3d(0, -30px, 0) scaleY(1.1)
  }

  70% {
    animation-timing-function: cubic-bezier(.755, .05, .855, .06);
    transform: translate3d(0, -15px, 0) scaleY(1.05)
  }

  80% {
    transition-timing-function: cubic-bezier(.215, .61, .355, 1);
    transform: translateZ(0) scaleY(.95)
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02)
  }
}

.animate__bounce {
  animation-name: bounce;
  transform-origin: center bottom;
}
`;
