import { describe, expect, it } from '@jest/globals';
import { mount } from '@tybalt/test-utils';

import Icon from '.';

describe('icon', () => {
    it('renders an i tag', async () => {
        const mockName = 'beer';
        const wrapper = await mount(Icon, { attributes: { name: mockName } });

        const actual = wrapper.find('i');

        expect(actual.element.tagName).toBe('i');
    });

    it('renders the computed class name', async () => {
        const mockName = 'beer';
        const wrapper = await mount(Icon, { attributes: { name: mockName } });

        const actual = wrapper.find('i');

        expect(actual.attributes('name')).toBe(`fas fa-${mockName}`);
    });
});