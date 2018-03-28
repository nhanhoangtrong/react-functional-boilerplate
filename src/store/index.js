import { init, model } from '@rematch/core';
import * as models from './initModels';

export default init({
    models,
});

if (module.hot) {
    module.hot.accept('./initModels', () => {
        const newModels = require('./initModels');
        newModels &&
            Object.keys(newModels).forEach((key) =>
                model({
                    name: key,
                    ...newModels[key],
                })
            );
    });
}
