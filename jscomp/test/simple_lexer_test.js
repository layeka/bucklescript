'use strict';

var Bytes       = require("../../lib/js/bytes");
var Mt          = require("./mt");
var Lexing      = require("../../lib/js/lexing");
var Block       = require("../../lib/js/block");
var Curry       = require("../../lib/js/curry");
var Caml_bytes  = require("../../lib/js/caml_bytes");
var Caml_string = require("../../lib/js/caml_string");

var __ocaml_lex_tables = /* record */[
  /* lex_base */"\0\0����\0\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\x01\0\x04\0\x03\0\0\0\x06\0\0\0��",
  /* lex_backtrk */"������\x01\0��������������������������������",
  /* lex_default */"\x02\0\0\0\0\0��������������������������������\0\0",
  /* lex_trans */"\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\n\0\0\0\0\0\0\0\x03\0\x0b\0\x07\0\x0e\0\x0f\0\0\0\f\0\0\0\0\0\0\0\0\0\b\0\x11\0\0\0\0\0\x05\0\x06\0\t\0\x04\0\r\0\x10\0\x12\0\x13\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0",
  /* lex_check */"����������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������\t\0������\0\0\n\0\x06\0\r\0\x0e\0��\x0b\0��������\x07\0\x10\0����\x04\0\x05\0\b\0\x03\0\f\0\x0f\0\x11\0\x12\0����������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������\0\0������������",
  /* lex_base_code */"",
  /* lex_backtrk_code */"",
  /* lex_default_code */"",
  /* lex_trans_code */"",
  /* lex_check_code */"",
  /* lex_code */""
];

function translate(lexbuf) {
  return __ocaml_lex_translate_rec(lexbuf, 0);
}

function __ocaml_lex_translate_rec(lexbuf, ___ocaml_lex_state) {
  while(true) {
    var __ocaml_lex_state = ___ocaml_lex_state;
    var __ocaml_lex_state$1 = Lexing.engine(__ocaml_lex_tables, __ocaml_lex_state, lexbuf);
    if (__ocaml_lex_state$1 > 2 || __ocaml_lex_state$1 < 0) {
      Curry._1(lexbuf[/* refill_buff */0], lexbuf);
      ___ocaml_lex_state = __ocaml_lex_state$1;
      continue ;
      
    }
    else {
      switch (__ocaml_lex_state$1) {
        case 0 : 
            return "." + __ocaml_lex_translate_rec(lexbuf, 0);
        case 1 : 
            var c = Caml_bytes.get(lexbuf[/* lex_buffer */1], lexbuf[/* lex_start_pos */4]);
            return Caml_string.bytes_to_string(Bytes.make(1, c)) + __ocaml_lex_translate_rec(lexbuf, 0);
        case 2 : 
            return "";
        
      }
    }
  };
}

var suites_000 = /* tuple */[
  "translate",
  function () {
    return /* Eq */Block.__(0, [
              __ocaml_lex_translate_rec(Lexing.from_string("-- current_directory --"), 0),
              "-- . --"
            ]);
  }
];

var suites = /* :: */[
  suites_000,
  /* [] */0
];

Mt.from_pair_suites("simple_lexer_test.mll", suites);

exports.__ocaml_lex_tables        = __ocaml_lex_tables;
exports.translate                 = translate;
exports.__ocaml_lex_translate_rec = __ocaml_lex_translate_rec;
exports.suites                    = suites;
/*  Not a pure module */
