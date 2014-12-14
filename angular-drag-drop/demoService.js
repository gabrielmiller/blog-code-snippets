(function() {
    'use strict';

    angular
        .module('demoApp')
        .service('demoService', demoService);

    function demoService(demoFactory) {
        var that = {};

        // Methods
        that.addBucketable = addBucketable;
        that.addSortable = addSortable;
        that.deleteBucketable = deleteBucketable;
        that.deleteSortable = deleteSortable;
        that.getNewBucketable = getNewBucketable;
        that.getNewSortable = getNewSortable;
        that.setCategory = setCategory;

        // Variables
        that.bucketables = demoFactory.bucketables;
        that.newBucketable = getNewBucketable();
        that.newSortable = getNewSortable();
        that.sortables = demoFactory.sortables;

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

        function addSortable(label) {
        }

        function deleteBucketable(index) {
            that.bucketables.splice(index, 1);
        }

        function deleteSortable(index) {
        }

        function getNewBucketable() {
            return {
                label: ""
            };
        }

        function getNewSortable() {
            return {
                label: ""
            };
        }

        function setCategory(index, category) {
            that.bucketables[index].category = parseInt(category);
        }

        return that;
    }

})();
