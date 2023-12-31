import {
  require_react
} from "./chunk-UM3JHGVO.js";
import {
  require_powerbi
} from "./chunk-SFYZBGNJ.js";
import {
  __commonJS
} from "./chunk-CEQRFMJQ.js";

// node_modules/lodash.isequal/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.isequal/index.js"(exports, module) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var asyncTag = "[object AsyncFunction]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var nullTag = "[object Null]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var proxyTag = "[object Proxy]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var undefinedTag = "[object Undefined]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var nativeObjectToString = objectProto.toString;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer = moduleExports ? root.Buffer : void 0;
    var Symbol2 = root.Symbol;
    var Uint8Array = root.Uint8Array;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var nativeKeys = overArg(Object.keys, Object);
    var DataView = getNative(root, "DataView");
    var Map = getNative(root, "Map");
    var Promise2 = getNative(root, "Promise");
    var Set = getNative(root, "Set");
    var WeakMap = getNative(root, "WeakMap");
    var nativeCreate = getNative(Object, "create");
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set);
    var weakMapCtorString = toSource(WeakMap);
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function stubArray() {
      return [];
    }
    function stubFalse() {
      return false;
    }
    module.exports = isEqual;
  }
});

// node_modules/powerbi-client-react/dist/powerbi-client-react.js
var require_powerbi_client_react = __commonJS({
  "node_modules/powerbi-client-react/dist/powerbi-client-react.js"(exports, module) {
    !function(t, a) {
      "object" == typeof exports && "object" == typeof module ? module.exports = a(require_react(), require_powerbi(), require_lodash()) : "function" == typeof define && define.amd ? define(["react", "powerbi-client", "lodash.isequal"], a) : "object" == typeof exports ? exports["powerbi-client-react"] = a(require_react(), require_powerbi(), require_lodash()) : t["powerbi-client-react"] = a(t.react, t["powerbi-client"], t["lodash.isequal"]);
    }(self, (t, a, e) => (() => {
      var r = { 149: function(t2) {
        var a2;
        a2 = () => (() => {
          var t3 = [function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.TextAlignment = a4.CommonErrorCodes = a4.BookmarksPlayMode = a4.ExportDataType = a4.QnaMode = a4.PageNavigationPosition = a4.BrowserPrintAdjustmentsMode = a4.AggregateFunction = a4.DataCacheMode = a4.CredentialType = a4.isPercentOfGrandTotal = a4.isColumnAggr = a4.isHierarchyLevelAggr = a4.isHierarchyLevel = a4.isColumn = a4.isMeasure = a4.getFilterType = a4.isBasicFilterWithKeys = a4.isFilterKeyColumnsTarget = a4.HierarchyFilter = a4.AdvancedFilter = a4.TupleFilter = a4.IdentityFilter = a4.BasicFilterWithKeys = a4.BasicFilter = a4.RelativeTimeFilter = a4.RelativeDateFilter = a4.TopNFilter = a4.IncludeExcludeFilter = a4.NotSupportedFilter = a4.Filter = a4.RelativeDateOperators = a4.RelativeDateFilterTimeUnit = a4.FilterType = a4.FiltersLevel = a4.FiltersOperations = a4.MenuLocation = a4.ContrastMode = a4.TokenType = a4.ViewMode = a4.Permissions = a4.SectionVisibility = a4.ReportAlignment = a4.HyperlinkClickBehavior = a4.LayoutType = a4.VisualContainerDisplayMode = a4.BackgroundType = a4.DisplayOption = a4.PageSizeType = a4.TraceType = void 0, a4.validateVisualHeader = a4.validateExportDataRequest = a4.validateQnaInterpretInputData = a4.validateLoadQnaConfiguration = a4.validateSaveAsParameters = a4.validateUpdateFiltersRequest = a4.validateFilter = a4.validatePage = a4.validateTileLoad = a4.validateDashboardLoad = a4.validateQuickCreate = a4.validateCreateReport = a4.validatePaginatedReportLoad = a4.validateReportLoad = a4.validateMenuGroupExtension = a4.validateExtension = a4.validateCustomPageSize = a4.validateVisualizationsPane = a4.validateSyncSlicersPane = a4.validateSelectionPane = a4.validatePageNavigationPane = a4.validateFieldsPane = a4.validateFiltersPane = a4.validateBookmarksPane = a4.validatePanes = a4.validateSettings = a4.validateCaptureBookmarkRequest = a4.validateApplyBookmarkStateRequest = a4.validateApplyBookmarkByNameRequest = a4.validateAddBookmarkRequest = a4.validatePlayBookmarkRequest = a4.validateSlicerState = a4.validateSlicer = a4.validateVisualSelector = a4.isIExtensionArray = a4.isIExtensions = a4.isGroupedMenuExtension = a4.isFlatMenuExtension = a4.isReportFiltersArray = a4.isOnLoadFilters = a4.VisualDataRoleKindPreference = a4.VisualDataRoleKind = a4.CommandDisplayOption = a4.SlicerTargetSelector = a4.VisualTypeSelector = a4.VisualSelector = a4.PageSelector = a4.Selector = a4.SortDirection = a4.LegendPosition = void 0, a4.validatePrintSettings = a4.validateZoomLevel = a4.validateCustomTheme = a4.validateCommandsSettings = a4.validateVisualSettings = void 0;
            var o2, l2, n, d, s, u, p, c, f, V, v, y, h, m, g, w, b, O, _, S = e3(1);
            (_ = a4.TraceType || (a4.TraceType = {}))[_.Information = 0] = "Information", _[_.Verbose = 1] = "Verbose", _[_.Warning = 2] = "Warning", _[_.Error = 3] = "Error", _[_.ExpectedError = 4] = "ExpectedError", _[_.UnexpectedError = 5] = "UnexpectedError", _[_.Fatal = 6] = "Fatal", (O = a4.PageSizeType || (a4.PageSizeType = {}))[O.Widescreen = 0] = "Widescreen", O[O.Standard = 1] = "Standard", O[O.Cortana = 2] = "Cortana", O[O.Letter = 3] = "Letter", O[O.Custom = 4] = "Custom", O[O.Mobile = 5] = "Mobile", (b = a4.DisplayOption || (a4.DisplayOption = {}))[b.FitToPage = 0] = "FitToPage", b[b.FitToWidth = 1] = "FitToWidth", b[b.ActualSize = 2] = "ActualSize", (w = a4.BackgroundType || (a4.BackgroundType = {}))[w.Default = 0] = "Default", w[w.Transparent = 1] = "Transparent", (g = a4.VisualContainerDisplayMode || (a4.VisualContainerDisplayMode = {}))[g.Visible = 0] = "Visible", g[g.Hidden = 1] = "Hidden", (m = a4.LayoutType || (a4.LayoutType = {}))[m.Master = 0] = "Master", m[m.Custom = 1] = "Custom", m[m.MobilePortrait = 2] = "MobilePortrait", m[m.MobileLandscape = 3] = "MobileLandscape", (h = a4.HyperlinkClickBehavior || (a4.HyperlinkClickBehavior = {}))[h.Navigate = 0] = "Navigate", h[h.NavigateAndRaiseEvent = 1] = "NavigateAndRaiseEvent", h[h.RaiseEvent = 2] = "RaiseEvent", (y = a4.ReportAlignment || (a4.ReportAlignment = {}))[y.Left = 0] = "Left", y[y.Center = 1] = "Center", y[y.Right = 2] = "Right", y[y.None = 3] = "None", (v = a4.SectionVisibility || (a4.SectionVisibility = {}))[v.AlwaysVisible = 0] = "AlwaysVisible", v[v.HiddenInViewMode = 1] = "HiddenInViewMode", (V = a4.Permissions || (a4.Permissions = {}))[V.Read = 0] = "Read", V[V.ReadWrite = 1] = "ReadWrite", V[V.Copy = 2] = "Copy", V[V.Create = 4] = "Create", V[V.All = 7] = "All", (f = a4.ViewMode || (a4.ViewMode = {}))[f.View = 0] = "View", f[f.Edit = 1] = "Edit", (c = a4.TokenType || (a4.TokenType = {}))[c.Aad = 0] = "Aad", c[c.Embed = 1] = "Embed", (p = a4.ContrastMode || (a4.ContrastMode = {}))[p.None = 0] = "None", p[p.HighContrast1 = 1] = "HighContrast1", p[p.HighContrast2 = 2] = "HighContrast2", p[p.HighContrastBlack = 3] = "HighContrastBlack", p[p.HighContrastWhite = 4] = "HighContrastWhite", (u = a4.MenuLocation || (a4.MenuLocation = {}))[u.Bottom = 0] = "Bottom", u[u.Top = 1] = "Top", (s = a4.FiltersOperations || (a4.FiltersOperations = {}))[s.RemoveAll = 0] = "RemoveAll", s[s.ReplaceAll = 1] = "ReplaceAll", s[s.Add = 2] = "Add", s[s.Replace = 3] = "Replace", (d = a4.FiltersLevel || (a4.FiltersLevel = {}))[d.Report = 0] = "Report", d[d.Page = 1] = "Page", d[d.Visual = 2] = "Visual", function(t5) {
              t5[t5.Advanced = 0] = "Advanced", t5[t5.Basic = 1] = "Basic", t5[t5.Unknown = 2] = "Unknown", t5[t5.IncludeExclude = 3] = "IncludeExclude", t5[t5.RelativeDate = 4] = "RelativeDate", t5[t5.TopN = 5] = "TopN", t5[t5.Tuple = 6] = "Tuple", t5[t5.RelativeTime = 7] = "RelativeTime", t5[t5.Identity = 8] = "Identity", t5[t5.Hierarchy = 9] = "Hierarchy";
            }(o2 = a4.FilterType || (a4.FilterType = {})), (n = a4.RelativeDateFilterTimeUnit || (a4.RelativeDateFilterTimeUnit = {}))[n.Days = 0] = "Days", n[n.Weeks = 1] = "Weeks", n[n.CalendarWeeks = 2] = "CalendarWeeks", n[n.Months = 3] = "Months", n[n.CalendarMonths = 4] = "CalendarMonths", n[n.Years = 5] = "Years", n[n.CalendarYears = 6] = "CalendarYears", n[n.Minutes = 7] = "Minutes", n[n.Hours = 8] = "Hours", (l2 = a4.RelativeDateOperators || (a4.RelativeDateOperators = {}))[l2.InLast = 0] = "InLast", l2[l2.InThis = 1] = "InThis", l2[l2.InNext = 2] = "InNext";
            var F = function() {
              function t5(t6, a5) {
                this.target = t6, this.filterType = a5;
              }
              return t5.prototype.toJSON = function() {
                var t6 = { $schema: this.schemaUrl, target: this.target, filterType: this.filterType };
                return void 0 !== this.displaySettings && (t6.displaySettings = this.displaySettings), t6;
              }, t5;
            }();
            a4.Filter = F;
            var T = function(t5) {
              function a5(e4, r3, i3) {
                var l3 = t5.call(this, e4, o2.Unknown) || this;
                return l3.message = r3, l3.notSupportedTypeName = i3, l3.schemaUrl = a5.schemaUrl, l3;
              }
              return i2(a5, t5), a5.prototype.toJSON = function() {
                var a6 = t5.prototype.toJSON.call(this);
                return a6.message = this.message, a6.notSupportedTypeName = this.notSupportedTypeName, a6;
              }, a5.schemaUrl = "http://powerbi.com/product/schema#notSupported", a5;
            }(F);
            a4.NotSupportedFilter = T;
            var P = function(t5) {
              function a5(e4, r3, i3) {
                var l3 = t5.call(this, e4, o2.IncludeExclude) || this;
                return l3.values = i3, l3.isExclude = r3, l3.schemaUrl = a5.schemaUrl, l3;
              }
              return i2(a5, t5), a5.prototype.toJSON = function() {
                var a6 = t5.prototype.toJSON.call(this);
                return a6.isExclude = this.isExclude, a6.values = this.values, a6;
              }, a5.schemaUrl = "http://powerbi.com/product/schema#includeExclude", a5;
            }(F);
            a4.IncludeExcludeFilter = P;
            var C = function(t5) {
              function a5(e4, r3, i3, l3) {
                var n2 = t5.call(this, e4, o2.TopN) || this;
                return n2.operator = r3, n2.itemCount = i3, n2.schemaUrl = a5.schemaUrl, n2.orderBy = l3, n2;
              }
              return i2(a5, t5), a5.prototype.toJSON = function() {
                var a6 = t5.prototype.toJSON.call(this);
                return a6.operator = this.operator, a6.itemCount = this.itemCount, a6.orderBy = this.orderBy, a6;
              }, a5.schemaUrl = "http://powerbi.com/product/schema#topN", a5;
            }(F);
            a4.TopNFilter = C;
            var R = function(t5) {
              function a5(e4, r3, i3, l3, n2) {
                var d2 = t5.call(this, e4, o2.RelativeDate) || this;
                return d2.operator = r3, d2.timeUnitsCount = i3, d2.timeUnitType = l3, d2.includeToday = n2, d2.schemaUrl = a5.schemaUrl, d2;
              }
              return i2(a5, t5), a5.prototype.toJSON = function() {
                var a6 = t5.prototype.toJSON.call(this);
                return a6.operator = this.operator, a6.timeUnitsCount = this.timeUnitsCount, a6.timeUnitType = this.timeUnitType, a6.includeToday = this.includeToday, a6;
              }, a5.schemaUrl = "http://powerbi.com/product/schema#relativeDate", a5;
            }(F);
            a4.RelativeDateFilter = R;
            var k = function(t5) {
              function a5(e4, r3, i3, l3) {
                var n2 = t5.call(this, e4, o2.RelativeTime) || this;
                return n2.operator = r3, n2.timeUnitsCount = i3, n2.timeUnitType = l3, n2.schemaUrl = a5.schemaUrl, n2;
              }
              return i2(a5, t5), a5.prototype.toJSON = function() {
                var a6 = t5.prototype.toJSON.call(this);
                return a6.operator = this.operator, a6.timeUnitsCount = this.timeUnitsCount, a6.timeUnitType = this.timeUnitType, a6;
              }, a5.schemaUrl = "http://powerbi.com/product/schema#relativeTime", a5;
            }(F);
            a4.RelativeTimeFilter = k;
            var M = function(t5) {
              function a5(e4, r3) {
                for (var i3 = [], l3 = 2; l3 < arguments.length; l3++)
                  i3[l3 - 2] = arguments[l3];
                var n2 = t5.call(this, e4, o2.Basic) || this;
                if (n2.operator = r3, n2.schemaUrl = a5.schemaUrl, 0 === i3.length && "All" !== r3)
                  throw new Error('values must be a non-empty array unless your operator is "All".');
                return Array.isArray(i3[0]) ? n2.values = i3[0] : n2.values = i3, n2;
              }
              return i2(a5, t5), a5.prototype.toJSON = function() {
                var a6 = t5.prototype.toJSON.call(this);
                return a6.operator = this.operator, a6.values = this.values, a6.requireSingleSelection = !!this.requireSingleSelection, a6;
              }, a5.schemaUrl = "http://powerbi.com/product/schema#basic", a5;
            }(F);
            a4.BasicFilter = M;
            var A = function(t5) {
              function a5(a6, e4, r3, i3) {
                var o3 = t5.call(this, a6, e4, r3) || this;
                o3.keyValues = i3, o3.target = a6;
                var l3 = a6.keys ? a6.keys.length : 0;
                if (l3 > 0 && !i3)
                  throw new Error("You should pass the values to be filtered for each key. You passed: no values and ".concat(l3, " keys"));
                if (0 === l3 && i3 && i3.length > 0)
                  throw new Error("You passed key values but your target object doesn't contain the keys to be filtered");
                for (var n2 = 0, d2 = o3.keyValues; n2 < d2.length; n2++) {
                  var s2 = d2[n2];
                  if (s2) {
                    var u2 = s2.length;
                    if (u2 !== l3)
                      throw new Error("Each tuple of key values should contain a value for each of the keys. You passed: ".concat(u2, " values and ").concat(l3, " keys"));
                  }
                }
                return o3;
              }
              return i2(a5, t5), a5.prototype.toJSON = function() {
                var a6 = t5.prototype.toJSON.call(this);
                return a6.keyValues = this.keyValues, a6;
              }, a5;
            }(M);
            a4.BasicFilterWithKeys = A;
            var j = function(t5) {
              function a5(e4, r3) {
                var i3 = t5.call(this, e4, o2.Identity) || this;
                return i3.operator = r3, i3.schemaUrl = a5.schemaUrl, i3;
              }
              return i2(a5, t5), a5.prototype.toJSON = function() {
                var a6 = t5.prototype.toJSON.call(this);
                return a6.operator = this.operator, a6.target = this.target, a6;
              }, a5.schemaUrl = "http://powerbi.com/product/schema#identity", a5;
            }(F);
            a4.IdentityFilter = j;
            var E = function(t5) {
              function a5(e4, r3, i3) {
                var l3 = t5.call(this, e4, o2.Tuple) || this;
                return l3.operator = r3, l3.schemaUrl = a5.schemaUrl, l3.values = i3, l3;
              }
              return i2(a5, t5), a5.prototype.toJSON = function() {
                var a6 = t5.prototype.toJSON.call(this);
                return a6.operator = this.operator, a6.values = this.values, a6.target = this.target, a6;
              }, a5.schemaUrl = "http://powerbi.com/product/schema#tuple", a5;
            }(F);
            a4.TupleFilter = E;
            var x = function(t5) {
              function a5(e4, r3) {
                for (var i3 = [], l3 = 2; l3 < arguments.length; l3++)
                  i3[l3 - 2] = arguments[l3];
                var n2, d2 = t5.call(this, e4, o2.Advanced) || this;
                if (d2.schemaUrl = a5.schemaUrl, "string" != typeof r3 || 0 === r3.length)
                  throw new Error("logicalOperator must be a valid operator, You passed: ".concat(r3));
                if (d2.logicalOperator = r3, (n2 = Array.isArray(i3[0]) ? i3[0] : i3).length > 2)
                  throw new Error("AdvancedFilters may not have more than two conditions. You passed: ".concat(i3.length));
                if (1 === n2.length && "And" !== r3)
                  throw new Error('Logical Operator must be "And" when there is only one condition provided');
                return d2.conditions = n2, d2;
              }
              return i2(a5, t5), a5.prototype.toJSON = function() {
                var a6 = t5.prototype.toJSON.call(this);
                return a6.logicalOperator = this.logicalOperator, a6.conditions = this.conditions, a6;
              }, a5.schemaUrl = "http://powerbi.com/product/schema#advanced", a5;
            }(F);
            a4.AdvancedFilter = x;
            var q, B, D, N, L, U, H, I, z, J = function(t5) {
              function a5(e4, r3) {
                var i3 = t5.call(this, e4, o2.Hierarchy) || this;
                return i3.schemaUrl = a5.schemaUrl, i3.hierarchyData = r3, i3;
              }
              return i2(a5, t5), a5.prototype.toJSON = function() {
                var a6 = t5.prototype.toJSON.call(this);
                return a6.hierarchyData = this.hierarchyData, a6.target = this.target, a6;
              }, a5.schemaUrl = "http://powerbi.com/product/schema#hierarchy", a5;
            }(F);
            function Q(t5) {
              if (t5.filterType)
                return t5.filterType;
              var a5 = t5, e4 = t5;
              return "string" == typeof a5.operator && Array.isArray(a5.values) ? o2.Basic : "string" == typeof e4.logicalOperator && Array.isArray(e4.conditions) ? o2.Advanced : o2.Unknown;
            }
            function G(t5) {
              return !(!t5.table || !t5.column || t5.aggregationFunction);
            }
            a4.HierarchyFilter = J, a4.isFilterKeyColumnsTarget = function(t5) {
              return G(t5) && !!t5.keys;
            }, a4.isBasicFilterWithKeys = function(t5) {
              return Q(t5) === o2.Basic && !!t5.keyValues;
            }, a4.getFilterType = Q, a4.isMeasure = function(t5) {
              return void 0 !== t5.table && void 0 !== t5.measure;
            }, a4.isColumn = G, a4.isHierarchyLevel = function(t5) {
              return !(!(t5.table && t5.hierarchy && t5.hierarchyLevel) || t5.aggregationFunction);
            }, a4.isHierarchyLevelAggr = function(t5) {
              return !!(t5.table && t5.hierarchy && t5.hierarchyLevel && t5.aggregationFunction);
            }, a4.isColumnAggr = function(t5) {
              return !!(t5.table && t5.column && t5.aggregationFunction);
            }, a4.isPercentOfGrandTotal = function(t5) {
              return !!t5.percentOfGrandTotal;
            }, (z = a4.CredentialType || (a4.CredentialType = {}))[z.NoConnection = 0] = "NoConnection", z[z.OnBehalfOf = 1] = "OnBehalfOf", z[z.Anonymous = 2] = "Anonymous", (I = a4.DataCacheMode || (a4.DataCacheMode = {}))[I.Import = 0] = "Import", I[I.DirectQuery = 1] = "DirectQuery", (H = a4.AggregateFunction || (a4.AggregateFunction = {}))[H.Default = 1] = "Default", H[H.None = 2] = "None", H[H.Sum = 3] = "Sum", H[H.Min = 4] = "Min", H[H.Max = 5] = "Max", H[H.Count = 6] = "Count", H[H.Average = 7] = "Average", H[H.DistinctCount = 8] = "DistinctCount", (U = a4.BrowserPrintAdjustmentsMode || (a4.BrowserPrintAdjustmentsMode = {}))[U.Default = 0] = "Default", U[U.NoAdjustments = 1] = "NoAdjustments", (L = a4.PageNavigationPosition || (a4.PageNavigationPosition = {}))[L.Bottom = 0] = "Bottom", L[L.Left = 1] = "Left", (N = a4.QnaMode || (a4.QnaMode = {}))[N.Interactive = 0] = "Interactive", N[N.ResultOnly = 1] = "ResultOnly", (D = a4.ExportDataType || (a4.ExportDataType = {}))[D.Summarized = 0] = "Summarized", D[D.Underlying = 1] = "Underlying", (B = a4.BookmarksPlayMode || (a4.BookmarksPlayMode = {}))[B.Off = 0] = "Off", B[B.Presentation = 1] = "Presentation", a4.CommonErrorCodes = { TokenExpired: "TokenExpired", NotFound: "PowerBIEntityNotFound", InvalidParameters: "Invalid parameters", LoadReportFailed: "LoadReportFailed", NotAuthorized: "PowerBINotAuthorizedException", FailedToLoadModel: "ExplorationContainer_FailedToLoadModel_DefaultDetails" }, a4.TextAlignment = { Left: "left", Center: "center", Right: "right" }, a4.LegendPosition = { Top: "Top", Bottom: "Bottom", Right: "Right", Left: "Left", TopCenter: "TopCenter", BottomCenter: "BottomCenter", RightCenter: "RightCenter", LeftCenter: "LeftCenter" }, (q = a4.SortDirection || (a4.SortDirection = {}))[q.Ascending = 1] = "Ascending", q[q.Descending = 2] = "Descending";
            var W = function() {
              function t5(t6) {
                this.$schema = t6;
              }
              return t5.prototype.toJSON = function() {
                return { $schema: this.$schema };
              }, t5;
            }();
            a4.Selector = W;
            var K = function(t5) {
              function a5(e4) {
                var r3 = t5.call(this, a5.schemaUrl) || this;
                return r3.pageName = e4, r3;
              }
              return i2(a5, t5), a5.prototype.toJSON = function() {
                var a6 = t5.prototype.toJSON.call(this);
                return a6.pageName = this.pageName, a6;
              }, a5.schemaUrl = "http://powerbi.com/product/schema#pageSelector", a5;
            }(W);
            a4.PageSelector = K;
            var Y = function(t5) {
              function a5(e4) {
                var r3 = t5.call(this, a5.schemaUrl) || this;
                return r3.visualName = e4, r3;
              }
              return i2(a5, t5), a5.prototype.toJSON = function() {
                var a6 = t5.prototype.toJSON.call(this);
                return a6.visualName = this.visualName, a6;
              }, a5.schemaUrl = "http://powerbi.com/product/schema#visualSelector", a5;
            }(W);
            a4.VisualSelector = Y;
            var $ = function(t5) {
              function a5(a6) {
                var e4 = t5.call(this, Y.schemaUrl) || this;
                return e4.visualType = a6, e4;
              }
              return i2(a5, t5), a5.prototype.toJSON = function() {
                var a6 = t5.prototype.toJSON.call(this);
                return a6.visualType = this.visualType, a6;
              }, a5.schemaUrl = "http://powerbi.com/product/schema#visualTypeSelector", a5;
            }(W);
            a4.VisualTypeSelector = $;
            var Z, X, tt, at = function(t5) {
              function a5(a6) {
                var e4 = t5.call(this, Y.schemaUrl) || this;
                return e4.target = a6, e4;
              }
              return i2(a5, t5), a5.prototype.toJSON = function() {
                var a6 = t5.prototype.toJSON.call(this);
                return a6.target = this.target, a6;
              }, a5.schemaUrl = "http://powerbi.com/product/schema#slicerTargetSelector", a5;
            }(W);
            function et(t5) {
              return Array.isArray(t5);
            }
            function rt(t5) {
              return t5 && !!t5.groupName;
            }
            function it(t5) {
              return Array.isArray(t5);
            }
            function ot(t5) {
              var a5 = t5.message;
              return a5 || (a5 = "".concat(t5.path, " is invalid. Not meeting ").concat(t5.keyword, " constraint")), { message: a5 };
            }
            a4.SlicerTargetSelector = at, (tt = a4.CommandDisplayOption || (a4.CommandDisplayOption = {}))[tt.Enabled = 0] = "Enabled", tt[tt.Disabled = 1] = "Disabled", tt[tt.Hidden = 2] = "Hidden", (X = a4.VisualDataRoleKind || (a4.VisualDataRoleKind = {}))[X.Grouping = 0] = "Grouping", X[X.Measure = 1] = "Measure", X[X.GroupingOrMeasure = 2] = "GroupingOrMeasure", (Z = a4.VisualDataRoleKindPreference || (a4.VisualDataRoleKindPreference = {}))[Z.Measure = 0] = "Measure", Z[Z.Grouping = 1] = "Grouping", a4.isOnLoadFilters = function(t5) {
              return t5 && !et(t5);
            }, a4.isReportFiltersArray = et, a4.isFlatMenuExtension = function(t5) {
              return t5 && !rt(t5);
            }, a4.isGroupedMenuExtension = rt, a4.isIExtensions = function(t5) {
              return t5 && !it(t5);
            }, a4.isIExtensionArray = it, a4.validateVisualSelector = function(t5) {
              var a5 = S.Validators.visualSelectorValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateSlicer = function(t5) {
              var a5 = S.Validators.slicerValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateSlicerState = function(t5) {
              var a5 = S.Validators.slicerStateValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validatePlayBookmarkRequest = function(t5) {
              var a5 = S.Validators.playBookmarkRequestValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateAddBookmarkRequest = function(t5) {
              var a5 = S.Validators.addBookmarkRequestValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateApplyBookmarkByNameRequest = function(t5) {
              var a5 = S.Validators.applyBookmarkByNameRequestValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateApplyBookmarkStateRequest = function(t5) {
              var a5 = S.Validators.applyBookmarkStateRequestValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateCaptureBookmarkRequest = function(t5) {
              var a5 = S.Validators.captureBookmarkRequestValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateSettings = function(t5) {
              var a5 = S.Validators.settingsValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validatePanes = function(t5) {
              var a5 = S.Validators.reportPanesValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateBookmarksPane = function(t5) {
              var a5 = S.Validators.bookmarksPaneValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateFiltersPane = function(t5) {
              var a5 = S.Validators.filtersPaneValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateFieldsPane = function(t5) {
              var a5 = S.Validators.fieldsPaneValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validatePageNavigationPane = function(t5) {
              var a5 = S.Validators.pageNavigationPaneValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateSelectionPane = function(t5) {
              var a5 = S.Validators.selectionPaneValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateSyncSlicersPane = function(t5) {
              var a5 = S.Validators.syncSlicersPaneValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateVisualizationsPane = function(t5) {
              var a5 = S.Validators.visualizationsPaneValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateCustomPageSize = function(t5) {
              var a5 = S.Validators.customPageSizeValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateExtension = function(t5) {
              var a5 = S.Validators.extensionValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateMenuGroupExtension = function(t5) {
              var a5 = S.Validators.menuGroupExtensionValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateReportLoad = function(t5) {
              var a5 = S.Validators.reportLoadValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validatePaginatedReportLoad = function(t5) {
              var a5 = S.Validators.paginatedReportLoadValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateCreateReport = function(t5) {
              var a5 = S.Validators.reportCreateValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateQuickCreate = function(t5) {
              var a5 = S.Validators.quickCreateValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateDashboardLoad = function(t5) {
              var a5 = S.Validators.dashboardLoadValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateTileLoad = function(t5) {
              var a5 = S.Validators.tileLoadValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validatePage = function(t5) {
              var a5 = S.Validators.pageValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateFilter = function(t5) {
              var a5 = S.Validators.filterValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateUpdateFiltersRequest = function(t5) {
              var a5 = S.Validators.updateFiltersRequestValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateSaveAsParameters = function(t5) {
              var a5 = S.Validators.saveAsParametersValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateLoadQnaConfiguration = function(t5) {
              var a5 = S.Validators.loadQnaValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateQnaInterpretInputData = function(t5) {
              var a5 = S.Validators.qnaInterpretInputDataValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateExportDataRequest = function(t5) {
              var a5 = S.Validators.exportDataRequestValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateVisualHeader = function(t5) {
              var a5 = S.Validators.visualHeaderValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateVisualSettings = function(t5) {
              var a5 = S.Validators.visualSettingsValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateCommandsSettings = function(t5) {
              var a5 = S.Validators.commandsSettingsValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateCustomTheme = function(t5) {
              var a5 = S.Validators.customThemeValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validateZoomLevel = function(t5) {
              var a5 = S.Validators.zoomLevelValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            }, a4.validatePrintSettings = function(t5) {
              var a5 = S.Validators.printSettingsValidator.validate(t5);
              return a5 ? a5.map(ot) : void 0;
            };
          }, (t4, a4, e3) => {
            Object.defineProperty(a4, "__esModule", { value: true }), a4.Validators = void 0;
            var r2 = e3(2), i2 = e3(5), o2 = e3(6), l2 = e3(7), n = e3(8), d = e3(9), s = e3(10), u = e3(11), p = e3(12), c = e3(13), f = e3(14), V = e3(15), v = e3(16), y = e3(17), h = e3(18), m = e3(19), g = e3(20), w = e3(21), b = e3(22), O = e3(23), _ = e3(24), S = e3(25), F = e3(26), T = e3(27), P = e3(28), C = e3(29), R = e3(4), k = e3(30), M = e3(31), A = e3(32), j = e3(33);
            a4.Validators = { addBookmarkRequestValidator: new i2.AddBookmarkRequestValidator(), advancedFilterTypeValidator: new R.EnumValidator([0]), advancedFilterValidator: new p.AdvancedFilterValidator(), anyArrayValidator: new R.ArrayValidator([new F.AnyOfValidator([new R.StringValidator(), new R.NumberValidator(), new R.BooleanValidator()])]), anyFilterValidator: new F.AnyOfValidator([new p.BasicFilterValidator(), new p.AdvancedFilterValidator(), new p.IncludeExcludeFilterValidator(), new p.NotSupportedFilterValidator(), new p.RelativeDateFilterValidator(), new p.TopNFilterValidator(), new p.RelativeTimeFilterValidator(), new p.HierarchyFilterValidator()]), anyValueValidator: new F.AnyOfValidator([new R.StringValidator(), new R.NumberValidator(), new R.BooleanValidator()]), actionBarValidator: new r2.ActionBarValidator(), statusBarValidator: new r2.StatusBarValidator(), applyBookmarkByNameRequestValidator: new i2.ApplyBookmarkByNameRequestValidator(), applyBookmarkStateRequestValidator: new i2.ApplyBookmarkStateRequestValidator(), applyBookmarkValidator: new F.AnyOfValidator([new i2.ApplyBookmarkByNameRequestValidator(), new i2.ApplyBookmarkStateRequestValidator()]), backgroundValidator: new R.EnumValidator([0, 1]), basicFilterTypeValidator: new R.EnumValidator([1]), basicFilterValidator: new p.BasicFilterValidator(), booleanArrayValidator: new R.BooleanArrayValidator(), booleanValidator: new R.BooleanValidator(), bookmarksPaneValidator: new V.BookmarksPaneValidator(), captureBookmarkOptionsValidator: new i2.CaptureBookmarkOptionsValidator(), captureBookmarkRequestValidator: new i2.CaptureBookmarkRequestValidator(), columnSchemaArrayValidator: new R.ArrayValidator([new M.ColumnSchemaValidator()]), commandDisplayOptionValidator: new R.EnumValidator([0, 1, 2]), commandExtensionSelectorValidator: new F.AnyOfValidator([new w.VisualSelectorValidator(), new w.VisualTypeSelectorValidator()]), commandExtensionArrayValidator: new R.ArrayValidator([new u.CommandExtensionValidator()]), commandExtensionValidator: new u.CommandExtensionValidator(), commandsSettingsArrayValidator: new R.ArrayValidator([new o2.CommandsSettingsValidator()]), commandsSettingsValidator: new o2.CommandsSettingsValidator(), conditionItemValidator: new p.ConditionItemValidator(), contrastModeValidator: new R.EnumValidator([0, 1, 2, 3, 4]), credentialDetailsValidator: new C.MapValidator([new R.StringValidator()], [new R.StringValidator()]), credentialsValidator: new M.CredentialsValidator(), credentialTypeValidator: new R.EnumValidator([0, 1, 2]), customLayoutDisplayOptionValidator: new R.EnumValidator([0, 1, 2]), customLayoutValidator: new c.CustomLayoutValidator(), customPageSizeValidator: new f.CustomPageSizeValidator(), customThemeValidator: new l2.CustomThemeValidator(), dashboardLoadValidator: new n.DashboardLoadValidator(), dataCacheModeValidator: new R.EnumValidator([0, 1]), datasetBindingValidator: new d.DatasetBindingValidator(), datasetCreateConfigValidator: new M.DatasetCreateConfigValidator(), datasourceConnectionConfigValidator: new M.DatasourceConnectionConfigValidator(), displayStateModeValidator: new R.EnumValidator([0, 1]), displayStateValidator: new c.DisplayStateValidator(), exportDataRequestValidator: new s.ExportDataRequestValidator(), extensionArrayValidator: new R.ArrayValidator([new u.ExtensionValidator()]), extensionsValidator: new F.AnyOfValidator([new R.ArrayValidator([new u.ExtensionValidator()]), new u.ExtensionsValidator()]), extensionPointsValidator: new u.ExtensionPointsValidator(), extensionValidator: new u.ExtensionValidator(), fieldForbiddenValidator: new T.FieldForbiddenValidator(), fieldRequiredValidator: new P.FieldRequiredValidator(), fieldsPaneValidator: new V.FieldsPaneValidator(), filterColumnTargetValidator: new p.FilterColumnTargetValidator(), filterDisplaySettingsValidator: new p.FilterDisplaySettingsValidator(), filterConditionsValidator: new R.ArrayValidator([new p.ConditionItemValidator()]), filterHierarchyTargetValidator: new p.FilterHierarchyTargetValidator(), filterMeasureTargetValidator: new p.FilterMeasureTargetValidator(), filterTargetValidator: new F.AnyOfValidator([new p.FilterColumnTargetValidator(), new p.FilterHierarchyTargetValidator(), new p.FilterMeasureTargetValidator(), new R.ArrayValidator([new F.AnyOfValidator([new p.FilterColumnTargetValidator(), new p.FilterHierarchyTargetValidator(), new p.FilterMeasureTargetValidator(), new p.FilterKeyColumnsTargetValidator(), new p.FilterKeyHierarchyTargetValidator()])])]), filterValidator: new p.FilterValidator(), filterTypeValidator: new R.EnumValidator([0, 1, 2, 3, 4, 5, 6, 7, 9]), filtersArrayValidator: new R.ArrayValidator([new p.FilterValidator()]), filtersOperationsUpdateValidator: new R.EnumValidator([1, 2, 3]), filtersOperationsRemoveAllValidator: new R.EnumValidator([0]), filtersPaneValidator: new V.FiltersPaneValidator(), hyperlinkClickBehaviorValidator: new R.EnumValidator([0, 1, 2]), includeExcludeFilterValidator: new p.IncludeExcludeFilterValidator(), includeExludeFilterTypeValidator: new R.EnumValidator([3]), hierarchyFilterTypeValidator: new R.EnumValidator([9]), hierarchyFilterValuesValidator: new R.ArrayValidator([new p.HierarchyFilterNodeValidator()]), layoutTypeValidator: new R.EnumValidator([0, 1, 2, 3]), loadQnaValidator: new v.LoadQnaValidator(), menuExtensionValidator: new F.AnyOfValidator([new u.FlatMenuExtensionValidator(), new u.GroupedMenuExtensionValidator()]), menuGroupExtensionArrayValidator: new R.ArrayValidator([new u.MenuGroupExtensionValidator()]), menuGroupExtensionValidator: new u.MenuGroupExtensionValidator(), menuLocationValidator: new R.EnumValidator([0, 1]), notSupportedFilterTypeValidator: new R.EnumValidator([2]), notSupportedFilterValidator: new p.NotSupportedFilterValidator(), numberArrayValidator: new R.NumberArrayValidator(), numberValidator: new R.NumberValidator(), onLoadFiltersBaseValidator: new F.AnyOfValidator([new p.OnLoadFiltersBaseValidator(), new p.OnLoadFiltersBaseRemoveOperationValidator()]), pageLayoutValidator: new C.MapValidator([new R.StringValidator()], [new c.VisualLayoutValidator()]), pageNavigationPaneValidator: new V.PageNavigationPaneValidator(), pageNavigationPositionValidator: new R.EnumValidator([0, 1]), pageSizeTypeValidator: new R.EnumValidator([0, 1, 2, 3, 4, 5]), pageSizeValidator: new f.PageSizeValidator(), pageValidator: new f.PageValidator(), pageViewFieldValidator: new f.PageViewFieldValidator(), pagesLayoutValidator: new C.MapValidator([new R.StringValidator()], [new c.PageLayoutValidator()]), paginatedReportCommandsValidator: new o2.PaginatedReportCommandsValidator(), paginatedReportLoadValidator: new m.PaginatedReportLoadValidator(), paginatedReportsettingsValidator: new b.PaginatedReportSettingsValidator(), parameterValuesArrayValidator: new R.ArrayValidator([new m.ReportParameterFieldsValidator()]), parametersPanelValidator: new k.ParametersPanelValidator(), permissionsValidator: new R.EnumValidator([0, 1, 2, 4, 7]), playBookmarkRequestValidator: new i2.PlayBookmarkRequestValidator(), printSettingsValidator: new j.PrintSettingsValidator(), qnaInterpretInputDataValidator: new v.QnaInterpretInputDataValidator(), qnaPanesValidator: new V.QnaPanesValidator(), qnaSettingValidator: new v.QnaSettingsValidator(), quickCreateValidator: new A.QuickCreateValidator(), rawDataValidator: new R.ArrayValidator([new R.ArrayValidator([new R.StringValidator()])]), relativeDateFilterOperatorValidator: new R.EnumValidator([0, 1, 2]), relativeDateFilterTimeUnitTypeValidator: new R.EnumValidator([0, 1, 2, 3, 4, 5, 6]), relativeDateFilterTypeValidator: new R.EnumValidator([4]), relativeDateFilterValidator: new p.RelativeDateFilterValidator(), relativeDateTimeFilterTypeValidator: new R.EnumValidator([4, 7]), relativeDateTimeFilterUnitTypeValidator: new R.EnumValidator([0, 1, 2, 3, 4, 5, 6, 7, 8]), relativeTimeFilterTimeUnitTypeValidator: new R.EnumValidator([7, 8]), relativeTimeFilterTypeValidator: new R.EnumValidator([7]), relativeTimeFilterValidator: new p.RelativeTimeFilterValidator(), reportBarsValidator: new r2.ReportBarsValidator(), reportCreateValidator: new y.ReportCreateValidator(), reportLoadFiltersValidator: new F.AnyOfValidator([new R.ArrayValidator([new p.FilterValidator()]), new p.OnLoadFiltersValidator()]), reportLoadValidator: new h.ReportLoadValidator(), reportPanesValidator: new V.ReportPanesValidator(), saveAsParametersValidator: new g.SaveAsParametersValidator(), selectionPaneValidator: new V.SelectionPaneValidator(), settingsValidator: new b.SettingsValidator(), singleCommandSettingsValidator: new o2.SingleCommandSettingsValidator(), slicerSelectorValidator: new F.AnyOfValidator([new w.VisualSelectorValidator(), new w.SlicerTargetSelectorValidator()]), slicerStateValidator: new O.SlicerStateValidator(), slicerTargetValidator: new F.AnyOfValidator([new p.FilterColumnTargetValidator(), new p.FilterHierarchyTargetValidator(), new p.FilterMeasureTargetValidator(), new p.FilterKeyColumnsTargetValidator(), new p.FilterKeyHierarchyTargetValidator()]), slicerValidator: new O.SlicerValidator(), stringArrayValidator: new R.StringArrayValidator(), stringValidator: new R.StringValidator(), syncSlicersPaneValidator: new V.SyncSlicersPaneValidator(), tableDataArrayValidator: new R.ArrayValidator([new M.TableDataValidator()]), tableSchemaListValidator: new R.ArrayValidator([new M.TableSchemaValidator()]), tileLoadValidator: new _.TileLoadValidator(), tokenTypeValidator: new R.EnumValidator([0, 1]), topNFilterTypeValidator: new R.EnumValidator([5]), topNFilterValidator: new p.TopNFilterValidator(), updateFiltersRequestValidator: new F.AnyOfValidator([new p.UpdateFiltersRequestValidator(), new p.RemoveFiltersRequestValidator()]), viewModeValidator: new R.EnumValidator([0, 1]), visualCommandSelectorValidator: new F.AnyOfValidator([new w.VisualSelectorValidator(), new w.VisualTypeSelectorValidator()]), visualHeaderSelectorValidator: new F.AnyOfValidator([new w.VisualSelectorValidator(), new w.VisualTypeSelectorValidator()]), visualHeaderSettingsValidator: new S.VisualHeaderSettingsValidator(), visualHeaderValidator: new S.VisualHeaderValidator(), visualHeadersValidator: new R.ArrayValidator([new S.VisualHeaderValidator()]), visualizationsPaneValidator: new V.VisualizationsPaneValidator(), visualLayoutValidator: new c.VisualLayoutValidator(), visualSelectorValidator: new w.VisualSelectorValidator(), visualSettingsValidator: new S.VisualSettingsValidator(), visualTypeSelectorValidator: new w.VisualTypeSelectorValidator(), zoomLevelValidator: new R.RangeValidator(0.25, 4) };
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.StatusBarValidator = a4.ActionBarValidator = a4.ReportBarsValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "actionBar", validators: [n.Validators.actionBarValidator] }, { field: "statusBar", validators: [n.Validators.statusBarValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.ReportBarsValidator = d;
            var s = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "visible", validators: [n.Validators.booleanValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.ActionBarValidator = s;
            var u = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "visible", validators: [n.Validators.booleanValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.StatusBarValidator = u;
          }, (t4, a4) => {
            Object.defineProperty(a4, "__esModule", { value: true }), a4.MultipleFieldsValidator = void 0;
            var e3 = function() {
              function t5(t6) {
                this.fieldValidatorsPairs = t6;
              }
              return t5.prototype.validate = function(t6, a5, e4) {
                if (!this.fieldValidatorsPairs)
                  return null;
                for (var r2 = a5 ? a5 + "." + e4 : e4, i2 = 0, o2 = this.fieldValidatorsPairs; i2 < o2.length; i2++)
                  for (var l2 = o2[i2], n = 0, d = l2.validators; n < d.length; n++) {
                    var s = d[n].validate(t6[l2.field], r2, l2.field);
                    if (s)
                      return s;
                  }
                return null;
              }, t5;
            }();
            a4.MultipleFieldsValidator = e3;
          }, function(t4, a4) {
            var e3, r2 = this && this.__extends || (e3 = function(t5, a5) {
              return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, e3(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function r3() {
                this.constructor = t5;
              }
              e3(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (r3.prototype = a5.prototype, new r3());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.RangeValidator = a4.NumberArrayValidator = a4.BooleanArrayValidator = a4.StringArrayValidator = a4.EnumValidator = a4.SchemaValidator = a4.ValueValidator = a4.NumberValidator = a4.BooleanValidator = a4.StringValidator = a4.TypeValidator = a4.ArrayValidator = a4.ObjectValidator = void 0;
            var i2 = function() {
              function t5() {
              }
              return t5.prototype.validate = function(t6, a5, e4) {
                return null == t6 ? null : "object" != typeof t6 || Array.isArray(t6) ? [{ message: void 0 !== e4 ? e4 + " must be an object" : "input must be an object", path: a5, keyword: "type" }] : null;
              }, t5;
            }();
            a4.ObjectValidator = i2;
            var o2 = function() {
              function t5(t6) {
                this.itemValidators = t6;
              }
              return t5.prototype.validate = function(t6, a5, e4) {
                if (null == t6)
                  return null;
                if (!Array.isArray(t6))
                  return [{ message: e4 + " property is invalid", path: (a5 ? a5 + "." : "") + e4, keyword: "type" }];
                for (var r3 = 0; r3 < t6.length; r3++)
                  for (var i3 = (a5 ? a5 + "." : "") + e4 + "." + r3.toString(), o3 = 0, l3 = this.itemValidators; o3 < l3.length; o3++)
                    if (l3[o3].validate(t6[r3], i3, e4))
                      return [{ message: e4 + " property is invalid", path: (a5 ? a5 + "." : "") + e4, keyword: "type" }];
                return null;
              }, t5;
            }();
            a4.ArrayValidator = o2;
            var l2 = function() {
              function t5(t6) {
                this.expectedType = t6;
              }
              return t5.prototype.validate = function(t6, a5, e4) {
                return null == t6 ? null : typeof t6 !== this.expectedType ? [{ message: e4 + " must be a " + this.expectedType, path: (a5 ? a5 + "." : "") + e4, keyword: "type" }] : null;
              }, t5;
            }();
            a4.TypeValidator = l2;
            var n = function(t5) {
              function a5() {
                return t5.call(this, "string") || this;
              }
              return r2(a5, t5), a5;
            }(l2);
            a4.StringValidator = n;
            var d = function(t5) {
              function a5() {
                return t5.call(this, "boolean") || this;
              }
              return r2(a5, t5), a5;
            }(l2);
            a4.BooleanValidator = d;
            var s = function(t5) {
              function a5() {
                return t5.call(this, "number") || this;
              }
              return r2(a5, t5), a5;
            }(l2);
            a4.NumberValidator = s;
            var u = function() {
              function t5(t6) {
                this.possibleValues = t6;
              }
              return t5.prototype.validate = function(t6, a5, e4) {
                return null == t6 ? null : this.possibleValues.indexOf(t6) < 0 ? [{ message: e4 + " property is invalid", path: (a5 ? a5 + "." : "") + e4, keyword: "invalid" }] : null;
              }, t5;
            }();
            a4.ValueValidator = u;
            var p = function(t5) {
              function a5(a6) {
                var e4 = t5.call(this, [a6]) || this;
                return e4.schemaValue = a6, e4;
              }
              return r2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                return t5.prototype.validate.call(this, a6, e4, r3);
              }, a5;
            }(u);
            a4.SchemaValidator = p;
            var c = function(t5) {
              function a5(a6) {
                var e4 = t5.call(this) || this;
                return e4.possibleValues = a6, e4;
              }
              return r2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                return null == a6 ? null : t5.prototype.validate.call(this, a6, e4, r3) || new u(this.possibleValues).validate(a6, e4, r3);
              }, a5;
            }(s);
            a4.EnumValidator = c;
            var f = function(t5) {
              function a5() {
                return t5.call(this, [new n()]) || this;
              }
              return r2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                return t5.prototype.validate.call(this, a6, e4, r3) ? [{ message: r3 + " must be an array of strings", path: (e4 ? e4 + "." : "") + r3, keyword: "type" }] : null;
              }, a5;
            }(o2);
            a4.StringArrayValidator = f;
            var V = function(t5) {
              function a5() {
                return t5.call(this, [new d()]) || this;
              }
              return r2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                return t5.prototype.validate.call(this, a6, e4, r3) ? [{ message: r3 + " must be an array of booleans", path: (e4 ? e4 + "." : "") + r3, keyword: "type" }] : null;
              }, a5;
            }(o2);
            a4.BooleanArrayValidator = V;
            var v = function(t5) {
              function a5() {
                return t5.call(this, [new s()]) || this;
              }
              return r2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                return t5.prototype.validate.call(this, a6, e4, r3) ? [{ message: r3 + " must be an array of numbers", path: (e4 ? e4 + "." : "") + r3, keyword: "type" }] : null;
              }, a5;
            }(o2);
            a4.NumberArrayValidator = v;
            var y = function(t5) {
              function a5(a6, e4) {
                var r3 = t5.call(this) || this;
                return r3.minValue = a6, r3.maxValue = e4, r3;
              }
              return r2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                return null == a6 ? null : t5.prototype.validate.call(this, a6, e4, r3) || (a6 > this.maxValue || a6 < this.minValue ? [{ message: r3 + " must be a number between " + this.minValue.toString() + " and " + this.maxValue.toString(), path: (e4 ? e4 + "." : "") + r3, keyword: "range" }] : null);
              }, a5;
            }(s);
            a4.RangeValidator = y;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.CaptureBookmarkRequestValidator = a4.CaptureBookmarkOptionsValidator = a4.ApplyBookmarkStateRequestValidator = a4.ApplyBookmarkByNameRequestValidator = a4.AddBookmarkRequestValidator = a4.PlayBookmarkRequestValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var d2 = [{ field: "playMode", validators: [n.Validators.fieldRequiredValidator, new l2.EnumValidator([0, 1])] }];
                return new o2.MultipleFieldsValidator(d2).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.PlayBookmarkRequestValidator = d;
            var s = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "state", validators: [n.Validators.stringValidator] }, { field: "displayName", validators: [n.Validators.stringValidator] }, { field: "apply", validators: [n.Validators.booleanValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.AddBookmarkRequestValidator = s;
            var u = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "name", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.ApplyBookmarkByNameRequestValidator = u;
            var p = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "state", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.ApplyBookmarkStateRequestValidator = p;
            var c = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "personalizeVisuals", validators: [n.Validators.booleanValidator] }, { field: "allPages", validators: [n.Validators.booleanValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.CaptureBookmarkOptionsValidator = c;
            var f = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "options", validators: [n.Validators.fieldRequiredValidator, n.Validators.captureBookmarkOptionsValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.CaptureBookmarkRequestValidator = f;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.PaginatedReportCommandsValidator = a4.SingleCommandSettingsValidator = a4.CommandsSettingsValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "copy", validators: [n.Validators.singleCommandSettingsValidator] }, { field: "drill", validators: [n.Validators.singleCommandSettingsValidator] }, { field: "drillthrough", validators: [n.Validators.singleCommandSettingsValidator] }, { field: "expandCollapse", validators: [n.Validators.singleCommandSettingsValidator] }, { field: "exportData", validators: [n.Validators.singleCommandSettingsValidator] }, { field: "includeExclude", validators: [n.Validators.singleCommandSettingsValidator] }, { field: "removeVisual", validators: [n.Validators.singleCommandSettingsValidator] }, { field: "search", validators: [n.Validators.singleCommandSettingsValidator] }, { field: "seeData", validators: [n.Validators.singleCommandSettingsValidator] }, { field: "sort", validators: [n.Validators.singleCommandSettingsValidator] }, { field: "spotlight", validators: [n.Validators.singleCommandSettingsValidator] }, { field: "insightsAnalysis", validators: [n.Validators.singleCommandSettingsValidator] }, { field: "addComment", validators: [n.Validators.singleCommandSettingsValidator] }, { field: "groupVisualContainers", validators: [n.Validators.singleCommandSettingsValidator] }, { field: "summarize", validators: [n.Validators.singleCommandSettingsValidator] }, { field: "clearSelection", validators: [n.Validators.singleCommandSettingsValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.CommandsSettingsValidator = d;
            var s = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "displayOption", validators: [n.Validators.fieldRequiredValidator, n.Validators.commandDisplayOptionValidator] }, { field: "selector", validators: [n.Validators.visualCommandSelectorValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.SingleCommandSettingsValidator = s;
            var u = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "parameterPanel", validators: [n.Validators.parametersPanelValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.PaginatedReportCommandsValidator = u;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.CustomThemeValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var n2 = [{ field: "themeJson", validators: [new l2.ObjectValidator()] }];
                return new o2.MultipleFieldsValidator(n2).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.CustomThemeValidator = n;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.DashboardLoadValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "accessToken", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "id", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "groupId", validators: [n.Validators.stringValidator] }, { field: "pageView", validators: [n.Validators.pageViewFieldValidator] }, { field: "tokenType", validators: [n.Validators.tokenTypeValidator] }, { field: "embedUrl", validators: [n.Validators.stringValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.DashboardLoadValidator = d;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.DatasetBindingValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "datasetId", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.DatasetBindingValidator = d;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.ExportDataRequestValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var n2 = [{ field: "rows", validators: [new l2.NumberValidator()] }, { field: "exportDataType", validators: [new l2.EnumValidator([0, 1])] }];
                return new o2.MultipleFieldsValidator(n2).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.ExportDataRequestValidator = n;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.ExtensionsValidator = a4.MenuGroupExtensionValidator = a4.ExtensionValidator = a4.CommandExtensionValidator = a4.ExtensionItemValidator = a4.ExtensionPointsValidator = a4.GroupedMenuExtensionValidator = a4.FlatMenuExtensionValidator = a4.MenuExtensionBaseValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "title", validators: [n.Validators.stringValidator] }, { field: "icon", validators: [n.Validators.stringValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.MenuExtensionBaseValidator = d;
            var s = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "menuLocation", validators: [n.Validators.menuLocationValidator] }, { field: "groupName", validators: [n.Validators.fieldForbiddenValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(d);
            a4.FlatMenuExtensionValidator = s;
            var u = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "groupName", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "menuLocation", validators: [n.Validators.fieldForbiddenValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(d);
            a4.GroupedMenuExtensionValidator = u;
            var p = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "visualContextMenu", validators: [n.Validators.menuExtensionValidator] }, { field: "visualOptionsMenu", validators: [n.Validators.menuExtensionValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.ExtensionPointsValidator = p;
            var c = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "name", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "extend", validators: [n.Validators.fieldRequiredValidator, n.Validators.extensionPointsValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.ExtensionItemValidator = c;
            var f = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "title", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "icon", validators: [n.Validators.stringValidator] }, { field: "selector", validators: [n.Validators.commandExtensionSelectorValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(c);
            a4.CommandExtensionValidator = f;
            var V = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "command", validators: [n.Validators.commandExtensionValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.ExtensionValidator = V;
            var v = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "name", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "title", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "menuLocation", validators: [n.Validators.menuLocationValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.MenuGroupExtensionValidator = v;
            var y = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "commands", validators: [n.Validators.fieldRequiredValidator, n.Validators.commandExtensionArrayValidator] }, { field: "groups", validators: [n.Validators.menuGroupExtensionArrayValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.ExtensionsValidator = y;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.OnLoadFiltersValidator = a4.OnLoadFiltersBaseRemoveOperationValidator = a4.OnLoadFiltersBaseValidator = a4.ConditionItemValidator = a4.RemoveFiltersRequestValidator = a4.UpdateFiltersRequestValidator = a4.FilterValidator = a4.HierarchyFilterNodeValidator = a4.HierarchyFilterValidator = a4.IncludeExcludeFilterValidator = a4.NotSupportedFilterValidator = a4.TopNFilterValidator = a4.RelativeTimeFilterValidator = a4.RelativeDateFilterValidator = a4.RelativeDateTimeFilterValidator = a4.AdvancedFilterValidator = a4.BasicFilterValidator = a4.FilterValidatorBase = a4.FilterDisplaySettingsValidator = a4.FilterMeasureTargetValidator = a4.FilterKeyHierarchyTargetValidator = a4.FilterHierarchyTargetValidator = a4.FilterKeyColumnsTargetValidator = a4.FilterColumnTargetValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "table", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "column", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.FilterColumnTargetValidator = d;
            var s = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "keys", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringArrayValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(d);
            a4.FilterKeyColumnsTargetValidator = s;
            var u = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "table", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "hierarchy", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "hierarchyLevel", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.FilterHierarchyTargetValidator = u;
            var p = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "keys", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringArrayValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(u);
            a4.FilterKeyHierarchyTargetValidator = p;
            var c = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "table", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "measure", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.FilterMeasureTargetValidator = c;
            var f = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "isLockedInViewMode", validators: [n.Validators.booleanValidator] }, { field: "isHiddenInViewMode", validators: [n.Validators.booleanValidator] }, { field: "displayName", validators: [n.Validators.stringValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.FilterDisplaySettingsValidator = f;
            var V = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "target", validators: [n.Validators.fieldRequiredValidator, n.Validators.filterTargetValidator] }, { field: "$schema", validators: [n.Validators.stringValidator] }, { field: "filterType", validators: [n.Validators.filterTypeValidator] }, { field: "displaySettings", validators: [n.Validators.filterDisplaySettingsValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.FilterValidatorBase = V;
            var v = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "operator", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "values", validators: [n.Validators.fieldRequiredValidator, n.Validators.anyArrayValidator] }, { field: "filterType", validators: [n.Validators.basicFilterTypeValidator] }, { field: "requireSingleSelection", validators: [n.Validators.booleanValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(V);
            a4.BasicFilterValidator = v;
            var y = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "logicalOperator", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "conditions", validators: [n.Validators.filterConditionsValidator] }, { field: "filterType", validators: [n.Validators.advancedFilterTypeValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(V);
            a4.AdvancedFilterValidator = y;
            var h = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "operator", validators: [n.Validators.fieldRequiredValidator, n.Validators.relativeDateFilterOperatorValidator] }, { field: "timeUnitsCount", validators: [n.Validators.numberValidator] }, { field: "timeUnitType", validators: [n.Validators.fieldRequiredValidator, n.Validators.relativeDateTimeFilterUnitTypeValidator] }, { field: "filterType", validators: [n.Validators.relativeDateTimeFilterTypeValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(V);
            a4.RelativeDateTimeFilterValidator = h;
            var m = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "includeToday", validators: [n.Validators.fieldRequiredValidator, n.Validators.booleanValidator] }, { field: "timeUnitType", validators: [n.Validators.fieldRequiredValidator, n.Validators.relativeDateFilterTimeUnitTypeValidator] }, { field: "filterType", validators: [n.Validators.relativeDateFilterTypeValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(h);
            a4.RelativeDateFilterValidator = m;
            var g = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "timeUnitType", validators: [n.Validators.fieldRequiredValidator, n.Validators.relativeTimeFilterTimeUnitTypeValidator] }, { field: "filterType", validators: [n.Validators.relativeTimeFilterTypeValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(h);
            a4.RelativeTimeFilterValidator = g;
            var w = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "operator", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "itemCount", validators: [n.Validators.fieldRequiredValidator, n.Validators.numberValidator] }, { field: "filterType", validators: [n.Validators.topNFilterTypeValidator] }, { field: "orderBy", validators: [n.Validators.fieldRequiredValidator, n.Validators.filterTargetValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(V);
            a4.TopNFilterValidator = w;
            var b = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "message", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "notSupportedTypeName", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "filterType", validators: [n.Validators.notSupportedFilterTypeValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(V);
            a4.NotSupportedFilterValidator = b;
            var O = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "isExclude", validators: [n.Validators.fieldRequiredValidator, n.Validators.booleanValidator] }, { field: "values", validators: [n.Validators.fieldRequiredValidator, n.Validators.anyArrayValidator] }, { field: "filterType", validators: [n.Validators.includeExludeFilterTypeValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(V);
            a4.IncludeExcludeFilterValidator = O;
            var _ = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "hierarchyData", validators: [n.Validators.fieldRequiredValidator, n.Validators.hierarchyFilterValuesValidator] }, { field: "filterType", validators: [n.Validators.hierarchyFilterTypeValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(V);
            a4.HierarchyFilterValidator = _;
            var S = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "value", validators: [n.Validators.anyValueValidator] }, { field: "keyValues", validators: [n.Validators.anyArrayValidator] }, { field: "children", validators: [n.Validators.hierarchyFilterValuesValidator] }, { field: "operator", validators: [n.Validators.stringValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.HierarchyFilterNodeValidator = S;
            var F = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                return null == a6 ? null : t5.prototype.validate.call(this, a6, e4, r3) || n.Validators.anyFilterValidator.validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.FilterValidator = F;
            var T = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "filtersOperation", validators: [n.Validators.fieldRequiredValidator, n.Validators.filtersOperationsUpdateValidator] }, { field: "filters", validators: [n.Validators.fieldRequiredValidator, n.Validators.filtersArrayValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.UpdateFiltersRequestValidator = T;
            var P = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "filtersOperation", validators: [n.Validators.fieldRequiredValidator, n.Validators.filtersOperationsRemoveAllValidator] }, { field: "filters", validators: [n.Validators.fieldForbiddenValidator, n.Validators.filtersArrayValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.RemoveFiltersRequestValidator = P;
            var C = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "value", validators: [n.Validators.anyValueValidator] }, { field: "operator", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.ConditionItemValidator = C;
            var R = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "operation", validators: [n.Validators.fieldRequiredValidator, n.Validators.filtersOperationsUpdateValidator] }, { field: "filters", validators: [n.Validators.fieldRequiredValidator, n.Validators.filtersArrayValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.OnLoadFiltersBaseValidator = R;
            var k = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "operation", validators: [n.Validators.fieldRequiredValidator, n.Validators.filtersOperationsRemoveAllValidator] }, { field: "filters", validators: [n.Validators.fieldForbiddenValidator, n.Validators.filtersArrayValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.OnLoadFiltersBaseRemoveOperationValidator = k;
            var M = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "allPages", validators: [n.Validators.onLoadFiltersBaseValidator] }, { field: "currentPage", validators: [n.Validators.onLoadFiltersBaseValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.OnLoadFiltersValidator = M;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.PageLayoutValidator = a4.DisplayStateValidator = a4.VisualLayoutValidator = a4.CustomLayoutValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "pageSize", validators: [n.Validators.pageSizeValidator] }, { field: "displayOption", validators: [n.Validators.customLayoutDisplayOptionValidator] }, { field: "pagesLayout", validators: [n.Validators.pagesLayoutValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.CustomLayoutValidator = d;
            var s = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "x", validators: [n.Validators.numberValidator] }, { field: "y", validators: [n.Validators.numberValidator] }, { field: "z", validators: [n.Validators.numberValidator] }, { field: "width", validators: [n.Validators.numberValidator] }, { field: "height", validators: [n.Validators.numberValidator] }, { field: "displayState", validators: [n.Validators.displayStateValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.VisualLayoutValidator = s;
            var u = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "mode", validators: [n.Validators.displayStateModeValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.DisplayStateValidator = u;
            var p = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "visualsLayout", validators: [n.Validators.fieldRequiredValidator, n.Validators.pageLayoutValidator] }, { field: "defaultLayout", validators: [n.Validators.visualLayoutValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.PageLayoutValidator = p;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.PageViewFieldValidator = a4.PageValidator = a4.CustomPageSizeValidator = a4.PageSizeValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "type", validators: [n.Validators.fieldRequiredValidator, n.Validators.pageSizeTypeValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.PageSizeValidator = d;
            var s = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "width", validators: [n.Validators.numberValidator] }, { field: "height", validators: [n.Validators.numberValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(d);
            a4.CustomPageSizeValidator = s;
            var u = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "name", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.PageValidator = u;
            var p = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                return null == a6 ? null : t5.prototype.validate.call(this, a6, e4, r3) || (["actualSize", "fitToWidth", "oneColumn"].indexOf(a6) < 0 ? [{ message: 'pageView must be a string with one of the following values: "actualSize", "fitToWidth", "oneColumn"' }] : null);
              }, a5;
            }(l2.StringValidator);
            a4.PageViewFieldValidator = p;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.VisualizationsPaneValidator = a4.SyncSlicersPaneValidator = a4.SelectionPaneValidator = a4.PageNavigationPaneValidator = a4.FiltersPaneValidator = a4.FieldsPaneValidator = a4.BookmarksPaneValidator = a4.QnaPanesValidator = a4.ReportPanesValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "bookmarks", validators: [n.Validators.bookmarksPaneValidator] }, { field: "fields", validators: [n.Validators.fieldsPaneValidator] }, { field: "filters", validators: [n.Validators.filtersPaneValidator] }, { field: "pageNavigation", validators: [n.Validators.pageNavigationPaneValidator] }, { field: "selection", validators: [n.Validators.selectionPaneValidator] }, { field: "syncSlicers", validators: [n.Validators.syncSlicersPaneValidator] }, { field: "visualizations", validators: [n.Validators.visualizationsPaneValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.ReportPanesValidator = d;
            var s = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "filters", validators: [n.Validators.filtersPaneValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.QnaPanesValidator = s;
            var u = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "visible", validators: [n.Validators.booleanValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.BookmarksPaneValidator = u;
            var p = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "expanded", validators: [n.Validators.booleanValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.FieldsPaneValidator = p;
            var c = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "visible", validators: [n.Validators.booleanValidator] }, { field: "expanded", validators: [n.Validators.booleanValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.FiltersPaneValidator = c;
            var f = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "visible", validators: [n.Validators.booleanValidator] }, { field: "position", validators: [n.Validators.pageNavigationPositionValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.PageNavigationPaneValidator = f;
            var V = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "visible", validators: [n.Validators.booleanValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.SelectionPaneValidator = V;
            var v = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "visible", validators: [n.Validators.booleanValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.SyncSlicersPaneValidator = v;
            var y = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "expanded", validators: [n.Validators.booleanValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.VisualizationsPaneValidator = y;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.QnaInterpretInputDataValidator = a4.QnaSettingsValidator = a4.LoadQnaValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "accessToken", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "datasetIds", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringArrayValidator] }, { field: "question", validators: [n.Validators.stringValidator] }, { field: "viewMode", validators: [n.Validators.viewModeValidator] }, { field: "settings", validators: [n.Validators.qnaSettingValidator] }, { field: "tokenType", validators: [n.Validators.tokenTypeValidator] }, { field: "groupId", validators: [n.Validators.stringValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.LoadQnaValidator = d;
            var s = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "filterPaneEnabled", validators: [n.Validators.booleanValidator] }, { field: "hideErrors", validators: [n.Validators.booleanValidator] }, { field: "panes", validators: [n.Validators.qnaPanesValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.QnaSettingsValidator = s;
            var u = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "datasetIds", validators: [n.Validators.stringArrayValidator] }, { field: "question", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.QnaInterpretInputDataValidator = u;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.ReportCreateValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "accessToken", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "datasetId", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "groupId", validators: [n.Validators.stringValidator] }, { field: "tokenType", validators: [n.Validators.tokenTypeValidator] }, { field: "theme", validators: [n.Validators.customThemeValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.ReportCreateValidator = d;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.ReportLoadValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "accessToken", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "id", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "groupId", validators: [n.Validators.stringValidator] }, { field: "settings", validators: [n.Validators.settingsValidator] }, { field: "pageName", validators: [n.Validators.stringValidator] }, { field: "filters", validators: [n.Validators.reportLoadFiltersValidator] }, { field: "permissions", validators: [n.Validators.permissionsValidator] }, { field: "viewMode", validators: [n.Validators.viewModeValidator] }, { field: "tokenType", validators: [n.Validators.tokenTypeValidator] }, { field: "bookmark", validators: [n.Validators.applyBookmarkValidator] }, { field: "theme", validators: [n.Validators.customThemeValidator] }, { field: "embedUrl", validators: [n.Validators.stringValidator] }, { field: "datasetBinding", validators: [n.Validators.datasetBindingValidator] }, { field: "contrastMode", validators: [n.Validators.contrastModeValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.ReportLoadValidator = d;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.ReportParameterFieldsValidator = a4.PaginatedReportLoadValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "accessToken", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "id", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "groupId", validators: [n.Validators.stringValidator] }, { field: "settings", validators: [n.Validators.paginatedReportsettingsValidator] }, { field: "tokenType", validators: [n.Validators.tokenTypeValidator] }, { field: "embedUrl", validators: [n.Validators.stringValidator] }, { field: "type", validators: [n.Validators.stringValidator] }, { field: "parameterValues", validators: [n.Validators.parameterValuesArrayValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.PaginatedReportLoadValidator = d;
            var s = function() {
              function t5() {
              }
              return t5.prototype.validate = function(t6, a5, e4) {
                if (null == t6)
                  return null;
                var r3 = [{ field: "name", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "value", validators: [n.Validators.stringValidator] }];
                return new o2.MultipleFieldsValidator(r3).validate(t6, a5, e4);
              }, t5;
            }();
            a4.ReportParameterFieldsValidator = s;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.SaveAsParametersValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "name", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.SaveAsParametersValidator = d;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.SlicerTargetSelectorValidator = a4.VisualTypeSelectorValidator = a4.VisualSelectorValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(4), d = e3(1), s = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "$schema", validators: [d.Validators.stringValidator, new n.SchemaValidator("http://powerbi.com/product/schema#visualSelector")] }, { field: "visualName", validators: [d.Validators.fieldRequiredValidator, d.Validators.stringValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.VisualSelectorValidator = s;
            var u = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "$schema", validators: [d.Validators.fieldRequiredValidator, d.Validators.stringValidator, new n.SchemaValidator("http://powerbi.com/product/schema#visualTypeSelector")] }, { field: "visualType", validators: [d.Validators.fieldRequiredValidator, d.Validators.stringValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.VisualTypeSelectorValidator = u;
            var p = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "$schema", validators: [d.Validators.fieldRequiredValidator, d.Validators.stringValidator, new n.SchemaValidator("http://powerbi.com/product/schema#slicerTargetSelector")] }, { field: "target", validators: [d.Validators.fieldRequiredValidator, d.Validators.slicerTargetValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.SlicerTargetSelectorValidator = p;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.PaginatedReportSettingsValidator = a4.SettingsValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "filterPaneEnabled", validators: [n.Validators.booleanValidator] }, { field: "navContentPaneEnabled", validators: [n.Validators.booleanValidator] }, { field: "bookmarksPaneEnabled", validators: [n.Validators.booleanValidator] }, { field: "useCustomSaveAsDialog", validators: [n.Validators.booleanValidator] }, { field: "extensions", validators: [n.Validators.extensionsValidator] }, { field: "layoutType", validators: [n.Validators.layoutTypeValidator] }, { field: "customLayout", validators: [n.Validators.customLayoutValidator] }, { field: "background", validators: [n.Validators.backgroundValidator] }, { field: "visualSettings", validators: [n.Validators.visualSettingsValidator] }, { field: "hideErrors", validators: [n.Validators.booleanValidator] }, { field: "commands", validators: [n.Validators.commandsSettingsArrayValidator] }, { field: "hyperlinkClickBehavior", validators: [n.Validators.hyperlinkClickBehaviorValidator] }, { field: "bars", validators: [n.Validators.reportBarsValidator] }, { field: "panes", validators: [n.Validators.reportPanesValidator] }, { field: "personalBookmarksEnabled", validators: [n.Validators.booleanValidator] }, { field: "persistentFiltersEnabled", validators: [n.Validators.booleanValidator] }, { field: "visualRenderedEvents", validators: [n.Validators.booleanValidator] }, { field: "authoringHintsEnabled", validators: [n.Validators.booleanValidator] }, { field: "printSettings", validators: [n.Validators.printSettingsValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.SettingsValidator = d;
            var s = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "commands", validators: [n.Validators.paginatedReportCommandsValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.PaginatedReportSettingsValidator = s;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.SlicerStateValidator = a4.SlicerValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "selector", validators: [n.Validators.fieldRequiredValidator, n.Validators.slicerSelectorValidator] }, { field: "state", validators: [n.Validators.fieldRequiredValidator, n.Validators.slicerStateValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.SlicerValidator = d;
            var s = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "filters", validators: [n.Validators.filtersArrayValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.SlicerStateValidator = s;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.TileLoadValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "accessToken", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "id", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "dashboardId", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "groupId", validators: [n.Validators.stringValidator] }, { field: "pageView", validators: [n.Validators.stringValidator] }, { field: "tokenType", validators: [n.Validators.tokenTypeValidator] }, { field: "width", validators: [n.Validators.numberValidator] }, { field: "height", validators: [n.Validators.numberValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.TileLoadValidator = d;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.VisualHeaderValidator = a4.VisualHeaderSettingsValidator = a4.VisualSettingsValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "visualHeaders", validators: [n.Validators.visualHeadersValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.VisualSettingsValidator = d;
            var s = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "visible", validators: [n.Validators.booleanValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.VisualHeaderSettingsValidator = s;
            var u = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "settings", validators: [n.Validators.fieldRequiredValidator, n.Validators.visualHeaderSettingsValidator] }, { field: "selector", validators: [n.Validators.visualHeaderSelectorValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.VisualHeaderValidator = u;
          }, (t4, a4) => {
            Object.defineProperty(a4, "__esModule", { value: true }), a4.AnyOfValidator = void 0;
            var e3 = function() {
              function t5(t6) {
                this.validators = t6;
              }
              return t5.prototype.validate = function(t6, a5, e4) {
                if (null == t6)
                  return null;
                for (var r2 = false, i2 = 0, o2 = this.validators; i2 < o2.length; i2++)
                  if (!o2[i2].validate(t6, a5, e4)) {
                    r2 = true;
                    break;
                  }
                return r2 ? null : [{ message: e4 + " property is invalid", path: (a5 ? a5 + "." : "") + e4, keyword: "invalid" }];
              }, t5;
            }();
            a4.AnyOfValidator = e3;
          }, (t4, a4) => {
            Object.defineProperty(a4, "__esModule", { value: true }), a4.FieldForbiddenValidator = void 0;
            var e3 = function() {
              function t5() {
              }
              return t5.prototype.validate = function(t6, a5, e4) {
                return void 0 !== t6 ? [{ message: e4 + " is forbidden", path: (a5 ? a5 + "." : "") + e4, keyword: "forbidden" }] : null;
              }, t5;
            }();
            a4.FieldForbiddenValidator = e3;
          }, (t4, a4) => {
            Object.defineProperty(a4, "__esModule", { value: true }), a4.FieldRequiredValidator = void 0;
            var e3 = function() {
              function t5() {
              }
              return t5.prototype.validate = function(t6, a5, e4) {
                return null == t6 ? [{ message: e4 + " is required", path: (a5 ? a5 + "." : "") + e4, keyword: "required" }] : null;
              }, t5;
            }();
            a4.FieldRequiredValidator = e3;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.MapValidator = void 0;
            var o2 = function(t5) {
              function a5(a6, e4) {
                var r3 = t5.call(this) || this;
                return r3.keyValidators = a6, r3.valueValidators = e4, r3;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                for (var o3 in a6)
                  if (a6.hasOwnProperty(o3)) {
                    for (var l2 = (e4 ? e4 + "." : "") + r3 + "." + o3, n = 0, d = this.keyValidators; n < d.length; n++)
                      if (i3 = d[n].validate(o3, l2, r3))
                        return i3;
                    for (var s = 0, u = this.valueValidators; s < u.length; s++)
                      if (i3 = u[s].validate(a6[o3], l2, r3))
                        return i3;
                  }
                return null;
              }, a5;
            }(e3(4).ObjectValidator);
            a4.MapValidator = o2;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.ParametersPanelValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "expanded", validators: [n.Validators.booleanValidator] }, { field: "enabled", validators: [n.Validators.booleanValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.ParametersPanelValidator = d;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.TableDataValidator = a4.TableSchemaValidator = a4.ColumnSchemaValidator = a4.CredentialsValidator = a4.DatasourceConnectionConfigValidator = a4.DatasetCreateConfigValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "locale", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "mashupDocument", validators: [n.Validators.stringValidator] }, { field: "datasourceConnectionConfig", validators: [n.Validators.datasourceConnectionConfigValidator] }, { field: "tableSchemaList", validators: [n.Validators.tableSchemaListValidator] }, { field: "data", validators: [n.Validators.tableDataArrayValidator] }];
                return (i3 = new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3)) || (a6.datasourceConnectionConfig && null == a6.mashupDocument ? [{ message: "mashupDocument cannot be empty when datasourceConnectionConfig is presented" }] : a6.data && null == a6.tableSchemaList ? [{ message: "tableSchemaList cannot be empty when data is provided" }] : null == a6.data && null == a6.mashupDocument ? [{ message: "At least one of data or mashupDocument must be provided" }] : void 0);
              }, a5;
            }(l2.ObjectValidator);
            a4.DatasetCreateConfigValidator = d;
            var s = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "dataCacheMode", validators: [n.Validators.dataCacheModeValidator] }, { field: "credentials", validators: [n.Validators.credentialsValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.DatasourceConnectionConfigValidator = s;
            var u = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "credentialType", validators: [n.Validators.credentialTypeValidator] }, { field: "credentialDetails", validators: [n.Validators.credentialDetailsValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.CredentialsValidator = u;
            var p = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "name", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "displayName", validators: [n.Validators.stringValidator] }, { field: "dataType", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.ColumnSchemaValidator = p;
            var c = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "name", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "columns", validators: [n.Validators.fieldRequiredValidator, n.Validators.columnSchemaArrayValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.TableSchemaValidator = c;
            var f = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "name", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "rows", validators: [n.Validators.fieldRequiredValidator, n.Validators.rawDataValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.TableDataValidator = f;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.QuickCreateValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = e3(1), d = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var l3 = [{ field: "accessToken", validators: [n.Validators.fieldRequiredValidator, n.Validators.stringValidator] }, { field: "groupId", validators: [n.Validators.stringValidator] }, { field: "tokenType", validators: [n.Validators.tokenTypeValidator] }, { field: "theme", validators: [n.Validators.customThemeValidator] }, { field: "datasetCreateConfig", validators: [n.Validators.fieldRequiredValidator, n.Validators.datasetCreateConfigValidator] }];
                return new o2.MultipleFieldsValidator(l3).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.QuickCreateValidator = d;
          }, function(t4, a4, e3) {
            var r2, i2 = this && this.__extends || (r2 = function(t5, a5) {
              return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, a6) {
                t6.__proto__ = a6;
              } || function(t6, a6) {
                for (var e4 in a6)
                  Object.prototype.hasOwnProperty.call(a6, e4) && (t6[e4] = a6[e4]);
              }, r2(t5, a5);
            }, function(t5, a5) {
              if ("function" != typeof a5 && null !== a5)
                throw new TypeError("Class extends value " + String(a5) + " is not a constructor or null");
              function e4() {
                this.constructor = t5;
              }
              r2(t5, a5), t5.prototype = null === a5 ? Object.create(a5) : (e4.prototype = a5.prototype, new e4());
            });
            Object.defineProperty(a4, "__esModule", { value: true }), a4.PrintSettingsValidator = void 0;
            var o2 = e3(3), l2 = e3(4), n = function(t5) {
              function a5() {
                return null !== t5 && t5.apply(this, arguments) || this;
              }
              return i2(a5, t5), a5.prototype.validate = function(a6, e4, r3) {
                if (null == a6)
                  return null;
                var i3 = t5.prototype.validate.call(this, a6, e4, r3);
                if (i3)
                  return i3;
                var n2 = [{ field: "browserPrintAdjustmentsMode", validators: [new l2.EnumValidator([0, 1])] }];
                return new o2.MultipleFieldsValidator(n2).validate(a6, e4, r3);
              }, a5;
            }(l2.ObjectValidator);
            a4.PrintSettingsValidator = n;
          }], a3 = {}, e2 = function e3(r2) {
            var i2 = a3[r2];
            if (void 0 !== i2)
              return i2.exports;
            var o2 = a3[r2] = { exports: {} };
            return t3[r2].call(o2.exports, o2, o2.exports, e3), o2.exports;
          }(0);
          return e2;
        })(), t2.exports = a2();
      }, 890: (t2) => {
        "use strict";
        t2.exports = e;
      }, 719: (t2) => {
        "use strict";
        t2.exports = a;
      }, 156: (a2) => {
        "use strict";
        a2.exports = t;
      } }, i = {};
      function o(t2) {
        var a2 = i[t2];
        if (void 0 !== a2)
          return a2.exports;
        var e2 = i[t2] = { exports: {} };
        return r[t2].call(e2.exports, e2, e2.exports, o), e2.exports;
      }
      o.n = (t2) => {
        var a2 = t2 && t2.__esModule ? () => t2.default : () => t2;
        return o.d(a2, { a: a2 }), a2;
      }, o.d = (t2, a2) => {
        for (var e2 in a2)
          o.o(a2, e2) && !o.o(t2, e2) && Object.defineProperty(t2, e2, { enumerable: true, get: a2[e2] });
      }, o.o = (t2, a2) => Object.prototype.hasOwnProperty.call(t2, a2), o.r = (t2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
      };
      var l = {};
      return (() => {
        "use strict";
        o.r(l), o.d(l, { EmbedType: () => a2, PowerBIEmbed: () => f });
        var t2, a2, e2 = o(156), r2 = o(719), i2 = o(149), n = o(890), d = o.n(n), s = (t2 = function(a3, e3) {
          return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, a4) {
            t3.__proto__ = a4;
          } || function(t3, a4) {
            for (var e4 in a4)
              Object.prototype.hasOwnProperty.call(a4, e4) && (t3[e4] = a4[e4]);
          }, t2(a3, e3);
        }, function(a3, e3) {
          if ("function" != typeof e3 && null !== e3)
            throw new TypeError("Class extends value " + String(e3) + " is not a constructor or null");
          function r3() {
            this.constructor = a3;
          }
          t2(a3, e3), a3.prototype = null === e3 ? Object.create(e3) : (r3.prototype = e3.prototype, new r3());
        }), u = function(t3, a3, e3, r3) {
          return new (e3 || (e3 = Promise))(function(i3, o2) {
            function l2(t4) {
              try {
                d2(r3.next(t4));
              } catch (t5) {
                o2(t5);
              }
            }
            function n2(t4) {
              try {
                d2(r3.throw(t4));
              } catch (t5) {
                o2(t5);
              }
            }
            function d2(t4) {
              var a4;
              t4.done ? i3(t4.value) : (a4 = t4.value, a4 instanceof e3 ? a4 : new e3(function(t5) {
                t5(a4);
              })).then(l2, n2);
            }
            d2((r3 = r3.apply(t3, a3 || [])).next());
          });
        }, p = function(t3, a3) {
          var e3, r3, i3, o2, l2 = { label: 0, sent: function() {
            if (1 & i3[0])
              throw i3[1];
            return i3[1];
          }, trys: [], ops: [] };
          return o2 = { next: n2(0), throw: n2(1), return: n2(2) }, "function" == typeof Symbol && (o2[Symbol.iterator] = function() {
            return this;
          }), o2;
          function n2(n3) {
            return function(d2) {
              return function(n4) {
                if (e3)
                  throw new TypeError("Generator is already executing.");
                for (; o2 && (o2 = 0, n4[0] && (l2 = 0)), l2; )
                  try {
                    if (e3 = 1, r3 && (i3 = 2 & n4[0] ? r3.return : n4[0] ? r3.throw || ((i3 = r3.return) && i3.call(r3), 0) : r3.next) && !(i3 = i3.call(r3, n4[1])).done)
                      return i3;
                    switch (r3 = 0, i3 && (n4 = [2 & n4[0], i3.value]), n4[0]) {
                      case 0:
                      case 1:
                        i3 = n4;
                        break;
                      case 4:
                        return l2.label++, { value: n4[1], done: false };
                      case 5:
                        l2.label++, r3 = n4[1], n4 = [0];
                        continue;
                      case 7:
                        n4 = l2.ops.pop(), l2.trys.pop();
                        continue;
                      default:
                        if (!((i3 = (i3 = l2.trys).length > 0 && i3[i3.length - 1]) || 6 !== n4[0] && 2 !== n4[0])) {
                          l2 = 0;
                          continue;
                        }
                        if (3 === n4[0] && (!i3 || n4[1] > i3[0] && n4[1] < i3[3])) {
                          l2.label = n4[1];
                          break;
                        }
                        if (6 === n4[0] && l2.label < i3[1]) {
                          l2.label = i3[1], i3 = n4;
                          break;
                        }
                        if (i3 && l2.label < i3[2]) {
                          l2.label = i3[2], l2.ops.push(n4);
                          break;
                        }
                        i3[2] && l2.ops.pop(), l2.trys.pop();
                        continue;
                    }
                    n4 = a3.call(t3, l2);
                  } catch (t4) {
                    n4 = [6, t4], r3 = 0;
                  } finally {
                    e3 = i3 = 0;
                  }
                if (5 & n4[0])
                  throw n4[1];
                return { value: n4[0] ? n4[1] : void 0, done: true };
              }([n3, d2]);
            };
          }
        }, c = function(t3, a3, e3) {
          if (e3 || 2 === arguments.length)
            for (var r3, i3 = 0, o2 = a3.length; i3 < o2; i3++)
              !r3 && i3 in a3 || (r3 || (r3 = Array.prototype.slice.call(a3, 0, i3)), r3[i3] = a3[i3]);
          return t3.concat(r3 || Array.prototype.slice.call(a3));
        };
        !function(t3) {
          t3.Create = "create", t3.Report = "report", t3.Dashboard = "dashboard", t3.Tile = "tile", t3.Qna = "qna", t3.Visual = "visual";
        }(a2 || (a2 = {}));
        var f = function(t3) {
          function o2(a3) {
            var i3 = t3.call(this, a3) || this;
            return i3.containerRef = e2.createRef(), i3.prevEventHandlerMapString = "", i3.props.service ? i3.powerbi = i3.props.service : i3.powerbi = new r2.service.Service(r2.factories.hpmFactory, r2.factories.wpmpFactory, r2.factories.routerFactory), i3.powerbi.setSdkInfo("powerbi-client-react", "1.4.0"), i3;
          }
          return s(o2, t3), Object.defineProperty(o2.prototype, "embed", { get: function() {
            return this._embed;
          }, set: function(t4) {
            this._embed = t4, this.invokeGetEmbedCallback();
          }, enumerable: false, configurable: true }), o2.prototype.componentDidMount = function() {
            this.containerRef.current && (this.props.embedConfig.accessToken && this.props.embedConfig.embedUrl ? this.embedEntity() : this.embed = this.powerbi.bootstrap(this.containerRef.current, this.props.embedConfig)), this.props.eventHandlers && this.embed && this.setEventHandlers(this.embed, this.props.eventHandlers);
          }, o2.prototype.componentDidUpdate = function(t4) {
            return u(this, void 0, void 0, function() {
              var e3, r3, o3, l2;
              return p(this, function(n2) {
                switch (n2.label) {
                  case 0:
                    return this.embedOrUpdateAccessToken(t4), this.props.eventHandlers && this.embed && this.setEventHandlers(this.embed, this.props.eventHandlers), d()(this.props.embedConfig.settings, t4.embedConfig.settings) ? [3, 2] : [4, this.updateSettings()];
                  case 1:
                    n2.sent(), n2.label = 2;
                  case 2:
                    if (this.props.embedConfig.type !== a2.Report)
                      return [3, 11];
                    n2.label = 3;
                  case 3:
                    return n2.trys.push([3, 10, , 11]), e3 = this.props.embedConfig, r3 = e3.filters, o3 = t4.embedConfig, e3.pageName && e3.pageName !== o3.pageName ? [4, this.embed.setPage(e3.pageName)] : [3, 5];
                  case 4:
                    n2.sent(), n2.label = 5;
                  case 5:
                    return !r3 || d()(r3, o3.filters) ? [3, 7] : [4, this.embed.updateFilters(i2.FiltersOperations.Replace, r3)];
                  case 6:
                    return n2.sent(), [3, 9];
                  case 7:
                    return r3 || !o3.filters ? [3, 9] : [4, this.embed.updateFilters(i2.FiltersOperations.RemoveAll)];
                  case 8:
                    n2.sent(), n2.label = 9;
                  case 9:
                    return [3, 11];
                  case 10:
                    return l2 = n2.sent(), console.error(l2), [3, 11];
                  case 11:
                    return [2];
                }
              });
            });
          }, o2.prototype.componentWillUnmount = function() {
            this.containerRef.current && this.powerbi.reset(this.containerRef.current), this.prevEventHandlerMapString = "";
          }, o2.prototype.render = function() {
            return e2.createElement("div", { ref: this.containerRef, className: this.props.cssClassName });
          }, o2.prototype.embedEntity = function() {
            this.containerRef.current && (this.props.phasedEmbedding && this.props.embedConfig.type === a2.Report ? this.embed = this.powerbi.load(this.containerRef.current, this.props.embedConfig) : (this.props.phasedEmbedding && console.error("Phased embedding is not supported for type ".concat(this.props.embedConfig.type)), this.props.embedConfig.type === a2.Create ? this.embed = this.powerbi.createReport(this.containerRef.current, this.props.embedConfig) : this.embed = this.powerbi.embed(this.containerRef.current, this.props.embedConfig)));
          }, o2.prototype.embedOrUpdateAccessToken = function(t4) {
            return u(this, void 0, void 0, function() {
              var a3;
              return p(this, function(e3) {
                switch (e3.label) {
                  case 0:
                    return this.props.embedConfig.accessToken && this.props.embedConfig.embedUrl ? !this.containerRef.current || t4.embedConfig.accessToken && this.props.embedConfig.embedUrl === t4.embedConfig.embedUrl ? [3, 1] : (this.embedEntity(), [3, 5]) : [2];
                  case 1:
                    if (this.props.embedConfig.accessToken === t4.embedConfig.accessToken || this.props.embedConfig.embedUrl !== t4.embedConfig.embedUrl || !this.embed)
                      return [3, 5];
                    e3.label = 2;
                  case 2:
                    return e3.trys.push([2, 4, , 5]), [4, this.embed.setAccessToken(this.props.embedConfig.accessToken)];
                  case 3:
                    return e3.sent(), [3, 5];
                  case 4:
                    return a3 = e3.sent(), console.error("setAccessToken error:\n", a3), [3, 5];
                  case 5:
                    return [2];
                }
              });
            });
          }, o2.prototype.setEventHandlers = function(t4, e3) {
            var i3 = this, o3 = function(t5) {
              if (!t5)
                return "";
              var a3 = Array.from(t5);
              return JSON.stringify(a3.map(function(t6) {
                return [t6[0], t6[1] ? t6[1].toString() : ""];
              }));
            }(this.props.eventHandlers);
            if (this.prevEventHandlerMapString !== o3) {
              this.prevEventHandlerMapString = o3;
              var l2 = r2.Embed.allowedEvents, n2 = t4.embedtype;
              switch (n2) {
                case a2.Create:
                  break;
                case a2.Report:
                  l2 = c(c([], l2, true), r2.Report.allowedEvents, true);
                  break;
                case a2.Dashboard:
                  l2 = c(c([], l2, true), r2.Dashboard.allowedEvents, true);
                  break;
                case a2.Tile:
                  l2 = c(c([], l2, true), r2.Tile.allowedEvents, true);
                  break;
                case a2.Qna:
                  l2 = c(c([], l2, true), r2.Qna.allowedEvents, true);
                  break;
                case a2.Visual:
                  l2 = c(c([], l2, true), r2.Visual.allowedEvents, true);
                  break;
                default:
                  console.error("Invalid embed type ".concat(n2));
              }
              var d2 = [];
              e3.forEach(function(a3, e4) {
                l2.includes(e4) ? (t4.off(e4), a3 && t4.on(e4, function(t5) {
                  a3(t5, i3.embed);
                })) : d2.push(e4);
              }), d2.length && console.error("Following events are invalid: ".concat(d2.join(",")));
            }
          }, o2.prototype.invokeGetEmbedCallback = function() {
            this.props.getEmbeddedComponent && this.embed && this.props.getEmbeddedComponent(this.embed);
          }, o2.prototype.updateSettings = function() {
            return u(this, void 0, void 0, function() {
              var t4, e3;
              return p(this, function(r3) {
                switch (r3.label) {
                  case 0:
                    if (!this.embed || !this.props.embedConfig.settings)
                      return [2];
                    switch (this.props.embedConfig.type) {
                      case a2.Report:
                        return [3, 1];
                      case a2.Dashboard:
                      case a2.Tile:
                      case a2.Qna:
                      case a2.Visual:
                        return [3, 6];
                    }
                    return [3, 7];
                  case 1:
                    t4 = this.props.embedConfig.settings, r3.label = 2;
                  case 2:
                    return r3.trys.push([2, 4, , 5]), [4, this.embed.updateSettings(t4)];
                  case 3:
                    return r3.sent(), [3, 5];
                  case 4:
                    return e3 = r3.sent(), console.error("Error in method updateSettings: ".concat(e3)), [3, 5];
                  case 5:
                  case 6:
                    return [3, 8];
                  case 7:
                    console.error("Invalid embed type ".concat(this.props.embedConfig.type)), r3.label = 8;
                  case 8:
                    return [2];
                }
              });
            });
          }, o2;
        }(e2.Component);
      })(), l;
    })());
  }
});
export default require_powerbi_client_react();
//# sourceMappingURL=powerbi-client-react.js.map
