export default {
  render() {
    const tag = `h${this.level}`;
    return (
      <tag class="subtitle relative">
        <scrollactive offset={80}>
          <a id={this.id}
            v-smooth-scroll
            class="scrollactive-item absolute left-0 mb-0"
            href={`#${this.id}`}
          >#</a>
        </scrollactive>
        { this.$slots.default }
      </tag>
    );
  },
  props: {
    id: {
      type: String,
      default: '',
    },
    level: {
      type: Number,
      default: 2,
    },
  },
};
