import store from 'app.store';

export default {
    inserted: function(el, binding) {
        let shape = binding.value.shape;
        let shapeName = shape.name;
        let choosen = binding.value.choosen;
        el.innerHTML = getShape(shapeName);
        el.addEventListener('click', clickEvtListener);

        function clickEvtListener() {
            if (choosen) {
                store.commit('removeShape', {
                    shape
                });
            } else {
                store.commit('addShape', {
                    shape
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
                default:
                    return '<div>unsupported shape: ' + shape + '</div>';
            }
        }
    }
}