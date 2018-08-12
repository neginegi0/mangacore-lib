'use strict';

var should = require('chai').should();
var mangacore = require('../');

describe('#versionGuard', function() {
  it('global._mangacore should be defined', function() {
    should.equal(global._mangacore, mangacore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      mangacore.versionGuard('version');
    }).should.throw('More than one instance of mangacore');
  });
});
