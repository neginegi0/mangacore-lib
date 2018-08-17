'use strict';

var mangacore = module.exports;

// module information
mangacore.version = 'v' + require('./package.json').version;
mangacore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of mangacore-lib found. ' +
      'Please make sure to require mangacore-lib and check that submodules do' +
      ' not also include their own mangacore-lib dependency.';
    throw new Error(message);
  }
};
mangacore.versionGuard(global._mangacore);
global._mangacore = mangacore.version;

// crypto
mangacore.crypto = {};
mangacore.crypto.BN = require('./lib/crypto/bn');
mangacore.crypto.ECDSA = require('./lib/crypto/ecdsa');
mangacore.crypto.Hash = require('./lib/crypto/hash');
mangacore.crypto.Random = require('./lib/crypto/random');
mangacore.crypto.Point = require('./lib/crypto/point');
mangacore.crypto.Signature = require('./lib/crypto/signature');

// encoding
mangacore.encoding = {};
mangacore.encoding.Base58 = require('./lib/encoding/base58');
mangacore.encoding.Base58Check = require('./lib/encoding/base58check');
mangacore.encoding.BufferReader = require('./lib/encoding/bufferreader');
mangacore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
mangacore.encoding.Varint = require('./lib/encoding/varint');

// utilities
mangacore.util = {};
mangacore.util.buffer = require('./lib/util/buffer');
mangacore.util.js = require('./lib/util/js');
mangacore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
mangacore.errors = require('./lib/errors');

// main bitcoin library
mangacore.Address = require('./lib/address');
mangacore.Block = require('./lib/block');
mangacore.MerkleBlock = require('./lib/block/merkleblock');
mangacore.BlockHeader = require('./lib/block/blockheader');
mangacore.HDPrivateKey = require('./lib/hdprivatekey.js');
mangacore.HDPublicKey = require('./lib/hdpublickey.js');
mangacore.Networks = require('./lib/networks');
mangacore.Opcode = require('./lib/opcode');
mangacore.PrivateKey = require('./lib/privatekey');
mangacore.PublicKey = require('./lib/publickey');
mangacore.Script = require('./lib/script');
mangacore.Transaction = require('./lib/transaction');
mangacore.URI = require('./lib/uri');
mangacore.Unit = require('./lib/unit');

// dependencies, subject to change
mangacore.deps = {};
mangacore.deps.bnjs = require('bn.js');
mangacore.deps.bs58 = require('bs58');
mangacore.deps.Buffer = Buffer;
mangacore.deps.elliptic = require('elliptic');
mangacore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
mangacore.Transaction.sighash = require('./lib/transaction/sighash');
