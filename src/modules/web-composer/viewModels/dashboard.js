/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','ojs/ojbutton', 'ojs/ojchart'],
 function(oj, ko, $) {
  
    function DashboardViewModel() {
      var self = this;
      self.threeDValue = ko.observable('on');

        /* chart data */
        var pieSeries = [{name: "Series 1", items: [42]},
                         {name: "Series 2", items: [55]},
                         {name: "Series 3", items: [36]},
                         {name: "Series 4", items: [10]},
                         {name: "Series 5", items: [5]}];
        
        this.pieSeriesValue = ko.observableArray(pieSeries);
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DashboardViewModel();
  }
);
