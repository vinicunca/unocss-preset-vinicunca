import 'uno.css';
import { createApp } from 'vue';

createApp({
  setup() {
    return () => (
      <div class="bg-secondary duration-300 flex h-full w-full items-center justify-center">
        <div class="bg-white text-pink-3 text-4xl animate-bounce animate-duration-2s">
          Demo Animate Preset
        </div>
      </div>
    );
  },
}).mount('#app');
