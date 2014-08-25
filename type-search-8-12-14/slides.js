var slides = [
  {
    "time": 0,
    "name": "intro",
    "type": "pdf",
    "page": 1
  },
  {
    "time": 2*60 + 33,
    "name": "overview",
    "type": "pdf",
    "page": 2
  },
  {
    "time": 3*60 + 33,
    "name": "usefulness-of-type-systems",
    "type": "pdf",
    "page": 3
  },
  {
    "time": 5*60 + 17,
    "name": "python",
    "type": "pdf",
    "page": 4
  },
  {
    "time": 5*60 + 43,
    "name": "c",
    "type": "pdf",
    "page": 5
  },
  {
    "time": 6*60 + 08,
    "name": "c-2",
    "type": "pdf",
    "page": 6
  },
  {
    "time": 6*60 + 48,
    "name": "ml",
    "type": "pdf",
    "page": 7
  },
  {
    "time": 7*60 + 45,
    "name": "ml-2",
    "type": "pdf",
    "page": 8
  },
  {
    "time": 8*60 + 14,
    "name": "haskell",
    "type": "pdf",
    "page": 9
  },
  {
    "time": 9*60 + 3,
    "name": "idris",
    "type": "pdf",
    "page": 10
  },
  {
    "time": 9*60 + 36,
    "name": "programming-language-power",
    "type": "pdf",
    "page": 11
  },
  {
    "time": 10*60 + 27,
    "name": "programming-language-power-2",
    "type": "pdf",
    "page": 12
  },
  {
    "time": 11*60 + 27,
    "name": "programming-language-semantics",
    "type": "pdf",
    "page": 13
  },
  {
    "time": 12*60 + 56,
    "name": "programming-language-semantics-2",
    "type": "pdf",
    "page": 14
  },
  {
    "time": 13*60 + 10,
    "name": "test-driven-development",
    "type": "pdf",
    "page": 15
  },
  {
    "time": 16*60 + 11,
    "name": "termination-checking-with-tests",
    "type": "pdf",
    "page": 16
  },
  {
    "time": 17*60 + 25,
    "name": "proving-map-fusion",
    "type": "code",
    "code": "MapHS",
    "cloc": "hsdefinitions"
  },
  {
    "time": 29*60 + 06,
    "name": "proving-map-fusion-ml",
    "type": "code",
    "code": "MapML",
    "cloc": "mlmodule"
  },
  {
    "time": 39*60 + 34,
    "name": "the-curry-howard-correspondence",
    "type": "pdf",
    "page": 24,
  },
  {
    "time": 42*60 + 48,
    "name": "fermats-last-theorem",
    "type": "pdf",
    "page": 25,
  },
  {
    "time": 44*60 + 18,
    "name": "sorting-a-list",
    "type": "pdf",
    "page": 26,
  }
];

