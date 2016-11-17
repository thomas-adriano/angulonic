import store from 'app.store';

export default {
    inserted: function(el, binding) {
        let shapeStr = binding.value.shape;
        el.innerHTML = getShape(shapeStr);
        el.addEventListener('click', fn);

        function fn() {
            if (binding.value.choosen) {
                console.log('rem ' + shapeStr);
                store.commit('removeShape', {
                    shape: shapeStr
                });
            } else {
                console.log('ad ' + shapeStr);
                store.commit('addShape', {
                    shape: shapeStr
                });
            }
        };

        function getShape(shape) {
            switch (shape) {
                case 'square':
                    return '<div class="square"></div>';
                case 'rectangle':
                    return '<div class="rectangle"></div>';
                case 'triangleEq':
                    return '<div class="triangle-eq"></div>';
                case 'triangleIso':
                    return '<div class="triangle-iso"></div>';
            }
        }
    }
}