import React from 'react';
import addons from '@kadira/storybook-addons';
import { ADDON_ID, DATABASE_PANEL_ID, CHANNEL_PANEL_ID } from '../shared';

export function init() {
  addons.register(ADDON_ID, api => {
    // add the 'Channel' panel
    addons.addPanel(CHANNEL_PANEL_ID, {
      title: '#Channel',
      render: () => <pre>channel</pre>
    });

    // add the 'Database' panel
    addons.addPanel(DATABASE_PANEL_ID, {
      title: '#Database',
      render: () => <pre>database</pre>
    });
  });
}
