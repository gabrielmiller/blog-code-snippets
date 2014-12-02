(function() {

    angular
        .module('demoApp')
        .controller('demoCtrl', ['$scope', demoCtrl]);

    function demoCtrl() {
        var bucketables = [
            {
                category: 1,
                id: 1,
                label: "One"
            },
            {
                category: 2,
                id: 2,
                label: "Zwei"
            },
            {
                category: 2,
                id: 3,
                label: "Tres"
            },
            {
                category: 3,
                id: 4,
                label: "Quatre"
            },
            {
                category: 3,
                id: 5,
                label: "Khamsa"
            }
        ];

        var sortables = [
            {
                id: 1,
                label: "Hamburger",
                number: 1
            },
            {
                id: 2,
                label: "Bun",
                number: 2
            },
            {
                id: 3,
                label: "Cheese",
                number: 3
            },
            {
                id: 4,
                label: "Ketchup",
                number: 4
            },
            {
                id: 5,
                label: "Lettuce",
                number: 5
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
        this.bucketables = bucketables;
        this.sortables = sortables;
    }

})();
