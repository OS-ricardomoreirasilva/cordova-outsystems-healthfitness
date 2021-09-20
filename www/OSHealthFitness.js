var exec = require('cordova/exec');

exports.requestPermissions = function (success, error, params) {

    const { 
        customPermissions, 
        allVariables,
        fitnessVariables,
        healthVariables,
        profileVariables,
        summaryVariables
    } = params;

    var args = [customPermissions, allVariables, fitnessVariables, healthVariables, profileVariables, summaryVariables];
    exec(success, error, 'OSHealthFitness', 'requestPermissions', args);
};

exports.getData = function (success, error, params) {
    exec(success, error, 'OSHealthFitness', 'advancedQuery', [params]);
};
    
exports.writeData = function (success, error, variable, value) {
    exec(success, error, 'OSHealthFitness', 'writeData', [variable,value]);
};

exports.getLastRecord = function (success, error, variable) {
    exec(success, error, 'OSHealthFitness', 'getLastRecord', [variable]);
};