<template>
  <nav class="mobile-nav">
    <transition-group ref="levels" :name="transitionName" tag="div" class="mobile-nav__levels">
      <div
        v-if="currentLevel"
        :key="getPathName(currentLevel.path)"
        :ref="`level-${getPathName(currentLevel.path)}`"
        class="mobile-nav__level"
        role="group"
        :aria-labelledby="`mobile-nav-level-label-${getPathName(currentLevel.path)}`"
        tabindex="-1"
        @keydown.up="handleArrowNavigation(-1)"
        @keydown.down="handleArrowNavigation(1)"
        @keydown.left="navigate(currentLevel.path.slice(0, currentLevelDepth - 1))"
        @keydown.esc="navigate(currentLevel.path.slice(0, currentLevelDepth - 1))"
      >
        <h2 :id="`mobile-nav-level-label-${getPathName(currentLevel.path)}`" class="mobile-nav__heading">
          {{ currentLevel.label ? currentLevel.label : 'Site name' }}
        </h2>
        <button
          v-if="currentLevelDepth > 0"
          ref="back"
          type="button"
          class="mobile-nav__btn-up"
          @click="navigate(currentLevel.path.slice(0, currentLevelDepth - 1))"
        >
          <span aria-hidden="true">👈</span> Back
          <small v-if="levels[currentLevelDepth - 1].label">to {{ levels[currentLevelDepth - 1].label }}</small>
        </button>
        <ul class="mobile-nav__list">
          <li v-for="item in currentLevel.items" :key="item.path.join()" class="mobile-nav__item">
            <button
              v-if="item.hasItems"
              ref="link"
              type="button"
              class="mobile-nav__link"
              @click="navigate(item.path)"
              @keydown.right="navigate(item.path)"
            >
              {{ item.label }} <span aria-hidden="true">👉</span>
            </button>
            <a v-else ref="link" href="{{ item.url }}" class="mobile-nav__link" @click="codepenPreventLinkClick">{{
              item.label
            }}</a>
          </li>
        </ul>
      </div>
    </transition-group>
    <div class="mobile-nav__sitemap">
      <a href="#" class="mobile-nav__link mobile-nav__link--sitemap">Sitemap</a>
    </div>
  </nav>
</template>

<script>
import smoothReflow from 'vue-smooth-reflow';

