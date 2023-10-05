<template>
  <div class="spinner">
    <svg class="spinner__circle-svg" viewBox="25 25 50 50">
      <circle
        class="spinner__circle-stroke"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        stroke-width="2"
        stroke-miterlimit="10"
      />
    </svg>
  </div>
</template>

<style scoped lang="css">
.spinner {
  position: absolute;
  width: 30px;
  height: 30px;
  margin: auto;
}

.spinner:before {
  content: '';
  display: block;
  padding-top: 100%;
}

.spinner__circle-svg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: center center;

  width: 100%;
  height: 100%;
  margin: auto;

  animation: spinner-rotate 1.28973s linear infinite;
}

.spinner__circle-stroke {
  stroke: var(--yellow);
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  stroke-width: 5px;

  animation: spinner-dash 2s ease-in-out infinite;
}

@keyframes spinner-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinner-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
</style>
