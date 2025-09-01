import type { Preflight } from 'unocss';
import { compressCSS } from '../../utils';

const drawerAkarCss = `
[data-akar-drawer] {
  touch-action: none;
  will-change: transform;
  transition: transform 0.5s cubic-bezier(0.32, 0.72, 0, 1);
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.32, 0.72, 0, 1);
}

[data-akar-drawer][data-akar-snap-points='false'][data-akar-drawer-direction='bottom'][data-state='open'] {
  animation-name: drawer-slide-from-bottom;
}
[data-akar-drawer][data-akar-snap-points='false'][data-akar-drawer-direction='bottom'][data-state='closed'] {
  animation-name: drawer-slide-to-bottom;
}

[data-akar-drawer][data-akar-snap-points='false'][data-akar-drawer-direction='top'][data-state='open'] {
  animation-name: drawer-slide-from-top;
}
[data-akar-drawer][data-akar-snap-points='false'][data-akar-drawer-direction='top'][data-state='closed'] {
  animation-name: drawer-slide-to-top;
}

[data-akar-drawer][data-akar-snap-points='false'][data-akar-drawer-direction='left'][data-state='open'] {
  animation-name: drawer-slide-from-left;
}
[data-akar-drawer][data-akar-snap-points='false'][data-akar-drawer-direction='left'][data-state='closed'] {
  animation-name: drawer-slide-to-left;
}

[data-akar-drawer][data-akar-snap-points='false'][data-akar-drawer-direction='right'][data-state='open'] {
  animation-name: drawer-slide-from-right;
}
[data-akar-drawer][data-akar-snap-points='false'][data-akar-drawer-direction='right'][data-state='closed'] {
  animation-name: drawer-slide-to-right;
}

[data-akar-drawer][data-akar-snap-points='true'][data-akar-drawer-direction='bottom'] {
  transform: translate3d(0, var(--initial-transform, 100%), 0);
}

[data-akar-drawer][data-akar-snap-points='true'][data-akar-drawer-direction='top'] {
  transform: translate3d(0, calc(var(--initial-transform, 100%) * -1), 0);
}

[data-akar-drawer][data-akar-snap-points='true'][data-akar-drawer-direction='left'] {
  transform: translate3d(calc(var(--initial-transform, 100%) * -1), 0, 0);
}

[data-akar-drawer][data-akar-snap-points='true'][data-akar-drawer-direction='right'] {
  transform: translate3d(var(--initial-transform, 100%), 0, 0);
}

[data-akar-drawer][data-akar-delayed-snap-points='true'][data-akar-drawer-direction='top'] {
  transform: translate3d(0, var(--snap-point-height, 0), 0);
}

[data-akar-drawer][data-akar-delayed-snap-points='true'][data-akar-drawer-direction='bottom'] {
  transform: translate3d(0, var(--snap-point-height, 0), 0);
}

[data-akar-drawer][data-akar-delayed-snap-points='true'][data-akar-drawer-direction='left'] {
  transform: translate3d(var(--snap-point-height, 0), 0, 0);
}

[data-akar-drawer][data-akar-delayed-snap-points='true'][data-akar-drawer-direction='right'] {
  transform: translate3d(var(--snap-point-height, 0), 0, 0);
}

[data-akar-overlay][data-akar-snap-points='false'] {
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.32, 0.72, 0, 1);
}
[data-akar-overlay][data-akar-snap-points='false'][data-state='open'] {
  animation-name: drawer-fade-in;
}
[data-akar-overlay][data-state='closed'] {
  animation-name: drawer-fade-out;
}

[data-akar-animate='false'] {
  animation: none !important;
}

[data-akar-overlay][data-akar-snap-points='true'] {
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

[data-akar-overlay][data-akar-snap-points='true'] {
  opacity: 1;
}

[data-akar-drawer]:not([data-akar-custom-container='true'])::after {
  content: '';
  position: absolute;
  background: inherit;
  background-color: inherit;
}

[data-akar-drawer][data-akar-drawer-direction='top']::after {
  top: initial;
  bottom: 100%;
  left: 0;
  right: 0;
  height: 200%;
}

[data-akar-drawer][data-akar-drawer-direction='bottom']::after {
  top: 100%;
  bottom: initial;
  left: 0;
  right: 0;
  height: 200%;
}

[data-akar-drawer][data-akar-drawer-direction='left']::after {
  left: initial;
  right: 100%;
  top: 0;
  bottom: 0;
  width: 200%;
}

[data-akar-drawer][data-akar-drawer-direction='right']::after {
  left: 100%;
  right: initial;
  top: 0;
  bottom: 0;
  width: 200%;
}

[data-akar-overlay][data-akar-snap-points='true']:not(
    [data-akar-snap-points-overlay='true']
  ):not([data-state='closed']) {
  opacity: 0;
}

[data-akar-overlay][data-akar-snap-points-overlay='true'] {
  opacity: 1;
}

[data-akar-handle] {
  display: block;
  position: relative;
  opacity: 0.7;
  background: #e2e2e4;
  margin-left: auto;
  margin-right: auto;
  height: 5px;
  width: 32px;
  border-radius: 1rem;
  touch-action: pan-y;
}

[data-akar-handle]:hover,
[data-akar-handle]:active {
  opacity: 1;
}

[data-akar-handle-hitarea] {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: max(100%, 2.75rem); /* 44px */
  height: max(100%, 2.75rem); /* 44px */
  touch-action: inherit;
}

@media (hover: hover) and (pointer: fine) {
  [data-akar-drawer] {
    user-select: none;
  }
}

@media (pointer: fine) {
  [data-akar-handle-hitarea]: {
    width: 100%;
    height: 100%;
  }
}

@keyframes drawer-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes drawer-fade-out {
  to {
    opacity: 0;
  }
}

@keyframes drawer-slide-from-bottom {
  from {
    transform: translate3d(0, var(--initial-transform, 100%), 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes drawer-slide-to-bottom {
  to {
    transform: translate3d(0, var(--initial-transform, 100%), 0);
  }
}

@keyframes drawer-slide-from-top {
  from {
    transform: translate3d(0, calc(var(--initial-transform, 100%) * -1), 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes drawer-slide-to-top {
  to {
    transform: translate3d(0, calc(var(--initial-transform, 100%) * -1), 0);
  }
}

@keyframes drawer-slide-from-left {
  from {
    transform: translate3d(calc(var(--initial-transform, 100%) * -1), 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes drawer-slide-to-left {
  to {
    transform: translate3d(calc(var(--initial-transform, 100%) * -1), 0, 0);
  }
}

@keyframes drawer-slide-from-right {
  from {
    transform: translate3d(var(--initial-transform, 100%), 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes drawer-slide-to-right {
  to {
    transform: translate3d(var(--initial-transform, 100%), 0, 0);
  }
}`;

export const drawerPreflight: Preflight = {
  layer: 'preflights',
  getCSS: () => compressCSS(drawerAkarCss),
};
