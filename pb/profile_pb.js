// source: profile.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var page_pb = require('./page_pb.js');
goog.object.extend(proto, page_pb);
goog.exportSymbol('proto.pb.Profile', null, global);
goog.exportSymbol('proto.pb.ProfileId', null, global);
goog.exportSymbol('proto.pb.ProfileList', null, global);
goog.exportSymbol('proto.pb.ProfileQuery', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.Profile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.Profile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.Profile.displayName = 'proto.pb.Profile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ProfileId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ProfileId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ProfileId.displayName = 'proto.pb.ProfileId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ProfileList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.ProfileList.repeatedFields_, null);
};
goog.inherits(proto.pb.ProfileList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ProfileList.displayName = 'proto.pb.ProfileList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ProfileQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ProfileQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ProfileQuery.displayName = 'proto.pb.ProfileQuery';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.Profile.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.Profile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.Profile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Profile.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    firstname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    lastname: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    avatarurl: jspb.Message.getFieldWithDefault(msg, 7, ""),
    coverurl: jspb.Message.getFieldWithDefault(msg, 8, ""),
    bannerurl: jspb.Message.getFieldWithDefault(msg, 9, ""),
    ethaddress: jspb.Message.getFieldWithDefault(msg, 11, ""),
    dotaddress: jspb.Message.getFieldWithDefault(msg, 12, ""),
    erdaddress: jspb.Message.getFieldWithDefault(msg, 13, ""),
    soladdress: jspb.Message.getFieldWithDefault(msg, 14, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.Profile}
 */
proto.pb.Profile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.Profile;
  return proto.pb.Profile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.Profile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.Profile}
 */
proto.pb.Profile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarurl(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCoverurl(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setBannerurl(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setEthaddress(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setDotaddress(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setErdaddress(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setSoladdress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.Profile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.Profile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.Profile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Profile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeString(
      13,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.pb.Profile.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.pb.Profile.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Profile.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.pb.Profile.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.setEmail = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.clearEmail = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Profile.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string firstName = 4;
 * @return {string}
 */
proto.pb.Profile.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.setFirstname = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.clearFirstname = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Profile.prototype.hasFirstname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string lastName = 5;
 * @return {string}
 */
proto.pb.Profile.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.setLastname = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.clearLastname = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Profile.prototype.hasLastname = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.pb.Profile.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Profile.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string avatarUrl = 7;
 * @return {string}
 */
proto.pb.Profile.prototype.getAvatarurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.setAvatarurl = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.clearAvatarurl = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Profile.prototype.hasAvatarurl = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string coverUrl = 8;
 * @return {string}
 */
proto.pb.Profile.prototype.getCoverurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.setCoverurl = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.clearCoverurl = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Profile.prototype.hasCoverurl = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string bannerUrl = 9;
 * @return {string}
 */
proto.pb.Profile.prototype.getBannerurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.setBannerurl = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.clearBannerurl = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Profile.prototype.hasBannerurl = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string ethAddress = 11;
 * @return {string}
 */
proto.pb.Profile.prototype.getEthaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.setEthaddress = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.clearEthaddress = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Profile.prototype.hasEthaddress = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string dotAddress = 12;
 * @return {string}
 */
proto.pb.Profile.prototype.getDotaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.setDotaddress = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.clearDotaddress = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Profile.prototype.hasDotaddress = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string erdAddress = 13;
 * @return {string}
 */
proto.pb.Profile.prototype.getErdaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.setErdaddress = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.clearErdaddress = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Profile.prototype.hasErdaddress = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string solAddress = 14;
 * @return {string}
 */
proto.pb.Profile.prototype.getSoladdress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.setSoladdress = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.Profile} returns this
 */
proto.pb.Profile.prototype.clearSoladdress = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Profile.prototype.hasSoladdress = function() {
  return jspb.Message.getField(this, 14) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ProfileId.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ProfileId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ProfileId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ProfileId.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ProfileId}
 */
proto.pb.ProfileId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ProfileId;
  return proto.pb.ProfileId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ProfileId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ProfileId}
 */
proto.pb.ProfileId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ProfileId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ProfileId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ProfileId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ProfileId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.pb.ProfileId.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.ProfileId} returns this
 */
proto.pb.ProfileId.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.ProfileList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ProfileList.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ProfileList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ProfileList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ProfileList.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.pb.Profile.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ProfileList}
 */
proto.pb.ProfileList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ProfileList;
  return proto.pb.ProfileList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ProfileList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ProfileList}
 */
proto.pb.ProfileList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.Profile;
      reader.readMessage(value,proto.pb.Profile.deserializeBinaryFromReader);
      msg.addValues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ProfileList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ProfileList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ProfileList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ProfileList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.Profile.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Profile values = 1;
 * @return {!Array<!proto.pb.Profile>}
 */
proto.pb.ProfileList.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.pb.Profile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.Profile, 1));
};


