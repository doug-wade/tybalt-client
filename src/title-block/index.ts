import { defineComponent, html } from '@tybalt/core';

export default defineComponent({
    name: 'tc-title-block',
    props: { title: { } },
    template({ title }) {
        return html`<div><h3>${title}</h3><slot name="content"></slot></div>`;
    },
});