const menuLinks = [
  {
    label: 'Products group',
    items: [
      {
        label: 'Hardware',
        items: [
          {
            label: 'Notebooks',
            url: '#'
          },
          {
            label: 'Desktop Computers',
            url: '#'
          },
          {
            label: 'Apple',
            url: '#'
          }
        ]
      },
      {
        label: 'Software',
        items: [
          {
            label: 'Graphic Design',
            items: [
              {
                label: 'Adobe',
                items: [
                  {
                    label: 'Adobe Photoshop',
                    url: '#'
                  },
                  {
                    label: 'Adobe Illustrator',
                    url: '#'
                  },
                  {
                    label: 'Adobe InDesign',
                    url: '#'
                  },
                  {
                    label: 'Adobe XD',
                    url: '#'
                  },
                  {
                    label: 'After Effects',
                    url: '#'
                  },
                  {
                    label: 'Acrobat Pro',
                    url: '#'
                  }
                ]
              },
              {
                label: 'Others',
                items: [
                  {
                    label: 'Sketch',
                    url: '#'
                  },
                  {
                    label: 'Affinity Photo',
                    url: '#'
                  },
                  {
                    label: 'Affinity Designer',
                    url: '#'
                  },
                  {
                    label: 'Affinity Publisher',
                    url: '#'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: 'Another products group',
    items: [
      {
        label: 'Hardware',
        items: [
          {
            label: 'Notebooks',
            url: '#'
          },
          {
            label: 'Desktop Computers',
            url: '#'
          },
          {
            label: 'Apple',
            url: '#'
          }
        ]
      },
      {
        label: 'Software',
        items: [
          {
            label: 'Graphic Design',
            items: [
              {
                label: 'Adobe',
                items: [
                  {
                    label: 'Adobe Photoshop',
                    url: '#'
                  },
                  {
                    label: 'Adobe Illustrator',
                    url: '#'
                  },
                  {
                    label: 'Adobe InDesign',
                    url: '#'
                  },
                  {
                    label: 'Adobe XD',
                    url: '#'
                  },
                  {
                    label: 'After Effects',
                    url: '#'
                  },
                  {
                    label: 'Acrobat Pro',
                    url: '#'
                  }
                ]
              },
              {
                label: 'Others',
                items: [
                  {
                    label: 'Sketch',
                    url: '#'
                  },
                  {
                    label: 'Affinity Photo',
                    url: '#'
                  },
                  {
                    label: 'Affinity Designer',
                    url: '#'
                  },
                  {
                    label: 'Affinity Publisher',
                    url: '#'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: 'About us',
    url: '#'
  },
  {
    label: 'Contacts',
    url: '#'
  }
];

export default {
  name: 'AppMenuNav',

  mixins: [smoothReflow],

  props: [],

  data() {
    return {
      menuItems: menuLinks,
      currentPosition: [],
      levels: [],
      currentLevel: null,
      prevLevelDepth: 0,
      currentLevelDepth: 0
    };
  },

  computed: {
    transitionName() {
      return 'slide-' + (this.currentLevelDepth > this.prevLevelDepth ? 'left' : 'right');
    }
  },

  mounted() {
    this.recalculateItems();

    this.$smoothReflow({
      el: this.$refs.levels.$el
    });
  },

  unmounted() {},

  methods: {
    navigate(path) {
      this.currentPosition = path;
      this.recalculateItems();
      this.$nextTick(() => {
        this.$refs[`level-${this.getPathName(this.currentPosition)}`].focus();
      });
    },

    recalculateItems() {
      let items = this.menuItems;
      let levels = [];

      levels.push(this.getLevel([], null, items));

      this.currentPosition.forEach((index, depth) => {
        const path = [...this.currentPosition].slice(0, depth + 1);
        const label = (items[index] && items[index].label) || null;
        items = (items[index] && items[index].items) || [];
        levels.push(this.getLevel(path, label, items));
      });

      this.levels = levels;
      this.currentLevel = levels[levels.length - 1];
      this.prevLevelDepth = this.currentLevelDepth;
      this.currentLevelDepth = levels.length - 1;
    },

    getLevel(path, label, items) {
      return {
        path: path,
        label: label,
        items: items.map((item, index) => {
          return {
            path: [...path, index],
            label: item.label,
            url: item.url,
            hasItems: item.items && item.items.length > 0
          };
        })
      };
    },

    getPathName(path) {
      if (!path || path.length < 0) {
        return 0;
      }

      return [0, ...path].join('-');
    },

    handleArrowNavigation(direction) {
      if (!this.$refs.link) {
        return;
      }

      let links = [];
      if (this.$refs.back) {
        links.push(this.$refs.back);
      }
      links.push(...this.$refs.link);

      if (links.includes(document.activeElement)) {
        let nextIndex = links.indexOf(document.activeElement) + direction;
        if (nextIndex < 0) {
          nextIndex = links.length - 1;
        } else if (nextIndex > links.length - 1) {
          nextIndex = 0;
        }
        links[nextIndex].focus();
      } else {
        if (direction > 0) {
          this.$refs.link[0].focus();
        } else {
          links[links.length - 1].focus();
        }
      }
    },

    codepenPreventLinkClick(event) {
      // Just for Codepen! Without this Codepen redirects to some server error page.
      event.preventDefault();
    }
  }
};
</script>

<style scoped lang="scss">
.mobile-nav {
  margin: auto;
  padding: 2rem;
  max-width: 20rem;
  overflow: hidden;
  background: white;
  border-radius: 1rem;
  box-shadow: 0.5rem 0.5rem 1rem lightgray;
}

.mobile-nav__levels {
  position: relative;
}

.mobile-nav__level {
  background: white;
  outline: none;
  transition: transform 210ms;
}

.mobile-nav__heading {
  margin-top: 0;
  padding: 0 0.4rem;
}

.mobile-nav__list {
  margin: 0;
  padding: 0;
  list-style-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);
}

.mobile-nav__btn-up,
.mobile-nav__link {
  appearance: none;
  border: 1px solid transparent;
  border-radius: 0;
  background: none;
  font: inherit;
  line-height: inherit;
  text-align: inherit;
  display: block;
  width: 100%;
  padding: 0.4rem;
  cursor: pointer;
  text-decoration: none;
  color: blue;
}

.mobile-nav__btn-up:focus,
.mobile-nav__link:focus {
  background: ivory;
  outline: 1px dotted;
  outline-offset: -1px;
}

.mobile-nav__btn-up {
  margin-bottom: 1rem;
}

.mobile-nav__sitemap {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid gainsboro;
}

.slide-left-leave-from,
.slide-left-leave-to,
.slide-right-leave-from,
.slide-right-leave-to {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  visibility: hidden;
}

.slide-left-enter-active {
  animation: slide-in-left 200ms;
}

.slide-left-leave-active {
  animation: slide-out-left 200ms;
}

.slide-right-enter-active {
  animation: slide-in-right 200ms;
}

.slide-right-leave-active {
  animation: slide-out-right 200ms;
}

@keyframes slide-in-left {
  0% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slide-out-left {
  0% {
    visibility: visible;
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes slide-in-right {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slide-out-right {
  0% {
    visibility: visible;
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
