<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";

/* ── Skill data ────────────────────────────────────────────────────────
   10 skills. 9 use local SVG logos from /skills/.
   "AI API Integration" uses an inline SVG icon since no brand logo exists. */
const SKILLS: { name: string; logo: string | null }[] = [
  { name: "Python",              logo: "/skills/python.svg" },
  { name: "JavaScript",          logo: "/skills/javascript.svg" },
  { name: "HTML5",               logo: "/skills/html5.svg" },
  { name: "CSS3",                logo: "/skills/css3.svg" },
  { name: "AI API Integration",  logo: null },  /* custom inline icon */
  { name: "PostgreSQL",          logo: "/skills/postgresql.svg" },
  { name: "Supabase",            logo: "/skills/supabase.svg" },
  { name: "Git",                 logo: "/skills/git.svg" },
  { name: "Railway",             logo: "/skills/railway.svg" },
  { name: "Netlify",             logo: "/skills/netlify.svg" },
];

const frameRef = ref<HTMLDivElement | null>(null);
const itemRefs = ref<HTMLDivElement[]>([]);
const tweens: gsap.core.Tween[] = [];

const setRef = (el: any, i: number) => {
  if (el) itemRefs.value[i] = el;
};

onMounted(() => {
  /* Frame entrance */
  if (frameRef.value) {
    gsap.fromTo(
      frameRef.value,
      { scale: 0.96, opacity: 0, y: 8 },
      { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.4)", delay: 0.3 }
    );
  }

  /* Staggered logo entrance + idle float */
  itemRefs.value.forEach((el, i) => {
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.6, y: 4 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(2)", delay: 0.5 + i * 0.055 }
    );
    /* Gentle idle floating — each logo has unique timing */
    const dur = 4.8 + (i % 5) * 0.55;
    const dist = 1 + (i % 4) * 0.4;
    const tw = gsap.to(el, {
      y: dist,
      duration: dur,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 0.9 + i * 0.08,
    });
    tweens.push(tw);
  });
});

onBeforeUnmount(() => {
  tweens.forEach((t) => t.kill());
  tweens.length = 0;
});
</script>

<template>
  <div ref="frameRef" class="ws" aria-label="Skills">
    <!-- Outer wooden frame -->
    <div class="ws-frame">
      <!-- Inner cream/linen board -->
      <div class="ws-board">
        <!-- Title -->
        <div class="ws-title">SKILLS</div>

        <!-- CSS Grid of skills -->
        <div class="ws-grid">
          <div
            v-for="(skill, i) in SKILLS"
            :key="skill.name"
            :ref="(el) => setRef(el, i)"
            class="ws-item"
          >
            <!-- Logo -->
            <div class="ws-logo-box">
              <img
                v-if="skill.logo"
                :src="skill.logo"
                :alt="skill.name"
                class="ws-logo-img"
                loading="lazy"
              />
              <!-- Custom icon for AI API Integration -->
              <svg
                v-else
                class="ws-logo-img ws-logo-svg"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="5" r="2.5" stroke="#7c5cbf" stroke-width="1.4" fill="none"/>
                <circle cx="5" cy="18" r="2.5" stroke="#7c5cbf" stroke-width="1.4" fill="none"/>
                <circle cx="19" cy="18" r="2.5" stroke="#7c5cbf" stroke-width="1.4" fill="none"/>
                <circle cx="12" cy="12" r="2" fill="#7c5cbf" opacity="0.8"/>
                <line x1="12" y1="7.5" x2="12" y2="10" stroke="#7c5cbf" stroke-width="1.2"/>
                <line x1="7" y1="17" x2="10" y2="13.5" stroke="#7c5cbf" stroke-width="1.2"/>
                <line x1="17" y1="17" x2="14" y2="13.5" stroke="#7c5cbf" stroke-width="1.2"/>
                <line x1="5" y1="18" x2="19" y2="18" stroke="#7c5cbf" stroke-width="1" opacity="0.4" stroke-dasharray="2 2"/>
              </svg>
            </div>
            <!-- Label -->
            <span class="ws-label">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* ═══════════════════════════════════════════════════════════════════════
   WALL-MOUNTED SKILLS FRAME
   
   Structure:
   .ws → .ws-frame (wooden border) → .ws-board (cream interior) → .ws-grid (CSS Grid)
   ═══════════════════════════════════════════════════════════════════════ */

