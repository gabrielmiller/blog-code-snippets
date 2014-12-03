(function() {

    angular
        .module('demoApp')
        .controller('demoCtrl', ['$scope', demoCtrl]);

    function demoCtrl() {
        var that = this;

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

        var newBucketable = {
            name: ""
        };

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

        function addBucketable(name) {
            console.log("adding bucketable", name);
            var newBucketableIndex = that.bucketables.length + 1;
            console.log(newBucketableIndex);
            var newItem = {
                category: 0,
                id: newBucketableIndex,
                label: name
            };
            console.log(newItem);
            //that.bucketables.push(newItem);
        }

        function dump() {
            console.log(that);
        }

        function swapElements() {
            console.log("Swapping Elements");
        }

        // Methods
        that.addBucketable = addBucketable;
        that.dump = dump;
        that.swapElements = swapElements;

        // Variables
        that.bucketables = bucketables;
        that.newBucketable = newBucketable;
        that.sortables = sortables;
    }

})();
