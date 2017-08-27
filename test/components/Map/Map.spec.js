import { describe, it, beforeEach } from 'mocha';
import assert from 'assert';
import sinon from 'sinon';

// TODO: [Linesh][8/27/17] introduce module mapper module
import Map from '../../../src/components/Map';

describe('Map component', () => {
  describe('filter function', () => {
    let component;
    beforeEach('init component with map and initMarker() mocked out', () => {
      const map = sinon.spy();
      const locations = [
        { location: 'Chengdu',  lat: 30.572, lng: 104.066 },
        { location: 'Beijing',  lat: 39.904, lng: 116.407 }
      ];

      Map.prototype.initMarkers = sinon.stub().callsFake(() => locations);

      component = new Map(map, locations);
    });

    it('should filter Chengdu marker when activateMarker(chengdu) is called', function () {
    });
  });
});