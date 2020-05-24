function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~hotels-hotels-module~layout-search-hotels-hotels-module"], {
  /***/
  "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js ***!
    \******************************************************************/

  /*! exports provided: AgmBicyclingLayer, AgmCircle, AgmCoreModule, AgmDataLayer, AgmFitBounds, AgmGeocoder, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer, CircleManager, ControlPosition, DataLayerManager, FitBoundsAccessor, GeocoderLocationType, GeocoderStatus, GoogleMapsAPIWrapper, GoogleMapsScriptProtocol, InfoWindowManager, KmlLayerManager, LAZY_MAPS_API_CONFIG, LayerManager, LazyMapsAPILoader, MapTypeId, MapsAPILoader, MarkerManager, NoOpMapsAPILoader, PolygonManager, PolylineManager, RectangleManager, ScaleControlStyle, ZoomControlStyle, ɵa, ɵb, ɵc, ɵd, ɵe */

  /***/
  function node_modulesAgmCore__ivy_ngcc__Fesm2015AgmCoreJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmBicyclingLayer", function () {
      return AgmBicyclingLayer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmCircle", function () {
      return AgmCircle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function () {
      return AgmCoreModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function () {
      return AgmDataLayer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function () {
      return AgmFitBounds;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmGeocoder", function () {
      return AgmGeocoder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function () {
      return AgmInfoWindow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function () {
      return AgmKmlLayer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmMap", function () {
      return AgmMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmMarker", function () {
      return AgmMarker;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmPolygon", function () {
      return AgmPolygon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmPolyline", function () {
      return AgmPolyline;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmPolylineIcon", function () {
      return AgmPolylineIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function () {
      return AgmPolylinePoint;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmRectangle", function () {
      return AgmRectangle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmTransitLayer", function () {
      return AgmTransitLayer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CircleManager", function () {
      return CircleManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlPosition", function () {
      return ControlPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataLayerManager", function () {
      return DataLayerManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function () {
      return FitBoundsAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeocoderLocationType", function () {
      return GeocoderLocationType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeocoderStatus", function () {
      return GeocoderStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function () {
      return GoogleMapsAPIWrapper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function () {
      return GoogleMapsScriptProtocol;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function () {
      return InfoWindowManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function () {
      return KmlLayerManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function () {
      return LAZY_MAPS_API_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayerManager", function () {
      return LayerManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function () {
      return LazyMapsAPILoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapTypeId", function () {
      return MapTypeId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function () {
      return MapsAPILoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkerManager", function () {
      return MarkerManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function () {
      return NoOpMapsAPILoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PolygonManager", function () {
      return PolygonManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PolylineManager", function () {
      return PolylineManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RectangleManager", function () {
      return RectangleManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScaleControlStyle", function () {
      return ScaleControlStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZoomControlStyle", function () {
      return ZoomControlStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return FitBoundsService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return coreDirectives;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return WindowRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return DocumentRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return BROWSER_GLOBALS_PROVIDERS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["*"];

    var MapsAPILoader = function MapsAPILoader() {
      _classCallCheck(this, MapsAPILoader);
    };

    MapsAPILoader.ɵfac = function MapsAPILoader_Factory(t) {
      return new (t || MapsAPILoader)();
    };

    MapsAPILoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MapsAPILoader,
      factory: MapsAPILoader.ɵfac
    });
    /**
     * Wrapper class that handles the communication with the Google Maps Javascript
     * API v3
     */

    var GoogleMapsAPIWrapper =
    /*#__PURE__*/
    function () {
      function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;

        _classCallCheck(this, GoogleMapsAPIWrapper);

        this._loader = _loader;
        this._zone = _zone;
        this._map = new Promise(function (resolve) {
          _this._mapResolver = resolve;
        });
      }

      _createClass(GoogleMapsAPIWrapper, [{
        key: "createMap",
        value: function createMap(el, mapOptions) {
          var _this2 = this;

          return this._zone.runOutsideAngular(function () {
            return _this2._loader.load().then(function () {
              var map = new google.maps.Map(el, mapOptions);

              _this2._mapResolver(map);

              return;
            });
          });
        }
      }, {
        key: "setMapOptions",
        value: function setMapOptions(options) {
          var _this3 = this;

          return this._zone.runOutsideAngular(function () {
            _this3._map.then(function (m) {
              m.setOptions(options);
            });
          });
        }
        /**
         * Creates a google map marker with the map context
         */

      }, {
        key: "createMarker",
        value: function createMarker() {
          var _this4 = this;

          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var addToMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this._zone.runOutsideAngular(function () {
            return _this4._map.then(function (map) {
              if (addToMap) {
                options.map = map;
              }

              return new google.maps.Marker(options);
            });
          });
        }
      }, {
        key: "createInfoWindow",
        value: function createInfoWindow(options) {
          var _this5 = this;

          return this._zone.runOutsideAngular(function () {
            return _this5._map.then(function () {
              return new google.maps.InfoWindow(options);
            });
          });
        }
        /**
         * Creates a google.map.Circle for the current map.
         */

      }, {
        key: "createCircle",
        value: function createCircle(options) {
          var _this6 = this;

          return this._zone.runOutsideAngular(function () {
            return _this6._map.then(function (map) {
              if (typeof options.strokePosition === 'string') {
                options.strokePosition = google.maps.StrokePosition[options.strokePosition];
              }

              options.map = map;
              return new google.maps.Circle(options);
            });
          });
        }
        /**
         * Creates a google.map.Rectangle for the current map.
         */

      }, {
        key: "createRectangle",
        value: function createRectangle(options) {
          var _this7 = this;

          return this._zone.runOutsideAngular(function () {
            return _this7._map.then(function (map) {
              options.map = map;
              return new google.maps.Rectangle(options);
            });
          });
        }
      }, {
        key: "createPolyline",
        value: function createPolyline(options) {
          var _this8 = this;

          return this._zone.runOutsideAngular(function () {
            return _this8.getNativeMap().then(function (map) {
              var line = new google.maps.Polyline(options);
              line.setMap(map);
              return line;
            });
          });
        }
      }, {
        key: "createPolygon",
        value: function createPolygon(options) {
          var _this9 = this;

          return this._zone.runOutsideAngular(function () {
            return _this9.getNativeMap().then(function (map) {
              var polygon = new google.maps.Polygon(options);
              polygon.setMap(map);
              return polygon;
            });
          });
        }
        /**
         * Creates a new google.map.Data layer for the current map
         */

      }, {
        key: "createDataLayer",
        value: function createDataLayer(options) {
          var _this10 = this;

          return this._zone.runOutsideAngular(function () {
            return _this10._map.then(function (m) {
              var data = new google.maps.Data(options);
              data.setMap(m);
              return data;
            });
          });
        }
        /**
         * Creates a TransitLayer instance for a map
         * @param {TransitLayerOptions} options - used for setting layer options
         * @returns {Promise<TransitLayer>} a new transit layer object
         */

      }, {
        key: "createTransitLayer",
        value: function createTransitLayer(options) {
          var _this11 = this;

          return this._zone.runOutsideAngular(function () {
            return _this11._map.then(function (map) {
              var newLayer = new google.maps.TransitLayer();
              newLayer.setMap(options.visible ? map : null);
              return newLayer;
            });
          });
        }
        /**
         * Creates a BicyclingLayer instance for a map
         * @param {BicyclingLayerOptions} options - used for setting layer options
         * @returns {Promise<BicyclingLayer>} a new bicycling layer object
         */

      }, {
        key: "createBicyclingLayer",
        value: function createBicyclingLayer(options) {
          var _this12 = this;

          return this._zone.runOutsideAngular(function () {
            return _this12._map.then(function (map) {
              var newLayer = new google.maps.BicyclingLayer();
              newLayer.setMap(options.visible ? map : null);
              return newLayer;
            });
          });
        }
        /**
         * Determines if given coordinates are insite a Polygon path.
         */

      }, {
        key: "containsLocation",
        value: function containsLocation(latLng, polygon) {
          return google.maps.geometry.poly.containsLocation(latLng, polygon);
        }
      }, {
        key: "subscribeToMapEvent",
        value: function subscribeToMapEvent(eventName) {
          var _this13 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this13._map.then(function (m) {
              m.addListener(eventName, function (arg) {
                _this13._zone.run(function () {
                  return observer.next(arg);
                });
              });
            });
          });
        }
      }, {
        key: "clearInstanceListeners",
        value: function clearInstanceListeners() {
          var _this14 = this;

          return this._zone.runOutsideAngular(function () {
            _this14._map.then(function (map) {
              google.maps.event.clearInstanceListeners(map);
            });
          });
        }
      }, {
        key: "setCenter",
        value: function setCenter(latLng) {
          var _this15 = this;

          return this._zone.runOutsideAngular(function () {
            return _this15._map.then(function (map) {
              return map.setCenter(latLng);
            });
          });
        }
      }, {
        key: "getZoom",
        value: function getZoom() {
          var _this16 = this;

          return this._zone.runOutsideAngular(function () {
            return _this16._map.then(function (map) {
              return map.getZoom();
            });
          });
        }
      }, {
        key: "getBounds",
        value: function getBounds() {
          var _this17 = this;

          return this._zone.runOutsideAngular(function () {
            return _this17._map.then(function (map) {
              return map.getBounds();
            });
          });
        }
      }, {
        key: "getMapTypeId",
        value: function getMapTypeId() {
          var _this18 = this;

          return this._zone.runOutsideAngular(function () {
            return _this18._map.then(function (map) {
              return map.getMapTypeId();
            });
          });
        }
      }, {
        key: "setZoom",
        value: function setZoom(zoom) {
          var _this19 = this;

          return this._zone.runOutsideAngular(function () {
            return _this19._map.then(function (map) {
              return map.setZoom(zoom);
            });
          });
        }
      }, {
        key: "getCenter",
        value: function getCenter() {
          var _this20 = this;

          return this._zone.runOutsideAngular(function () {
            return _this20._map.then(function (map) {
              return map.getCenter();
            });
          });
        }
      }, {
        key: "panTo",
        value: function panTo(latLng) {
          var _this21 = this;

          return this._zone.runOutsideAngular(function () {
            return _this21._map.then(function (map) {
              return map.panTo(latLng);
            });
          });
        }
      }, {
        key: "panBy",
        value: function panBy(x, y) {
          var _this22 = this;

          return this._zone.runOutsideAngular(function () {
            return _this22._map.then(function (map) {
              return map.panBy(x, y);
            });
          });
        }
      }, {
        key: "fitBounds",
        value: function fitBounds(latLng, padding) {
          var _this23 = this;

          return this._zone.runOutsideAngular(function () {
            return _this23._map.then(function (map) {
              return map.fitBounds(latLng, padding);
            });
          });
        }
      }, {
        key: "panToBounds",
        value: function panToBounds(latLng, padding) {
          var _this24 = this;

          return this._zone.runOutsideAngular(function () {
            return _this24._map.then(function (map) {
              return map.panToBounds(latLng, padding);
            });
          });
        }
        /**
         * Returns the native Google Maps Map instance. Be careful when using this instance directly.
         */

      }, {
        key: "getNativeMap",
        value: function getNativeMap() {
          return this._map;
        }
        /**
         * Triggers the given event name on the map instance.
         */

      }, {
        key: "triggerMapEvent",
        value: function triggerMapEvent(eventName) {
          return this._map.then(function (m) {
            return google.maps.event.trigger(m, eventName);
          });
        }
      }]);

      return GoogleMapsAPIWrapper;
    }();

    GoogleMapsAPIWrapper.ɵfac = function GoogleMapsAPIWrapper_Factory(t) {
      return new (t || GoogleMapsAPIWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MapsAPILoader), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    GoogleMapsAPIWrapper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: GoogleMapsAPIWrapper,
      factory: GoogleMapsAPIWrapper.ɵfac
    });

    GoogleMapsAPIWrapper.ctorParameters = function () {
      return [{
        type: MapsAPILoader
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    GoogleMapsAPIWrapper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MapsAPILoader, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], GoogleMapsAPIWrapper);
    /**
     * This class manages Transit and Bicycling Layers for a Google Map instance.
     */

    var LayerManager =
    /*#__PURE__*/
    function () {
      function LayerManager(_wrapper) {
        _classCallCheck(this, LayerManager);

        this._wrapper = _wrapper;
        this._layers = new Map();
      }
      /**
       * Adds a transit layer to a map instance.
       * @param {AgmTransitLayer} layer - a TransitLayer object
       * @param {TransitLayerOptions} options - TransitLayerOptions options
       * @returns void
       */


      _createClass(LayerManager, [{
        key: "addTransitLayer",
        value: function addTransitLayer(layer, options) {
          var newLayer = this._wrapper.createTransitLayer(options);

          this._layers.set(layer, newLayer);
        }
        /**
         * Adds a bicycling layer to a map instance.
         * @param {AgmBicyclingLayer} layer - a bicycling layer object
         * @param {BicyclingLayerOptions} options - BicyclingLayer options
         * @returns void
         */

      }, {
        key: "addBicyclingLayer",
        value: function addBicyclingLayer(layer, options) {
          var newLayer = this._wrapper.createBicyclingLayer(options);

          this._layers.set(layer, newLayer);
        }
        /**
         * Deletes a map layer
         * @param {AgmTransitLayer|AgmBicyclingLayer} layer - the layer to delete
         * @returns  Promise<void>
         */

      }, {
        key: "deleteLayer",
        value: function deleteLayer(layer) {
          var _this25 = this;

          return this._layers.get(layer).then(function (currentLayer) {
            currentLayer.setMap(null);

            _this25._layers.delete(layer);
          });
        }
        /**
         * Hide/Show a google map layer
         * @param { AgmTransitLayer|AgmBicyclingLayer} layer - the layer to hide/show
         * @param {TransitLayerOptions|BicyclingLayerOptions} options - used to set visibility of the layer
         * @returns Promise<void>
         */

      }, {
        key: "toggleLayerVisibility",
        value: function toggleLayerVisibility(layer, options) {
          var _this26 = this;

          return this._layers.get(layer).then(function (currentLayer) {
            if (!options.visible) {
              currentLayer.setMap(null);
              return;
            } else {
              return _this26._wrapper.getNativeMap().then(function (map) {
                currentLayer.setMap(map);
              });
            }
          });
        }
      }]);

      return LayerManager;
    }();

    LayerManager.ɵfac = function LayerManager_Factory(t) {
      return new (t || LayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper));
    };

    LayerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LayerManager,
      factory: LayerManager.ɵfac
    });

    LayerManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }];
    };

    LayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper])], LayerManager);
    var layerId = 0;
    /*
     * This directive adds a bicycling layer to a google map instance
     * <agm-bicycling-layer [visible]="true|false"> <agm-bicycling-layer>
     * */

    var AgmBicyclingLayer =
    /*#__PURE__*/
    function () {
      function AgmBicyclingLayer(_manager) {
        _classCallCheck(this, AgmBicyclingLayer);

        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        /**
         * Hide/show bicycling layer
         */

        this.visible = true;
      }

      _createClass(AgmBicyclingLayer, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this._addedToManager) {
            return;
          }

          this._manager.addBicyclingLayer(this, {
            visible: this.visible
          });

          this._addedToManager = true;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._addedToManager) {
            return;
          }

          if (changes['visible'] != null) {
            this._manager.toggleLayerVisibility(this, {
              visible: changes['visible'].currentValue
            });
          }
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return "AgmBicyclingLayer-".concat(this._id.toString());
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._manager.deleteLayer(this);
        }
      }]);

      return AgmBicyclingLayer;
    }();

    AgmBicyclingLayer.ɵfac = function AgmBicyclingLayer_Factory(t) {
      return new (t || AgmBicyclingLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerManager));
    };

    AgmBicyclingLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmBicyclingLayer,
      selectors: [["agm-bicycling-layer"]],
      inputs: {
        visible: "visible"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()]
    });

    AgmBicyclingLayer.ctorParameters = function () {
      return [{
        type: LayerManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmBicyclingLayer.prototype, "visible", void 0);
    AgmBicyclingLayer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [LayerManager])], AgmBicyclingLayer);

    var CircleManager =
    /*#__PURE__*/
    function () {
      function CircleManager(_apiWrapper, _zone) {
        _classCallCheck(this, CircleManager);

        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
      }

      _createClass(CircleManager, [{
        key: "addCircle",
        value: function addCircle(circle) {
          this._circles.set(circle, this._apiWrapper.createCircle({
            center: {
              lat: circle.latitude,
              lng: circle.longitude
            },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
          }));
        }
        /**
         * Removes the given circle from the map.
         */

      }, {
        key: "removeCircle",
        value: function removeCircle(circle) {
          var _this27 = this;

          return this._circles.get(circle).then(function (c) {
            c.setMap(null);

            _this27._circles.delete(circle);
          });
        }
      }, {
        key: "setOptions",
        value: function setOptions(circle, options) {
          return this._circles.get(circle).then(function (c) {
            if (typeof options.strokePosition === 'string') {
              options.strokePosition = google.maps.StrokePosition[options.strokePosition];
            }

            c.setOptions(options);
          });
        }
      }, {
        key: "getBounds",
        value: function getBounds(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.getBounds();
          });
        }
      }, {
        key: "getCenter",
        value: function getCenter(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.getCenter();
          });
        }
      }, {
        key: "getRadius",
        value: function getRadius(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.getRadius();
          });
        }
      }, {
        key: "setCenter",
        value: function setCenter(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.setCenter({
              lat: circle.latitude,
              lng: circle.longitude
            });
          });
        }
      }, {
        key: "setEditable",
        value: function setEditable(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.setEditable(circle.editable);
          });
        }
      }, {
        key: "setDraggable",
        value: function setDraggable(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.setDraggable(circle.draggable);
          });
        }
      }, {
        key: "setVisible",
        value: function setVisible(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.setVisible(circle.visible);
          });
        }
      }, {
        key: "setRadius",
        value: function setRadius(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.setRadius(circle.radius);
          });
        }
      }, {
        key: "getNativeCircle",
        value: function getNativeCircle(circle) {
          return this._circles.get(circle);
        }
      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, circle) {
          var _this28 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var listener = null;

            _this28._circles.get(circle).then(function (c) {
              listener = c.addListener(eventName, function (e) {
                return _this28._zone.run(function () {
                  return observer.next(e);
                });
              });
            });

            return function () {
              if (listener !== null) {
                listener.remove();
              }
            };
          });
        }
      }]);

      return CircleManager;
    }();

    CircleManager.ɵfac = function CircleManager_Factory(t) {
      return new (t || CircleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    CircleManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CircleManager,
      factory: CircleManager.ɵfac
    });

    CircleManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    CircleManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], CircleManager);
    var AgmCircle_1;

    var AgmCircle = AgmCircle_1 =
    /*#__PURE__*/
    function () {
      function AgmCircle(_manager) {
        _classCallCheck(this, AgmCircle);

        this._manager = _manager;
        /**
         * Indicates whether this Circle handles mouse events. Defaults to true.
         */

        this.clickable = true;
        /**
         * If set to true, the user can drag this circle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = false;
        /**
         * If set to true, the user can edit this circle by dragging the control points shown at
         * the center and around the circumference of the circle. Defaults to false.
         */

        this.editable = false;
        /**
         * The radius in meters on the Earth's surface.
         */

        this.radius = 0;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */

        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */

        this.strokeWeight = 0;
        /**
         * Whether this circle is visible on the map. Defaults to true.
         */

        this.visible = true;
        /**
         * This event is fired when the circle's center is changed.
         */

        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */

        this.circleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */

        this.circleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the circle.
         */

        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the circle.
         */

        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the circle.
         */

        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the circle.
         */

        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the circle.
         */

        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on circle mouseout.
         */

        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on circle mouseover.
         */

        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mouseup event is fired on the circle.
         */

        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the circle's radius is changed.
         */

        this.radiusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the circle is right-clicked on.
         */

        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
      }
      /** @internal */


      _createClass(AgmCircle, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._manager.addCircle(this);

          this._circleAddedToManager = true;

          this._registerEventListeners();
        }
        /** @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._circleAddedToManager) {
            return;
          }

          if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
          }

          if (changes['editable']) {
            this._manager.setEditable(this);
          }

          if (changes['draggable']) {
            this._manager.setDraggable(this);
          }

          if (changes['visible']) {
            this._manager.setVisible(this);
          }

          if (changes['radius']) {
            this._manager.setRadius(this);
          }

          this._updateCircleOptionsChanges(changes);
        }
      }, {
        key: "_updateCircleOptionsChanges",
        value: function _updateCircleOptionsChanges(changes) {
          var options = {};
          var optionKeys = Object.keys(changes).filter(function (k) {
            return AgmCircle_1._mapOptions.indexOf(k) !== -1;
          });
          optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
          });

          if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
          }
        }
      }, {
        key: "_registerEventListeners",
        value: function _registerEventListeners() {
          var _this29 = this;

          var events = new Map();
          events.set('center_changed', this.centerChange);
          events.set('click', this.circleClick);
          events.set('dblclick', this.circleDblClick);
          events.set('drag', this.drag);
          events.set('dragend', this.dragEnd);
          events.set('dragstart', this.dragStart);
          events.set('mousedown', this.mouseDown);
          events.set('mousemove', this.mouseMove);
          events.set('mouseout', this.mouseOut);
          events.set('mouseover', this.mouseOver);
          events.set('mouseup', this.mouseUp);
          events.set('radius_changed', this.radiusChange);
          events.set('rightclick', this.rightClick);
          events.forEach(function (eventEmitter, eventName) {
            _this29._eventSubscriptions.push(_this29._manager.createEventObservable(eventName, _this29).subscribe(function (value) {
              switch (eventName) {
                case 'radius_changed':
                  _this29._manager.getRadius(_this29).then(function (radius) {
                    return eventEmitter.emit(radius);
                  });

                  break;

                case 'center_changed':
                  _this29._manager.getCenter(_this29).then(function (center) {
                    return eventEmitter.emit({
                      lat: center.lat(),
                      lng: center.lng()
                    });
                  });

                  break;

                default:
                  eventEmitter.emit({
                    coords: {
                      lat: value.latLng.lat(),
                      lng: value.latLng.lng()
                    }
                  });
              }
            }));
          });
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._eventSubscriptions.forEach(function (s) {
            s.unsubscribe();
          });

          this._eventSubscriptions = null;

          this._manager.removeCircle(this);
        }
        /**
         * Gets the LatLngBounds of this Circle.
         */

      }, {
        key: "getBounds",
        value: function getBounds() {
          return this._manager.getBounds(this);
        }
      }, {
        key: "getCenter",
        value: function getCenter() {
          return this._manager.getCenter(this);
        }
      }]);

      return AgmCircle;
    }();

    AgmCircle.ɵfac = function AgmCircle_Factory(t) {
      return new (t || AgmCircle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CircleManager));
    };

    AgmCircle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmCircle,
      selectors: [["agm-circle"]],
      inputs: {
        clickable: "clickable",
        draggable: ["circleDraggable", "draggable"],
        editable: "editable",
        radius: "radius",
        strokePosition: "strokePosition",
        strokeWeight: "strokeWeight",
        visible: "visible",
        latitude: "latitude",
        longitude: "longitude",
        fillColor: "fillColor",
        fillOpacity: "fillOpacity",
        strokeColor: "strokeColor",
        strokeOpacity: "strokeOpacity",
        zIndex: "zIndex"
      },
      outputs: {
        centerChange: "centerChange",
        circleClick: "circleClick",
        circleDblClick: "circleDblClick",
        drag: "drag",
        dragEnd: "dragEnd",
        dragStart: "dragStart",
        mouseDown: "mouseDown",
        mouseMove: "mouseMove",
        mouseOut: "mouseOut",
        mouseOver: "mouseOver",
        mouseUp: "mouseUp",
        radiusChange: "radiusChange",
        rightClick: "rightClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()]
    });
    AgmCircle._mapOptions = ['fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'clickable'];

    AgmCircle.ctorParameters = function () {
      return [{
        type: CircleManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "latitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "longitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "clickable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('circleDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "draggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "editable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmCircle.prototype, "fillColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "fillOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "radius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmCircle.prototype, "strokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "strokeOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmCircle.prototype, "strokePosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "strokeWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "visible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "centerChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "circleClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "circleDblClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "drag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "dragEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "dragStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "radiusChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "rightClick", void 0);
    AgmCircle = AgmCircle_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CircleManager])], AgmCircle);
    /**
     * Manages all Data Layers for a Google Map instance.
     */

    var DataLayerManager =
    /*#__PURE__*/
    function () {
      function DataLayerManager(_wrapper, _zone) {
        _classCallCheck(this, DataLayerManager);

        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
      }
      /**
       * Adds a new Data Layer to the map.
       */


      _createClass(DataLayerManager, [{
        key: "addDataLayer",
        value: function addDataLayer(layer) {
          var _this30 = this;

          var newLayer = this._wrapper.createDataLayer({
            style: layer.style
          }).then(function (d) {
            if (layer.geoJson) {
              _this30.getDataFeatures(d, layer.geoJson).then(function (features) {
                return d.features = features;
              });
            }

            return d;
          });

          this._layers.set(layer, newLayer);
        }
      }, {
        key: "deleteDataLayer",
        value: function deleteDataLayer(layer) {
          var _this31 = this;

          this._layers.get(layer).then(function (l) {
            l.setMap(null);

            _this31._layers.delete(layer);
          });
        }
      }, {
        key: "updateGeoJson",
        value: function updateGeoJson(layer, geoJson) {
          var _this32 = this;

          this._layers.get(layer).then(function (l) {
            l.forEach(function (feature) {
              l.remove(feature);
              var index = l.features.indexOf(feature, 0);

              if (index > -1) {
                l.features.splice(index, 1);
              }
            });

            _this32.getDataFeatures(l, geoJson).then(function (features) {
              return l.features = features;
            });
          });
        }
      }, {
        key: "setDataOptions",
        value: function setDataOptions(layer, options) {
          this._layers.get(layer).then(function (l) {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
          });
        }
        /**
         * Creates a Google Maps event listener for the given DataLayer as an Observable
         */

      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, layer) {
          var _this33 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this33._layers.get(layer).then(function (d) {
              d.addListener(eventName, function (e) {
                return _this33._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
        /**
         * Extract features from a geoJson using google.maps Data Class
         * @param d : google.maps.Data class instance
         * @param geoJson : url or geojson object
         */

      }, {
        key: "getDataFeatures",
        value: function getDataFeatures(d, geoJson) {
          return new Promise(function (resolve, reject) {
            if (typeof geoJson === 'object') {
              try {
                var features = d.addGeoJson(geoJson);
                resolve(features);
              } catch (e) {
                reject(e);
              }
            } else if (typeof geoJson === 'string') {
              d.loadGeoJson(geoJson, null, resolve);
            } else {
              reject("Impossible to extract features from geoJson: wrong argument type");
            }
          });
        }
      }]);

      return DataLayerManager;
    }();

    DataLayerManager.ɵfac = function DataLayerManager_Factory(t) {
      return new (t || DataLayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    DataLayerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DataLayerManager,
      factory: DataLayerManager.ɵfac
    });

    DataLayerManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    DataLayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], DataLayerManager);
    var AgmDataLayer_1;
    var layerId$1 = 0;
    /**
     * AgmDataLayer enables the user to add data layers to the map.
     *
     * ### Example
     * ```typescript
     * import { Component } from 'angular2/core';
     * import { AgmMap, AgmDataLayer } from
     * 'angular-google-maps/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  directives: [AgmMap, AgmDataLayer],
     *  styles: [`
     *    .agm-container {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
     * 	  </agm-data-layer>
     * </agm-map>
     *  `
     * })
     * export class MyMapCmp {
     *   lat: number = -25.274449;
     *   lng: number = 133.775060;
     *   zoom: number = 5;
     *
     * clicked(clickEvent) {
     *    console.log(clickEvent);
     *  }
     *
     *  styleFunc(feature) {
     *    return ({
     *      clickable: false,
     *      fillColor: feature.getProperty('color'),
     *      strokeWeight: 1
     *    });
     *  }
     *
     *  geoJsonObject: Object = {
     *    "type": "FeatureCollection",
     *    "features": [
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "G",
     *          "color": "blue",
     *          "rank": "7",
     *          "ascii": "71"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
     *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
     *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
     *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
     *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
     *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
     *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
     *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "o",
     *          "color": "red",
     *          "rank": "15",
     *          "ascii": "111"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
     *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
     *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
     *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
     *            ],
     *            [
     *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
     *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "o",
     *          "color": "yellow",
     *          "rank": "15",
     *          "ascii": "111"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
     *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
     *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
     *              [132.71, -25.64], [131.87, -25.76]
     *            ],
     *            [
     *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
     *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "g",
     *          "color": "blue",
     *          "rank": "7",
     *          "ascii": "103"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
     *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
     *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
     *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
     *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
     *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
     *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
     *            ],
     *            [
     *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
     *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "l",
     *          "color": "green",
     *          "rank": "12",
     *          "ascii": "108"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "e",
     *          "color": "red",
     *          "rank": "5",
     *          "ascii": "101"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
     *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
     *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
     *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
     *              [144.31, -28.26], [144.14, -27.41]
     *            ],
     *            [
     *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
     *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
     *            ]
     *          ]
     *        }
     *      }
     *    ]
     *  };
     * }
     * ```
     */

    var AgmDataLayer = AgmDataLayer_1 =
    /*#__PURE__*/
    function () {
      function AgmDataLayer(_manager) {
        _classCallCheck(this, AgmDataLayer);

        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId$1++).toString();
        this._subscriptions = [];
        /**
         * This event is fired when a feature in the layer is clicked.
         */

        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The geoJson to be displayed
         */

        this.geoJson = null;
      }

      _createClass(AgmDataLayer, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this._addedToManager) {
            return;
          }

          this._manager.addDataLayer(this);

          this._addedToManager = true;

          this._addEventListeners();
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this34 = this;

          var listeners = [{
            name: 'click',
            handler: function handler(ev) {
              return _this34.layerClick.emit(ev);
            }
          }];
          listeners.forEach(function (obj) {
            var os = _this34._manager.createEventObservable(obj.name, _this34).subscribe(obj.handler);

            _this34._subscriptions.push(os);
          });
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return "AgmDataLayer-".concat(this._id.toString());
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._manager.deleteDataLayer(this); // unsubscribe all registered observable subscriptions


          this._subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
        /** @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this35 = this;

          if (!this._addedToManager) {
            return;
          }

          var geoJsonChange = changes['geoJson'];

          if (geoJsonChange) {
            this._manager.updateGeoJson(this, geoJsonChange.currentValue);
          }

          var dataOptions = {};

          AgmDataLayer_1._dataOptionsAttributes.forEach(function (k) {
            return dataOptions[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : _this35[k];
          });

          this._manager.setDataOptions(this, dataOptions);
        }
      }]);

      return AgmDataLayer;
    }();

    AgmDataLayer.ɵfac = function AgmDataLayer_Factory(t) {
      return new (t || AgmDataLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DataLayerManager));
    };

    AgmDataLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmDataLayer,
      selectors: [["agm-data-layer"]],
      inputs: {
        geoJson: "geoJson",
        style: "style"
      },
      outputs: {
        layerClick: "layerClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()]
    });
    AgmDataLayer._dataOptionsAttributes = ['style'];

    AgmDataLayer.ctorParameters = function () {
      return [{
        type: DataLayerManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmDataLayer.prototype, "layerClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmDataLayer.prototype, "geoJson", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], AgmDataLayer.prototype, "style", void 0);
    AgmDataLayer = AgmDataLayer_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DataLayerManager])], AgmDataLayer);
    /**
     * Class to implement when you what to be able to make it work with the auto fit bounds feature
     * of AGM.
     */

    var FitBoundsAccessor = function FitBoundsAccessor() {
      _classCallCheck(this, FitBoundsAccessor);
    };
    /**
     * The FitBoundsService is responsible for computing the bounds of the a single map.
     */


    var FitBoundsService =
    /*#__PURE__*/
    function () {
      function FitBoundsService(loader) {
        var _this36 = this;

        _classCallCheck(this, FitBoundsService);

        this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](200);
        this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Map());
        this.bounds$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(loader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function () {
          return _this36._includeInBounds$;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["sample"])(this._boundsChangeSampleTime$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (time) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, time);
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (includeInBounds) {
          return _this36._generateBounds(includeInBounds);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
      }

      _createClass(FitBoundsService, [{
        key: "_generateBounds",
        value: function _generateBounds(includeInBounds) {
          var bounds = new google.maps.LatLngBounds();
          includeInBounds.forEach(function (b) {
            return bounds.extend(b);
          });
          return bounds;
        }
      }, {
        key: "addToBounds",
        value: function addToBounds(latLng) {
          var id = this._createIdentifier(latLng);

          if (this._includeInBounds$.value.has(id)) {
            return;
          }

          var map = this._includeInBounds$.value;
          map.set(id, latLng);

          this._includeInBounds$.next(map);
        }
      }, {
        key: "removeFromBounds",
        value: function removeFromBounds(latLng) {
          var map = this._includeInBounds$.value;
          map.delete(this._createIdentifier(latLng));

          this._includeInBounds$.next(map);
        }
      }, {
        key: "changeFitBoundsChangeSampleTime",
        value: function changeFitBoundsChangeSampleTime(timeMs) {
          this._boundsChangeSampleTime$.next(timeMs);
        }
      }, {
        key: "getBounds$",
        value: function getBounds$() {
          return this.bounds$;
        }
      }, {
        key: "_createIdentifier",
        value: function _createIdentifier(latLng) {
          return "".concat(latLng.lat, "+").concat(latLng.lng);
        }
      }]);

      return FitBoundsService;
    }();

    FitBoundsService.ɵfac = function FitBoundsService_Factory(t) {
      return new (t || FitBoundsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MapsAPILoader));
    };

    FitBoundsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FitBoundsService,
      factory: FitBoundsService.ɵfac
    });

    FitBoundsService.ctorParameters = function () {
      return [{
        type: MapsAPILoader
      }];
    };

    FitBoundsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MapsAPILoader])], FitBoundsService);
    /**
     * Adds the given directive to the auto fit bounds feature when the value is true.
     * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
     * @example
     * <agm-marker [agmFitBounds]="true"></agm-marker>
     */

    var AgmFitBounds =
    /*#__PURE__*/
    function () {
      function AgmFitBounds(_fitBoundsAccessor, _fitBoundsService) {
        _classCallCheck(this, AgmFitBounds);

        this._fitBoundsAccessor = _fitBoundsAccessor;
        this._fitBoundsService = _fitBoundsService;
        /**
         * If the value is true, the element gets added to the bounds of the map.
         * Default: true.
         */

        this.agmFitBounds = true;
        this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._latestFitBoundsDetails = null;
      }
      /**
       * @internal
       */


      _createClass(AgmFitBounds, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this._updateBounds();
        }
        /**
         * @internal
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this37 = this;

          this._fitBoundsAccessor.getFitBoundsDetails$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (x, y) {
            return x.latLng.lat === y.latLng.lat && x.latLng.lng === y.latLng.lng;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed$)).subscribe(function (details) {
            return _this37._updateBounds(details);
          });
        }
        /*
         Either the location changed, or visible status changed.
         Possible state changes are
         invisible -> visible
         visible -> invisible
         visible -> visible (new location)
        */

      }, {
        key: "_updateBounds",
        value: function _updateBounds(newFitBoundsDetails) {
          // either visibility will change, or location, so remove the old one anyway
          if (this._latestFitBoundsDetails) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng); // don't set latestFitBoundsDetails to null, because we can toggle visibility from
            // true -> false -> true, in which case we still need old value cached here

          }

          if (newFitBoundsDetails) {
            this._latestFitBoundsDetails = newFitBoundsDetails;
          }

          if (!this._latestFitBoundsDetails) {
            return;
          }

          if (this.agmFitBounds === true) {
            this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
          }
        }
        /**
         * @internal
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed$.next();

          this._destroyed$.complete();

          if (this._latestFitBoundsDetails !== null) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
          }
        }
      }]);

      return AgmFitBounds;
    }();

    AgmFitBounds.ɵfac = function AgmFitBounds_Factory(t) {
      return new (t || AgmFitBounds)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FitBoundsAccessor, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FitBoundsService));
    };

    AgmFitBounds.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmFitBounds,
      selectors: [["", "agmFitBounds", ""]],
      inputs: {
        agmFitBounds: "agmFitBounds"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()]
    });

    AgmFitBounds.ctorParameters = function () {
      return [{
        type: FitBoundsAccessor,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
        }]
      }, {
        type: FitBoundsService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmFitBounds.prototype, "agmFitBounds", void 0);
    AgmFitBounds = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [FitBoundsAccessor, FitBoundsService])], AgmFitBounds);

    var MarkerManager =
    /*#__PURE__*/
    function () {
      function MarkerManager(_mapsWrapper, _zone) {
        _classCallCheck(this, MarkerManager);

        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
      }

      _createClass(MarkerManager, [{
        key: "convertAnimation",
        value: function convertAnimation(uiAnim) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(uiAnim === null)) {
                      _context.next = 4;
                      break;
                    }

                    return _context.abrupt("return", null);

                  case 4:
                    return _context.abrupt("return", this._mapsWrapper.getNativeMap().then(function () {
                      return google.maps.Animation[uiAnim];
                    }));

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "deleteMarker",
        value: function deleteMarker(marker) {
          var _this38 = this;

          var m = this._markers.get(marker);

          if (m == null) {
            // marker already deleted
            return Promise.resolve();
          }

          return m.then(function (m) {
            return _this38._zone.run(function () {
              m.setMap(null);

              _this38._markers.delete(marker);
            });
          });
        }
      }, {
        key: "updateMarkerPosition",
        value: function updateMarkerPosition(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setPosition({
              lat: marker.latitude,
              lng: marker.longitude
            });
          });
        }
      }, {
        key: "updateTitle",
        value: function updateTitle(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setTitle(marker.title);
          });
        }
      }, {
        key: "updateLabel",
        value: function updateLabel(marker) {
          return this._markers.get(marker).then(function (m) {
            m.setLabel(marker.label);
          });
        }
      }, {
        key: "updateDraggable",
        value: function updateDraggable(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setDraggable(marker.draggable);
          });
        }
      }, {
        key: "updateIcon",
        value: function updateIcon(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setIcon(marker.iconUrl);
          });
        }
      }, {
        key: "updateOpacity",
        value: function updateOpacity(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setOpacity(marker.opacity);
          });
        }
      }, {
        key: "updateVisible",
        value: function updateVisible(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setVisible(marker.visible);
          });
        }
      }, {
        key: "updateZIndex",
        value: function updateZIndex(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setZIndex(marker.zIndex);
          });
        }
      }, {
        key: "updateClickable",
        value: function updateClickable(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setClickable(marker.clickable);
          });
        }
      }, {
        key: "updateAnimation",
        value: function updateAnimation(marker) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var m;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this._markers.get(marker);

                  case 2:
                    m = _context2.sent;
                    _context2.t0 = m;
                    _context2.next = 6;
                    return this.convertAnimation(marker.animation);

                  case 6:
                    _context2.t1 = _context2.sent;

                    _context2.t0.setAnimation.call(_context2.t0, _context2.t1);

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "addMarker",
        value: function addMarker(marker) {
          var _this39 = this;

          var markerPromise = new Promise(function (resolve) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this39, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.t0 = this._mapsWrapper;
                      _context3.t1 = {
                        lat: marker.latitude,
                        lng: marker.longitude
                      };
                      _context3.t2 = marker.label;
                      _context3.t3 = marker.draggable;
                      _context3.t4 = marker.iconUrl;
                      _context3.t5 = marker.opacity;
                      _context3.t6 = marker.visible;
                      _context3.t7 = marker.zIndex;
                      _context3.t8 = marker.title;
                      _context3.t9 = marker.clickable;
                      _context3.next = 12;
                      return this.convertAnimation(marker.animation);

                    case 12:
                      _context3.t10 = _context3.sent;
                      _context3.t11 = {
                        position: _context3.t1,
                        label: _context3.t2,
                        draggable: _context3.t3,
                        icon: _context3.t4,
                        opacity: _context3.t5,
                        visible: _context3.t6,
                        zIndex: _context3.t7,
                        title: _context3.t8,
                        clickable: _context3.t9,
                        animation: _context3.t10
                      };
                      _context3.t12 = resolve;
                      return _context3.abrupt("return", _context3.t0.createMarker.call(_context3.t0, _context3.t11).then(_context3.t12));

                    case 16:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          });

          this._markers.set(marker, markerPromise);
        }
      }, {
        key: "getNativeMarker",
        value: function getNativeMarker(marker) {
          return this._markers.get(marker);
        }
      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, marker) {
          var _this40 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this40._markers.get(marker).then(function (m) {
              m.addListener(eventName, function (e) {
                return _this40._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
      }]);

      return MarkerManager;
    }();

    MarkerManager.ɵfac = function MarkerManager_Factory(t) {
      return new (t || MarkerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    MarkerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MarkerManager,
      factory: MarkerManager.ɵfac
    });

    MarkerManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    MarkerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], MarkerManager);

    var InfoWindowManager =
    /*#__PURE__*/
    function () {
      function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        _classCallCheck(this, InfoWindowManager);

        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
      }

      _createClass(InfoWindowManager, [{
        key: "deleteInfoWindow",
        value: function deleteInfoWindow(infoWindow) {
          var _this41 = this;

          var iWindow = this._infoWindows.get(infoWindow);

          if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
          }

          return iWindow.then(function (i) {
            return _this41._zone.run(function () {
              i.close();

              _this41._infoWindows.delete(infoWindow);
            });
          });
        }
      }, {
        key: "setPosition",
        value: function setPosition(infoWindow) {
          return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setPosition({
              lat: infoWindow.latitude,
              lng: infoWindow.longitude
            });
          });
        }
      }, {
        key: "setZIndex",
        value: function setZIndex(infoWindow) {
          return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setZIndex(infoWindow.zIndex);
          });
        }
      }, {
        key: "open",
        value: function open(infoWindow) {
          var _this42 = this;

          return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
              return _this42._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                return _this42._mapsWrapper.getNativeMap().then(function (map) {
                  return w.open(map, marker);
                });
              });
            }

            return _this42._mapsWrapper.getNativeMap().then(function (map) {
              return w.open(map);
            });
          });
        }
      }, {
        key: "close",
        value: function close(infoWindow) {
          return this._infoWindows.get(infoWindow).then(function (w) {
            return w.close();
          });
        }
      }, {
        key: "setOptions",
        value: function setOptions(infoWindow, options) {
          return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setOptions(options);
          });
        }
      }, {
        key: "addInfoWindow",
        value: function addInfoWindow(infoWindow) {
          var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan
          };

          if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = {
              lat: infoWindow.latitude,
              lng: infoWindow.longitude
            };
          }

          var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);

          this._infoWindows.set(infoWindow, infoWindowPromise);
        }
        /**
         * Creates a Google Maps event listener for the given InfoWindow as an Observable
         */

      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, infoWindow) {
          var _this43 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this43._infoWindows.get(infoWindow).then(function (i) {
              i.addListener(eventName, function (e) {
                return _this43._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
      }]);

      return InfoWindowManager;
    }();

    InfoWindowManager.ɵfac = function InfoWindowManager_Factory(t) {
      return new (t || InfoWindowManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MarkerManager));
    };

    InfoWindowManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: InfoWindowManager,
      factory: InfoWindowManager.ɵfac
    });

    InfoWindowManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: MarkerManager
      }];
    };

    InfoWindowManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], MarkerManager])], InfoWindowManager);
    var AgmInfoWindow_1;
    var infoWindowId = 0;
    /**
     * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    .agm-map-container {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
     *        <agm-info-window [disableAutoPan]="true">
     *          Hi, this is the content of the <strong>info window</strong>
     *        </agm-info-window>
     *      </agm-marker>
     *    </agm-map>
     *  `
     * })
     * ```
     */

    var AgmInfoWindow = AgmInfoWindow_1 =
    /*#__PURE__*/
    function () {
      function AgmInfoWindow(_infoWindowManager, _el) {
        _classCallCheck(this, AgmInfoWindow);

        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
         * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
         */

        this.isOpen = false;
        /**
         * Emits an event when the info window is closed.
         */

        this.infoWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
      }

      _createClass(AgmInfoWindow, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.content = this._el.nativeElement.querySelector('.agm-info-window-content');

          this._infoWindowManager.addInfoWindow(this);

          this._infoWindowAddedToManager = true;

          this._updateOpenState();

          this._registerEventListeners();
        }
        /** @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._infoWindowAddedToManager) {
            return;
          }

          if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' && typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
          }

          if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
          }

          if (changes['isOpen']) {
            this._updateOpenState();
          }

          this._setInfoWindowOptions(changes);
        }
      }, {
        key: "_registerEventListeners",
        value: function _registerEventListeners() {
          var _this44 = this;

          this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
            _this44.isOpen = false;

            _this44.infoWindowClose.emit();
          });
        }
      }, {
        key: "_updateOpenState",
        value: function _updateOpenState() {
          this.isOpen ? this.open() : this.close();
        }
      }, {
        key: "_setInfoWindowOptions",
        value: function _setInfoWindowOptions(changes) {
          var options = {};
          var optionKeys = Object.keys(changes).filter(function (k) {
            return AgmInfoWindow_1._infoWindowOptionsInputs.indexOf(k) !== -1;
          });
          optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
          });

          this._infoWindowManager.setOptions(this, options);
        }
        /**
         * Opens the info window.
         */

      }, {
        key: "open",
        value: function open() {
          return this._infoWindowManager.open(this);
        }
        /**
         * Closes the info window.
         */

      }, {
        key: "close",
        value: function close() {
          var _this45 = this;

          return this._infoWindowManager.close(this).then(function () {
            _this45.infoWindowClose.emit();
          });
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return 'AgmInfoWindow-' + this._id.toString();
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._infoWindowManager.deleteInfoWindow(this);
        }
      }]);

      return AgmInfoWindow;
    }();

    AgmInfoWindow.ɵfac = function AgmInfoWindow_Factory(t) {
      return new (t || AgmInfoWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](InfoWindowManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    AgmInfoWindow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AgmInfoWindow,
      selectors: [["agm-info-window"]],
      inputs: {
        isOpen: "isOpen",
        latitude: "latitude",
        longitude: "longitude",
        disableAutoPan: "disableAutoPan",
        zIndex: "zIndex",
        maxWidth: "maxWidth"
      },
      outputs: {
        infoWindowClose: "infoWindowClose"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "agm-info-window-content"]],
      template: function AgmInfoWindow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];

    AgmInfoWindow.ctorParameters = function () {
      return [{
        type: InfoWindowManager
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "latitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "longitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmInfoWindow.prototype, "disableAutoPan", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "maxWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmInfoWindow.prototype, "isOpen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmInfoWindow.prototype, "infoWindowClose", void 0);
    AgmInfoWindow = AgmInfoWindow_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [InfoWindowManager, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], AgmInfoWindow);
    /**
     * Manages all KML Layers for a Google Map instance.
     */

    var KmlLayerManager =
    /*#__PURE__*/
    function () {
      function KmlLayerManager(_wrapper, _zone) {
        _classCallCheck(this, KmlLayerManager);

        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
      }
      /**
       * Adds a new KML Layer to the map.
       */


      _createClass(KmlLayerManager, [{
        key: "addKmlLayer",
        value: function addKmlLayer(layer) {
          var newLayer = this._wrapper.getNativeMap().then(function (m) {
            return new google.maps.KmlLayer({
              clickable: layer.clickable,
              map: m,
              preserveViewport: layer.preserveViewport,
              screenOverlays: layer.screenOverlays,
              suppressInfoWindows: layer.suppressInfoWindows,
              url: layer.url,
              zIndex: layer.zIndex
            });
          });

          this._layers.set(layer, newLayer);
        }
      }, {
        key: "setOptions",
        value: function setOptions(layer, options) {
          this._layers.get(layer).then(function (l) {
            return l.setOptions(options);
          });
        }
      }, {
        key: "deleteKmlLayer",
        value: function deleteKmlLayer(layer) {
          var _this46 = this;

          this._layers.get(layer).then(function (l) {
            l.setMap(null);

            _this46._layers.delete(layer);
          });
        }
        /**
         * Creates a Google Maps event listener for the given KmlLayer as an Observable
         */

      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, layer) {
          var _this47 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this47._layers.get(layer).then(function (m) {
              m.addListener(eventName, function (e) {
                return _this47._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
      }]);

      return KmlLayerManager;
    }();

    KmlLayerManager.ɵfac = function KmlLayerManager_Factory(t) {
      return new (t || KmlLayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    KmlLayerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: KmlLayerManager,
      factory: KmlLayerManager.ɵfac
    });

    KmlLayerManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    KmlLayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], KmlLayerManager);
    var AgmKmlLayer_1;
    var layerId$2 = 0;

    var AgmKmlLayer = AgmKmlLayer_1 =
    /*#__PURE__*/
    function () {
      function AgmKmlLayer(_manager) {
        _classCallCheck(this, AgmKmlLayer);

        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId$2++).toString();
        this._subscriptions = [];
        /**
         * If true, the layer receives mouse events. Default value is true.
         */

        this.clickable = true;
        /**
         * By default, the input map is centered and zoomed to the bounding box of the contents of the
         * layer.
         * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
         * were never set.
         */

        this.preserveViewport = false;
        /**
         * Whether to render the screen overlays. Default true.
         */

        this.screenOverlays = true;
        /**
         * Suppress the rendering of info windows when layer features are clicked.
         */

        this.suppressInfoWindows = false;
        /**
         * The URL of the KML document to display.
         */

        this.url = null;
        /**
         * The z-index of the layer.
         */

        this.zIndex = null;
        /**
         * This event is fired when a feature in the layer is clicked.
         */

        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the KML layers default viewport has changed.
         */

        this.defaultViewportChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the KML layer has finished loading.
         * At this point it is safe to read the status property to determine if the layer loaded
         * successfully.
         */

        this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AgmKmlLayer, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this._addedToManager) {
            return;
          }

          this._manager.addKmlLayer(this);

          this._addedToManager = true;

          this._addEventListeners();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._addedToManager) {
            return;
          }

          this._updatePolygonOptions(changes);
        }
      }, {
        key: "_updatePolygonOptions",
        value: function _updatePolygonOptions(changes) {
          var options = Object.keys(changes).filter(function (k) {
            return AgmKmlLayer_1._kmlLayerOptions.indexOf(k) !== -1;
          }).reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
          }, {});

          if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
          }
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this48 = this;

          var listeners = [{
            name: 'click',
            handler: function handler(ev) {
              return _this48.layerClick.emit(ev);
            }
          }, {
            name: 'defaultviewport_changed',
            handler: function handler() {
              return _this48.defaultViewportChange.emit();
            }
          }, {
            name: 'status_changed',
            handler: function handler() {
              return _this48.statusChange.emit();
            }
          }];
          listeners.forEach(function (obj) {
            var os = _this48._manager.createEventObservable(obj.name, _this48).subscribe(obj.handler);

            _this48._subscriptions.push(os);
          });
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return "AgmKmlLayer-".concat(this._id.toString());
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._manager.deleteKmlLayer(this); // unsubscribe all registered observable subscriptions


          this._subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }]);

      return AgmKmlLayer;
    }();

    AgmKmlLayer.ɵfac = function AgmKmlLayer_Factory(t) {
      return new (t || AgmKmlLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](KmlLayerManager));
    };

    AgmKmlLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmKmlLayer,
      selectors: [["agm-kml-layer"]],
      inputs: {
        clickable: "clickable",
        preserveViewport: "preserveViewport",
        screenOverlays: "screenOverlays",
        suppressInfoWindows: "suppressInfoWindows",
        url: "url",
        zIndex: "zIndex"
      },
      outputs: {
        layerClick: "layerClick",
        defaultViewportChange: "defaultViewportChange",
        statusChange: "statusChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()]
    });
    AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];

    AgmKmlLayer.ctorParameters = function () {
      return [{
        type: KmlLayerManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "clickable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "preserveViewport", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "screenOverlays", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "suppressInfoWindows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmKmlLayer.prototype, "url", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmKmlLayer.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmKmlLayer.prototype, "layerClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmKmlLayer.prototype, "defaultViewportChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmKmlLayer.prototype, "statusChange", void 0);
    AgmKmlLayer = AgmKmlLayer_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KmlLayerManager])], AgmKmlLayer);

    function createMVCEventObservable(array) {
      var eventNames = ['insert_at', 'remove_at', 'set_at'];
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEventPattern"])(function (handler) {
        return eventNames.map(function (evName) {
          return array.addListener(evName, function (index, previous) {
            return handler.apply(array, [{
              'newArr': array.getArray(),
              evName: evName,
              index: index,
              previous: previous
            }]);
          });
        });
      }, function (_handler, evListeners) {
        return evListeners.forEach(function (evListener) {
          return evListener.remove();
        });
      });
    }

    var MvcArrayMock =
    /*#__PURE__*/
    function () {
      function MvcArrayMock() {
        _classCallCheck(this, MvcArrayMock);

        this.vals = [];
        this.listeners = {
          'remove_at': [],
          'insert_at': [],
          'set_at': []
        };
      }

      _createClass(MvcArrayMock, [{
        key: "clear",
        value: function clear() {
          for (var i = this.vals.length - 1; i >= 0; i--) {
            this.removeAt(i);
          }
        }
      }, {
        key: "getArray",
        value: function getArray() {
          return _toConsumableArray(this.vals);
        }
      }, {
        key: "getAt",
        value: function getAt(i) {
          return this.vals[i];
        }
      }, {
        key: "getLength",
        value: function getLength() {
          return this.vals.length;
        }
      }, {
        key: "insertAt",
        value: function insertAt(i, elem) {
          this.vals.splice(i, 0, elem);
          this.listeners.insert_at.map(function (listener) {
            return listener(i);
          });
        }
      }, {
        key: "pop",
        value: function pop() {
          var _this49 = this;

          var deleted = this.vals.pop();
          this.listeners.remove_at.map(function (listener) {
            return listener(_this49.vals.length, deleted);
          });
          return deleted;
        }
      }, {
        key: "push",
        value: function push(elem) {
          var _this50 = this;

          this.vals.push(elem);
          this.listeners.insert_at.map(function (listener) {
            return listener(_this50.vals.length - 1);
          });
          return this.vals.length;
        }
      }, {
        key: "removeAt",
        value: function removeAt(i) {
          var deleted = this.vals.splice(i, 1)[0];
          this.listeners.remove_at.map(function (listener) {
            return listener(i, deleted);
          });
          return deleted;
        }
      }, {
        key: "setAt",
        value: function setAt(i, elem) {
          var deleted = this.vals[i];
          this.vals[i] = elem;
          this.listeners.set_at.map(function (listener) {
            return listener(i, deleted);
          });
        }
      }, {
        key: "forEach",
        value: function forEach(callback) {
          this.vals.forEach(callback);
        }
      }, {
        key: "addListener",
        value: function addListener(eventName, handler) {
          var listenerArr = this.listeners[eventName];
          listenerArr.push(handler);
          return {
            remove: function remove() {
              listenerArr.splice(listenerArr.indexOf(handler), 1);
            }
          };
        }
      }]);

      return MvcArrayMock;
    }();

    var PolygonManager =
    /*#__PURE__*/
    function () {
      function PolygonManager(_mapsWrapper, _zone) {
        _classCallCheck(this, PolygonManager);

        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
      }

      _createClass(PolygonManager, [{
        key: "addPolygon",
        value: function addPolygon(path) {
          var polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex
          });

          this._polygons.set(path, polygonPromise);
        }
      }, {
        key: "updatePolygon",
        value: function updatePolygon(polygon) {
          var _this51 = this;

          var m = this._polygons.get(polygon);

          if (m == null) {
            return Promise.resolve();
          }

          return m.then(function (l) {
            return _this51._zone.run(function () {
              l.setPaths(polygon.paths);
            });
          });
        }
      }, {
        key: "setPolygonOptions",
        value: function setPolygonOptions(path, options) {
          return this._polygons.get(path).then(function (l) {
            l.setOptions(options);
          });
        }
      }, {
        key: "deletePolygon",
        value: function deletePolygon(paths) {
          var _this52 = this;

          var m = this._polygons.get(paths);

          if (m == null) {
            return Promise.resolve();
          }

          return m.then(function (l) {
            return _this52._zone.run(function () {
              l.setMap(null);

              _this52._polygons.delete(paths);
            });
          });
        }
      }, {
        key: "getPath",
        value: function getPath(polygon) {
          return this._polygons.get(polygon).then(function (polygon) {
            return polygon.getPath().getArray();
          });
        }
      }, {
        key: "getPaths",
        value: function getPaths(polygon) {
          return this._polygons.get(polygon).then(function (polygon) {
            return polygon.getPaths().getArray().map(function (p) {
              return p.getArray();
            });
          });
        }
      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, path) {
          var _this53 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this53._polygons.get(path).then(function (l) {
              l.addListener(eventName, function (e) {
                return _this53._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
      }, {
        key: "createPathEventObservable",
        value: function createPathEventObservable(agmPolygon) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var polygon, paths, pathsChanges$;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this._polygons.get(agmPolygon);

                  case 2:
                    polygon = _context4.sent;
                    paths = polygon.getPaths();
                    pathsChanges$ = createMVCEventObservable(paths);
                    return _context4.abrupt("return", pathsChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
                      newArr: paths.getArray()
                    }), // in order to subscribe to them all
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (parentMVEvent) {
                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"]).apply(void 0, _toConsumableArray( // rest parameter
                      parentMVEvent.newArr.map(function (chMVC, index) {
                        return createMVCEventObservable(chMVC).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (chMVCEvent) {
                          return {
                            parentMVEvent: parentMVEvent,
                            chMVCEvent: chMVCEvent,
                            pathIndex: index
                          };
                        }));
                      }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
                        parentMVEvent: parentMVEvent,
                        chMVCEvent: null,
                        pathIndex: null
                      }));
                    }), // start the merged ob with an event signinifing change to parent
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), // skip the manually added event
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref) {
                      var parentMVEvent = _ref.parentMVEvent,
                          chMVCEvent = _ref.chMVCEvent,
                          pathIndex = _ref.pathIndex;
                      var retVal;

                      if (!chMVCEvent) {
                        retVal = {
                          newArr: parentMVEvent.newArr.map(function (subArr) {
                            return subArr.getArray().map(function (latLng) {
                              return latLng.toJSON();
                            });
                          }),
                          eventName: parentMVEvent.evName,
                          index: parentMVEvent.index
                        };

                        if (parentMVEvent.previous) {
                          retVal.previous = parentMVEvent.previous.getArray();
                        }
                      } else {
                        retVal = {
                          newArr: parentMVEvent.newArr.map(function (subArr) {
                            return subArr.getArray().map(function (latLng) {
                              return latLng.toJSON();
                            });
                          }),
                          pathIndex: pathIndex,
                          eventName: chMVCEvent.evName,
                          index: chMVCEvent.index
                        };

                        if (chMVCEvent.previous) {
                          retVal.previous = chMVCEvent.previous;
                        }
                      }

                      return retVal;
                    })));

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return PolygonManager;
    }();

    PolygonManager.ɵfac = function PolygonManager_Factory(t) {
      return new (t || PolygonManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    PolygonManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PolygonManager,
      factory: PolygonManager.ɵfac
    });

    PolygonManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    PolygonManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], PolygonManager);
    var PolylineManager_1;

    var PolylineManager = PolylineManager_1 =
    /*#__PURE__*/
    function () {
      function PolylineManager(_mapsWrapper, _zone) {
        _classCallCheck(this, PolylineManager);

        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
      }

      _createClass(PolylineManager, [{
        key: "addPolyline",
        value: function addPolyline(line) {
          var _this54 = this;

          var polylinePromise = this._mapsWrapper.getNativeMap().then(function () {
            return [PolylineManager_1._convertPoints(line), PolylineManager_1._convertIcons(line)];
          }).then(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                path = _ref3[0],
                icons = _ref3[1];

            return _this54._mapsWrapper.createPolyline({
              clickable: line.clickable,
              draggable: line.draggable,
              editable: line.editable,
              geodesic: line.geodesic,
              strokeColor: line.strokeColor,
              strokeOpacity: line.strokeOpacity,
              strokeWeight: line.strokeWeight,
              visible: line.visible,
              zIndex: line.zIndex,
              path: path,
              icons: icons
            });
          });

          this._polylines.set(line, polylinePromise);
        }
      }, {
        key: "updatePolylinePoints",
        value: function updatePolylinePoints(line) {
          var _this55 = this;

          var path = PolylineManager_1._convertPoints(line);

          var m = this._polylines.get(line);

          if (m == null) {
            return Promise.resolve();
          }

          return m.then(function (l) {
            return _this55._zone.run(function () {
              l.setPath(path);
            });
          });
        }
      }, {
        key: "updateIconSequences",
        value: function updateIconSequences(line) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this56 = this;

            var icons, m;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this._mapsWrapper.getNativeMap();

                  case 2:
                    icons = PolylineManager_1._convertIcons(line);
                    m = this._polylines.get(line);

                    if (!(m == null)) {
                      _context5.next = 6;
                      break;
                    }

                    return _context5.abrupt("return");

                  case 6:
                    return _context5.abrupt("return", m.then(function (l) {
                      return _this56._zone.run(function () {
                        return l.setOptions({
                          icons: icons
                        });
                      });
                    }));

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "setPolylineOptions",
        value: function setPolylineOptions(line, options) {
          return this._polylines.get(line).then(function (l) {
            l.setOptions(options);
          });
        }
      }, {
        key: "deletePolyline",
        value: function deletePolyline(line) {
          var _this57 = this;

          var m = this._polylines.get(line);

          if (m == null) {
            return Promise.resolve();
          }

          return m.then(function (l) {
            return _this57._zone.run(function () {
              l.setMap(null);

              _this57._polylines.delete(line);
            });
          });
        }
      }, {
        key: "getMVCPath",
        value: function getMVCPath(agmPolyline) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var polyline;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this._polylines.get(agmPolyline);

                  case 2:
                    polyline = _context6.sent;
                    return _context6.abrupt("return", polyline.getPath());

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "getPath",
        value: function getPath(agmPolyline) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.getMVCPath(agmPolyline);

                  case 2:
                    return _context7.abrupt("return", _context7.sent.getArray());

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, line) {
          var _this58 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this58._polylines.get(line).then(function (l) {
              l.addListener(eventName, function (e) {
                return _this58._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
      }, {
        key: "createPathEventObservable",
        value: function createPathEventObservable(line) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var mvcPath;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.getMVCPath(line);

                  case 2:
                    mvcPath = _context8.sent;
                    return _context8.abrupt("return", createMVCEventObservable(mvcPath));

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }], [{
        key: "_convertPoints",
        value: function _convertPoints(line) {
          var path = line._getPoints().map(function (point) {
            return {
              lat: point.latitude,
              lng: point.longitude
            };
          });

          return path;
        }
      }, {
        key: "_convertPath",
        value: function _convertPath(path) {
          var symbolPath = google.maps.SymbolPath[path];

          if (typeof symbolPath === 'number') {
            return symbolPath;
          } else {
            return path;
          }
        }
      }, {
        key: "_convertIcons",
        value: function _convertIcons(line) {
          var icons = line._getIcons().map(function (agmIcon) {
            return {
              fixedRotation: agmIcon.fixedRotation,
              offset: agmIcon.offset,
              repeat: agmIcon.repeat,
              icon: {
                anchor: new google.maps.Point(agmIcon.anchorX, agmIcon.anchorY),
                fillColor: agmIcon.fillColor,
                fillOpacity: agmIcon.fillOpacity,
                path: PolylineManager_1._convertPath(agmIcon.path),
                rotation: agmIcon.rotation,
                scale: agmIcon.scale,
                strokeColor: agmIcon.strokeColor,
                strokeOpacity: agmIcon.strokeOpacity,
                strokeWeight: agmIcon.strokeWeight
              }
            };
          }); // prune undefineds;


          icons.forEach(function (icon) {
            Object.entries(icon).forEach(function (_ref4) {
              var _ref5 = _slicedToArray(_ref4, 2),
                  key = _ref5[0],
                  val = _ref5[1];

              if (typeof val === 'undefined') {
                delete icon[key];
              }
            });

            if (typeof icon.icon.anchor.x === 'undefined' || typeof icon.icon.anchor.y === 'undefined') {
              delete icon.icon.anchor;
            }
          });
          return icons;
        }
      }]);

      return PolylineManager;
    }();

    PolylineManager.ɵfac = function PolylineManager_Factory(t) {
      return new (t || PolylineManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    PolylineManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PolylineManager,
      factory: PolylineManager.ɵfac
    });

    PolylineManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    PolylineManager = PolylineManager_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], PolylineManager);

    var RectangleManager =
    /*#__PURE__*/
    function () {
      function RectangleManager(_apiWrapper, _zone) {
        _classCallCheck(this, RectangleManager);

        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._rectangles = new Map();
      }

      _createClass(RectangleManager, [{
        key: "addRectangle",
        value: function addRectangle(rectangle) {
          this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
            bounds: {
              north: rectangle.north,
              east: rectangle.east,
              south: rectangle.south,
              west: rectangle.west
            },
            clickable: rectangle.clickable,
            draggable: rectangle.draggable,
            editable: rectangle.editable,
            fillColor: rectangle.fillColor,
            fillOpacity: rectangle.fillOpacity,
            strokeColor: rectangle.strokeColor,
            strokeOpacity: rectangle.strokeOpacity,
            strokePosition: rectangle.strokePosition,
            strokeWeight: rectangle.strokeWeight,
            visible: rectangle.visible,
            zIndex: rectangle.zIndex
          }));
        }
        /**
         * Removes the given rectangle from the map.
         */

      }, {
        key: "removeRectangle",
        value: function removeRectangle(rectangle) {
          var _this59 = this;

          return this._rectangles.get(rectangle).then(function (r) {
            r.setMap(null);

            _this59._rectangles.delete(rectangle);
          });
        }
      }, {
        key: "setOptions",
        value: function setOptions(rectangle, options) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.setOptions(options);
          });
        }
      }, {
        key: "getBounds",
        value: function getBounds(rectangle) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.getBounds();
          });
        }
      }, {
        key: "setBounds",
        value: function setBounds(rectangle) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.setBounds({
              north: rectangle.north,
              east: rectangle.east,
              south: rectangle.south,
              west: rectangle.west
            });
          });
        }
      }, {
        key: "setEditable",
        value: function setEditable(rectangle) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.setEditable(rectangle.editable);
          });
        }
      }, {
        key: "setDraggable",
        value: function setDraggable(rectangle) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.setDraggable(rectangle.draggable);
          });
        }
      }, {
        key: "setVisible",
        value: function setVisible(rectangle) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.setVisible(rectangle.visible);
          });
        }
      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, rectangle) {
          var _this60 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            var listener = null;

            _this60._rectangles.get(rectangle).then(function (r) {
              listener = r.addListener(eventName, function (e) {
                return _this60._zone.run(function () {
                  return observer.next(e);
                });
              });
            });

            return function () {
              if (listener !== null) {
                listener.remove();
              }
            };
          });
        }
      }]);

      return RectangleManager;
    }();

    RectangleManager.ɵfac = function RectangleManager_Factory(t) {
      return new (t || RectangleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    RectangleManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: RectangleManager,
      factory: RectangleManager.ɵfac
    });

    RectangleManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    RectangleManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], RectangleManager);
    var AgmMap_1;
    /**
     * AgmMap renders a Google Map.
     * **Important note**: To be able see a map in the browser, you have to define a height for the
     * element `agm-map`.
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    agm-map {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *    </agm-map>
     *  `
     * })
     * ```
     */

    var AgmMap = AgmMap_1 =
    /*#__PURE__*/
    function () {
      function AgmMap(_elem, _mapsWrapper, _platformId, _fitBoundsService, _zone) {
        _classCallCheck(this, AgmMap);

        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        this._platformId = _platformId;
        this._fitBoundsService = _fitBoundsService;
        this._zone = _zone;
        /**
         * The longitude that defines the center of the map.
         */

        this.longitude = 0;
        /**
         * The latitude that defines the center of the map.
         */

        this.latitude = 0;
        /**
         * The zoom level of the map. The default zoom level is 8.
         */

        this.zoom = 8;
        /**
         * Enables/disables if map is draggable.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = true;
        /**
         * Enables/disables zoom and center on double click. Enabled by default.
         */

        this.disableDoubleClickZoom = false;
        /**
         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
         * value cannot get updated.
         */

        this.disableDefaultUI = false;
        /**
         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
         */

        this.scrollwheel = true;
        /**
         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
         * enabled by default.
         */

        this.keyboardShortcuts = true;
        /**
         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
         * modes, these styles will only apply to labels and geometry.
         */

        this.styles = [];
        /**
         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
         * used to
         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
         */

        this.usePanning = false;
        /**
         * Sets the viewport to contain the given bounds.
         * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
         */

        this.fitBounds = false;
        /**
         * The initial enabled/disabled state of the Scale control. This is disabled by default.
         */

        this.scaleControl = false;
        /**
         * The initial enabled/disabled state of the Map type control.
         */

        this.mapTypeControl = false;
        /**
         * The initial enabled/disabled state of the Pan control.
         */

        this.panControl = false;
        /**
         * The initial enabled/disabled state of the Rotate control.
         */

        this.rotateControl = false;
        /**
         * The initial enabled/disabled state of the Fullscreen control.
         */

        this.fullscreenControl = false;
        /**
         * The map mapTypeId. Defaults to 'roadmap'.
         */

        this.mapTypeId = 'roadmap';
        /**
         * When false, map icons are not clickable. A map icon represents a point of interest,
         * also known as a POI. By default map icons are clickable.
         */

        this.clickableIcons = true;
        /**
         * A map icon represents a point of interest, also known as a POI.
         * When map icons are clickable by default, an info window is displayed.
         * When this property is set to false, the info window will not be shown but the click event
         * will still fire
         */

        this.showDefaultInfoWindow = true;
        /**
         * This setting controls how gestures on the map are handled.
         * Allowed values:
         * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
         * - 'greedy'      (All touch gestures pan or zoom the map.)
         * - 'none'        (The map cannot be panned or zoomed by user gestures.)
         * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
         */

        this.gestureHandling = 'auto';
        /**
         * Controls the automatic switching behavior for the angle of incidence of
         * the map. The only allowed values are 0 and 45. The value 0 causes the map
         * to always use a 0° overhead view regardless of the zoom level and
         * viewport. The value 45 causes the tilt angle to automatically switch to
         * 45 whenever 45° imagery is available for the current zoom level and
         * viewport, and switch back to 0 whenever 45° imagery is not available
         * (this is the default behavior). 45° imagery is only available for
         * satellite and hybrid map types, within some locations, and at some zoom
         * levels. Note: getTilt returns the current tilt angle, not the value
         * specified by this option. Because getTilt and this option refer to
         * different things, do not bind() the tilt property; doing so may yield
         * unpredictable effects. (Default of AGM is 0 (disabled). Enable it with value 45.)
         */

        this.tilt = 0;
        this._observableSubscriptions = [];
        /**
         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
         * marker or infoWindow).
         */

        this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */

        this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */

        this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter is fired when the map center changes.
         */

        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the viewport bounds have changed.
         */

        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the mapTypeId property changes.
         */

        this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the map becomes idle after panning or zooming.
         */

        this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the zoom level has changed.
         */

        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the google map is fully initialized.
         * You get the google.maps.Map instance as a result of this EventEmitter.
         */

        this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the visible tiles have finished loading.
         */

        this.tilesLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /** @internal */


      _createClass(AgmMap, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(this._platformId)) {
            // The code is running on the server, do nothing
            return;
          } // todo: this should be solved with a new component and a viewChild decorator


          var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');

          this._initMapInstance(container);
        }
      }, {
        key: "_initMapInstance",
        value: function _initMapInstance(el) {
          var _this61 = this;

          this._mapsWrapper.createMap(el, {
            center: {
              lat: this.latitude || 0,
              lng: this.longitude || 0
            },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            controlSize: this.controlSize,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            zoomControl: this.zoomControl,
            zoomControlOptions: this.zoomControlOptions,
            streetViewControl: this.streetViewControl,
            streetViewControlOptions: this.streetViewControlOptions,
            scaleControl: this.scaleControl,
            scaleControlOptions: this.scaleControlOptions,
            mapTypeControl: this.mapTypeControl,
            mapTypeControlOptions: this.mapTypeControlOptions,
            panControl: this.panControl,
            panControlOptions: this.panControlOptions,
            rotateControl: this.rotateControl,
            rotateControlOptions: this.rotateControlOptions,
            fullscreenControl: this.fullscreenControl,
            fullscreenControlOptions: this.fullscreenControlOptions,
            mapTypeId: this.mapTypeId,
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling,
            tilt: this.tilt,
            restriction: this.restriction
          }).then(function () {
            return _this61._mapsWrapper.getNativeMap();
          }).then(function (map) {
            return _this61.mapReady.emit(map);
          }); // register event listeners


          this._handleMapCenterChange();

          this._handleMapZoomChange();

          this._handleMapMouseEvents();

          this._handleBoundsChange();

          this._handleMapTypeIdChange();

          this._handleTilesLoadedEvent();

          this._handleIdleEvent();
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // unsubscribe all registered observable subscriptions
          this._observableSubscriptions.forEach(function (s) {
            return s.unsubscribe();
          }); // remove all listeners from the map instance


          this._mapsWrapper.clearInstanceListeners();

          if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
          }
        }
        /* @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._updateMapOptionsChanges(changes);

          this._updatePosition(changes);
        }
      }, {
        key: "_updateMapOptionsChanges",
        value: function _updateMapOptionsChanges(changes) {
          var options = {};
          var optionKeys = Object.keys(changes).filter(function (k) {
            return AgmMap_1._mapOptionsAttributes.indexOf(k) !== -1;
          });
          optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
          });

          this._mapsWrapper.setMapOptions(options);
        }
        /**
         * Triggers a resize event on the google map instance.
         * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
         * Returns a promise that gets resolved after the event was triggered.
         */

      }, {
        key: "triggerResize",
        value: function triggerResize() {
          var _this62 = this;

          var recenter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          // Note: When we would trigger the resize event and show the map in the same turn (which is a
          // common case for triggering a resize event), then the resize event would not
          // work (to show the map), so we trigger the event in a timeout.
          return new Promise(function (resolve) {
            setTimeout(function () {
              return _this62._mapsWrapper.triggerMapEvent('resize').then(function () {
                if (recenter) {
                  _this62.fitBounds != null ? _this62._fitBounds() : _this62._setCenter();
                }

                resolve();
              });
            });
          });
        }
      }, {
        key: "_updatePosition",
        value: function _updatePosition(changes) {
          if (changes['latitude'] == null && changes['longitude'] == null && !changes['fitBounds']) {
            // no position update needed
            return;
          } // we prefer fitBounds in changes


          if ('fitBounds' in changes) {
            this._fitBounds();

            return;
          }

          if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
          }

          this._setCenter();
        }
      }, {
        key: "_setCenter",
        value: function _setCenter() {
          var newCenter = {
            lat: this.latitude,
            lng: this.longitude
          };

          if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
          } else {
            this._mapsWrapper.setCenter(newCenter);
          }
        }
      }, {
        key: "_fitBounds",
        value: function _fitBounds() {
          switch (this.fitBounds) {
            case true:
              this._subscribeToFitBoundsUpdates();

              break;

            case false:
              if (this._fitBoundsSubscription) {
                this._fitBoundsSubscription.unsubscribe();
              }

              break;

            default:
              this._updateBounds(this.fitBounds, this.fitBoundsPadding);

          }
        }
      }, {
        key: "_subscribeToFitBoundsUpdates",
        value: function _subscribeToFitBoundsUpdates() {
          var _this63 = this;

          this._zone.runOutsideAngular(function () {
            _this63._fitBoundsSubscription = _this63._fitBoundsService.getBounds$().subscribe(function (b) {
              _this63._zone.run(function () {
                return _this63._updateBounds(b, _this63.fitBoundsPadding);
              });
            });
          });
        }
      }, {
        key: "_updateBounds",
        value: function _updateBounds(bounds, padding) {
          if (!bounds) {
            return;
          }

          if (this._isLatLngBoundsLiteral(bounds) && typeof google !== 'undefined' && google && google.maps && google.maps.LatLngBounds) {
            var newBounds = new google.maps.LatLngBounds();
            newBounds.union(bounds);
            bounds = newBounds;
          }

          if (this.usePanning) {
            this._mapsWrapper.panToBounds(bounds, padding);

            return;
          }

          this._mapsWrapper.fitBounds(bounds, padding);
        }
      }, {
        key: "_isLatLngBoundsLiteral",
        value: function _isLatLngBoundsLiteral(bounds) {
          return bounds != null && bounds.extend === undefined;
        }
      }, {
        key: "_handleMapCenterChange",
        value: function _handleMapCenterChange() {
          var _this64 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this64._mapsWrapper.getCenter().then(function (center) {
              _this64.latitude = center.lat();
              _this64.longitude = center.lng();

              _this64.centerChange.emit({
                lat: _this64.latitude,
                lng: _this64.longitude
              });
            });
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleBoundsChange",
        value: function _handleBoundsChange() {
          var _this65 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this65._mapsWrapper.getBounds().then(function (bounds) {
              _this65.boundsChange.emit(bounds);
            });
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleMapTypeIdChange",
        value: function _handleMapTypeIdChange() {
          var _this66 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
            _this66._mapsWrapper.getMapTypeId().then(function (mapTypeId) {
              _this66.mapTypeIdChange.emit(mapTypeId);
            });
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleMapZoomChange",
        value: function _handleMapZoomChange() {
          var _this67 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this67._mapsWrapper.getZoom().then(function (z) {
              _this67.zoom = z;

              _this67.zoomChange.emit(z);
            });
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleIdleEvent",
        value: function _handleIdleEvent() {
          var _this68 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () {
            _this68.idle.emit(void 0);
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleTilesLoadedEvent",
        value: function _handleTilesLoadedEvent() {
          var _this69 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('tilesloaded').subscribe(function () {
            return _this69.tilesLoaded.emit(void 0);
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleMapMouseEvents",
        value: function _handleMapMouseEvents() {
          var _this70 = this;

          var events = [{
            name: 'click',
            emitter: this.mapClick
          }, {
            name: 'rightclick',
            emitter: this.mapRightClick
          }, {
            name: 'dblclick',
            emitter: this.mapDblClick
          }];
          events.forEach(function (e) {
            var s = _this70._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
              var value = {
                coords: {
                  lat: event.latLng.lat(),
                  lng: event.latLng.lng()
                },
                placeId: event.placeId
              }; // the placeId will be undefined in case the event was not an IconMouseEvent (google types)

              if (value.placeId && !_this70.showDefaultInfoWindow) {
                event.stop();
              }

              e.emitter.emit(value);
            });

            _this70._observableSubscriptions.push(s);
          });
        }
      }]);

      return AgmMap;
    }();

    AgmMap.ɵfac = function AgmMap_Factory(t) {
      return new (t || AgmMap)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FitBoundsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    AgmMap.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AgmMap,
      selectors: [["agm-map"]],
      hostVars: 2,
      hostBindings: function AgmMap_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sebm-google-map-container", true);
        }
      },
      inputs: {
        longitude: "longitude",
        latitude: "latitude",
        zoom: "zoom",
        draggable: ["mapDraggable", "draggable"],
        disableDoubleClickZoom: "disableDoubleClickZoom",
        disableDefaultUI: "disableDefaultUI",
        scrollwheel: "scrollwheel",
        keyboardShortcuts: "keyboardShortcuts",
        styles: "styles",
        usePanning: "usePanning",
        fitBounds: "fitBounds",
        scaleControl: "scaleControl",
        mapTypeControl: "mapTypeControl",
        panControl: "panControl",
        rotateControl: "rotateControl",
        fullscreenControl: "fullscreenControl",
        mapTypeId: "mapTypeId",
        clickableIcons: "clickableIcons",
        showDefaultInfoWindow: "showDefaultInfoWindow",
        gestureHandling: "gestureHandling",
        tilt: "tilt",
        minZoom: "minZoom",
        maxZoom: "maxZoom",
        controlSize: "controlSize",
        backgroundColor: "backgroundColor",
        draggableCursor: "draggableCursor",
        draggingCursor: "draggingCursor",
        zoomControl: "zoomControl",
        zoomControlOptions: "zoomControlOptions",
        streetViewControl: "streetViewControl",
        streetViewControlOptions: "streetViewControlOptions",
        fitBoundsPadding: "fitBoundsPadding",
        scaleControlOptions: "scaleControlOptions",
        mapTypeControlOptions: "mapTypeControlOptions",
        panControlOptions: "panControlOptions",
        rotateControlOptions: "rotateControlOptions",
        fullscreenControlOptions: "fullscreenControlOptions",
        restriction: "restriction"
      },
      outputs: {
        mapClick: "mapClick",
        mapRightClick: "mapRightClick",
        mapDblClick: "mapDblClick",
        centerChange: "centerChange",
        boundsChange: "boundsChange",
        mapTypeIdChange: "mapTypeIdChange",
        idle: "idle",
        zoomChange: "zoomChange",
        mapReady: "mapReady",
        tilesLoaded: "tilesLoaded"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([CircleManager, DataLayerManager, DataLayerManager, FitBoundsService, GoogleMapsAPIWrapper, InfoWindowManager, KmlLayerManager, LayerManager, MarkerManager, PolygonManager, PolylineManager, RectangleManager]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
      ngContentSelectors: _c0,
      decls: 3,
      vars: 0,
      consts: [[1, "agm-map-container-inner", "sebm-google-map-container-inner"], [1, "agm-map-content"]],
      template: function AgmMap_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      styles: [".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"]
    });
    /**
     * Map option attributes that can change over time
     */

    AgmMap._mapOptionsAttributes = ['disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor', 'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl', 'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom', 'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions', 'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions', 'mapTypeId', 'clickableIcons', 'gestureHandling', 'tilt', 'restriction'];

    AgmMap.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: GoogleMapsAPIWrapper
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }, {
        type: FitBoundsService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "longitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "latitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "zoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMap.prototype, "minZoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMap.prototype, "maxZoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMap.prototype, "controlSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mapDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "draggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "disableDoubleClickZoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "disableDefaultUI", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "scrollwheel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "backgroundColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "draggableCursor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "draggingCursor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "keyboardShortcuts", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmMap.prototype, "zoomControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "zoomControlOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], AgmMap.prototype, "styles", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "usePanning", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmMap.prototype, "streetViewControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "streetViewControlOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "fitBounds", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "fitBoundsPadding", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "scaleControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "scaleControlOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "mapTypeControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "mapTypeControlOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "panControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "panControlOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "rotateControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "rotateControlOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "fullscreenControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "fullscreenControlOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "mapTypeId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "clickableIcons", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "showDefaultInfoWindow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "gestureHandling", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "tilt", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "restriction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapRightClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapDblClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "centerChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "boundsChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapTypeIdChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "idle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "zoomChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapReady", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "tilesLoaded", void 0);
    AgmMap = AgmMap_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], GoogleMapsAPIWrapper, Object, FitBoundsService, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], AgmMap);
    var AgmMarker_1;
    var markerId = 0;
    /**
     * AgmMarker renders a map marker inside a {@link AgmMap}.
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    .agm-map-container {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
     *      </agm-marker>
     *    </agm-map>
     *  `
     * })
     * ```
     */

    var AgmMarker = AgmMarker_1 =
    /*#__PURE__*/
    function () {
      function AgmMarker(_markerManager) {
        _classCallCheck(this, AgmMarker);

        this._markerManager = _markerManager;
        /**
         * If true, the marker can be dragged. Default value is false.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = false;
        /**
         * If true, the marker is visible
         */

        this.visible = true;
        /**
         * Whether to automatically open the child info window when the marker is clicked.
         */

        this.openInfoWindow = true;
        /**
         * The marker's opacity between 0.0 and 1.0.
         */

        this.opacity = 1;
        /**
         * All markers are displayed on the map in order of their zIndex, with higher values displaying in
         * front of markers with lower values. By default, markers are displayed according to their
         * vertical position on screen, with lower markers appearing in front of markers further up the
         * screen.
         */

        this.zIndex = 1;
        /**
         * If true, the marker can be clicked. Default value is true.
         */
        // tslint:disable-next-line:no-input-rename

        this.clickable = true;
        /**
         * This event is fired when the marker's animation property changes.
         *
         * @memberof AgmMarker
         */

        this.animationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the marker.
         */

        this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks twice on the marker.
         */

        this.markerDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user rightclicks on the marker.
         */

        this.markerRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the marker.
         */

        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the marker.
         */

        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the marker.
         */

        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user mouses over the marker.
         */

        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user mouses outside the marker.
         */

        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** @internal */

        this.infoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._fitBoundsDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this._id = (markerId++).toString();
      }
      /* @internal */


      _createClass(AgmMarker, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this71 = this;

          this.handleInfoWindowUpdate();
          this.infoWindow.changes.subscribe(function () {
            return _this71.handleInfoWindowUpdate();
          });
        }
      }, {
        key: "handleInfoWindowUpdate",
        value: function handleInfoWindowUpdate() {
          var _this72 = this;

          if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
          }

          this.infoWindow.forEach(function (marker) {
            marker.hostMarker = _this72;
          });
        }
        /** @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (typeof this.latitude === 'string') {
            this.latitude = Number(this.latitude);
          }

          if (typeof this.longitude === 'string') {
            this.longitude = Number(this.longitude);
          }

          if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
          }

          if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);

            this._updateFitBoundsDetails();

            this._markerAddedToManger = true;

            this._addEventListeners();

            return;
          }

          if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);

            this._updateFitBoundsDetails();
          }

          if (changes['title']) {
            this._markerManager.updateTitle(this);
          }

          if (changes['label']) {
            this._markerManager.updateLabel(this);
          }

          if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
          }

          if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
          }

          if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
          }

          if (changes['visible']) {
            this._markerManager.updateVisible(this);
          }

          if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
          }

          if (changes['clickable']) {
            this._markerManager.updateClickable(this);
          }

          if (changes['animation']) {
            this._markerManager.updateAnimation(this);
          }
        }
        /** @internal */

      }, {
        key: "getFitBoundsDetails$",
        value: function getFitBoundsDetails$() {
          return this._fitBoundsDetails$.asObservable();
        }
      }, {
        key: "_updateFitBoundsDetails",
        value: function _updateFitBoundsDetails() {
          this._fitBoundsDetails$.next({
            latLng: {
              lat: this.latitude,
              lng: this.longitude
            }
          });
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this73 = this;

          var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
            if (_this73.openInfoWindow) {
              _this73.infoWindow.forEach(function (infoWindow) {
                return infoWindow.open();
              });
            }

            _this73.markerClick.emit(_this73);
          });

          this._observableSubscriptions.push(cs);

          var dcs = this._markerManager.createEventObservable('dblclick', this).subscribe(function () {
            _this73.markerDblClick.emit(null);
          });

          this._observableSubscriptions.push(dcs);

          var rc = this._markerManager.createEventObservable('rightclick', this).subscribe(function () {
            _this73.markerRightClick.emit(null);
          });

          this._observableSubscriptions.push(rc);

          var ds = this._markerManager.createEventObservable('dragstart', this).subscribe(function (e) {
            _this73.dragStart.emit({
              coords: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
              }
            });
          });

          this._observableSubscriptions.push(ds);

          var d = this._markerManager.createEventObservable('drag', this).subscribe(function (e) {
            _this73.drag.emit({
              coords: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
              }
            });
          });

          this._observableSubscriptions.push(d);

          var de = this._markerManager.createEventObservable('dragend', this).subscribe(function (e) {
            _this73.dragEnd.emit({
              coords: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
              }
            });
          });

          this._observableSubscriptions.push(de);

          var mover = this._markerManager.createEventObservable('mouseover', this).subscribe(function (e) {
            _this73.mouseOver.emit({
              coords: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
              }
            });
          });

          this._observableSubscriptions.push(mover);

          var mout = this._markerManager.createEventObservable('mouseout', this).subscribe(function (e) {
            _this73.mouseOut.emit({
              coords: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
              }
            });
          });

          this._observableSubscriptions.push(mout);

          var anChng = this._markerManager.createEventObservable('animation_changed', this).subscribe(function () {
            _this73.animationChange.emit(_this73.animation);
          });

          this._observableSubscriptions.push(anChng);
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return 'AgmMarker-' + this._id.toString();
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._markerManager.deleteMarker(this); // unsubscribe all registered observable subscriptions


          this._observableSubscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }]);

      return AgmMarker;
    }();

    AgmMarker.ɵfac = function AgmMarker_Factory(t) {
      return new (t || AgmMarker)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MarkerManager));
    };

    AgmMarker.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmMarker,
      selectors: [["agm-marker"]],
      contentQueries: function AgmMarker_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AgmInfoWindow, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.infoWindow = _t);
        }
      },
      inputs: {
        latitude: "latitude",
        longitude: "longitude",
        title: "title",
        label: "label",
        draggable: ["markerDraggable", "draggable"],
        iconUrl: "iconUrl",
        openInfoWindow: "openInfoWindow",
        opacity: "opacity",
        visible: "visible",
        zIndex: "zIndex",
        animation: "animation",
        clickable: ["markerClickable", "clickable"]
      },
      outputs: {
        markerClick: "markerClick",
        dragStart: "dragStart",
        drag: "drag",
        dragEnd: "dragEnd",
        mouseOver: "mouseOver",
        mouseOut: "mouseOut",
        animationChange: "animationChange",
        markerDblClick: "markerDblClick",
        markerRightClick: "markerRightClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: FitBoundsAccessor,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return AgmMarker_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()]
    });

    AgmMarker.ctorParameters = function () {
      return [{
        type: MarkerManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMarker.prototype, "latitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMarker.prototype, "longitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMarker.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('markerDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "draggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMarker.prototype, "iconUrl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "visible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "openInfoWindow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "opacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('markerClickable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "clickable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMarker.prototype, "animation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "animationChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "markerClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "markerDblClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "markerRightClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "dragStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "drag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "dragEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "mouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "mouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AgmInfoWindow), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], AgmMarker.prototype, "infoWindow", void 0);
    AgmMarker = AgmMarker_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MarkerManager])], AgmMarker);
    var AgmPolygon_1;
    /**
     * AgmPolygon renders a polygon on a {@link AgmMap}
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    agm-map {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-polygon [paths]="paths">
     *      </agm-polygon>
     *    </agm-map>
     *  `
     * })
     * export class MyMapCmp {
     *   lat: number = 0;
     *   lng: number = 0;
     *   zoom: number = 10;
     *   paths: Array<LatLngLiteral> = [
     *     { lat: 0,  lng: 10 },
     *     { lat: 0,  lng: 20 },
     *     { lat: 10, lng: 20 },
     *     { lat: 10, lng: 10 },
     *     { lat: 0,  lng: 10 }
     *   ]
     *   // Nesting paths will create a hole where they overlap;
     *   nestedPaths: Array<Array<LatLngLiteral>> = [[
     *     { lat: 0,  lng: 10 },
     *     { lat: 0,  lng: 20 },
     *     { lat: 10, lng: 20 },
     *     { lat: 10, lng: 10 },
     *     { lat: 0,  lng: 10 }
     *   ], [
     *     { lat: 0, lng: 15 },
     *     { lat: 0, lng: 20 },
     *     { lat: 5, lng: 20 },
     *     { lat: 5, lng: 15 },
     *     { lat: 0, lng: 15 }
     *   ]]
     * }
     * ```
     */

    var AgmPolygon = AgmPolygon_1 =
    /*#__PURE__*/
    function () {
      function AgmPolygon(_polygonManager) {
        _classCallCheck(this, AgmPolygon);

        this._polygonManager = _polygonManager;
        /**
         * Indicates whether this Polygon handles mouse events. Defaults to true.
         */

        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic
         * property defines the mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control
         * points shown at the vertices and on each segment. Defaults to false.
         */

        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will
         * follow the curvature of the Earth. When false, edges of the polygon are
         * rendered as straight lines in screen space. Note that the shape of a
         * geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */

        this.geodesic = false;
        /**
         * The ordered sequence of coordinates that designates a closed loop.
         * Unlike polylines, a polygon may consist of one or more paths.
         *  As a result, the paths property may specify one or more arrays of
         * LatLng coordinates. Paths are closed automatically; do not repeat the
         * first vertex of the path as the last vertex. Simple polygons may be
         * defined using a single array of LatLngs. More complex polygons may
         * specify an array of arrays. Any simple arrays are converted into Arrays.
         * Inserting or removing LatLngs from the Array will automatically update
         * the polygon on the map.
         */

        this.paths = [];
        /**
         * This event is fired when the DOM click event is fired on the Polygon.
         */

        this.polyClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polygon.
         */

        this.polyDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polygon.
         */

        this.polyDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polygon.
         */

        this.polyDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polygon.
         */

        this.polyDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polygon.
         */

        this.polyMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polygon.
         */

        this.polyMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseout.
         */

        this.polyMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseover.
         */

        this.polyMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polygon
         */

        this.polyMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the Polygon is right-clicked on.
         */

        this.polyRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired after Polygon first path changes.
         */

        this.polyPathsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._polygonAddedToManager = false;
        this._subscriptions = [];
      }
      /** @internal */


      _createClass(AgmPolygon, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          if (!this._polygonAddedToManager) {
            this._init();
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._polygonAddedToManager) {
            this._init();

            return;
          }

          this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
        }
      }, {
        key: "_init",
        value: function _init() {
          this._polygonManager.addPolygon(this);

          this._polygonAddedToManager = true;

          this._addEventListeners();
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this74 = this;

          var handlers = [{
            name: 'click',
            handler: function handler(ev) {
              return _this74.polyClick.emit(ev);
            }
          }, {
            name: 'dblclick',
            handler: function handler(ev) {
              return _this74.polyDblClick.emit(ev);
            }
          }, {
            name: 'drag',
            handler: function handler(ev) {
              return _this74.polyDrag.emit(ev);
            }
          }, {
            name: 'dragend',
            handler: function handler(ev) {
              return _this74.polyDragEnd.emit(ev);
            }
          }, {
            name: 'dragstart',
            handler: function handler(ev) {
              return _this74.polyDragStart.emit(ev);
            }
          }, {
            name: 'mousedown',
            handler: function handler(ev) {
              return _this74.polyMouseDown.emit(ev);
            }
          }, {
            name: 'mousemove',
            handler: function handler(ev) {
              return _this74.polyMouseMove.emit(ev);
            }
          }, {
            name: 'mouseout',
            handler: function handler(ev) {
              return _this74.polyMouseOut.emit(ev);
            }
          }, {
            name: 'mouseover',
            handler: function handler(ev) {
              return _this74.polyMouseOver.emit(ev);
            }
          }, {
            name: 'mouseup',
            handler: function handler(ev) {
              return _this74.polyMouseUp.emit(ev);
            }
          }, {
            name: 'rightclick',
            handler: function handler(ev) {
              return _this74.polyRightClick.emit(ev);
            }
          }];
          handlers.forEach(function (obj) {
            var os = _this74._polygonManager.createEventObservable(obj.name, _this74).subscribe(obj.handler);

            _this74._subscriptions.push(os);
          });

          this._polygonManager.createPathEventObservable(this).then(function (paths$) {
            var os = paths$.subscribe(function (pathEvent) {
              return _this74.polyPathsChange.emit(pathEvent);
            });

            _this74._subscriptions.push(os);
          });
        }
      }, {
        key: "_updatePolygonOptions",
        value: function _updatePolygonOptions(changes) {
          return Object.keys(changes).filter(function (k) {
            return AgmPolygon_1._polygonOptionsAttributes.indexOf(k) !== -1;
          }).reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
          }, {});
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._polygonManager.deletePolygon(this); // unsubscribe all registered observable subscriptions


          this._subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }, {
        key: "getPath",
        value: function getPath() {
          return this._polygonManager.getPath(this);
        }
      }, {
        key: "getPaths",
        value: function getPaths() {
          return this._polygonManager.getPaths(this);
        }
      }]);

      return AgmPolygon;
    }();

    AgmPolygon.ɵfac = function AgmPolygon_Factory(t) {
      return new (t || AgmPolygon)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](PolygonManager));
    };

    AgmPolygon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmPolygon,
      selectors: [["agm-polygon"]],
      inputs: {
        clickable: "clickable",
        draggable: ["polyDraggable", "draggable"],
        editable: "editable",
        geodesic: "geodesic",
        paths: "paths",
        fillColor: "fillColor",
        fillOpacity: "fillOpacity",
        strokeColor: "strokeColor",
        strokeOpacity: "strokeOpacity",
        strokeWeight: "strokeWeight",
        visible: "visible",
        zIndex: "zIndex"
      },
      outputs: {
        polyClick: "polyClick",
        polyDblClick: "polyDblClick",
        polyDrag: "polyDrag",
        polyDragEnd: "polyDragEnd",
        polyDragStart: "polyDragStart",
        polyMouseDown: "polyMouseDown",
        polyMouseMove: "polyMouseMove",
        polyMouseOut: "polyMouseOut",
        polyMouseOver: "polyMouseOver",
        polyMouseUp: "polyMouseUp",
        polyRightClick: "polyRightClick",
        polyPathsChange: "polyPathsChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()]
    });
    AgmPolygon._polygonOptionsAttributes = ['clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map', 'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable', 'editable', 'visible'];

    AgmPolygon.ctorParameters = function () {
      return [{
        type: PolygonManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "clickable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('polyDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "draggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "editable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolygon.prototype, "fillColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "fillOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "geodesic", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], AgmPolygon.prototype, "paths", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolygon.prototype, "strokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "strokeOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "strokeWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmPolygon.prototype, "visible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyDblClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyDrag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyDragEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyDragStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyRightClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "polyPathsChange", void 0);
    AgmPolygon = AgmPolygon_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [PolygonManager])], AgmPolygon);
    /**
     * AgmPolylineIcon enables to add polyline sequences to add arrows, circle,
     * or custom icons either along the entire line, or in a specific part of it.
     * See https://developers.google.com/maps/documentation/javascript/shapes#polyline_customize
     *
     * ### Example
     * ```html
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-polyline>
     *          <agm-icon-sequence [fixedRotation]="true" [path]="'FORWARD_OPEN_ARROW'">
     *          </agm-icon-sequence>
     *      </agm-polyline>
     *    </agm-map>
     * ```
     *
     * @export
     * @class AgmPolylineIcon
     */

    var AgmPolylineIcon =
    /*#__PURE__*/
    function () {
      function AgmPolylineIcon() {
        _classCallCheck(this, AgmPolylineIcon);
      }

      _createClass(AgmPolylineIcon, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.path == null) {
            throw new Error('Icon Sequence path is required');
          }
        }
      }]);

      return AgmPolylineIcon;
    }();

    AgmPolylineIcon.ɵfac = function AgmPolylineIcon_Factory(t) {
      return new (t || AgmPolylineIcon)();
    };

    AgmPolylineIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmPolylineIcon,
      selectors: [["agm-icon-sequence"]],
      inputs: {
        fixedRotation: "fixedRotation",
        offset: "offset",
        repeat: "repeat",
        anchorX: "anchorX",
        anchorY: "anchorY",
        fillColor: "fillColor",
        fillOpacity: "fillOpacity",
        path: "path",
        rotation: "rotation",
        scale: "scale",
        strokeColor: "strokeColor",
        strokeOpacity: "strokeOpacity",
        strokeWeight: "strokeWeight"
      }
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmPolylineIcon.prototype, "fixedRotation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "offset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "repeat", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "anchorX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "anchorY", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "fillColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "fillOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "path", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "rotation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "scale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "strokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "strokeOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "strokeWeight", void 0);
    var AgmPolylinePoint_1;
    /**
     * AgmPolylinePoint represents one element of a polyline within a  {@link
     * AgmPolyline}
     */

    var AgmPolylinePoint = AgmPolylinePoint_1 =
    /*#__PURE__*/
    function () {
      function AgmPolylinePoint() {
        _classCallCheck(this, AgmPolylinePoint);

        /**
         * This event emitter gets emitted when the position of the point changed.
         */
        this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AgmPolylinePoint, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes['latitude'] || changes['longitude']) {
            var position = {
              lat: changes['latitude'] ? changes['latitude'].currentValue : this.latitude,
              lng: changes['longitude'] ? changes['longitude'].currentValue : this.longitude
            };
            this.positionChanged.emit(position);
          }
        }
        /** @internal */

      }, {
        key: "getFitBoundsDetails$",
        value: function getFitBoundsDetails$() {
          return this.positionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
            lat: this.latitude,
            lng: this.longitude
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (position) {
            return {
              latLng: position
            };
          }));
        }
      }]);

      return AgmPolylinePoint;
    }();

    AgmPolylinePoint.ɵfac = function AgmPolylinePoint_Factory(t) {
      return new (t || AgmPolylinePoint)();
    };

    AgmPolylinePoint.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmPolylinePoint,
      selectors: [["agm-polyline-point"]],
      inputs: {
        latitude: "latitude",
        longitude: "longitude"
      },
      outputs: {
        positionChanged: "positionChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: FitBoundsAccessor,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return AgmPolylinePoint_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylinePoint.prototype, "latitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylinePoint.prototype, "longitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolylinePoint.prototype, "positionChanged", void 0);
    AgmPolylinePoint = AgmPolylinePoint_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AgmPolylinePoint);
    var AgmPolyline_1;
    var polylineId = 0;
    /**
     * AgmPolyline renders a polyline on a {@link AgmMap}
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    .agm-map-container {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-polyline>
     *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
     *          </agm-polyline-point>
     *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
     *          </agm-polyline-point>
     *      </agm-polyline>
     *    </agm-map>
     *  `
     * })
     * ```
     */

    var AgmPolyline = AgmPolyline_1 =
    /*#__PURE__*/
    function () {
      function AgmPolyline(_polylineManager) {
        _classCallCheck(this, AgmPolyline);

        this._polylineManager = _polylineManager;
        /**
         * Indicates whether this Polyline handles mouse events. Defaults to true.
         */

        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic property defines the
         * mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control points shown at the
         * vertices and on each segment. Defaults to false.
         */

        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
         * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
         * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */

        this.geodesic = false;
        /**
         * Whether this polyline is visible on the map. Defaults to true.
         */

        this.visible = true;
        /**
         * This event is fired when the DOM click event is fired on the Polyline.
         */

        this.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polyline.
         */

        this.lineDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polyline.
         */

        this.lineDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polyline.
         */

        this.lineDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polyline.
         */

        this.lineDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polyline.
         */

        this.lineMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polyline.
         */

        this.lineMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseout.
         */

        this.lineMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseover.
         */

        this.lineMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polyline
         */

        this.lineMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the Polyline is right-clicked on.
         */

        this.lineRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired after Polyline's path changes.
         */

        this.polyPathChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
      }
      /** @internal */


      _createClass(AgmPolyline, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this75 = this;

          if (this.points.length) {
            this.points.forEach(function (point) {
              var s = point.positionChanged.subscribe(function () {
                _this75._polylineManager.updatePolylinePoints(_this75);
              });

              _this75._subscriptions.push(s);
            });
          }

          if (!this._polylineAddedToManager) {
            this._init();
          }

          var pointSub = this.points.changes.subscribe(function () {
            return _this75._polylineManager.updatePolylinePoints(_this75);
          });

          this._subscriptions.push(pointSub);

          this._polylineManager.updatePolylinePoints(this);

          var iconSub = this.iconSequences.changes.subscribe(function () {
            return _this75._polylineManager.updateIconSequences(_this75);
          });

          this._subscriptions.push(iconSub);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._polylineAddedToManager) {
            this._init();

            return;
          }

          var options = {};
          var optionKeys = Object.keys(changes).filter(function (k) {
            return AgmPolyline_1._polylineOptionsAttributes.indexOf(k) !== -1;
          });
          optionKeys.forEach(function (k) {
            return options[k] = changes[k].currentValue;
          });

          this._polylineManager.setPolylineOptions(this, options);
        }
      }, {
        key: "getPath",
        value: function getPath() {
          return this._polylineManager.getPath(this);
        }
      }, {
        key: "_init",
        value: function _init() {
          this._polylineManager.addPolyline(this);

          this._polylineAddedToManager = true;

          this._addEventListeners();
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this76 = this;

          var handlers = [{
            name: 'click',
            handler: function handler(ev) {
              return _this76.lineClick.emit(ev);
            }
          }, {
            name: 'dblclick',
            handler: function handler(ev) {
              return _this76.lineDblClick.emit(ev);
            }
          }, {
            name: 'drag',
            handler: function handler(ev) {
              return _this76.lineDrag.emit(ev);
            }
          }, {
            name: 'dragend',
            handler: function handler(ev) {
              return _this76.lineDragEnd.emit(ev);
            }
          }, {
            name: 'dragstart',
            handler: function handler(ev) {
              return _this76.lineDragStart.emit(ev);
            }
          }, {
            name: 'mousedown',
            handler: function handler(ev) {
              return _this76.lineMouseDown.emit(ev);
            }
          }, {
            name: 'mousemove',
            handler: function handler(ev) {
              return _this76.lineMouseMove.emit(ev);
            }
          }, {
            name: 'mouseout',
            handler: function handler(ev) {
              return _this76.lineMouseOut.emit(ev);
            }
          }, {
            name: 'mouseover',
            handler: function handler(ev) {
              return _this76.lineMouseOver.emit(ev);
            }
          }, {
            name: 'mouseup',
            handler: function handler(ev) {
              return _this76.lineMouseUp.emit(ev);
            }
          }, {
            name: 'rightclick',
            handler: function handler(ev) {
              return _this76.lineRightClick.emit(ev);
            }
          }];
          handlers.forEach(function (obj) {
            var os = _this76._polylineManager.createEventObservable(obj.name, _this76).subscribe(obj.handler);

            _this76._subscriptions.push(os);
          });

          this._polylineManager.createPathEventObservable(this).then(function (ob$) {
            var os = ob$.subscribe(function (pathEvent) {
              return _this76.polyPathChange.emit(pathEvent);
            });

            _this76._subscriptions.push(os);
          });
        }
        /** @internal */

      }, {
        key: "_getPoints",
        value: function _getPoints() {
          if (this.points) {
            return this.points.toArray();
          }

          return [];
        }
      }, {
        key: "_getIcons",
        value: function _getIcons() {
          if (this.iconSequences) {
            return this.iconSequences.toArray();
          }

          return [];
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._polylineManager.deletePolyline(this); // unsubscribe all registered observable subscriptions


          this._subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }]);

      return AgmPolyline;
    }();

    AgmPolyline.ɵfac = function AgmPolyline_Factory(t) {
      return new (t || AgmPolyline)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](PolylineManager));
    };

    AgmPolyline.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmPolyline,
      selectors: [["agm-polyline"]],
      contentQueries: function AgmPolyline_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AgmPolylinePoint, false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AgmPolylineIcon, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.points = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.iconSequences = _t);
        }
      },
      inputs: {
        clickable: "clickable",
        draggable: ["polylineDraggable", "draggable"],
        editable: "editable",
        geodesic: "geodesic",
        visible: "visible",
        strokeColor: "strokeColor",
        strokeOpacity: "strokeOpacity",
        strokeWeight: "strokeWeight",
        zIndex: "zIndex"
      },
      outputs: {
        lineClick: "lineClick",
        lineDblClick: "lineDblClick",
        lineDrag: "lineDrag",
        lineDragEnd: "lineDragEnd",
        lineDragStart: "lineDragStart",
        lineMouseDown: "lineMouseDown",
        lineMouseMove: "lineMouseMove",
        lineMouseOut: "lineMouseOut",
        lineMouseOver: "lineMouseOver",
        lineMouseUp: "lineMouseUp",
        lineRightClick: "lineRightClick",
        polyPathChange: "polyPathChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()]
    });
    AgmPolyline._polylineOptionsAttributes = ['draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'zIndex'];

    AgmPolyline.ctorParameters = function () {
      return [{
        type: PolylineManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "clickable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('polylineDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "draggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "editable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "geodesic", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolyline.prototype, "strokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolyline.prototype, "strokeOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolyline.prototype, "strokeWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "visible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolyline.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineDblClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineDrag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineDragEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineDragStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineRightClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "polyPathChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AgmPolylinePoint), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], AgmPolyline.prototype, "points", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AgmPolylineIcon), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], AgmPolyline.prototype, "iconSequences", void 0);
    AgmPolyline = AgmPolyline_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [PolylineManager])], AgmPolyline);
    var AgmRectangle_1;

    var AgmRectangle = AgmRectangle_1 =
    /*#__PURE__*/
    function () {
      function AgmRectangle(_manager) {
        _classCallCheck(this, AgmRectangle);

        this._manager = _manager;
        /**
         * Indicates whether this Rectangle handles mouse events. Defaults to true.
         */

        this.clickable = true;
        /**
         * If set to true, the user can drag this rectangle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = false;
        /**
         * If set to true, the user can edit this rectangle by dragging the control points shown at
         * the center and around the circumference of the rectangle. Defaults to false.
         */

        this.editable = false;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */

        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */

        this.strokeWeight = 0;
        /**
         * Whether this rectangle is visible on the map. Defaults to true.
         */

        this.visible = true;
        /**
         * This event is fired when the rectangle's is changed.
         */

        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */

        this.rectangleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */

        this.rectangleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the rectangle.
         */

        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the rectangle.
         */

        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the rectangle.
         */

        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the rectangle.
         */

        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the rectangle.
         */

        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on rectangle mouseout.
         */

        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on rectangle mouseover.
         */

        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mouseup event is fired on the rectangle.
         */

        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the rectangle is right-clicked on.
         */

        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._rectangleAddedToManager = false;
        this._eventSubscriptions = [];
      }
      /** @internal */


      _createClass(AgmRectangle, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._manager.addRectangle(this);

          this._rectangleAddedToManager = true;

          this._registerEventListeners();
        }
        /** @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._rectangleAddedToManager) {
            return;
          }

          if (changes['north'] || changes['east'] || changes['south'] || changes['west']) {
            this._manager.setBounds(this);
          }

          if (changes['editable']) {
            this._manager.setEditable(this);
          }

          if (changes['draggable']) {
            this._manager.setDraggable(this);
          }

          if (changes['visible']) {
            this._manager.setVisible(this);
          }

          this._updateRectangleOptionsChanges(changes);
        }
      }, {
        key: "_updateRectangleOptionsChanges",
        value: function _updateRectangleOptionsChanges(changes) {
          var options = {};
          var optionKeys = Object.keys(changes).filter(function (k) {
            return AgmRectangle_1._mapOptions.indexOf(k) !== -1;
          });
          optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
          });

          if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
          }
        }
      }, {
        key: "_registerEventListeners",
        value: function _registerEventListeners() {
          var _this77 = this;

          var events = new Map();
          events.set('bounds_changed', this.boundsChange);
          events.set('click', this.rectangleClick);
          events.set('dblclick', this.rectangleDblClick);
          events.set('drag', this.drag);
          events.set('dragend', this.dragEnd);
          events.set('dragStart', this.dragStart);
          events.set('mousedown', this.mouseDown);
          events.set('mousemove', this.mouseMove);
          events.set('mouseout', this.mouseOut);
          events.set('mouseover', this.mouseOver);
          events.set('mouseup', this.mouseUp);
          events.set('rightclick', this.rightClick);
          events.forEach(function (eventEmitter, eventName) {
            _this77._eventSubscriptions.push(_this77._manager.createEventObservable(eventName, _this77).subscribe(function (value) {
              switch (eventName) {
                case 'bounds_changed':
                  _this77._manager.getBounds(_this77).then(function (bounds) {
                    return eventEmitter.emit({
                      north: bounds.getNorthEast().lat(),
                      east: bounds.getNorthEast().lng(),
                      south: bounds.getSouthWest().lat(),
                      west: bounds.getSouthWest().lng()
                    });
                  });

                  break;

                default:
                  eventEmitter.emit({
                    coords: {
                      lat: value.latLng.lat(),
                      lng: value.latLng.lng()
                    }
                  });
              }
            }));
          });
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._eventSubscriptions.forEach(function (s) {
            s.unsubscribe();
          });

          this._eventSubscriptions = null;

          this._manager.removeRectangle(this);
        }
        /**
         * Gets the LatLngBounds of this Rectangle.
         */

      }, {
        key: "getBounds",
        value: function getBounds() {
          return this._manager.getBounds(this);
        }
      }]);

      return AgmRectangle;
    }();

    AgmRectangle.ɵfac = function AgmRectangle_Factory(t) {
      return new (t || AgmRectangle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](RectangleManager));
    };

    AgmRectangle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmRectangle,
      selectors: [["agm-rectangle"]],
      inputs: {
        clickable: "clickable",
        draggable: ["rectangleDraggable", "draggable"],
        editable: "editable",
        strokePosition: "strokePosition",
        strokeWeight: "strokeWeight",
        visible: "visible",
        north: "north",
        east: "east",
        south: "south",
        west: "west",
        fillColor: "fillColor",
        fillOpacity: "fillOpacity",
        strokeColor: "strokeColor",
        strokeOpacity: "strokeOpacity",
        zIndex: "zIndex"
      },
      outputs: {
        boundsChange: "boundsChange",
        rectangleClick: "rectangleClick",
        rectangleDblClick: "rectangleDblClick",
        drag: "drag",
        dragEnd: "dragEnd",
        dragStart: "dragStart",
        mouseDown: "mouseDown",
        mouseMove: "mouseMove",
        mouseOut: "mouseOut",
        mouseOver: "mouseOver",
        mouseUp: "mouseUp",
        rightClick: "rightClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()]
    });
    AgmRectangle._mapOptions = ['fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'clickable'];

    AgmRectangle.ctorParameters = function () {
      return [{
        type: RectangleManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "north", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "east", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "south", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "west", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "clickable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('rectangleDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "draggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "editable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmRectangle.prototype, "fillColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "fillOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmRectangle.prototype, "strokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "strokeOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmRectangle.prototype, "strokePosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "strokeWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "visible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "boundsChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "rectangleClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "rectangleDblClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "drag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "dragEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "dragStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseOut", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "rightClick", void 0);
    AgmRectangle = AgmRectangle_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [RectangleManager])], AgmRectangle);
    var layerId$3 = 0;
    /*
     * This directive adds a transit layer to a google map instance
     * <agm-transit-layer [visible]="true|false"> <agm-transit-layer>
     * */

    var AgmTransitLayer =
    /*#__PURE__*/
    function () {
      function AgmTransitLayer(_manager) {
        _classCallCheck(this, AgmTransitLayer);

        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId$3++).toString();
        /**
         * Hide/show transit layer
         */

        this.visible = true;
      }

      _createClass(AgmTransitLayer, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this._addedToManager) {
            return;
          }

          this._manager.addTransitLayer(this, {
            visible: this.visible
          });

          this._addedToManager = true;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._addedToManager) {
            return;
          }

          if (changes['visible'] != null) {
            this._manager.toggleLayerVisibility(this, {
              visible: changes['visible'].currentValue
            });
          }
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return "AgmTransitLayer-".concat(this._id.toString());
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._manager.deleteLayer(this);
        }
      }]);

      return AgmTransitLayer;
    }();

    AgmTransitLayer.ɵfac = function AgmTransitLayer_Factory(t) {
      return new (t || AgmTransitLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerManager));
    };

    AgmTransitLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmTransitLayer,
      selectors: [["agm-transit-layer"]],
      inputs: {
        visible: "visible"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()]
    });

    AgmTransitLayer.ctorParameters = function () {
      return [{
        type: LayerManager
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmTransitLayer.prototype, "visible", void 0);
    AgmTransitLayer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [LayerManager])], AgmTransitLayer);
    var google$1;
    var SymbolPath;

    (function (SymbolPath) {
      SymbolPath[SymbolPath["BACKWARD_CLOSED_ARROW"] = 3] = "BACKWARD_CLOSED_ARROW";
      SymbolPath[SymbolPath["BACKWARD_OPEN_ARROW"] = 4] = "BACKWARD_OPEN_ARROW";
      SymbolPath[SymbolPath["CIRCLE"] = 0] = "CIRCLE";
      SymbolPath[SymbolPath["FORWARD_CLOSED_ARROW"] = 1] = "FORWARD_CLOSED_ARROW";
      SymbolPath[SymbolPath["FORWARD_OPEN_ARROW"] = 2] = "FORWARD_OPEN_ARROW";
    })(SymbolPath || (SymbolPath = {}));
    /**
     * Identifiers used to specify the placement of controls on the map. Controls are
     * positioned relative to other controls in the same layout position. Controls that
     * are added first are positioned closer to the edge of the map.
     */


    var ControlPosition;

    (function (ControlPosition) {
      ControlPosition[ControlPosition["RIGHT_BOTTOM"] = 0] = "RIGHT_BOTTOM";
      ControlPosition[ControlPosition["TOP_LEFT"] = 1] = "TOP_LEFT";
      ControlPosition[ControlPosition["TOP_CENTER"] = 2] = "TOP_CENTER";
      ControlPosition[ControlPosition["TOP_RIGHT"] = 3] = "TOP_RIGHT";
      ControlPosition[ControlPosition["LEFT_CENTER"] = 4] = "LEFT_CENTER";
      ControlPosition[ControlPosition["LEFT_TOP"] = 5] = "LEFT_TOP";
      ControlPosition[ControlPosition["LEFT_BOTTOM"] = 6] = "LEFT_BOTTOM";
      ControlPosition[ControlPosition["RIGHT_TOP"] = 7] = "RIGHT_TOP";
      ControlPosition[ControlPosition["RIGHT_CENTER"] = 8] = "RIGHT_CENTER";
      ControlPosition[ControlPosition["BOTTOM_RIGHT"] = 9] = "BOTTOM_RIGHT";
      ControlPosition[ControlPosition["BOTTOM_LEFT"] = 10] = "BOTTOM_LEFT";
      ControlPosition[ControlPosition["BOTTOM_CENTER"] = 11] = "BOTTOM_CENTER";
    })(ControlPosition || (ControlPosition = {}));

    var MapTypeId;

    (function (MapTypeId) {
      /** This map type displays a transparent layer of major streets on satellite images. */
      MapTypeId[MapTypeId["HYBRID"] = 0] = "HYBRID";
      /** This map type displays a normal street map. */

      MapTypeId[MapTypeId["ROADMAP"] = 1] = "ROADMAP";
      /** This map type displays satellite images. */

      MapTypeId[MapTypeId["SATELLITE"] = 2] = "SATELLITE";
      /** This map type displays maps with physical features such as terrain and vegetation. */

      MapTypeId[MapTypeId["TERRAIN"] = 3] = "TERRAIN";
    })(MapTypeId || (MapTypeId = {}));

    var MapTypeControlStyle;

    (function (MapTypeControlStyle) {
      MapTypeControlStyle[MapTypeControlStyle["DEFAULT"] = 0] = "DEFAULT";
      MapTypeControlStyle[MapTypeControlStyle["DROPDOWN_MENU"] = 2] = "DROPDOWN_MENU";
      MapTypeControlStyle[MapTypeControlStyle["HORIZONTAL_BAR"] = 1] = "HORIZONTAL_BAR";
    })(MapTypeControlStyle || (MapTypeControlStyle = {}));

    var ScaleControlStyle;

    (function (ScaleControlStyle) {
      ScaleControlStyle[ScaleControlStyle["DEFAULT"] = 0] = "DEFAULT";
    })(ScaleControlStyle || (ScaleControlStyle = {}));

    var ZoomControlStyle;

    (function (ZoomControlStyle) {
      ZoomControlStyle[ZoomControlStyle["DEFAULT"] = 0] = "DEFAULT";
      ZoomControlStyle[ZoomControlStyle["LARGE"] = 1] = "LARGE";
      ZoomControlStyle[ZoomControlStyle["SMALL"] = 2] = "SMALL";
    })(ZoomControlStyle || (ZoomControlStyle = {}));

    var GeocoderLocationType;

    (function (GeocoderLocationType) {
      GeocoderLocationType["APPROXIMATE"] = "APPROXIMATE";
      GeocoderLocationType["GEOMETRIC_CENTER"] = "GEOMETRIC_CENTER";
      GeocoderLocationType["RANGE_INTERPOLATED"] = "RANGE_INTERPOLATED";
      GeocoderLocationType["ROOFTOP"] = "ROOFTOP";
    })(GeocoderLocationType || (GeocoderLocationType = {}));

    var GeocoderStatus;

    (function (GeocoderStatus) {
      GeocoderStatus["ERROR"] = "ERROR";
      GeocoderStatus["INVALID_REQUEST"] = "INVALID_REQUEST";
      GeocoderStatus["OK"] = "OK";
      GeocoderStatus["OVER_QUERY_LIMIT"] = "OVER_QUERY_LIMIT";
      GeocoderStatus["REQUEST_DENIED"] = "REQUEST_DENIED";
      GeocoderStatus["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
      GeocoderStatus["ZERO_RESULTS"] = "ZERO_RESULTS";
    })(GeocoderStatus || (GeocoderStatus = {}));

    var AgmGeocoder =
    /*#__PURE__*/
    function () {
      function AgmGeocoder(loader) {
        var _this78 = this;

        _classCallCheck(this, AgmGeocoder);

        var connectableGeocoder$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (subscriber) {
          loader.load().then(function () {
            return subscriber.next();
          });
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return _this78._createGeocoder();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["multicast"])(new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1)));
        connectableGeocoder$.connect(); // ignore the subscription
        // since we will remain subscribed till application exits

        this.geocoder$ = connectableGeocoder$;
      }

      _createClass(AgmGeocoder, [{
        key: "geocode",
        value: function geocode(request) {
          var _this79 = this;

          return this.geocoder$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (geocoder) {
            return _this79._getGoogleResults(geocoder, request);
          }));
        }
      }, {
        key: "_getGoogleResults",
        value: function _getGoogleResults(geocoder, request) {
          var geocodeObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["bindCallback"])(geocoder.geocode);
          return geocodeObservable(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref6) {
            var _ref7 = _slicedToArray(_ref6, 2),
                results = _ref7[0],
                status = _ref7[1];

            if (status === GeocoderStatus.OK) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(results);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(status);
          }));
        }
      }, {
        key: "_createGeocoder",
        value: function _createGeocoder() {
          return new google.maps.Geocoder();
        }
      }]);

      return AgmGeocoder;
    }();

    AgmGeocoder.ɵfac = function AgmGeocoder_Factory(t) {
      return new (t || AgmGeocoder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MapsAPILoader));
    };

    AgmGeocoder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AgmGeocoder,
      factory: AgmGeocoder.ɵfac,
      providedIn: 'root'
    });

    AgmGeocoder.ctorParameters = function () {
      return [{
        type: MapsAPILoader
      }];
    };

    AgmGeocoder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function AgmGeocoder_Factory() {
        return new AgmGeocoder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MapsAPILoader));
      },
      token: AgmGeocoder,
      providedIn: "root"
    });
    AgmGeocoder = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MapsAPILoader])], AgmGeocoder);

    var WindowRef =
    /*#__PURE__*/
    function () {
      function WindowRef() {
        _classCallCheck(this, WindowRef);
      }

      _createClass(WindowRef, [{
        key: "getNativeWindow",
        value: function getNativeWindow() {
          return window;
        }
      }]);

      return WindowRef;
    }();

    var DocumentRef =
    /*#__PURE__*/
    function () {
      function DocumentRef() {
        _classCallCheck(this, DocumentRef);
      }

      _createClass(DocumentRef, [{
        key: "getNativeDocument",
        value: function getNativeDocument() {
          return document;
        }
      }]);

      return DocumentRef;
    }();

    var BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
    var GoogleMapsScriptProtocol;

    (function (GoogleMapsScriptProtocol) {
      GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
      GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
      GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
    })(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
    /**
     * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
     * LazyMapsAPILoaderConfig}.
     */


    var LAZY_MAPS_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('angular-google-maps LAZY_MAPS_API_CONFIG');

    var LazyMapsAPILoader =
    /*#__PURE__*/
    function (_MapsAPILoader) {
      _inherits(LazyMapsAPILoader, _MapsAPILoader);

      function LazyMapsAPILoader() {
        var _this80;

        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var w = arguments.length > 1 ? arguments[1] : undefined;
        var d = arguments.length > 2 ? arguments[2] : undefined;
        var localeId = arguments.length > 3 ? arguments[3] : undefined;

        _classCallCheck(this, LazyMapsAPILoader);

        _this80 = _possibleConstructorReturn(this, _getPrototypeOf(LazyMapsAPILoader).call(this));
        _this80.localeId = localeId;
        _this80._SCRIPT_ID = 'agmGoogleMapsApiScript';
        _this80.callbackName = "agmLazyMapsAPILoader";
        _this80._config = config || {};
        _this80._windowRef = w;
        _this80._documentRef = d;
        return _this80;
      }

      _createClass(LazyMapsAPILoader, [{
        key: "load",
        value: function load() {
          var window = this._windowRef.getNativeWindow();

          if (window.google && window.google.maps) {
            // Google maps already loaded on the page.
            return Promise.resolve();
          }

          if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
          } // this can happen in HMR situations or Stackblitz.io editors.


          var scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);

          if (scriptOnPage) {
            this._assignScriptLoadingPromise(scriptOnPage);

            return this._scriptLoadingPromise;
          }

          var script = this._documentRef.getNativeDocument().createElement('script');

          script.type = 'text/javascript';
          script.async = true;
          script.defer = true;
          script.id = this._SCRIPT_ID;
          script.src = this._getScriptSrc(this.callbackName);

          this._assignScriptLoadingPromise(script);

          this._documentRef.getNativeDocument().body.appendChild(script);

          return this._scriptLoadingPromise;
        }
      }, {
        key: "_assignScriptLoadingPromise",
        value: function _assignScriptLoadingPromise(scriptElem) {
          var _this81 = this;

          this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            _this81._windowRef.getNativeWindow()[_this81.callbackName] = function () {
              resolve();
            };

            scriptElem.onerror = function (error) {
              reject(error);
            };
          });
        }
      }, {
        key: "_getScriptSrc",
        value: function _getScriptSrc(callbackName) {
          var protocolType = this._config && this._config.protocol || GoogleMapsScriptProtocol.HTTPS;
          var protocol;

          switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
              protocol = '';
              break;

            case GoogleMapsScriptProtocol.HTTP:
              protocol = 'http:';
              break;

            case GoogleMapsScriptProtocol.HTTPS:
              protocol = 'https:';
              break;
          }

          var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
          var queryParams = {
            v: this._config.apiVersion || 'quarterly',
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language || this.localeId !== 'en-US' ? this.localeId : null
          };
          var params = Object.keys(queryParams).filter(function (k) {
            return queryParams[k] != null;
          }).filter(function (k) {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) || Array.isArray(queryParams[k]) && queryParams[k].length > 0;
          }).map(function (k) {
            // join arrays as comma seperated strings
            var i = queryParams[k];

            if (Array.isArray(i)) {
              return {
                key: k,
                value: i.join(',')
              };
            }

            return {
              key: k,
              value: queryParams[k]
            };
          }).map(function (entry) {
            return "".concat(entry.key, "=").concat(entry.value);
          }).join('&');
          return "".concat(protocol, "//").concat(hostAndPath, "?").concat(params);
        }
      }]);

      return LazyMapsAPILoader;
    }(MapsAPILoader);

    LazyMapsAPILoader.ɵfac = function LazyMapsAPILoader_Factory(t) {
      return new (t || LazyMapsAPILoader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LAZY_MAPS_API_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DocumentRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]));
    };

    LazyMapsAPILoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LazyMapsAPILoader,
      factory: LazyMapsAPILoader.ɵfac
    });

    LazyMapsAPILoader.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [LAZY_MAPS_API_CONFIG]
        }]
      }, {
        type: WindowRef
      }, {
        type: DocumentRef
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
        }]
      }];
    };

    LazyMapsAPILoader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(LAZY_MAPS_API_CONFIG)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, WindowRef, DocumentRef, String])], LazyMapsAPILoader);
    /**
     * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
     * Tag.
     * It's important that the Google Maps API script gets loaded first on the page.
     */

    var NoOpMapsAPILoader =
    /*#__PURE__*/
    function () {
      function NoOpMapsAPILoader() {
        _classCallCheck(this, NoOpMapsAPILoader);
      }

      _createClass(NoOpMapsAPILoader, [{
        key: "load",
        value: function load() {
          if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
          }

          return Promise.resolve();
        }
      }]);

      return NoOpMapsAPILoader;
    }(); // exported map types


    var AgmCoreModule_1;
    /**
     * @internal
     */

    function coreDirectives() {
      return [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer];
    }
    /**
     * The angular-google-maps core module. Contains all Directives/Services/Pipes
     * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
     */


    var AgmCoreModule = AgmCoreModule_1 =
    /*#__PURE__*/
    function () {
      function AgmCoreModule() {
        _classCallCheck(this, AgmCoreModule);
      }

      _createClass(AgmCoreModule, null, [{
        key: "forRoot",

        /**
         * Please use this method when you register the module at the root level.
         */
        value: function forRoot(lazyMapsAPILoaderConfig) {
          return {
            ngModule: AgmCoreModule_1,
            providers: [].concat(BROWSER_GLOBALS_PROVIDERS, [{
              provide: MapsAPILoader,
              useClass: LazyMapsAPILoader
            }, {
              provide: LAZY_MAPS_API_CONFIG,
              useValue: lazyMapsAPILoaderConfig
            }])
          };
        }
      }]);

      return AgmCoreModule;
    }();

    AgmCoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AgmCoreModule
    });
    AgmCoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AgmCoreModule_Factory(t) {
        return new (t || AgmCoreModule)();
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapsAPILoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleMapsAPIWrapper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: MapsAPILoader
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmBicyclingLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-bicycling-layer'
        }]
      }], function () {
        return [{
          type: LayerManager
        }];
      }, {
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CircleManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmCircle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-circle'
        }]
      }], function () {
        return [{
          type: CircleManager
        }];
      }, {
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['circleDraggable']
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        centerChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        circleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        circleDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        drag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        radiusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataLayerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmDataLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-data-layer'
        }]
      }], function () {
        return [{
          type: DataLayerManager
        }];
      }, {
        layerClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        geoJson: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FitBoundsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: MapsAPILoader
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmFitBounds, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[agmFitBounds]'
        }]
      }], function () {
        return [{
          type: FitBoundsAccessor,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }, {
          type: FitBoundsService
        }];
      }, {
        agmFitBounds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MarkerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InfoWindowManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: MarkerManager
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmInfoWindow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'agm-info-window',
          template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
        }]
      }], function () {
        return [{
          type: InfoWindowManager
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, {
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        infoWindowClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disableAutoPan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KmlLayerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmKmlLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-kml-layer'
        }]
      }], function () {
        return [{
          type: KmlLayerManager
        }];
      }, {
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveViewport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        screenOverlays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        suppressInfoWindows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        layerClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        defaultViewportChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        statusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PolygonManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PolylineManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RectangleManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmMap, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'agm-map',
          providers: [CircleManager, DataLayerManager, DataLayerManager, FitBoundsService, GoogleMapsAPIWrapper, InfoWindowManager, KmlLayerManager, LayerManager, MarkerManager, PolygonManager, PolylineManager, RectangleManager],
          host: {
            // todo: deprecated - we will remove it with the next version
            '[class.sebm-google-map-container]': 'true'
          },
          template: "\n              <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n              <div class='agm-map-content'>\n                <ng-content></ng-content>\n              </div>\n  ",
          styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: GoogleMapsAPIWrapper
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }, {
          type: FitBoundsService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['mapDraggable']
        }],
        disableDoubleClickZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disableDefaultUI: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollwheel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        keyboardShortcuts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        styles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        usePanning: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fitBounds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scaleControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        mapTypeControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        panControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rotateControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fullscreenControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        mapTypeId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        clickableIcons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showDefaultInfoWindow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        gestureHandling: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tilt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        mapClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mapRightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mapDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        centerChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        boundsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mapTypeIdChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        idle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        zoomChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mapReady: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        tilesLoaded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        minZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        controlSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggableCursor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggingCursor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoomControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoomControlOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        streetViewControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        streetViewControlOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fitBoundsPadding: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scaleControlOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        mapTypeControlOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        panControlOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rotateControlOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fullscreenControlOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        restriction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmMarker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-marker',
          providers: [{
            provide: FitBoundsAccessor,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return AgmMarker_1;
            })
          }],
          inputs: ['latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl', 'openInfoWindow', 'opacity', 'visible', 'zIndex', 'animation'],
          outputs: ['markerClick', 'dragStart', 'drag', 'dragEnd', 'mouseOver', 'mouseOut']
        }]
      }], function () {
        return [{
          type: MarkerManager
        }];
      }, {
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['markerDraggable']
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        openInfoWindow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        opacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['markerClickable']
        }],
        animationChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        markerClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        markerDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        markerRightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        drag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        infoWindow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [AgmInfoWindow]
        }],
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        iconUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        animation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolygon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-polygon'
        }]
      }], function () {
        return [{
          type: PolygonManager
        }];
      }, {
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['polyDraggable']
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        geodesic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        paths: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        polyClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyDragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyDragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyMouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyMouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyMouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyMouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyMouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyRightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyPathsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        fillColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolylineIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-polyline agm-icon-sequence'
        }]
      }], null, {
        fixedRotation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        offset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        repeat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        anchorX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        anchorY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        path: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rotation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolylinePoint, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-polyline-point',
          providers: [{
            provide: FitBoundsAccessor,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return AgmPolylinePoint_1;
            })
          }]
        }]
      }], function () {
        return [];
      }, {
        positionChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolyline, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-polyline'
        }]
      }], function () {
        return [{
          type: PolylineManager
        }];
      }, {
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['polylineDraggable']
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        geodesic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        lineClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineDragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineDragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineMouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineMouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineMouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineMouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineMouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineRightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyPathChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        strokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        points: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [AgmPolylinePoint]
        }],
        iconSequences: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [AgmPolylineIcon]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmRectangle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-rectangle'
        }]
      }], function () {
        return [{
          type: RectangleManager
        }];
      }, {
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['rectangleDraggable']
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        boundsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rectangleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rectangleDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        drag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        north: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        east: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        south: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        west: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmTransitLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-transit-layer'
        }]
      }], function () {
        return [{
          type: LayerManager
        }];
      }, {
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmGeocoder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: MapsAPILoader
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LazyMapsAPILoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [LAZY_MAPS_API_CONFIG]
          }]
        }, {
          type: WindowRef
        }, {
          type: DocumentRef
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
          }]
        }];
      }, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AgmCoreModule, {
        declarations: [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer],
        exports: [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmCoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: coreDirectives(),
          exports: coreDirectives()
        }]
      }], null, null);
    })(); // main modules

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=agm-core.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/search/hotels/hotel-passenger-details/hotel-passenger-details.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/search/hotels/hotel-passenger-details/hotel-passenger-details.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSearchHotelsHotelPassengerDetailsHotelPassengerDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"outer-wrapper\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"ui grid m-0\">\r\n            <div class=\"sixteen wide column row\">\r\n                <div class=\"twelve wide column\">\r\n                    <div class=\"modify-search-block\">\r\n                        <div class=\"ui grid\">\r\n                            <div class=\"sixteen wide column row\">\r\n                                <div class=\"sixteen wide column p-0 right\">\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"search-list-block\">\r\n                        <div class=\"ui grid item-block\">\r\n                            <div class=\"sixteen wide column row\">\r\n                                <div class=\"six wide column item-image\" [ngStyle]=\"{'background-image':'url(' + selectedHotel.image + ')', 'background-repeat': 'no-repeat', 'background-size': 'cover' }\" >\r\n                                    <!-- <img src=\"./../../../../../assets/img/hotelPassenger.jpg\" title=\"Parkside Suites\" /> -->\r\n                                </div>\r\n                                <div class=\"ten wide column item-details\">\r\n                                    <div class=\"ui grid\">\r\n                                        <div class=\"sixteen wide column row\">\r\n                                            <div class=\"sixteen wide column\">\r\n                                                <h2>{{selectedHotel.hotel_name}}</h2>\r\n                                                <p class=\"light\">{{selectedHotel.address}}</p>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <div class=\"sixteen wide column row pt-0\">\r\n                                            <div class=\"four wide column\">\r\n                                                <label>CHECK IN:</label>\r\n                                                <p><b>{{(searchCriteria.checkInUnix *1000) | date:'medium' }} </b></p>\r\n                                            </div>\r\n                                            <div class=\"four wide column\">\r\n                                                <label>CHECK OUT:</label>\r\n                                                <p><b>{{(searchCriteria.checkOutUnix *1000) | date:'medium' }} </b></p>\r\n                                            </div>\r\n                                            <div class=\"four wide column\">\r\n                                                <label>NIGHTS</label>\r\n                                                <p><b>{{numberOfNights(searchCriteria.checkInUnix, searchCriteria.checkOutUnix) }}</b></p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"sixteen wide column row pt-0\">\r\n                                            <div class=\"four wide column\">\r\n                                                <label>ROOM TYPE:</label>\r\n                                                <p><b>{{blockedRoom.result.hotel.room.room_description}}</b></p>\r\n                                            </div>\r\n                                            <div class=\"four wide column\">\r\n                                                <label>ROOMS:</label>\r\n                                                <p><b>{{searchCriteria.no_of_rooms}}</b></p>\r\n                                            </div>\r\n                                            <div class=\"four wide column\">\r\n                                                <label>ADULTS:</label>\r\n                                                <p><b>{{searchCriteria.adults_per_room}}</b></p>\r\n                                            </div>\r\n                                            <div class=\"four wide column\">\r\n                                                <label>CHILD:</label>\r\n                                                <p><b>{{searchCriteria.children_per_room}}</b></p>\r\n                                            </div>\r\n                                        </div>\r\n\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <form [formGroup]=\"hotelPassengerForm\" (submit)=\"bookRoom()\">\r\n                        <div class=\"search-list-block\" *ngIf=\"roomNo>0\">\r\n                            <div class=\"ui grid item-block\">\r\n                                <div class=\"sixteen wide column row\">\r\n                                    <div class=\"sixteen wide column item-details\">\r\n                                        <div class=\"ui grid\">\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"sixteen wide column\">\r\n                                                    <h2>Room 1</h2>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row\" id=\"r1_pax1\" *ngIf=\"firstRoomPax>0\">\r\n                                                <div class=\"two wide column\">\r\n                                                    <label><b>Salutation</b></label>\r\n                                                    <div>\r\n                                                        <select class=\"ui fluid search dropdown\" name=\"r1_pax1_solutation\"\r\n                                                            formControlName=\"r1_pax1_solutation\">\r\n                                                            <option value=\"Mr.\">Mr.</option>\r\n                                                            <option value=\"Mrs.\">Mrs.</option>\r\n\r\n                                                        </select>\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                                <div class=\"five wide column\">\r\n                                                    <label><b>First Name</b>\r\n                                                        <span class=\"mandatory\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r1_pax1_firstName\" formControlName=\"r1_pax1_firstName\"\r\n                                                            placeholder=\"First Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"five wide column\">\r\n                                                    <label><b>Last Name</b>\r\n                                                        <span class=\"mandatory\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r1_pax1_lastName\" formControlName=\"r1_pax1_lastName\"\r\n                                                            placeholder=\"Last Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"four wide column\">\r\n                                                    <label>Phone Number</label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r1_pax1_phone\" placeholder=\"Phone\"\r\n                                                            formControlName=\"r1_pax1_phone\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row\" id=\"r1_pax2\" *ngIf=\"firstRoomPax>1\">\r\n                                                <div class=\"two wide column\">\r\n                                                    <label><b>Salutation</b></label>\r\n                                                    <div>\r\n                                                        <select class=\"ui fluid search dropdown\" name=\"r1_pax2_solutation\"\r\n                                                            formControlName=\"r1_pax2_solutation\">\r\n                                                            <option value=\"Mr.\">Mr.</option>\r\n                                                            <option value=\"Mrs.\">Mrs.</option>\r\n\r\n                                                        </select>\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                                <div class=\"five wide column\">\r\n                                                    <label><b>First Name</b>\r\n                                                        <span class=\"mandatory\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r1_pax2_firstName\" formControlName=\"r1_pax2_firstName\"\r\n                                                            placeholder=\"First Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"five wide column\">\r\n                                                    <label><b>Last Name</b>\r\n                                                        <span class=\"mandatory\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r1_pax2_lastName\" formControlName=\"r1_pax2_lastName\"\r\n                                                            placeholder=\"Last Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"four wide column\">\r\n                                                    <label>Phone Number</label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r1_pax2_phone\" placeholder=\"Phone\"\r\n                                                            formControlName=\"r1_pax2_phone\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row\" id=\"r1_pax3\" *ngIf=\"firstRoomPax>2\">\r\n                                                <div class=\"two wide column\">\r\n                                                    <label><b>Salutation</b></label>\r\n                                                    <div>\r\n                                                        <select class=\"ui fluid search dropdown\" name=\"r1_pax3_solutation\"\r\n                                                            formControlName=\"r1_pax3_solutation\">\r\n                                                            <option value=\"Mr.\">Mr.</option>\r\n                                                            <option value=\"Mrs.\">Mrs.</option>\r\n\r\n                                                        </select>\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                                <div class=\"five wide column\">\r\n                                                    <label><b>First Name</b>\r\n                                                        <span class=\"mandatory\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r1_pax3_firstName\" formControlName=\"r1_pax3_firstName\"\r\n                                                            placeholder=\"First Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"five wide column\">\r\n                                                    <label><b>Last Name</b>\r\n                                                        <span class=\"mandatory\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r1_pax3_lastName\" formControlName=\"r1_pax3_lastName\"\r\n                                                            placeholder=\"Last Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"four wide column\">\r\n                                                    <label>Phone Number</label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r1_pax3_phone\" placeholder=\"Phone\"\r\n                                                            formControlName=\"r1_pax3_phone\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row\" id=\"r1_pax4\" *ngIf=\"firstRoomPax>3\">\r\n                                                <div class=\"two wide column\">\r\n                                                    <label><b>Salutation</b></label>\r\n                                                    <div>\r\n                                                        <select class=\"ui fluid search dropdown\" name=\"r1_pax4_solutation\"\r\n                                                            formControlName=\"r1_pax4_solutation\">\r\n                                                            <option value=\"Mr.\">Mr.</option>\r\n                                                            <option value=\"Mrs.\">Mrs.</option>\r\n\r\n                                                        </select>\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                                <div class=\"five wide column\">\r\n                                                    <label><b>First Name</b>\r\n                                                        <span class=\"mandatory\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r1_pax4_firstName\" formControlName=\"r1_pax4_firstName\"\r\n                                                            placeholder=\"First Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"five wide column\">\r\n                                                    <label><b>Last Name</b>\r\n                                                        <span class=\"mandatory\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r1_pax4_lastName\" formControlName=\"r1_pax4_lastName\"\r\n                                                            placeholder=\"Last Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"four wide column\">\r\n                                                    <label>Phone Number</label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r1_pax4_phone\" placeholder=\"Phone\"\r\n                                                            formControlName=\"r1_pax4_phone\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row\" id=\"r1_pax5\" *ngIf=\"firstRoomPax>4\">\r\n                                                <div class=\"two wide column\">\r\n                                                    <label><b>Salutation</b></label>\r\n                                                    <div>\r\n                                                        <select class=\"ui fluid search dropdown\" name=\"r1_pax5_solutation\"\r\n                                                            formControlName=\"r1_pax5_solutation\">\r\n                                                            <option value=\"Mr.\">Mr.</option>\r\n                                                            <option value=\"Mrs.\">Mrs.</option>\r\n\r\n                                                        </select>\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                                <div class=\"five wide column\">\r\n                                                    <label><b>First Name</b>\r\n                                                        <span class=\"mandatory\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r1_pax5_firstName\" formControlName=\"r1_pax5_firstName\"\r\n                                                            placeholder=\"First Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"five wide column\">\r\n                                                    <label><b>Last Name</b>\r\n                                                        <span class=\"mandatory\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r1_pax5_lastName\" formControlName=\"r1_pax5_lastName\"\r\n                                                            placeholder=\"Last Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"four wide column\">\r\n                                                    <label>Phone Number</label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r1_pax5_phone\" placeholder=\"Phone\"\r\n                                                            formControlName=\"r1_pax5_Phone\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"search-list-block\" *ngIf=\"roomNo>1\">\r\n                            <div class=\"ui grid item-block\">\r\n                                <div class=\"sixteen wide column row\">\r\n                                    <div class=\"sixteen wide column item-details\">\r\n                                        <div class=\"ui grid\">\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"sixteen wide column\">\r\n                                                    <h2>Room 2</h2>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row\" id=\"r2_pax1\" *ngIf=\"secondRoomPax>0\">\r\n                                                <div class=\"two wide column\">\r\n                                                    <label><b>Salutation</b></label>\r\n                                                    <div>\r\n                                                        <select class=\"ui fluid search dropdown\" name=\"r2_pax1_solutation\"\r\n                                                            formControlName=\"r2_pax1_solutation\">\r\n                                                            <option value=\"Mr.\">Mr.</option>\r\n                                                            <option value=\"Mrs.\">Mrs.</option>\r\n\r\n                                                        </select>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"five wide column\">\r\n                                                    <label><b>First Name</b>\r\n                                                        <span class=\"mandatory\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r2_pax1_firstName\"   formControlName=\"r2_pax1_firstName\" placeholder=\"First Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"five wide column\">\r\n                                                    <label><b>Last Name</b>\r\n                                                        <span class=\"mandatory\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r2_pax1_lastName\"  formControlName=\"r2_pax1_lastName\" placeholder=\"Last Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"four wide column\">\r\n                                                    <label>Phone Number</label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r2_pax1_phone\"  formControlName=\"r2_pax1_phone\" placeholder=\"Phone\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row\" id=\"r2_pax2\" *ngIf=\"secondRoomPax>1\">\r\n                                                <div class=\"two wide column\">\r\n                                                    <label><b>Salutation</b></label>\r\n                                                    <div>\r\n                                                        <select class=\"ui fluid search dropdown\" name=\"r2_pax2_solutation\"\r\n                                                            formControlName=\"r2_pax2_solutation\">\r\n                                                            <option value=\"Mr.\">Mr.</option>\r\n                                                            <option value=\"Mrs.\">Mrs.</option>\r\n\r\n                                                        </select>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"five wide column\">\r\n                                                    <label><b>First Name</b>\r\n                                                        <span class=\"mandatory\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r2_pax2_firstName\"   formControlName=\"r2_pax2_firstName\" placeholder=\"First Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"five wide column\">\r\n                                                    <label><b>Last Name</b>\r\n                                                        <span class=\"mandatory\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r2_pax2_lastName\"  formControlName=\"r2_pax2_lastName\" placeholder=\"Last Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"four wide column\">\r\n                                                    <label>Phone Number</label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r2_pax2_phone\"  formControlName=\"r2_pax2_phone\" placeholder=\"Phone\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row\" id=\"r2_pax3\" *ngIf=\"secondRoomPax>2\">\r\n                                                <div class=\"two wide column\">\r\n                                                    <label><b>Salutation</b></label>\r\n                                                    <div>\r\n                                                        <select class=\"ui fluid search dropdown\" name=\"r2_pax3_solutation\"\r\n                                                            formControlName=\"r2_pax3_solutation\">\r\n                                                            <option value=\"Mr.\">Mr.</option>\r\n                                                            <option value=\"Mrs.\">Mrs.</option>\r\n\r\n                                                        </select>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"five wide column\">\r\n                                                    <label><b>First Name</b>\r\n                                                        <span class=\"mandatory\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r2_pax3_firstName\"   formControlName=\"r2_pax3_firstName\" placeholder=\"First Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"five wide column\">\r\n                                                    <label><b>Last Name</b>\r\n                                                        <span class=\"mandatory\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r2_pax3_lastName\"  formControlName=\"r2_pax3_lastName\" placeholder=\"Last Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"four wide column\">\r\n                                                    <label>Phone Number</label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r2_pax3_phone\"  formControlName=\"r2_pax3_phone\" placeholder=\"Phone\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row\" id=\"r2_pax4\" *ngIf=\"secondRoomPax>2\">\r\n                                                <div class=\"two wide column\">\r\n                                                    <label><b>Salutation</b></label>\r\n                                                    <div>\r\n                                                        <select class=\"ui fluid search dropdown\" name=\"r2_pax4_solutation\"\r\n                                                            formControlName=\"r2_pax4_solutation\">\r\n                                                            <option value=\"Mr.\">Mr.</option>\r\n                                                            <option value=\"Mrs.\">Mrs.</option>\r\n\r\n                                                        </select>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"five wide column\">\r\n                                                    <label><b>First Name</b>\r\n                                                        <span class=\"mandatory\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r2_pax4_firstName\"   formControlName=\"r2_pax4_firstName\" placeholder=\"First Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"five wide column\">\r\n                                                    <label><b>Last Name</b>\r\n                                                        <span class=\"mandatory\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r2_pax4_lastName\"  formControlName=\"r2_pax4_lastName\" placeholder=\"Last Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"four wide column\">\r\n                                                    <label>Phone Number</label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"r2_pax4_phone\"  formControlName=\"r2_pax4_phone\" placeholder=\"Phone\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- <div class=\"search-list-block\" style=\"display:none;\">\r\n                            <div class=\"ui grid item-block\">\r\n                                <div class=\"sixteen wide column row\">\r\n                                    <div class=\"sixteen wide column item-details\">\r\n                                        <div class=\"ui grid\">\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"sixteen wide column\">\r\n                                                    <h2>Room 3</h2>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"two wide column\">\r\n                                                    <label><b>Salutation</b></label>\r\n                                                    <div class=\"ui selection dropdown fluid\">\r\n                                                        <input type=\"hidden\" name=\"gender\">\r\n                                                        <i class=\"dropdown icon\"></i>\r\n                                                        <div class=\"default text\">Title</div>\r\n                                                        <div class=\"menu\">\r\n                                                            <div class=\"item\">Mr.</div>\r\n                                                            <div class=\"item\">Mrs.</div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"five wide column\">\r\n                                                    <label><b>First Name</b>\r\n                                                        <span class=\"mandatory\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"firstName\" placeholder=\"First Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"five wide column\">\r\n                                                    <label><b>Last Name</b>\r\n                                                        <span class=\"mandatory\">*</span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"lastName\" placeholder=\"Last Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"four wide column\">\r\n                                                    <label>Phone Number</label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"phone\" placeholder=\"Phone\">\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                            </div>\r\n\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                            </div>\r\n                        </div> -->\r\n                        <div class=\"search-list-block\" style=\"display:none;\">\r\n                            <div class=\"ui grid item-block\">\r\n                                <div class=\"sixteen wide column row\">\r\n                                    <div class=\"sixteen wide column item-details\">\r\n                                        <div class=\"ui grid\">\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"sixteen wide column\">\r\n                                                    <h2>Cancellation Policy</h2>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"seven wide column\">\r\n                                                    <label>FROM DATE:</label>\r\n                                                    <p><b>Feb 9, 2020, 4:46pm </b></p>\r\n                                                </div>\r\n                                                <div class=\"seven wide column\">\r\n                                                    <label>To DATE:</label>\r\n                                                    <p><b>Feb 26, 2020, 11:59pm </b></p>\r\n                                                </div>\r\n                                                <div class=\"two wide column\">\r\n                                                    <p><b>AED 0.00</b></p>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"seven wide column\">\r\n                                                    <label>FROM DATE:</label>\r\n                                                    <p><b> Feb 26, 2020, 11:59pm </b></p>\r\n                                                </div>\r\n                                                <div class=\"seven wide column\">\r\n                                                    <label>To DATE:</label>\r\n                                                    <p><b>Feb 28, 2020, 12:00am</b></p>\r\n                                                </div>\r\n                                                <div class=\"two wide column\">\r\n                                                    <p><b>AED 555.07</b></p>\r\n                                                </div>\r\n\r\n                                            </div>\r\n\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"search-list-block\">\r\n                            <div class=\"ui grid item-block\">\r\n                                <div class=\"sixteen wide column row\">\r\n                                    <div class=\"sixteen wide column item-details\">\r\n                                        <div class=\"ui grid\">\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"sixteen wide column\">\r\n                                                    <h2><b>Payment Details</b></h2>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"four wide column\">\r\n                                                    <label><b>Mail ID</b></label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"email\" placeholder=\"Email Address\"\r\n                                                            formControlName=\"email\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"four wide column\">\r\n                                                    <label><b>Agent Reference</b>\r\n                                                        <span class=\"mandatory\"></span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"agentFirstName\"\r\n                                                            formControlName=\"agentFirstName\" placeholder=\"First Name\">\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"eight wide column\">\r\n                                                    <label><b>Remarks</b>\r\n                                                        <span class=\"mandatory\"></span>\r\n                                                    </label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" name=\"remarks\" formControlName=\"remarks\"\r\n                                                            placeholder=\"\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"four wide column\">\r\n                                                    <label><b>Terms & Conditions</b>\r\n                                                        <span class=\"mandatory\"></span>\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"eight wide column\">\r\n                                                    <div class=\"ui checkbox mar-right-15px outer-checkbox\">\r\n                                                        <input type=\"checkbox\" name=\"same-check\"\r\n                                                            formControlName=\"rulesCondition\">\r\n                                                        <label for=\"same-check\"><b>\r\n                                                                I have read and accept the rules and\r\n                                                                restrictions.(Please check the box to continue)\r\n                                                            </b>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"eight wide column\">\r\n                                                    <div class=\"ui checkbox mar-right-15px outer-checkbox\">\r\n                                                        <input type=\"checkbox\" name=\"same-check\"\r\n                                                            formControlName=\"reserveCondition\">\r\n                                                        <label for=\"same-check\">\r\n                                                            <b>\r\n                                                                Reservation Terms And Cancellation Policy.(Please check\r\n                                                                the box to continue)\r\n                                                            </b>\r\n                                                        </label>\r\n                                                    </div>\r\n\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"sixteen wide column text-right\">\r\n                                                    <button class=\"confirm-btn\"> BOOK </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"search-list-block\">\r\n                            <div class=\"ui grid item-block\">\r\n                                <div class=\"sixteen wide column row\">\r\n\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div> \r\n                    </form>\r\n                    <!-- Search More -->\r\n\r\n                </div>\r\n                <div class=\"four wide column\">\r\n                    <div class=\"fliter-head-block\">\r\n                        <div class=\"ui grid\">\r\n                            <div class=\"sixteen wide column row\">\r\n                                <div class=\"ten wide column\">\r\n                                    <h2>Price Summary</h2>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n\r\n                    <!-- Side Filters -->\r\n                    <div class=\"filter-list-block\">\r\n                        <div class=\"ui grid filter-block\">\r\n                            <div class=\"sixteen wide column row filters\">\r\n                                <div class=\"sixteen wide column\">\r\n                                    <div class=\"ui grid\">\r\n                                        <div class=\"sixteen wide column row\">\r\n                                            <div class=\"ten wide column\">\r\n                                                <h4><b>Policy</b></h4>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div *ngFor=\"let room of roomsForPolicy; let i = index\" [attr.data-index]=\"i\">                                     \r\n                                            <div class=\"sixteen wide column row\">\r\n                                            <div class=\"ten wide column\">\r\n                                                <h5><b>ROOM {{i+1}}</b></h5>\r\n                                            </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row pt-0\">\r\n                                                <div class=\"nine wide column\">\r\n                                                    <p><b>Adult</b></p>\r\n                                                </div>\r\n\r\n                                                <div class=\"seven wide column right\">\r\n                                                    <p>{{room.adult}}</p>\r\n                                                </div>\r\n                                                </div>\r\n                                            <div class=\"sixteen wide column row pt-0\">\r\n                                                <div class=\"nine wide column\">\r\n                                                    <p><b>Child</b></p>\r\n                                                </div>\r\n\r\n                                                <div class=\"seven wide column right\">\r\n                                                    <p>{{room.child}}</p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row pt-0\">\r\n                                                <div class=\"nine wide column\">\r\n                                                    <p><b>GST</b></p>\r\n                                                </div>\r\n\r\n                                                <div class=\"seven wide column right\">\r\n                                                    <p>0.00</p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row pt-0\">\r\n                                                <div class=\"nine wide column\">\r\n                                                    <p><b>Sub Total</b></p>\r\n                                                </div>\r\n\r\n                                                <div class=\"seven wide column right\">\r\n                                                    <p><b>{{room.markup_price}}</b></p>\r\n                                                </div>\r\n                                                    </div>\r\n                                                <div class=\"sixteen wide column row pt-0\">\r\n                                                    <div class=\"nine wide column\">\r\n                                                        <div class=\"ui label\">\r\n                                                            <div class=\"detail\" style=\"margin-left: 0px;\">Breakfast included\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"sixteen wide column\">\r\n                                                    <hr style=\"opacity:0.3;\" />\r\n                                                </div>\r\n                                       </div><!--ends first room-->\r\n                                      \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/search/hotels/hotels-search-results/hotels-search-results.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/search/hotels/hotels-search-results/hotels-search-results.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSearchHotelsHotelsSearchResultsHotelsSearchResultsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"outer-wrapper\" *ngIf=\"showSearchResult\">\r\n    <div class=\"container-fluid\">\r\n        <form>\r\n            <div class=\"ui grid m-0\">\r\n                <div class=\"sixteen wide column row\">\r\n                    <div class=\"twelve wide column\">\r\n                        <div class=\"modify-search-block\">\r\n                            <div class=\"ui grid\">\r\n                                <div class=\"sixteen wide column row\">\r\n                                    \r\n                                    <div class=\"eight wide column p-0 text-left\">\r\n                                        <button (click)=\"showMapView('map-view')\">Map View </button>\r\n                                    </div>\r\n                                    <div class=\"eight wide column p-0\">\r\n                                        <button (click)=\"modifySearch()\" >Modify Search</button>\r\n                                        <button (click)=\"priceFilter($event)\">Sort By: Price: Low to High <img src=\"./../../../../../assets/icons/downArrow-black.svg\" width=\"10\" height=\"8\"/></button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"search-list-block\" *ngFor=\"let hotel of (hotelList | searchByName:hotelName | searchByRating:ratings | lowestPrice:lhPrice | priceRange:minPrice:maxPrice ) \">\r\n                            <div class=\"ui grid item-block\">\r\n                                <div class=\"sixteen wide column row\">\r\n                                    <div class=\"six wide column item-image\"  [ngStyle]=\"{'background-image':'url(' + hotel.image + ')', 'background-repeat': 'no-repeat', 'background-size': 'cover' }\" >\r\n                                        <!-- <img src=\"{{hotel.image}}\" title=\"Royalton Hotel Dubai\" />  -->\r\n                                    </div>\r\n                                    <div class=\"ten wide column item-details\">\r\n                                        <div class=\"ui grid\">\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"eight wide column\">\r\n                                                    <h2>{{hotel.hotel_name | uppercase}} </h2>\r\n                                                    <p class=\"light\">{{hotel.address}} | <strong>Supplier </strong> {{hotel.supplier_code}} </p>\r\n                                                </div>\r\n                                                <div class=\"eight wide column price-block\">\r\n                                                    <span>Starting form</span>\r\n                                                    <p>{{hotel.markup_price}} {{hotel.rate_info.currency}}</p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row pt-0\">\r\n                                                <div class=\"eight wide column rating-details\">\r\n                                                    <span class=\"light\">{{hotel.star_rating}} star hotel</span>\r\n                                                    <span> . </span>\r\n                                                    <img src=\"./../../../../../assets/icons/tripadv-icon.svg\" class=\"tripadvicon\" [alt]=\"hotel.tripAdvisorRating\"/>\r\n                                                    <img src=\"./../../../../../assets/icons/green-check.svg\" />\r\n                                                    <img src=\"./../../../../../assets/icons/green-check.svg\" />\r\n                                                    <img src=\"./../../../../../assets/icons/green-check.svg\" />\r\n                                                    <img src=\"./../../../../../assets/icons/green-uncheck.svg\" />\r\n                                                    <img src=\"./../../../../../assets/icons/green-uncheck.svg\" />\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row pt-0\">\r\n                                                <div class=\"ten wide column\">\r\n                                                    <p class=\"desc\">{{hotel.overview}}</p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row pt-0\">\r\n                                                <div class=\"eight wide column amenities-block\">\r\n                                                    <a>\r\n                                                        <img src=\"./../../../../../assets/icons/wifi-icon.svg\" />\r\n                                                    </a>\r\n                                                    <a>\r\n                                                        <img src=\"./../../../../../assets/icons/pool-icon.svg\" />\r\n                                                    </a>\r\n                                                    <a>\r\n                                                        <img src=\"./../../../../../assets/icons/meal-icon.svg\" />\r\n                                                    </a>\r\n                                                    <a>\r\n                                                        <img src=\"./../../../../../assets/icons/drinks-icon.svg\" />\r\n                                                    </a>\r\n                                                    <a>\r\n                                                        <img src=\"./../../../../../assets/icons/double-arrow.svg\" />\r\n                                                    </a>\r\n                                                    <a>\r\n                                                        <img src=\"./../../../../../assets/icons/park-icon.svg\" />\r\n                                                    </a>\r\n                                                </div>\r\n                                                <div class=\"eight wide column right\">\r\n                                                    <div class=\"bookings_btn-panel\">\r\n                                                        <button class=\"ui export button\" (click)=\"showFurtherDetails(hotel)\">\r\n                                                            <i *ngIf=\"selected_panel == hotel.hotel_id && showRoomSpinner == true\" class=\"fa fa-spinner fa-spin\"></i>Show Rooms\r\n                                                            <img src=\"./../../../../../assets/icons/downArrow-blue.svg\" width=\"16\" height=\"8\" />\r\n                                                        </button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"sixteen wide column row furtherdetails\" *ngIf=\"showfurtherDetails && selected_panel == hotel.hotel_id\">\r\n                                    <div *ngIf=\"ListOfRooms.length > 0 && showfurtherDetails\">\r\n                                    <div class=\"ui top attached tabular menu\">\r\n                                        <div class=\"item active \" id=\"room-tab-{{hotel.hotel_id}}\" (click)=\"roomDetailsTab(hotel.hotel_id)\" data-tab=\"room-tab\">Room Details</div>\r\n                                        <div class=\"item\"  id=\"desc-tab-{{hotel.hotel_id}}\" (click)=\"DescriptionTab(hotel.hotel_id)\" data-tab=\"desc-tab\">Description</div>\r\n                                        <div class=\"item \"  id=\"review-tab-{{hotel.hotel_id}}\" (click)=\"ReviewsTab(hotel.hotel_id)\" data-tab=\"review-tab\">Reviews</div>\r\n                                        <div class=\"item \"  id=\"map-tab-{{hotel.hotel_id}}\" (click)=\"MapsTab(hotel.hotel_id)\" data-tab=\"map-tab\">Maps</div>\r\n                                        <div class=\"item \"  id=\"photo-tab-{{hotel.hotel_id}}\" (click)=\"PhotosTab(hotel.hotel_id)\" data-tab=\"photo-tab\">Photos</div>\r\n                                    </div>\r\n                                    <div id=\"tab-room-{{hotel.hotel_id}}\" class=\"ui bottom attached active tab segment\" data-tab=\"room-tab\">\r\n                                        <div class=\"ui fluid container\">\r\n                                            <div class=\"ui grid\" >\r\n                                                <div class=\"sixteen wide column row furtherdetails-row\" *ngFor=\"let room of ListOfRooms;\">\r\n                                                    <div class=\"seven wide column\">\r\n                                                        <h4>{{room.room_description}}</h4>\r\n                                                        <ul>\r\n                                                            <li class=\"fac-type\">(Room Only)</li>\r\n                                                            <li><a (click)=\"showRateModal('rate-modal',room)\" > Rates & Policies </a></li>\r\n                                                            <li><a (click)=\"showCancelPolicy('cancel-modal',room)\" > Cancellation Policy </a></li>\r\n                                                        </ul>\r\n                                                    </div>\r\n                                                    <div class=\"three wide column price\">\r\n                                                        <p>{{room.supplier_price}} {{room.currency_code}}</p>\r\n                                                    </div>\r\n                                                    <div class=\"three wide column add-widget-block\">\r\n                                                        <button>Add to Widget </button>\r\n                                                    </div> <!----&& selected_room_panel == room.room.id-->\r\n                                                    <div class=\"three wide column select-room bookings_btn-panel\" >\r\n                                                        <button class=\"ui primary button\" (click)=\"blockRoom(room)\"><i *ngIf=\"blockRoomSpinner == true\" class=\"fa fa-spinner fa-spin\"></i>Select Room</button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                               \r\n                                    <div id=\"tab-desc-{{hotel.hotel_id}}\" class=\"ui bottom attached tab segment\" data-tab=\"desc-tab\">\r\n                                        <div class=\"ui fluid container\">\r\n                                            <div class=\"ui grid\">\r\n                                                <div class=\"sixteen wide column row desc-tab-block\">\r\n                                                    <div class=\"sixteen wide column\" *ngIf=\"hotel_desription != undefined\">\r\n                                                        <div *ngFor=\"let desc of hotel_desription.hotelDetails | keyvalue\">\r\n                                                            <h5 > {{desc.key}}</h5>\r\n                                                            <p>\r\n                                                                {{desc.value}}\r\n                                                            </p>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div id=\"tab-review-{{hotel.hotel_id}}\" class=\"ui bottom attached tab segment\" data-tab=\"review-tab\">\r\n                                        <div class=\"ui fluid container\">\r\n                                          <div class=\"outer-form\">\r\n                                                      <h5>Tripe Advisor id: {{hotel.tripAdvisorId}} | Trip Advisor Ranking:  {{hotel.tripAdvisorRanking}}</h5>\r\n                                                      <div class=\"sixteen wide column row pt-0\">\r\n                                                        <div class=\"eight wide column rating-details\">\r\n                                                            <span class=\"light\">{{hotel.star_rating}} star hotel</span>\r\n                                                            <span> . </span>\r\n                                                            <img src=\"./../../../../../assets/icons/tripadv-icon.svg\" class=\"tripadvicon\" [alt]=\"hotel.tripAdvisorRating\"/>\r\n                                                            <img src=\"./../../../../../assets/icons/green-check.svg\" />\r\n                                                            <img src=\"./../../../../../assets/icons/green-check.svg\" />\r\n                                                            <img src=\"./../../../../../assets/icons/green-check.svg\" />\r\n                                                            <img src=\"./../../../../../assets/icons/green-uncheck.svg\" />\r\n                                                            <img src=\"./../../../../../assets/icons/green-uncheck.svg\" />\r\n                                                        </div>\r\n                                                    </div>\r\n                                          </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div id=\"tab-map-{{hotel.hotel_id}}\"  class=\"ui bottom attached tab segment\" data-tab=\"map-tab\">\r\n                                        <div class=\"ui fluid container\">\r\n                                            <div class=\"ui grid\" style=\"width: 220%;\">\r\n                                                <div class=\"sixteen wide column row\">\r\n                                                    <div class=\"sixteen wide column\">\r\n                                                        <!-- <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0464441905224!2dhotel.latitute!3dhotel.longitute!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434a9026f7f5%3A0x311f5f52996b33ed!2shotel.hotel_name!5e0!3m2!1sen!2sae!4v1581487088482!5m2!1sen!2sae\" \r\n                                                        width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe> -->\r\n                                                        <!-- <agm-map [latitude]=\"hotel.latitute\" [longitude]=\"hotel.longitute\"></agm-map> -->\r\n                                                        <agm-map \r\n                                                        [latitude]=\"hotel.latitute\"\r\n                                                        [longitude]=\"hotel.longitute\"\r\n                                                        [zoom]=\"zoom\"\r\n                                                        [disableDefaultUI]=\"false\"\r\n                                                        [zoomControl]=\"false\"\r\n                                                        (mapClick)=\"mapClicked($event)\">\r\n                                                      \r\n                                                        <agm-marker \r\n                                                            (markerClick)=\"clickedMarker(hotel.hotel_name,1)\"\r\n                                                            [latitude]=\"hotel.latitute\"\r\n                                                            [longitude]=\"hotel.longitute\"\r\n                                                            [label]=\"hotel.hotel_name\"\r\n                                                            [markerDraggable]=\"hotel.draggable\"\r\n                                                            (dragEnd)=\"markerDragEnd(hotel, $event)\">\r\n                                                            \r\n                                                          <agm-info-window>\r\n                                                            <strong>hotel.hotel_name</strong>\r\n                                                          </agm-info-window>\r\n                                                          \r\n                                                        </agm-marker>\r\n                                                        \r\n                                                        <!-- <agm-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\" \r\n                                                            [radius]=\"5000\"\r\n                                                            [fillColor]=\"'red'\"\r\n                                                            [circleDraggable]=\"true\"\r\n                                                            [editable]=\"true\">\r\n                                                        </agm-circle> -->\r\n                                                      \r\n                                                      </agm-map>\r\n                                                        \r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div id=\"tab-photo-{{hotel.hotel_id}}\" class=\"ui bottom attached tab segment\" data-tab=\"photo-tab\">\r\n                                        <div class=\"ui fluid container\">\r\n                                            <div class=\"ui grid m-0\">\r\n                                                <div class=\"sixteen wide column row pt-0\" *ngIf=\"hotel_desription != undefined\"> <!--*ngIf=\"hotel.description.HotelResultInfo.hotelImages; let images\" -->\r\n                                                    <div class=\"three wide column image-wrapper\" *ngFor=\"let img of hotel_desription.hotelImages.hotelImage\" > <!-- *ngFor=\"let image of images\"-->\r\n                                                        <div class=\"image-thumb\">\r\n                                                            <!-- <img [src]=\"img\" /> -->\r\n                                                            <figure>\r\n                                                                <img [src]=\"img.thumbnailUrl\" alt=\"img.caption\" style=\"width:100%\">\r\n                                                                <figcaption>{{img.caption}}</figcaption>\r\n                                                              </figure>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                   \r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div> <!---------------search block list------>\r\n                    </div>\r\n                    <div class=\"four wide column\">\r\n                        <div class=\"fliter-head-block\">\r\n                            <div class=\"ui grid\">\r\n                                <div class=\"sixteen wide column row\">\r\n                                    <div class=\"ten wide column\">\r\n                                        <h2>Filters</h2>\r\n                                    </div>\r\n                                    <div class=\"six wide column right\">\r\n                                        <a>Clear All</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"filter-list-block\">\r\n                            <div class=\"ui grid filter-block\">\r\n                                <div class=\"sixteen wide column row filters\">\r\n                                    <div class=\"sixteen wide column\">\r\n                                        <div class=\"ui grid\">\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"ten wide column\">\r\n                                                    <h4>Specify Hotel</h4>\r\n                                                </div>\r\n                                                <div class=\"six wide column right\">\r\n                                                    <a>Clear</a>\r\n                                                </div>\r\n                                            </div>\r\n                                    \r\n                                            <div class=\"sixteen wide column row pt-0\">\r\n                                                <div class=\"sixteen wide column\">\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"text\" value=\"\" [(ngModel)]=\"hotelName\" [ngModelOptions]=\"{standalone: true}\" />\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                  \r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"sixteen wide column row filters\">\r\n                                    <div class=\"sixteen wide column\">\r\n                                        <div class=\"ui grid\">\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"ten wide column\">\r\n                                                    <h4>Star Rating</h4>\r\n                                                </div>\r\n                                                <div class=\"six wide column right\">\r\n                                                    <a>Clear All</a>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row pt-0 star-rating-block\">\r\n                                                <div class=\"sixteen wide column rating-list-block\">\r\n                                                    <div class=\"ui checkbox\">\r\n                                                        <input type=\"checkbox\" name=\"fivestar\" [(ngModel)]=\"ratings[5].selected\"  (checked)=\"ratings[5].selected\"  [ngModelOptions]=\"{standalone: true}\"  (click)=\"setRating(0)\">\r\n                                                        <label for=\"fivestar\">\r\n                                                            <img src=\"./../../../../../assets/icons/rating-star-yellow.svg\"/>\r\n                                                            <img src=\"./../../../../../assets/icons/rating-star-yellow.svg\"/>\r\n                                                            <img src=\"./../../../../../assets/icons/rating-star-yellow.svg\"/>\r\n                                                            <img src=\"./../../../../../assets/icons/rating-star-yellow.svg\"/>\r\n                                                            <img src=\"./../../../../../assets/icons/rating-star-yellow.svg\"/>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"sixteen wide column rating-list-block\">\r\n                                                    <div class=\"ui checkbox\">\r\n                                                        <input type=\"checkbox\" name=\"fourstar\" [(ngModel)]=\"ratings[4].selected\"  (checked)=\"ratings[4].selected\"  [ngModelOptions]=\"{standalone: true}\"  (click)=\"setRating(4)\">\r\n                                                        <label for=\"fourstar\">\r\n                                                            <img src=\"./../../../../../assets/icons/rating-star-yellow.svg\"/>\r\n                                                            <img src=\"./../../../../../assets/icons/rating-star-yellow.svg\"/>\r\n                                                            <img src=\"./../../../../../assets/icons/rating-star-yellow.svg\"/>\r\n                                                            <img src=\"./../../../../../assets/icons/rating-star-yellow.svg\"/>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"sixteen wide column rating-list-block\">\r\n                                                    <div class=\"ui checkbox\">\r\n                                                        <input type=\"checkbox\" name=\"threestar\" [(ngModel)]=\"ratings[3].selected\"  (checked)=\"ratings[3].selected\"  [ngModelOptions]=\"{standalone: true}\"  (click)=\"setRating(3)\">\r\n                                                        <label for=\"threestar\">\r\n                                                            <img src=\"./../../../../../assets/icons/rating-star-yellow.svg\"/>\r\n                                                            <img src=\"./../../../../../assets/icons/rating-star-yellow.svg\"/>\r\n                                                            <img src=\"./../../../../../assets/icons/rating-star-yellow.svg\"/>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"sixteen wide column rating-list-block\">\r\n                                                    <div class=\"ui checkbox\">\r\n                                                        <input type=\"checkbox\" name=\"twostar\" [(ngModel)]=\"ratings[2].selected\"  (checked)=\"ratings[2].selected\"  [ngModelOptions]=\"{standalone: true}\"  (click)=\"setRating(2)\">\r\n                                                        <label for=\"twostar\">\r\n                                                            <img src=\"./../../../../../assets/icons/rating-star-yellow.svg\"/>\r\n                                                            <img src=\"./../../../../../assets/icons/rating-star-yellow.svg\"/>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"sixteen wide column rating-list-block\">\r\n                                                    <div class=\"ui checkbox\">\r\n                                                        <input type=\"checkbox\" name=\"onestar\" [(ngModel)]=\"ratings[1].selected\"  (checked)=\"ratings[1].selected\"  [ngModelOptions]=\"{standalone: true}\"  (click)=\"setRating(1)\" > \r\n                                                        <label for=\"onestar\">\r\n                                                            <img src=\"./../../../../../assets/icons/rating-star-yellow.svg\"/>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"sixteen wide column rating-list-block\">\r\n                                                    <div class=\"ui checkbox\">\r\n                                                        <input type=\"checkbox\" name=\"uncategorized\" [(ngModel)]=\"ratings[0].selected\" (checked)=\"ratings[0].selected\" [ngModelOptions]=\"{standalone: true}\" (click)=\"setRating(0)\" >\r\n                                                        <label for=\"uncategorized\" class=\"text\">Uncategorized</label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"sixteen wide column rating-list-block\">\r\n                                                    <div class=\"ui checkbox\">\r\n                                                        <input type=\"checkbox\" name=\"ratingAll\" [(ngModel)]=\"ratingAll\" [ngModelOptions]=\"{standalone: true}\" (click)=\"selectRatings()\" >\r\n                                                        <label for=\"ratingAll\"> ALL\r\n                                                            <!-- <img src=\"./../../../../../assets/icons/rating-star-yellow.svg\"/> -->\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"sixteen wide column row filters\">\r\n                                    <div class=\"sixteen wide column\">\r\n                                        <div class=\"ui grid price-fliter-block\">\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"ten wide column\">\r\n                                                    <h4>Price range</h4>\r\n                                                    <p class=\"price-desc\">320 AED - 840 AED</p>\r\n                                                </div>\r\n                                                <div class=\"six wide column right\">\r\n                                                    <a>Clear All</a>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row pt-0\">\r\n                                                <div class=\"sixteen wide column\">\r\n                                                    <input type=\"text\" value=\"AED 620\" [(ngModel)]=\"minPrice\" [ngModelOptions]=\"{standalone: true}\" />\r\n                                                    <input type=\"text\" value=\"AED 2400\" [(ngModel)]=\"maxPrice\" [ngModelOptions]=\"{standalone: true}\"/>\r\n                                                    <button class=\"go\" (click)=\"rangeFilter()\" style=\"width: 70px !important;\">Reset </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"sixteen wide column row filters meal-block\">\r\n                                    <div class=\"sixteen wide column\">\r\n                                        <div class=\"ui grid\">\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"ten wide column\">\r\n                                                    <h4>Meal Plan</h4>\r\n                                                </div>\r\n                                                <div class=\"six wide column right\">\r\n                                                    <a>Select All</a>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row pt-0 star-rating-block\">\r\n                                                <div class=\"sixteen wide column rating-list-block\">\r\n                                                    <div class=\"ui checkbox\">\r\n                                                        <input type=\"checkbox\" name=\"roomOnly\">\r\n                                                        <label for=\"roomOnly\" class=\"text\">\r\n                                                            Room Only\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"sixteen wide column rating-list-block\">\r\n                                                    <div class=\"ui checkbox\">\r\n                                                        <input type=\"checkbox\" name=\"bed\">\r\n                                                        <label for=\"bed\" class=\"text\">\r\n                                                            Bed and Breakfast\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"sixteen wide column rating-list-block\">\r\n                                                    <div class=\"ui checkbox\">\r\n                                                        <input type=\"checkbox\" name=\"half\">\r\n                                                        <label for=\"half\" class=\"text\">\r\n                                                            Half Board\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"sixteen wide column row filters facility-block\">\r\n                                    <div class=\"sixteen wide column\">\r\n                                        <div class=\"ui grid\">\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"ten wide column\">\r\n                                                    <h4>Facilities</h4>\r\n                                                </div>\r\n                                                <div class=\"six wide column right\">\r\n                                                    <a>Select All</a>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row pt-0 star-rating-block\">\r\n                                                <div class=\"sixteen wide column rating-list-block\">\r\n                                                    <div class=\"ui grid\">\r\n                                                        <div class=\"sixteen wide column row\">\r\n                                                            <div class=\"eight wide column\">\r\n                                                                <div class=\"ui checkbox\">\r\n                                                                    <input type=\"checkbox\" name=\"breakfast\">\r\n                                                                    <label for=\"breakfast\" class=\"text\">\r\n                                                                        Breakfast\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"eight wide column\">\r\n                                                                <div class=\"ui checkbox\">\r\n                                                                    <input type=\"checkbox\" name=\"parking\">\r\n                                                                    <label for=\"parking\" class=\"text\">\r\n                                                                        Parking\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"sixteen wide column rating-list-block\">\r\n                                                    <div class=\"ui grid\">\r\n                                                        <div class=\"sixteen wide column row\">\r\n                                                            <div class=\"eight wide column\">\r\n                                                                <div class=\"ui checkbox\">\r\n                                                                    <input type=\"checkbox\" name=\"pool\">\r\n                                                                    <label for=\"pool\" class=\"text\">\r\n                                                                        Pool\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"eight wide column\">\r\n                                                                <div class=\"ui checkbox\">\r\n                                                                    <input type=\"checkbox\" name=\"wifi\">\r\n                                                                    <label for=\"wifi\" class=\"text\">\r\n                                                                        Wifi\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"sixteen wide column rating-list-block\">\r\n                                                    <div class=\"ui checkbox\">\r\n                                                        <input type=\"checkbox\" name=\"bar\">\r\n                                                        <label for=\"bar\" class=\"text\">\r\n                                                            Bar\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"sixteen wide column row filters location-block\">\r\n                                    <div class=\"sixteen wide column\">\r\n                                        <div class=\"ui grid\">\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"ten wide column\">\r\n                                                    <h4>Nearest Location</h4>\r\n                                                </div>\r\n                                                <div class=\"six wide column right\">\r\n                                                    <a>Select All</a>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"sixteen wide column row pt-0 star-rating-block\">\r\n                                                <div class=\"sixteen wide column rating-list-block\">\r\n                                                    <div class=\"ui checkbox\">\r\n                                                        <input type=\"checkbox\" name=\"loc1\">\r\n                                                        <label for=\"loc1\" class=\"text\">\r\n                                                            Rashed Stadium, Dubai, United Arab Emirates\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"sixteen wide column rating-list-block\">\r\n                                                    <div class=\"ui checkbox\">\r\n                                                        <input type=\"checkbox\" name=\"loc2\">\r\n                                                        <label for=\"loc2\" class=\"text\">\r\n                                                            Rashed Stadium, Dubai, United Arab Emirates\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"sixteen wide column rating-list-block\">\r\n                                                    <div class=\"ui checkbox\">\r\n                                                        <input type=\"checkbox\" name=\"loc3\">\r\n                                                        <label for=\"loc3\" class=\"text\">\r\n                                                            Rashed Stadium, Dubai, United Arab Emirates\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"sixteen wide column rating-list-block\">\r\n                                                    <div class=\"ui checkbox\">\r\n                                                        <input type=\"checkbox\" name=\"loc4\">\r\n                                                        <label for=\"loc4\" class=\"text\">\r\n                                                            Rashed Stadium, Dubai, United Arab Emirates\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<jw-modal id=\"map-view\" class=\"map-view\">\r\n    <div class=\"ui grid\">\r\n        <div class=\"sixteen wide column row\">\r\n            <div class=\"seven wide column\">\r\n                <div class=\"modify-search-block\">\r\n                    <div class=\"ui grid\">\r\n                        <div class=\"sixteen wide column row\">\r\n                            <div class=\"eight wide column p-0 text-left\">\r\n                            </div>\r\n                            <div class=\"eight wide column p-0\">\r\n                                <button>Sort By: Price: Low to High <img src=\"./../../../../../assets/icons/downArrow-black.svg\" width=\"10\" height=\"8\"/></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"search-list-block\">\r\n                    <div class=\"ui grid item-block\">\r\n                        <div class=\"sixteen wide column row\">\r\n                            <div class=\"six wide column item-image\">\r\n                                <!-- <img src=\"./../../../../../assets/img/hotel-img-1.png\" title=\"Royalton Hotel Dubai\" /> -->\r\n                            </div>\r\n                            <div class=\"ten wide column item-details\">\r\n                                <div class=\"ui grid\">\r\n                                    <div class=\"sixteen wide column row\">\r\n                                        <div class=\"sixteen wide column\">\r\n                                            <h2>Royalton Hotel Dubai</h2>\r\n                                            <p class=\"light\">Barsha Heights (Tecom) , Dubai</p>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"sixteen wide column row pt-0\">\r\n                                        <div class=\"eight wide column rating-details\">\r\n                                            <span class=\"light\">4-star hotel</span>\r\n                                            <span> . </span>\r\n                                            <img src=\"./../../../../../assets/icons/tripadv-icon.svg\" class=\"tripadvicon\"/>\r\n                                            <img src=\"./../../../../../assets/icons/green-check.svg\"/>\r\n                                            <img src=\"./../../../../../assets/icons/green-check.svg\" />\r\n                                            <img src=\"./../../../../../assets/icons/green-check.svg\" />\r\n                                            <img src=\"./../../../../../assets/icons/green-uncheck.svg\" />\r\n                                            <img src=\"./../../../../../assets/icons/green-uncheck.svg\" />\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"sixteen wide column row pt-0\">\r\n                                        <div class=\"eight wide column amenities-block\">\r\n                                            <a>\r\n                                                <img src=\"./../../../../../assets/icons/wifi-icon.svg\" />\r\n                                            </a>\r\n                                            <a>\r\n                                                <img src=\"./../../../../../assets/icons/pool-icon.svg\" />\r\n                                            </a>\r\n                                            <a>\r\n                                                <img src=\"./../../../../../assets/icons/meal-icon.svg\" />\r\n                                            </a>\r\n                                            <a>\r\n                                                <img src=\"./../../../../../assets/icons/drinks-icon.svg\" />\r\n                                            </a>\r\n                                            <a>\r\n                                                <img src=\"./../../../../../assets/icons/double-arrow.svg\" />\r\n                                            </a>\r\n                                            <a>\r\n                                                <img src=\"./../../../../../assets/icons/park-icon.svg\" />\r\n                                            </a>\r\n                                        </div>\r\n                                        <div class=\"eight wide column right price-block\">\r\n                                            <span>Starting form</span>\r\n                                            <p>460.80 AED</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"search-list-block\">\r\n                    <div class=\"ui grid item-block\">\r\n                        <div class=\"sixteen wide column row\">\r\n                            <div class=\"six wide column item-image\">\r\n                                <!-- <img src=\"./../../../../../assets/img/hotel-img-1.png\" title=\"Royalton Hotel Dubai\" /> -->\r\n                            </div>\r\n                            <div class=\"ten wide column item-details\">\r\n                                <div class=\"ui grid\">\r\n                                    <div class=\"sixteen wide column row\">\r\n                                        <div class=\"sixteen wide column\">\r\n                                            <h2>Royalton Hotel Dubai</h2>\r\n                                            <p class=\"light\">Barsha Heights (Tecom) , Dubai</p>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"sixteen wide column row pt-0\">\r\n                                        <div class=\"eight wide column rating-details\">\r\n                                            <span class=\"light\">4-star hotel</span>\r\n                                            <span> . </span>\r\n                                            <img src=\"./../../../../../assets/icons/tripadv-icon.svg\" class=\"tripadvicon\"/>\r\n                                            <img src=\"./../../../../../assets/icons/green-check.svg\"/>\r\n                                            <img src=\"./../../../../../assets/icons/green-check.svg\" />\r\n                                            <img src=\"./../../../../../assets/icons/green-check.svg\" />\r\n                                            <img src=\"./../../../../../assets/icons/green-uncheck.svg\" />\r\n                                            <img src=\"./../../../../../assets/icons/green-uncheck.svg\" />\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"sixteen wide column row pt-0\">\r\n                                        <div class=\"eight wide column amenities-block\">\r\n                                            <a>\r\n                                                <img src=\"./../../../../../assets/icons/wifi-icon.svg\" />\r\n                                            </a>\r\n                                            <a>\r\n                                                <img src=\"./../../../../../assets/icons/pool-icon.svg\" />\r\n                                            </a>\r\n                                            <a>\r\n                                                <img src=\"./../../../../../assets/icons/meal-icon.svg\" />\r\n                                            </a>\r\n                                            <a>\r\n                                                <img src=\"./../../../../../assets/icons/drinks-icon.svg\" />\r\n                                            </a>\r\n                                            <a>\r\n                                                <img src=\"./../../../../../assets/icons/double-arrow.svg\" />\r\n                                            </a>\r\n                                            <a>\r\n                                                <img src=\"./../../../../../assets/icons/park-icon.svg\" />\r\n                                            </a>\r\n                                        </div>\r\n                                        <div class=\"eight wide column right price-block\">\r\n                                            <span>Starting form</span>\r\n                                            <p>460.80 AED</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"nine wide column\">\r\n<agm-map \r\n  [latitude]=\"lat\"\r\n  [longitude]=\"lng\"\r\n  [zoom]=\"zoom\"\r\n  [disableDefaultUI]=\"false\"\r\n  [zoomControl]=\"false\"\r\n  (mapClick)=\"mapClicked($event)\">\r\n\r\n  <agm-marker \r\n      *ngFor=\"let m of markers; let i = index\"\r\n      (markerClick)=\"clickedMarker(m.label, i)\"\r\n      [latitude]=\"m.lat\"\r\n      [longitude]=\"m.lng\"\r\n      [markerDraggable]=\"m.draggable\"\r\n      (dragEnd)=\"markerDragEnd(m, $event)\">\r\n      \r\n    <agm-info-window>\r\n      <strong>{{m.label}}</strong>\r\n    </agm-info-window>\r\n    \r\n  </agm-marker>\r\n  \r\n  <agm-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\" \r\n      [radius]=\"5000\"\r\n      [fillColor]=\"'red'\"\r\n      [circleDraggable]=\"true\"\r\n      [editable]=\"true\">\r\n  </agm-circle>\r\n\r\n</agm-map> \r\n            </div>\r\n        </div>\r\n    </div>\r\n</jw-modal>\r\n\r\n<jw-modal id=\"rate-modal\" class=\"rate-modal modal\">\r\n    <div class=\"ui grid\">\r\n        <div class=\"sixteen wide column row p-0\">\r\n            <div class=\"sixteen wide column\">\r\n                <h2>Rates Breakup</h2>\r\n                <i class=\"close icon\" (click)=\"closeModal('rate-modal')\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"sixteen wide column row border-block\">\r\n            <div class=\"sixteen wide column p-0\">\r\n                <div class=\"ui grid m-12\">\r\n                    <div class=\"sixteen wide column row\">\r\n                        <div class=\"eight wide column\">\r\n                            <h4>{{ratePolicyRoom.hotel_name}} </h4>\r\n                            <div class=\"ui grid m-0\">\r\n                                <div class=\"sixteen wide column row detail-block\">\r\n                                    <div class=\"five wide column detail-label\">\r\n                                        <p>Check in:  </p>\r\n                                        <p>{{(searchCriteria.checkInUnix *1000) | date:'medium' }} </p>\r\n                                    </div>\r\n                                    <div class=\"five wide column detail-label\">\r\n                                        <p>Check out:</p>\r\n                                        <p>{{(searchCriteria.checkOutUnix *1000) | date:'medium' }}</p>\r\n                                    </div>\r\n                                    <div class=\"six wide column detail-label\">\r\n                                        <p>No.Of Nights</p>\r\n                                        <p>{{   numberOfNights(searchCriteria.checkInUnix, searchCriteria.checkOutUnix) }}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"eight wide column\">\r\n                            <div class=\"ui grid\">\r\n                                <div class=\"sixteen wide column row total-row\">\r\n                                    <div class=\"eight wide column right\">\r\n                                        <h4>Total:</h4>\r\n                                        <p>(Inclusive of tax)</p>\r\n                                    </div>\r\n                                    <div class=\"eight wide column\">\r\n                                        <div class=\"tot-price\">{{ratePolicyRoom.currency_code}} {{ratePolicyRoom.markup_price}}</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"sixteen wide column row pt-0\">\r\n                        <div class=\"sixteen wide column\">\r\n                            <table class=\"ui celled table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"date-row\">ROOMS</th>\r\n                                        <th>\r\n                                            Room 1 <span>(2 Adult)</span>\r\n                                            TWIN STANDARD\r\n                                            <span>(Room Only)</span>\r\n                                        </th>\r\n                                        <th>\r\n                                            Room 2 <span>(2 Adult)</span>\r\n                                            TWIN STANDARD\r\n                                            <span>(Room Only)</span>\r\n                                        </th>\r\n                                        <th>\r\n                                            Room 3 <span>(2 Adult)</span>\r\n                                            TWIN STANDARD\r\n                                            <span>(Room Only)</span>\r\n                                        </th>\r\n                                        <th>\r\n                                            Room 4 <span>(2 Adult)</span>\r\n                                            TWIN STANDARD\r\n                                            <span>(Room Only)</span>\r\n                                        </th>\r\n                                        <th>\r\n                                            Room 5 <span>(2 Adult)</span>\r\n                                            TWIN STANDARD\r\n                                            <span>(Room Only)</span>\r\n                                        </th>\r\n                                        <th>\r\n                                            Room 6 <span>(2 Adult)</span>\r\n                                            TWIN STANDARD\r\n                                            <span>(Room Only)</span>\r\n                                        </th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td data-label=\"date\" class=\"date-row\">\r\n                                            <p>Thursday</p>\r\n                                            <p>28 Feb</p>\r\n                                        </td>\r\n                                        <td>173.39</td>\r\n                                        <td>173.39</td>\r\n                                        <td>173.39</td>\r\n                                        <td>173.39</td>\r\n                                        <td>173.39</td>\r\n                                        <td>173.39</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td data-label=\"date\" class=\"date-row\">\r\n                                            <p>Friday</p>\r\n                                            <p>29 Feb</p>\r\n                                        </td>\r\n                                        <td>173.39</td>\r\n                                        <td>173.39</td>\r\n                                        <td>173.39</td>\r\n                                        <td>173.39</td>\r\n                                        <td>173.39</td>\r\n                                        <td>173.39</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td data-label=\"date\" class=\"date-row\">\r\n                                            <p>Saturday</p>\r\n                                            <p>01 Mar</p>\r\n                                        </td>\r\n                                        <td>173.39</td>\r\n                                        <td>173.39</td>\r\n                                        <td>173.39</td>\r\n                                        <td>173.39</td>\r\n                                        <td>173.39</td>\r\n                                        <td>173.39</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td data-label=\"date\" class=\"date-row\">\r\n                                            <p>Sunday</p>\r\n                                            <p>02 Mar</p>\r\n                                        </td>\r\n                                        <td>173.39</td>\r\n                                        <td>173.39</td>\r\n                                        <td>173.39</td>\r\n                                        <td>173.39</td>\r\n                                        <td>173.39</td>\r\n                                        <td>173.39</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td data-label=\"date\" class=\"date-row\">\r\n                                            <p>Total</p>\r\n                                            <p>(Inclusive Of Tax)</p>\r\n                                        </td>\r\n                                        <td>{{ratePolicyRoom.currency_code}} {{ratePolicyRoom.markup_price}}</td>\r\n                                        <td>{{ratePolicyRoom.currency_code}} {{ratePolicyRoom.markup_price}}</td>\r\n                                        <td>{{ratePolicyRoom.currency_code}} {{ratePolicyRoom.markup_price}}</td>\r\n                                        <td>{{ratePolicyRoom.currency_code}} {{ratePolicyRoom.markup_price}}</td>\r\n                                        <td>{{ratePolicyRoom.currency_code}} {{ratePolicyRoom.markup_price}}</td>\r\n                                        <td>{{ratePolicyRoom.currency_code}} {{ratePolicyRoom.markup_price}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"sixteen wide column row p-0 cancellation-policy\">\r\n                        <div class=\"sixteen wide column\">\r\n                            <h2>Cancellation Policy (Timezone: {{ratePolicyRoom.timezone}} )</h2>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"sixteen wide column row border-block cancel-block\">\r\n                        <div class=\"sixteen wide column p-0\">\r\n                            <div class=\"ui grid m-12\"> \r\n                                <div class=\"sixteen wide column row borderBottom\" *ngFor=\"let policy of ratePolicyRoom.cancel_policy\">\r\n                                    <div class=\"twelve wide column\">\r\n                                        <div class=\"ui grid m-12\">\r\n                                            <div class=\"sixteen wide column row borderLeft\">\r\n                                                <div class=\"eight wide column\">\r\n                                                    <div class=\"label\">From Date:</div>\r\n                                                    <div class=\"date\">{{(policy.fromUnix *1000) | date:'medium' }}  </div>\r\n                                                </div>\r\n                                                <div class=\"eight wide column\">\r\n                                                    <div class=\"label\">To Date:</div>\r\n                                                    <div class=\"date\">{{(policy.toUnix *1000) | date:'medium' }} </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"four wide column\">\r\n                                        <div class=\"price-total\">{{policy.currencyCode}} {{policy.markup_price}}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"sixteen wide column row\">\r\n                                    <div class=\"sixteen wide column\">\r\n                                        <div class=\"policy-detail\">\r\n                                            <h3>Inclusion</h3>\r\n                                                <p> \r\n                                                <!--   *ngFor=\"let policy of ratePolicyRoom.inclusion\" -->\r\n                                                    {{ratePolicyRoom.inclusion}}\r\n                                                </p>\r\n                                          \r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</jw-modal>\r\n\r\n<jw-modal id=\"cancel-modal\" class=\"cancel-modal modal\">\r\n    <div class=\"ui grid\">\r\n        <div class=\"sixteen wide column row p-0\">\r\n            <div class=\"sixteen wide column\">\r\n                <h2>Cancellation Policy (Timezone: {{ratePolicyRoom.timezone}})</h2>\r\n                <i class=\"close icon\" (click)=\"closeModal('cancel-modal')\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"sixteen wide column row border-block cancel-block\">\r\n            <div class=\"sixteen wide column p-0\">\r\n                <div class=\"ui grid m-12\">\r\n                    <div class=\"sixteen wide column row borderBottom\" *ngFor=\"let policy of ratePolicyRoom.cancel_policy\">\r\n                        <div class=\"twelve wide column\">\r\n                            <div class=\"ui grid m-12\">\r\n                                <div class=\"sixteen wide column row borderLeft\">\r\n                                    <div class=\"eight wide column\">\r\n                                        <div class=\"label\">From Date:</div>\r\n                                        <div class=\"date\">{{(policy.fromUnix *1000) | date:'medium' }}  </div>\r\n                                    </div>\r\n                                    <div class=\"eight wide column\">\r\n                                        <div class=\"label\">To Date:</div>\r\n                                        <div class=\"date\">{{(policy.toUnix *1000) | date:'medium' }} </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"four wide column\">\r\n                            <div class=\"price-total\">{{policy.currencyCode}} {{policy.markup_price}}</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"sixteen wide column row\">\r\n                        <div class=\"sixteen wide column\">\r\n                            <div class=\"policy-detail\">\r\n                                <h3>Inclusion</h3>\r\n                                <p>\r\n                                   {{ratePolicyRoom.inclusion}}\r\n                                </p>\r\n                                <!-- <p>\r\n                                    Eating and drinking facilities include coffee shop or café and barbecue grill(s).\r\n                                </p>\r\n                                <p>\r\n                                    If a compulsory city tax is applicable for the hotel the guests has to pay this tax directly at the hotel before the end of the stay.\r\n                                </p> -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</jw-modal>\r\n<app-hotel-passenger-details *ngIf=\"showPassengerDetail\" [blockedRoom]=\"blockedRoom\" [selectedHotel]=\"selectedHotel\"></app-hotel-passenger-details>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/search/hotels/hotels.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/search/hotels/hotels.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSearchHotelsHotelsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"hotels card-wrapper animated fadeInUp\">\r\n    <div class=\"container\">\r\n        <h3 class=\"hotels_title\">{{screenTitle}}</h3>\r\n        <!-- <button>Modify Search</button> -->\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n    <div class=\"ui bottom attached active tab segment\">\r\n        <form [formGroup]=\"hotelSearchForm\" *ngIf=\"!showSearchResult\" (ngSubmit)=\"searchHandler()\">\r\n            <div class=\"conatiner-fluid\">\r\n                <div class=\"ui grid\">\r\n                    <div class=\"sixteen wide column row\">\r\n                        <div class=\"twelve wide column hotel-grid\">\r\n                            <div class=\"ui grid hotel-search-block\">\r\n                                <div class=\"sixteen wide column row\">\r\n                                    <!-- <div class=\"six wide column\">\r\n                                        <label>Destination</label>\r\n                                         <div class=\"ui left icon input fluid\">\r\n                                            <input type=\"text\" placeholder=\"Destination\" name=\"hotel-dest\" formControlName=\"hotel-dest\" value=\"\" required />\r\n                                            <i class=\"icon\">\r\n                                                <img src=\"./../../../../assets/icons/pin-drop.svg\"\r\n                                                class=\"pass_input__placeholder-icon cal\" />\r\n                                            </i>\r\n                                        </div>\r\n                                        <div class=\"ui left icon input fluid\">\r\n                                        <select formControlName=\"city\" class=\"ui selection search dropdown flights_airline-dropdown\" autocomplete=\"off\" >\r\n                                            <option>Select City</option>\r\n                                            <option *ngFor=\"let city of cities\" value=\"{{city.city_id}}\">{{city.label}}</option>\r\n                                        </select>\r\n                                        </div>\r\n                                    </div> -->\r\n                                    <div class=\"six wide column\">\r\n                                        <label>Destination<span>*</span></label>\r\n                                        <div>\r\n                                            <select class=\"ui fluid search dropdown dropdownCity\" formControlName=\"city\" required > <!-----(change)=\"onChangeCity(city)\" -->\r\n                                                <option value=\"\">Destination</option>\r\n                                                <option class=\"city\" *ngFor=\"let city of cities\" value=\"city\">{{city.label}}</option>\r\n                                            </select>\r\n                                            <!-- <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.city.errors.required\" class=\"text-danger\">City is required</div>\r\n                                            </div> -->\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- <div class=\"four wide column\">\r\n                                        <label>Check In Date</label>\r\n                                        <div class=\"ui left icon input fluid\">\r\n                                            <input type=\"date\" placeholder=\"Check In Date\" formControlName=\"check_in\" name=\"check_in\" id=\"check_in\"  value=\"\" (input)=\"getNights()\" required />\r\n                                            <i class=\"icon\">\r\n                                                <img src=\"./../../../../../assets/icons/calendar.svg\"\r\n                                                class=\"pass_input__placeholder-icon cal\" />\r\n                                            </i>\r\n                                        </div>\r\n                                    </div> -->\r\n                                   \r\n                                    <div class=\"four wide column\">\r\n                                        <div class=\"ten wide column\">\r\n                                            <label>Check In Date<span>*</span></label>\r\n                                            <div class=\"ui left icon input fluid\">\r\n                                                <input type=\"text\"  placeholder=\"Check In Date\" formControlName=\"check_in\" name=\"check_in\" value=\"\" (input)=\"getNights()\" required  />\r\n                                                <i class=\"icon\">\r\n                                                    <img src=\"./../../../../../assets/icons/calendar.svg\"\r\n                                                    class=\"pass_input__placeholder-icon cal\" />\r\n                                                </i>\r\n                                            </div>\r\n                                            <!-- <div *ngIf=\"submitted && f.check_in.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.check_in.errors.required\" class=\"text-danger\">Check in is required</div>\r\n                                            </div> -->\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"four wide column\">\r\n                                        <div class=\"ten wide column\">\r\n                                            <label>Check Out Date</label>\r\n                                            <div class=\"ui left icon input fluid\">\r\n                                                <input type=\"text\"  placeholder=\"Check Out Date\" formControlName=\"check_out\" id=\"check_out\" name=\"check_out\" value=\"\" (input)=\"getNights()\" required  />\r\n                                                <i class=\"icon\">\r\n                                                    <img src=\"./../../../../../assets/icons/calendar.svg\"\r\n                                                    class=\"pass_input__placeholder-icon cal\" />\r\n                                                </i>\r\n                                            </div>\r\n                                            <!-- <div *ngIf=\"submitted && f.check_out.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.check_out.errors.required\" class=\"text-danger\">Check out is required</div>\r\n                                            </div> -->\r\n                                        </div>\r\n                                    </div>\r\n<!--                               \r\n                                    <div class=\"four wide column\">\r\n                                        <label>Check Out Date</label>\r\n                                        <div class=\"ui left icon input fluid\">\r\n                                            <input type=\"date\" placeholder=\"Check Out Date\" formControlName=\"check_out\" id=\"check_out\" name=\"check_out\" value=\"\" (input)=\"getNights()\" required />\r\n                                            <i class=\"icon\">\r\n                                                <img src=\"./../../../../../assets/icons/calendar.svg\"\r\n                                                class=\"pass_input__placeholder-icon cal\" />\r\n                                            </i>\r\n                                        </div>\r\n                                    </div> -->\r\n                                    <div class=\"two wide column\">\r\n                                        <label>Nights</label>\r\n                                        <div class=\"ui input fluid\">\r\n                                            <input type=\"text\" placeholder=\"Nights\" formControlName=\"nights\" name=\"nights\" value=\"{{number_of_nights}}\" required/>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"sixteen wide column row\">\r\n                                    <div class=\"sixteen wide column\">\r\n                                        <label>Rooms</label>\r\n                                        <div class=\"add-block\">\r\n                                            <input type=\"number\" class=\"room-no\" [(ngModel)]=\"total_rooms\" formControlName=\"no_of_rooms\" max=\"5\" value=\"{{total_rooms}}\"/>\r\n                                            <a title=\"Reduce number of rooms\" (click)=\"decreaseRoom()\">-</a>\r\n                                            <a title=\"Add number of rooms\" (click)=\"increaseRoom()\">+</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"sixteen wide column row\">\r\n                                <div class=\"six wide column row\">\r\n                                    <div class=\"sixteen wide column\">\r\n                                        <div class=\"room-detail-block\" *ngIf=\"room_1_show\">\r\n                                            <label class=\"head\">\r\n                                                Room 1 \r\n                                                <span> Clear </span>\r\n                                            </label>\r\n                                            <div class=\"ui grid\">\r\n                                                <div class=\"sixteen wide column row\">\r\n                                                    <div class=\"sixteen wide column\">\r\n                                                        <div class=\"ui grid\">\r\n                                                            <div class=\"sixteen wide column row\">\r\n                                                                <div class=\"four wide column\">\r\n                                                                    <label>Adult</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" formControlName=\"room_one_adults\">\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <!-- <option value=\"3\">3</option> -->\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"four wide column\">\r\n                                                                    <label>Children</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\"  [(ngModel)]=\"room_one_children\" formControlName=\"room_one_children\">\r\n                                                                            <option value=\"0\">0</option>\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                            <option value=\"4\">4</option>\r\n                                                                            <option value=\"5\">5</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                              \r\n                                                                <div class=\"two wide column\" *ngIf=\"room_one_children>0\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" formControlName=\"r_one_ch_one\">\r\n                                                                            <option value=\"0\">0</option>\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                            <option value=\"4\">4</option>\r\n                                                                            <option value=\"5\">5</option>\r\n                                                                            <option value=\"6\">6</option>\r\n                                                                            <option value=\"7\">7</option>\r\n                                                                            <option value=\"8\">8</option>\r\n                                                                            <option value=\"9\">9</option>\r\n                                                                            <option value=\"10\">10</option>\r\n                                                                            <option value=\"11\">11</option>\r\n                                                                            <option value=\"12\">12</option>\r\n                                                                            <option value=\"13\">13</option>\r\n                                                                            <option value=\"14\">14</option>\r\n                                                                            <option value=\"15\">15</option>\r\n                                                                            <option value=\"16\">16</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>                                                                  \r\n                                                                <div class=\"two wide column\" *ngIf=\"room_one_children>1\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" formControlName=\"r_one_ch_two\" >\r\n                                                                            <option value=\"0\">0</option>\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                            <option value=\"4\">4</option>\r\n                                                                            <option value=\"5\">5</option>\r\n                                                                            <option value=\"6\">6</option>\r\n                                                                            <option value=\"7\">7</option>\r\n                                                                            <option value=\"8\">8</option>\r\n                                                                            <option value=\"9\">9</option>\r\n                                                                            <option value=\"10\">10</option>\r\n                                                                            <option value=\"11\">11</option>\r\n                                                                            <option value=\"12\">12</option>\r\n                                                                            <option value=\"13\">13</option>\r\n                                                                            <option value=\"14\">14</option>\r\n                                                                            <option value=\"15\">15</option>\r\n                                                                            <option value=\"16\">16</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                 <div class=\"two wide column\" *ngIf=\"room_one_children>2\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\"  formControlName=\"r_one_ch_three\"> \r\n                                                                            <option value=\"0\">0</option>\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                            <option value=\"4\">4</option>\r\n                                                                            <option value=\"5\">5</option>\r\n                                                                            <option value=\"6\">6</option>\r\n                                                                            <option value=\"7\">7</option>\r\n                                                                            <option value=\"8\">8</option>\r\n                                                                            <option value=\"9\">9</option>\r\n                                                                            <option value=\"10\">10</option>\r\n                                                                            <option value=\"11\">11</option>\r\n                                                                            <option value=\"12\">12</option>\r\n                                                                            <option value=\"13\">13</option>\r\n                                                                            <option value=\"14\">14</option>\r\n                                                                            <option value=\"15\">15</option>\r\n                                                                            <option value=\"16\">16</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\" *ngIf=\"room_one_children>3\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" formControlName=\"r_one_ch_four\"> \r\n                                                                            <option value=\"0\">0</option>\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                            <option value=\"4\">4</option>\r\n                                                                            <option value=\"5\">5</option>\r\n                                                                            <option value=\"6\">6</option>\r\n                                                                            <option value=\"7\">7</option>\r\n                                                                            <option value=\"8\">8</option>\r\n                                                                            <option value=\"9\">9</option>\r\n                                                                            <option value=\"10\">10</option>\r\n                                                                            <option value=\"11\">11</option>\r\n                                                                            <option value=\"12\">12</option>\r\n                                                                            <option value=\"13\">13</option>\r\n                                                                            <option value=\"14\">14</option>\r\n                                                                            <option value=\"15\">15</option>\r\n                                                                            <option value=\"16\">16</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\" *ngIf=\"room_one_children>4\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" formControlName=\"r_one_ch_five\"> \r\n                                                                            <option value=\"0\">0</option>\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                            <option value=\"4\">4</option>\r\n                                                                            <option value=\"5\">5</option>\r\n                                                                            <option value=\"6\">6</option>\r\n                                                                            <option value=\"7\">7</option>\r\n                                                                            <option value=\"8\">8</option>\r\n                                                                            <option value=\"9\">9</option>\r\n                                                                            <option value=\"10\">10</option>\r\n                                                                            <option value=\"11\">11</option>\r\n                                                                            <option value=\"12\">12</option>\r\n                                                                            <option value=\"13\">13</option>\r\n                                                                            <option value=\"14\">14</option>\r\n                                                                            <option value=\"15\">15</option>\r\n                                                                            <option value=\"16\">16</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        \r\n                                        <div class=\"room-detail-block\" *ngIf=\"room_2_show\">\r\n                                            <label class=\"head\">\r\n                                                Room 2\r\n                                                <span> Clear </span>\r\n                                            </label>\r\n                                            <div class=\"ui grid\">\r\n                                                <div class=\"sixteen wide column row\">\r\n                                                    <div class=\"sixteen wide column\">\r\n                                                        <div class=\"ui grid\">\r\n                                                            <div class=\"sixteen wide column row\">\r\n                                                                <div class=\"two wide column\">\r\n                                                                    <label>Adult</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" formControlName=\"room_two_adults\">\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <!-- <option value=\"3\">3</option> -->\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\">\r\n                                                                    <label>Children</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" [(ngModel)]=\"room_two_children\" formControlName=\"room_two_children\">\r\n                                                                            <option value=\"0\">0</option>\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                            <option value=\"4\">4</option>\r\n                                                                            <option value=\"5\">5</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\" *ngIf=\"room_two_children>0\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" formControlName=\"r_two_ch_one\">\r\n                                                                            <option value=\"0\">0</option>\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                            <option value=\"4\">4</option>\r\n                                                                            <option value=\"5\">5</option>\r\n                                                                            <option value=\"6\">6</option>\r\n                                                                            <option value=\"7\">7</option>\r\n                                                                            <option value=\"8\">8</option>\r\n                                                                            <option value=\"9\">9</option>\r\n                                                                            <option value=\"10\">10</option>\r\n                                                                            <option value=\"11\">11</option>\r\n                                                                            <option value=\"12\">12</option>\r\n                                                                            <option value=\"13\">13</option>\r\n                                                                            <option value=\"14\">14</option>\r\n                                                                            <option value=\"15\">15</option>\r\n                                                                            <option value=\"16\">16</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                \r\n                                                                <div class=\"two wide column\" *ngIf=\"room_two_children>1\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" formControlName=\"r_two_ch_two\"> \r\n                                                                            <option value=\"0\">0</option>\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                            <option value=\"4\">4</option>\r\n                                                                            <option value=\"5\">5</option>\r\n                                                                            <option value=\"6\">6</option>\r\n                                                                            <option value=\"7\">7</option>\r\n                                                                            <option value=\"8\">8</option>\r\n                                                                            <option value=\"9\">9</option>\r\n                                                                            <option value=\"10\">10</option>\r\n                                                                            <option value=\"11\">11</option>\r\n                                                                            <option value=\"12\">12</option>\r\n                                                                            <option value=\"13\">13</option>\r\n                                                                            <option value=\"14\">14</option>\r\n                                                                            <option value=\"15\">15</option>\r\n                                                                            <option value=\"16\">16</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\" *ngIf=\"room_two_children>2\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" formControlName=\"r_two_ch_three\"> \r\n                                                                            <option value=\"0\">0</option>\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                            <option value=\"4\">4</option>\r\n                                                                            <option value=\"5\">5</option>\r\n                                                                            <option value=\"6\">6</option>\r\n                                                                            <option value=\"7\">7</option>\r\n                                                                            <option value=\"8\">8</option>\r\n                                                                            <option value=\"9\">9</option>\r\n                                                                            <option value=\"10\">10</option>\r\n                                                                            <option value=\"11\">11</option>\r\n                                                                            <option value=\"12\">12</option>\r\n                                                                            <option value=\"13\">13</option>\r\n                                                                            <option value=\"14\">14</option>\r\n                                                                            <option value=\"15\">15</option>\r\n                                                                            <option value=\"16\">16</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\" *ngIf=\"room_two_children>3\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" formControlName=\"r_two_ch_four\" > \r\n                                                                            <option value=\"0\">0</option>\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                            <option value=\"4\">4</option>\r\n                                                                            <option value=\"5\">5</option>\r\n                                                                            <option value=\"6\">6</option>\r\n                                                                            <option value=\"7\">7</option>\r\n                                                                            <option value=\"8\">8</option>\r\n                                                                            <option value=\"9\">9</option>\r\n                                                                            <option value=\"10\">10</option>\r\n                                                                            <option value=\"11\">11</option>\r\n                                                                            <option value=\"12\">12</option>\r\n                                                                            <option value=\"13\">13</option>\r\n                                                                            <option value=\"14\">14</option>\r\n                                                                            <option value=\"15\">15</option>\r\n                                                                            <option value=\"16\">16</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\" *ngIf=\"room_two_children>4\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" formControlName=\"r_two_ch_five\"> \r\n                                                                            <option value=\"0\">0</option>\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                            <option value=\"4\">4</option>\r\n                                                                            <option value=\"5\">5</option>\r\n                                                                            <option value=\"6\">6</option>\r\n                                                                            <option value=\"7\">7</option>\r\n                                                                            <option value=\"8\">8</option>\r\n                                                                            <option value=\"9\">9</option>\r\n                                                                            <option value=\"10\">10</option>\r\n                                                                            <option value=\"11\">11</option>\r\n                                                                            <option value=\"12\">12</option>\r\n                                                                            <option value=\"13\">13</option>\r\n                                                                            <option value=\"14\">14</option>\r\n                                                                            <option value=\"15\">15</option>\r\n                                                                            <option value=\"16\">16</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!--\r\n                                        <div class=\"room-detail-block\" *ngIf=\"room_3_show\">\r\n                                            <label class=\"head\">\r\n                                                Room 3\r\n                                                <span> Clear </span>\r\n                                            </label>\r\n                                            <div class=\"ui grid\">\r\n                                                <div class=\"sixteen wide column row\">\r\n                                                    <div class=\"sixteen wide column\">\r\n                                                        <div class=\"ui grid\">\r\n                                                            <div class=\"sixteen wide column row\">\r\n                                                                <div class=\"two wide column\">\r\n                                                                    <label>Adult</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" formControlName=\"adults_per_room\">\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\">\r\n                                                                    <label>Children</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" [(ngModel)]=\"room_three_children\" formControlName=\"children_per_room\">\r\n                                                                            <option value=\"0\">0</option>\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\" *ngIf=\"room_three_children>0\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" formControlName=\"child_age\">\r\n                                                                            <option value=\"0\">0</option>\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                \r\n                                                                <div class=\"two wide column\" *ngIf=\"room_three_children>1\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" > \r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" > \r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" > \r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" > \r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div> \r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"room-detail-block\" *ngIf=\"room_4_show\">\r\n                                            <label class=\"head\">\r\n                                                Room 4\r\n                                                <span> Clear </span>\r\n                                            </label>\r\n                                            <div class=\"ui grid\">\r\n                                                <div class=\"sixteen wide column row\">\r\n                                                    <div class=\"sixteen wide column\">\r\n                                                        <div class=\"ui grid\">\r\n                                                            <div class=\"sixteen wide column row\">\r\n                                                                <div class=\"two wide column\">\r\n                                                                    <label>Adult</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" formControlName=\"adults_per_room\">\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\">\r\n                                                                    <label>Children</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" [(ngModel)]=\"room_four_children\" formControlName=\"children_per_room\">\r\n                                                                            <option value=\"0\">0</option>\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" formControlName=\"child_age\">\r\n                                                                            <option value=\"0\">0</option>\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                \r\n                                                                <div class=\"two wide column\" >\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" > \r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" > \r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" > \r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" > \r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"room-detail-block\" *ngIf=\"room_5_show\">\r\n                                            <label class=\"head\">\r\n                                                Room 5\r\n                                                <span> Clear </span>\r\n                                            </label>\r\n                                            <div class=\"ui grid\">\r\n                                                <div class=\"sixteen wide column row\">\r\n                                                    <div class=\"sixteen wide column\">\r\n                                                        <div class=\"ui grid\">\r\n                                                            <div class=\"sixteen wide column row\">\r\n                                                                <div class=\"two wide column\">\r\n                                                                    <label>Adult</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" formControlName=\"adults_per_room\">\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\">\r\n                                                                    <label>Children</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" formControlName=\"children_per_room\">\r\n                                                                            <option value=\"0\">0</option>\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" formControlName=\"child_age\">\r\n                                                                            <option value=\"0\">0</option>\r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                \r\n                                                                <div class=\"two wide column\" >\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" > \r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" > \r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" > \r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"two wide column\">\r\n                                                                    <label>Child Age</label>\r\n                                                                    <div>\r\n                                                                        <select class=\"ui fluid search dropdown\" > \r\n                                                                            <option value=\"1\">1</option>\r\n                                                                            <option value=\"2\">2</option>\r\n                                                                            <option value=\"3\">3</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    -->\r\n                                    </div>\r\n                                </div>\r\n                                <span class=\"four wide column row\">\r\n                                <div class=\"nation-block\">\r\n                                    <div class=\"four wide column\">\r\n                                        <label>Nationality</label>\r\n                                        <div>\r\n                                            <select class=\"ui fluid search dropdown\" formControlName=\"nationality\">\r\n                                                <option value=\"\">Nationality</option>\r\n                                                <option *ngFor=\"let country of countries\" value=\"{{country.country_code}}\">{{country.country}}</option>\r\n                                            </select>\r\n                                        </div>\r\n                                        <!-- <div *ngIf=\"submitted && f.nationality.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.nationality.errors.required\" class=\"text-danger\">Nationality is required</div>\r\n                                        </div> -->\r\n                                    </div>\r\n                                    <br/>\r\n                                    <div class=\"four wide column\">\r\n                                        <label>Resident</label>\r\n                                        <div>\r\n                                            <select class=\"ui fluid search dropdown\" formControlName=\"resident\">\r\n                                                <option value=\"\">Resident</option>\r\n                                                <option *ngFor=\"let country of countries\" value=\"{{country.country_code}}\">{{country.country}}</option>\r\n                                            </select>\r\n                                        </div>\r\n                                        <!-- <div *ngIf=\"submitted && f.resident.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.resident.errors.required\" class=\"text-danger\">Resident is required</div>\r\n                                        </div> -->\r\n                                    </div>\r\n                                    <br/>\r\n                                    <div class=\"sixteen wide column\">\r\n                                        <div class=\"ui grid markup-wrapper\">\r\n                                            <div class=\"sixteen wide column row\">\r\n                                                <div class=\"eight wide column\">\r\n                                                    <label>Markup {{hotelSearchForm.controls.markupBy.value}}</label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"number\" name=\"markupvalue\" formControlName=\"markupvalue\" placeholder=\"Markup Value\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"eight wide column\">\r\n                                                    <label>Markup By</label>\r\n                                                    <div>\r\n                                                        <select class=\"ui fluid dropdown\" formControlName=\"markupBy\">\r\n                                                            <option value=\"by_amount\">By Amount</option>\r\n                                                            <option value=\"by_percentage\">By Percentage</option>\r\n                                                 \r\n                                                        </select>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"eight wide column\">\r\n                                                    <label>Markup {{hotelSearchForm.controls.markupBy.value}}</label>\r\n                                                    <div class=\"ui input fluid\">\r\n                                                        <input type=\"number\" name=\"markupvalue\" formControlName=\"markupvalue\" placeholder=\"Markup Value\">\r\n                                                    </div>\r\n                                                </div>\r\n                                               \r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </span>\r\n                            \r\n                        </div>  \r\n\r\n                       \r\n                        <div class=\"six wide column\">\r\n                        <div class=\"six wide column row\">\r\n                          <div class=\"six wide column\">\r\n                             <div class=\"room-detail-block\" *ngIf=\"room_1_show\">\r\n                                    <div class=\"ui grid\">\r\n                                        <div class=\"sixteen wide column row\">\r\n                                            <div class=\"sixteen wide column\">\r\n                                                <div class=\"ui grid\">\r\n                                   <div class=\"sixteen wide column row star-rating-block\">\r\n                                    <div class=\"sixteen wide column\">\r\n                                        <label>Star Rating</label>\r\n                                        <div class=\"rating-list-block\">\r\n                                            <div class=\"sixteen wide column\">\r\n                                            <div class=\"eight wide column\">\r\n                                            <div class=\"ui checkbox\">\r\n                                                <input type=\"radio\" name=\"rating\" value=\"all\">\r\n                                                <label for=\"all\" style=\"margin-right:18px;\">All</label>\r\n                                            </div>\r\n                                            <br/>\r\n                                            <div class=\"ui checkbox\">\r\n                                                <input type=\"radio\" name=\"rating\" value=\"onestar\">\r\n                                                <label for=\"onestar\">1 Star</label>\r\n                                            </div>\r\n                                            <br/>\r\n                                            <div class=\"ui checkbox\">\r\n                                                <input type=\"radio\" name=\"rating\" value=\"twostar\">\r\n                                                <label for=\"twostar\">2 Star</label>\r\n                                            </div>\r\n                                            <br/>\r\n                                            <div class=\"ui checkbox\">\r\n                                                <input type=\"radio\" name=\"rating\" value=\"threestar\">\r\n                                                <label for=\"threestar\">3 Star</label>\r\n                                            </div>\r\n                                            </div>\r\n                                            <div class=\"eight wide column\">\r\n                                            <div class=\"ui checkbox\">\r\n                                                <input type=\"radio\" name=\"rating\" value=\"fourstar\">\r\n                                                <label for=\"fourstar\">4 Star</label>\r\n                                            </div>\r\n                                            <br/>\r\n                                            <div class=\"ui checkbox\">\r\n                                                <input type=\"radio\" name=\"rating\" value=\"fivestar\">\r\n                                                <label for=\"fivestar\">5 Star</label>\r\n                                            </div>\r\n                                            <br/>\r\n                                            <div class=\"ui checkbox\">\r\n                                                <input type=\"radio\" name=\"rating\" value=\"uncategorized\">\r\n                                                <label for=\"uncategorized\">Uncategorized</label>\r\n                                            </div>\r\n                                            </div>\r\n                                        </div>\r\n                                         </div>\r\n                                       </div>\r\n                                    </div>\r\n                                </div>\r\n                             </div>\r\n                          </div>\r\n                      </div>\r\n                   </div>\r\n               </div>\r\n           </div>\r\n           \r\n    </div>\r\n        <div>\r\n        <div class=\"twelve wide column row\">\r\n         <div class=\"twelve wide column\">\r\n             <label>Hotel Name</label>\r\n             <div class=\"ui input fluid\">\r\n                 <input type=\"text\" placeholder=\"Hotel Name\" formControlname=\"hotel_name\" value=\"\" />\r\n             </div>\r\n         </div>\r\n        </div>\r\n         <br/>\r\n         <div class=\"sixteen wide column\">\r\n            <div class=\"ui grid markup-wrapper\">\r\n                <div class=\"sixteen wide column row\">\r\n                    <div class=\"twelve wide column\">\r\n                       <label>Behalf of booking</label>\r\n                         <div class=\"ui selection dropdown select\">\r\n                 <input type=\"hidden\" name=\"behalfDrop\" formControlname=\"behal_of\">\r\n                 <i class=\"dropdown icon\"></i>\r\n                 <div class=\"default text\">Behalf of Booking</div>\r\n                 <div class=\"menu\">\r\n                     <div class=\"item\" data-value=\"Dubai Travels\">Dubai Travels</div>\r\n                     <div class=\"item\" data-value=\"ABC Travels\">ABC Travels</div>\r\n                     <div class=\"item\" data-value=\"Global Tours\">Global Tours</div>\r\n                     <div class=\"item\" data-value=\"Deira Travels\">Deira Travels</div>\r\n                 </div>\r\n             </div>\r\n         </div>\r\n  \r\n            <div class=\"twelve wide column\">\r\n             <label>Clients</label>\r\n             <div class=\"ui selection dropdown select\">\r\n                 <input type=\"hidden\" name=\"clientList\" formControlname=\"client_list\">\r\n                 <i class=\"dropdown icon\"></i>\r\n                 <div class=\"default text\">Clients</div>\r\n                 <div class=\"menu\">\r\n                     <div class=\"item\" data-value=\"TPConnects\">TPConnects</div>\r\n                     <div class=\"item\" data-value=\"zayaraah\">Zayaraah</div>\r\n                 </div>\r\n             </div>\r\n            </div>\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>\r\n               \r\n                                <div class=\"sixteen wide column row\">\r\n                                    <div class=\"sixteen wide column bookings_btn-panel\">\r\n                                        <button class=\"ui primary button\">\r\n                                            Search\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"four wide column search-list-block\">\r\n                            <label class=\"list-label\">Latest 10 searches</label>\r\n                            <div class=\"ui grid\">\r\n                                <div class=\"sixteen wide column row list-wrapper\">\r\n                                    <div class=\"sixteen wide column list\" *ngFor=\"let search of savedSearches\">\r\n                                        <a>\r\n                                            <p>\r\n                                                <span class=\"dest\">{{search.city}}</span> from <br>\r\n                                                <span class=\"date\">{{search.check_in}} to {{search.check_out}} </span>\r\n                                            </p>\r\n                                            <p>\r\n                                                <span class=\"timeline\">{{search.nights}} Nights</span> with <span class=\"timeline\"> {{search.adults_per_room }} + {{search.children_per_room }} Passengers</span> ({{search.adults_per_room }} Adult, {{search.children_per_room }} Children)\r\n                                            </p>\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div> \r\n</div>\r\n\r\n\r\n<app-hotels-search-results [hotelList]=\"hotelList\" *ngIf=\"showSearchResult\" [searchCriteria]=\"searchCriteria\"></app-hotels-search-results>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/search/hotels/panel/panel.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/search/hotels/panel/panel.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSearchHotelsPanelPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"panel panel-info\" *ngIf=\"panel_id == selected_panel\">\r\n    <div class=\"panel-heading\">\r\n        {{title}}\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <p>{{hotel}}</p>\r\n    </div>\r\n<div>";
    /***/
  },

  /***/
  "./src/app/layout/search/hotels/hotel-passenger-details/hotel-passenger-details.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/layout/search/hotels/hotel-passenger-details/hotel-passenger-details.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSearchHotelsHotelPassengerDetailsHotelPassengerDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".outer-wrapper, .map-view {\n  margin: 0px 24px;\n}\n.outer-wrapper .modify-search-block, .map-view .modify-search-block {\n  text-align: right;\n  margin-bottom: 9px;\n}\n.outer-wrapper .modify-search-block .text-left button, .map-view .modify-search-block .text-left button {\n  margin-left: 0px;\n}\n.outer-wrapper .modify-search-block button, .map-view .modify-search-block button {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 6px rgba(6, 40, 98, 0.1);\n  border-radius: 5px;\n  padding: 8px 14px 9px 16px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 13px;\n  color: #151B25;\n  margin: 0px 0px 9px 6px;\n  border: none;\n}\n.outer-wrapper .search-more, .map-view .search-more {\n  padding-bottom: 16px;\n}\n.outer-wrapper .search-more a, .map-view .search-more a {\n  font-weight: 500;\n  line-height: 12px;\n  color: #437ADA;\n  background: #FFFFFF;\n  box-shadow: 0px 2px 6px rgba(6, 40, 98, 0.1);\n  border-radius: 5px;\n  padding: 12px 24px 12px 20px;\n  font-size: 14px;\n}\n.outer-wrapper .ui.grid .item-block, .map-view .ui.grid .item-block {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 6px rgba(6, 40, 98, 0.1);\n  border-radius: 5px;\n  padding: 0px;\n  margin-bottom: 40px;\n}\n.outer-wrapper .ui.grid .item-block .item-image, .map-view .ui.grid .item-block .item-image {\n  background: url('hotel-img-1.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: auto;\n}\n.outer-wrapper .ui.grid .item-block > div, .map-view .ui.grid .item-block > div {\n  padding: 0px;\n}\n.outer-wrapper .ui.grid .item-block .item-details, .map-view .ui.grid .item-block .item-details {\n  padding: 11px 18px 14px 14px;\n}\n.outer-wrapper .ui.grid .item-block .item-details h2, .map-view .ui.grid .item-block .item-details h2 {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 15px;\n  color: #000000;\n  padding-bottom: 8px;\n}\n.outer-wrapper .ui.grid .item-block .item-details .light, .map-view .ui.grid .item-block .item-details .light {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 12px;\n  color: rgba(0, 0, 0, 0.6);\n}\n.outer-wrapper .ui.grid .item-block .item-details .price-block, .map-view .ui.grid .item-block .item-details .price-block {\n  text-align: right;\n}\n.outer-wrapper .ui.grid .item-block .item-details .price-block p, .map-view .ui.grid .item-block .item-details .price-block p {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 15px;\n  color: #1B1F26;\n  margin-top: 8px;\n}\n.outer-wrapper .ui.grid .item-block .item-details .price-block span, .map-view .ui.grid .item-block .item-details .price-block span {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 12px;\n  color: rgba(0, 0, 0, 0.5);\n}\n.outer-wrapper .ui.grid .item-block .item-details .tripadvicon, .map-view .ui.grid .item-block .item-details .tripadvicon {\n  margin-right: 8px;\n}\n.outer-wrapper .ui.grid .item-block .item-details .amenities-block img, .map-view .ui.grid .item-block .item-details .amenities-block img {\n  width: 20px;\n  height: 20px;\n  margin-right: 12px;\n  margin-top: 12px;\n}\n.outer-wrapper .ui.grid .item-block .item-details .desc, .map-view .ui.grid .item-block .item-details .desc {\n  font-size: 13px;\n  line-height: 16px;\n  color: rgba(0, 0, 0, 0.6);\n  max-width: 310px;\n}\n.outer-wrapper .ui.grid .furtherdetails, .map-view .ui.grid .furtherdetails {\n  border-top: 1px solid rgba(27, 31, 38, 0.1);\n  padding-top: 27px;\n}\n.outer-wrapper .ui.grid .ui.tabular.menu, .map-view .ui.grid .ui.tabular.menu {\n  margin: 27px 0px 17px;\n  padding-left: 0px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.outer-wrapper .ui.grid .ui.tabular.menu .item, .map-view .ui.grid .ui.tabular.menu .item {\n  text-transform: uppercase;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 18px;\n  color: rgba(51, 61, 78, 0.5);\n}\n.outer-wrapper .ui.grid .ui.tabular.menu .item.active, .map-view .ui.grid .ui.tabular.menu .item.active {\n  color: #333D4E;\n  border-bottom: 1px solid rgba(6, 40, 98, 0.9);\n}\n.outer-wrapper .ui.grid .ui.tab.segment, .map-view .ui.grid .ui.tab.segment {\n  border: none;\n  background: none;\n}\n.outer-wrapper .ui.grid .ui.tab.segment .furtherdetails-row, .map-view .ui.grid .ui.tab.segment .furtherdetails-row {\n  border-bottom: 1px solid rgba(27, 31, 38, 0.1);\n}\n.outer-wrapper .ui.grid .ui.tab.segment .furtherdetails-row:last-child, .map-view .ui.grid .ui.tab.segment .furtherdetails-row:last-child {\n  border-bottom: none;\n}\n.outer-wrapper .ui.grid .ui.tab.segment ul, .map-view .ui.grid .ui.tab.segment ul {\n  list-style: none;\n  padding-left: 0px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment ul li, .map-view .ui.grid .ui.tab.segment ul li {\n  display: inline-block;\n  margin-right: 24px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment ul li:not(:last-child):after, .map-view .ui.grid .ui.tab.segment ul li:not(:last-child):after {\n  content: \"\";\n  width: 8px;\n  height: 8px;\n  background: #000;\n  border: 2px solid #FFFFFF;\n  border-radius: 50%;\n  position: absolute;\n  left: auto;\n  top: auto;\n  z-index: 2;\n  margin-left: 8px;\n  margin-top: 5px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment .price p, .map-view .ui.grid .ui.tab.segment .price p {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 14px;\n  color: #1B1F26;\n  margin: 14px 0px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment .add-widget-block button, .map-view .ui.grid .ui.tab.segment .add-widget-block button {\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 13px;\n  color: #437ADA;\n  margin: 14px 0px;\n  border: none;\n  background: transparent;\n  box-shadow: none;\n}\n.outer-wrapper .ui.grid .ui.tab.segment .select-room button, .map-view .ui.grid .ui.tab.segment .select-room button {\n  margin: 6px 0px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment .desc-tab-block, .map-view .ui.grid .ui.tab.segment .desc-tab-block {\n  border: 1px solid rgba(6, 40, 98, 0.1);\n  box-sizing: border-box;\n  border-radius: 6px;\n  margin: 16px;\n  padding: 20px 14px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment .desc-tab-block h5, .map-view .ui.grid .ui.tab.segment .desc-tab-block h5 {\n  font-weight: bold;\n  text-transform: capitalize;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.6);\n  line-height: 18px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment .desc-tab-block p, .map-view .ui.grid .ui.tab.segment .desc-tab-block p {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 16px;\n  color: rgba(0, 0, 0, 0.5);\n  margin-bottom: 16px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment .image-wrapper, .map-view .ui.grid .ui.tab.segment .image-wrapper {\n  padding: 0px 4px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment .image-wrapper .image-thumb, .map-view .ui.grid .ui.tab.segment .image-wrapper .image-thumb {\n  border-radius: 5px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment .image-wrapper .image-thumb img, .map-view .ui.grid .ui.tab.segment .image-wrapper .image-thumb img {\n  width: 100%;\n}\n.outer-wrapper .ui.grid .ui.tab.segment.amenity-tab ul, .map-view .ui.grid .ui.tab.segment.amenity-tab ul {\n  padding-left: 30px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment.amenity-tab ul li, .map-view .ui.grid .ui.tab.segment.amenity-tab ul li {\n  display: block;\n}\n.outer-wrapper .ui.grid .ui.tab.segment.amenity-tab ul li:after, .map-view .ui.grid .ui.tab.segment.amenity-tab ul li:after {\n  content: none;\n}\n.outer-wrapper .ui.grid .ui.tab.segment.amenity-tab ul li:before, .map-view .ui.grid .ui.tab.segment.amenity-tab ul li:before {\n  content: \"\";\n  width: 8px;\n  height: 8px;\n  background: #000;\n  border: 2px solid #FFFFFF;\n  border-radius: 50%;\n  position: absolute;\n  left: auto;\n  top: auto;\n  z-index: 2;\n  margin-left: -24px;\n  margin-top: 5px;\n}\n.outer-wrapper .ui.grid .m-0, .map-view .ui.grid .m-0 {\n  margin: 0px;\n}\n.outer-wrapper .ui.grid .pt-0, .map-view .ui.grid .pt-0 {\n  padding-top: 0px;\n}\n.outer-wrapper .ui.grid .p-0, .map-view .ui.grid .p-0 {\n  padding: 0px;\n}\n.outer-wrapper .ui.grid .right, .map-view .ui.grid .right {\n  text-align: right;\n}\n.fliter-head-block h2 {\n  font-weight: 700;\n  font-size: 14px;\n  color: #000000;\n  margin: 5px 0px 24px;\n}\n.fliter-head-block a {\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  color: #437ADA;\n}\n.filter-block {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 6px rgba(6, 40, 98, 0.1);\n  border-radius: 4.96141px;\n  margin: 0px;\n}\n.filter-block .filters {\n  border-bottom: 1px solid rgba(27, 31, 38, 0.1);\n  padding: 24px 0px;\n}\n.filter-block .filters:last-child {\n  border-bottom: none;\n}\n.filter-block h4 {\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 14px;\n  text-transform: uppercase;\n  color: #000000;\n}\n.filter-block a {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 12px;\n  color: #437ADA;\n}\n.filter-block .star-rating-block .rating-list-block .ui.checkbox {\n  margin-right: 32px;\n}\n.filter-block .star-rating-block .rating-list-block .ui.checkbox label {\n  margin-bottom: 8px;\n  padding-left: 30px;\n}\n.filter-block .star-rating-block .rating-list-block .ui.checkbox label:before {\n  border-radius: 50%;\n  top: 1px;\n}\n.filter-block .star-rating-block .rating-list-block .ui.checkbox label:after {\n  font-size: 12px;\n  top: 2px;\n  left: 1px;\n}\n.filter-block .star-rating-block .rating-list-block .ui.checkbox label img {\n  width: 16px;\n  height: 16px;\n}\n.filter-block .star-rating-block .rating-list-block .ui.checkbox label.text {\n  color: rgba(24, 27, 32, 0.7) !important;\n  font-weight: 700 !important;\n  font-size: 13px !important;\n  line-height: 20px;\n}\n.filter-block .star-rating-block .rating-list-block .ui.checkbox input {\n  top: 1px;\n}\n.filter-block .star-rating-block .rating-list-block .ui.checkbox input:checked ~ label {\n  color: #3867b1 !important;\n}\n.filter-block .star-rating-block .rating-list-block .ui.checkbox input:checked ~ label:before {\n  border: 1px solid #3867b1;\n}\n.filter-block .star-rating-block .rating-list-block .ui.checkbox input:checked ~ label:after {\n  color: #3867b1;\n}\n.filter-block .price-fliter-block .price-desc {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 13px;\n  color: rgba(27, 31, 38, 0.6);\n  margin-top: 12px;\n}\n.filter-block .price-fliter-block input {\n  border: 1px solid rgba(6, 40, 98, 0.2) !important;\n  box-sizing: border-box;\n  border-radius: 6px !important;\n  padding: 12px;\n  color: rgba(27, 31, 38, 0.9) !important;\n  background: none;\n  margin-right: 8px;\n  font-weight: 700;\n  margin-top: 20px;\n  min-width: auto;\n  width: 88px;\n  display: inline-block;\n  text-align: center;\n  margin-bottom: 12px;\n}\n.filter-block .price-fliter-block button.go {\n  border: 1px solid rgba(67, 122, 218, 0.3);\n  border-radius: 7.24448px;\n  margin-right: 0px;\n  color: #437ADA;\n  background: none;\n  height: 38px;\n  width: 44px;\n  text-align: center;\n  cursor: pointer;\n}\n.filter-block .meal-block .star-rating-block .rating-list-block .ui.checkbox label:after, .filter-block .facility-block .star-rating-block .rating-list-block .ui.checkbox label:after, .filter-block .location-block .star-rating-block .rating-list-block .ui.checkbox label:after {\n  top: 0px;\n}\n.map-view .ui.grid .item-block .item-details .amenities-block img {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n}\n.modal h2 {\n  color: #000;\n  font-size: 14px;\n  line-height: 16px;\n  padding: 19px;\n  text-align: center;\n}\n.modal .close.icon {\n  position: absolute;\n  right: 12px;\n  top: 2px;\n}\n.modal .border-block {\n  border: 1px solid rgba(6, 40, 98, 0.1);\n  box-sizing: border-box;\n  border-radius: 6px;\n  padding: 11px;\n  margin: 0px 12px 18px;\n}\n.modal .border-block h4 {\n  margin-left: 14px;\n}\n.modal .detail-label p:first-child {\n  font-size: 10px;\n  line-height: 14px;\n  text-transform: uppercase;\n  color: rgba(0, 0, 0, 0.6);\n  margin-bottom: 4px;\n}\n.modal .detail-label p:last-child {\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 13px;\n  color: rgba(0, 0, 0, 0.9);\n}\n.modal .total-row h4, .modal .total-row .tot-price {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 16px;\n  text-transform: uppercase;\n  color: #000000;\n  margin-top: 12px;\n}\n.modal .total-row p {\n  color: rgba(0, 0, 0, 0.5);\n  text-transform: uppercase;\n}\n.modal .total-row h4 {\n  margin-top: 16px;\n}\n.modal .total-row .tot-price {\n  font-size: 16px;\n  margin-top: 18px;\n}\n.modal table.ui.celled {\n  border: none;\n}\n.modal table.ui.celled tr th {\n  background-color: #fff;\n  border-top: 1px solid rgba(34, 36, 38, 0.1);\n}\n.modal table.ui.celled .date-row {\n  width: 120px;\n}\n.modal table.ui.celled .date-row p:first-child {\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 14px;\n  text-transform: uppercase;\n  color: #000000;\n}\n.modal table.ui.celled .date-row p:last-child {\n  font-weight: 500;\n  font-size: 9px;\n  line-height: 9px;\n  text-transform: uppercase;\n  color: rgba(0, 0, 0, 0.5);\n  margin-top: 6px;\n}\n.modal table.ui.celled tr td:first-child, .modal table.ui.celled tr th:first-child {\n  border-left: 1px solid rgba(34, 36, 38, 0.1);\n}\n.modal table.ui.celled tr td:last-child, .modal table.ui.celled tr th:last-child {\n  border-right: 1px solid rgba(34, 36, 38, 0.1);\n}\n.modal table.ui.celled tr:last-child td {\n  border-bottom: none;\n  border-left: none;\n  border-right: none;\n  font-weight: 600;\n}\n.modal .cancellation-policy {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n.modal .cancel-block .label {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 11px;\n  text-transform: uppercase;\n  color: rgba(21, 27, 37, 0.7);\n  padding: 13px 18px 0px;\n}\n.modal .cancel-block .date {\n  font-weight: 700;\n  padding: 8px 18px;\n}\n.modal .cancel-block .price-total {\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 18px;\n  text-transform: uppercase;\n  color: #000000;\n  padding: 16px 0px;\n}\n.modal .cancel-block .borderLeft {\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n}\n.modal .cancel-block .borderBottom {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.modal .cancel-block .policy-detail {\n  padding: 18px;\n}\n.modal .cancel-block .policy-detail h3 {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 12px;\n  text-transform: uppercase;\n  color: rgba(6, 40, 98, 0.8);\n  margin-bottom: 12px;\n}\n.modal .cancel-block .policy-detail p {\n  color: rgba(0, 0, 0, 0.5);\n  margin-bottom: 12px;\n}\n.modal .m-12 {\n  margin: -12px;\n}\n.m-0 {\n  margin: 0px;\n}\n.pt-0 {\n  padding-top: 0px;\n}\n.p-0 {\n  padding: 0px;\n}\n.right {\n  text-align: right;\n}\n.close.icon, button {\n  cursor: pointer;\n}\nagm-map {\n  height: 500px !important;\n  width: 100%;\n  /* This is really important*/\n}\n@media (max-width: 1280px) {\n  .select-room button {\n    padding: 0px;\n  }\n}\n.cars.card-wrapper {\n  height: auto;\n  padding: 0 24px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.cars.card-wrapper .cars_title {\n  margin: 0;\n  padding: 0 0 24px 0px;\n  font-style: normal;\n  font-weight: 700 !important;\n  font-size: 20px;\n  line-height: 23px;\n  color: #181B20;\n}\n.cars.card-wrapper .ui.attached.menu {\n  max-width: calc(100% - 18px);\n}\n.cars.card-wrapper .ui.tab.segment {\n  background: none;\n  border: none;\n  box-shadow: none;\n  padding: 0px 14px;\n}\n.cars.card-wrapper .car-grid {\n  padding-left: 0px;\n}\n.cars.card-wrapper .car-search-block {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 6px rgba(6, 40, 98, 0.1);\n  border-radius: 10px;\n  margin: 0px;\n  padding: 24px;\n}\n.cars.card-wrapper label {\n  line-height: 13px;\n  padding-bottom: 13px;\n}\n.cars.card-wrapper label ~ div {\n  margin-top: 12px;\n}\n.cars.card-wrapper .ui.icon i.icon img {\n  margin-top: 11px;\n}\n.cars.card-wrapper .select {\n  min-width: auto;\n  display: block;\n  white-space: nowrap;\n}\n.cars.card-wrapper .bookings_btn-panel {\n  text-align: right;\n}\n@media (min-width: 1440px) {\n  .cars.card-wrapper .ui.grid > .column.row > [class*=\"sixteen wide\"].column.car-grid,\n.cars.card-wrapper .ui.grid > .row > [class*=\"sixteen wide\"].column.car-grid {\n    width: 1200px !important;\n  }\n}\n.outer-wrapper .ui.grid .item-block .item-image {\n  background-image: url('hotelPassenger.jpg');\n  background-size: auto;\n  position: relative;\n  background-size: cover;\n  background-position: center;\n}\n.outer-wrapper .ui.grid .item-block .detail-btn {\n  background: none;\n  border: none;\n  color: #437ADA;\n}\n.outer-wrapper .ui.grid .item-block .detail-btn:hover {\n  background: none;\n}\n.outer-wrapper .ui.grid .confirm-btn {\n  background: #4E9B32;\n  border: none;\n  border-radius: 10px;\n  margin-left: 110px;\n  font-size: 11px;\n  padding: 10px;\n  padding-left: 50px;\n  padding-right: 50px;\n  color: #fff;\n}\n.outer-wrapper .ui.grid .confirm-btn:hover {\n  background: #4E9B32;\n}\n.outer-wrapper .ui.grid .date-picker {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NlYXJjaC9ob3RlbHMvaG90ZWwtcGFzc2VuZ2VyLWRldGFpbHMvRTpcXEJlbGFsXFxwcm9qZWN0c1xcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxzZWFyY2hcXGhvdGVsc1xcaG90ZWxzLXNlYXJjaC1yZXN1bHRzXFxob3RlbHMtc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zZWFyY2gvaG90ZWxzL2hvdGVsLXBhc3Nlbmdlci1kZXRhaWxzL2hvdGVsLXBhc3Nlbmdlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvc2VhcmNoL2hvdGVscy9ob3RlbC1wYXNzZW5nZXItZGV0YWlscy9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHNlYXJjaFxcY2Fyc1xcY2Fycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3NlYXJjaC9ob3RlbHMvaG90ZWwtcGFzc2VuZ2VyLWRldGFpbHMvRTpcXEJlbGFsXFxwcm9qZWN0c1xcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxzZWFyY2hcXGhvdGVsc1xcaG90ZWwtcGFzc2VuZ2VyLWRldGFpbHNcXGhvdGVsLXBhc3Nlbmdlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBREFJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEQVk7RUFDSSxnQkFBQTtBQ0VoQjtBRENRO0VBQ0ksbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0NaO0FERUk7RUFDSSxvQkFBQTtBQ0FSO0FEQ1E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQ0NaO0FER1E7RUFDSSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNEWjtBREVZO0VBQ0ksa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FDQWhCO0FERVk7RUFDSSxZQUFBO0FDQWhCO0FERVk7RUFDSSw0QkFBQTtBQ0FoQjtBRENnQjtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNDcEI7QURDZ0I7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNDcEI7QURDZ0I7RUFDSSxpQkFBQTtBQ0NwQjtBREFvQjtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0V4QjtBREFvQjtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0V4QjtBRENnQjtFQUNJLGlCQUFBO0FDQ3BCO0FERW9CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQXhCO0FER2dCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0RwQjtBRE1RO0VBQ0ksMkNBQUE7RUFDQSxpQkFBQTtBQ0paO0FETVE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7QUNKWjtBREtZO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUNIaEI7QURJZ0I7RUFDSSxjQUFBO0VBQ0EsNkNBQUE7QUNGcEI7QURNUTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0paO0FES1k7RUFDSSw4Q0FBQTtBQ0hoQjtBRElnQjtFQUNJLG1CQUFBO0FDRnBCO0FES1k7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDSGhCO0FESWdCO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQ0ZwQjtBREl3QjtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRjVCO0FET1k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDTGhCO0FEUWdCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ05wQjtBRFVnQjtFQUNJLGVBQUE7QUNScEI7QURXWTtFQUNJLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1RoQjtBRFVnQjtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ1JwQjtBRFVnQjtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDUnBCO0FEV1k7RUFDSSxnQkFBQTtBQ1RoQjtBRFVnQjtFQUNJLGtCQUFBO0FDUnBCO0FEU29CO0VBQ0ksV0FBQTtBQ1B4QjtBRGFZO0VBQ0ksa0JBQUE7QUNYaEI7QURZZ0I7RUFDSSxjQUFBO0FDVnBCO0FEV29CO0VBQ0ksYUFBQTtBQ1R4QjtBRFdvQjtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDVHhCO0FEY1E7RUFDSSxXQUFBO0FDWlo7QURjUTtFQUNJLGdCQUFBO0FDWlo7QURjUTtFQUNJLFlBQUE7QUNaWjtBRGNRO0VBQ0ksaUJBQUE7QUNaWjtBRGlCSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ2RSO0FEZ0JJO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDZFI7QURpQkE7RUFDSSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FDZEo7QURlSTtFQUNJLDhDQUFBO0VBQ0EsaUJBQUE7QUNiUjtBRGNRO0VBQ0ksbUJBQUE7QUNaWjtBRGVJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNiUjtBRGVJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNiUjtBRGlCWTtFQUNJLGtCQUFBO0FDZmhCO0FEZ0JnQjtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNkcEI7QURlb0I7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUNieEI7QURlb0I7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNieEI7QURlb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2J4QjtBRGVvQjtFQUNJLHVDQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDYnhCO0FEZ0JnQjtFQUNJLFFBQUE7QUNkcEI7QURnQmdCO0VBQ0kseUJBQUE7QUNkcEI7QURpQm9CO0VBQ0kseUJBQUE7QUNmeEI7QURpQm9CO0VBQ0ksY0FBQTtBQ2Z4QjtBRHNCUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3BCWjtBRHNCUTtFQUNJLGlEQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNwQlo7QURzQlE7RUFDSSx5Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ3BCWjtBRDRCd0I7RUFDSSxRQUFBO0FDMUI1QjtBRG9DSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNqQ1I7QURzQ0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDbkNSO0FEcUNJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQ25DUjtBRHFDSTtFQUNJLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ25DUjtBRG9DUTtFQUNJLGlCQUFBO0FDbENaO0FEc0NRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDcENaO0FEc0NRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ3BDWjtBRHdDUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUN0Q1o7QUR3Q1E7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FDdENaO0FEd0NRO0VBQ0ksZ0JBQUE7QUN0Q1o7QUR3Q1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUN0Q1o7QUR5Q0k7RUFDSSxZQUFBO0FDdkNSO0FEd0NRO0VBQ0ksc0JBQUE7RUFDQSwyQ0FBQTtBQ3RDWjtBRHdDUTtFQUNJLFlBQUE7QUN0Q1o7QUR1Q1k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ3JDaEI7QUR1Q1k7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDckNoQjtBRHdDUTtFQUNJLDRDQUFBO0FDdENaO0FEd0NRO0VBQ0ksNkNBQUE7QUN0Q1o7QUR5Q1k7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ3ZDaEI7QUQyQ0k7RUFDSSx3Q0FBQTtBQ3pDUjtBRDRDUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDMUNaO0FENENRO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQzFDWjtBRDRDUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUMxQ1o7QUQ0Q1E7RUFDSSwwQ0FBQTtBQzFDWjtBRDRDUTtFQUNJLDJDQUFBO0FDMUNaO0FENENRO0VBQ0ksYUFBQTtBQzFDWjtBRDJDWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDekNoQjtBRDJDWTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUN6Q2hCO0FENkNJO0VBQ0ksYUFBQTtBQzNDUjtBRCtDQTtFQUNJLFdBQUE7QUM1Q0o7QUQrQ0E7RUFDSSxnQkFBQTtBQzVDSjtBRCtDQTtFQUNJLFlBQUE7QUM1Q0o7QUQrQ0E7RUFDSSxpQkFBQTtBQzVDSjtBRCtDQTtFQUNJLGVBQUE7QUM1Q0o7QUQ4Q0E7RUFDSSx3QkFBQTtFQUNBLFdBQUE7RUFBYyw0QkFBQTtBQzFDbEI7QUQ0Q0E7RUFFUTtJQUNJLFlBQUE7RUMxQ1Y7QUFDRjtBQ3ZoQkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBRHloQko7QUN4aEJJO0VBQ0ksU0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUQwaEJSO0FDeGhCSTtFQUNJLDRCQUFBO0FEMGhCUjtBQ3hoQkk7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEMGhCUjtBQ3hoQkk7RUFDSSxpQkFBQTtBRDBoQlI7QUN4aEJJO0VBQ0ksbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUQwaEJSO0FDeGhCSTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUQwaEJSO0FDeGhCSTtFQUNJLGdCQUFBO0FEMGhCUjtBQ3RoQlk7RUFDSSxnQkFBQTtBRHdoQmhCO0FDcGhCSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QURzaEJSO0FDcGhCSTtFQUNJLGlCQUFBO0FEc2hCUjtBQ2xoQkE7RUFFUTs7SUFFSSx3QkFBQTtFRG9oQlY7QUFDRjtBRTdrQmdCO0VBQ0ksMkNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBRitrQnBCO0FFN2tCZ0I7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FGK2tCcEI7QUU5a0JvQjtFQUNJLGdCQUFBO0FGZ2xCeEI7QUUza0JZO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUY2a0JoQjtBRTVrQm9CO0VBQ0ksbUJBQUE7QUY4a0J4QjtBRTFrQlk7RUFDSSxnQkFBQTtBRjRrQmhCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3NlYXJjaC9ob3RlbHMvaG90ZWwtcGFzc2VuZ2VyLWRldGFpbHMvaG90ZWwtcGFzc2VuZ2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXItd3JhcHBlciwgLm1hcC12aWV3IHtcclxuICAgIG1hcmdpbjogMHB4IDI0cHg7XHJcbiAgICAubW9kaWZ5LXNlYXJjaC1ibG9jayB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG4gICAgICAgIC50ZXh0LWxlZnQge1xyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDYsIDQwLCA5OCwgMC4xKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMTRweCA5cHggMTZweDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzE1MUIyNTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDlweCA2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLW1vcmUge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6ICM0MzdBREE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoNiwgNDAsIDk4LCAwLjEpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjRweCAxMnB4IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudWkuZ3JpZCB7XHJcbiAgICAgICAgLml0ZW0tYmxvY2sge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDYsIDQwLCA5OCwgMC4xKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgIC5pdGVtLWltYWdlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2hvdGVsLWltZy0xLnBuZycpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW0tZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMXB4IDE4cHggMTRweCAxNHB4O1xyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wcmljZS1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMUIxRjI2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRyaXBhZHZpY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hbWVuaXRpZXMtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGVzYyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mdXJ0aGVyZGV0YWlscyB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzgsIDAuMSk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudWkudGFidWxhci5tZW51IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAyN3B4IDBweCAxN3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgLml0ZW0ge1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDUxLCA2MSwgNzgsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzNENEU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNiwgNDAsIDk4LCAwLjkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51aS50YWIuc2VnbWVudCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgLmZ1cnRoZXJkZXRhaWxzLXJvdyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM4LCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcmljZSBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzFCMUYyNjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTRweCAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFkZC13aWRnZXQtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzN0FEQTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE0cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZWxlY3Qtcm9vbSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNnB4IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzYy10YWItYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2LCA0MCwgOTgsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAxNHB4O1xyXG4gICAgICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW1hZ2Utd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNHB4O1xyXG4gICAgICAgICAgICAgICAgLmltYWdlLXRodW1iIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51aS50YWIuc2VnbWVudC5hbWVuaXR5LXRhYiB7XHJcbiAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tLTAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnB0LTAge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucC0wIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmZsaXRlci1oZWFkLWJsb2NrIHtcclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBtYXJnaW46IDVweCAwcHggMjRweDtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNDM3QURBO1xyXG4gICAgfVxyXG59XHJcbi5maWx0ZXItYmxvY2sge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoNiwgNDAsIDk4LCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNC45NjE0MXB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICAuZmlsdGVycyB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzOCwgMC4xKTtcclxuICAgICAgICBwYWRkaW5nOiAyNHB4IDBweDtcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgICAgICBjb2xvcjogIzQzN0FEQTtcclxuICAgIH1cclxuICAgIC5zdGFyLXJhdGluZy1ibG9jayB7XHJcbiAgICAgICAgLnJhdGluZy1saXN0LWJsb2NrIHtcclxuICAgICAgICAgICAgLnVpLmNoZWNrYm94IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjQsIDI3LCAzMiwgMC43KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzg2N2IxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzM4NjdiMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzg2N2IxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcmljZS1mbGl0ZXItYmxvY2sge1xyXG4gICAgICAgIC5wcmljZS1kZXNjIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjcsIDMxLCAzOCwgMC42KTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYsIDQwLCA5OCwgMC4yKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjcsIDMxLCAzOCwgMC45KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogODhweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbi5nbyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjcsIDEyMiwgMjE4LCAwLjMpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3LjI0NDQ4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzQzN0FEQTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDRweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1lYWwtYmxvY2ssIC5mYWNpbGl0eS1ibG9jaywgLmxvY2F0aW9uLWJsb2NrIHtcclxuICAgICAgICAuc3Rhci1yYXRpbmctYmxvY2sge1xyXG4gICAgICAgICAgICAucmF0aW5nLWxpc3QtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgLnVpLmNoZWNrYm94IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXAtdmlldyB7XHJcbiAgICAudWkuZ3JpZCAuaXRlbS1ibG9jayAuaXRlbS1kZXRhaWxzIC5hbWVuaXRpZXMtYmxvY2sgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE5cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNsb3NlLmljb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMTJweDtcclxuICAgICAgICB0b3A6IDJweDtcclxuICAgIH1cclxuICAgIC5ib3JkZXItYmxvY2sge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNiwgNDAsIDk4LCAwLjEpO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMTJweCAxOHB4O1xyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRldGFpbC1sYWJlbCB7XHJcbiAgICAgICAgcDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudG90YWwtcm93IHtcclxuICAgICAgICBoNCwgLnRvdC1wcmljZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvdC1wcmljZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0YWJsZS51aS5jZWxsZWQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB0ciB0aCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDM0LDM2LDM4LC4xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGUtcm93IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICBwOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDlweDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyIHRkOmZpcnN0LWNoaWxkLCB0ciB0aDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgzNCwzNiwzOCwuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyIHRkOmxhc3QtY2hpbGQsIHRyIHRoOmxhc3QtY2hpbGQgIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgzNCwzNiwzOCwuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgIC5jYW5jZWxsYXRpb24tcG9saWN5IHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgfVxyXG4gICAgLmNhbmNlbC1ibG9jayB7XHJcbiAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTFweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjEsIDI3LCAzNywgMC43KTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTNweCAxOHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByaWNlLXRvdGFsIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYm9yZGVyTGVmdCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJvcmRlckJvdHRvbSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wb2xpY3ktZGV0YWlsIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMThweDtcclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSg2LCA0MCwgOTgsIDAuOCk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubS0xMiB7XHJcbiAgICAgICAgbWFyZ2luOiAtMTJweDtcclxuICAgIH1cclxufVxyXG5cclxuLm0tMCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnB0LTAge1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuLnAtMCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmNsb3NlLmljb24sIGJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTsgIC8qIFRoaXMgaXMgcmVhbGx5IGltcG9ydGFudCovXHJcbiAgfVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAuc2VsZWN0LXJvb20ge1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIub3V0ZXItd3JhcHBlciwgLm1hcC12aWV3IHtcbiAgbWFyZ2luOiAwcHggMjRweDtcbn1cbi5vdXRlci13cmFwcGVyIC5tb2RpZnktc2VhcmNoLWJsb2NrLCAubWFwLXZpZXcgLm1vZGlmeS1zZWFyY2gtYmxvY2sge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xufVxuLm91dGVyLXdyYXBwZXIgLm1vZGlmeS1zZWFyY2gtYmxvY2sgLnRleHQtbGVmdCBidXR0b24sIC5tYXAtdmlldyAubW9kaWZ5LXNlYXJjaC1ibG9jayAudGV4dC1sZWZ0IGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4ub3V0ZXItd3JhcHBlciAubW9kaWZ5LXNlYXJjaC1ibG9jayBidXR0b24sIC5tYXAtdmlldyAubW9kaWZ5LXNlYXJjaC1ibG9jayBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDYsIDQwLCA5OCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA4cHggMTRweCA5cHggMTZweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBjb2xvcjogIzE1MUIyNTtcbiAgbWFyZ2luOiAwcHggMHB4IDlweCA2cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5vdXRlci13cmFwcGVyIC5zZWFyY2gtbW9yZSwgLm1hcC12aWV3IC5zZWFyY2gtbW9yZSB7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuLm91dGVyLXdyYXBwZXIgLnNlYXJjaC1tb3JlIGEsIC5tYXAtdmlldyAuc2VhcmNoLW1vcmUgYSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBjb2xvcjogIzQzN0FEQTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSg2LCA0MCwgOTgsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTJweCAyNHB4IDEycHggMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLml0ZW0tYmxvY2ssIC5tYXAtdmlldyAudWkuZ3JpZCAuaXRlbS1ibG9jayB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoNiwgNDAsIDk4LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC5pdGVtLWJsb2NrIC5pdGVtLWltYWdlLCAubWFwLXZpZXcgLnVpLmdyaWQgLml0ZW0tYmxvY2sgLml0ZW0taW1hZ2Uge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvaG90ZWwtaW1nLTEucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogYXV0bztcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC5pdGVtLWJsb2NrID4gZGl2LCAubWFwLXZpZXcgLnVpLmdyaWQgLml0ZW0tYmxvY2sgPiBkaXYge1xuICBwYWRkaW5nOiAwcHg7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAuaXRlbS1ibG9jayAuaXRlbS1kZXRhaWxzLCAubWFwLXZpZXcgLnVpLmdyaWQgLml0ZW0tYmxvY2sgLml0ZW0tZGV0YWlscyB7XG4gIHBhZGRpbmc6IDExcHggMThweCAxNHB4IDE0cHg7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAuaXRlbS1ibG9jayAuaXRlbS1kZXRhaWxzIGgyLCAubWFwLXZpZXcgLnVpLmdyaWQgLml0ZW0tYmxvY2sgLml0ZW0tZGV0YWlscyBoMiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAuaXRlbS1ibG9jayAuaXRlbS1kZXRhaWxzIC5saWdodCwgLm1hcC12aWV3IC51aS5ncmlkIC5pdGVtLWJsb2NrIC5pdGVtLWRldGFpbHMgLmxpZ2h0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLml0ZW0tYmxvY2sgLml0ZW0tZGV0YWlscyAucHJpY2UtYmxvY2ssIC5tYXAtdmlldyAudWkuZ3JpZCAuaXRlbS1ibG9jayAuaXRlbS1kZXRhaWxzIC5wcmljZS1ibG9jayB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLml0ZW0tYmxvY2sgLml0ZW0tZGV0YWlscyAucHJpY2UtYmxvY2sgcCwgLm1hcC12aWV3IC51aS5ncmlkIC5pdGVtLWJsb2NrIC5pdGVtLWRldGFpbHMgLnByaWNlLWJsb2NrIHAge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBjb2xvcjogIzFCMUYyNjtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLml0ZW0tYmxvY2sgLml0ZW0tZGV0YWlscyAucHJpY2UtYmxvY2sgc3BhbiwgLm1hcC12aWV3IC51aS5ncmlkIC5pdGVtLWJsb2NrIC5pdGVtLWRldGFpbHMgLnByaWNlLWJsb2NrIHNwYW4ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAuaXRlbS1ibG9jayAuaXRlbS1kZXRhaWxzIC50cmlwYWR2aWNvbiwgLm1hcC12aWV3IC51aS5ncmlkIC5pdGVtLWJsb2NrIC5pdGVtLWRldGFpbHMgLnRyaXBhZHZpY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAuaXRlbS1ibG9jayAuaXRlbS1kZXRhaWxzIC5hbWVuaXRpZXMtYmxvY2sgaW1nLCAubWFwLXZpZXcgLnVpLmdyaWQgLml0ZW0tYmxvY2sgLml0ZW0tZGV0YWlscyAuYW1lbml0aWVzLWJsb2NrIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC5pdGVtLWJsb2NrIC5pdGVtLWRldGFpbHMgLmRlc2MsIC5tYXAtdmlldyAudWkuZ3JpZCAuaXRlbS1ibG9jayAuaXRlbS1kZXRhaWxzIC5kZXNjIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgbWF4LXdpZHRoOiAzMTBweDtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC5mdXJ0aGVyZGV0YWlscywgLm1hcC12aWV3IC51aS5ncmlkIC5mdXJ0aGVyZGV0YWlscyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzgsIDAuMSk7XG4gIHBhZGRpbmctdG9wOiAyN3B4O1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLnVpLnRhYnVsYXIubWVudSwgLm1hcC12aWV3IC51aS5ncmlkIC51aS50YWJ1bGFyLm1lbnUge1xuICBtYXJnaW46IDI3cHggMHB4IDE3cHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLnVpLnRhYnVsYXIubWVudSAuaXRlbSwgLm1hcC12aWV3IC51aS5ncmlkIC51aS50YWJ1bGFyLm1lbnUgLml0ZW0ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiByZ2JhKDUxLCA2MSwgNzgsIDAuNSk7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAudWkudGFidWxhci5tZW51IC5pdGVtLmFjdGl2ZSwgLm1hcC12aWV3IC51aS5ncmlkIC51aS50YWJ1bGFyLm1lbnUgLml0ZW0uYWN0aXZlIHtcbiAgY29sb3I6ICMzMzNENEU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDYsIDQwLCA5OCwgMC45KTtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC51aS50YWIuc2VnbWVudCwgLm1hcC12aWV3IC51aS5ncmlkIC51aS50YWIuc2VnbWVudCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC51aS50YWIuc2VnbWVudCAuZnVydGhlcmRldGFpbHMtcm93LCAubWFwLXZpZXcgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IC5mdXJ0aGVyZGV0YWlscy1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM4LCAwLjEpO1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IC5mdXJ0aGVyZGV0YWlscy1yb3c6bGFzdC1jaGlsZCwgLm1hcC12aWV3IC51aS5ncmlkIC51aS50YWIuc2VnbWVudCAuZnVydGhlcmRldGFpbHMtcm93Omxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IHVsLCAubWFwLXZpZXcgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAudWkudGFiLnNlZ21lbnQgdWwgbGksIC5tYXAtdmlldyAudWkuZ3JpZCAudWkudGFiLnNlZ21lbnQgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC51aS50YWIuc2VnbWVudCB1bCBsaTpub3QoOmxhc3QtY2hpbGQpOmFmdGVyLCAubWFwLXZpZXcgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IHVsIGxpOm5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IGF1dG87XG4gIHRvcDogYXV0bztcbiAgei1pbmRleDogMjtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IC5wcmljZSBwLCAubWFwLXZpZXcgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IC5wcmljZSBwIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgY29sb3I6ICMxQjFGMjY7XG4gIG1hcmdpbjogMTRweCAwcHg7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAudWkudGFiLnNlZ21lbnQgLmFkZC13aWRnZXQtYmxvY2sgYnV0dG9uLCAubWFwLXZpZXcgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IC5hZGQtd2lkZ2V0LWJsb2NrIGJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGNvbG9yOiAjNDM3QURBO1xuICBtYXJnaW46IDE0cHggMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IC5zZWxlY3Qtcm9vbSBidXR0b24sIC5tYXAtdmlldyAudWkuZ3JpZCAudWkudGFiLnNlZ21lbnQgLnNlbGVjdC1yb29tIGJ1dHRvbiB7XG4gIG1hcmdpbjogNnB4IDBweDtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC51aS50YWIuc2VnbWVudCAuZGVzYy10YWItYmxvY2ssIC5tYXAtdmlldyAudWkuZ3JpZCAudWkudGFiLnNlZ21lbnQgLmRlc2MtdGFiLWJsb2NrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2LCA0MCwgOTgsIDAuMSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luOiAxNnB4O1xuICBwYWRkaW5nOiAyMHB4IDE0cHg7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAudWkudGFiLnNlZ21lbnQgLmRlc2MtdGFiLWJsb2NrIGg1LCAubWFwLXZpZXcgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IC5kZXNjLXRhYi1ibG9jayBoNSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC51aS50YWIuc2VnbWVudCAuZGVzYy10YWItYmxvY2sgcCwgLm1hcC12aWV3IC51aS5ncmlkIC51aS50YWIuc2VnbWVudCAuZGVzYy10YWItYmxvY2sgcCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC51aS50YWIuc2VnbWVudCAuaW1hZ2Utd3JhcHBlciwgLm1hcC12aWV3IC51aS5ncmlkIC51aS50YWIuc2VnbWVudCAuaW1hZ2Utd3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweCA0cHg7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAudWkudGFiLnNlZ21lbnQgLmltYWdlLXdyYXBwZXIgLmltYWdlLXRodW1iLCAubWFwLXZpZXcgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IC5pbWFnZS13cmFwcGVyIC5pbWFnZS10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC51aS50YWIuc2VnbWVudCAuaW1hZ2Utd3JhcHBlciAuaW1hZ2UtdGh1bWIgaW1nLCAubWFwLXZpZXcgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IC5pbWFnZS13cmFwcGVyIC5pbWFnZS10aHVtYiBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC51aS50YWIuc2VnbWVudC5hbWVuaXR5LXRhYiB1bCwgLm1hcC12aWV3IC51aS5ncmlkIC51aS50YWIuc2VnbWVudC5hbWVuaXR5LXRhYiB1bCB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC51aS50YWIuc2VnbWVudC5hbWVuaXR5LXRhYiB1bCBsaSwgLm1hcC12aWV3IC51aS5ncmlkIC51aS50YWIuc2VnbWVudC5hbWVuaXR5LXRhYiB1bCBsaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50LmFtZW5pdHktdGFiIHVsIGxpOmFmdGVyLCAubWFwLXZpZXcgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50LmFtZW5pdHktdGFiIHVsIGxpOmFmdGVyIHtcbiAgY29udGVudDogbm9uZTtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC51aS50YWIuc2VnbWVudC5hbWVuaXR5LXRhYiB1bCBsaTpiZWZvcmUsIC5tYXAtdmlldyAudWkuZ3JpZCAudWkudGFiLnNlZ21lbnQuYW1lbml0eS10YWIgdWwgbGk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBhdXRvO1xuICB0b3A6IGF1dG87XG4gIHotaW5kZXg6IDI7XG4gIG1hcmdpbi1sZWZ0OiAtMjRweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLm0tMCwgLm1hcC12aWV3IC51aS5ncmlkIC5tLTAge1xuICBtYXJnaW46IDBweDtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC5wdC0wLCAubWFwLXZpZXcgLnVpLmdyaWQgLnB0LTAge1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLnAtMCwgLm1hcC12aWV3IC51aS5ncmlkIC5wLTAge1xuICBwYWRkaW5nOiAwcHg7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAucmlnaHQsIC5tYXAtdmlldyAudWkuZ3JpZCAucmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmZsaXRlci1oZWFkLWJsb2NrIGgyIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luOiA1cHggMHB4IDI0cHg7XG59XG4uZmxpdGVyLWhlYWQtYmxvY2sgYSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGNvbG9yOiAjNDM3QURBO1xufVxuXG4uZmlsdGVyLWJsb2NrIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSg2LCA0MCwgOTgsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uZmlsdGVyLWJsb2NrIC5maWx0ZXJzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzOCwgMC4xKTtcbiAgcGFkZGluZzogMjRweCAwcHg7XG59XG4uZmlsdGVyLWJsb2NrIC5maWx0ZXJzOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLmZpbHRlci1ibG9jayBoNCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5maWx0ZXItYmxvY2sgYSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgY29sb3I6ICM0MzdBREE7XG59XG4uZmlsdGVyLWJsb2NrIC5zdGFyLXJhdGluZy1ibG9jayAucmF0aW5nLWxpc3QtYmxvY2sgLnVpLmNoZWNrYm94IHtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xufVxuLmZpbHRlci1ibG9jayAuc3Rhci1yYXRpbmctYmxvY2sgLnJhdGluZy1saXN0LWJsb2NrIC51aS5jaGVja2JveCBsYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuLmZpbHRlci1ibG9jayAuc3Rhci1yYXRpbmctYmxvY2sgLnJhdGluZy1saXN0LWJsb2NrIC51aS5jaGVja2JveCBsYWJlbDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRvcDogMXB4O1xufVxuLmZpbHRlci1ibG9jayAuc3Rhci1yYXRpbmctYmxvY2sgLnJhdGluZy1saXN0LWJsb2NrIC51aS5jaGVja2JveCBsYWJlbDphZnRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdG9wOiAycHg7XG4gIGxlZnQ6IDFweDtcbn1cbi5maWx0ZXItYmxvY2sgLnN0YXItcmF0aW5nLWJsb2NrIC5yYXRpbmctbGlzdC1ibG9jayAudWkuY2hlY2tib3ggbGFiZWwgaW1nIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cbi5maWx0ZXItYmxvY2sgLnN0YXItcmF0aW5nLWJsb2NrIC5yYXRpbmctbGlzdC1ibG9jayAudWkuY2hlY2tib3ggbGFiZWwudGV4dCB7XG4gIGNvbG9yOiByZ2JhKDI0LCAyNywgMzIsIDAuNykgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4uZmlsdGVyLWJsb2NrIC5zdGFyLXJhdGluZy1ibG9jayAucmF0aW5nLWxpc3QtYmxvY2sgLnVpLmNoZWNrYm94IGlucHV0IHtcbiAgdG9wOiAxcHg7XG59XG4uZmlsdGVyLWJsb2NrIC5zdGFyLXJhdGluZy1ibG9jayAucmF0aW5nLWxpc3QtYmxvY2sgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB7XG4gIGNvbG9yOiAjMzg2N2IxICFpbXBvcnRhbnQ7XG59XG4uZmlsdGVyLWJsb2NrIC5zdGFyLXJhdGluZy1ibG9jayAucmF0aW5nLWxpc3QtYmxvY2sgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpiZWZvcmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzg2N2IxO1xufVxuLmZpbHRlci1ibG9jayAuc3Rhci1yYXRpbmctYmxvY2sgLnJhdGluZy1saXN0LWJsb2NrIC51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YWZ0ZXIge1xuICBjb2xvcjogIzM4NjdiMTtcbn1cbi5maWx0ZXItYmxvY2sgLnByaWNlLWZsaXRlci1ibG9jayAucHJpY2UtZGVzYyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGNvbG9yOiByZ2JhKDI3LCAzMSwgMzgsIDAuNik7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4uZmlsdGVyLWJsb2NrIC5wcmljZS1mbGl0ZXItYmxvY2sgaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYsIDQwLCA5OCwgMC4yKSAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTJweDtcbiAgY29sb3I6IHJnYmEoMjcsIDMxLCAzOCwgMC45KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWluLXdpZHRoOiBhdXRvO1xuICB3aWR0aDogODhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4uZmlsdGVyLWJsb2NrIC5wcmljZS1mbGl0ZXItYmxvY2sgYnV0dG9uLmdvIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2NywgMTIyLCAyMTgsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDcuMjQ0NDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGNvbG9yOiAjNDM3QURBO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiA0NHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5maWx0ZXItYmxvY2sgLm1lYWwtYmxvY2sgLnN0YXItcmF0aW5nLWJsb2NrIC5yYXRpbmctbGlzdC1ibG9jayAudWkuY2hlY2tib3ggbGFiZWw6YWZ0ZXIsIC5maWx0ZXItYmxvY2sgLmZhY2lsaXR5LWJsb2NrIC5zdGFyLXJhdGluZy1ibG9jayAucmF0aW5nLWxpc3QtYmxvY2sgLnVpLmNoZWNrYm94IGxhYmVsOmFmdGVyLCAuZmlsdGVyLWJsb2NrIC5sb2NhdGlvbi1ibG9jayAuc3Rhci1yYXRpbmctYmxvY2sgLnJhdGluZy1saXN0LWJsb2NrIC51aS5jaGVja2JveCBsYWJlbDphZnRlciB7XG4gIHRvcDogMHB4O1xufVxuXG4ubWFwLXZpZXcgLnVpLmdyaWQgLml0ZW0tYmxvY2sgLml0ZW0tZGV0YWlscyAuYW1lbml0aWVzLWJsb2NrIGltZyB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4ubW9kYWwgaDIge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgcGFkZGluZzogMTlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1vZGFsIC5jbG9zZS5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTJweDtcbiAgdG9wOiAycHg7XG59XG4ubW9kYWwgLmJvcmRlci1ibG9jayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNiwgNDAsIDk4LCAwLjEpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDExcHg7XG4gIG1hcmdpbjogMHB4IDEycHggMThweDtcbn1cbi5tb2RhbCAuYm9yZGVyLWJsb2NrIGg0IHtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG4ubW9kYWwgLmRldGFpbC1sYWJlbCBwOmZpcnN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLm1vZGFsIC5kZXRhaWwtbGFiZWwgcDpsYXN0LWNoaWxkIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbn1cbi5tb2RhbCAudG90YWwtcm93IGg0LCAubW9kYWwgLnRvdGFsLXJvdyAudG90LXByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLm1vZGFsIC50b3RhbC1yb3cgcCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ubW9kYWwgLnRvdGFsLXJvdyBoNCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4ubW9kYWwgLnRvdGFsLXJvdyAudG90LXByaWNlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuLm1vZGFsIHRhYmxlLnVpLmNlbGxlZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5tb2RhbCB0YWJsZS51aS5jZWxsZWQgdHIgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgzNCwgMzYsIDM4LCAwLjEpO1xufVxuLm1vZGFsIHRhYmxlLnVpLmNlbGxlZCAuZGF0ZS1yb3cge1xuICB3aWR0aDogMTIwcHg7XG59XG4ubW9kYWwgdGFibGUudWkuY2VsbGVkIC5kYXRlLXJvdyBwOmZpcnN0LWNoaWxkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ubW9kYWwgdGFibGUudWkuY2VsbGVkIC5kYXRlLXJvdyBwOmxhc3QtY2hpbGQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDlweDtcbiAgbGluZS1oZWlnaHQ6IDlweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLm1vZGFsIHRhYmxlLnVpLmNlbGxlZCB0ciB0ZDpmaXJzdC1jaGlsZCwgLm1vZGFsIHRhYmxlLnVpLmNlbGxlZCB0ciB0aDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgzNCwgMzYsIDM4LCAwLjEpO1xufVxuLm1vZGFsIHRhYmxlLnVpLmNlbGxlZCB0ciB0ZDpsYXN0LWNoaWxkLCAubW9kYWwgdGFibGUudWkuY2VsbGVkIHRyIHRoOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDM0LCAzNiwgMzgsIDAuMSk7XG59XG4ubW9kYWwgdGFibGUudWkuY2VsbGVkIHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1vZGFsIC5jYW5jZWxsYXRpb24tcG9saWN5IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5tb2RhbCAuY2FuY2VsLWJsb2NrIC5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiByZ2JhKDIxLCAyNywgMzcsIDAuNyk7XG4gIHBhZGRpbmc6IDEzcHggMThweCAwcHg7XG59XG4ubW9kYWwgLmNhbmNlbC1ibG9jayAuZGF0ZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDhweCAxOHB4O1xufVxuLm1vZGFsIC5jYW5jZWwtYmxvY2sgLnByaWNlLXRvdGFsIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmc6IDE2cHggMHB4O1xufVxuLm1vZGFsIC5jYW5jZWwtYmxvY2sgLmJvcmRlckxlZnQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ubW9kYWwgLmNhbmNlbC1ibG9jayAuYm9yZGVyQm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5tb2RhbCAuY2FuY2VsLWJsb2NrIC5wb2xpY3ktZGV0YWlsIHtcbiAgcGFkZGluZzogMThweDtcbn1cbi5tb2RhbCAuY2FuY2VsLWJsb2NrIC5wb2xpY3ktZGV0YWlsIGgzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiByZ2JhKDYsIDQwLCA5OCwgMC44KTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5tb2RhbCAuY2FuY2VsLWJsb2NrIC5wb2xpY3ktZGV0YWlsIHAge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLm1vZGFsIC5tLTEyIHtcbiAgbWFyZ2luOiAtMTJweDtcbn1cblxuLm0tMCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ucHQtMCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5wLTAge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2xvc2UuaWNvbiwgYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hZ20tbWFwIHtcbiAgaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgLyogVGhpcyBpcyByZWFsbHkgaW1wb3J0YW50Ki9cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAuc2VsZWN0LXJvb20gYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbn1cbi5jYXJzLmNhcmQtd3JhcHBlciB7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNhcnMuY2FyZC13cmFwcGVyIC5jYXJzX3RpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMjRweCAwcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBjb2xvcjogIzE4MUIyMDtcbn1cbi5jYXJzLmNhcmQtd3JhcHBlciAudWkuYXR0YWNoZWQubWVudSB7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMThweCk7XG59XG4uY2Fycy5jYXJkLXdyYXBwZXIgLnVpLnRhYi5zZWdtZW50IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiAwcHggMTRweDtcbn1cbi5jYXJzLmNhcmQtd3JhcHBlciAuY2FyLWdyaWQge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbi5jYXJzLmNhcmQtd3JhcHBlciAuY2FyLXNlYXJjaC1ibG9jayB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoNiwgNDAsIDk4LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMjRweDtcbn1cbi5jYXJzLmNhcmQtd3JhcHBlciBsYWJlbCB7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbn1cbi5jYXJzLmNhcmQtd3JhcHBlciBsYWJlbCB+IGRpdiB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4uY2Fycy5jYXJkLXdyYXBwZXIgLnVpLmljb24gaS5pY29uIGltZyB7XG4gIG1hcmdpbi10b3A6IDExcHg7XG59XG4uY2Fycy5jYXJkLXdyYXBwZXIgLnNlbGVjdCB7XG4gIG1pbi13aWR0aDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uY2Fycy5jYXJkLXdyYXBwZXIgLmJvb2tpbmdzX2J0bi1wYW5lbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gIC5jYXJzLmNhcmQtd3JhcHBlciAudWkuZ3JpZCA+IC5jb2x1bW4ucm93ID4gW2NsYXNzKj1cInNpeHRlZW4gd2lkZVwiXS5jb2x1bW4uY2FyLWdyaWQsXG4uY2Fycy5jYXJkLXdyYXBwZXIgLnVpLmdyaWQgPiAucm93ID4gW2NsYXNzKj1cInNpeHRlZW4gd2lkZVwiXS5jb2x1bW4uY2FyLWdyaWQge1xuICAgIHdpZHRoOiAxMjAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLml0ZW0tYmxvY2sgLml0ZW0taW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvaG90ZWxQYXNzZW5nZXIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLml0ZW0tYmxvY2sgLmRldGFpbC1idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjNDM3QURBO1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLml0ZW0tYmxvY2sgLmRldGFpbC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLmNvbmZpcm0tYnRuIHtcbiAgYmFja2dyb3VuZDogIzRFOUIzMjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTEwcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC5jb25maXJtLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM0RTlCMzI7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAuZGF0ZS1waWNrZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSIsIlxyXG4uY2Fycy5jYXJkLXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAyNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAuY2Fyc190aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAyNHB4IDBweDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgICBjb2xvcjogIzE4MUIyMDtcclxuICAgIH1cclxuICAgIC51aS5hdHRhY2hlZC5tZW51IHtcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDE4cHgpO1xyXG4gICAgfVxyXG4gICAgLnVpLnRhYi5zZWdtZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmNhci1ncmlkIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgIC5jYXItc2VhcmNoLWJsb2NrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoNiwgNDAsIDk4LCAwLjEpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgIH1cclxuICAgIGxhYmVsIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIH1cclxuICAgIGxhYmVsfmRpdiAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB9XHJcbiAgICAudWkuaWNvbiB7XHJcbiAgICAgICAgaS5pY29uIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDExcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VsZWN0IHtcclxuICAgICAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuICAgIC5ib29raW5nc19idG4tcGFuZWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICAuY2Fycy5jYXJkLXdyYXBwZXIge1xyXG4gICAgICAgIC51aS5ncmlkPi5jb2x1bW4ucm93PltjbGFzcyo9XCJzaXh0ZWVuIHdpZGVcIl0uY29sdW1uLmNhci1ncmlkLCBcclxuICAgICAgICAudWkuZ3JpZD4ucm93PltjbGFzcyo9XCJzaXh0ZWVuIHdpZGVcIl0uY29sdW1uLmNhci1ncmlkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuLy4uLy4uL2hvdGVscy9ob3RlbHMtc2VhcmNoLXJlc3VsdHMvaG90ZWxzLXNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzJztcclxuQGltcG9ydCAnLi8uLi8uLi9jYXJzL2NhcnMuY29tcG9uZW50LnNjc3MnO1xyXG5cclxuLm91dGVyLXdyYXBwZXIge1xyXG4gICAgLnVpLmdyaWQge1xyXG4gICAgICAgIC5pdGVtLWJsb2NrIHtcclxuICAgICAgICAgICAgICAgIC5pdGVtLWltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9ob3RlbFBhc3Nlbmdlci5qcGcnKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6YXV0bztcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGV0YWlsLWJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MzdBREE7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgICAgIC5jb25maXJtLWJ0biB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNEU5QjMyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzRFOUIzMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kYXRlLXBpY2tlcntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIH1cclxuIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/search/hotels/hotel-passenger-details/hotel-passenger-details.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/layout/search/hotels/hotel-passenger-details/hotel-passenger-details.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: HotelPassengerDetailsComponent */

  /***/
  function srcAppLayoutSearchHotelsHotelPassengerDetailsHotelPassengerDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotelPassengerDetailsComponent", function () {
      return HotelPassengerDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_hotels_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../shared/services/hotels.service */
    "./src/app/shared/services/hotels.service.ts");
    /* harmony import */


    var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/common.service */
    "./src/app/shared/services/common.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var HotelPassengerDetailsComponent =
    /*#__PURE__*/
    function () {
      function HotelPassengerDetailsComponent(HotelService, fb, router, CommonService, toastr, activatedRoute) {
        _classCallCheck(this, HotelPassengerDetailsComponent);

        this.HotelService = HotelService;
        this.fb = fb;
        this.router = router;
        this.CommonService = CommonService;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.firstRoomOccupancy = [];
        this.secondRoomOccupancy = [];
      }

      _createClass(HotelPassengerDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("booked room hotel", this.blockedRoom.result.hotel);
          this.searchCriteria = this.blockedRoom.result.search_criteria;
          this.hotel = this.blockedRoom.result.hotel; // this.roomsForPolicy = Array.isArray(this.blockedRoom.result.room)!=true? Array(this.blockedRoom.result.room) : this.blockedRoom.result.room;

          this.roomsForPolicy = Array.isArray(this.blockedRoom.result.hotel.room) != true ? Array(this.blockedRoom.result.hotel.room) : this.blockedRoom.result.hotel.room; //console.log("roomsForPolicy",this.roomsForPolicy);

          this.roomNo = this.searchCriteria.no_of_rooms;
          var adts = this.searchCriteria.adults_per_room.toString();
          var chds = this.searchCriteria.children_per_room.toString(); // console.log("blocked room hotel",this.blockedRoom);
          // console.log("adts", typeof adts, "chds",typeof chds);

          this.adtPax = adts.indexOf(",") != -1 ? adts.split(",") : adts;
          this.chdPax = chds.indexOf(",") != -1 ? chds.split(",") : chds;
          this.firstRoomPax = parseInt(this.adtPax[0]) + parseInt(this.chdPax[0]);
          this.secondRoomPax = parseInt(this.adtPax[1]) + parseInt(this.chdPax[1]);
          this.thirdRoomPax = parseInt(this.adtPax[2]) + parseInt(this.chdPax[2]); // console.log(" this.firstRoomPax", this.firstRoomPax);
          // console.log(" this.secondRoomPax", this.secondRoomPax);
          // console.log(" this.thirdRoomPax", this.thirdRoomPax);
          // console.log("blocked", this.blockedRoom);

          this.hotelPassengerForm = this.fb.group({
            r1_pax1_solutation: [""],
            r1_pax1_firstName: [""],
            r1_pax1_lastName: [""],
            r1_pax1_phone: [''],
            r1_pax1_email: [""],
            r1_pax2_solutation: [""],
            r1_pax2_firstName: [""],
            r1_pax2_lastName: [""],
            r1_pax2_phone: [''],
            r1_pax2_email: [""],
            r1_pax3_solutation: [""],
            r1_pax3_firstName: [""],
            r1_pax3_lastName: [""],
            r1_pax3_phone: [''],
            r1_pax3_email: [""],
            r1_pax4_solutation: [""],
            r1_pax4_firstName: [""],
            r1_pax4_lastName: [""],
            r1_pax4_phone: [''],
            r1_pax4_email: [""],
            r1_pax5_solutation: [""],
            r1_pax5_firstName: [""],
            r1_pax5_lastName: [""],
            r1_pax5_phone: [''],
            r1_pax5_email: [""],
            r2_pax1_solutation: [""],
            r2_pax1_firstName: [""],
            r2_pax1_lastName: [""],
            r2_pax1_phone: [''],
            r2_pax1_email: [""],
            r2_pax2_solutation: [""],
            r2_pax2_firstName: [""],
            r2_pax2_lastName: [""],
            r2_pax2_phone: [''],
            r2_pax2_email: [""],
            r2_pax3_solutation: [""],
            r2_pax3_firstName: [""],
            r2_pax3_lastName: [""],
            r2_pax3_phone: [''],
            r2_pax3_email: [""],
            r2_pax4_solutation: [""],
            r2_pax4_firstName: [""],
            r2_pax4_lastName: [""],
            r2_pax4_phone: [''],
            r2_pax4_email: [""],
            r2_pax5_solutation: [""],
            r2_pax5_firstName: [""],
            r2_pax5_lastName: [""],
            r2_pax5_phone: [''],
            r2_pax5_email: [""],
            email: [""],
            agentFirstName: [""],
            remarks: [""],
            rulesCondition: [""],
            reserveCondition: [""]
          });
        }
      }, {
        key: "bookRoom",
        value: function bookRoom() {
          var _this82 = this;

          //console.log("email", this.hotelPassengerForm.value);
          //add the user information 
          this.blockedRoom.result.hotel.bookingEmail = this.hotelPassengerForm.controls.email.value;
          this.blockedRoom.result.hotel.agentReference = this.hotelPassengerForm.controls.agentFirstName.value;
          this.blockedRoom.result.hotel.bookingComment = this.hotelPassengerForm.controls.remarks.value;
          this.searchCriteria.hotel = this.blockedRoom.result.hotel; //adding passenger detail

          for (var i = 1; i <= this.roomNo; i++) {
            var paxInfo = void 0;

            if (i == 1) {
              for (var pax = 1; pax <= this.firstRoomPax; pax++) {
                if (pax == 1) {
                  paxInfo = {
                    age: 30,
                    category: "AD",
                    first_name: this.hotelPassengerForm.controls.r1_pax1_firstName.value,
                    last_name: this.hotelPassengerForm.controls.r1_pax1_lastName.value,
                    salutation: this.hotelPassengerForm.controls.r1_pax1_solutation.value,
                    phone: this.hotelPassengerForm.controls.r1_pax1_phone.value
                  };
                  this.firstRoomOccupancy.push(paxInfo);
                }

                if (pax == 2) {
                  paxInfo = {
                    age: 30,
                    category: "AD",
                    first_name: this.hotelPassengerForm.controls.r1_pax2_firstName.value,
                    last_name: this.hotelPassengerForm.controls.r1_pax2_lastName.value,
                    salutation: this.hotelPassengerForm.controls.r1_pax2_solutation.value,
                    phone: this.hotelPassengerForm.controls.r1_pax2_phone.value
                  };
                  this.firstRoomOccupancy.push(paxInfo);
                }

                if (pax == 3) {
                  paxInfo = {
                    age: 30,
                    category: "AD",
                    first_name: this.hotelPassengerForm.controls.r1_pax3_firstName.value,
                    last_name: this.hotelPassengerForm.controls.r1_pax3_lastName.value,
                    salutation: this.hotelPassengerForm.controls.r1_pax3_solutation.value,
                    phone: this.hotelPassengerForm.controls.r1_pax3_phone.value
                  };
                  this.firstRoomOccupancy.push(paxInfo);
                }

                if (pax == 4) {
                  paxInfo = {
                    age: 30,
                    category: "AD",
                    first_name: this.hotelPassengerForm.controls.r1_pax4_firstName.value,
                    last_name: this.hotelPassengerForm.controls.r1_pax4_lastName.value,
                    salutation: this.hotelPassengerForm.controls.r1_pax4_solutation.value,
                    phone: this.hotelPassengerForm.controls.r1_pax4_phone.value
                  };
                  this.firstRoomOccupancy.push(paxInfo);
                }

                if (pax == 5) {
                  paxInfo = {
                    age: 30,
                    category: "AD",
                    first_name: this.hotelPassengerForm.controls.r1_pax5_firstName.value,
                    last_name: this.hotelPassengerForm.controls.r1_pax5_lastName.value,
                    salutation: this.hotelPassengerForm.controls.r1_pax5_solutation.value,
                    phone: this.hotelPassengerForm.controls.r1_pax5_phone.value
                  };
                  this.firstRoomOccupancy.push(paxInfo);
                }
              }
            }

            if (i == 2) {
              for (var _pax = 1; _pax <= this.secondRoomPax; _pax++) {
                if (_pax == 1) {
                  paxInfo = {
                    age: 30,
                    category: "AD",
                    first_name: this.hotelPassengerForm.controls.r2_pax1_firstName.value,
                    last_name: this.hotelPassengerForm.controls.r2_pax1_lastName.value,
                    salutation: this.hotelPassengerForm.controls.r2_pax1_solutation.value,
                    phone: this.hotelPassengerForm.controls.r2_pax1_phone.value
                  };
                  this.secondRoomOccupancy.push(paxInfo);
                }

                if (_pax == 2) {
                  paxInfo = {
                    age: 30,
                    category: "AD",
                    first_name: this.hotelPassengerForm.controls.r2_pax2_firstName.value,
                    last_name: this.hotelPassengerForm.controls.r2_pax2_lastName.value,
                    salutation: this.hotelPassengerForm.controls.r2_pax2_solutation.value,
                    phone: this.hotelPassengerForm.controls.r2_pax2_phone.value
                  };
                  this.secondRoomOccupancy.push(paxInfo);
                }

                if (_pax == 3) {
                  paxInfo = {
                    age: 30,
                    category: "AD",
                    first_name: this.hotelPassengerForm.controls.r2_pax3_firstName.value,
                    last_name: this.hotelPassengerForm.controls.r2_pax3_lastName.value,
                    salutation: this.hotelPassengerForm.controls.r2_pax3_solutation.value,
                    phone: this.hotelPassengerForm.controls.r1_pax2_phone.value
                  };
                  this.secondRoomOccupancy.push(paxInfo);
                }

                if (_pax == 4) {
                  paxInfo = {
                    age: 30,
                    category: "AD",
                    first_name: this.hotelPassengerForm.controls.r2_pax4_firstName.value,
                    last_name: this.hotelPassengerForm.controls.r2_pax4_lastName.value,
                    salutation: this.hotelPassengerForm.controls.r2_pax4_solutation.value,
                    phone: this.hotelPassengerForm.controls.r2_pax4_phone.value
                  };
                  this.secondRoomOccupancy.push(paxInfo);
                }

                if (_pax == 5) {
                  paxInfo = {
                    age: 30,
                    category: "AD",
                    first_name: this.hotelPassengerForm.controls.r2_pax5_firstName.value,
                    last_name: this.hotelPassengerForm.controls.r2_pax5_lastName.value,
                    salutation: this.hotelPassengerForm.controls.r2_pax5_solutation.value,
                    phone: this.hotelPassengerForm.controls.r2_pax5_phone.value
                  };
                  this.secondRoomOccupancy.push(paxInfo);
                }
              }
            }
          } //roomLoop   
          //adding occupancy for the room


          if (Array.isArray(this.searchCriteria.hotel.room)) {
            this.searchCriteria.hotel.room[0].room_occupancy = this.firstRoomOccupancy;
            this.searchCriteria.hotel.room[1].room_occupancy = this.secondRoomOccupancy;
          } else {
            this.searchCriteria.hotel.room.room_occupancy = this.firstRoomOccupancy;
          }

          console.log("room_occupancy", this.firstRoomOccupancy); // return false;
          // console.log("room 1",this.searchCriteria.hotel.room[0]);
          // console.log("room 2",this.searchCriteria.hotel.room[1]);
          // console.log("BOOK ROOM Criteria", this.searchCriteria);
          // return false;

          this.HotelService.bookRoom(this.searchCriteria).subscribe(function (results) {
            console.log("booked Rs", results);

            if (results.result.transactionLog.status == 'Failure' && results.result.hotel.tripId != undefined) {
              _this82.toastr.error("Error Code: ".concat(results.result.transactionLog.error.code, " | ").concat(results.result.transactionLog.error.message), "Order Creation Failed", {
                timeOut: 2000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            } else if (results.result.transactionLog.status == 'Success' && results.result.hotel.tripId != undefined) {
              _this82.toastr.success("Trip Id ".concat(results.result.hotel.tripId), "Order Creation Successfull", {
                timeOut: 5000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });

              _this82.router.navigate(['bookings']);
            } else {
              _this82.toastr.error("Please try other room", "", {
                timeOut: 2000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          }); // console.log("book room req",this.hotelPassengerForm.value);
        }
      }, {
        key: "numberOfNights",
        value: function numberOfNights(checkin, checkout) {
          // console.log("chekcin",checkin,"checkout",checkout);
          var checkInDate = new Date(checkin * 1000);
          var checkOutDate = new Date(checkout * 1000); // console.log("chekcin",checkInDate,"checkout",checkOutDate);

          var diff_in_time = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
          var diff_in_days = Math.ceil(diff_in_time / (1000 * 3600 * 24));
          var nights = isNaN(diff_in_days) || diff_in_days < 0 ? 0 : diff_in_days;
          return nights;
        }
      }]);

      return HotelPassengerDetailsComponent;
    }();

    HotelPassengerDetailsComponent.ctorParameters = function () {
      return [{
        type: _shared_services_hotels_service__WEBPACK_IMPORTED_MODULE_4__["HotelService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], HotelPassengerDetailsComponent.prototype, "showPassengerDetail", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], HotelPassengerDetailsComponent.prototype, "blockedRoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], HotelPassengerDetailsComponent.prototype, "selectedHotel", void 0);
    HotelPassengerDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-hotel-passenger-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./hotel-passenger-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/search/hotels/hotel-passenger-details/hotel-passenger-details.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./hotel-passenger-details.component.scss */
      "./src/app/layout/search/hotels/hotel-passenger-details/hotel-passenger-details.component.scss")).default]
    })], HotelPassengerDetailsComponent);
    /***/
  },

  /***/
  "./src/app/layout/search/hotels/hotels-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/layout/search/hotels/hotels-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: HotelsRoutingModule */

  /***/
  function srcAppLayoutSearchHotelsHotelsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotelsRoutingModule", function () {
      return HotelsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _hotels_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./hotels.component */
    "./src/app/layout/search/hotels/hotels.component.ts");
    /* harmony import */


    var _hotels_search_results_hotels_search_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./hotels-search-results/hotels-search-results.component */
    "./src/app/layout/search/hotels/hotels-search-results/hotels-search-results.component.ts");
    /* harmony import */


    var _hotel_passenger_details_hotel_passenger_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./hotel-passenger-details/hotel-passenger-details.component */
    "./src/app/layout/search/hotels/hotel-passenger-details/hotel-passenger-details.component.ts");

    var routes = [{
      path: '',
      component: _hotels_component__WEBPACK_IMPORTED_MODULE_3__["HotelsComponent"],
      children: [{
        path: 'results',
        component: _hotels_search_results_hotels_search_results_component__WEBPACK_IMPORTED_MODULE_4__["HotelsSearchResultsComponent"]
      }, {
        path: 'passengers',
        component: _hotel_passenger_details_hotel_passenger_details_component__WEBPACK_IMPORTED_MODULE_5__["HotelPassengerDetailsComponent"]
      }]
    }];

    var HotelsRoutingModule = function HotelsRoutingModule() {
      _classCallCheck(this, HotelsRoutingModule);
    };

    HotelsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HotelsRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/search/hotels/hotels-search-results/hotels-search-results.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/app/layout/search/hotels/hotels-search-results/hotels-search-results.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSearchHotelsHotelsSearchResultsHotelsSearchResultsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".outer-wrapper, .map-view {\n  margin: 0px 24px;\n}\n.outer-wrapper .modify-search-block, .map-view .modify-search-block {\n  text-align: right;\n  margin-bottom: 9px;\n}\n.outer-wrapper .modify-search-block .text-left button, .map-view .modify-search-block .text-left button {\n  margin-left: 0px;\n}\n.outer-wrapper .modify-search-block button, .map-view .modify-search-block button {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 6px rgba(6, 40, 98, 0.1);\n  border-radius: 5px;\n  padding: 8px 14px 9px 16px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 13px;\n  color: #151B25;\n  margin: 0px 0px 9px 6px;\n  border: none;\n}\n.outer-wrapper .search-more, .map-view .search-more {\n  padding-bottom: 16px;\n}\n.outer-wrapper .search-more a, .map-view .search-more a {\n  font-weight: 500;\n  line-height: 12px;\n  color: #437ADA;\n  background: #FFFFFF;\n  box-shadow: 0px 2px 6px rgba(6, 40, 98, 0.1);\n  border-radius: 5px;\n  padding: 12px 24px 12px 20px;\n  font-size: 14px;\n}\n.outer-wrapper .ui.grid .item-block, .map-view .ui.grid .item-block {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 6px rgba(6, 40, 98, 0.1);\n  border-radius: 5px;\n  padding: 0px;\n  margin-bottom: 40px;\n}\n.outer-wrapper .ui.grid .item-block .item-image, .map-view .ui.grid .item-block .item-image {\n  background: url('hotel-img-1.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: auto;\n}\n.outer-wrapper .ui.grid .item-block > div, .map-view .ui.grid .item-block > div {\n  padding: 0px;\n}\n.outer-wrapper .ui.grid .item-block .item-details, .map-view .ui.grid .item-block .item-details {\n  padding: 11px 18px 14px 14px;\n}\n.outer-wrapper .ui.grid .item-block .item-details h2, .map-view .ui.grid .item-block .item-details h2 {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 15px;\n  color: #000000;\n  padding-bottom: 8px;\n}\n.outer-wrapper .ui.grid .item-block .item-details .light, .map-view .ui.grid .item-block .item-details .light {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 12px;\n  color: rgba(0, 0, 0, 0.6);\n}\n.outer-wrapper .ui.grid .item-block .item-details .price-block, .map-view .ui.grid .item-block .item-details .price-block {\n  text-align: right;\n}\n.outer-wrapper .ui.grid .item-block .item-details .price-block p, .map-view .ui.grid .item-block .item-details .price-block p {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 15px;\n  color: #1B1F26;\n  margin-top: 8px;\n}\n.outer-wrapper .ui.grid .item-block .item-details .price-block span, .map-view .ui.grid .item-block .item-details .price-block span {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 12px;\n  color: rgba(0, 0, 0, 0.5);\n}\n.outer-wrapper .ui.grid .item-block .item-details .tripadvicon, .map-view .ui.grid .item-block .item-details .tripadvicon {\n  margin-right: 8px;\n}\n.outer-wrapper .ui.grid .item-block .item-details .amenities-block img, .map-view .ui.grid .item-block .item-details .amenities-block img {\n  width: 20px;\n  height: 20px;\n  margin-right: 12px;\n  margin-top: 12px;\n}\n.outer-wrapper .ui.grid .item-block .item-details .desc, .map-view .ui.grid .item-block .item-details .desc {\n  font-size: 13px;\n  line-height: 16px;\n  color: rgba(0, 0, 0, 0.6);\n  max-width: 310px;\n}\n.outer-wrapper .ui.grid .furtherdetails, .map-view .ui.grid .furtherdetails {\n  border-top: 1px solid rgba(27, 31, 38, 0.1);\n  padding-top: 27px;\n}\n.outer-wrapper .ui.grid .ui.tabular.menu, .map-view .ui.grid .ui.tabular.menu {\n  margin: 27px 0px 17px;\n  padding-left: 0px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.outer-wrapper .ui.grid .ui.tabular.menu .item, .map-view .ui.grid .ui.tabular.menu .item {\n  text-transform: uppercase;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 18px;\n  color: rgba(51, 61, 78, 0.5);\n}\n.outer-wrapper .ui.grid .ui.tabular.menu .item.active, .map-view .ui.grid .ui.tabular.menu .item.active {\n  color: #333D4E;\n  border-bottom: 1px solid rgba(6, 40, 98, 0.9);\n}\n.outer-wrapper .ui.grid .ui.tab.segment, .map-view .ui.grid .ui.tab.segment {\n  border: none;\n  background: none;\n}\n.outer-wrapper .ui.grid .ui.tab.segment .furtherdetails-row, .map-view .ui.grid .ui.tab.segment .furtherdetails-row {\n  border-bottom: 1px solid rgba(27, 31, 38, 0.1);\n}\n.outer-wrapper .ui.grid .ui.tab.segment .furtherdetails-row:last-child, .map-view .ui.grid .ui.tab.segment .furtherdetails-row:last-child {\n  border-bottom: none;\n}\n.outer-wrapper .ui.grid .ui.tab.segment ul, .map-view .ui.grid .ui.tab.segment ul {\n  list-style: none;\n  padding-left: 0px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment ul li, .map-view .ui.grid .ui.tab.segment ul li {\n  display: inline-block;\n  margin-right: 24px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment ul li:not(:last-child):after, .map-view .ui.grid .ui.tab.segment ul li:not(:last-child):after {\n  content: \"\";\n  width: 8px;\n  height: 8px;\n  background: #000;\n  border: 2px solid #FFFFFF;\n  border-radius: 50%;\n  position: absolute;\n  left: auto;\n  top: auto;\n  z-index: 2;\n  margin-left: 8px;\n  margin-top: 5px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment .price p, .map-view .ui.grid .ui.tab.segment .price p {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 14px;\n  color: #1B1F26;\n  margin: 14px 0px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment .add-widget-block button, .map-view .ui.grid .ui.tab.segment .add-widget-block button {\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 13px;\n  color: #437ADA;\n  margin: 14px 0px;\n  border: none;\n  background: transparent;\n  box-shadow: none;\n}\n.outer-wrapper .ui.grid .ui.tab.segment .select-room button, .map-view .ui.grid .ui.tab.segment .select-room button {\n  margin: 6px 0px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment .desc-tab-block, .map-view .ui.grid .ui.tab.segment .desc-tab-block {\n  border: 1px solid rgba(6, 40, 98, 0.1);\n  box-sizing: border-box;\n  border-radius: 6px;\n  margin: 16px;\n  padding: 20px 14px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment .desc-tab-block h5, .map-view .ui.grid .ui.tab.segment .desc-tab-block h5 {\n  font-weight: bold;\n  text-transform: capitalize;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.6);\n  line-height: 18px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment .desc-tab-block p, .map-view .ui.grid .ui.tab.segment .desc-tab-block p {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 16px;\n  color: rgba(0, 0, 0, 0.5);\n  margin-bottom: 16px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment .image-wrapper, .map-view .ui.grid .ui.tab.segment .image-wrapper {\n  padding: 0px 4px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment .image-wrapper .image-thumb, .map-view .ui.grid .ui.tab.segment .image-wrapper .image-thumb {\n  border-radius: 5px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment .image-wrapper .image-thumb img, .map-view .ui.grid .ui.tab.segment .image-wrapper .image-thumb img {\n  width: 100%;\n}\n.outer-wrapper .ui.grid .ui.tab.segment.amenity-tab ul, .map-view .ui.grid .ui.tab.segment.amenity-tab ul {\n  padding-left: 30px;\n}\n.outer-wrapper .ui.grid .ui.tab.segment.amenity-tab ul li, .map-view .ui.grid .ui.tab.segment.amenity-tab ul li {\n  display: block;\n}\n.outer-wrapper .ui.grid .ui.tab.segment.amenity-tab ul li:after, .map-view .ui.grid .ui.tab.segment.amenity-tab ul li:after {\n  content: none;\n}\n.outer-wrapper .ui.grid .ui.tab.segment.amenity-tab ul li:before, .map-view .ui.grid .ui.tab.segment.amenity-tab ul li:before {\n  content: \"\";\n  width: 8px;\n  height: 8px;\n  background: #000;\n  border: 2px solid #FFFFFF;\n  border-radius: 50%;\n  position: absolute;\n  left: auto;\n  top: auto;\n  z-index: 2;\n  margin-left: -24px;\n  margin-top: 5px;\n}\n.outer-wrapper .ui.grid .m-0, .map-view .ui.grid .m-0 {\n  margin: 0px;\n}\n.outer-wrapper .ui.grid .pt-0, .map-view .ui.grid .pt-0 {\n  padding-top: 0px;\n}\n.outer-wrapper .ui.grid .p-0, .map-view .ui.grid .p-0 {\n  padding: 0px;\n}\n.outer-wrapper .ui.grid .right, .map-view .ui.grid .right {\n  text-align: right;\n}\n.fliter-head-block h2 {\n  font-weight: 700;\n  font-size: 14px;\n  color: #000000;\n  margin: 5px 0px 24px;\n}\n.fliter-head-block a {\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  color: #437ADA;\n}\n.filter-block {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 6px rgba(6, 40, 98, 0.1);\n  border-radius: 4.96141px;\n  margin: 0px;\n}\n.filter-block .filters {\n  border-bottom: 1px solid rgba(27, 31, 38, 0.1);\n  padding: 24px 0px;\n}\n.filter-block .filters:last-child {\n  border-bottom: none;\n}\n.filter-block h4 {\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 14px;\n  text-transform: uppercase;\n  color: #000000;\n}\n.filter-block a {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 12px;\n  color: #437ADA;\n}\n.filter-block .star-rating-block .rating-list-block .ui.checkbox {\n  margin-right: 32px;\n}\n.filter-block .star-rating-block .rating-list-block .ui.checkbox label {\n  margin-bottom: 8px;\n  padding-left: 30px;\n}\n.filter-block .star-rating-block .rating-list-block .ui.checkbox label:before {\n  border-radius: 50%;\n  top: 1px;\n}\n.filter-block .star-rating-block .rating-list-block .ui.checkbox label:after {\n  font-size: 12px;\n  top: 2px;\n  left: 1px;\n}\n.filter-block .star-rating-block .rating-list-block .ui.checkbox label img {\n  width: 16px;\n  height: 16px;\n}\n.filter-block .star-rating-block .rating-list-block .ui.checkbox label.text {\n  color: rgba(24, 27, 32, 0.7) !important;\n  font-weight: 700 !important;\n  font-size: 13px !important;\n  line-height: 20px;\n}\n.filter-block .star-rating-block .rating-list-block .ui.checkbox input {\n  top: 1px;\n}\n.filter-block .star-rating-block .rating-list-block .ui.checkbox input:checked ~ label {\n  color: #3867b1 !important;\n}\n.filter-block .star-rating-block .rating-list-block .ui.checkbox input:checked ~ label:before {\n  border: 1px solid #3867b1;\n}\n.filter-block .star-rating-block .rating-list-block .ui.checkbox input:checked ~ label:after {\n  color: #3867b1;\n}\n.filter-block .price-fliter-block .price-desc {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 13px;\n  color: rgba(27, 31, 38, 0.6);\n  margin-top: 12px;\n}\n.filter-block .price-fliter-block input {\n  border: 1px solid rgba(6, 40, 98, 0.2) !important;\n  box-sizing: border-box;\n  border-radius: 6px !important;\n  padding: 12px;\n  color: rgba(27, 31, 38, 0.9) !important;\n  background: none;\n  margin-right: 8px;\n  font-weight: 700;\n  margin-top: 20px;\n  min-width: auto;\n  width: 88px;\n  display: inline-block;\n  text-align: center;\n  margin-bottom: 12px;\n}\n.filter-block .price-fliter-block button.go {\n  border: 1px solid rgba(67, 122, 218, 0.3);\n  border-radius: 7.24448px;\n  margin-right: 0px;\n  color: #437ADA;\n  background: none;\n  height: 38px;\n  width: 44px;\n  text-align: center;\n  cursor: pointer;\n}\n.filter-block .meal-block .star-rating-block .rating-list-block .ui.checkbox label:after, .filter-block .facility-block .star-rating-block .rating-list-block .ui.checkbox label:after, .filter-block .location-block .star-rating-block .rating-list-block .ui.checkbox label:after {\n  top: 0px;\n}\n.map-view .ui.grid .item-block .item-details .amenities-block img {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n}\n.modal h2 {\n  color: #000;\n  font-size: 14px;\n  line-height: 16px;\n  padding: 19px;\n  text-align: center;\n}\n.modal .close.icon {\n  position: absolute;\n  right: 12px;\n  top: 2px;\n}\n.modal .border-block {\n  border: 1px solid rgba(6, 40, 98, 0.1);\n  box-sizing: border-box;\n  border-radius: 6px;\n  padding: 11px;\n  margin: 0px 12px 18px;\n}\n.modal .border-block h4 {\n  margin-left: 14px;\n}\n.modal .detail-label p:first-child {\n  font-size: 10px;\n  line-height: 14px;\n  text-transform: uppercase;\n  color: rgba(0, 0, 0, 0.6);\n  margin-bottom: 4px;\n}\n.modal .detail-label p:last-child {\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 13px;\n  color: rgba(0, 0, 0, 0.9);\n}\n.modal .total-row h4, .modal .total-row .tot-price {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 16px;\n  text-transform: uppercase;\n  color: #000000;\n  margin-top: 12px;\n}\n.modal .total-row p {\n  color: rgba(0, 0, 0, 0.5);\n  text-transform: uppercase;\n}\n.modal .total-row h4 {\n  margin-top: 16px;\n}\n.modal .total-row .tot-price {\n  font-size: 16px;\n  margin-top: 18px;\n}\n.modal table.ui.celled {\n  border: none;\n}\n.modal table.ui.celled tr th {\n  background-color: #fff;\n  border-top: 1px solid rgba(34, 36, 38, 0.1);\n}\n.modal table.ui.celled .date-row {\n  width: 120px;\n}\n.modal table.ui.celled .date-row p:first-child {\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 14px;\n  text-transform: uppercase;\n  color: #000000;\n}\n.modal table.ui.celled .date-row p:last-child {\n  font-weight: 500;\n  font-size: 9px;\n  line-height: 9px;\n  text-transform: uppercase;\n  color: rgba(0, 0, 0, 0.5);\n  margin-top: 6px;\n}\n.modal table.ui.celled tr td:first-child, .modal table.ui.celled tr th:first-child {\n  border-left: 1px solid rgba(34, 36, 38, 0.1);\n}\n.modal table.ui.celled tr td:last-child, .modal table.ui.celled tr th:last-child {\n  border-right: 1px solid rgba(34, 36, 38, 0.1);\n}\n.modal table.ui.celled tr:last-child td {\n  border-bottom: none;\n  border-left: none;\n  border-right: none;\n  font-weight: 600;\n}\n.modal .cancellation-policy {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n.modal .cancel-block .label {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 11px;\n  text-transform: uppercase;\n  color: rgba(21, 27, 37, 0.7);\n  padding: 13px 18px 0px;\n}\n.modal .cancel-block .date {\n  font-weight: 700;\n  padding: 8px 18px;\n}\n.modal .cancel-block .price-total {\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 18px;\n  text-transform: uppercase;\n  color: #000000;\n  padding: 16px 0px;\n}\n.modal .cancel-block .borderLeft {\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n}\n.modal .cancel-block .borderBottom {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.modal .cancel-block .policy-detail {\n  padding: 18px;\n}\n.modal .cancel-block .policy-detail h3 {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 12px;\n  text-transform: uppercase;\n  color: rgba(6, 40, 98, 0.8);\n  margin-bottom: 12px;\n}\n.modal .cancel-block .policy-detail p {\n  color: rgba(0, 0, 0, 0.5);\n  margin-bottom: 12px;\n}\n.modal .m-12 {\n  margin: -12px;\n}\n.m-0 {\n  margin: 0px;\n}\n.pt-0 {\n  padding-top: 0px;\n}\n.p-0 {\n  padding: 0px;\n}\n.right {\n  text-align: right;\n}\n.close.icon, button {\n  cursor: pointer;\n}\nagm-map {\n  height: 500px !important;\n  width: 100%;\n  /* This is really important*/\n}\n@media (max-width: 1280px) {\n  .select-room button {\n    padding: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NlYXJjaC9ob3RlbHMvaG90ZWxzLXNlYXJjaC1yZXN1bHRzL0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcc2VhcmNoXFxob3RlbHNcXGhvdGVscy1zZWFyY2gtcmVzdWx0c1xcaG90ZWxzLXNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvc2VhcmNoL2hvdGVscy9ob3RlbHMtc2VhcmNoLXJlc3VsdHMvaG90ZWxzLXNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBREFJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEQVk7RUFDSSxnQkFBQTtBQ0VoQjtBRENRO0VBQ0ksbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0NaO0FERUk7RUFDSSxvQkFBQTtBQ0FSO0FEQ1E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQ0NaO0FER1E7RUFDSSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNEWjtBREVZO0VBQ0ksa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FDQWhCO0FERVk7RUFDSSxZQUFBO0FDQWhCO0FERVk7RUFDSSw0QkFBQTtBQ0FoQjtBRENnQjtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNDcEI7QURDZ0I7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNDcEI7QURDZ0I7RUFDSSxpQkFBQTtBQ0NwQjtBREFvQjtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0V4QjtBREFvQjtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0V4QjtBRENnQjtFQUNJLGlCQUFBO0FDQ3BCO0FERW9CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQXhCO0FER2dCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0RwQjtBRE1RO0VBQ0ksMkNBQUE7RUFDQSxpQkFBQTtBQ0paO0FETVE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7QUNKWjtBREtZO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUNIaEI7QURJZ0I7RUFDSSxjQUFBO0VBQ0EsNkNBQUE7QUNGcEI7QURNUTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0paO0FES1k7RUFDSSw4Q0FBQTtBQ0hoQjtBRElnQjtFQUNJLG1CQUFBO0FDRnBCO0FES1k7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDSGhCO0FESWdCO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQ0ZwQjtBREl3QjtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRjVCO0FET1k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDTGhCO0FEUWdCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ05wQjtBRFVnQjtFQUNJLGVBQUE7QUNScEI7QURXWTtFQUNJLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1RoQjtBRFVnQjtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ1JwQjtBRFVnQjtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDUnBCO0FEV1k7RUFDSSxnQkFBQTtBQ1RoQjtBRFVnQjtFQUNJLGtCQUFBO0FDUnBCO0FEU29CO0VBQ0ksV0FBQTtBQ1B4QjtBRGFZO0VBQ0ksa0JBQUE7QUNYaEI7QURZZ0I7RUFDSSxjQUFBO0FDVnBCO0FEV29CO0VBQ0ksYUFBQTtBQ1R4QjtBRFdvQjtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDVHhCO0FEY1E7RUFDSSxXQUFBO0FDWlo7QURjUTtFQUNJLGdCQUFBO0FDWlo7QURjUTtFQUNJLFlBQUE7QUNaWjtBRGNRO0VBQ0ksaUJBQUE7QUNaWjtBRGlCSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ2RSO0FEZ0JJO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDZFI7QURpQkE7RUFDSSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FDZEo7QURlSTtFQUNJLDhDQUFBO0VBQ0EsaUJBQUE7QUNiUjtBRGNRO0VBQ0ksbUJBQUE7QUNaWjtBRGVJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNiUjtBRGVJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNiUjtBRGlCWTtFQUNJLGtCQUFBO0FDZmhCO0FEZ0JnQjtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNkcEI7QURlb0I7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUNieEI7QURlb0I7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNieEI7QURlb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2J4QjtBRGVvQjtFQUNJLHVDQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDYnhCO0FEZ0JnQjtFQUNJLFFBQUE7QUNkcEI7QURnQmdCO0VBQ0kseUJBQUE7QUNkcEI7QURpQm9CO0VBQ0kseUJBQUE7QUNmeEI7QURpQm9CO0VBQ0ksY0FBQTtBQ2Z4QjtBRHNCUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3BCWjtBRHNCUTtFQUNJLGlEQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNwQlo7QURzQlE7RUFDSSx5Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ3BCWjtBRDRCd0I7RUFDSSxRQUFBO0FDMUI1QjtBRG9DSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNqQ1I7QURzQ0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDbkNSO0FEcUNJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQ25DUjtBRHFDSTtFQUNJLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ25DUjtBRG9DUTtFQUNJLGlCQUFBO0FDbENaO0FEc0NRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDcENaO0FEc0NRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ3BDWjtBRHdDUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUN0Q1o7QUR3Q1E7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FDdENaO0FEd0NRO0VBQ0ksZ0JBQUE7QUN0Q1o7QUR3Q1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUN0Q1o7QUR5Q0k7RUFDSSxZQUFBO0FDdkNSO0FEd0NRO0VBQ0ksc0JBQUE7RUFDQSwyQ0FBQTtBQ3RDWjtBRHdDUTtFQUNJLFlBQUE7QUN0Q1o7QUR1Q1k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ3JDaEI7QUR1Q1k7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDckNoQjtBRHdDUTtFQUNJLDRDQUFBO0FDdENaO0FEd0NRO0VBQ0ksNkNBQUE7QUN0Q1o7QUR5Q1k7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ3ZDaEI7QUQyQ0k7RUFDSSx3Q0FBQTtBQ3pDUjtBRDRDUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDMUNaO0FENENRO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQzFDWjtBRDRDUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUMxQ1o7QUQ0Q1E7RUFDSSwwQ0FBQTtBQzFDWjtBRDRDUTtFQUNJLDJDQUFBO0FDMUNaO0FENENRO0VBQ0ksYUFBQTtBQzFDWjtBRDJDWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDekNoQjtBRDJDWTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUN6Q2hCO0FENkNJO0VBQ0ksYUFBQTtBQzNDUjtBRCtDQTtFQUNJLFdBQUE7QUM1Q0o7QUQrQ0E7RUFDSSxnQkFBQTtBQzVDSjtBRCtDQTtFQUNJLFlBQUE7QUM1Q0o7QUQrQ0E7RUFDSSxpQkFBQTtBQzVDSjtBRCtDQTtFQUNJLGVBQUE7QUM1Q0o7QUQ4Q0E7RUFDSSx3QkFBQTtFQUNBLFdBQUE7RUFBYyw0QkFBQTtBQzFDbEI7QUQ0Q0E7RUFFUTtJQUNJLFlBQUE7RUMxQ1Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZWFyY2gvaG90ZWxzL2hvdGVscy1zZWFyY2gtcmVzdWx0cy9ob3RlbHMtc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXItd3JhcHBlciwgLm1hcC12aWV3IHtcclxuICAgIG1hcmdpbjogMHB4IDI0cHg7XHJcbiAgICAubW9kaWZ5LXNlYXJjaC1ibG9jayB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG4gICAgICAgIC50ZXh0LWxlZnQge1xyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDYsIDQwLCA5OCwgMC4xKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMTRweCA5cHggMTZweDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzE1MUIyNTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDlweCA2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLW1vcmUge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6ICM0MzdBREE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoNiwgNDAsIDk4LCAwLjEpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjRweCAxMnB4IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudWkuZ3JpZCB7XHJcbiAgICAgICAgLml0ZW0tYmxvY2sge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDYsIDQwLCA5OCwgMC4xKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgIC5pdGVtLWltYWdlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2hvdGVsLWltZy0xLnBuZycpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW0tZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMXB4IDE4cHggMTRweCAxNHB4O1xyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wcmljZS1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMUIxRjI2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRyaXBhZHZpY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hbWVuaXRpZXMtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGVzYyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mdXJ0aGVyZGV0YWlscyB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzgsIDAuMSk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudWkudGFidWxhci5tZW51IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAyN3B4IDBweCAxN3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgLml0ZW0ge1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDUxLCA2MSwgNzgsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzNENEU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNiwgNDAsIDk4LCAwLjkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51aS50YWIuc2VnbWVudCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgLmZ1cnRoZXJkZXRhaWxzLXJvdyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM4LCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcmljZSBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzFCMUYyNjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTRweCAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFkZC13aWRnZXQtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzN0FEQTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE0cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZWxlY3Qtcm9vbSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNnB4IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzYy10YWItYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2LCA0MCwgOTgsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAxNHB4O1xyXG4gICAgICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW1hZ2Utd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNHB4O1xyXG4gICAgICAgICAgICAgICAgLmltYWdlLXRodW1iIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51aS50YWIuc2VnbWVudC5hbWVuaXR5LXRhYiB7XHJcbiAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tLTAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnB0LTAge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucC0wIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmZsaXRlci1oZWFkLWJsb2NrIHtcclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBtYXJnaW46IDVweCAwcHggMjRweDtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNDM3QURBO1xyXG4gICAgfVxyXG59XHJcbi5maWx0ZXItYmxvY2sge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoNiwgNDAsIDk4LCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNC45NjE0MXB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICAuZmlsdGVycyB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzOCwgMC4xKTtcclxuICAgICAgICBwYWRkaW5nOiAyNHB4IDBweDtcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgICAgICBjb2xvcjogIzQzN0FEQTtcclxuICAgIH1cclxuICAgIC5zdGFyLXJhdGluZy1ibG9jayB7XHJcbiAgICAgICAgLnJhdGluZy1saXN0LWJsb2NrIHtcclxuICAgICAgICAgICAgLnVpLmNoZWNrYm94IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjQsIDI3LCAzMiwgMC43KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzg2N2IxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzM4NjdiMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzg2N2IxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcmljZS1mbGl0ZXItYmxvY2sge1xyXG4gICAgICAgIC5wcmljZS1kZXNjIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjcsIDMxLCAzOCwgMC42KTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYsIDQwLCA5OCwgMC4yKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjcsIDMxLCAzOCwgMC45KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogODhweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbi5nbyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjcsIDEyMiwgMjE4LCAwLjMpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3LjI0NDQ4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzQzN0FEQTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDRweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1lYWwtYmxvY2ssIC5mYWNpbGl0eS1ibG9jaywgLmxvY2F0aW9uLWJsb2NrIHtcclxuICAgICAgICAuc3Rhci1yYXRpbmctYmxvY2sge1xyXG4gICAgICAgICAgICAucmF0aW5nLWxpc3QtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgLnVpLmNoZWNrYm94IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXAtdmlldyB7XHJcbiAgICAudWkuZ3JpZCAuaXRlbS1ibG9jayAuaXRlbS1kZXRhaWxzIC5hbWVuaXRpZXMtYmxvY2sgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE5cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNsb3NlLmljb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMTJweDtcclxuICAgICAgICB0b3A6IDJweDtcclxuICAgIH1cclxuICAgIC5ib3JkZXItYmxvY2sge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNiwgNDAsIDk4LCAwLjEpO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMTJweCAxOHB4O1xyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRldGFpbC1sYWJlbCB7XHJcbiAgICAgICAgcDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudG90YWwtcm93IHtcclxuICAgICAgICBoNCwgLnRvdC1wcmljZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvdC1wcmljZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0YWJsZS51aS5jZWxsZWQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB0ciB0aCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDM0LDM2LDM4LC4xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGUtcm93IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICBwOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDlweDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyIHRkOmZpcnN0LWNoaWxkLCB0ciB0aDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgzNCwzNiwzOCwuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyIHRkOmxhc3QtY2hpbGQsIHRyIHRoOmxhc3QtY2hpbGQgIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgzNCwzNiwzOCwuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgIC5jYW5jZWxsYXRpb24tcG9saWN5IHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgfVxyXG4gICAgLmNhbmNlbC1ibG9jayB7XHJcbiAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTFweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjEsIDI3LCAzNywgMC43KTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTNweCAxOHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByaWNlLXRvdGFsIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYm9yZGVyTGVmdCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJvcmRlckJvdHRvbSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wb2xpY3ktZGV0YWlsIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMThweDtcclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSg2LCA0MCwgOTgsIDAuOCk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubS0xMiB7XHJcbiAgICAgICAgbWFyZ2luOiAtMTJweDtcclxuICAgIH1cclxufVxyXG5cclxuLm0tMCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnB0LTAge1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuLnAtMCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmNsb3NlLmljb24sIGJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTsgIC8qIFRoaXMgaXMgcmVhbGx5IGltcG9ydGFudCovXHJcbiAgfVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAuc2VsZWN0LXJvb20ge1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIub3V0ZXItd3JhcHBlciwgLm1hcC12aWV3IHtcbiAgbWFyZ2luOiAwcHggMjRweDtcbn1cbi5vdXRlci13cmFwcGVyIC5tb2RpZnktc2VhcmNoLWJsb2NrLCAubWFwLXZpZXcgLm1vZGlmeS1zZWFyY2gtYmxvY2sge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xufVxuLm91dGVyLXdyYXBwZXIgLm1vZGlmeS1zZWFyY2gtYmxvY2sgLnRleHQtbGVmdCBidXR0b24sIC5tYXAtdmlldyAubW9kaWZ5LXNlYXJjaC1ibG9jayAudGV4dC1sZWZ0IGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4ub3V0ZXItd3JhcHBlciAubW9kaWZ5LXNlYXJjaC1ibG9jayBidXR0b24sIC5tYXAtdmlldyAubW9kaWZ5LXNlYXJjaC1ibG9jayBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDYsIDQwLCA5OCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA4cHggMTRweCA5cHggMTZweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBjb2xvcjogIzE1MUIyNTtcbiAgbWFyZ2luOiAwcHggMHB4IDlweCA2cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5vdXRlci13cmFwcGVyIC5zZWFyY2gtbW9yZSwgLm1hcC12aWV3IC5zZWFyY2gtbW9yZSB7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuLm91dGVyLXdyYXBwZXIgLnNlYXJjaC1tb3JlIGEsIC5tYXAtdmlldyAuc2VhcmNoLW1vcmUgYSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBjb2xvcjogIzQzN0FEQTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSg2LCA0MCwgOTgsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTJweCAyNHB4IDEycHggMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLml0ZW0tYmxvY2ssIC5tYXAtdmlldyAudWkuZ3JpZCAuaXRlbS1ibG9jayB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoNiwgNDAsIDk4LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC5pdGVtLWJsb2NrIC5pdGVtLWltYWdlLCAubWFwLXZpZXcgLnVpLmdyaWQgLml0ZW0tYmxvY2sgLml0ZW0taW1hZ2Uge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvaG90ZWwtaW1nLTEucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogYXV0bztcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC5pdGVtLWJsb2NrID4gZGl2LCAubWFwLXZpZXcgLnVpLmdyaWQgLml0ZW0tYmxvY2sgPiBkaXYge1xuICBwYWRkaW5nOiAwcHg7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAuaXRlbS1ibG9jayAuaXRlbS1kZXRhaWxzLCAubWFwLXZpZXcgLnVpLmdyaWQgLml0ZW0tYmxvY2sgLml0ZW0tZGV0YWlscyB7XG4gIHBhZGRpbmc6IDExcHggMThweCAxNHB4IDE0cHg7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAuaXRlbS1ibG9jayAuaXRlbS1kZXRhaWxzIGgyLCAubWFwLXZpZXcgLnVpLmdyaWQgLml0ZW0tYmxvY2sgLml0ZW0tZGV0YWlscyBoMiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAuaXRlbS1ibG9jayAuaXRlbS1kZXRhaWxzIC5saWdodCwgLm1hcC12aWV3IC51aS5ncmlkIC5pdGVtLWJsb2NrIC5pdGVtLWRldGFpbHMgLmxpZ2h0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLml0ZW0tYmxvY2sgLml0ZW0tZGV0YWlscyAucHJpY2UtYmxvY2ssIC5tYXAtdmlldyAudWkuZ3JpZCAuaXRlbS1ibG9jayAuaXRlbS1kZXRhaWxzIC5wcmljZS1ibG9jayB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLml0ZW0tYmxvY2sgLml0ZW0tZGV0YWlscyAucHJpY2UtYmxvY2sgcCwgLm1hcC12aWV3IC51aS5ncmlkIC5pdGVtLWJsb2NrIC5pdGVtLWRldGFpbHMgLnByaWNlLWJsb2NrIHAge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBjb2xvcjogIzFCMUYyNjtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLml0ZW0tYmxvY2sgLml0ZW0tZGV0YWlscyAucHJpY2UtYmxvY2sgc3BhbiwgLm1hcC12aWV3IC51aS5ncmlkIC5pdGVtLWJsb2NrIC5pdGVtLWRldGFpbHMgLnByaWNlLWJsb2NrIHNwYW4ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAuaXRlbS1ibG9jayAuaXRlbS1kZXRhaWxzIC50cmlwYWR2aWNvbiwgLm1hcC12aWV3IC51aS5ncmlkIC5pdGVtLWJsb2NrIC5pdGVtLWRldGFpbHMgLnRyaXBhZHZpY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAuaXRlbS1ibG9jayAuaXRlbS1kZXRhaWxzIC5hbWVuaXRpZXMtYmxvY2sgaW1nLCAubWFwLXZpZXcgLnVpLmdyaWQgLml0ZW0tYmxvY2sgLml0ZW0tZGV0YWlscyAuYW1lbml0aWVzLWJsb2NrIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC5pdGVtLWJsb2NrIC5pdGVtLWRldGFpbHMgLmRlc2MsIC5tYXAtdmlldyAudWkuZ3JpZCAuaXRlbS1ibG9jayAuaXRlbS1kZXRhaWxzIC5kZXNjIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgbWF4LXdpZHRoOiAzMTBweDtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC5mdXJ0aGVyZGV0YWlscywgLm1hcC12aWV3IC51aS5ncmlkIC5mdXJ0aGVyZGV0YWlscyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzgsIDAuMSk7XG4gIHBhZGRpbmctdG9wOiAyN3B4O1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLnVpLnRhYnVsYXIubWVudSwgLm1hcC12aWV3IC51aS5ncmlkIC51aS50YWJ1bGFyLm1lbnUge1xuICBtYXJnaW46IDI3cHggMHB4IDE3cHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLnVpLnRhYnVsYXIubWVudSAuaXRlbSwgLm1hcC12aWV3IC51aS5ncmlkIC51aS50YWJ1bGFyLm1lbnUgLml0ZW0ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiByZ2JhKDUxLCA2MSwgNzgsIDAuNSk7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAudWkudGFidWxhci5tZW51IC5pdGVtLmFjdGl2ZSwgLm1hcC12aWV3IC51aS5ncmlkIC51aS50YWJ1bGFyLm1lbnUgLml0ZW0uYWN0aXZlIHtcbiAgY29sb3I6ICMzMzNENEU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDYsIDQwLCA5OCwgMC45KTtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC51aS50YWIuc2VnbWVudCwgLm1hcC12aWV3IC51aS5ncmlkIC51aS50YWIuc2VnbWVudCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC51aS50YWIuc2VnbWVudCAuZnVydGhlcmRldGFpbHMtcm93LCAubWFwLXZpZXcgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IC5mdXJ0aGVyZGV0YWlscy1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM4LCAwLjEpO1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IC5mdXJ0aGVyZGV0YWlscy1yb3c6bGFzdC1jaGlsZCwgLm1hcC12aWV3IC51aS5ncmlkIC51aS50YWIuc2VnbWVudCAuZnVydGhlcmRldGFpbHMtcm93Omxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IHVsLCAubWFwLXZpZXcgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAudWkudGFiLnNlZ21lbnQgdWwgbGksIC5tYXAtdmlldyAudWkuZ3JpZCAudWkudGFiLnNlZ21lbnQgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC51aS50YWIuc2VnbWVudCB1bCBsaTpub3QoOmxhc3QtY2hpbGQpOmFmdGVyLCAubWFwLXZpZXcgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IHVsIGxpOm5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IGF1dG87XG4gIHRvcDogYXV0bztcbiAgei1pbmRleDogMjtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IC5wcmljZSBwLCAubWFwLXZpZXcgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IC5wcmljZSBwIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgY29sb3I6ICMxQjFGMjY7XG4gIG1hcmdpbjogMTRweCAwcHg7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAudWkudGFiLnNlZ21lbnQgLmFkZC13aWRnZXQtYmxvY2sgYnV0dG9uLCAubWFwLXZpZXcgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IC5hZGQtd2lkZ2V0LWJsb2NrIGJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGNvbG9yOiAjNDM3QURBO1xuICBtYXJnaW46IDE0cHggMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IC5zZWxlY3Qtcm9vbSBidXR0b24sIC5tYXAtdmlldyAudWkuZ3JpZCAudWkudGFiLnNlZ21lbnQgLnNlbGVjdC1yb29tIGJ1dHRvbiB7XG4gIG1hcmdpbjogNnB4IDBweDtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC51aS50YWIuc2VnbWVudCAuZGVzYy10YWItYmxvY2ssIC5tYXAtdmlldyAudWkuZ3JpZCAudWkudGFiLnNlZ21lbnQgLmRlc2MtdGFiLWJsb2NrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2LCA0MCwgOTgsIDAuMSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luOiAxNnB4O1xuICBwYWRkaW5nOiAyMHB4IDE0cHg7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAudWkudGFiLnNlZ21lbnQgLmRlc2MtdGFiLWJsb2NrIGg1LCAubWFwLXZpZXcgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IC5kZXNjLXRhYi1ibG9jayBoNSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC51aS50YWIuc2VnbWVudCAuZGVzYy10YWItYmxvY2sgcCwgLm1hcC12aWV3IC51aS5ncmlkIC51aS50YWIuc2VnbWVudCAuZGVzYy10YWItYmxvY2sgcCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC51aS50YWIuc2VnbWVudCAuaW1hZ2Utd3JhcHBlciwgLm1hcC12aWV3IC51aS5ncmlkIC51aS50YWIuc2VnbWVudCAuaW1hZ2Utd3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweCA0cHg7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAudWkudGFiLnNlZ21lbnQgLmltYWdlLXdyYXBwZXIgLmltYWdlLXRodW1iLCAubWFwLXZpZXcgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IC5pbWFnZS13cmFwcGVyIC5pbWFnZS10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC51aS50YWIuc2VnbWVudCAuaW1hZ2Utd3JhcHBlciAuaW1hZ2UtdGh1bWIgaW1nLCAubWFwLXZpZXcgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50IC5pbWFnZS13cmFwcGVyIC5pbWFnZS10aHVtYiBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC51aS50YWIuc2VnbWVudC5hbWVuaXR5LXRhYiB1bCwgLm1hcC12aWV3IC51aS5ncmlkIC51aS50YWIuc2VnbWVudC5hbWVuaXR5LXRhYiB1bCB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC51aS50YWIuc2VnbWVudC5hbWVuaXR5LXRhYiB1bCBsaSwgLm1hcC12aWV3IC51aS5ncmlkIC51aS50YWIuc2VnbWVudC5hbWVuaXR5LXRhYiB1bCBsaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50LmFtZW5pdHktdGFiIHVsIGxpOmFmdGVyLCAubWFwLXZpZXcgLnVpLmdyaWQgLnVpLnRhYi5zZWdtZW50LmFtZW5pdHktdGFiIHVsIGxpOmFmdGVyIHtcbiAgY29udGVudDogbm9uZTtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC51aS50YWIuc2VnbWVudC5hbWVuaXR5LXRhYiB1bCBsaTpiZWZvcmUsIC5tYXAtdmlldyAudWkuZ3JpZCAudWkudGFiLnNlZ21lbnQuYW1lbml0eS10YWIgdWwgbGk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBhdXRvO1xuICB0b3A6IGF1dG87XG4gIHotaW5kZXg6IDI7XG4gIG1hcmdpbi1sZWZ0OiAtMjRweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLm0tMCwgLm1hcC12aWV3IC51aS5ncmlkIC5tLTAge1xuICBtYXJnaW46IDBweDtcbn1cbi5vdXRlci13cmFwcGVyIC51aS5ncmlkIC5wdC0wLCAubWFwLXZpZXcgLnVpLmdyaWQgLnB0LTAge1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuLm91dGVyLXdyYXBwZXIgLnVpLmdyaWQgLnAtMCwgLm1hcC12aWV3IC51aS5ncmlkIC5wLTAge1xuICBwYWRkaW5nOiAwcHg7XG59XG4ub3V0ZXItd3JhcHBlciAudWkuZ3JpZCAucmlnaHQsIC5tYXAtdmlldyAudWkuZ3JpZCAucmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmZsaXRlci1oZWFkLWJsb2NrIGgyIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luOiA1cHggMHB4IDI0cHg7XG59XG4uZmxpdGVyLWhlYWQtYmxvY2sgYSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGNvbG9yOiAjNDM3QURBO1xufVxuXG4uZmlsdGVyLWJsb2NrIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSg2LCA0MCwgOTgsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uZmlsdGVyLWJsb2NrIC5maWx0ZXJzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzOCwgMC4xKTtcbiAgcGFkZGluZzogMjRweCAwcHg7XG59XG4uZmlsdGVyLWJsb2NrIC5maWx0ZXJzOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLmZpbHRlci1ibG9jayBoNCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5maWx0ZXItYmxvY2sgYSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgY29sb3I6ICM0MzdBREE7XG59XG4uZmlsdGVyLWJsb2NrIC5zdGFyLXJhdGluZy1ibG9jayAucmF0aW5nLWxpc3QtYmxvY2sgLnVpLmNoZWNrYm94IHtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xufVxuLmZpbHRlci1ibG9jayAuc3Rhci1yYXRpbmctYmxvY2sgLnJhdGluZy1saXN0LWJsb2NrIC51aS5jaGVja2JveCBsYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuLmZpbHRlci1ibG9jayAuc3Rhci1yYXRpbmctYmxvY2sgLnJhdGluZy1saXN0LWJsb2NrIC51aS5jaGVja2JveCBsYWJlbDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRvcDogMXB4O1xufVxuLmZpbHRlci1ibG9jayAuc3Rhci1yYXRpbmctYmxvY2sgLnJhdGluZy1saXN0LWJsb2NrIC51aS5jaGVja2JveCBsYWJlbDphZnRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdG9wOiAycHg7XG4gIGxlZnQ6IDFweDtcbn1cbi5maWx0ZXItYmxvY2sgLnN0YXItcmF0aW5nLWJsb2NrIC5yYXRpbmctbGlzdC1ibG9jayAudWkuY2hlY2tib3ggbGFiZWwgaW1nIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cbi5maWx0ZXItYmxvY2sgLnN0YXItcmF0aW5nLWJsb2NrIC5yYXRpbmctbGlzdC1ibG9jayAudWkuY2hlY2tib3ggbGFiZWwudGV4dCB7XG4gIGNvbG9yOiByZ2JhKDI0LCAyNywgMzIsIDAuNykgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4uZmlsdGVyLWJsb2NrIC5zdGFyLXJhdGluZy1ibG9jayAucmF0aW5nLWxpc3QtYmxvY2sgLnVpLmNoZWNrYm94IGlucHV0IHtcbiAgdG9wOiAxcHg7XG59XG4uZmlsdGVyLWJsb2NrIC5zdGFyLXJhdGluZy1ibG9jayAucmF0aW5nLWxpc3QtYmxvY2sgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB7XG4gIGNvbG9yOiAjMzg2N2IxICFpbXBvcnRhbnQ7XG59XG4uZmlsdGVyLWJsb2NrIC5zdGFyLXJhdGluZy1ibG9jayAucmF0aW5nLWxpc3QtYmxvY2sgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpiZWZvcmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzg2N2IxO1xufVxuLmZpbHRlci1ibG9jayAuc3Rhci1yYXRpbmctYmxvY2sgLnJhdGluZy1saXN0LWJsb2NrIC51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YWZ0ZXIge1xuICBjb2xvcjogIzM4NjdiMTtcbn1cbi5maWx0ZXItYmxvY2sgLnByaWNlLWZsaXRlci1ibG9jayAucHJpY2UtZGVzYyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGNvbG9yOiByZ2JhKDI3LCAzMSwgMzgsIDAuNik7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4uZmlsdGVyLWJsb2NrIC5wcmljZS1mbGl0ZXItYmxvY2sgaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYsIDQwLCA5OCwgMC4yKSAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTJweDtcbiAgY29sb3I6IHJnYmEoMjcsIDMxLCAzOCwgMC45KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWluLXdpZHRoOiBhdXRvO1xuICB3aWR0aDogODhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4uZmlsdGVyLWJsb2NrIC5wcmljZS1mbGl0ZXItYmxvY2sgYnV0dG9uLmdvIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2NywgMTIyLCAyMTgsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDcuMjQ0NDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGNvbG9yOiAjNDM3QURBO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiA0NHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5maWx0ZXItYmxvY2sgLm1lYWwtYmxvY2sgLnN0YXItcmF0aW5nLWJsb2NrIC5yYXRpbmctbGlzdC1ibG9jayAudWkuY2hlY2tib3ggbGFiZWw6YWZ0ZXIsIC5maWx0ZXItYmxvY2sgLmZhY2lsaXR5LWJsb2NrIC5zdGFyLXJhdGluZy1ibG9jayAucmF0aW5nLWxpc3QtYmxvY2sgLnVpLmNoZWNrYm94IGxhYmVsOmFmdGVyLCAuZmlsdGVyLWJsb2NrIC5sb2NhdGlvbi1ibG9jayAuc3Rhci1yYXRpbmctYmxvY2sgLnJhdGluZy1saXN0LWJsb2NrIC51aS5jaGVja2JveCBsYWJlbDphZnRlciB7XG4gIHRvcDogMHB4O1xufVxuXG4ubWFwLXZpZXcgLnVpLmdyaWQgLml0ZW0tYmxvY2sgLml0ZW0tZGV0YWlscyAuYW1lbml0aWVzLWJsb2NrIGltZyB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4ubW9kYWwgaDIge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgcGFkZGluZzogMTlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1vZGFsIC5jbG9zZS5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTJweDtcbiAgdG9wOiAycHg7XG59XG4ubW9kYWwgLmJvcmRlci1ibG9jayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNiwgNDAsIDk4LCAwLjEpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDExcHg7XG4gIG1hcmdpbjogMHB4IDEycHggMThweDtcbn1cbi5tb2RhbCAuYm9yZGVyLWJsb2NrIGg0IHtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG4ubW9kYWwgLmRldGFpbC1sYWJlbCBwOmZpcnN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLm1vZGFsIC5kZXRhaWwtbGFiZWwgcDpsYXN0LWNoaWxkIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbn1cbi5tb2RhbCAudG90YWwtcm93IGg0LCAubW9kYWwgLnRvdGFsLXJvdyAudG90LXByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLm1vZGFsIC50b3RhbC1yb3cgcCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ubW9kYWwgLnRvdGFsLXJvdyBoNCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4ubW9kYWwgLnRvdGFsLXJvdyAudG90LXByaWNlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuLm1vZGFsIHRhYmxlLnVpLmNlbGxlZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5tb2RhbCB0YWJsZS51aS5jZWxsZWQgdHIgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgzNCwgMzYsIDM4LCAwLjEpO1xufVxuLm1vZGFsIHRhYmxlLnVpLmNlbGxlZCAuZGF0ZS1yb3cge1xuICB3aWR0aDogMTIwcHg7XG59XG4ubW9kYWwgdGFibGUudWkuY2VsbGVkIC5kYXRlLXJvdyBwOmZpcnN0LWNoaWxkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ubW9kYWwgdGFibGUudWkuY2VsbGVkIC5kYXRlLXJvdyBwOmxhc3QtY2hpbGQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDlweDtcbiAgbGluZS1oZWlnaHQ6IDlweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLm1vZGFsIHRhYmxlLnVpLmNlbGxlZCB0ciB0ZDpmaXJzdC1jaGlsZCwgLm1vZGFsIHRhYmxlLnVpLmNlbGxlZCB0ciB0aDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgzNCwgMzYsIDM4LCAwLjEpO1xufVxuLm1vZGFsIHRhYmxlLnVpLmNlbGxlZCB0ciB0ZDpsYXN0LWNoaWxkLCAubW9kYWwgdGFibGUudWkuY2VsbGVkIHRyIHRoOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDM0LCAzNiwgMzgsIDAuMSk7XG59XG4ubW9kYWwgdGFibGUudWkuY2VsbGVkIHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1vZGFsIC5jYW5jZWxsYXRpb24tcG9saWN5IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5tb2RhbCAuY2FuY2VsLWJsb2NrIC5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiByZ2JhKDIxLCAyNywgMzcsIDAuNyk7XG4gIHBhZGRpbmc6IDEzcHggMThweCAwcHg7XG59XG4ubW9kYWwgLmNhbmNlbC1ibG9jayAuZGF0ZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDhweCAxOHB4O1xufVxuLm1vZGFsIC5jYW5jZWwtYmxvY2sgLnByaWNlLXRvdGFsIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmc6IDE2cHggMHB4O1xufVxuLm1vZGFsIC5jYW5jZWwtYmxvY2sgLmJvcmRlckxlZnQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ubW9kYWwgLmNhbmNlbC1ibG9jayAuYm9yZGVyQm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5tb2RhbCAuY2FuY2VsLWJsb2NrIC5wb2xpY3ktZGV0YWlsIHtcbiAgcGFkZGluZzogMThweDtcbn1cbi5tb2RhbCAuY2FuY2VsLWJsb2NrIC5wb2xpY3ktZGV0YWlsIGgzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiByZ2JhKDYsIDQwLCA5OCwgMC44KTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5tb2RhbCAuY2FuY2VsLWJsb2NrIC5wb2xpY3ktZGV0YWlsIHAge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLm1vZGFsIC5tLTEyIHtcbiAgbWFyZ2luOiAtMTJweDtcbn1cblxuLm0tMCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ucHQtMCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5wLTAge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2xvc2UuaWNvbiwgYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hZ20tbWFwIHtcbiAgaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgLyogVGhpcyBpcyByZWFsbHkgaW1wb3J0YW50Ki9cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAuc2VsZWN0LXJvb20gYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/search/hotels/hotels-search-results/hotels-search-results.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/layout/search/hotels/hotels-search-results/hotels-search-results.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: HotelsSearchResultsComponent */

  /***/
  function srcAppLayoutSearchHotelsHotelsSearchResultsHotelsSearchResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotelsSearchResultsComponent", function () {
      return HotelsSearchResultsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_hotels_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../shared/services/hotels.service */
    "./src/app/shared/services/hotels.service.ts");
    /* harmony import */


    var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../_modal */
    "./src/app/layout/_modal/index.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HotelsSearchResultsComponent =
    /*#__PURE__*/
    function () {
      function HotelsSearchResultsComponent(HotelService, modalService, toastr, router, activatedRoute) {
        _classCallCheck(this, HotelsSearchResultsComponent);

        this.HotelService = HotelService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.isOpened = true;
        this.showSearchResult = true;
        this.opened = [];
        this.showfurtherDetails = false;
        this.showRoomSpinner = false;
        this.blockRoomSpinner = false;
        this.showPassengerDetail = false;
        this.lhPrice = '';
        this.ratings = [{
          label: "1 Star",
          value: 0,
          selected: false
        }, {
          label: "1 Star",
          value: 1,
          selected: false
        }, {
          label: "2 Star",
          value: 2,
          selected: false
        }, {
          label: "3 Star",
          value: 3,
          selected: false
        }, {
          label: "4 Star",
          value: 4,
          selected: false
        }, {
          label: "5 Star",
          value: 5,
          selected: false
        }];
        this.ratingAll = true; //add google map vars

        this.zoom = 8;
      }

      _createClass(HotelsSearchResultsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //setting all the rating true
          for (var i = 0; i <= 5; i++) {
            this.ratings[i].selected = true;
          } //static hotels
          //this.hotelList = (listOfHotels as any).default;
          //console.log("hotelList", this.hotelList);

          /*
           this.searchCriteria =  {
           "adults_per_room": "1",
           "browser_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
           "browser_ip": "::1",
           "checkInUnix": "1587427200",
           "checkOutUnix": "1587513600",
           "check_in": "2020-04-21T00:00:00Z",
           "check_out": "2020-04-22T00:00:00Z",
           "children_per_room": "0",
           "city": "Dubai Emirate, United Arab Emirates",
           "city_code": "1079",
           "country": "AE",
           "currency": "INR",
           "extra_bed": "0",
           "markupBy": "by_amount",
           "nationality": "AE",
           "no_of_rooms": "1",
           "resident": "AE",
           "response_key": "1958043a-69cd-4f94-be8f-146b033e23811582523406",
           "scr": "b2b"
          };*/


          var hotel_array = [];

          if (this.hotelList.length > 0) {
            this.lat = this.hotelList[0].latitute;
            this.lng = this.hotelList[0].longitute;
          }

          this.hotelList.map(function (hotel) {
            hotel_array.push({
              lat: hotel.latitute,
              lng: hotel.longitute,
              label: hotel.hotel_name,
              draggable: true
            });
          });
          this.markers = hotel_array;
          this.ratePolicyRoom = {
            "room_code": "SGL.DX",
            "room_type_code": "DLX-SGL",
            "room_description": "SINGLE DELUXE",
            "booking_code": "20200421|20200422|W|270|102893|SGL.DX|GR-ALL|BB||1~1~0||N@03~~22227~1168539358~N~E1CD44D0397E4AE158167341039700PAUK0660001000000000522227",
            "currency_code": "INR",
            "base_rate": "1",
            "supplier_price": "2905.80",
            "adult_max": "1",
            "child_max": "0",
            "extra_bed": "0",
            "adult": "1",
            "child": "0",
            "beds": "0",
            "quantity": "1",
            "timezone": "Asia/Calcutta",
            "booking_hotel_id": "0",
            "variables": {
              "entry": [{
                "key": "RoomSplit",
                "value": "{\"Room1\":{\"roomName\":\"SINGLE DELUXE\",\"roomCategory\":\"SINGLE DELUXE\",\"boardType\":\"BF\",\"totalPrice\":\"2905.80\",\"tax\":null,\"totalSupplierPrice\":\"2905.80\",\"totalMarkupPrice\":\"2905.80\",\"discountedPrice\":null,\"childRate\":null,\"pricePerDay\":[\"21-Apr-2020:Tue-2905.80\"],\"childAge\":null,\"additionalCharges\":null,\"inclusiveFees\":{},\"exclusiveFees\":{}}}"
              }, {
                "key": "supplierClientCurrencyRate",
                "value": "73.8637"
              }, {
                "key": "Bookable",
                "value": "true"
              }]
            },
            "originalSupplierRoomPrice": "39.34",
            "dynamicMarkup": "0.00",
            "sPSupplierCurrency": "39.34",
            "sCsupplierCurrency": "EUR",
            "board_type": "BF",
            "cancel_policy": [{
              "currencyCode": "INR",
              "dynamicMarkUp": "0.0",
              "fromUnix": "1581673410",
              "markup_price": "0.00",
              "original_cancellation_supplier_price": "0.00",
              "supplier_price": "0.00",
              "toUnix": "1587148140"
            }, {
              "cancel_restriction": "false",
              "currencyCode": "INR",
              "dynamicMarkUp": "0.0",
              "fromUnix": "1587148140",
              "markup_price": "2905.80",
              "original_cancellation_supplier_price": "39.34",
              "SCSupplierCurrency": "EUR",
              "SPriceSupplierCurrency": "39.34",
              "supplier_price": "2905.80",
              "toUnix": "1587407400"
            }],
            "inclusion": "inclusion",
            "hotel_name": "TRAVANCORE COURT By Spree, Cochin",
            "hotel_id": "102893",
            "supplier_name": "apitude",
            "markup_price": "2905.80"
          };
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          $(document).ready(function () {
            $('.menu .item').tab();
          });
        } //google map methods

      }, {
        key: "clickedMarker",
        value: function clickedMarker(label, index) {
          console.log("clicked the marker: ".concat(label || index));
        }
      }, {
        key: "mapClicked",
        value: function mapClicked($event) {
          this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
          });
        }
      }, {
        key: "markerDragEnd",
        value: function markerDragEnd(m, $event) {
          console.log('dragEnd', m, $event);
        }
      }, {
        key: "getHotel",
        value: function getHotel(hotel) {
          var _this83 = this;

          this.HotelService.getHotelInfo(hotel).subscribe(function (results) {
            _this83.hotel_desription = results.result;
          });
        }
      }, {
        key: "onToggle",
        value: function onToggle(hotel) {
          this.searchingRoom = !this.searchingRoom;
        }
      }, {
        key: "modifySearch",
        value: function modifySearch() {
          this.router.navigate([''], {
            relativeTo: this.activatedRoute
          });
        }
      }, {
        key: "showFurtherDetails",
        value: function showFurtherDetails(hotel) {
          var _this84 = this;

          this.showRoomSpinner = true;
          this.showfurtherDetails = false;
          this.selected_panel = hotel.supplier_hotel_id; //console.log("hotel",hotel);
          //add hotel to view on the passanger page

          this.selectedHotel = hotel;
          this.getHotel(hotel); //adding the hotel detail

          this.searchCriteria.hotel = {
            "supplier_code": hotel.supplier_code,
            "hotel_id": hotel.supplier_hotel_id != undefined ? hotel.supplier_hotel_id : hotel.hotel_id
          }; //console.log("searched Data",this.searchCriteria);

          this.selected_panel = hotel.hotel_id; //getting the rooms

          this.HotelService.searchRooms(this.searchCriteria).subscribe(function (results) {
            //console.log("search Room Result",results);
            //adding the response key 
            _this84.response_key = results.result.response_key;

            if (results.result.hotel != undefined && results.result.hotel.room != undefined) {
              _this84.ListOfRooms = Array.isArray(results.result.hotel.room) ? results.result.hotel.room : Array(results.result.hotel.room); //console.log("List of Rooms",this.ListOfRooms);

              _this84.showfurtherDetails = true;

              _this84.toastr.success("".concat(results.message), "", {
                timeOut: 2000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });

              _this84.showRoomSpinner = false;
              _this84.isOpened = true;
            } else {
              _this84.showRoomSpinner = false;
              _this84.showfurtherDetails = false;

              _this84.toastr.error("".concat(results.message), "", {
                timeOut: 2000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });

              _this84.showRoomSpinner = false;
              _this84.showfurtherDetails = false;
            }
          });
        }
      }, {
        key: "blockRoom",
        value: function blockRoom(room) {
          var _this85 = this;

          // console.log("Room Block Request",room);
          this.searchCriteria.response_key = this.response_key; //override the hote tag

          this.searchCriteria.hotel.room = room;
          console.log("Block Room Search Criteria", this.searchCriteria);
          this.HotelService.blockRoom(this.searchCriteria).subscribe(function (results) {
            // console.log("blocked result",results);
            if (results.result.nil || results.result.hotel == undefined) {
              _this85.toastr.error("Please try other room", "", {
                timeOut: 2000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              }); //this.router.navigate(['results'],{relativeTo: this.activatedRoute});

            } else {
              _this85.blockedRoom = results;

              _this85.toastr.success("".concat(results.message), "", {
                timeOut: 2000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });

              _this85.showSearchResult = false;
              _this85.showPassengerDetail = true;
            }
          });
        }
      }, {
        key: "showMapView",
        value: function showMapView(modalId) {
          // this.ratePolicyRoom
          this.modalService.open(modalId);
        }
      }, {
        key: "showRateModal",
        value: function showRateModal(modalId, room) {
          if (room.cancel_policy) {
            this.ratePolicyRoom = room;
            this.ratePolicyRoom.inclusion = Array(this.ratePolicyRoom.inclusion);
            console.log("this.ratePolicyRoom.inclusion", this.ratePolicyRoom.inclusion);
            this.modalService.open(modalId);
          } else {
            this.toastr.error("Rate policy not found", "Rate policy not found", {
              timeOut: 2000,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
          }
        }
      }, {
        key: "showCancelPolicy",
        value: function showCancelPolicy(modalId, room) {
          //  console.log("showCancelPolicy",room);
          if (room.cancel_policy) {
            this.ratePolicyRoom = room;
            this.ratePolicyRoom.inclusion = Array(this.ratePolicyRoom.inclusion);
            console.log("this.ratePolicyRoom.inclusion", this.ratePolicyRoom.inclusion);
            this.modalService.open(modalId);
          } else {
            this.toastr.error("Cancel policy not found", "Cancel policy not found", {
              timeOut: 2000,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
          }
        }
      }, {
        key: "closeModal",
        value: function closeModal(modalId) {
          this.modalService.close(modalId);
        }
      }, {
        key: "numberOfNights",
        value: function numberOfNights(checkin, checkout) {
          // console.log("chekcin",checkin,"checkout",checkout);
          var checkInDate = new Date(checkin * 1000);
          var checkOutDate = new Date(checkout * 1000); // console.log("chekcin",checkInDate,"checkout",checkOutDate);

          var diff_in_time = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
          var diff_in_days = Math.ceil(diff_in_time / (1000 * 3600 * 24));
          var nights = isNaN(diff_in_days) || diff_in_days < 0 ? 0 : diff_in_days;
          return nights;
        }
      }, {
        key: "roomDetailsTab",
        value: function roomDetailsTab(id) {
          $('#room-tab-' + id).attr('class', 'item active');
          $('#tab-room-' + id).attr('class', 'ui bottom attached tab segment active');
          $('#desc-tab-' + id).attr('class', 'item');
          $('#tab-desc-' + id).attr('class', 'ui bottom attached tab segment');
          $('#review-tab-' + id).attr('class', 'item');
          $('#tab-review-' + id).attr('class', 'ui bottom attached tab segment');
          $('#map-tab-' + id).attr('class', 'item');
          $('#tab-map-' + id).attr('class', 'ui bottom attached tab segment');
          $('#photo-tab-' + id).attr('class', 'item');
          $('#tab-photo-' + id).attr('class', 'ui bottom attached tab segment');
        }
      }, {
        key: "DescriptionTab",
        value: function DescriptionTab(id) {
          $('#room-tab-' + id).attr('class', 'item');
          $('#tab-room-' + id).attr('class', 'ui bottom attached tab segment');
          $('#desc-tab-' + id).attr('class', 'item active');
          $('#tab-desc-' + id).attr('class', 'ui bottom attached tab segment active');
          $('#review-tab-' + id).attr('class', 'item');
          $('#tab-review-' + id).attr('class', 'ui bottom attached tab segment');
          $('#map-tab-' + id).attr('class', 'item');
          $('#tab-map-' + id).attr('class', 'ui bottom attached tab segment');
          $('#photo-tab-' + id).attr('class', 'item');
          $('#tab-photo-' + id).attr('class', 'ui bottom attached tab segment');
        }
      }, {
        key: "ReviewsTab",
        value: function ReviewsTab(id) {
          $('#room-tab-' + id).attr('class', 'item');
          $('#tab-room-' + id).attr('class', 'ui bottom attached tab segment');
          $('#desc-tab-' + id).attr('class', 'item');
          $('#tab-desc-' + id).attr('class', 'ui bottom attached tab segment');
          $('#review-tab-' + id).attr('class', 'item active');
          $('#tab-review-' + id).attr('class', 'ui bottom attached tab segment active');
          $('#map-tab-' + id).attr('class', 'item');
          $('#tab-map-' + id).attr('class', 'ui bottom attached tab segment');
          $('#photo-tab-' + id).attr('class', 'item');
          $('#tab-photo-' + id).attr('class', 'ui bottom attached tab segment');
        }
      }, {
        key: "MapsTab",
        value: function MapsTab(id) {
          $('#room-tab-' + id).attr('class', 'item');
          $('#tab-room-' + id).attr('class', 'ui bottom attached tab segment');
          $('#desc-tab-' + id).attr('class', 'item');
          $('#tab-desc-' + id).attr('class', 'ui bottom attached tab segment');
          $('#review-tab-' + id).attr('class', 'item');
          $('#tab-review-' + id).attr('class', 'ui bottom attached tab segment');
          $('#map-tab-' + id).attr('class', 'item active');
          $('#tab-map-' + id).attr('class', 'ui bottom attached tab segment active');
          $('#photo-tab-' + id).attr('class', 'item');
          $('#tab-photo-' + id).attr('class', 'ui bottom attached tab segment');
        }
      }, {
        key: "PhotosTab",
        value: function PhotosTab(id) {
          $('#room-tab-' + id).attr('class', 'item');
          $('#tab-room-' + id).attr('class', 'ui bottom attached tab segment');
          $('#desc-tab-' + id).attr('class', 'item');
          $('#tab-desc-' + id).attr('class', 'ui bottom attached tab segment');
          $('#review-tab-' + id).attr('class', 'item');
          $('#tab-review-' + id).attr('class', 'ui bottom attached tab segment');
          $('#map-tab-' + id).attr('class', 'item');
          $('#tab-map-' + id).attr('class', 'ui bottom attached tab segment');
          $('#photo-tab-' + id).attr('class', 'item active');
          $('#tab-photo-' + id).attr('class', 'ui bottom attached tab segment active');
        } //adding filters

      }, {
        key: "priceFilter",
        value: function priceFilter(event) {
          if (event.type == 'click') {
            if (this.lhPrice.toString() == '') {
              this.lhPrice = 'LH';
            } else if (this.lhPrice.toString() == 'LH') {
              this.lhPrice = 'HL';
            } else {
              this.lhPrice = 'LH';
            }
          }
        } //add ratings

      }, {
        key: "selectRatings",
        value: function selectRatings() {
          if (this.ratingAll) {
            for (var i = 0; i <= 5; i++) {
              this.ratings[i].selected = false;
            }

            this.ratingAll = false;
          } else {
            for (var _i2 = 0; _i2 <= 5; _i2++) {
              this.ratings[_i2].selected = true;
            }

            this.ratingAll = true;
          }

          this.ratings.forEach(function (rating) {
            console.log(rating);
          });
        }
      }, {
        key: "rangeFilter",
        value: function rangeFilter() {
          this.minPrice = 0, this.maxPrice = 0;
        } //set rating value

      }, {
        key: "setRating",
        value: function setRating(id) {
          this.ratings[id].selected = !this.ratings[id].selected;
          console.log("ratings", this.ratings[id]);
        }
      }]);

      return HotelsSearchResultsComponent;
    }();

    HotelsSearchResultsComponent.ctorParameters = function () {
      return [{
        type: _shared_services_hotels_service__WEBPACK_IMPORTED_MODULE_2__["HotelService"]
      }, {
        type: _modal__WEBPACK_IMPORTED_MODULE_3__["ModalService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HotelsSearchResultsComponent.prototype, "searchCriteria", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HotelsSearchResultsComponent.prototype, "hotelList", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], HotelsSearchResultsComponent.prototype, "isOpened", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], HotelsSearchResultsComponent.prototype, "blockedRoom", void 0);
    HotelsSearchResultsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hotels-search-results',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./hotels-search-results.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/search/hotels/hotels-search-results/hotels-search-results.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./hotels-search-results.component.scss */
      "./src/app/layout/search/hotels/hotels-search-results/hotels-search-results.component.scss")).default]
    })], HotelsSearchResultsComponent);
    /***/
  },

  /***/
  "./src/app/layout/search/hotels/hotels.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/layout/search/hotels/hotels.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSearchHotelsHotelsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hotels.card-wrapper {\n  height: auto;\n  padding: 0 24px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.hotels.card-wrapper .hotels_title {\n  margin: 0;\n  padding: 0 0 24px 0px;\n  font-style: normal;\n  font-weight: 700 !important;\n  font-size: 20px;\n  line-height: 23px;\n  color: #181B20;\n}\n.hotels.card-wrapper .ui.attached.menu {\n  max-width: calc(100% - 18px);\n}\n.hotels.card-wrapper .ui.tab.segment {\n  background: none;\n  border: none;\n  box-shadow: none;\n  padding: 0px 14px;\n}\n.hotels.card-wrapper .hotel-grid {\n  padding-left: 0px;\n}\n.hotels.card-wrapper .hotel-search-block {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 6px rgba(6, 40, 98, 0.1);\n  border-radius: 10px;\n  margin: 0px;\n  padding: 24px;\n}\n.hotels.card-wrapper label {\n  line-height: 13px;\n  padding-bottom: 13px;\n}\n.hotels.card-wrapper label ~ div {\n  margin-top: 12px;\n}\n.hotels.card-wrapper .ui.icon i.icon img {\n  margin-top: 11px;\n}\n.hotels.card-wrapper .add-block {\n  display: inline-block;\n  margin-left: 12px;\n  border: 1px solid rgba(6, 40, 98, 0.1);\n  box-sizing: border-box;\n  border-radius: 7.24448px;\n  padding: 0px 2px;\n}\n.hotels.card-wrapper .add-block input {\n  border: none !important;\n  border-radius: 0px;\n  padding: 8px 13px;\n  width: 45px;\n}\n.hotels.card-wrapper .add-block a {\n  width: 45px;\n  padding: 9px 18px;\n  font-size: 18px;\n  border-left: 1px solid rgba(6, 40, 98, 0.1);\n}\n.hotels.card-wrapper .room-detail-block {\n  border: 1px solid #DADCE0;\n  box-sizing: border-box;\n  border-radius: 10px;\n  padding: 12px;\n}\n.hotels.card-wrapper .room-detail-block label.head {\n  text-transform: uppercase;\n  font-weight: bold;\n}\n.hotels.card-wrapper .room-detail-block label.head span {\n  text-transform: capitalize;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 13px;\n  color: #437ADA;\n  float: right;\n}\n.hotels.card-wrapper .room-detail-block label.head ~ div {\n  margin-top: 0px;\n}\n.hotels.card-wrapper .select {\n  min-width: auto;\n  display: block;\n  white-space: nowrap;\n}\n.hotels.card-wrapper .star-rating-block .rating-list-block .ui.checkbox {\n  margin-right: 32px;\n}\n.hotels.card-wrapper .star-rating-block .rating-list-block .ui.checkbox label:before {\n  border-radius: 50%;\n  top: -2px;\n}\n.hotels.card-wrapper .star-rating-block .rating-list-block .ui.checkbox label:after {\n  font-size: 12px;\n  top: 1px;\n}\n.hotels.card-wrapper .star-rating-block .rating-list-block .ui.checkbox input {\n  top: -2px;\n}\n.hotels.card-wrapper .star-rating-block .rating-list-block .ui.checkbox input:checked ~ label {\n  color: #3867b1 !important;\n}\n.hotels.card-wrapper .star-rating-block .rating-list-block .ui.checkbox input:checked ~ label:before {\n  border: 1px solid #3867b1;\n}\n.hotels.card-wrapper .star-rating-block .rating-list-block .ui.checkbox input:checked ~ label:after {\n  color: #3867b1;\n}\n.hotels.card-wrapper .search-list-block .list-label {\n  font-style: normal;\n  font-weight: 700 !important;\n  font-size: 12px;\n  line-height: 14px;\n  text-transform: uppercase;\n  color: rgba(24, 27, 32, 0.9) !important;\n  position: relative;\n  left: -12px;\n}\n.hotels.card-wrapper .search-list-block .list-wrapper {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 6px rgba(6, 40, 98, 0.1);\n  border-radius: 10px;\n  padding: 16px;\n}\n.hotels.card-wrapper .search-list-block .list-wrapper .list {\n  background: #FFFFFF;\n  border: 1px solid rgba(6, 40, 98, 0.1);\n  box-sizing: border-box;\n  border-radius: 4px;\n}\n.hotels.card-wrapper .search-list-block .list-wrapper .list p:first-child {\n  font-size: 12px;\n  line-height: 14px;\n  color: rgba(24, 27, 32, 0.9);\n  padding: 12px 14px;\n}\n.hotels.card-wrapper .search-list-block .list-wrapper .list p:first-child span {\n  font-weight: bold;\n}\n.hotels.card-wrapper .search-list-block .list-wrapper .list p:first-child span.dest {\n  text-transform: uppercase;\n}\n.hotels.card-wrapper .search-list-block .list-wrapper .list p:first-child span.date {\n  text-transform: capitalize;\n}\n.hotels.card-wrapper .search-list-block .list-wrapper .list .dest {\n  text-transform: uppercase;\n}\n.hotels.card-wrapper .search-list-block .list-wrapper .list p:last-child {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 12px;\n  color: rgba(24, 27, 32, 0.6);\n  padding: 6px 14px 12px;\n}\n.hotels.card-wrapper .search-list-block .list-wrapper .list p:last-child span {\n  color: rgba(24, 27, 32, 0.9);\n}\n.hotels.card-wrapper .search-list-block .list-wrapper .list:not(:last-child) {\n  margin-bottom: 10px;\n}\n.hotels.card-wrapper .bookings_btn-panel {\n  text-align: right;\n}\n.hotels.card-wrapper .text-danger {\n  color: #d81313;\n}\n@media (max-width: 1280px) {\n  .ui.grid > .column:not(.row.list-wrapper), .ui.grid > .row.list-wrapper > .column.list {\n    padding: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NlYXJjaC9ob3RlbHMvRTpcXEJlbGFsXFxwcm9qZWN0c1xcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxzZWFyY2hcXGhvdGVsc1xcaG90ZWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvc2VhcmNoL2hvdGVscy9ob3RlbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0FKO0FEQ0k7RUFDSSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NSO0FEQ0k7RUFDSSw0QkFBQTtBQ0NSO0FEQ0k7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ1I7QURDSTtFQUNJLGlCQUFBO0FDQ1I7QURDSTtFQUNJLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ1I7QURDSTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUNDUjtBRENJO0VBQ0ksZ0JBQUE7QUNDUjtBREdZO0VBQ0ksZ0JBQUE7QUNEaEI7QURLSTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0hSO0FESVE7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDRlo7QURJUTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwyQ0FBQTtBQ0ZaO0FES0k7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDSFI7QURJUTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUNGWjtBREdZO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNEaEI7QURHWTtFQUNJLGVBQUE7QUNEaEI7QURLSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNIUjtBRE9ZO0VBQ0ksa0JBQUE7QUNMaEI7QURPb0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNMeEI7QURPb0I7RUFDSSxlQUFBO0VBQ0EsUUFBQTtBQ0x4QjtBRFFnQjtFQUNJLFNBQUE7QUNOcEI7QURRZ0I7RUFDSSx5QkFBQTtBQ05wQjtBRFNvQjtFQUNJLHlCQUFBO0FDUHhCO0FEU29CO0VBQ0ksY0FBQTtBQ1B4QjtBRGNRO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNaWjtBRGNRO0VBQ0ksbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ1paO0FEYVk7RUFDSSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ1hoQjtBRFlnQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNWcEI7QURXb0I7RUFDSSxpQkFBQTtBQ1R4QjtBRFdvQjtFQUNJLHlCQUFBO0FDVHhCO0FEV29CO0VBQ0ksMEJBQUE7QUNUeEI7QURZZ0I7RUFDSSx5QkFBQTtBQ1ZwQjtBRFlnQjtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDVnBCO0FEV29CO0VBQ0ksNEJBQUE7QUNUeEI7QURZZ0I7RUFDSSxtQkFBQTtBQ1ZwQjtBRGVJO0VBQ0ksaUJBQUE7QUNiUjtBRGVJO0VBQ0ksY0FBQTtBQ2JSO0FEZ0JBO0VBQ0k7SUFDSSxZQUFBO0VDYk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZWFyY2gvaG90ZWxzL2hvdGVscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaG90ZWxzLmNhcmQtd3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC5ob3RlbHNfdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMjRweCAwcHg7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICB9XHJcbiAgICAudWkuYXR0YWNoZWQubWVudSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxOHB4KTtcclxuICAgIH1cclxuICAgIC51aS50YWIuc2VnbWVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTRweDtcclxuICAgIH1cclxuICAgIC5ob3RlbC1ncmlkIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgIC5ob3RlbC1zZWFyY2gtYmxvY2sge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSg2LCA0MCwgOTgsIDAuMSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgfVxyXG4gICAgbGFiZWx+ZGl2ICB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIH1cclxuICAgIC51aS5pY29uIHtcclxuICAgICAgICBpLmljb24ge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hZGQtYmxvY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYsIDQwLCA5OCwgMC4xKTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDcuMjQ0NDhweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMnB4O1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDEzcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDlweCAxOHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSg2LCA0MCwgOTgsIDAuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJvb20tZGV0YWlsLWJsb2NrIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjREFEQ0UwO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgIGxhYmVsLmhlYWQge1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDM3QURBO1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZ+ZGl2IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZWxlY3Qge1xyXG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG4gICAgLnN0YXItcmF0aW5nLWJsb2NrIHtcclxuICAgICAgICAucmF0aW5nLWxpc3QtYmxvY2sge1xyXG4gICAgICAgICAgICAudWkuY2hlY2tib3gge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0ycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC0ycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzg2N2IxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzM4NjdiMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzg2N2IxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZWFyY2gtbGlzdC1ibG9jayB7XHJcbiAgICAgICAgLmxpc3QtbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjQsIDI3LCAzMiwgMC45KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0xMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlzdC13cmFwcGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSg2LCA0MCwgOTgsIDAuMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICAgIC5saXN0IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYsIDQwLCA5OCwgMC4xKTtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBwOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjQsIDI3LCAzMiwgMC45KTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzcGFuLmRlc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzcGFuLmRhdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGVzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHA6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI0LCAyNywgMzIsIDAuNik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDE0cHggMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjQsIDI3LCAzMiwgMC45KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC50ZXh0LWRhbmdlcntcclxuICAgICAgICBjb2xvcjogI2Q4MTMxMztcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAudWkuZ3JpZD4uY29sdW1uOm5vdCgucm93Lmxpc3Qtd3JhcHBlciksIC51aS5ncmlkPi5yb3cubGlzdC13cmFwcGVyPi5jb2x1bW4ubGlzdCB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG59XHJcbiIsIi5ob3RlbHMuY2FyZC13cmFwcGVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaG90ZWxzLmNhcmQtd3JhcHBlciAuaG90ZWxzX3RpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMjRweCAwcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBjb2xvcjogIzE4MUIyMDtcbn1cbi5ob3RlbHMuY2FyZC13cmFwcGVyIC51aS5hdHRhY2hlZC5tZW51IHtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxOHB4KTtcbn1cbi5ob3RlbHMuY2FyZC13cmFwcGVyIC51aS50YWIuc2VnbWVudCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZzogMHB4IDE0cHg7XG59XG4uaG90ZWxzLmNhcmQtd3JhcHBlciAuaG90ZWwtZ3JpZCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuLmhvdGVscy5jYXJkLXdyYXBwZXIgLmhvdGVsLXNlYXJjaC1ibG9jayB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoNiwgNDAsIDk4LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMjRweDtcbn1cbi5ob3RlbHMuY2FyZC13cmFwcGVyIGxhYmVsIHtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xufVxuLmhvdGVscy5jYXJkLXdyYXBwZXIgbGFiZWwgfiBkaXYge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLmhvdGVscy5jYXJkLXdyYXBwZXIgLnVpLmljb24gaS5pY29uIGltZyB7XG4gIG1hcmdpbi10b3A6IDExcHg7XG59XG4uaG90ZWxzLmNhcmQtd3JhcHBlciAuYWRkLWJsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2LCA0MCwgOTgsIDAuMSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDcuMjQ0NDhweDtcbiAgcGFkZGluZzogMHB4IDJweDtcbn1cbi5ob3RlbHMuY2FyZC13cmFwcGVyIC5hZGQtYmxvY2sgaW5wdXQge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBwYWRkaW5nOiA4cHggMTNweDtcbiAgd2lkdGg6IDQ1cHg7XG59XG4uaG90ZWxzLmNhcmQtd3JhcHBlciAuYWRkLWJsb2NrIGEge1xuICB3aWR0aDogNDVweDtcbiAgcGFkZGluZzogOXB4IDE4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDYsIDQwLCA5OCwgMC4xKTtcbn1cbi5ob3RlbHMuY2FyZC13cmFwcGVyIC5yb29tLWRldGFpbC1ibG9jayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEQURDRTA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEycHg7XG59XG4uaG90ZWxzLmNhcmQtd3JhcHBlciAucm9vbS1kZXRhaWwtYmxvY2sgbGFiZWwuaGVhZCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmhvdGVscy5jYXJkLXdyYXBwZXIgLnJvb20tZGV0YWlsLWJsb2NrIGxhYmVsLmhlYWQgc3BhbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGNvbG9yOiAjNDM3QURBO1xuICBmbG9hdDogcmlnaHQ7XG59XG4uaG90ZWxzLmNhcmQtd3JhcHBlciAucm9vbS1kZXRhaWwtYmxvY2sgbGFiZWwuaGVhZCB+IGRpdiB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5ob3RlbHMuY2FyZC13cmFwcGVyIC5zZWxlY3Qge1xuICBtaW4td2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmhvdGVscy5jYXJkLXdyYXBwZXIgLnN0YXItcmF0aW5nLWJsb2NrIC5yYXRpbmctbGlzdC1ibG9jayAudWkuY2hlY2tib3gge1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG59XG4uaG90ZWxzLmNhcmQtd3JhcHBlciAuc3Rhci1yYXRpbmctYmxvY2sgLnJhdGluZy1saXN0LWJsb2NrIC51aS5jaGVja2JveCBsYWJlbDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRvcDogLTJweDtcbn1cbi5ob3RlbHMuY2FyZC13cmFwcGVyIC5zdGFyLXJhdGluZy1ibG9jayAucmF0aW5nLWxpc3QtYmxvY2sgLnVpLmNoZWNrYm94IGxhYmVsOmFmdGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0b3A6IDFweDtcbn1cbi5ob3RlbHMuY2FyZC13cmFwcGVyIC5zdGFyLXJhdGluZy1ibG9jayAucmF0aW5nLWxpc3QtYmxvY2sgLnVpLmNoZWNrYm94IGlucHV0IHtcbiAgdG9wOiAtMnB4O1xufVxuLmhvdGVscy5jYXJkLXdyYXBwZXIgLnN0YXItcmF0aW5nLWJsb2NrIC5yYXRpbmctbGlzdC1ibG9jayAudWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcbiAgY29sb3I6ICMzODY3YjEgIWltcG9ydGFudDtcbn1cbi5ob3RlbHMuY2FyZC13cmFwcGVyIC5zdGFyLXJhdGluZy1ibG9jayAucmF0aW5nLWxpc3QtYmxvY2sgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpiZWZvcmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzg2N2IxO1xufVxuLmhvdGVscy5jYXJkLXdyYXBwZXIgLnN0YXItcmF0aW5nLWJsb2NrIC5yYXRpbmctbGlzdC1ibG9jayAudWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmFmdGVyIHtcbiAgY29sb3I6ICMzODY3YjE7XG59XG4uaG90ZWxzLmNhcmQtd3JhcHBlciAuc2VhcmNoLWxpc3QtYmxvY2sgLmxpc3QtbGFiZWwge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHJnYmEoMjQsIDI3LCAzMiwgMC45KSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xMnB4O1xufVxuLmhvdGVscy5jYXJkLXdyYXBwZXIgLnNlYXJjaC1saXN0LWJsb2NrIC5saXN0LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDYsIDQwLCA5OCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5ob3RlbHMuY2FyZC13cmFwcGVyIC5zZWFyY2gtbGlzdC1ibG9jayAubGlzdC13cmFwcGVyIC5saXN0IHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2LCA0MCwgOTgsIDAuMSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5ob3RlbHMuY2FyZC13cmFwcGVyIC5zZWFyY2gtbGlzdC1ibG9jayAubGlzdC13cmFwcGVyIC5saXN0IHA6Zmlyc3QtY2hpbGQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBjb2xvcjogcmdiYSgyNCwgMjcsIDMyLCAwLjkpO1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG59XG4uaG90ZWxzLmNhcmQtd3JhcHBlciAuc2VhcmNoLWxpc3QtYmxvY2sgLmxpc3Qtd3JhcHBlciAubGlzdCBwOmZpcnN0LWNoaWxkIHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ob3RlbHMuY2FyZC13cmFwcGVyIC5zZWFyY2gtbGlzdC1ibG9jayAubGlzdC13cmFwcGVyIC5saXN0IHA6Zmlyc3QtY2hpbGQgc3Bhbi5kZXN0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5ob3RlbHMuY2FyZC13cmFwcGVyIC5zZWFyY2gtbGlzdC1ibG9jayAubGlzdC13cmFwcGVyIC5saXN0IHA6Zmlyc3QtY2hpbGQgc3Bhbi5kYXRlIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uaG90ZWxzLmNhcmQtd3JhcHBlciAuc2VhcmNoLWxpc3QtYmxvY2sgLmxpc3Qtd3JhcHBlciAubGlzdCAuZGVzdCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uaG90ZWxzLmNhcmQtd3JhcHBlciAuc2VhcmNoLWxpc3QtYmxvY2sgLmxpc3Qtd3JhcHBlciAubGlzdCBwOmxhc3QtY2hpbGQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIGNvbG9yOiByZ2JhKDI0LCAyNywgMzIsIDAuNik7XG4gIHBhZGRpbmc6IDZweCAxNHB4IDEycHg7XG59XG4uaG90ZWxzLmNhcmQtd3JhcHBlciAuc2VhcmNoLWxpc3QtYmxvY2sgLmxpc3Qtd3JhcHBlciAubGlzdCBwOmxhc3QtY2hpbGQgc3BhbiB7XG4gIGNvbG9yOiByZ2JhKDI0LCAyNywgMzIsIDAuOSk7XG59XG4uaG90ZWxzLmNhcmQtd3JhcHBlciAuc2VhcmNoLWxpc3QtYmxvY2sgLmxpc3Qtd3JhcHBlciAubGlzdDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5ob3RlbHMuY2FyZC13cmFwcGVyIC5ib29raW5nc19idG4tcGFuZWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5ob3RlbHMuY2FyZC13cmFwcGVyIC50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiAjZDgxMzEzO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC51aS5ncmlkID4gLmNvbHVtbjpub3QoLnJvdy5saXN0LXdyYXBwZXIpLCAudWkuZ3JpZCA+IC5yb3cubGlzdC13cmFwcGVyID4gLmNvbHVtbi5saXN0IHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/search/hotels/hotels.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/layout/search/hotels/hotels.component.ts ***!
    \**********************************************************/

  /*! exports provided: HotelsComponent */

  /***/
  function srcAppLayoutSearchHotelsHotelsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotelsComponent", function () {
      return HotelsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _shared_services_hotels_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../shared/services/hotels.service */
    "./src/app/shared/services/hotels.service.ts");
    /* harmony import */


    var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/common.service */
    "./src/app/shared/services/common.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _cities_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./cities.json */
    "./src/app/layout/search/hotels/cities.json");

    var _cities_json__WEBPACK_IMPORTED_MODULE_8___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ./cities.json */
    "./src/app/layout/search/hotels/cities.json", 1);

    var HotelsComponent =
    /*#__PURE__*/
    function () {
      function HotelsComponent(HotelService, fb, router, CommonService, toastr, activatedRoute) {
        _classCallCheck(this, HotelsComponent);

        this.HotelService = HotelService;
        this.fb = fb;
        this.router = router;
        this.CommonService = CommonService;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.searchArray = [];
        this.screenTitle = 'Hotel Search';
        this.countries = [];
        this.cities = [];
        this.total_rooms = 0;
        this.hotelList = [];
        this._globals = [];
        this.searchCriteria = [];
        this.searchedHotel = [];
        this.showSearchResult = false; //hotel result and form hide and show

        this.showForm = true;
        this.showResult = false;
        this.selectedCity = null;
        this.submitted = false; //loading...

        this.searchLoader = false;
        this.allCities = _cities_json__WEBPACK_IMPORTED_MODULE_8__; //rooms hide and show

        this.room_1_show = true;
        this.room_2_show = false;
        this.room_3_show = false;
        this.room_4_show = false;
        this.room_5_show = false;
      }

      _createClass(HotelsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //getting detail from the user
          this.savedSearches = this.getLocalStorageSearches();
          this.hotelSearchForm = this.fb.group({
            room_one_adults: ["0"],
            room_two_adults: ["0"],
            room_one_children: ["0"],
            r_one_ch_one: ["0"],
            r_one_ch_two: ["0"],
            r_one_ch_three: ["0"],
            r_one_ch_four: ["0"],
            r_one_ch_five: ["0"],
            room_two_children: ["0"],
            r_two_ch_one: ["0"],
            r_two_ch_two: ["0"],
            r_two_ch_three: ["0"],
            r_two_ch_four: ["0"],
            r_two_ch_five: ["0"],
            no_of_rooms: [''],
            extra_bed: ['0'],
            check_in: [''],
            check_out: [''],
            nights: [''],
            city: [''],
            city_code: [''],
            country: [""],
            currency: ["INR"],
            nationality: [""],
            resident: [""],
            markupvalue: [''],
            markupBy: [null],
            hotel_name: [""],
            behal_of: [""],
            client_list: [""]
          });
          this.getCountries();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.loadConfig();
          this.checkInDate();
          this.checkOutDate();
          $(document).ready(function () {
            $('.menu .item').tab();
          });
        }
      }, {
        key: "loadConfig",
        value: function loadConfig() {
          var scope = this;
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverURL;
          $(document).ready(function () {
            // $('.ui.dropdownCity').dropdown({ placeholder: "Choose Destination"});
            this._globals = localStorage.getItem('_globals');
            var token = JSON.parse(this._globals).token;
            $('.ui.dropdownCity').dropdown({
              type: 'category',
              minCharacters: 2,
              maxCharacters: 5,
              responseAsync: true,
              apiSettings: {
                url: url + '/api/hotels/hotel-get-city/{query}',
                cache: false,
                beforeXHR: function beforeXHR(xhr) {
                  xhr.setRequestHeader('Authorization', token);
                  return xhr;
                },
                onResponse: function onResponse(response) {
                  var result = {
                    success: true,
                    results: []
                  };
                  $.each(response.result, function (index, item) {
                    scope.cities.push(item);
                    result['results'].push({
                      name: item.label,
                      value: item.city_id
                    });
                  });
                  this.cities = scope.cities;
                  return result;
                }
              }
            });
          });
        } //for datepickers

      }, {
        key: "checkInDate",
        value: function checkInDate() {
          var scope = this;
          $(function () {
            $('input[name="check_in"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.hotelSearchForm.patchValue({
                'check_in': moment(start).format('YYYY-MM-DD')
              });
              var inDate = new Date(scope.hotelSearchForm.controls.check_in.value);
              var check_in_date = inDate.getDate() + "/" + (inDate.getMonth() + 1) + "/" + inDate.getFullYear();
              scope.hotelSearchForm.patchValue({
                'nights': (new Date(scope.hotelSearchForm.controls.check_out.value).getTime() - new Date(scope.hotelSearchForm.controls.check_in.value).getTime()) / (1000 * 3600 * 24)
              });
            });
          });
        } //for datepickers

      }, {
        key: "checkOutDate",
        value: function checkOutDate() {
          var scope = this;
          $(function () {
            $('input[name="check_out"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.hotelSearchForm.patchValue({
                'check_out': moment(start).format('YYYY-MM-DD')
              });
              scope.hotelSearchForm.patchValue({
                'nights': (new Date(scope.hotelSearchForm.controls.check_out.value).getTime() - new Date(scope.hotelSearchForm.controls.check_in.value).getTime()) / (1000 * 3600 * 24)
              });
            });
          });
        }
      }, {
        key: "onChangeCity",
        value: function onChangeCity(city_id) {
          this.cities = this.getCityById(city_id); // console.log("==================== city id", this.cities)
        } // convenience getter for easy access to form fields

      }, {
        key: "total_adults",
        value: function total_adults() {
          var adults = this.hotelSearchForm.controls.room_one_adults.value;

          if (this.hotelSearchForm.controls.room_two_adults.value != 0) {
            adults += "," + this.hotelSearchForm.controls.room_two_adults.value;
          }

          return adults;
        }
      }, {
        key: "total_children",
        value: function total_children() {
          var children = "";

          if (this.hotelSearchForm.controls.room_one_children.value > 0) {
            children += this.hotelSearchForm.controls.room_one_children.value;
          }

          if (this.hotelSearchForm.controls.room_two_children.value > 0) {
            children += "," + this.hotelSearchForm.controls.room_two_children.value;
          }

          return children;
        }
      }, {
        key: "get_children_age",
        value: function get_children_age() {
          var child_age = "";

          if (this.hotelSearchForm.controls.room_one_children.value > 0) {
            if (this.hotelSearchForm.controls.r_one_ch_one.value > 0) {
              child_age = "ca1=" + this.hotelSearchForm.controls.r_one_ch_one.value;
            }

            if (this.hotelSearchForm.controls.r_one_ch_two.value > 0) {
              child_age += "&amp;ca1=" + this.hotelSearchForm.controls.r_one_ch_two.value;
            }

            if (this.hotelSearchForm.controls.r_one_ch_three.value > 0) {
              child_age += "&amp;ca1=" + this.hotelSearchForm.controls.r_one_ch_three.value;
            }

            if (this.hotelSearchForm.controls.r_one_ch_four.value > 0) {
              child_age += "&amp;ca1=" + this.hotelSearchForm.controls.r_one_ch_four.value;
            }

            if (this.hotelSearchForm.controls.r_one_ch_five.value > 0) {
              child_age += "&amp;ca1=" + this.hotelSearchForm.controls.r_one_ch_five.value;
            }
          } //second rooom


          if (this.hotelSearchForm.controls.room_two_children.value > 0) {
            if (this.hotelSearchForm.controls.r_two_ch_one.value > 0) {
              child_age += "&amp;ca2=" + this.hotelSearchForm.controls.r_two_ch_one.value;
            }

            if (this.hotelSearchForm.controls.r_two_ch_two.value > 0) {
              child_age += "&amp;ca2=" + this.hotelSearchForm.controls.r_two_ch_two.value;
            }

            if (this.hotelSearchForm.controls.r_two_ch_three.value > 0) {
              child_age += "&amp;ca2=" + this.hotelSearchForm.controls.r_two_ch_three.value;
            }

            if (this.hotelSearchForm.controls.r_two_ch_four.value > 0) {
              child_age += "&amp;ca2=" + this.hotelSearchForm.controls.r_two_ch_four.value;
            }

            if (this.hotelSearchForm.controls.r_two_ch_five.value > 0) {
              child_age += "&amp;ca2=" + this.hotelSearchForm.controls.r_two_ch_five.value;
            }
          }

          return child_age;
          console.log("child_age", child_age);
        }
      }, {
        key: "searchHandler",
        value: function searchHandler() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this86 = this;

            var adults_per_room, children_per_room, child_age, city_id, city;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    adults_per_room = this.total_adults();
                    children_per_room = this.total_children();
                    child_age = this.get_children_age(); //all cities form json
                    //  this.cities = this.allCities;

                    this.searchLoader = true; //city info

                    city_id = this.hotelSearchForm.controls.city; // console.log("==================== city id",  this.cities);

                    city = this.cities.filter(function (city) {
                      if (city_id.value == city.city_id) {
                        return city;
                      }
                    }); //  console.log("city", city);
                    //replacing values in request  

                    this.hotelSearchForm.value.country = city[0].flag.toUpperCase();
                    this.hotelSearchForm.value.city = city[0].label;
                    this.hotelSearchForm.value.city_code = city[0].city_id;
                    this.searchObject = {
                      "adults_per_room": adults_per_room,
                      "children_per_room": children_per_room,
                      "no_of_rooms": this.hotelSearchForm.controls.no_of_rooms.value,
                      "child_age": child_age,
                      "extra_bed": 0,
                      "check_in": this.hotelSearchForm.controls.check_in.value,
                      "check_out": this.hotelSearchForm.controls.check_out.value,
                      "nights": this.number_of_nights,
                      "city": city[0].label,
                      "city_code": this.hotelSearchForm.controls.city.value,
                      "country": this.hotelSearchForm.value.country,
                      "currency": "INR",
                      "markupBy": this.hotelSearchForm.controls.markupBy.value,
                      "nationality": "AE",
                      "resident": "AE"
                    }; // console.log("search hotel", this.searchObject);
                    //adding data to local storage

                    this.localStorageSearches(this.searchObject); // this.hotelSearchForm.value.nights = this.number_of_nights;
                    // console.log("form Values", this.hotelSearchForm.value);

                    this.HotelService.search(this.searchObject).subscribe(function (results) {
                      //console.log("result", results);
                      if (results) {
                        _this86.searchLoader = false;
                        _this86.searchCriteria = results.result.search_criteria;
                        _this86.hotelList = results.result.hotel; // console.log("hotels:::", this.hotelList );

                        if (_this86.hotelList != null) {
                          // this.toastr.success(`${results.message}`, ``, {
                          //   timeOut: 2000,
                          //   progressBar: false,
                          //   positionClass: 'toast-bottom-right'
                          // });
                          _this86.searchLoader = false;
                          _this86.showSearchResult = true;
                          _this86.showForm = false; //adding key for filters

                          _this86.hotelList.hasLowestPrice = true;
                          _this86.hotelList = Array.isArray(_this86.hotelList) ? _this86.hotelList : Array(_this86.hotelList); //console.log("hotelList", this.hotelList);
                          // this.router.navigate(['results'], { relativeTo: this.activatedRoute });
                        } else {
                          _this86.getCountries();

                          _this86.toastr.error("".concat(results.message), "", {
                            timeOut: 2000,
                            progressBar: false,
                            positionClass: 'toast-bottom-right'
                          });
                        }
                      } //this.router.navigateByUrl('pages');

                    });
                    return _context9.abrupt("return", false);

                  case 13:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          var _this87 = this;

          this.CommonService.getCountryList().subscribe(function (result) {
            _this87.countries = result.countries; //console.log("countries",result.countries);
          });
        }
      }, {
        key: "getCities",
        value: function getCities() {
          var city = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var term = {
            "city_name": city
          };
          this.HotelService.getCities(term).subscribe(function (result) {});
        }
      }, {
        key: "getCityById",
        value: function getCityById() {
          var city = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          this.HotelService.getCityById(city).subscribe(function (result) {});
        }
      }, {
        key: "getNights",
        value: function getNights() {
          var checkInDate = new Date(this.hotelSearchForm.controls.check_in.value);
          var checkOutDate = new Date(this.hotelSearchForm.controls.check_out.value);
          var diff_in_time = checkOutDate.getTime() - checkInDate.getTime();
          var diff_in_days = diff_in_time / (1000 * 3600 * 24);
          this.number_of_nights = isNaN(diff_in_days) || diff_in_days < 0 ? 0 : diff_in_days;
        }
      }, {
        key: "decreaseRoom",
        value: function decreaseRoom() {
          if (this.total_rooms > 0) {
            this.total_rooms--;
          }

          this.showRoomsDefault();

          for (var i = 2; i <= this.total_rooms; i++) {
            if (i == 2) {
              this.room_2_show = true;
            }

            if (i == 3) {
              this.room_3_show = true;
            }

            if (i == 4) {
              this.room_4_show = true;
            }

            if (i == 5) {
              this.room_5_show = true;
            }
          }
        }
      }, {
        key: "increaseRoom",
        value: function increaseRoom() {
          this.total_rooms++;

          for (var i = 2; i <= this.total_rooms; i++) {
            if (i == 2) {
              this.room_2_show = true;
            }

            if (i == 3) {
              this.room_3_show = true;
            }

            if (i == 4) {
              this.room_4_show = true;
            }

            if (i == 5) {
              this.room_5_show = true;
            }
          }
        }
      }, {
        key: "showRoomsDefault",
        value: function showRoomsDefault() {
          this.room_2_show = false;
          this.room_3_show = false;
          this.room_4_show = false;
          this.room_5_show = false;
        } //add search in local storage

      }, {
        key: "localStorageSearches",
        value: function localStorageSearches(search) {
          if (this.savedSearches == null) {
            this.savedSearches = [];
          }

          this.savedSearches.push(search);
          localStorage.setItem("searchArray", JSON.stringify(this.savedSearches));
        }
      }, {
        key: "getLocalStorageSearches",
        value: function getLocalStorageSearches() {
          return JSON.parse(localStorage.getItem("searchArray"));
        }
      }, {
        key: "f",
        get: function get() {
          return this.hotelSearchForm.controls;
        }
      }]);

      return HotelsComponent;
    }();

    HotelsComponent.ctorParameters = function () {
      return [{
        type: _shared_services_hotels_service__WEBPACK_IMPORTED_MODULE_5__["HotelService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    HotelsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hotels',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./hotels.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/search/hotels/hotels.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./hotels.component.scss */
      "./src/app/layout/search/hotels/hotels.component.scss")).default]
    })], HotelsComponent);
    /***/
  },

  /***/
  "./src/app/layout/search/hotels/hotels.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/layout/search/hotels/hotels.module.ts ***!
    \*******************************************************/

  /*! exports provided: HotelsModule */

  /***/
  function srcAppLayoutSearchHotelsHotelsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotelsModule", function () {
      return HotelsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _hotels_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./hotels-routing.module */
    "./src/app/layout/search/hotels/hotels-routing.module.ts");
    /* harmony import */


    var _hotels_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./hotels.component */
    "./src/app/layout/search/hotels/hotels.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _hotels_search_results_hotels_search_results_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./hotels-search-results/hotels-search-results.component */
    "./src/app/layout/search/hotels/hotels-search-results/hotels-search-results.component.ts");
    /* harmony import */


    var src_app_shared_services_hotels_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/services/hotels.service */
    "./src/app/shared/services/hotels.service.ts");
    /* harmony import */


    var _panel_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./panel/panel.component */
    "./src/app/layout/search/hotels/panel/panel.component.ts");
    /* harmony import */


    var _modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../_modal */
    "./src/app/layout/_modal/index.ts");
    /* harmony import */


    var _hotel_passenger_details_hotel_passenger_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./hotel-passenger-details/hotel-passenger-details.component */
    "./src/app/layout/search/hotels/hotel-passenger-details/hotel-passenger-details.component.ts");
    /* harmony import */


    var _lowest_price_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./lowest-price.pipe */
    "./src/app/layout/search/hotels/lowest-price.pipe.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _search_by_name_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./search-by-name.pipe */
    "./src/app/layout/search/hotels/search-by-name.pipe.ts");
    /* harmony import */


    var _search_by_rating_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./search-by-rating.pipe */
    "./src/app/layout/search/hotels/search-by-rating.pipe.ts");
    /* harmony import */


    var _price_range_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./price-range.pipe */
    "./src/app/layout/search/hotels/price-range.pipe.ts");

    var HotelsModule = function HotelsModule() {
      _classCallCheck(this, HotelsModule);
    };

    HotelsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_hotels_component__WEBPACK_IMPORTED_MODULE_4__["HotelsComponent"], _hotels_search_results_hotels_search_results_component__WEBPACK_IMPORTED_MODULE_6__["HotelsSearchResultsComponent"], _panel_panel_component__WEBPACK_IMPORTED_MODULE_8__["PanelComponent"], _hotel_passenger_details_hotel_passenger_details_component__WEBPACK_IMPORTED_MODULE_10__["HotelPassengerDetailsComponent"], _lowest_price_pipe__WEBPACK_IMPORTED_MODULE_11__["LowestPricePipe"], _search_by_name_pipe__WEBPACK_IMPORTED_MODULE_13__["SearchByNamePipe"], _search_by_rating_pipe__WEBPACK_IMPORTED_MODULE_14__["SearchByRatingPipe"], _price_range_pipe__WEBPACK_IMPORTED_MODULE_15__["PriceRangePipe"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _hotels_routing_module__WEBPACK_IMPORTED_MODULE_3__["HotelsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyAkERo3BglD0unOdGavsTyVl9ZRakMIBB4'
      })],
      providers: [src_app_shared_services_hotels_service__WEBPACK_IMPORTED_MODULE_7__["HotelService"]]
    })], HotelsModule);
    /***/
  },

  /***/
  "./src/app/layout/search/hotels/lowest-price.pipe.ts":
  /*!***********************************************************!*\
    !*** ./src/app/layout/search/hotels/lowest-price.pipe.ts ***!
    \***********************************************************/

  /*! exports provided: LowestPricePipe */

  /***/
  function srcAppLayoutSearchHotelsLowestPricePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LowestPricePipe", function () {
      return LowestPricePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LowestPricePipe =
    /*#__PURE__*/
    function () {
      function LowestPricePipe() {
        _classCallCheck(this, LowestPricePipe);
      }

      _createClass(LowestPricePipe, [{
        key: "transform",
        value: function transform(hotelList, lhPrice) {
          // console.log(hotelList);
          console.log("lhPrice", lhPrice);

          if (!hotelList || !lhPrice) {
            return hotelList;
          }

          return hotelList.sort(function (a, b) {
            if (lhPrice == 'HL') {
              return Number(b.markup_price) - Number(a.markup_price);
            }

            if (lhPrice == 'LH') {
              return Number(a.markup_price) - Number(b.markup_price);
            }
          });
        }
      }]);

      return LowestPricePipe;
    }();

    LowestPricePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'lowestPrice'
    })], LowestPricePipe);
    /***/
  },

  /***/
  "./src/app/layout/search/hotels/panel/panel.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/layout/search/hotels/panel/panel.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSearchHotelsPanelPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".topnav {\n  overflow: hidden;\n  background-color: #f9f9f9;\n}\n\n.topnav a {\n  float: left;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n}\n\n.topnav a:hover {\n  background-color: #ddd;\n}\n\n.topnav a.active {\n  background-color: #4CAF50;\n  color: white;\n}\n\n.topnav-right {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NlYXJjaC9ob3RlbHMvcGFuZWwvRTpcXEJlbGFsXFxwcm9qZWN0c1xcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxzZWFyY2hcXGhvdGVsc1xccGFuZWxcXHBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvc2VhcmNoL2hvdGVscy9wYW5lbC9wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVFO0VBQ0Usc0JBQUE7QUNDSjs7QURHRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdFO0VBQ0UsWUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3NlYXJjaC9ob3RlbHMvcGFuZWwvcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wbmF2IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5OyAgXHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYgYSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiAjZjJmMmYyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgICBcclxufVxyXG4gIFxyXG4gIC50b3BuYXYgYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnRvcG5hdi1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfSIsIi50b3BuYXYge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuXG4udG9wbmF2IGEge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICNmMmYyZjI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLnRvcG5hdiBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLnRvcG5hdiBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRvcG5hdi1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/search/hotels/panel/panel.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/layout/search/hotels/panel/panel.component.ts ***!
    \***************************************************************/

  /*! exports provided: PanelComponent */

  /***/
  function srcAppLayoutSearchHotelsPanelPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelComponent", function () {
      return PanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PanelComponent =
    /*#__PURE__*/
    function () {
      function PanelComponent() {
        _classCallCheck(this, PanelComponent);

        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchingRoom = false;
        this.opened = true;
      }

      _createClass(PanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.title = this.hotel.hotel_name;
          this.panel_id = this.hotel.hotel_id;
        }
      }]);

      return PanelComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PanelComponent.prototype, "selected_panel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PanelComponent.prototype, "hotel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PanelComponent.prototype, "toggle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PanelComponent.prototype, "searchingRoom", void 0);
    PanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-panel',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/search/hotels/panel/panel.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./panel.component.scss */
      "./src/app/layout/search/hotels/panel/panel.component.scss")).default]
    })], PanelComponent);
    /***/
  },

  /***/
  "./src/app/layout/search/hotels/price-range.pipe.ts":
  /*!**********************************************************!*\
    !*** ./src/app/layout/search/hotels/price-range.pipe.ts ***!
    \**********************************************************/

  /*! exports provided: PriceRangePipe */

  /***/
  function srcAppLayoutSearchHotelsPriceRangePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PriceRangePipe", function () {
      return PriceRangePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PriceRangePipe =
    /*#__PURE__*/
    function () {
      function PriceRangePipe() {
        _classCallCheck(this, PriceRangePipe);
      }

      _createClass(PriceRangePipe, [{
        key: "transform",
        value: function transform(hotelList, minPrice, maxPrice) {
          if (!hotelList || !minPrice && !maxPrice) {
            return hotelList;
          }

          return hotelList.filter(function (hotel) {
            return Number(hotel.markup_price) > minPrice && Number(hotel.markup_price) < maxPrice;
          });
        }
      }]);

      return PriceRangePipe;
    }();

    PriceRangePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'priceRange'
    })], PriceRangePipe);
    /***/
  },

  /***/
  "./src/app/layout/search/hotels/search-by-name.pipe.ts":
  /*!*************************************************************!*\
    !*** ./src/app/layout/search/hotels/search-by-name.pipe.ts ***!
    \*************************************************************/

  /*! exports provided: SearchByNamePipe */

  /***/
  function srcAppLayoutSearchHotelsSearchByNamePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchByNamePipe", function () {
      return SearchByNamePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SearchByNamePipe =
    /*#__PURE__*/
    function () {
      function SearchByNamePipe() {
        _classCallCheck(this, SearchByNamePipe);
      }

      _createClass(SearchByNamePipe, [{
        key: "transform",
        value: function transform(hotelList, searchTerm) {
          if (!hotelList || !searchTerm) {
            return hotelList;
          }

          return hotelList.filter(function (hotel) {
            return hotel.hotel_name.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1;
          });
        }
      }]);

      return SearchByNamePipe;
    }();

    SearchByNamePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'searchByName'
    })], SearchByNamePipe);
    /***/
  },

  /***/
  "./src/app/layout/search/hotels/search-by-rating.pipe.ts":
  /*!***************************************************************!*\
    !*** ./src/app/layout/search/hotels/search-by-rating.pipe.ts ***!
    \***************************************************************/

  /*! exports provided: SearchByRatingPipe */

  /***/
  function srcAppLayoutSearchHotelsSearchByRatingPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchByRatingPipe", function () {
      return SearchByRatingPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SearchByRatingPipe =
    /*#__PURE__*/
    function () {
      function SearchByRatingPipe() {
        _classCallCheck(this, SearchByRatingPipe);
      }

      _createClass(SearchByRatingPipe, [{
        key: "transform",
        value: function transform(hotelList, ratings) {
          console.log("ratings", ratings);
          return hotelList.filter(function (hotel) {
            var output = [];
            ratings.forEach(function (rating) {
              if (Number(hotel.star_rating) == Number(rating.value) && ratings.selected == true) {
                output.push(hotel);
              }
            });
            console.log(output);
            return output;
          });
        }
      }]);

      return SearchByRatingPipe;
    }();

    SearchByRatingPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'searchByRating'
    })], SearchByRatingPipe);
    /***/
  },

  /***/
  "./src/app/shared/services/hotels.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/services/hotels.service.ts ***!
    \***************************************************/

  /*! exports provided: HotelService */

  /***/
  function srcAppSharedServicesHotelsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotelService", function () {
      return HotelService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HotelService =
    /*#__PURE__*/
    function () {
      function HotelService(http) {
        _classCallCheck(this, HotelService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL;
        this.searchResults = {};
      }

      _createClass(HotelService, [{
        key: "search",
        value: function search(params) {
          return this.http.post("".concat(this.url, "/api/hotels"), params);
        }
      }, {
        key: "searchRooms",
        value: function searchRooms(params) {
          return this.http.post("".concat(this.url, "/api/hotels/rooms/search"), params);
        }
      }, {
        key: "blockRoom",
        value: function blockRoom(params) {
          return this.http.post("".concat(this.url, "/api/hotels/rooms/block"), params);
        }
      }, {
        key: "bookRoom",
        value: function bookRoom(params) {
          return this.http.post("".concat(this.url, "/api/hotels/rooms/book"), params);
        }
      }, {
        key: "getCities",
        value: function getCities() {
          var country = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          return this.http.post("".concat(this.url, "/api/hotels/hotel-get-city"), country);
        }
      }, {
        key: "getCityById",
        value: function getCityById() {
          var cityId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          return this.http.get("".concat(this.url, "/api/hotels/hotel-get-citybyId/").concat(cityId));
        }
      }, {
        key: "getHotelInfo",
        value: function getHotelInfo(hotel) {
          return this.http.post("".concat(this.url, "/api/hotels/details"), hotel);
        }
      }]);

      return HotelService;
    }();

    HotelService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    HotelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], HotelService);
    /***/
  }
}]);
//# sourceMappingURL=default~hotels-hotels-module~layout-search-hotels-hotels-module-es5.js.map