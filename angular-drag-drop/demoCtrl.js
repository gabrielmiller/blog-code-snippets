(function() {

    angular
        .module('demoApp')
        .controller('demoCtrl', ['$scope', demoCtrl]);

    function demoCtrl() {
        var that = this;

        // Methods
        that.addBucketable = addBucketable;
        that.deleteBucketable = deleteBucketable;
        that.dump = dump;
        that.setCategory = setCategory;

        // Variables
        that.bucketables = getBucketables();
        that.newBucketable = getNewBucketable();
        that.sortables = getSortables();

        function addBucketable(label) {

            if (label === "") {
                return;
            }

            var newId;

            if (that.bucketables.length === 0) {
                newId = 1;
            } else {
                var lastIndex = that.bucketables.length - 1;
                newId = that.bucketables[lastIndex].id + 1;
            }

            that.bucketables.push({
                category: 0,
                id: newId,
                label: label
            });
            that.newBucketable = getNewBucketable();
        }

        function deleteBucketable(index) {
            that.bucketables.splice(index, 1);
        }

        function dump() {
            console.log(that);
        }

        function getBucketables() {
            return [
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
        }

        function getNewBucketable() {
            return {
                label: ""
            };
        }

        function getSortables() {
            return [
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
        };

        function setCategory(index, newCategory) {
            that.bucketables[index].category = parseInt(newCategory);
        }
    }

})();
