import { defineComponent, html, useObservable } from '@tybalt/core';
import { compose, required, string } from '@tybalt/validator';

export default defineComponent({
    name: 'tc-icon',
    props: {
        name: {
            validator: compose(required(), string())
        }
    },
    setup({ ariaLabel, name }) {
        const { handler: setComputedClass, observable: computedClass } = useObservable(`fas fa-${name}`);

        name.observable.subscribe(() => {
            setComputedClass(`fas fa-${name}`);
        });

        return { computedClass, ariaLabel };
    },
    template({ ariaLabel, computedClass }) {
        return html`<i class="${computedClass}" aria-label="${ariaLabel}"></i>`
    }
});