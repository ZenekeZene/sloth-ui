import { subtitle } from '../../assets/styles/subtitle.module.scss';

export default {
  render() {
    const tag = `h${this.level}`;
    return (
      <tag class={`${subtitle} relative`} id={this.id}>
        <scrollactive offset={80}>
          <a class="scrollactive-item absolute left-0 mb-0 no-underline"
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