/**
 * @param {!Array<!proto.pb.Profile>} value
 * @return {!proto.pb.ProfileList} returns this
*/
proto.pb.ProfileList.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Profile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Profile}
 */
proto.pb.ProfileList.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Profile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.ProfileList} returns this
 */
proto.pb.ProfileList.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ProfileQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ProfileQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ProfileQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ProfileQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    page: (f = msg.getPage()) && page_pb.Page.toObject(includeInstance, f),
    sorting: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ethaddress: jspb.Message.getFieldWithDefault(msg, 11, ""),
    dotaddress: jspb.Message.getFieldWithDefault(msg, 12, ""),
    erdaddress: jspb.Message.getFieldWithDefault(msg, 13, ""),
    soladdress: jspb.Message.getFieldWithDefault(msg, 14, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ProfileQuery}
 */
proto.pb.ProfileQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ProfileQuery;
  return proto.pb.ProfileQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ProfileQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ProfileQuery}
 */
proto.pb.ProfileQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new page_pb.Page;
      reader.readMessage(value,page_pb.Page.deserializeBinaryFromReader);
      msg.setPage(value);
      break;
    case 2:
      var value = /** @type {!proto.pb.Sorting} */ (reader.readEnum());
      msg.setSorting(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setEthaddress(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setDotaddress(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setErdaddress(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setSoladdress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ProfileQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ProfileQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ProfileQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ProfileQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      page_pb.Page.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.pb.Sorting} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeString(
      13,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional Page page = 1;
 * @return {?proto.pb.Page}
 */
proto.pb.ProfileQuery.prototype.getPage = function() {
  return /** @type{?proto.pb.Page} */ (
    jspb.Message.getWrapperField(this, page_pb.Page, 1));
};


/**
 * @param {?proto.pb.Page|undefined} value
 * @return {!proto.pb.ProfileQuery} returns this
*/
proto.pb.ProfileQuery.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.ProfileQuery} returns this
 */
proto.pb.ProfileQuery.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ProfileQuery.prototype.hasPage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Sorting sorting = 2;
 * @return {!proto.pb.Sorting}
 */
proto.pb.ProfileQuery.prototype.getSorting = function() {
  return /** @type {!proto.pb.Sorting} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pb.Sorting} value
 * @return {!proto.pb.ProfileQuery} returns this
 */
proto.pb.ProfileQuery.prototype.setSorting = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.ProfileQuery} returns this
 */
proto.pb.ProfileQuery.prototype.clearSorting = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ProfileQuery.prototype.hasSorting = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string ethAddress = 11;
 * @return {string}
 */
proto.pb.ProfileQuery.prototype.getEthaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.ProfileQuery} returns this
 */
proto.pb.ProfileQuery.prototype.setEthaddress = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.ProfileQuery} returns this
 */
proto.pb.ProfileQuery.prototype.clearEthaddress = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ProfileQuery.prototype.hasEthaddress = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string dotAddress = 12;
 * @return {string}
 */
proto.pb.ProfileQuery.prototype.getDotaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.ProfileQuery} returns this
 */
proto.pb.ProfileQuery.prototype.setDotaddress = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.ProfileQuery} returns this
 */
proto.pb.ProfileQuery.prototype.clearDotaddress = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ProfileQuery.prototype.hasDotaddress = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string erdAddress = 13;
 * @return {string}
 */
proto.pb.ProfileQuery.prototype.getErdaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.ProfileQuery} returns this
 */
proto.pb.ProfileQuery.prototype.setErdaddress = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.ProfileQuery} returns this
 */
proto.pb.ProfileQuery.prototype.clearErdaddress = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ProfileQuery.prototype.hasErdaddress = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string solAddress = 14;
 * @return {string}
 */
proto.pb.ProfileQuery.prototype.getSoladdress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.ProfileQuery} returns this
 */
proto.pb.ProfileQuery.prototype.setSoladdress = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.ProfileQuery} returns this
 */
proto.pb.ProfileQuery.prototype.clearSoladdress = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ProfileQuery.prototype.hasSoladdress = function() {
  return jspb.Message.getField(this, 14) != null;
};


goog.object.extend(exports, proto.pb);