(function() {

    angular
        .module('demoApp')
        .controller('demoCtrl', ['$scope', demoCtrl]);

    function demoCtrl() {
        var draggables = [
            {
                id: 1,
                label: "One"
            },
            {
                id: 2,
                label: "Zwei"
            },
            {
                id: 3,
                label: "Tres"
            },
            {
                id: 4,
                label: "Quatre"
            },
            {
                id: 5,
                label: "Khamsa"
            }
        ];

        function dump() {
            console.log(this);
        }

        function swapElements() {
            console.log("Swapping Elements");
        }

        // Methods
        this.dump = dump;
        this.swapElements = swapElements;

        // Variables
        this.draggables = draggables;
    }

})();
