import { describe, expect, it } from '@jest/globals';
import { mount } from '@tybalt/test-utils';

import TitleBlock from '.';

describe('title block', () => {
    it('renders an h3', async () => {
        const mockTitle = 'sir';
        const wrapper = await mount(TitleBlock, { attributes: { title: mockTitle } });

        const actual = wrapper.find('h3');

        expect(actual.exists()).toBeTruthy();
        expect(actual.text()).toBe(mockTitle);
    });

    it('renders slot data', async () => {
        const mockSlot = '<div slot="content">this is content</div>';
        const wrapper = await mount(TitleBlock, { attributes: { title: 'mock title' }, slot: mockSlot });

        expect(wrapper.html()).toContain(mockSlot);
    });
});