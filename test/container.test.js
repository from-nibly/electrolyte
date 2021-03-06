/* global describe, it, expect */

var Container = require('../lib/container');


describe('Container', function() {
  var container = new Container();
  
  describe('#create', function() {
    
    describe('unknown component', function() {
      it('should throw an error', function() {
        expect(function() {
          var obj = container.create('unknown');
        }).to.throw(Error, "Unable to create component 'unknown'");
      });
    });

    describe('traditional module as a component', function() {
      var container = new Container();
      container.loader(require('../lib/loaders/node_modules')());
      
      it('return the same as require', function() {
        var obj = container.create('dgram');
        expect(obj).to.be.equal(require('dgram'));
      });
    });

    describe('unknown loader', function() {
      it('should throw an error', function() {
        expect(function() {
          container.loader('test',undefined);
        }).to.throw(Error, "Loader requires a function, was passed a 'undefined'");
      });
    });
  
    
  });
  
});
