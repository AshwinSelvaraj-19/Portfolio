<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";

// 9 skills with real local SVG logos (AI API Integration excluded — no brand logo)
const SKILL_LOGOS: { name: string; logo: string }[] = [
  { name: "Python",      logo: "/skills/python.svg" },
  { name: "JavaScript",  logo: "/skills/javascript.svg" },
  { name: "HTML5",       logo: "/skills/html5.svg" },
  { name: "CSS3",        logo: "/skills/css3.svg" },
  { name: "PostgreSQL",  logo: "/skills/postgresql.svg" },
  { name: "Supabase",    logo: "/skills/supabase.svg" },
  { name: "Git",         logo: "/skills/git.svg" },
  { name: "Railway",     logo: "/skills/railway.svg" },
  { name: "Netlify",     logo: "/skills/netlify.svg" },
];

// 3×3 grid layout
const ROWS = [
  [0, 1, 2],  // Python, JavaScript, HTML5
  [3, 4, 5],  // CSS3, PostgreSQL, Supabase
  [6, 7, 8],  // Git, Railway, Netlify
];

const frameRef = ref<HTMLDivElement | null>((null as unknown) as HTMLDivElement);
const logoRefs = ref<HTMLDivElement[]>([]);
const tweens: gsap.core.Tween[] = [];
const hovered = ref<number | null>(null);

const setRef = (el: any, i: number) => { if (el) logoRefs.value[i] = el; };

onMounted(() => {
  if (frameRef.value) {
    gsap.fromTo(
      frameRef.value,
      { scale: 0.95, opacity: 0, y: 6 },
      { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.2)", delay: 0.2 }
    );
  }
  logoRefs.value.forEach((el, i) => {
    if (!el) return;
    // Staggered entrance
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.7 },
      { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(2)", delay: 0.4 + i * 0.06 }
    );
    // Idle floating — each logo has unique timing
    const duration = 4.5 + (i % 5) * 0.6;
    const tween = gsap.to(el, {
      y: `${0.6 + (i % 4) * 0.4}`,
      duration,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 0.8 + i * 0.1,
    });
    tweens.push(tween);
  });
});

onBeforeUnmount(() => {
  tweens.forEach((t) => t.kill());
  tweens.length = 0;
});
</script>

<template>
  <div ref="frameRef" class="ws" aria-label="Skills">
    <div class="ws-frame">
      <div class="ws-board">
        <div class="ws-title">SKILLS</div>
        <div class="ws-grid">
          <div
            v-for="(row, ri) in ROWS"
            :key="ri"
            class="ws-row"
          >
            <div
              v-for="idx in row"
              :key="idx"
              :ref="(el) => setRef(el, idx)"
              :class="['ws-item', { 'ws-item--h': hovered === idx }]"
              @mouseenter="hovered = idx"
              @mouseleave="hovered = null"
            >
              <img
                :src="SKILL_LOGOS[idx]?.logo ?? ''"
                :alt="SKILL_LOGOS[idx]?.name ?? ''"
                class="ws-logo"
                loading="lazy"
              />
              <span class="ws-label">{{ SKILL_LOGOS[idx]?.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ws {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &-frame {
    width: 100%;
    height: 100%;
    background: linear-gradient(155deg, #b8956a 0%, #a07d55 30%, #c4a578 60%, #8e6d48 100%);
    border-radius: 4px;
    padding: 6px;
    box-shadow:
      0 6px 20px rgba(0, 0, 0, 0.25),
      0 2px 6px rgba(0, 0, 0, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.2),
      inset 0 -1px 0 rgba(0, 0, 0, 0.15),
      inset 1px 0 0 rgba(255, 255, 255, 0.1),
      inset -1px 0 0 rgba(0, 0, 0, 0.08);
    transform: perspective(800px) rotateY(-0.8deg) rotateX(0.4deg);
  }

  &-board {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #faf6ef 0%, #f2ebe0 100%);
    border-radius: 2px;
    padding: 8px 10px 10px;
    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
  }

  &-title {
    text-align: center;
    font-family: "Urbanist", sans-serif;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: #5a4a38;
    margin-bottom: 6px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    flex-shrink: 0;
  }

  &-grid {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
  }

  &-row {
    display: flex;
    justify-content: center;
    gap: 4px;
  }

  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: 3px 6px;
    border-radius: 4px;
    cursor: default;
    transition: transform 0.25s ease-out, background 0.25s ease-out;
    flex: 0 0 auto;
    min-width: 0;

    &:hover,
    &--h {
      transform: translateY(-2px) scale(1.08);
      background: rgba(255, 255, 255, 0.6);
    }
  }

  &-logo {
    width: 26px;
    height: 26px;
    object-fit: contain;
    flex-shrink: 0;
    // Preserve original SVG colors — no filter/tint
  }

  &-label {
    font-family: "Urbanist", sans-serif;
    font-size: 7px;
    font-weight: 600;
    color: #6a5a48;
    text-align: center;
    line-height: 1;
    white-space: nowrap;
    letter-spacing: 0.02em;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ws-item:hover,
  .ws-item--h {
    transform: scale(1.04);
  }
}
</style>