.ws {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Wall-mount shadow — subtle, realistic, cast behind the frame */
  filter: drop-shadow(0 5px 12px rgba(60, 40, 20, 0.18))
          drop-shadow(0 2px 4px rgba(60, 40, 20, 0.10));
}

/* ── Wooden outer frame ─────────────────────────────────────────────── */
.ws-frame {
  width: 100%;
  height: 100%;
  background:
    /* Outer bevel highlight (top-left light) */
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.15) 0%,
      transparent 40%
    ),
    /* Wood gradient */
    linear-gradient(
      155deg,
      #b8956a 0%,
      #a07d55 25%,
      #c4a578 55%,
      #8e6d48 100%
    );
  border-radius: 5px;
  padding: 7px;
  /* Subtle 3D wall-mount rotation */
  transform: perspective(900px) rotateY(-0.6deg) rotateX(0.3deg);
  /* Multi-layer frame shadows */
  box-shadow:
    /* Outer bevel — dark edge */
    inset 0 -1px 0 rgba(0, 0, 0, 0.15),
    /* Outer bevel — light edge */
    inset 0 1px 0 rgba(255, 255, 255, 0.18),
    /* Inner bevel sides */
    inset 1px 0 0 rgba(255, 255, 255, 0.08),
    inset -1px 0 0 rgba(0, 0, 0, 0.08),
    /* Contact shadow — closer/tighter */
    0 2px 6px rgba(50, 35, 15, 0.12),
    /* Contact shadow — ambient */
    0 8px 24px rgba(50, 35, 15, 0.08);
}

/* ── Inner cream/linen board ────────────────────────────────────────── */
.ws-board {
  width: 100%;
  height: 100%;
  background: linear-gradient(175deg, #faf6ef 0%, #f2ebe0 100%);
  border-radius: 3px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 0;
}

/* ── Title ───────────────────────────────────────────────────────────── */
.ws-title {
  text-align: center;
  font-family: "Urbanist", sans-serif;
  font-size: clamp(8px, 0.8vw, 11px);
  font-weight: 700;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: #5a4a38;
  padding: clamp(5px, 0.6vw, 8px) 6px clamp(3px, 0.3vw, 5px);
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
  flex-shrink: 0;
}

/* ── CSS Grid — 3 columns, auto rows ────────────────────────────────── */
.ws-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: clamp(2px, 0.3vw, 5px) clamp(4px, 0.5vw, 8px);
  padding: clamp(2px, 0.3vw, 5px) clamp(6px, 0.6vw, 10px) clamp(6px, 0.6vw, 10px);
  align-content: center;
  justify-items: center;
  align-items: center;
}

/* ── Skill item ─────────────────────────────────────────────────────── */
.ws-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(2px, 0.25vw, 4px);
  padding: clamp(1px, 0.15vw, 3px);
  border-radius: 4px;
  cursor: default;
  transition: transform 0.2s ease-out, background 0.2s ease-out;
  width: 100%;

  &:hover {
    transform: translateY(-2px) scale(1.06);
    background: rgba(255, 255, 255, 0.5);
  }
}

/* ── Logo container — consistent size, aspect-ratio preserved ───────── */
.ws-logo-box {
  width: clamp(26px, 3vw, 42px);
  height: clamp(26px, 3vw, 42px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.ws-logo-img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* SVG logo for AI API Integration — preserve viewBox proportions */
.ws-logo-svg {
  width: 80%;
  height: 80%;
}

/* ── Label ───────────────────────────────────────────────────────────── */
.ws-label {
  font-family: "Urbanist", sans-serif;
  font-size: clamp(6px, 0.6vw, 9px);
  font-weight: 600;
  color: #6a5a48;
  text-align: center;
  line-height: 1.15;
  white-space: nowrap;
  letter-spacing: 0.01em;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

/* ── Reduced motion ─────────────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .ws-item:hover {
    transform: scale(1.03);
  }
}
</style>