var slides2 = [
  {
    "time": 0,
    "name": "proving-map-fusion-idris",
    "type": "code",
    "code": "MapIdris",
    "cloc": "eqList"
  },
  {
    "time": 7*60 + 55,
    "name": "type-driven-development",
    "type": "pdf",
    "page": 27
  },
  {
    "time": 8*60 + 38,
    "name": "type-driven-development-wiles",
    "type": "pdf",
    "page": 28
  },
  {
    "time": 9*60 + 44,
    "name": "why-code-search-matters",
    "type": "pdf",
    "page": 29
  },
  {
    "time": 10*60 + 35,
    "name": "search-difficulties",
    "type": "pdf",
    "page": 30
  },
  {
    "time": 11*60 + 49,
    "name": "search",
    "type": "pdf",
    "page": 31
  },
  {
    "time": 14*60 + 32,
    "name": "type-directed-search",
    "type": "pdf",
    "page": 32
  },
  {
    "time": 15*60 + 11,
    "name": "hoogle",
    "type": "pdf",
    "page": 33
  },
  {
    "time": 16*60 + 35,
    "name": "higher-kinded-search",
    "type": "code",
    "code": "TypeToType",
    "cloc": "TypeToTypePrompt"
  },
  {
    "time": 18*60 + 34,
    "name": "sort-list",
    "type": "code",
    "code": "SortList",
    "cloc": "SortListPrompt"
  },
  {
    "time": 20*60 + 5,
    "name": "plus-commutative",
    "type": "code",
    "code": "PlusCommutative",
    "cloc": "PlusCommutativePrompt"
  },
  {
    "time": 22*60 + 8,
    "name": "hoogle-2",
    "type": "pdf",
    "page": 33
  },
  {
    "time": 22*60 + 15,
    "name": "hoogle-mutations",
    "type": "pdf",
    "page": 34
  },
  {
    "time": 25*60 + 20,
    "name": "vect",
    "type": "code",
    "code": "Vect",
    "cloc": "VectPrompt"
  },
  {
    "time": 34*60 + 0,
    "name": "the-state",
    "type": "pdf",
    "page": 66
  },
  {
    "time": 34*60 + 23,
    "name": "the-state-transition-machine",
    "type": "pdf",
    "page": 67
  },
  {
    "time": 37*60 + 20,
    "name": "fun-searches",
    "type": "code",
    "code": "FunSearches",
    "cloc": "FunSearchesPrompt"
  },
  {
    "time": 38*60 + 51,
    "name": "fun-searches-odr",
    "type": "code",
    "code": "FunSearches",
    "cloc": "OrdSearch"
  },
  {
    "time": 40*60 + 0,
    "name": "fun-searches-fact",
    "type": "code",
    "code": "FunSearches",
    "cloc": "OrdSearch"
  },
  {
    "time": 41*60 + 47,
    "name": "matching-types-2",
    "type": "pdf",
    "page": 60
  },
  {
    "time": 42*60 + 15,
    "name": "matching-types-3",
    "type": "pdf",
    "page": 61
  },
  {
    "time": 43*60 + 40,
    "name": "the-algorithm",
    "type": "pdf",
    "page": 65
  },
  {
    "time": 44*60 + 38,
    "name": "towards-dependent-types",
    "type": "pdf",
    "page": 58
  },
  {
    "time": 45*60 + 5,
    "name": "canonical-forms",
    "type": "pdf",
    "page": 54,
  },
  {
    "time": 45*60 + 35,
    "name": "towards-dependent-types",
    "type": "pdf",
    "page": 58
  },
  {
    "time": 46*60 + 30,
    "name": "the-algorithm",
    "type": "pdf",
    "page": 65
  },
  {
    "time": 49*60 + 05,
    "name": "beating-hoogle",
    "type": "pdf",
    "page": 63
  },
  {
    "time": 49*60 + 40,
    "name": "ord-a-b",
    "type": "code",
    "code": "OrdAB",
    "cloc": "OrdABPrompt"
  }
];

var currentSlide = [0, 0];

function setByTime(num, t) {
  var i = 0;
  var ss = num === 0 ? slides : slides2;
  while (i < ss.length && t >= ss[i].time) {
    i++;
  }
  if (i >= ss.length || ss[i].time > t) {
    i--;
  }
  setSlide(num, i);
}

function setByName(num, n) {
  var ss = num === 0 ? slides : slides2;
  for (var i = 0; i < ss.length; i++) {
    if (ss[i].name == n) {
      setSlide(num, i);
    }
  }
}

function elementForSlide(num, s) {
  var suffix = num === 0 ? "" : "2";
  if (s.type == "pdf") {
     return document.getElementById("pdf" + suffix);
  } else if (s.type == "code") {
     return document.getElementById(s.code);
  }
}

function setSlide(num, i) {
  if (i == currentSlide[num]) {
    return;
  }
  var ss = num === 0 ? slides : slides2;
  elementForSlide(num, ss[currentSlide[num]]).style.display = "none";
  currentSlide[num] = i;
  var s = ss[i];
  var el = elementForSlide(num, s);
  el.style.display = "block";
  
  if (s.type == "pdf") {
    var newel = el.cloneNode(true);
    newel.src = "slides/type-search." + s.page + ".pdf";
    el.parentNode.replaceChild(newel, el);
  } else if (s.type == "code") {
    document.getElementsByName(s.cloc)[0].scrollIntoView();
  }
}
