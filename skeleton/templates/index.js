import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import rootContainer from './containers';

const node = document.getElementById('<%= appDomEntry %>');
if (node) {
    render(
        (
            <Provider store={store}>
                {rootContainer}
            </Provider>
        ),
        node
    );
}
