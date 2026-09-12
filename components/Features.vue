<script setup>
const features = [
  {
    title: 'Easy Setup',
    details: 'Auto-detect game, extract BepInEx framework, and launch with one tap.',
    icon: 'https://img.icons8.com/fluency/48/bolt.png'
  },
  {
    title: 'Modpack Management',
    details: 'Create, activate, import, and export modpacks. Switch between mod combinations effortlessly.',
    icon: 'https://img.icons8.com/fluency/48/box.png'
  },
  {
    title: 'Config Editor',
    details: 'Built-in config file editor with syntax highlighting for JSON and Lua files.',
    icon: 'https://img.icons8.com/fluency/48/settings.png'
  },
  {
    title: 'Crash Detection',
    details: 'Automatic crash detection with diagnostic export for easy debugging.',
    icon: 'https://img.icons8.com/fluency/48/shield.png'
  },
  {
    title: 'Material You',
    details: 'Dynamic theme colors with Android 12+ Monet support. Beautiful light and dark modes.',
    icon: 'https://img.icons8.com/fluency/48/palette.png'
  },
  {
    title: 'Multi-language',
    details: 'Supports 18 languages including English, Chinese, Japanese, Korean, and more.',
    icon: 'https://img.icons8.com/fluency/48/globe.png'
  }
]
</script>

<template>
  <div class="features">
    <div v-for="f in features" :key="f.title" class="feature-card">
      <div class="feature-icon">
        <img :src="f.icon" :alt="f.title" width="40" height="40" />
      </div>
      <h3>{{ f.title }}</h3>
      <p>{{ f.details }}</p>
    </div>
  </div>
</template>

<style scoped>
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 0 24px;
  max-width: 1152px;
  margin: 48px auto 0;
}

.feature-card {
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  transition: border-color 0.25s, background-color 0.25s;
}

.feature-card:hover {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}

.feature-icon {
  margin-bottom: 16px;
}

.feature-icon img {
  display: block;
}

.feature-card h3 {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
}

.feature-card p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
  .features {
    grid-template-columns: 1fr;
  }
}
</style>
