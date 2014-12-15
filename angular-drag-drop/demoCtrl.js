(function() {
    'use strict';

    angular
        .module('demoApp')
        .controller('demoCtrl', demoCtrl);

    function demoCtrl(demoService) {
        var that = this;

        // Methods
        that.addBucketable = demoService.addBucketable;
        that.addBucket = demoService.addBucket;
        that.deleteBucketable = demoService.deleteBucketable;
        that.deleteBucket = demoService.deleteBucket;
        that.dump = dump;
        that.setCategory = demoService.setCategory;

        // Variables
        that.bucketables = demoService.bucketables;
        that.buckets = demoService.buckets;
        that.newBucketable = demoService.newBucketable;
        that.newBucket = demoService.newBucket;
        that.newSortable = demoService.newSortable;
        that.sortables = demoService.sortables;

        // Debugging
        function dump() {
            console.log(that);
        }
    }

})();
