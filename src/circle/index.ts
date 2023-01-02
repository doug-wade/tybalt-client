import css from './circle.css';
import { defineComponent, html } from '@tybalt/core';

export default defineComponent({
    name: 'tc-circle',
    css,
    render() {
        return html`<div class="tc-circle"></div>`
    }
})