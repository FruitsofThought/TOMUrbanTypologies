"use strict";
define(['require', 'scene'], function(require, Scene) {

  class SceneTOMUrbanTypologies extends Scene {
    constructor() {
        console.log("Going to Super Scene TOMBuildingTypologies");
        var config = {
          "id": "TOMUrbanTypologies",
          "groupid": "Urban",
          "languages": ['en-US', 'nl-NL'],
        };
        super(config);
      }
      // You must copy this, else we do not know where we are
    get path() {
      return require.toUrl("./").split('?')[0];
    }
  };
  return new SceneTOMUrbanTypologies();

});
