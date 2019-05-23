"use strict";

var _yoastseo = require("yoastseo");

// `url` needs to be the full URL to the script for the browser to know where to load the worker script from.
// This should be the script created by the previous code-snippet.
var url = "https://xn--taxigoleniw-zeb.pl/js/AnalysisWebWorker.js";
var worker = new _yoastseo.AnalysisWorkerWrapper((0, _yoastseo.createWorker)(url));
worker.initialize({
    locale: "pl_PL",
    contentAnalysisActive: true,
    keywordAnalysisActive: true,
    logLevel: "ERROR"
}).then(function () {
    // The worker has been configured, we can now analyze a Paper.
    var paper = new _yoastseo.Paper("Text to analyze", {
        keyword: "analyze"
    });
    return worker.analyze(paper);
}).then(function (results) {
    console.log('Analysis results:');
    console.log(results);
}).catch(function (error) {
    console.error('An error occured while analyzing the text:');
    console.error(error);
});