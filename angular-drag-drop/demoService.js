(function() {
    'use strict';

    angular
        .module('demoApp')
        .service('demoService', ['demoFactory', demoService]);

    function demoService(demoFactory) {
        var that = {};

        // Methods
        that.addBucket = addBucket;
        that.addBucketable = addBucketable;
        that.addSortable = addSortable;
        that.deleteBucket = deleteBucket;
        that.deleteBucketable = deleteBucketable;
        that.deleteSortable = deleteSortable;
        that.setCategory = setCategory;

        // Variables
        that.bucketables = demoFactory.bucketables;
        that.buckets = demoFactory.buckets;
        that.newBucketable = demoFactory.newBucketable;
        that.newBucket = demoFactory.newBucket;
        that.newSortable = demoFactory.newSortable;
        that.sortables = demoFactory.sortables;

        function addBucket(label) {
            if (label === "") {
                return;
            }

            var newId;
            if (that.buckets.length === 0) {
                newId = 1;
            } else {
                var lastIndex = that.buckets.length - 1;
                newId = that.buckets[lastIndex].id + 1;
            }
            that.buckets.push({
                id: newId,
                label: label
            });
            that.newBucket.label = "";
        }

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
            that.newBucketable.label = "";
        }

        function addSortable(label) {
        }

        function deleteBucket(index) {
            var deletedBucket = that.buckets[index];
            deleteBucketablesFromBucket(deletedBucket.id);
            that.buckets.splice(index, 1);
        }

        function deleteBucketable(index) {
            that.bucketables.splice(index, 1);
        }

        function deleteBucketablesFromBucket(id) {
            var index = that.bucketables.length - 1;
            while (index > -1) {
                if (that.bucketables[index].category === id) {
                    deleteBucketable(index);
                }
                index--;
            }
        }

        function deleteSortable(index) {
            that.sortables.splice(index, 1);
        }

        function setCategory(index, category) {
            that.bucketables[index].category = parseInt(category);
        }

        return that;
    }

})();
