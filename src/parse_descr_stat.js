const txt = `
; Hand made campaign script
; EW_X2
campaign		mundus_magnus
playable
	romans_julii
	romans_brutii
	romans_scipii
       	parthia
	egypt
	seleucid
	carthage
	gauls
	germans
	britons
	greek_cities
	macedon
	pontus
	armenia
	dacia
	scythia
	spain
	thrace
	numidia
	
end
unlockable
end
nonplayable
	slave
end


start_date	-270 summer
end_date	14 summer

night_battles_enabled


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; >>>> start of landmarks section <<<<

landmark	pyramids_and_sphinx	181,	68
landmark	pharos	178,	77
landmark	colossus	160,	100
landmark	temple	157,	109
landmark	statue	134,	105
landmark	gardens	237,	102
landmark	mausoleum	160,	106
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; >>>> start of resources section <<<<   ! sorted alphabetically !
; dogs - fish now
; furs - salt now
; pigs - horses now

resource	amber,	92,	195
resource	amber,	90,	195
resource	amber,	93,	192
resource	amber,	113,	195
resource	amber,	108,	193
resource	amber,	115,	197
resource        amber,  125,    209
resource        amber,   103,   202
resource        amber,   123,   197
resource	camels,	252,	195
resource	camels,	217,	114
resource	camels,	206,	110
resource	camels,	240,	105
resource	camels,	15,	82     ;Mauretania_Tingitana
resource	camels,	215,	98
resource	camels,	51,	84     ;Numidia
resource	camels,	80,	96
resource	camels,	209,	103
resource	camels,	233,	77
resource	camels,	81,	86
resource	camels,	209,	86
resource	camels,	105,	70
resource	camels,	139,	72
resource	camels,	190,	76
resource	camels,	195,	75
resource	camels,	179,	62     ;Middle_Egypt
resource	camels,	184,	49
resource	camels,	201,	80
resource	camels,	159,	69
resource	camels,	161,	60     ;Libya
resource	camels,	306,	195
resource	camels,	291,	196
resource	camels,	344,	213
resource	camels,	331,	168
resource	camels,	374,	191
resource	camels,	317,	148
resource	camels,	306,	164
resource	camels,	296,	162
resource	camels,	291,	179
resource	camels,	275,	164
resource	camels,	370,	142
resource	camels,	371,	114
resource	camels,	364,	102
resource	camels,	343,	111     ;Arachosia
resource	camels,	330,	88     ;Gedrosia
resource	camels,	311,	140     ;Aria
resource	camels,	325,	122     ;Drangiana
resource	camels,	310,	107     ;Carmania
resource	camels,	306,	116     ;Tabiena
resource	camels,	294,	91     ;Persis
resource	camels,	315,	61
resource	camels,	288,	22     ;Hadramaut
resource	camels,	278,	15
resource	camels,	261,	16
resource	camels,	229,	43
resource	camels,	179,	28
resource	camels,	169,	46     ;Oasis_Magna
resource	camels,	196,	20
resource	camels,	240,	3
resource	camels,	255,	91
resource	camels,	23,	84
resource	camels,	94,	61
resource	camels,	70,	47
resource	camels,	126,	55
resource	camels,	174,	22
resource	camels,	116,	20
resource	camels,	202,	35
resource	camels,	285,	151
resource	camels,	289,	130
resource	camels,	268,	124
resource	camels,	318,	186
resource	camels,	82,	71
resource	camels,	303,	40
resource	camels,	258,	77
resource	camels,	56,	53
resource	camels,	52,	99
resource	copper,	108,	123
resource	copper,	107,	124
resource	copper,	26,	95
resource	copper,	27,	95
resource	copper,	185,	99
resource	copper,	184,	98
resource        copper, 76,    156
resource        copper, 78,    157
resource        copper,  140,   103
resource        copper,  127,   124
resource        copper,  126,   127
resource        copper,  135,   117
resource        copper,  134,   118
resource        copper,  222,   124
resource        copper,  224,   122
resource        copper,  237,   127
resource        copper,  234,   126
resource        copper,  243,   118
resource        copper,  241,   119
resource        copper,  261,   109
resource        copper,  262,   108
resource        copper,  195,   116
resource        copper,  191,   116
resource        copper,  249,   217
resource        copper,  251,   216
resource        copper,  306,   212
resource        copper,  303,   213
resource        copper,  326,   219
resource        copper,  325,   222
resource        copper,  325,   175
resource        copper,  327,   177
resource        copper,  287,   119     ;Tabiena
resource        copper,  286,   118     ;Tabiena
resource        copper,  87,   29
resource        copper,  89,   27
resource        copper,  180,   17
resource        copper,  182,   15
resource        copper,  26,   118
resource        copper,  25,   118
resource        copper,  24,   114
resource        copper,  25,   113
resource        copper,  130,   146
resource        copper,  131,   148
resource        copper,  146,   133
resource        copper,  144,   133
resource        copper,  201,   137
resource        copper,  199,   136
resource        copper,  245,   134     ;Atropatene
resource        copper,  246,   132     ;Atropatene
resource        copper,  345,   114     ;Arachosia
resource        copper,  346,   113     ;Arachosia
resource        copper,  338,   95     ;Gedrosia
resource        copper,  340,   96     ;Gedrosia
resource        copper,  319,   129     ;Aria
resource        copper,  320,   130     ;Aria
resource        copper,  304,   69
resource        copper,  307,   67
;resource	dogs,	124,	212
;resource	dogs,	134,	221
;resource	dogs,	138,	223
;resource	dogs,	89,	221
;resource	dogs,	78,	216
;resource	dogs,	178,	151
;resource	dogs,	175,	153
;resource	dogs,	158,	148
;resource	dogs,	6,	116
;resource	dogs,	30,	108
;resource	dogs,	41,	116
;resource	dogs,	77,	123
;resource	dogs,	250,	149
;resource	dogs,	280,	178
;resource	dogs,	318,	71
;resource	dogs,	262,	96
;resource	dogs,	181,	154
;resource	dogs,	73,	191
resource	elephants,	329,	148
resource	elephants,	317,	170
resource	elephants,	262,	106
resource	elephants,	319,	138
resource	elephants,	73,	98
resource	elephants,	64,	82
resource	elephants,	80,	88
resource	elephants,	13,	98
resource	elephants,	377,	145
resource	elephants,	362,	124
resource	elephants,	378,	85
resource	elephants,	210,	12
resource	elephants,	213,	4
resource	elephants,	35,	99
resource	elephants,	292,	1
resource	elephants,	69,	100
resource	furs,	67,	82
resource	furs,	70,	81
resource	furs,	124,	184
resource	furs,	4,	11
resource	furs,	7,	12
resource	furs,	8,	8
resource	furs,	80,	57
resource	furs,	84,	56
resource	furs,	131,	47
resource	furs,	156,	64
resource	furs,	233,	6
resource	furs,	257,	92
resource	furs,	348,	93
resource	furs,	283,	125
resource	furs,	292,	132
resource	furs,	339,	226
resource	furs,	254,	178
resource	furs,	260,	181
resource	furs,	206,	86
resource	furs,	206,	84
resource	furs,	179,	118
resource	furs,	157,	113
resource	furs,	176,	161
resource	furs,	178,	162
resource	furs,	190,	161
resource	furs,	131,	157
resource	furs,	134,	157
resource	furs,	98,	171
resource	furs,	93,	142
resource	furs,	57,	193
resource	glass,	199,	93
resource	glass,	46,	167
resource	glass,	96,	147
resource	glass,	180,	75
resource	glass,	69,	148
resource	glass,	106,	118
resource	gold,	45,	191
resource	gold,	20,	140
resource	gold,	136,	154
resource	gold,	214,	148
resource	gold,	149,	137
resource	gold,	117,	133
resource	gold,	16,	110
resource	gold,	196,	53
resource	gold,	187,	99
resource	gold,	114,	140
resource	gold,	151,	126
resource        gold,   169,    114
resource        gold,   133,   124     ;Macedonia
resource        gold,   144,   125     ;Macedonia
resource        gold,   173,   128
resource        gold,   217,   137
resource        gold,   252,   226
resource        gold,   327,   161
resource        gold,   322,   164
resource        gold,   253,   28
resource        gold,   229,   2
resource        gold,   214,   13
resource        gold,   321,   105     ;Carmania
resource        gold,   253,   121
resource        gold,   376,   163
resource        gold,   356,   98
resource        gold,   331,   116
resource        gold,   296,   128     ;Parthyene
resource        gold,   94,   160
resource	grain,	103,	100
resource	grain,	84,	97
resource	grain,	190,	171
resource	grain,	182,	73
resource	grain,	185,	65
resource	grain,	167,	164
resource	grain,	372,	126
resource	grain,	49,	152
resource	grain,	147,	144
resource	hides,	84,	169
resource	hides,	68,	165
resource	hides,	87,	186
resource	hides,	161,	168
resource	hides,	158,	165
resource        hides,  220,    180
resource        hides,  215,    174
resource        hides,  223,    196
resource        hides,  198,    184
resource        hides,  209,    209
resource        hides,  124,    153
resource        hides,  232,    203
resource        hides,  374,    224
resource        hides,  366,    221
resource        hides,  275,    148
resource        hides,  315,    218
resource        hides,  98,    49
resource        hides,  39,    57     ;Gaetulia
resource        hides,  104,    175
resource        hides,  289,    103     ;Persis
resource	incense,	373,	80
resource	incense,	375,	78
resource	incense,	379,	77
resource	incense,	217,	103
resource	incense,	216,	101
resource	incense,	293,	28
resource	incense,	262,	3
resource	incense,	292,	25
resource	incense,	259,	83
resource	incense,	296,	34
resource	incense,	259,	3
resource	incense,	256,	5
resource	incense,	254,	12
resource	incense,	251,	17
resource	incense,	251,	20
resource	incense,	247,	24
resource	incense,	245,	25
resource	incense,	243,	27
resource	incense,	263,	77
resource	iron,	80,	181
resource	iron,	79,	182
resource	iron,	105,	189
resource	iron,	105,	190
resource	iron,	51,	184
resource	iron,	50,	186
resource	iron,	108,	180
resource	iron,	109,	181
resource	iron,	110,	167
resource	iron,	109,	166
resource	iron,	173,	169
resource	iron,	171,	167
resource	iron,	54,	160
resource	iron,	53,	159
resource	iron,	138,	159
resource	iron,	140,	158
resource	iron,	54,	146
resource	iron,	55,	146
resource	iron,	112,	141
resource	iron,	18,	142
resource	iron,	16,	143
resource	iron,	223,	137
resource	iron,	225,	138
resource	iron,	188,	130
resource	iron,	189,	129
resource	iron,	34,	130
resource	iron,	32,	130
resource	iron,	90,	133
resource	iron,	91,	132
resource	iron,	240,	123
resource	iron,	239,	122
resource	iron,	202,	114
resource	iron,	201,	114
resource	iron,	251,	112     ;Elymais
resource	iron,	253,	112     ;Elymais
resource	iron,	150,	94
resource	iron,	152,	93
resource	iron,	106,	155
resource	iron,	106,	154
resource	iron,	111,	141
resource	iron,	140,	111
resource	iron,	141,	111
resource        iron,   80,     128
resource        iron,   81,     132
resource        iron,    141,   101
resource        iron,   154,   120     ;Mysia
resource        iron,   153,   120     ;Mysia
resource        iron,   99,   211
resource        iron,   103,   210
resource        iron,   257,   216
resource        iron,   249,   224
resource        iron,   257,   228
resource        iron,   268,   222
resource        iron,   266,   220
resource        iron,   333,   231
resource        iron,   331,   232
resource        iron,   310,   102     ;Carmania
resource        iron,   312,   101     ;Carmania
resource        iron,   194,   39
resource        iron,   195,   37
resource        iron,   32,   135
resource        iron,   78,   93
resource        iron,   77,   94
resource        iron,   123,   168
resource        iron,   122,   169
resource        iron,   170,   183
resource        iron,   168,   186
resource	lead,	52,	199
resource	lead,	52,	195
resource	lead,	45,	189
resource	lead,	44,	193
resource	lead,	54,	155
resource	lead,	54,	154
resource	lead,	27,	125
resource	lead,	28,	124
resource	lead,	196,	124
resource	lead,	47,	116
resource	lead,	197,	124
resource        lead,   83,    118
resource        lead,   82,    117
resource        lead,   146,   106
resource        lead,   20,   111
resource        lead,   21,   110
resource        lead,   33,   114
resource        lead,   33,   112
resource        lead,   351,   123
resource        lead,   353,   123
resource        lead,   301,   101     ;Persis
resource        lead,   303,   101     ;Persis
resource	marble,	56,	119
resource	marble,	91,	138
resource	marble,	47,	133
resource	marble,	166,	113     ;Lydia
resource	marble,	64,	94
resource	marble,	136,	105
resource	marble,	148,	73
resource        marble,  225,   150
resource        marble,  145,   113
resource        marble,  377,   152
resource        marble,  339,   133
resource        marble,  193,   61
resource        marble,  46,   140
resource        marble,  71,   173
resource        marble,  153,   131
resource        marble,  174,   111
resource	olive_oil,	120,	130     ;Illyria
resource	olive_oil,	124,	129     ;Illyria
resource	olive_oil,	16,	114
resource	olive_oil,	13,	109
resource	olive_oil,	142,	111
resource	olive_oil,	140,	112
resource	olive_oil,	166,	106
resource	olive_oil,	167,	105
resource	olive_oil,	76,	100
resource	olive_oil,	78,	100
resource	olive_oil,	82,	91
resource	olive_oil,	207,	95
resource	olive_oil,	209,	96
resource	olive_oil,	83,	94
resource        olive_oil,  136,   108
resource        olive_oil,  153,   114
resource        olive_oil,  88,   136
resource        olive_oil,  71,   136
resource        olive_oil,  70,   137
resource        olive_oil,  145,   76
resource	pigs,	60,	87     ;Numidia
resource	pigs,	24,	133
resource	pigs,	150,	140
resource	pigs,	186,	125
resource	pigs,	162,	172
resource	pigs,	181,	175
resource	pigs,	189,	186
resource	pigs,	210,	160
resource	pigs,	276,	153
resource	pigs,	308,	216
resource	pigs,	342,	205
resource	pigs,	369,	217
resource	pigs,	121,	161
resource	pigs,	221,	133     ;Armenia
resource	pottery,	66,	179
resource	pottery,	65,	145
resource	pottery,	86,	139
resource	pottery,	99,	135
resource	pottery,	38,	122
resource	pottery,	195,	113
resource	pottery,	196,	114
resource        pottery,  182,    157
resource        pottery, 79,    91
resource        pottery, 280,    169
resource	purple_dye,	150,	93
resource	purple_dye,	145,	94
resource	purple_dye,	151,	93
resource	purple_dye,	199,	87
resource	purple_dye,	196,	80
resource	purple_dye,	94,	77
resource	purple_dye,	99,	77
resource	purple_dye,	89,	79
resource	purple_dye,	191,	101
resource	purple_dye,	192,	105
resource	purple_dye,	187,	98
resource	purple_dye,	197,	81
resource	purple_dye,	24,	101
resource	purple_dye,	22,	101
resource	purple_dye,	4,	98
resource	purple_dye,	362,	100
resource	purple_dye,	358,	101
resource	purple_dye,	357,	105
resource	silk,	205,	115
resource	silk,	204,	114
resource	silk,	205,	114
resource	silk,	255,	130
resource	silk,	257,	129
resource	silk,	252,	133
resource	silk,	220,	116
resource	silk,	222,	117
resource	silk,	224,	119
resource	silk,	381,	184
resource	silk,	334,	174
resource	silk,	336,	176
resource	silk,	331,	153
resource	silk,	334,	155
resource	silk,	305,	181
resource	silk,	302,	180
resource	silk,	309,	147
resource	silk,	310,	148
resource	silk,	291,	137     ;Parthyene
resource	silk,	293,	138     ;Parthyene
resource	silk,	274,	124
resource	silk,	276,	123
resource	silk,	279,	124
resource	silver,	216,	164
resource	silver,	107,	188
resource	silver,	58,	143
resource	silver,	201,	135
resource	silver,	42,	141
resource	silver,	30,	116
resource	silver,	160,	119
resource	silver,	155,	108
resource	silver,	143,	109
resource	silver,	112,	111
resource	silver,	111,	138
resource        silver, 132,   131
resource        silver,  165,   125
resource        silver,  203,   127
resource        silver,  196,   18
resource        silver,  319,   100     ;Carmania
resource        silver,  273,   119     ;Choarene
resource        silver,  103,   232
resource        silver,  251,   212
resource        silver,  328,   173
resource        silver,  361,   224
resource        silver,  365,   190
resource        silver,  25,   124
resource        silver,  17,   112
resource        silver,  15,   93
resource        silver,  27,   88
resource        silver,  131,   134
resource        silver,  137,   137
resource        silver,  28,   201
resource        silver,  107,   172
resource        silver,  214,   124
resource        silver,  351,   135
resource        silver,  345,   131
resource        silver,  335,   110     ;Arachosia
resource        silver,  135,   161
resource        silver,  128,   175
resource	slaves,	39,	203     ;Connachta
resource	slaves,	57,	196
resource	slaves,	60,	188
resource	slaves,	47,	193
resource	slaves,	60,	173
resource	slaves,	37,	168
resource	slaves,	47,	154
resource	slaves,	56,	140
resource	slaves,	68,	137
resource	slaves,	68,	151
resource	slaves,	65,	161
resource	slaves,	79,	190
resource	slaves,	86,	199
resource	slaves,	89,	167
resource	slaves,	78,	166
resource	slaves,	95,	185
resource	slaves,	98,	193
resource	slaves,	120,	174
resource	slaves,	138,	203
resource	slaves,	147,	183
resource	slaves,	190,	224
resource	slaves,	236,	201
resource	slaves,	177,	151
resource	slaves,	156,	143
resource	slaves,	150,	133
resource	slaves,	158,	129
resource	slaves,	138,	124
resource	slaves,	135,	114
resource	slaves,	132,	110
resource	slaves,	143,	109
resource	slaves,	140,	105
resource	slaves,	138,	101
resource	slaves,	147,	93
resource	slaves,	160,	99
resource	slaves,	124,	121
resource	slaves,	110,	143     ;Dalmatia
resource	slaves,	120,	153
resource	slaves,	98,	159
resource	slaves,	116,	157
resource	slaves,	143,	143
resource	slaves,	136,	132
resource	slaves,	93,	145
resource	slaves,	97,	137
resource	slaves,	89,	136
resource	slaves,	83,	148
resource	slaves,	95,	125
resource	slaves,	101,	125
resource	slaves,	113,	121
resource	slaves,	79,	116
resource	slaves,	105,	102
resource	slaves,	96,	104
resource	slaves,	107,	106
resource	slaves,	54,	118
resource	slaves,	58,	133
resource	slaves,	37,	134
resource	slaves,	10,	142
resource	slaves,	7,	124
resource	slaves,	11,	112
resource	slaves,	37,	111
resource	slaves,	11,	101
resource	slaves,	80,	102
resource	slaves,	84,	90
resource	slaves,	44,	55     ;Gaetulia
resource	slaves,	97,	73
resource	slaves,	157,	57
resource	slaves,	193,	53
resource	slaves,	183,	66
resource	slaves,	177,	73
resource	slaves,	207,	72
resource	slaves,	214,	81
resource	slaves,	257,	58
resource	slaves,	203,	90
resource	slaves,	199,	100
resource	slaves,	199,	109
resource	slaves,	188,	101
resource	slaves,	193,	113
resource	slaves,	190,	123
resource	slaves,	183,	138
resource	slaves,	176,	124
resource	slaves,	167,	128
resource	slaves,	156,	117
resource	slaves,	161,	112
resource	slaves,	159,	107
resource	slaves,	226,	145
resource	slaves,	215,	146
resource	slaves,	214,	115
resource	slaves,	221,	99
resource	slaves,	243,	109
resource	slaves,	254,	116
resource	slaves,	250,	123
resource	slaves,	241,	139     ;Atropatene
resource	slaves,	206,	98
resource	slaves,	113,	115
resource	slaves,	85,	140
resource	slaves,	121,	131     ;Illyria
resource	slaves,	113,	169
resource        slaves,  183,    157
resource        slaves,  163,    161
resource        slaves,  193,    170
resource        slaves,  213,    180     ;Tribus_Siracae
resource        slaves,  200,    197
resource        slaves,  83,    131
resource        slaves,  88,    159
resource	slaves,	 59,	96
resource	slaves,	161,	75
resource        slaves,  233,   147
resource        slaves,  243,   145
resource        slaves,  133,   77
resource        slaves,  99,   207
resource        slaves,  53,   218
resource        slaves,  241,   215
resource        slaves,  287,   225
resource        slaves,  282,   200
resource        slaves,  363,   207
resource        slaves,  373,   187
resource        slaves,  278,   172
resource        slaves,  317,   171
resource        slaves,  340,   178
resource        slaves,  287,   158
resource        slaves,  310,   152
resource        slaves,  323,   146
resource        slaves,  373,   151
resource        slaves,  374,   119
resource        slaves,  367,   93
resource        slaves,  342,   118
resource        slaves,  330,   94     ;Gedrosia
resource        slaves,  305,   90     ;Carmania
resource        slaves,  332,   125
resource        slaves,  317,   137
resource        slaves,  274,   136
resource        slaves,  291,   112     ;Tabiena
resource        slaves,  292,   95     ;Persis
resource        slaves,  305,   76
resource        slaves,  293,   33
resource        slaves,  275,   12
resource        slaves,  259,   17
resource        slaves,  241,   39
resource        slaves,  218,   4
resource        slaves,  203,   17
resource        slaves,  179,   37
resource        slaves,  169,   44
resource        slaves,  351,   144
resource        slaves,  263,   99
resource        slaves,  269,   71
resource        slaves,  29,   97
resource        slaves,  94,   51
resource        slaves,  75,   44
resource        slaves,  130,   49
resource        slaves,  153,   18
resource        slaves,  104,   19
resource        slaves,  208,   32
resource        slaves,  294,   2
resource        slaves,  350,   169
resource        slaves,  290,   147
resource        slaves,  283,   133
resource        slaves,  280,   126
resource        slaves,  324,   181
resource        slaves,  72,   68
resource        slaves,  31,   22
resource        slaves,  314,   53
resource        slaves,  316,   219
resource        slaves,  109,   127
resource        slaves,  40,   121
resource        slaves,  27,   121
resource        slaves,  35,   141
resource        slaves,  153,   112
resource        slaves,  145,   112
resource        slaves,  137,   139
resource        slaves,  129,   142
resource        slaves,  119,   167
resource        slaves,  150,   170
resource        slaves,  132,   186
resource        slaves,  165,   226
resource        slaves,  163,   192
resource        slaves,  182,   184
resource        slaves,  166,   119
resource        slaves,  181,   109
resource        slaves,  218,   124
resource        slaves,  230,   126
resource        slaves,  205,   140
resource        slaves,  191,   135
resource        slaves,  58,   100
resource        slaves,  43,   182
resource        slaves,  24,   195
resource        slaves,  77,   180
resource        slaves,  44,   152
resource        slaves,  59,   150
resource        slaves,  56,   157
resource        slaves,  85,   184
resource        slaves,  88,   175
resource        slaves,  93,   225
resource        slaves,  139,   153
resource        slaves,  160,   208
resource        slaves,  17,   117
resource        slaves,  114,   209
resource        slaves,  174,   156
resource        slaves,  26,   137
resource        slaves,  225,   136     ;Armenia
resource        slaves,  231,   160     ;Tribus_Legae
resource	textiles,	69,	178
resource	textiles,	56,	185
resource	textiles,	91,	146
resource	textiles,	49,	139
resource	textiles,	171,	122
resource	textiles,	218,	116
resource	textiles,	158,	114
resource	textiles,	160,	110
resource	textiles,	198,	112
resource	textiles,	164,	107
resource	textiles,	184,	78
resource	textiles,	94,	149
resource	textiles,	337,	150
resource	textiles,	311,	176
resource	textiles,	287,	158
resource	textiles,	244,	141     ;Atropatene
resource	textiles,	366,	149
resource	textiles,	316,	130     ;Aria
resource	textiles,	306,	93     ;Carmania
resource	textiles,	54,	101
resource	textiles,	114,	150
resource	textiles,	197,	163
resource	textiles,	245,	102
resource	textiles,	188,	43
resource	timber,	201,	95
resource	timber,	90,	208
resource	timber,	138,	179
resource	timber,	41,	166
resource	timber,	160,	155
resource	timber,	16,	139
resource	timber,	78,	140
resource	timber,	180,	132
resource	timber,	140,	122
resource	timber,	155,	126
resource	timber,	115,	121
resource	timber,	156,	121
resource	timber,	156,	111
resource	timber,	135,	102
resource	timber,	15,	100
resource	timber,	86,	98
resource	timber,	104,	101
resource	timber,	132,	73
resource	timber,	189,	112
resource	timber,	161,	100
resource	timber,	186,	102
resource	timber,	115,	135     ;Illyria
resource	timber,	176,	224
resource	timber,	57,	98
resource        timber,  201,   93
resource        timber,  201,   102
resource        timber,  240,   226
resource        timber,  266,   133
resource        timber,  363,   155
resource        timber,  215,   1
resource        timber,  322,   94     ;Carmania
resource        timber,  51,   131
resource        timber,  190,   207
resource        timber,  97,   174
resource	tin,	24,	144
resource	tin,	38,	182
resource	tin,	36,	182
resource	tin,	330,	110     ;Drangiana
resource	tin,	328,	110     ;Drangiana
resource	tin,	122,	139
resource	tin,	124,	139
resource	tin,	172,	115
resource	tin,	174,	115
resource	tin,	212,	134
resource	tin,	210,	133
resource	tin,	237,	134     ;Atropatene
resource	tin,	236,	135     ;Atropatene
resource	tin,	273,	114    ;Elymais
resource	tin,	275,	112    ;Elymais
resource	tin,	315,	163
resource	tin,	314,	162
resource	tin,	311,	129     ;Aria
resource	tin,	312,	128     ;Aria
resource	tin,	301,	132     ;Parthyene
resource	tin,	300,	133     ;Parthyene
resource	wild_animals,	68,	75
resource	wild_animals,	66,	70
resource	wild_animals,	84,	66
resource	wild_animals,	195,	48
resource	wild_animals,	196,	44
resource	wild_animals,	198,	42
resource	wild_animals,	152,	194
resource	wild_animals,	155,	198
resource	wild_animals,	170,	211
resource	wild_animals,	41,	98
resource	wild_animals,	45,	97
resource	wild_animals,	132,	175
resource	wild_animals,	134,	177
resource	wild_animals,	132,	180
resource	wild_animals,	270,	23
resource	wild_animals,	202,	221     ;Tribus_Tissagetae
resource	wild_animals,	208,	223     ;Tribus_Tissagetae
resource	wild_animals,	212,	227     ;Tribus_Tissagetae
resource	wild_animals,	377,	97
resource	wild_animals,	378,	101
resource	wild_animals,	158,	12
resource	wild_animals,	152,	5
resource	wild_animals,	171,	6
resource	wild_animals,	113,	25
resource	wild_animals,	90,	173
resource	wild_animals,	96,	170
resource	wild_animals,	95,	176
resource	wild_animals,	98,	6
resource	wild_animals,	113,	2
resource	wine,	53,	119
resource	wine,	47,	147
resource	wine,	45,	145
resource	wine,	55,	138
resource	wine,	57,	139
resource	wine,	109,	143
resource	wine,	107,	144
resource	wine,	108,	145
resource	wine,	220,	142
resource	wine,	221,	144
resource	wine,	43,	135
resource	wine,	40,	137
resource	wine,	163,	125
resource	wine,	166,	126
resource	wine,	18,	110
resource	wine,	19,	113
resource	wine,	161,	121
resource	wine,	54,	117
resource	wine,	201,	109
resource	wine,	203,	111
resource	wine,	202,	91
resource	wine,	200,	83
resource	wine,	105,	120
resource	wine,	78,	113
resource	wine,	79,	115
resource	wine,	101,	123
resource	wine,	159,	120
resource	wine,	41,	136
resource	wine,	63,	143
resource	wine,	179,	152
resource	wine,	210,	150
resource        wine,   80,    160
resource        wine,   236,   146
resource        wine,   228,   147
resource        wine,   254,   97
resource        wine,   308,   157
resource        wine,   319,   142     ;Aria
resource        wine,   154,   114
resource        wine,   174,   108     ;Pamphylia
resource        wine,   173,   105     ;Pamphylia
resource        wine,   78,   167
;;;;;;;;;; Village mod by Darius
;Pergamum
resource        dogs,   158,   118
;By
resource        dogs,   80, 91
;Tarentum
resource        dogs,   116, 120
;Roma
resource        dogs,   92, 129
;Carthage
resource        dogs,   76, 97
;Pella
resource        dogs,   138, 124



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; >>>> start of sound emitters section <<<<


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; >>>> start of events section <<<<

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; >>>> start of factions section <<<<
;<BMK>Рим (Julii)

faction	romans_julii, comfortable caesar
denari	10000
settlement
{
	level large_city
	region Latium

	year_founded 0
	population 7500
	plan_set default_set
	faction_creator romans_senate
	building
	{
		type core_building proconsuls_palace
	}
	building
	{
		type defenses stone_wall
	}
	building
	{
		type amphitheatres stone_amphitheatre
	}
	building
	{
		type barracks army_barracks ;
	}
	building
	{
		type equestrian hippodrome
	}
	building
	{
		type missiles catapult_range
	}
	building
	{
		type smith blacksmith
	}
	building
	{
		type market forum
	}
	building
	{
		type hinterland_roads roads
	}
	building
	{
		type hinterland_farms farms+2
	}



	building
	{
		type town_trade_control governors_trade_control
	}

	building
	{
		type town_wehrmacht_control governors_wehrmacht_control
	}





}
settlement
{
	level large_town
	region Etruria

	year_founded 0
	population 4000
	plan_set default_set
	faction_creator romans_julii
	building
	{
		type barracks militia_barracks
	}
	building
	{
		type core_building governors_villa
	}
	building
	{
		type port_buildings port
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type hinterland_farms farms
	}
	building
	{
		type hinterland_roads roads
	}
}

settlement
{
	level large_town
	region Umbria

	year_founded 0
	population 3500
	plan_set default_set
	faction_creator romans_julii
	building
	{
		type barracks muster_field
	}
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type hinterland_roads roads
	}
	building
	{
		type hinterland_farms farms
	}
}

settlement
{
	level large_town
	region Apulia

	year_founded 0
	population 2800
	plan_set default_set
	faction_creator romans_julii
	building
	{
		type barracks muster_field
	}
	building
	{
		type core_building governors_villa
	}	
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type hinterland_roads roads
	}
	building
	{
		type hinterland_farms farms
	}
}
settlement
{
	level large_town
	region Bruttium

	year_founded 0
	population 4300
	plan_set default_set
	faction_creator romans_julii
	building
	{
		type barracks muster_field
	}
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type hinterland_roads roads
	}
	building
	{
		type hinterland_farms farms
	}
}
settlement
{
	level large_town
	region Campania

	year_founded 0
	population 4800
	plan_set default_set
	faction_creator romans_julii
	building
	{
		type barracks militia_barracks
	}
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type hinterland_roads roads
	}
	building
	{
		type hinterland_farms farms+1
	}
}

settlement
{
	level town
	region Sicilia_Romanus

	year_founded 0
	population 3500
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type barracks muster_field
	}
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses stone_wall
	}
}



character	Flavius Julius, named character, leader, age 47, , x 89, y 138 
traits GoodCommander 2 , NaturalMilitarySkill 1 , GoodDefender 1 , PoliticsSkill 3 , GoodAdministrator 2 , Austere 1
ancillaries aged_retainer
army
unit		roman generals guard cavalry early				exp 1 armour 0 weapon_lvl 0
unit		roman hastati				exp 2 armour 0 weapon_lvl 0
unit		roman hastati				exp 2 armour 0 weapon_lvl 0
unit		roman triarii				exp 2 armour 0 weapon_lvl 0
unit		roman velite				exp 2 armour 0 weapon_lvl 0

character	Lucius Julius, named character, heir, age 31, , x 91, y 136 
traits GoodCommander 1 , PoliticsSkill 2 , GoodAdministrator 3 , Energetic 2
ancillaries freeman_clerk 
army
unit		roman generals guard cavalry early				exp 1 armour 0 weapon_lvl 0
unit		roman hastati				exp 1 armour 0 weapon_lvl 0
unit		roman hastati				exp 1 armour 0 weapon_lvl 0

character	Quintus Julius, named character, age 29, , x 96, y 138 
traits NaturalMilitarySkill 3 , GoodAttacker 1 , Energetic 1
ancillaries drillmaster
army
unit		roman generals guard cavalry early				exp 1 armour 0 weapon_lvl 0
unit		roman hastati				exp 1 armour 0 weapon_lvl 0
unit		roman hastati				exp 1 armour 0 weapon_lvl 0

character	Vibius Julius, named character, age 28, , x 88, y 137 
traits GoodCommander 1 , PoliticsSkill 2 , GoodAdministrator 2 , MathematicsSkill 1
ancillaries merchant 
army
unit		roman generals guard cavalry early				exp 1 armour 0 weapon_lvl 0
unit		roman hastati				exp 1 armour 0 weapon_lvl 0
unit		roman hastati				exp 1 armour 0 weapon_lvl 0
unit		roman velite				exp 1 armour 0 weapon_lvl 0

character	Luca, general, age 20, , x 108, y 125 
army
unit		roman hastati				exp 0 armour 0 weapon_lvl 0
unit		roman velite				exp 0 armour 0 weapon_lvl 0

;character	Luca, general, age 20, , x 114, y 119


character	Luca, general, age 20, , x 106, y 107
army
unit		roman hastati				exp 2 armour 0 weapon_lvl 0
unit		roman city militia			exp 2 armour 0 weapon_lvl 0
unit		roman velite				exp 2 armour 0 weapon_lvl 0
unit		roman velite				exp 2 armour 0 weapon_lvl 0

character	Luca, general, age 20, , x 102, y 124
army
unit		roman hastati				exp 2 armour 0 weapon_lvl 0
unit		roman city militia				exp 2 armour 0 weapon_lvl 0

character	Luca, general, age 20, , x 114, y 113
army
unit		roman city militia				exp 2 armour 0 weapon_lvl 0
unit		roman city militia				exp 2 armour 0 weapon_lvl 0


character	Oppius Clausus, admiral, age 29, , x 86, y 134 
army
unit		naval biremes				exp 0 armour 0 weapon_lvl 0

character	Sextus Antio, diplomat, age 29, , x 93, y 134 
traits GoodDiplomat  3

character	Decius Curtius, spy, age 29, , x 95, y 139 
traits GoodSpy 4

character_record		Amulius Julius, 	male, command 0, influence 0, management 0, subterfuge 0, age 13, alive, never_a_leader
character_record		Manius Julius, 	male, command 0, influence 0, management 0, subterfuge 0, age 10, alive, never_a_leader
character_record		Decius Julius, 	male, command 0, influence 0, management 0, subterfuge 0, age 7, alive, never_a_leader
character_record		Marcus Julius, 	male, command 0, influence 0, management 0, subterfuge 0, age 3, alive, never_a_leader
character_record		Faustina, 	female, command 0, influence 0, management 0, subterfuge 0, age 48, alive, never_a_leader
character_record		Poppaea, 	female, command 0, influence 0, management 0, subterfuge 0, age 29, alive, never_a_leader
character_record		Alypia, 	female, command 0, influence 0, management 0, subterfuge 0, age 29, alive, never_a_leader
character_record		Claudia, 	female, command 0, influence 0, management 0, subterfuge 0, age 28, alive, never_a_leader
character_record		Fadia, 	female, command 0, influence 0, management 0, subterfuge 0, age 13, alive, never_a_leader

relative 	Flavius Julius, 	Faustina,		Lucius Julius,	Quintus Julius,	Vibius Julius,	end
relative 	Lucius Julius, 	Poppaea,		Fadia,	Decius Julius,	Marcus Julius,	end
relative 	Quintus Julius, 	Alypia,		Amulius Julius,	end
relative 	Vibius Julius, 	Claudia,		Manius Julius,	end


faction	romans_brutii, balanced napoleon
denari	10000
settlement
{
	level large_city
	region Bactria

	year_founded 0
	population 3000
	plan_set default_set
	faction_creator parthia
	building
	{
		type core_building proconsuls_palace
	}
	building
	{
		type barracks army_barracks
	}
	building
	{
		type equestrian hippodrome
	}
	building
	{
		type missiles catapult_range
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type market trader
	}
	building
	{
		type hinterland_farms farms
	}
	building
	{
		type town_trade_control governors_trade_control
	}

	building
	{
		type town_wehrmacht_control governors_wehrmacht_control
	}
}

settlement
{
	level large_town
	region Kush

	year_founded 0
	population 2100
	plan_set default_set
	faction_creator parthia
	building
	{
		type barracks muster_field
	}
	building
	{
		type defenses stone_wall
	}
	building
	{
		type core_building governors_villa
	}
}


character	Tiberius Brutus, named character, leader, age 52, , x 327, y 151 
traits GoodCommander 1 , NaturalMilitarySkill 1 , GoodAttacker 1 , PoliticsSkill 2 , Intelligent 1
ancillaries drillmaster
army
unit		greek general's guard cavalry early				exp 1 armour 0 weapon_lvl 0
unit		greek archer				exp 1 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 1 armour 0 weapon_lvl 0

character	Aulus Brutus, named character, heir, age 34, , x 327, y 150
traits GoodCommander 1 , PoliticsSkill 2 , Rabblerouser 2 , GoodAdministrator 2
ancillaries quartermaster
army
unit		greek general's guard cavalry early				exp 1 armour 0 weapon_lvl 0
unit		greek archer				exp 1 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

character	Luca, general, age 20, , x 327, y 148 
army
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		east horse archer				exp 0 armour 0 weapon_lvl 0


character	Luca Antonius, spy, age 23, , x 328, y 152 
traits GoodSpy 4

character	Caius Flaminius, diplomat, age 23, , x 328 y 150
traits GoodDiplomat 3

character	Amulius Brutus, named character, age 31, , x 327, y 147 
traits GoodCommander 1 , NaturalMilitarySkill 2 , PoliticsSkill 1 , Intelligent 2
ancillaries doctor
army
unit		greek general's guard cavalry early				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		east bactria auxillia				exp 0 armour 0 weapon_lvl 0

character	Vibius Brutus, named character, age 30, , x 327, y 145
traits GoodCommander 1 , GoodAdministrator 2 , PoliticsSkill 1 , Intelligent 2 , MathematicsSkill 2
army
unit		greek general's guard cavalry early				exp 1 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

character_record		Cassius Brutus, 	male, command 0, influence 0, management 0, subterfuge 0, age 14, alive, never_a_leader
character_record		Titus Brutus, 	male, command 0, influence 0, management 0, subterfuge 0, age 10, alive, never_a_leader
character_record		Cornelius Brutus, 	male, command 0, influence 0, management 0, subterfuge 0, age 7, alive, never_a_leader
character_record		Oppius Brutus, 	male, command 0, influence 0, management 0, subterfuge 0, age 3, alive, never_a_leader
character_record		Galla, 	female, command 0, influence 0, management 0, subterfuge 0, age 50, alive, never_a_leader
character_record		Hostia, 	female, command 0, influence 0, management 0, subterfuge 0, age 30, alive, never_a_leader
character_record		Lucilla, 	female, command 0, influence 0, management 0, subterfuge 0, age 28, alive, never_a_leader
character_record		Paulina, 	female, command 0, influence 0, management 0, subterfuge 0, age 12, alive, never_a_leader

relative 	Tiberius Brutus, 	Galla,		Aulus Brutus,	Amulius Brutus,	Vibius Brutus,	end
relative 	Aulus Brutus, 	Hostia,		Paulina,	Titus Brutus,	Oppius Brutus,	end
relative 	Amulius Brutus, 	Lucilla,		Cassius Brutus,	Cornelius Brutus,	end

;<BMK>Атропатена (romans_scipii)

faction	romans_scipii, balanced smith
denari	10000
settlement
{
	level large_city
	region Atropatene

	year_founded 0
	population 4000
	plan_set default_set
	faction_creator armenia
	building
	{
		type core_building proconsuls_palace
	}
	building
	{
		type market trader
	}
	building
	{
		type hinterland_roads roads
	}
	building
	{
		type barracks army_barracks
	}
	building
	{
		type equestrian hippodrome
	}
	building
	{
		type missiles catapult_range
	}
	building
	{
		type town_trade_control governors_trade_control
	}
	building
	{
		type town_wehrmacht_control governors_wehrmacht_control
	}
	building
	{
		type defenses stone_wall
	}


}

settlement
{
	level town
	region Albania

	year_founded 0
	population 1000
	plan_set default_set
	faction_creator armenia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses stone_wall
	}
}

settlement
{
	level large_town
	region Media

	year_founded 0
	population 3500
	plan_set default_set
	faction_creator armenia
	building
	{
		type barracks city_barracks
	}
	building
	{
		type market trader
	}
	building
	{
		type core_building governors_palace
	}
	building
	{
		type hinterland_roads roads
	}
 	building
	{
		type defenses wooden_wall
	}
	building
	{
		type equestrian cavalry_barracks
	}
 

}



character	Atropat, named character, leader, age 50, , x 239, y 134 
traits GoodCommander 2 , PoliticsSkill 2 , GoodAdministrator 3 , Austere 1 , GoodInfantryGeneral 1
ancillaries aged_retainer
army
unit		east generals cavalry early atropatena			exp 3 armour 0 weapon_lvl 0
unit		atropatena axe scythian				exp 5 armour 0 weapon_lvl 0
unit		east infantry				exp 1 armour 0 weapon_lvl 0
unit		east midian cavalry				exp 3 armour 0 weapon_lvl 0

character	Cambyses  , named character, heir, age 32, , x 240, y 133 
traits GoodCommander 1 , NaturalMilitarySkill 3 , PoliticsSkill 1 , GoodRiskyAttacker 1
ancillaries drillmaster
army
unit		east generals cavalry early atropatena		exp 1 armour 0 weapon_lvl 0
unit		east infantry				exp 1 armour 0 weapon_lvl 0

character	Cyrus  , named character, age 30, , x 250, y 125 
traits NaturalMilitarySkill 1 , PoliticsSkill 1 , Intelligent 1 , Generous 1
army
unit		east generals cavalry early atropatena		exp 3 armour 0 weapon_lvl 0
unit		east midian cavalry				exp 5 armour 0 weapon_lvl 0
unit		east heavy infantry				exp 5 armour 0 weapon_lvl 0
unit		east heavy infantry				exp 5 armour 0 weapon_lvl 0
unit		east archer			                exp 5 armour 0 weapon_lvl 1




;character	Vaumisa, general, age 30, ,  x 239, y 134
;traits NaturalMilitarySkill 1 , PoliticsSkill 1 , Intelligent 1 , Generous 1
;army
;unit		roman hastati				exp 1 armour 0 weapon_lvl 0
;unit		roman hastati				exp 1 armour 0 weapon_lvl 0

character	Vaumisa Caecus, diplomat, age 26, , x 240, y 133 
traits GoodDiplomat 2

character	Xanthos Ovidius, spy, age 20, , x 238, y 132 
traits GoodSpy 3

character Zamolxis Volesus, admiral, age 22, , x 255, y 149
army
unit		naval biremes				exp 0 armour 0 weapon_lvl 0

character	Darius  , named character, age 27, , x 244, y 147 
traits NaturalMilitarySkill 3 , PoliticsSkill 1 , Intelligent 1 , Generous 1 , AuthoritarianRomanVirtue 2
army
unit		east generals cavalry early atropatena		exp 1 armour 0 weapon_lvl 0
unit		east hillmen					exp 2 armour 0 weapon_lvl 0
unit		east peltast					exp 2 armour 0 weapon_lvl 0
unit		east midian cavalry				exp 5 armour 0 weapon_lvl 0

character_record		Artaxerxes  , 	male, command 0, influence 0, management 0, subterfuge 0, age 11, alive, never_a_leader
character_record		Roshan  , 	male, command 0, influence 0, management 0, subterfuge 0, age 9, alive, never_a_leader
character_record		Xerxes  , 	male, command 0, influence 0, management 0, subterfuge 0, age 7, alive, never_a_leader
character_record		Achaemenes  , 	male, command 0, influence 0, management 0, subterfuge 0, age 2, alive, never_a_leader
character_record		Metella, 	female, command 0, influence 0, management 0, subterfuge 0, age 50, alive, never_a_leader
character_record		Antistia, 	female, command 0, influence 0, management 0, subterfuge 0, age 28, alive, never_a_leader
character_record		Crispina, 	female, command 0, influence 0, management 0, subterfuge 0, age 28, alive, never_a_leader
character_record		Placidia, 	female, command 0, influence 0, management 0, subterfuge 0, age 3, alive, never_a_leader

relative 	Atropat, 	Metella,		Cambyses  ,	Cyrus  ,	Darius  ,	Artaxerxes  ,	end
relative 	Cambyses  , 	Antistia,		Roshan  ,	Xerxes  ,	end
relative 	Cyrus  , 	Crispina,		Placidia,	Achaemenes  ,	end

;<BMK>Македония (macedon)

faction	macedon, balanced napoleon
denari	10000
settlement
{
	level large_city
	region Macedonia

	year_founded 0
	population 6000
	plan_set default_set
	faction_creator macedon
	building
	{
		type core_building proconsuls_palace
	}
	building
	{
		type defenses stone_wall
	}
	building
	{
		type hinterland_roads roads
	}
	building
	{
		type hinterland_farms farms
	}
	building
	{
		type port_buildings port
	}
	building
	{
		type hinterland_mines mines
	}

	building
	{
		type barracks army_barracks
	}
	building
	{
		type equestrian hippodrome
	}
	building
	{
		type missiles catapult_range
	}



	building
	{
		type town_trade_control governors_trade_control
	}

	building
	{
		type town_wehrmacht_control governors_wehrmacht_control
	}


}

settlement
{
	level city
	region Thessalia

	year_founded 0
	population 3000
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_palace
	}
	building
	{
		type equestrian stables
	}
	building
	{
		type defenses stone_wall
	}
	building
	{
		type hinterland_roads roads
	}
	building
	{
		type hinterland_farms farms
	}
	building
	{
		type barracks militia_barracks
	}
}

settlement
{
	level large_town
	region Lesbos

	year_founded 0
	population 2300
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_villa
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type hinterland_farms farms
	}
	building
	{
		type port_buildings port
	}
}

settlement
{
	level town
	region Dardania

	year_founded 0
	population 3500
	plan_set default_set
	faction_creator dacia
	building
	{
		type barracks muster_field
	}
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

character	Antigonos, named character, leader, subterfuge 0, age 50, , x 136, y 124 
traits GoodCommander 2 , NaturalMilitarySkill 1 , GoodRiskyAttacker 2 , PublicFaith 1 , GoodAdministrator 1 , Intelligent 1
ancillaries shieldbearer
army
unit		greek general's guard cavalry early				exp 2 armour 0 weapon_lvl 0
unit		greek levy pikemen				exp 1 armour 0 weapon_lvl 0
unit		greek levy pikemen				exp 1 armour 0 weapon_lvl 0
unit		greek royal pikemen				exp 2 armour 0 weapon_lvl 0
unit		greek heavy cavalry				exp 1 armour 0 weapon_lvl 0
unit		greek heavy cavalry				exp 1 armour 0 weapon_lvl 0
unit		greek light lancer				exp 0 armour 0 weapon_lvl 0

character	Gyras, named character, heir, age 32, , x 137, y 126 
traits GoodCommander 1 , NaturalMilitarySkill 2 , PublicFaith 1 , MathematicsSkill 1 , Intelligent 1 , Generous 1
ancillaries actor
army
unit		greek general's guard cavalry early				exp 1 armour 0 weapon_lvl 0
unit		greek levy pikemen				exp 0 armour 0 weapon_lvl 0
unit		greek levy pikemen				exp 0 armour 0 weapon_lvl 0
unit		greek levy pikemen				exp 0 armour 0 weapon_lvl 0
unit		greek peltast				exp 1 armour 0 weapon_lvl 0

character	Euenus, named character, age 27, , x 136, y 115 
traits NaturalMilitarySkill 2 , PublicFaith 1 , GoodAdministrator 2
ancillaries treasurer
army
unit		greek general's guard cavalry early				exp 1 armour 0 weapon_lvl 0
unit		greek levy pikemen				exp 0 armour 0 weapon_lvl 0
unit		greek levy pikemen				exp 0 armour 0 weapon_lvl 0
unit		greek light lancer				exp 0 armour 0 weapon_lvl 0
unit		greek archer						exp 0 armour 0 weapon_lvl 0

character	Damasos, named character, age 20, , x 140, y 123 
traits GoodAdministrator 1
ancillaries tutor
army
unit		greek general's guard cavalry early				exp 1 armour 0 weapon_lvl 0
unit		greek levy pikemen				exp 0 armour 0 weapon_lvl 0
unit		greek archer						exp 0 armour 0 weapon_lvl 0

character	Cleitos of Gonni, general, age 20, , x 154, y 113
army
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

;Dardania
character	Carpus, general, age 20, , x 136, y 133
army
unit		greek peltast				exp 3 armour 0 weapon_lvl 0
unit		greek levy pikemen			exp 3 armour 0 weapon_lvl 0
unit		greek levy pikemen			exp 3 armour 0 weapon_lvl 0
unit		greek levy pikemen			exp 3 armour 0 weapon_lvl 0

;character	Cleitos of Gonni, general, age 20, , x 146, y 110
;army
;unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
;unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
;unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

character	Carpus of Pylos, diplomat, age 20, , x 135, y 123 
traits GoodDiplomat 3
ancillaries wine_steward

character	Aegisthes of Larissa, spy, age 20, , x 139, y 125 
traits GoodSpy 2
ancillaries dancer

character	Alcaeos of Abydos, admiral, age 20, , x 151, y 113 
army
unit		naval biremes				exp 0 armour 0 weapon_lvl 0
unit		naval biremes				exp 0 armour 0 weapon_lvl 0

character_record		Abreas, 	male, command 0, influence 0, management 0, subterfuge 0, age 11, alive, never_a_leader
character_record		Deukalos, 	male, command 0, influence 0, management 0, subterfuge 0, age 4, alive, never_a_leader
character_record		Aloeus, 	male, command 0, influence 0, management 0, subterfuge 0, age 14, alive, never_a_leader
character_record		Thessala, 	female, command 0, influence 0, management 0, subterfuge 0, age 50, alive, never_a_leader
character_record		Alkmena, 	female, command 0, influence 0, management 0, subterfuge 0, age 30, alive, never_a_leader
character_record		Pervica, 	female, command 0, influence 0, management 0, subterfuge 0, age 24, alive, never_a_leader
character_record		Caleope, 	female, command 0, influence 0, management 0, subterfuge 0, age 5, alive, never_a_leader

relative 	Antigonos, 	Thessala,		Gyras,	Euenus,	Damasos,	end
relative 	Gyras, 	Alkmena,		Aloeus,	Abreas,	end
relative 	Euenus, 	Pervica,		Caleope,	Deukalos,	end

;<BMK>Египет

faction	egypt, fortified caesar ;religious henry
denari	10000
settlement
{
	level large_city
	region Nile_Delta

	year_founded 0
	population 3500
	plan_set default_set
	faction_creator egypt
	building
	{
		type core_building proconsuls_palace
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type port_buildings port
	}
	building
	{
		type market trader
	}
	building
	{
		type hinterland_roads roads
	}
	building
	{
		type hinterland_farms farms
	}
	building
	{
		type barracks army_barracks
	}
	building
	{
		type equestrian hippodrome
	}
	building
	{
		type missiles catapult_range
	}



	building
	{
		type town_trade_control governors_trade_control
	}

	building
	{
		type town_wehrmacht_control governors_wehrmacht_control
	}

}

settlement
{
	level city
	region Middle_Egypt

	year_founded 0
	population 6000
	plan_set default_set
	faction_creator egypt
	building
	{
		type core_building governors_palace
	}
	building
	{
		type defenses stone_wall
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type missiles practice_field
	}
	building
	{
		type market trader
	}
	building
	{
		type temple_of_law temple_of_law_shrine
	}
	building
	{
		type hinterland_roads roads
	}
	building
	{
		type hinterland_farms farms
	}
}

settlement
{
	level large_town
	region Thebais

	year_founded 0
	population 4500
	plan_set default_set
	faction_creator egypt
	building
	{
		type core_building governors_villa
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type missiles practice_field
	}
	building
	{
		type temple_of_justice temple_of_justice_shrine
	}
	building
	{
		type hinterland_roads roads
	}
	building
	{
		type hinterland_farms farms
	}
}

settlement
{
	level town
	region Cyprus

	year_founded 0
	population 1600
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level large_town
	region Judaea

	year_founded 0
	population 3000
	plan_set default_set
	faction_creator egypt
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type missiles practice_field
	}
	building
	{
		type temple_of_law temple_of_law_shrine
	}
	building
	{
		type hinterland_roads roads
	}
}

settlement
{
	level large_town
	region Phoenicia

	year_founded 0
	population 4500
	plan_set default_set
	faction_creator seleucid
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses wooden_wall
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type port_buildings port
	}
	building
	{
		type market market
	}
	building
	{
		type hinterland_roads roads
	}
}

settlement
{
	level town
	region Marmarica

	year_founded 0
	population 1600
	plan_set default_set
	faction_creator egypt
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level town
	region Nubia

	year_founded 0
	population 1600
	plan_set default_set
	faction_creator egypt
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type hinterland_farms farms
	}
}

settlement
{
	level village
	region Oasis_Magna

	year_founded 0
	population 600
	plan_set default_set
	faction_creator egypt
}

settlement
{
	level town
	region Pamphylia

	year_founded 0
	population 1200
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type market trader
	}
}

character	Hekhemmut, named character, leader, age 55, , x 177, y 75 
traits GoodCommander 1 , NaturalMilitarySkill 1 , PublicFaith 2 , MathematicsSkill 2
ancillaries librarian, master_embalmer
army
unit		egyptian general's bodyguard early				exp 1 armour 0 weapon_lvl 0
unit		egyptian nubian spearmen				exp 0 armour 0 weapon_lvl 0
unit		egypt city militia				exp 0 armour 0 weapon_lvl 0
unit		egyptian archer				exp 0 armour 0 weapon_lvl 0

character	Khnumhoptep, named character, heir, age 40, , x 183, y 69 
traits StrategicSkill 2 , NaturalMilitarySkill 1 , PublicFaith 3
ancillaries magician
army
unit		egyptian general's bodyguard early				exp 1 armour 0 weapon_lvl 0
unit		egyptian nubian spearmen				exp 0 armour 0 weapon_lvl 0
unit		egyptian archer				exp 0 armour 0 weapon_lvl 0

character	Ptahhotep, named character, age 35, , x 202, y 88 
traits GoodCommander 1 , PublicFaith 2 , MathematicsSkill 3 , Embezzler 1
ancillaries mathematician
army
unit		egyptian general's bodyguard early				exp 1 armour 0 weapon_lvl 0
unit		judean infantry				exp 0 armour 0 weapon_lvl 0
unit		egyptian archer				exp 0 armour 0 weapon_lvl 0

character	Wah, admiral, age 29, , x 177, y 78 
army
unit		naval biremes				exp 0 armour 0 weapon_lvl 0
unit		naval biremes				exp 0 armour 0 weapon_lvl 0

character	Nakhti, diplomat, age 20, , x 178, y 73 
traits GoodDiplomat 2

character	Khu, spy, age 20, , x 201, y 90 
traits GoodSpy 3
ancillaries poisoner

character	Neferet, general, age 20, , x 199, y 98  ;jerusalem
army
unit		egypt city militia				exp 0 armour 0 weapon_lvl 0
unit		egyptian peltast				exp 0 armour 0 weapon_lvl 0

character	Kiya, named character, age 28, , x 190, y 52 
traits NaturalMilitarySkill 1 , PublicFaith 1 , GoodAdministrator 1
ancillaries master_of_archers
army
unit		egyptian general's bodyguard early				exp 1 armour 0 weapon_lvl 0
unit		egypt city militia				exp 0 armour 0 weapon_lvl 0
unit		egyptian archer				exp 0 armour 0 weapon_lvl 0

character	Nakhrankh, general, age 20, , x 189, y 101
army
unit		egyptian nubian spearmen				exp 0 armour 0 weapon_lvl 0
unit		egyptian peltast				exp 0 armour 0 weapon_lvl 0

character	Miwsher, general, age 20, , x 182, y 37
army
unit		egyptian nubian spearmen				exp 0 armour 0 weapon_lvl 0
unit		egyptian peltast				exp 0 armour 0 weapon_lvl 0

character	Miwsher, general, age 20, , x 163, y 74
army
unit		egyptian nubian spearmen				exp 0 armour 0 weapon_lvl 0
unit		egyptian peltast				exp 0 armour 0 weapon_lvl 0

character	Miwsher, general, age 20, , x 173, y 43
army
unit		egyptian nubian spearmen				exp 0 armour 0 weapon_lvl 0
unit		egyptian peltast				exp 0 armour 0 weapon_lvl 0

character	Miwsher, general, age 20, , x 180, y 107
army
unit		egyptian nubian spearmen				exp 0 armour 0 weapon_lvl 0
unit		egyptian peltast				exp 0 armour 0 weapon_lvl 0

character_record		Ahmose, 	male, command 0, influence 0, management 0, subterfuge 0, age 15, alive, never_a_leader
character_record		Meryre, 	male, command 0, influence 0, management 0, subterfuge 0, age 6, alive, never_a_leader
character_record		Tanutamun, 	male, command 0, influence 0, management 0, subterfuge 0, age 2, alive, never_a_leader
character_record		Heruben, 	male, command 0, influence 0, management 0, subterfuge 0, age 9, alive, never_a_leader
character_record		Euredice, 	female, command 0, influence 0, management 0, subterfuge 0, age 55, alive, never_a_leader
character_record		Aneksi, 	female, command 0, influence 0, management 0, subterfuge 0, age 35, alive, never_a_leader
character_record		Satsobek, 	female, command 0, influence 0, management 0, subterfuge 0, age 30, alive, never_a_leader
character_record		Pedibastet, 	female, command 0, influence 0, management 0, subterfuge 0, age 26, alive, never_a_leader
character_record		Senbi, 	female, command 0, influence 0, management 0, subterfuge 0, age 20, alive, never_a_leader
character_record		Hebeny, 	female, command 0, influence 0, management 0, subterfuge 0, age 10, alive, never_a_leader
character_record		Arsinoe, 	female, command 0, influence 0, management 0, subterfuge 0, age 4, alive, never_a_leader

relative 	Hekhemmut, 	Euredice,		Khnumhoptep,	Ptahhotep,	Kiya,	Senbi,	end
relative 	Khnumhoptep, 	Aneksi,		Ahmose,	Hebeny,	Meryre,	end
relative 	Ptahhotep, 	Satsobek,		Arsinoe,	Tanutamun,	end
relative 	Kiya, 	Pedibastet,		Heruben,	end


faction	seleucid, balanced napoleon
denari	3000
settlement
{
	level large_city
	region Syria

	year_founded 0
	population 4000
	plan_set default_set
	faction_creator seleucid
	building
	{
		type core_building proconsuls_palace
	}
	building
	{
		type defenses wooden_wall
	}
	building
	{
		type hinterland_roads roads
	}
	building
	{
		type port_buildings port
	}
	building
	{
		type barracks army_barracks
	}
	building
	{
		type equestrian hippodrome
	}
	building
	{
		type missiles catapult_range
	}



	building
	{
		type town_trade_control governors_trade_control
	}

	building
	{
		type town_wehrmacht_control governors_wehrmacht_control
	}

}

settlement
{
	level town
	region Coele_Syria

	year_founded 0
	population 1500
	plan_set default_set
	faction_creator armenia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level town
	region Osrhoene

	year_founded 0
	population 1200
	plan_set default_set
	faction_creator seleucid
	building
	{
		type core_building governors_house
	}
	building
	{
		type market trader
	}
	building
	{
		type hinterland_roads roads
	}
}

settlement
{
	level large_town
	region Babylonia

	year_founded 0
	population 4500
	plan_set default_set
	faction_creator seleucid
	building
	{
		type core_building governors_villa
	}
	building
	{
		type missiles practice_field
	}
	building
	{
		type hinterland_farms farms
	}
	building
	{
		type hinterland_roads roads
	}
 	building
	{
		type barracks city_barracks
	}

}

settlement
{
	level town
	region Lydia

	year_founded 0
	population 1500
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type hinterland_roads roads
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level city
	region Elymais

	year_founded 0
	population 4000
	plan_set default_set
	faction_creator armenia
	building
	{
		type core_building governors_palace
	}
	building
	{
		type missiles practice_field
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks militia_barracks
	}
	building
	{
		type hinterland_roads roads
	}
	building
	{
		type hinterland_farms farms
	}
}

settlement
{
	level town
	region Cilicia

	year_founded 0
	population 1200
	plan_set default_set
	faction_creator pontus
	building
	{
		type core_building governors_house
	}
}

settlement
{
	level large_town
	region Cappadocia

	year_founded 0
	population 2400
	plan_set default_set
	faction_creator pontus
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type missiles practice_field
	}
	building
	{
		type market trader
	}
}

settlement
{
	level large_town
	region Hyrcania

	year_founded 0
	population 2000
	plan_set default_set
	faction_creator armenia
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type missiles practice_field
	}
}

settlement
{
	level large_town
	region Persis

	year_founded 0
	population 3000
	plan_set default_set
	faction_creator seleucid
	building
	{
		type core_building governors_villa
	}
	building
	{
		type equestrian stables
	}
	building
	{
		type missiles practice_field
	}
	building
	{
		type hinterland_roads roads
	}
}

settlement
{
	level town
	region Tabiena

	year_founded 0
	population 1000
	plan_set default_set
	faction_creator parthia
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level town
	region Carmania

	year_founded 0
	population 1200
	plan_set default_set
	faction_creator parthia
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type hinterland_roads roads
	}
}

settlement
{
	level town
	region Drangiana

	year_founded 0
	population 1000
	plan_set default_set
	faction_creator parthia
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level town
	region Aria

	year_founded 0
	population 1200
	plan_set default_set
	faction_creator parthia
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level town
	region Margiana

	year_founded 0
	population 1000
	plan_set default_set
	faction_creator seleucid
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level large_town
	region Sogdiana

	year_founded 0
	population 4600
	plan_set default_set
	faction_creator parthia
	building
	{
		type core_building governors_villa
	}
	building
	{
		type missiles practice_field
	}
	building
	{
		type market trader
	}
 	building
	{
		type barracks city_barracks
	}

}

settlement
{
	level town
	region Characene

	year_founded 0
	population 1200
	plan_set default_set
	faction_creator parthia
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level town
	region Astauene

	year_founded 0
	population 1000
	plan_set default_set
	faction_creator parthia
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level town
	region Parthyene

	year_founded 0
	population 800
	plan_set default_set
	faction_creator seleucid
	building
	{
		type core_building governors_house
	}
	building
	{
		type market trader
	}
}

settlement
{
	level village
	region Choarene

	year_founded 0
	population 500
	plan_set default_set
	faction_creator parthia
}

settlement
{
	level town
	region Phrygia

	year_founded 0
	population 1000
	plan_set default_set
	faction_creator thrace
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level village
	region Sophene

	year_founded 0
	population 500
	plan_set default_set
	faction_creator armenia
}

settlement
{
	level village
	region Gordyene

	year_founded 0
	population 500
	plan_set default_set
	faction_creator armenia
}

character	Antiochus, named character, leader, age 60, , x 200, y 111 
traits GoodCommander 2 , NaturalMilitarySkill 1 , PublicFaith 2 , GoodAdministrator 2
ancillaries heroic_saviour
army
unit		greek general's guard cavalry early				exp 1 armour 0 weapon_lvl 0
unit		greek medium cavalry				exp 1 armour 0 weapon_lvl 0
unit		greek medium cavalry				exp 1 armour 0 weapon_lvl 0
unit		greek levy pikemen				exp 0 armour 0 weapon_lvl 0
unit		greek levy pikemen				exp 0 armour 0 weapon_lvl 0
unit		greek medium cavalry				exp 0 armour 0 weapon_lvl 0
unit		greek peltast				exp 0 armour 0 weapon_lvl 0
unit		greek elephant african				exp 0 armour 0 weapon_lvl 0
unit		greek elephant african				exp 0 armour 0 weapon_lvl 0
unit		greek elephant african				exp 0 armour 0 weapon_lvl 0

character	Aristarchus, named character, heir, age 40, , x 241, y 109 
traits Aesthetic 2 , GoodAdministrator 2 , Intelligent 3 , Embezzler 1
ancillaries exotic_slave, biographer
army
unit		greek general's guard cavalry early				exp 1 armour 0 weapon_lvl 0
unit		greek cavalry				exp 0 armour 0 weapon_lvl 0
unit		greek cavalry				exp 0 armour 0 weapon_lvl 0
unit		greek levy pikemen				exp 0 armour 0 weapon_lvl 0
unit		greek levy pikemen				exp 0 armour 0 weapon_lvl 0
unit		greek levy pikemen				exp 0 armour 0 weapon_lvl 0
unit		greek peltast				exp 0 armour 0 weapon_lvl 0

character	Alexander, named character, age 30, , x 162, y 113
traits GoodAdministrator 2 , Intelligent 1
ancillaries desert_scout
army
unit		greek general's guard cavalry early				exp 1 armour 0 weapon_lvl 0
unit		greek levy pikemen				exp 0 armour 0 weapon_lvl 0
unit		greek levy pikemen				exp 0 armour 0 weapon_lvl 0

character	Demetrius, named character, age 26, , x 294, y 96
traits Intelligent 2 , Energetic 1
ancillaries mentor
army
unit		greek general's guard cavalry early				exp 1 armour 0 weapon_lvl 0
unit		greek levy pikemen				exp 0 armour 0 weapon_lvl 0
unit		greek levy pikemen				exp 0 armour 0 weapon_lvl 0
unit		greek levy pikemen				exp 0 armour 0 weapon_lvl 0
unit		greek cavalry				exp 0 armour 0 weapon_lvl 0
unit		greek cavalry				exp 0 armour 0 weapon_lvl 0

character	Achaeus of Hippus, general, age 20, , x 216, y 116 
army
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

character	Molon, general, age 20, , x 257, y 114 
army
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

;character	Molon, general, age 20, , x 250, y 125 
;army
;unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
;unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

character	Molon, general, age 20, , x 192, y 124 
army
unit		greek levy pikemen				exp 0 armour 0 weapon_lvl 0
unit		greek levy pikemen				exp 0 armour 0 weapon_lvl 0

character	Molon, general, age 20, , x 275, y 137 
army
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

character	Molon, general, age 20, , x 205, y 99 
army
unit		greek levy pikemen				exp 0 armour 0 weapon_lvl 0
unit		greek levy pikemen				exp 0 armour 0 weapon_lvl 0
unit		greek cavalry				exp 0 armour 0 weapon_lvl 0
unit		greek peltast				exp 0 armour 0 weapon_lvl 0

character	Molon, general, age 20, , x 289, y 114 
army
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

character	Molon, general, age 20, , x 308, y 89 
army
unit		greek cavalry				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

character	Molon, general, age 20, , x 329, y 126 
army
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

character	Molon, general, age 20, , x 319, y 135 
army
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

character	Molon, general, age 20, , x 306, y 152 
army
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

; mARAKANDA
character	Molon, general, age 20, , x 314, y 169 
army
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		east bactria auxillia				exp 0 armour 0 weapon_lvl 0
unit		east bactria auxillia				exp 0 armour 0 weapon_lvl 0
unit		east bactria auxillia				exp 0 armour 0 weapon_lvl 0

;character	Molon, general, age 20, , x 327, y 148 
;army
;unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
;unit		greek cavalry				exp 0 armour 0 weapon_lvl 0

character	Molon, general, age 20, , x 265, y 98 
army
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

character	Molon, general, age 20, , x 292, y 149 
army
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

character	Molon, general, age 20, , x 284, y 135 
army
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

character	Molon, general, age 20, , x 277, y 127 
army
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

character	Molon, general, age 20, , x 168, y 118 
army
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

character	Molon, general, age 20, , x 219, y 126 
army
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

character	Molon, general, age 20, , x 231, y 124 
army
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

character	Molon, general, age 20, , x 193, y 114 
army
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

character	Euthydemus, admiral, age 20, , x 193, y 108 
army
unit		naval biremes				exp 0 armour 0 weapon_lvl 0

character	Attalus, diplomat, age 20, , x 204, y 112 
traits GoodDiplomat 3

character	Philip, spy, age 20, , x 185, y 123 
traits GoodSpy 2

;;;;;;;;;; Next spies is a cheat. Test version 0.1

character	Attalus, spy, age 20, , x 367, y 94
traits GoodSpy 2

character	Attalus, spy, age 20, , x 360, y 117
traits GoodSpy 2

character	Attalus, spy, age 20, , x 368, y 122
traits GoodSpy 2

character	Attalus, spy, age 20, , x 368, y 123
traits GoodSpy 2



character_record		Cleitos, 	male, command 0, influence 0, management 0, subterfuge 0, age 14, alive, never_a_leader
character_record		Gyras, 	male, command 0, influence 0, management 0, subterfuge 0, age 9, alive, never_a_leader
character_record		Kassandros, 	male, command 0, influence 0, management 0, subterfuge 0, age 4, alive, never_a_leader
character_record		Zeuxis, 	male, command 0, influence 0, management 0, subterfuge 0, age 10, alive, never_a_leader
character_record		Alkmena, 	female, command 0, influence 0, management 0, subterfuge 0, age 58, alive, never_a_leader
character_record		Aspasia, 	female, command 0, influence 0, management 0, subterfuge 0, age 30, alive, never_a_leader
character_record		Parthenope, 	female, command 0, influence 0, management 0, subterfuge 0, age 28, alive, never_a_leader
character_record		Athena, 	female, command 0, influence 0, management 0, subterfuge 0, age 24, alive, never_a_leader
character_record		Dione, 	female, command 0, influence 0, management 0, subterfuge 0, age 24, alive, never_a_leader
character_record		Helike, 	female, command 0, influence 0, management 0, subterfuge 0, age 8, alive, never_a_leader
character_record		Orthia, 	female, command 0, influence 0, management 0, subterfuge 0, age 2, alive, never_a_leader

relative 	Antiochus, 	Alkmena,		Aristarchus,	Alexander,	Demetrius,	Dione,	end
relative 	Aristarchus, 	Aspasia,		Cleitos,	Zeuxis,	end
relative 	Alexander, 	Parthenope,		Gyras,	Helike,	end
relative 	Demetrius, 	Athena,		Kassandros,	Orthia,	end

;<BMK>Карфаген (carthage)

faction	carthage, trader napoleon
denari	10000
settlement
{
	level large_city
	region Zeugitana

	year_founded 0
	population 6000
	plan_set default_set
	faction_creator carthage
	building
	{
		type core_building proconsuls_palace
	}
	building
	{
		type defenses stone_wall
	}
	building
	{
		type port_buildings port
	}
	building
	{
		type market market
	}
	building
	{
		type temple_of_justice temple_of_justice_temple
	}
	building
	{
		type hinterland_farms farms
	}
        building
	{
		type hinterland_roads paved_roads
	}
	building
	{
		type barracks army_barracks
	}
	building
	{
		type equestrian hippodrome
	}
	building
	{
		type missiles catapult_range
	}



	building
	{
		type town_trade_control governors_trade_control
	}

	building
	{
		type town_wehrmacht_control governors_wehrmacht_control
	}



}

settlement
{
	level large_town
	region Sicilia_Poeni

	year_founded 0
	population 3000
	plan_set default_set
	faction_creator carthage
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks city_barracks
	}
	building
	{
		type market trader
	}
	building
	{
		type port_buildings port
	}
}

settlement
{
	level large_town
	region Byzacium

	year_founded 0
	population 3000
	plan_set default_set
	faction_creator carthage
	building
	{
		type core_building governors_villa
	}
	building
	{
		type barracks militia_barracks
	}
	building
	{
		type market trader
	}
	building
	{
		type hinterland_farms farms
	}
	building
	{
		type  missiles practice_field
	}
	building
	{
		type port_buildings port
	}
        building
	{
		type hinterland_roads paved_roads
	}
}

settlement
{
	level large_town
	region Sardinia

	year_founded 0
	population 700
	plan_set default_set
	faction_creator carthage
	building
	{
		type core_building governors_villa
	}
	building
	{
		type port_buildings port
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level large_town
	region Baliares

	year_founded 0
	population 1000
	plan_set default_set
	faction_creator carthage
	building
	{
		type core_building governors_villa
	}
	building
	{
		type port_buildings port
	}
}

settlement
{
	level town
	region Corsica

	year_founded 0
	population 700
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level town
	region Tripolitania

	year_founded 0
	population 800
	plan_set default_set
	faction_creator carthage
        building
        {
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level large_town
	region Bastetania

	year_founded 0
	population 4500
	plan_set default_set
	faction_creator carthage
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks city_barracks
	}
	building
	{
		type port_buildings port
	}
 	building
	{
		type hinterland_farms farms
	}

}

settlement
{
	level town
	region Locus_Massyli

	year_founded 0
	population 1500
	plan_set default_set
	faction_creator carthage
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type hinterland_farms farms
	}
        building
	{
		type hinterland_roads roads
	}
}


character	Hanno, named character, leader, age 65, , x 96, y 105 
traits GoodCommander 2 , GoodDefender 1 , PublicFaith 1 , GoodAdministrator 2 , GoodTrader 1
ancillaries spymaster
army
unit		carthaginian general's cavalry early		exp 6 armour 0 weapon_lvl 0
unit		punic numidian cavalry				exp 6 armour 0 weapon_lvl 0
unit		carthaginian elephant forest			exp 6 armour 0 weapon_lvl 0
unit		carthaginian infantry				exp 4 armour 0 weapon_lvl 0
unit		carthaginian infantry				exp 4 armour 0 weapon_lvl 0
unit		merc balearic slingers				exp 5 armour 0 weapon_lvl 0
unit		merc numidian cavalry				exp 2 armour 0 weapon_lvl 0
unit		carthage scutarii				exp 6 armour 0 weapon_lvl 0
unit		carthaginian medium infantry				exp 2 armour 0 weapon_lvl 0

character	Hasdrubal, named character, heir, age 45, , x 82, y 101
traits NaturalMilitarySkill 3 , GoodDefender 1 , Intelligent 1 , Energetic 1 , GoodAmbusher 2
ancillaries Herald
army
unit		carthaginian general's cavalry early				exp 1 armour 0 weapon_lvl 0
unit		carthaginian medium infantry				exp 1 armour 0 weapon_lvl 0
unit		carthaginian medium infantry				exp 1 armour 0 weapon_lvl 0
unit		merc numidian cavalry				exp 1 mour 0 weapon_lvl 0

character	Burrhus, named character, age 41, , x 85, y 92 
traits GoodAdministrator 2 , Intelligent 1 , PublicFaith 1 , GoodTrader 2
ancillaries priest_of_Tanit, merchant
army
unit		carthaginian general's cavalry early				exp 1 armour 0 weapon_lvl 0
unit		carthaginian infantry				exp 0 armour 0 weapon_lvl 0
unit		punic numidian cavalry				exp 0 armour 0 weapon_lvl 0
unit		carthaginian infantry				exp 0 armour 0 weapon_lvl 0

character	Theages, named character, age 23, , x 94, y 104
traits GoodAdministrator 2 , PublicFaith 2
ancillaries freeman_clerk, merchant
army
unit		carthaginian general's cavalry early				exp 1 armour 0 weapon_lvl 0
unit		carthaginian peltast				exp 0 armour 0 weapon_lvl 0
unit		carthaginian infantry				exp 0 armour 0 weapon_lvl 0
unit		carthaginian infantry				exp 0 armour 0 weapon_lvl 0

character	Theodekles, named character, age 22, , x 35, y 111 
traits GoodAdministrator 2
ancillaries merchant
army
unit		carthaginian general's cavalry early				exp 1 armour 0 weapon_lvl 0
unit		punic numidian cavalry				exp 1 armour 0 weapon_lvl 0
unit		merc balearic slingers				exp 2 armour 0 weapon_lvl 0
unit		merc balearic slingers				exp 2 armour 0 weapon_lvl 0
unit		carthaginian infantry				exp 1 armour 0 weapon_lvl 0
unit		carthaginian infantry				exp 1 armour 0 weapon_lvl 0
unit		carthaginian infantry				exp 1 armour 0 weapon_lvl 0

character	Theophanes, named character, age 21, , x 12, y 111 
traits NaturalMilitarySkill 1 , StrategicSkill 1 , Intelligent 1 , PublicFaith 1
ancillaries famous_warrior, merchant
army
unit		carthaginian general's cavalry early				exp 1 armour 0 weapon_lvl 0
unit		punic numidian cavalry				exp 1 armour 0 weapon_lvl 0
unit		punic numidian cavalry				exp 1 armour 0 weapon_lvl 0
unit		carthaginian infantry				exp 1 armour 0 weapon_lvl 0
unit		carthaginian infantry				exp 1 armour 0 weapon_lvl 0
unit		carthaginian peltast				exp 1 armour 0 weapon_lvl 0
unit		merc balearic slingers				exp 2 armour 0 weapon_lvl 0

character	Milkpilles, general, age 20, , x 79, y 113
traits GoodAdministrator 1 , Intelligent 1 , PublicFaith 1
ancillaries merchant
army
unit		carthaginian infantry				exp 0 armour 0 weapon_lvl 0
unit		carthaginian infantry				exp 0 armour 0 weapon_lvl 0

character	Milkpilles, general, age 20, , x 82, y 130
traits GoodAdministrator 1 , Intelligent 1 , PublicFaith 1
army
unit		carthaginian city militia				exp 0 armour 0 weapon_lvl 0
unit		carthaginian city militia				exp 0 armour 0 weapon_lvl 0

character	Milkpilles, general, age 20, , x 96, y 75
traits GoodAdministrator 1 , Intelligent 1 , PublicFaith 1
ancillaries merchant
army
unit		carthaginian city militia				exp 0 armour 0 weapon_lvl 0
unit		carthaginian city militia				exp 0 armour 0 weapon_lvl 0
unit		carthaginian city militia				exp 0 armour 0 weapon_lvl 0

character	Milkpilles, general, age 20, , x 54, y 119
traits GoodAdministrator 1 , Intelligent 1 , PublicFaith 1
ancillaries merchant
army
unit		carthaginian city militia				exp 0 armour 0 weapon_lvl 0
unit		carthaginian city militia				exp 0 armour 0 weapon_lvl 0
unit		merc balearic slingers				exp 2 armour 0 weapon_lvl 0

character	Milkpilles, general, age 20, , x 59, y 102
traits GoodAdministrator 1 , Intelligent 1 , PublicFaith 1
ancillaries merchant
army
unit		carthaginian infantry				exp 0 armour 0 weapon_lvl 0
unit		carthaginian infantry				exp 0 armour 0 weapon_lvl 0

character	Thero, admiral, age 25, , x 83, y 104 
army
unit		naval biremes				exp 1 armour 0 weapon_lvl 0
unit		naval biremes				exp 1 armour 0 weapon_lvl 0
unit		naval biremes				exp 1 armour 0 weapon_lvl 0
unit		naval biremes				exp 1 armour 0 weapon_lvl 0
unit		naval biremes				exp 1 armour 0 weapon_lvl 0

character	Danel, admiral, age 20, , x 85, y 129 
army
unit		naval biremes				exp 0 armour 0 weapon_lvl 0

character	Timasion, admiral, age 28, , x 92, y 105 
army
unit		naval biremes				exp 0 armour 0 weapon_lvl 0

character	Danel, admiral, age 20, , x 37, y 108 
army
unit		naval biremes				exp 0 armour 0 weapon_lvl 0

character	Aqhat, spy, age 27, , x 98, y 103 
traits GoodSpy 4
ancillaries courtesan

character	Chryses, spy, age 27, , x 34, y 114 
traits GoodSpy 4
ancillaries courtesan

character	Annibas, diplomat, age 27, , x 81, y 103 
traits GoodDiplomat 4

character	Balshillek, diplomat, age 27, , x 14, y 112 
traits GoodDiplomat 4

character_record		Bomilkar, 	male, command 0, influence 0, management 0, subterfuge 0, age 13, alive, never_a_leader
character_record		Bisaltes, 	male, command 0, influence 0, management 0, subterfuge 0, age 9, alive, never_a_leader
character_record		Actaee, 	female, command 0, influence 0, management 0, subterfuge 0, age 60, alive, never_a_leader
character_record		Althaia, 	female, command 0, influence 0, management 0, subterfuge 0, age 36, alive, never_a_leader
character_record		Polymede, 	female, command 0, influence 0, management 0, subterfuge 0, age 40, alive, never_a_leader
character_record		Xanthe, 	female, command 0, influence 0, management 0, subterfuge 0, age 22, alive, never_a_leader
character_record		Roxane, 	female, command 0, influence 0, management 0, subterfuge 0, age 10, alive, never_a_leader
character_record		Muttunbaal, 	female, command 0, influence 0, management 0, subterfuge 0, age 6, alive, never_a_leader

relative 	Hanno, 	Actaee,		Hasdrubal,	Burrhus,	Theophanes,	Bomilkar,	end
relative 	Hasdrubal, 	Althaia,		Bisaltes,	Muttunbaal,	end
relative 	Burrhus, 	Polymede,		Theages,	Theodekles,	Roxane,	end
relative 	Theages, 	Xanthe,		end

;<BMK>Парфия

faction	parthia, fortified genghis ;smith
denari	10000
settlement
{
	level large_city
	region Tribus_Dahae

	year_founded 0
	population 5000
	plan_set default_set
	faction_creator parthia
	building
	{
		type core_building proconsuls_palace
	}
	building
	{
		type market forum
	}
	building
	{
		type temple_of_one_god temple_of_one_god_shrine
	}
	building
	{
		type smith blacksmith
	}
	building
	{
		type barracks army_barracks
	}
	building
	{
		type equestrian hippodrome
	}
	building
	{
		type missiles catapult_range
	}

	building
	{
		type town_trade_control governors_trade_control
	}

	building
	{
		type town_wehrmacht_control governors_wehrmacht_control
	}
	building
	{
		type defenses wooden_pallisade
	}


}

settlement
{
	level large_town
	region Chorasmia

	year_founded 0
	population 3200
	plan_set default_set
	faction_creator parthia
	building
	{
		type core_building governors_villa		
		;type core_building governors_house
	}
	building
	{
		type hinterland_farms farms
	}
	building
	{
		type market trader
	}
	building
	{
		type barracks muster_field
	}
 	building
	{
		type equestrian cavalry_barracks
	}


}
settlement
{
	level large_town
	region Insula_Gothii

	year_founded 0
	population 3200
	plan_set default_set
	faction_creator parthia
	building
	{
		type core_building governors_villa
	}
	building
	{
		type market trader
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type hinterland_farms farms
	}
	building
	{
		type equestrian cavalry_barracks
	}

        
}


character	Arsaces, named character, leader, age 60, , x 291, y 157 
traits GoodCommander 2 , NaturalMilitarySkill 1 , PublicFaith 1 , GoodAdministrator 2 , Austere 1
ancillaries foodtaster
army
unit		east generals cavalry early				exp 1 armour 0 weapon_lvl 0
unit		east heavy cataphract				exp 6 armour 1 weapon_lvl 1
unit		east archer					exp 3 armour 0 weapon_lvl 1
unit		east persian cavalry				exp 6 armour 0 weapon_lvl 0
unit		east persian cavalry				exp 6 armour 0 weapon_lvl 0
;unit		east heavy cataphract aux				exp 2 armour 0 weapon_lvl 0

character	Ardumanish, named character, heir, age 40, , x 282, y 171 
traits NaturalMilitarySkill 2 , PublicFaith 1 , GoodAdministrator 1 , GoodCavalryGeneral 2
ancillaries galloper
army
unit		east generals cavalry early				exp 1 armour 0 weapon_lvl 0
unit		east persian cavalry				exp 6 armour 0 weapon_lvl 0
unit		east persian cavalry				exp 6 armour 0 weapon_lvl 0

character	Bagabigna, named character, age 35, , x 272, y 152 
traits PublicFaith 2 , GoodAdministrator 1
ancillaries priest_of_Zoroastra
army
unit		east generals cavalry early				exp 1 armour 0 weapon_lvl 0
unit		east heavy infantry				exp 3 armour 0 weapon_lvl 0
unit		east horse archer				exp 6 armour 0 weapon_lvl 0


character	Phraotes, named character, age 30, , x 293, y 160 
traits GoodAdministrator 2 , Intelligent 2 , GoodCavalryGeneral 1
ancillaries merchant
army
unit		east generals cavalry early		exp 1 armour 0 weapon_lvl 0
unit		east horse archer				exp 6 armour 0 weapon_lvl 0

character	Otanes, diplomat, age 20, , x 278, y 150 
traits GoodDiplomat 3

character	Skunxa, spy, age 20, , x 288, y 159 
traits GoodSpy 2
ancillaries dancer

character_record		Arses, 	male, command 0, influence 0, management 0, subterfuge 0, age 12, alive, never_a_leader
character_record		Thuxra, 	male, command 0, influence 0, management 0, subterfuge 0, age 4, alive, never_a_leader
character_record		Achaemenes, 	male, command 0, influence 0, management 0, subterfuge 0, age 15, alive, never_a_leader
character_record		Roxanna, 	female, command 0, influence 0, management 0, subterfuge 0, age 58, alive, never_a_leader
character_record		Ariyamna, 	female, command 0, influence 0, management 0, subterfuge 0, age 35, alive, never_a_leader
character_record		Nabunaita, 	female, command 0, influence 0, management 0, subterfuge 0, age 24, alive, never_a_leader
character_record		Bardiya, 	female, command 0, influence 0, management 0, subterfuge 0, age 8, alive, never_a_leader

relative 	Arsaces, 	Roxanna,		Ardumanish,	Bagabigna,	Phraotes,	end
relative 	Ardumanish, 	Ariyamna,		Achaemenes,	Arses,	Bardiya,	end
relative 	Phraotes, 	Nabunaita,		Thuxra,	end

;<BMK>Понт (pontus)

faction	pontus, craftsman henry   ;trader napoleon
denari	10000
settlement
{
	level large_city
	region Pontus

	year_founded 0
	population 4000
	plan_set default_set
	faction_creator pontus
	building
	{
		type core_building proconsuls_palace
	}
	building
	{
		type defenses stone_wall
	}
	building
	{
		type market trader
	}

	building
	{
		type barracks army_barracks
	}
	building
	{
		type equestrian hippodrome
	}
	building
	{
		type missiles catapult_range
	}



	building
	{
		type town_trade_control governors_trade_control
	}

	building
	{
		type town_wehrmacht_control governors_wehrmacht_control
	}


}

settlement
{
	level large_town
	region Paphlagonia

	year_founded 0
	population 3300
	plan_set default_set
	faction_creator pontus
	building
	{
		type core_building governors_palace
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks city_barracks
	}
	building
	{
		type port_buildings port
	}
 	building
	{
		type equestrian stables
	}

}

character	Mithradates, named character, leader, age 60, , x 191, y 133 
traits GoodCommander 2 , PublicFaith 1 , Intelligent 2
ancillaries aged_retainer, chief_eunuch
army
unit		east generals cavalry early				exp 1 armour 0 weapon_lvl 0
unit		east hoplite brazen shield				exp 3 armour 0 weapon_lvl 0
unit		east archer						exp 0 armour 0 weapon_lvl 0

character	Pharnaces, named character, heir, age 40, , x 205, y 140 
traits NaturalMilitarySkill 1 , PublicFaith 1 , Intelligent 1 , GoodCavalryGeneral 1
ancillaries famous_courtesan, foodtaster
army
unit		east generals cavalry early				exp 1 armour 0 weapon_lvl 0
unit		east heavy cavalry				exp 0 armour 0 weapon_lvl 0
unit		east infantry				exp 0 armour 0 weapon_lvl 0
unit		east infantry				exp 0 armour 0 weapon_lvl 0

character	Herakles, named character, age 30, , x 185, y 139 
traits NaturalMilitarySkill 1 , PublicFaith 1 , Intelligent 1 , MathematicsSkill 3
ancillaries freeman_clerk, merchant
army
unit		east generals cavalry early				exp 2 armour 0 weapon_lvl 0
unit		east heavy cavalry				exp 2 armour 0 weapon_lvl 0
unit		east hoplite				exp 2 armour 0 weapon_lvl 0
unit		east hoplite				exp 2 armour 0 weapon_lvl 0
unit		east archer					exp 2 armour 0 weapon_lvl 0


character	Synges, spy, age 20, , x 189, y 131 
traits GoodSpy 4

character	Sauromates, diplomat, age 20, , x 187, y 136 
traits GoodDiplomat 4

character_record		Dionysos, 	male, command 0, influence 0, management 0, subterfuge 0, age 10, alive, never_a_leader
character_record		Paerisades, 	male, command 0, influence 0, management 0, subterfuge 0, age 6, alive, never_a_leader
character_record		Rhescuporis, 	male, command 0, influence 0, management 0, subterfuge 0, age 1, alive, never_a_leader
character_record		Spartocus, 	male, command 0, influence 0, management 0, subterfuge 0, age 15, alive, never_a_leader
character_record		Laodice, 	female, command 0, influence 0, management 0, subterfuge 0, age 55, alive, never_a_leader
character_record		Pythodoris, 	female, command 0, influence 0, management 0, subterfuge 0, age 30, alive, never_a_leader
character_record		Antonia, 	female, command 0, influence 0, management 0, subterfuge 0, age 24, alive, never_a_leader
character_record		Dynamis, 	female, command 0, influence 0, management 0, subterfuge 0, age 12, alive, never_a_leader
character_record		Gepaepyris, 	female, command 0, influence 0, management 0, subterfuge 0, age 9, alive, never_a_leader

relative 	Mithradates, 	Laodice,		Pharnaces,	Herakles,	Spartocus,	end
relative 	Pharnaces, 	Pythodoris,		Dynamis,	Gepaepyris,	Paerisades,	end
relative 	Herakles, 	Antonia,		Dionysos,	Rhescuporis,	end

;<BMK>Кельты (gauls)

faction	gauls, trader napoleon
denari	15000
settlement
{
	level large_town
	region Biturigia

	year_founded 0
	population 4000
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses wooden_wall
	}
	building
	{
		type barracks city_barracks
	}
	building
	{
		type equestrian stables
	}
	building
	{
		type hinterland_farms farms
	}
 	building
	{
		type town_trade_control governors_trade_control
	}

	building
	{
		type town_wehrmacht_control governors_wehrmacht_control
	}
}

settlement
{
	level large_town
	region Aeduia

	year_founded 0
	population 3000
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses wooden_wall
	}
	building
	{
		type  missiles practice_field
	}
	building
	{
		type hinterland_farms farms
	}
}


settlement
{
	level large_town
	region Venetia

	year_founded 0
	population 2500
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks militia_barracks
	}
	building
	{
		type market trader
	}
 	building
	{
		type  missiles practice_field
	}
 	building
	{
		type equestrian stables
	}


}

settlement
{
	level large_town
	region Cisalpine_Gaul

	year_founded 0
	population 3000
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks muster_field
	}
}


settlement
{
	level town
	region Narbonensis

	year_founded 0
	population 2800
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level town
	region Aulercia

	year_founded 0
	population 1800
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Galatia

	year_founded 0
	population 3300
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
 	building
	{
		type barracks muster_field
	}

}


character	Brennus, named character, leader, age 52, , x 58, y 158
traits GoodCommander 2 , Intelligent 2 , Austere 1 , PublicFaith 1
ancillaries bard, civilized_slave

army
unit		barb chieftain cavalry gaul				exp 1 armour 0 weapon_lvl 0
unit		Darius celtic spearman	              			exp 1 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 1 armour 0 weapon_lvl 0
unit		barb cavalry gaul				exp 4 armour 0 weapon_lvl 0

character	Eporedorix, named character, heir, age 36, , x 84, y 148 
traits NaturalMilitarySkill 3 , Intelligent 2 , Energetic 1 , Drink 2
ancillaries drunken_uncle, drinking_companion
army
unit		barb chieftain cavalry gaul				exp 1 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 0 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 4 armour 0 weapon_lvl 0
unit		barb cavalry gaul				exp 1 armour 0 weapon_lvl 0
unit		barb cavalry gaul				exp 1 armour 0 weapon_lvl 0

character	Rianorix, named character, age 35, , x 47, y 155 
traits NaturalMilitarySkill 2 , Intelligent 1 , Energetic 1 , Drink 1
ancillaries beastmaster
army
unit		barb chieftain cavalry gaul				exp 1 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 1 armour 0 weapon_lvl 0
unit		barb peltast german				exp 1 armour 0 weapon_lvl 0
unit		barb cavalry gaul				exp 4 armour 0 weapon_lvl 0

character	Dumnorix of Bibrax, general, age 20, , x 94, y 146
army
unit		Darius celtic swordsman light				exp 0 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 0 armour 0 weapon_lvl 0
unit		barb cavalry gaul				exp 1 armour 0 weapon_lvl 0

character	Voteporix of Alesia, general, age 20, , x 54, y 141 
traits NaturalMilitarySkill 1 , Energetic 1
ancillaries bodyguard
army
unit		Darius celtic swordsman light				exp 0 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 0 armour 0 weapon_lvl 0

character	Casticos of Vesontio, general, age 20, , x 39, y 168
army
unit		Darius celtic swordsman light				exp 0 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 0 armour 0 weapon_lvl 0

character	Maglocunus of Lemonum, general, age 20, , x 56, y 165
army
unit		Darius celtic swordsman light				exp 0 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 0 armour 0 weapon_lvl 0

character	Vindex, named character, age 32, , x 66, y 160
traits NaturalMilitarySkill 2 , Drink 1 , Bloodthirsty 1
ancillaries galloper
army
unit		barb chieftain cavalry gaul				exp 1 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 0 armour 0 weapon_lvl 0
unit		barb peltast german				exp 0 armour 0 weapon_lvl 0

character	Lugotorix, named character, age 18, , x 92, y 147
traits Intelligent 2 , Austere 1
ancillaries civilized_slave
army
unit		barb chieftain cavalry gaul				exp 1 armour 0 weapon_lvl 0
unit		barb cavalry gaul				exp 0 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 0 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 0 armour 0 weapon_lvl 0
unit		barb peltast german				exp 0 armour 0 weapon_lvl 0

;Galatia
character	Drustan, named character, age 20, , x 177, y 123
army
unit		barb chieftain cavalry gaul				exp 4 armour 0 weapon_lvl 0
unit		barb cavalry gaul				exp 4 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 4 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 4 armour 0 weapon_lvl 0
unit		Darius celtic spearman	              			exp 4 armour 0 weapon_lvl 0


character	Bolgios of Lemonum, admiral, age 30, , x 51, y 175 
army
unit		naval boats				exp 0 armour 0 weapon_lvl 0

character	Ivomagus of Lemonum, spy, age 20, , x 81, y 147 
traits GoodSpy 3

character	Senaculus of Sabis, diplomat, age 28, , x 88, y 146 
traits GoodDiplomat 3

character_record		Belenus, 	male, command 0, influence 0, management 0, subterfuge 0, age 14, alive, never_a_leader
character_record		Lucco, 	male, command 0, influence 0, management 0, subterfuge 0, age 10, alive, never_a_leader
character_record		Virssuccius, 	male, command 0, influence 0, management 0, subterfuge 0, age 7, alive, never_a_leader
character_record		Meriadoc, 	male, command 0, influence 0, management 0, subterfuge 0, age 14, alive, never_a_leader
character_record		Huctia, 	female, command 0, influence 0, management 0, subterfuge 0, age 52, alive, never_a_leader
character_record		Cartimandua, 	female, command 0, influence 0, management 0, subterfuge 0, age 32, alive, never_a_leader
character_record		Esselt, 	female, command 0, influence 0, management 0, subterfuge 0, age 30, alive, never_a_leader
character_record		Keyne, 	female, command 0, influence 0, management 0, subterfuge 0, age 31, alive, never_a_leader
character_record		Verctissa, 	female, command 0, influence 0, management 0, subterfuge 0, age 10, alive, never_a_leader
character_record		Verica, 	female, command 0, influence 0, management 0, subterfuge 0, age 9, alive, never_a_leader

relative 	Brennus, 	Huctia,		Eporedorix,	Rianorix,	Vindex, Lugotorix,	end
relative 	Eporedorix, 	Cartimandua,		Belenus,	Verctissa,	Virssuccius,	end
relative 	Rianorix, 	Esselt,		Lucco,	end
relative 	Vindex, 	Keyne,		Meriadoc,	Verica,	end

;<BMK>Кушан

faction	germans, balanced genghis	;henry     ;religious mao genghis
denari	10000
settlement
{
	level large_city
	region Tribus_Sakae

	year_founded 0
	population 4000
	plan_set default_set
	faction_creator germans
	building
	{
		type core_building proconsuls_palace
	}

	building
	{
		type barracks army_barracks
	}
	building
	{
		type equestrian hippodrome
	}
	building
	{
		type missiles catapult_range
	}



	building
	{
		type town_trade_control governors_trade_control
	}

	building
	{
		type town_wehrmacht_control governors_wehrmacht_control
	}



}
settlement
{
	level large_town
	region Cimbrica

	year_founded 0
	population 5900
	plan_set default_set
	faction_creator germans
	building
	{
		type core_building governors_villa
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type temple_of_violence temple_of_violence_temple
	}
	building
	{
		type equestrian stables
	}
}
settlement
{
	level large_town
	region Wusun

	year_founded 0
	population 4000
	plan_set default_set
	faction_creator germans
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks muster_field
	}
}


character	Arminius, named character, leader, age 60, ,  x 317, y 218
traits GoodCommander 2 , Intelligent 2 , PublicFaith 1
ancillaries bodyguard, civilized_slave
army
unit		tohar generals cavalry early				exp 3 armour 0 weapon_lvl 0
unit		massaget heavy archer					exp 3 armour 0 weapon_lvl 0
unit		tohar rider						exp 3 armour 0 weapon_lvl 0
unit		tohar rider						exp 3 armour 0 weapon_lvl 0


character	Ariogaisus, named character, heir, age 40, , x 361, y 205
traits GoodCommander 2 , Intelligent 1 , Energetic 1 , GoodAmbusher 1
ancillaries bard, beastmaster
army
unit		tohar generals cavalry early				exp 1 armour 0 weapon_lvl 0
unit		massaget heavy archer					exp 2 armour 0 weapon_lvl 0


character	Hariulfus, named character, age 30, , x 314, y 203
traits Intelligent 2 , Austere 1
ancillaries civilized_slave
army
unit		tohar generals cavalry early				exp 1 armour 0 weapon_lvl 0
unit		tohar horse archer					exp 3 armour 0 weapon_lvl 0


character	Ricburgis, named character, age 25, , x 318, y 216
traits NaturalMilitarySkill 2 , Energetic 1 , GoodAmbusher 1
ancillaries armourer
army
unit		tohar generals cavalry early				exp 1 armour 0 weapon_lvl 0
unit		tohar horse archer					exp 2 armour 0 weapon_lvl 0


;character	Alaric, general, age 20, , x 317 y 215
;army
;unit		warband spear german				exp 0 armour 0 weapon_lvl 0


;character	Hesa, admiral, age 20, , x 98, y 197 
;army
;unit		naval boats				exp 0 armour 0 weapon_lvl 0

character	Ariovistus, spy, age 20, , x 316, y 219
traits GoodSpy 1

character	Ricgard, diplomat, age 20, , x 317, y 220
traits GoodDiplomat 1

character_record		Vannius, 	male, command 0, influence 0, management 0, subterfuge 0, age 14, alive, never_a_leader
character_record		Sesithacus, 	male, command 0, influence 0, management 0, subterfuge 0, age 10, alive, never_a_leader
character_record		Othelhildis, 	male, command 0, influence 0, management 0, subterfuge 0, age 6, alive, never_a_leader
character_record		Carolus, 	male, command 0, influence 0, management 0, subterfuge 0, age 2, alive, never_a_leader
character_record		Herlinda, 	female, command 0, influence 0, management 0, subterfuge 0, age 58, alive, never_a_leader
character_record		Thusnelda, 	female, command 0, influence 0, management 0, subterfuge 0, age 35, alive, never_a_leader
character_record		Aurinia, 	female, command 0, influence 0, management 0, subterfuge 0, age 28, alive, never_a_leader
character_record		Amalberga, 	female, command 0, influence 0, management 0, subterfuge 0, age 8, alive, never_a_leader
character_record		Biua, 	female, command 0, influence 0, management 0, subterfuge 0, age 7, alive, never_a_leader

relative 	Arminius, 	Herlinda,		Ariogaisus,	Hariulfus,	Ricburgis,	end
relative 	Ariogaisus, 	Thusnelda,		Vannius,	Amalberga,	Othelhildis,	end
relative 	Hariulfus, 	Aurinia,		Sesithacus,	Biua,	Carolus,	end

;<BMK>Индия (britons)

faction	britons, Balanced Smith
denari	10000
settlement
{
	level large_city
	region Sind

	year_founded 0
	population 3000
	plan_set default_set
	faction_creator britons
	building
	{
		type core_building proconsuls_palace
	}
	building
	{
		type defenses stone_wall
	}

	building
	{
		type market trader
	}
	building
	{
		type hinterland_farms farms
	}

	building
	{
		type barracks army_barracks
	}
	building
	{
		type equestrian hippodrome
	}
	building
	{
		type missiles catapult_range
	}



	building
	{
		type town_trade_control governors_trade_control
	}

	building
	{
		type town_wehrmacht_control governors_wehrmacht_control
	}

}

settlement
{
	level town
	region Sattagydia

	year_founded 0
	population 2700
	plan_set default_set
	faction_creator britons
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_wall
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type hinterland_farms farms
	}


}
settlement
{
	level town
	region Nurthralandan

	year_founded 0
	population 1000
	plan_set default_set
	faction_creator britons
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_wall
	}
	building
	{
		type barracks muster_field
	}
 
 
}

character	EW_Madhuri EW_Maurja, named character, leader, age 50, , x 358, y 116 
traits GoodCommander 1 , Intelligent 2 , Austere 2 , PublicFaith 2
ancillaries druid
army
unit		indian bodyguard early				exp 1 armour 0 weapon_lvl 0
unit		indian infantry light				exp 4 armour 0 weapon_lvl 0
unit		indian infantry light				exp 4 armour 0 weapon_lvl 0
unit		indian elephant small				exp 0 armour 0 weapon_lvl 0
unit		indian infantry medium				exp 1 armour 0 weapon_lvl 0
unit		indian infantry medium				exp 1 armour 0 weapon_lvl 0
;unit		indian peltast				exp 1 armour 0 weapon_lvl 0
unit		indian militia cavalry				exp 1 armour 0 weapon_lvl 0

character	EW_Rahul EW_Maurja, named character, heir, age 30, , x 377, y 92
traits NaturalMilitarySkill 1 , Intelligent 1 , Austere 1 , PublicFaith 1 , Drink 1
ancillaries bard
army
unit		indian bodyguard early				exp 1 armour 0 weapon_lvl 0
unit		indian infantry light				exp 0 armour 0 weapon_lvl 0
unit		indian infantry light				exp 0 armour 0 weapon_lvl 0
;unit		indian peltast				exp 0 armour 0 weapon_lvl 0

character	Cynfawr, named character, age 31, , x 370, y 121 
traits Energetic 1 , PublicFaith 3 , Intelligent 1
ancillaries druid2
army
unit		indian bodyguard early				exp 0 armour 0 weapon_lvl 0
unit		indian infantry light				exp 0 armour 0 weapon_lvl 0
unit		indian elephant small				exp 0 armour 0 weapon_lvl 0
unit		indian infantry medium				exp 1 armour 0 weapon_lvl 0
unit		indian militia cavalry				exp 1 armour 0 weapon_lvl 0

character	EW_Rahul, general, age 20, , x 373, y 104 ;sub_faction greek_cities,
army
unit		indian camel cavalry			exp 3 armour 1 weapon_lvl 1
unit		indian archer			exp 3 armour 1 weapon_lvl 1
unit		india peltast armor			exp 3 armour 1 weapon_lvl 1

character	Senaculus, spy, age 20, , x 344, y 117 
traits		GoodSpy 2

character	Lannildut, diplomat, age 20, , x 368, y 89 
traits		GoodDiplomat 2

character_record		Sennianus, 	male, command 0, influence 0, management 0, subterfuge 0, age 14, alive, never_a_leader
character_record		Prasutagus, 	male, command 0, influence 0, management 0, subterfuge 0, age 12, alive, never_a_leader
character_record		Calpornus, 	male, command 0, influence 0, management 0, subterfuge 0, age 11, alive, never_a_leader
character_record		Drustan, 	male, command 0, influence 0, management 0, subterfuge 0, age 7, alive, never_a_leader
character_record		Barita, 	female, command 0, influence 0, management 0, subterfuge 0, age 49, alive, never_a_leader
character_record		Cartimandua, 	female, command 0, influence 0, management 0, subterfuge 0, age 31, alive, never_a_leader
character_record		Eudaf, 	female, command 0, influence 0, management 0, subterfuge 0, age 24, alive, never_a_leader
character_record		Verica, 	female, command 0, influence 0, management 0, subterfuge 0, age 5, alive, never_a_leader

relative 	EW_Madhuri EW_Maurja, 	Barita,		Cynfawr,	EW_Rahul EW_Maurja,	Prasutagus,	end
relative 	EW_Rahul EW_Maurja, 	Cartimandua,		Calpornus,		Verica,	end
relative 	Cynfawr, 	Eudaf,		Sennianus,	Drustan,	end

;<BMK>Армения (armenia)

faction	armenia, fortified henry
denari	10000
settlement
{
	level large_city
	region Armenia_Maior

	year_founded 0
	population 5000
	plan_set default_set
	faction_creator armenia
	building
	{
		type core_building proconsuls_palace
	}
	building
	{
		type defenses stone_wall
	}

	building
	{
		type hinterland_farms farms
	}
	building
	{
		type market trader
	}
	building
	{
		type hinterland_mines mines
	}

	building
	{
		type barracks army_barracks
	}
	building
	{
		type equestrian hippodrome
	}
	building
	{
		type missiles catapult_range
	}



	building
	{
		type town_trade_control governors_trade_control
	}

	building
	{
		type town_wehrmacht_control governors_wehrmacht_control
	}

}

settlement
{
	level town
	region Armenia

	year_founded 0
	population 2400
	plan_set default_set
	faction_creator armenia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type equestrian stables
	}
	building
	{
		type hinterland_farms farms
	}
 	building
	{
		type barracks militia_barracks
	}

}

character	Artaxias, named character, leader, age 60, , x 227, y 143
traits GoodCommander 2 , PublicFaith 2 , Intelligent 1 , Bloodthirsty 1
ancillaries chief_eunuch

army
unit		east generals cavalry early				exp 1 armour 0 weapon_lvl 0
unit		east infantry				exp 0 armour 0 weapon_lvl 0
unit		east peltast				exp 0 armour 0 weapon_lvl 0

character	Rusa, named character, heir, age 35, , x 225, y 133 
traits GoodCommander 1 , PublicFaith 1 , Intelligent 2
ancillaries galloper

army
unit		east generals cavalry early				exp 1 armour 0 weapon_lvl 0
unit		east infantry				exp 0 armour 0 weapon_lvl 0
unit		east archer				exp 3 armour 0 weapon_lvl 0

character	Aramu, named character, age 30, , x 220, y 143 
traits Intelligent 2 , MathematicsSkill 1 , Drink 1
ancillaries freeman_clerk, drinking_companion
army
unit		east generals cavalry early				exp 1 armour 0 weapon_lvl 0
unit		east horse archer				exp 3 armour 0 weapon_lvl 0
unit		east horse archer				exp 3 armour 0 weapon_lvl 0
unit		east infantry				exp 0 armour 0 weapon_lvl 0
unit		east infantry				exp 0 armour 0 weapon_lvl 0

character	Prusias, spy, age 20, , x 221, y 130 
traits GoodSpy 4
ancillaries courtesan 

character	Menua, diplomat, age 20, , x 223, y 145 
traits GoodDiplomat 3

character_record		Zipoetes, 	male, command 0, influence 0, management 0, subterfuge 0, age 14, alive, never_a_leader
character_record		Aram, 	male, command 0, influence 0, management 0, subterfuge 0, age 10, alive, never_a_leader
character_record		Eminos, 	male, command 0, influence 0, management 0, subterfuge 0, age 7, alive, never_a_leader
character_record		Sarduri, 	male, command 0, influence 0, management 0, subterfuge 0, age 2, alive, never_a_leader
character_record		Erato, 	female, command 0, influence 0, management 0, subterfuge 0, age 51, alive, never_a_leader
character_record		Karo, 	female, command 0, influence 0, management 0, subterfuge 0, age 34, alive, never_a_leader
character_record		Pao, 	female, command 0, influence 0, management 0, subterfuge 0, age 26, alive, never_a_leader
character_record		Arao, 	female, command 0, influence 0, management 0, subterfuge 0, age 11, alive, never_a_leader
character_record		Hurriya, 	female, command 0, influence 0, management 0, subterfuge 0, age 6, alive, never_a_leader

relative 	Artaxias, 	Erato,		Rusa,	Aramu,	Zipoetes,	end
relative 	Rusa, 	Karo,		Arao,	Aram,	Sarduri,	end
relative 	Aramu, 	Pao,		Eminos,	Hurriya,	end

;<BMK>Делосс (dacia)

faction	dacia, craftsman smith
denari	10000

settlement
{
	level large_city
	region Attica

	year_founded 0
	population 4000
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building proconsuls_palace
	}
	building
	{
		type defenses stone_wall
	}
	building
	{
		type academic academy
	}
	building
	{
		type hinterland_farms farms
	}
	building
	{
		type hinterland_roads roads
	}
	building
	{
		type port_buildings port
	}
	building
	{
		type market trader
	}

	building
	{
		type barracks army_barracks
	}
	building
	{
		type equestrian hippodrome
	}
	building
	{
		type missiles catapult_range
	}



	building
	{
		type town_trade_control governors_trade_control
	}

	building
	{
		type town_wehrmacht_control governors_wehrmacht_control
	}
}

settlement
{
	level large_town
	region Rhodos

	year_founded 0
	population 3900
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_villa
	}
	building
	{
		type port_buildings port
	}
	building
	{
		type market market
	}
	building
	{
		type hinterland_farms farms
	}
}
settlement
{
	level town
	region Euboea

	year_founded 0
	population 1500
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks militia_barracks
	}
	building
	{
		type hinterland_farms farms
	}
 	building
	{
		type market market
	}
 	building
	{
		type equestrian stables
	}
	building
	{
		type missiles practice_field
	}


}

settlement
{
	level large_town
	region Mysia

	year_founded 0
	population 3800
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_villa
	}
	building
	{
		type barracks city_barracks
	}
        building
	{
		type defenses stone_wall
	}
}

character	Zyraxes, named character, leader, age 60, ,  x 144, y 108 ;
traits GoodCommander 2 , Intelligent 1 , Bloodthirsty 2
ancillaries bard
army
unit		deloss generals guard cavalry early				exp 3 armour 0 weapon_lvl 0
unit		maxmus hoplite athenian				exp 6 armour 0 weapon_lvl 0
unit		maxmus hoplite athenian				exp 6 armour 0 weapon_lvl 0
unit		maxmus hoplite athenian				exp 6 armour 0 weapon_lvl 0
unit		greek medium cavalry			exp 3 armour 1 weapon_lvl 1
unit		greek union archer					exp 0 armour 0 weapon_lvl 0
unit		greek union archer					exp 0 armour 0 weapon_lvl 0
unit		greek union archer					exp 0 armour 0 weapon_lvl 0


character	Vezina, named character, heir, age 35, , x 161, y 101
traits NaturalMilitarySkill 2 , Intelligent 1 , Bloodthirsty 1 , Drink 1
ancillaries armourer
army
unit		deloss generals guard cavalry early				exp 1 armour 0 weapon_lvl 0
unit		greek union hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek union hoplite militia				exp 0 armour 0 weapon_lvl 0

character	Scyles, named character, age 30, , x 146, y 110 
traits Intelligent 3 , Bloodthirsty 1 , Energetic 1
ancillaries civilized_slave
army
unit		deloss generals guard cavalry early				exp 1 armour 0 weapon_lvl 0
unit		greek union hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek union hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek union hoplite militia				exp 0 armour 0 weapon_lvl 0

;Mysia   // PERGAMUM, Ftopku slavov))
character	Dicomes, general, age 20, , x 154, y 117 ;sub_faction greek_cities, Menandros
army
unit		greek medium cavalry			exp 3 armour 1 weapon_lvl 1
unit		greek medium cavalry			exp 3 armour 1 weapon_lvl 1
unit		greek union archer			exp 0 armour 0 weapon_lvl 2
unit		greek union archer			exp 0 armour 0 weapon_lvl 2
unit		maxmus pergamum hoplite			exp 3 armour 1 weapon_lvl 1
unit		maxmus pergamum hoplite			exp 3 armour 1 weapon_lvl 1

;145 103
character	Vezina, admiral, age 36, , x 145, y 103 
army
unit		naval biremes				exp 1 armour 0 weapon_lvl 0
unit		naval biremes				exp 1 armour 0 weapon_lvl 0
unit		naval biremes				exp 1 armour 0 weapon_lvl 0

character	Dicomes, diplomat, age 20, , x 144, y 108
traits GoodDiplomat 1

character	Burubista, spy, age 20, , x 144, y 108
traits GoodSpy 3

character_record		Palacus, 	male, command 0, influence 0, management 0, subterfuge 0, age 2, alive, never_a_leader
character_record		Scylurus, 	male, command 0, influence 0, management 0, subterfuge 0, age 8, alive, never_a_leader
character_record		Cotiso, 	male, command 0, influence 0, management 0, subterfuge 0, age 11, alive, never_a_leader
character_record		Duras, 	male, command 0, influence 0, management 0, subterfuge 0, age 15, alive, never_a_leader
character_record		Serapia, 	female, command 0, influence 0, management 0, subterfuge 0, age 51, alive, never_a_leader
character_record		Dana, 	female, command 0, influence 0, management 0, subterfuge 0, age 33, alive, never_a_leader
character_record		Birkita, 	female, command 0, influence 0, management 0, subterfuge 0, age 28, alive, never_a_leader
character_record		Devnet, 	female, command 0, influence 0, management 0, subterfuge 0, age 5, alive, never_a_leader
character_record		Fallon, 	female, command 0, influence 0, management 0, subterfuge 0, age 10, alive, never_a_leader

relative 	Zyraxes, 	Serapia,		Vezina,	Scyles,	Duras,	end
relative 	Vezina, 	Dana,		Cotiso,	Devnet,	Palacus,	end
relative 	Scyles, 	Birkita,		Fallon,	Scylurus,	end

;<BMK>Пеллопонес (greek_cities)
faction	greek_cities, fortified smith
denari	10000
settlement
{
	level large_city
	region Laconia

	year_founded 0
	population 5000
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building proconsuls_palace
	}

	building
	{
		type temple_of_victory temple_of_victory_temple
	}
	building
	{
		type hinterland_farms farms
	}
	building
	{
		type hinterland_roads roads
	}
	building
	{
		type barracks army_barracks
	}
	building
	{
		type equestrian hippodrome
	}
	building
	{
		type missiles catapult_range
	}



	building
	{
		type town_trade_control governors_trade_control
	}

	building
	{
		type town_wehrmacht_control governors_wehrmacht_control
	}
}

settlement
{
	level large_town
	region Crete

	year_founded 0
	population 1000
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_villa
	}
	building
	{
		type port_buildings port
	}
	building
	{
		type market market
	}
}

settlement
{
	level large_town
	region Achaia

	year_founded 0
	population 3000
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses stone_wall
	}
	building
	{
		type market trader
	}
	building
	{
		type hinterland_roads roads
	}
	building
	{
		type hinterland_farms farms
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level large_town
	region Sicilia_Graecus

	year_founded 0
	population 3000
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses stone_wall
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type port_buildings port
	}
}

character	Kleomenes of Sparta, named character, leader, age 56, , x 138, y 102 
traits GoodCommander 2 , NaturalMilitarySkill 1 , GoodDefender 1 , Austere 2 , Intelligent 1
ancillaries wrestler
army
unit		peloponess generals guard cavalry early					exp 2 armour 0 weapon_lvl 0
unit		spartan juniors				exp 2 armour 0 weapon_lvl 0
;unit		greek hoplite spartan				exp 0 armour 0 weapon_lvl 0
unit		greek peltast					exp 0 armour 0 weapon_lvl 0
unit		greek peltast					exp 0 armour 0 weapon_lvl 0

character	Dionysios of Sparta, named character, age 34, , x 139, y 102 ;ddddddddddddddddddd x 144, y 108
traits GoodCommander 1 , Intelligent 1 , GoodAdministrator 2
ancillaries brilliant_inventor, playwright
army
unit		peloponess generals guard cavalry early					exp 1 armour 0 weapon_lvl 0
unit		greek union hoplite militia			exp 0 armour 0 weapon_lvl 0
unit		greek union archer				exp 0 armour 0 weapon_lvl 0

character	Antigonos of Sparta, named character, age 33, , x 146, y 94 
traits Intelligent 2 , GoodAdministrator 2 , GoodTrader 2 , Drink 1
ancillaries merchant, mentor
army
unit		peloponess generals guard cavalry early					exp 1 armour 0 weapon_lvl 0
unit		maxmus cretan hoplite				exp 0 armour 0 weapon_lvl 0
unit		merc rhodian slingers				exp 1 armour 0 weapon_lvl 0

character	Eumenes of Sparta, named character, age 31, , x 139, y 106 
traits Intelligent 1 , GoodAdministrator 3
ancillaries mentor, comedian
army
unit		greek hipei	          			exp 3 armour 0 weapon_lvl 0
unit		maxmus Corinth hoplite	         		exp 3 armour 0 weapon_lvl 0
unit		maxmus Corinth hoplite	         		exp 3 armour 0 weapon_lvl 0
unit		greek peltast					exp 0 armour 0 weapon_lvl 0
unit		greek peltast					exp 0 armour 0 weapon_lvl 0

character	Doros, general, age 20, , x 106, y 100
army
unit		maxmus siracusian hoplite			exp 3 armour 0 weapon_lvl 0
unit		maxmus siracusian hoplite			exp 3 armour 0 weapon_lvl 0
unit		greek union archer				exp 0 armour 0 weapon_lvl 0
unit		greek union archer				exp 0 armour 0 weapon_lvl 0
unit		greek union archer				exp 0 armour 0 weapon_lvl 0
unit		greek peltast					exp 0 armour 0 weapon_lvl 0


character	Polydoros of Rhodes, admiral, age 36, , x 161, y 103 
army
unit		naval biremes				exp 1 armour 0 weapon_lvl 0
unit		naval biremes				exp 1 armour 0 weapon_lvl 0
unit		naval biremes				exp 1 armour 0 weapon_lvl 0

character	Castor of Elis, diplomat, age 30, , x 143, y 109 
traits GoodDiplomat 3

character	Charax of Gythium, spy, age 30, , x 140, y 102 
traits GoodSpy 2
ancillaries catamite

character_record		Clymene, 	female, command 0, influence 0, management 0, subterfuge 0, age 53, alive, never_a_leader
character_record		Harmonia, 	female, command 0, influence 0, management 0, subterfuge 0, age 32, alive, never_a_leader
character_record		Eunice, 	female, command 0, influence 0, management 0, subterfuge 0, age 30, alive, never_a_leader
character_record		Kyra, 	female, command 0, influence 0, management 0, subterfuge 0, age 26, alive, never_a_leader
character_record		Cleon of Sparta, 	male, command 0, influence 0, management 0, subterfuge 0, age 14, alive, never_a_leader
character_record		Memnon of Sparta, 	male, command 0, influence 0, management 0, subterfuge 0, age 13, alive, never_a_leader
character_record		Doros of Sparta, 	male, command 0, influence 0, management 0, subterfuge 0, age 11, alive, never_a_leader
character_record		Eugenius of Sparta, 	male, command 0, influence 0, management 0, subterfuge 0, age 7, alive, never_a_leader
character_record		Nicanor of Sparta, 	male, command 0, influence 0, management 0, subterfuge 0, age 3, alive, never_a_leader
character_record		Hermine of Sparta, 	female, command 0, influence 0, management 0, subterfuge 0, age 9, alive, never_a_leader

relative 	Kleomenes of Sparta, 	Clymene,		Dionysios of Sparta,	Antigonos of Sparta,	Eumenes of Sparta,	Memnon of Sparta,	end
relative 	Dionysios of Sparta, 	Harmonia,		Cleon of Sparta,	Hermine of Sparta,	end
relative 	Antigonos of Sparta, 	Eunice,		Doros of Sparta,	Nicanor of Sparta,	end
relative 	Eumenes of Sparta, 	Kyra,		Eugenius of Sparta,	end

;<BMK>Германцы (numidia)

faction	numidia, fortified smith
denari	15000


settlement
{
	level large_town
	region Tribus_Suebi

	year_founded 0
	population 3600
	plan_set default_set
	faction_creator numidia
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks city_barracks
	}
 	building
	{
		type town_trade_control governors_trade_control
	}

	building
	{
		type town_wehrmacht_control governors_wehrmacht_control
	}
}

settlement
{
	level large_town
	region Scandia

	year_founded 0
	population 3000
	plan_set default_set
	faction_creator numidia
	building
	{
		type core_building governors_villa
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type temple_of_viking temple_of_viking_temple
	}
}

settlement
{
	level town
	region Locus_Rugii

	year_founded 0
	population 2200
	plan_set default_set
	faction_creator numidia
	building
	{
		type core_building governors_house
	}
}


settlement
{
	level town
	region Tribus_Cherusci

	year_founded 0
	population 2500
	plan_set default_set
	faction_creator numidia
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type defenses wooden_pallisade
	}
}
settlement
{
	level town
	region Tribus_Chauci

	year_founded 0
	population 2000
	plan_set default_set
	faction_creator numidia
	building
	{
		type core_building governors_house
	}
	building
	{
		type missiles practice_field
	}
	building
	{
		type defenses wooden_pallisade
	}
}

character	Syphax, named character, leader, age 60, , x 100, y 192
traits GoodCommander 2 , Energetic 1
ancillaries desert_scout, astrologer
army
unit		barb chieftain cavalry german				exp 1 armour 0 weapon_lvl 0
unit		Darius german exp                       		exp 3 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light			        	exp 0 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 0 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 0 armour 0 weapon_lvl 0



character	Gisgo, named character, heir, age 35, , x 95, y 186
traits GoodCommander 2 , Energetic 1 , Intelligent 1 , Drink 1
ancillaries merchant
army
unit		barb chieftain cavalry german				exp 1 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 0 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 0 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 0 armour 0 weapon_lvl 0

character	Muttines, named character, age 30, , x 102, y 206
traits NaturalMilitarySkill 1 , PublicFaith 3 , Intelligent 1
ancillaries desert_scout
army
unit		barb chieftain cavalry german				exp 1 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 0 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 0 armour 0 weapon_lvl 0

character	Bathyaes, general, age 20, , x 81, y 189
army
unit		merc horse archers				exp 1 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 1 armour 0 weapon_lvl 0

character	Bathyaes, general, age 20, , x 84, y 183
army
unit		merc horse archers				exp 1 armour 0 weapon_lvl 0
unit		Darius celtic swordsman light				exp 1 armour 0 weapon_lvl 0



character	Thero, diplomat, age 20, , x 60, y 97 
traits GoodDiplomat 3

character	Bathyaes, spy, age 20, , x 74, y 85 
traits GoodSpy 2
ancillaries dancer

character_record		Adonibal, 	male, command 0, influence 0, management 0, subterfuge 0, age 14, alive, never_a_leader
character_record		Balhanno, 	male, command 0, influence 0, management 0, subterfuge 0, age 10, alive, never_a_leader
character_record		Tabnit, 	male, command 0, influence 0, management 0, subterfuge 0, age 7, alive, never_a_leader
character_record		Abdimilki, 	male, command 0, influence 0, management 0, subterfuge 0, age 1, alive, never_a_leader
character_record		Dahia, 	female, command 0, influence 0, management 0, subterfuge 0, age 51, alive, never_a_leader
character_record		Kahina, 	female, command 0, influence 0, management 0, subterfuge 0, age 34, alive, never_a_leader
character_record		Aglaurus, 	female, command 0, influence 0, management 0, subterfuge 0, age 25, alive, never_a_leader
character_record		Pherusa, 	female, command 0, influence 0, management 0, subterfuge 0, age 8, alive, never_a_leader
character_record		Sotera, 	female, command 0, influence 0, management 0, subterfuge 0, age 4, alive, never_a_leader

relative 	Syphax, 	Dahia,		Gisgo,	Muttines,	Adonibal,	end
relative 	Gisgo, 	Kahina,		Balhanno,	Pherusa,	end
relative 	Muttines, 	Aglaurus,		Tabnit,	Sotera,	Abdimilki,	end

;<BMK>Скифия (scythia)

faction	scythia, balanced genghis
denari	15000
settlement
{
	level town
	region Taurica

	year_founded 0
	population 4000
	plan_set default_set
	faction_creator scythia
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks city_barracks
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type equestrian cavalry_barracks
	}
}
settlement
{
	level large_town
	region Tribus_Roxolani

	year_founded 0
	population 2800
	plan_set default_set
	faction_creator scythia
	building
	{
		type core_building governors_villa
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level large_town
	region Tribus_Iazyges

	year_founded 0
	population 1500
	plan_set default_set
	faction_creator scythia
	building
	{
		type core_building governors_villa
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level large_town
	region Tribus_Siracae

	year_founded 0
	population 1500
	plan_set default_set
	faction_creator scythia
	building
	{
		type core_building governors_villa
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level large_town
	region Tribus_Aorsi

	year_founded 0
	population 1800
	plan_set default_set
	faction_creator scythia
	building
	{
		type core_building governors_villa
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level town
	region Tribus_Tissagetae

	year_founded 0
	population 500
	plan_set default_set
	faction_creator scythia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Tribus_Budinai

	year_founded 0
	population 1000
	plan_set default_set
	faction_creator scythia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level large_town
	region Scythia

	year_founded 0
	population 3500
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses stone_wall
	}
	building
	{
		type barracks city_barracks
	}
	building
	{
		type hinterland_farms farms
	}
 	building
	{
		type equestrian cavalry_barracks
	}

}

character	Zipoetes, named character, leader, age 50, , x 176, y 156 ; x 202, y 199 
traits GoodCommander 2 , Energetic 2 , Intelligent 1 , Drink 1 , Bloodthirsty 2
ancillaries armourer
army
unit		barb chieftain cavalry early scythian				exp 6 armour 1 weapon_lvl 1
unit		barb scythian nobles scythian				exp 6 armour 1 weapon_lvl 1
unit		barb scythian nobles scythian				exp 6 armour 1 weapon_lvl 1
unit		barb horse archers scythian				exp 6 armour 1 weapon_lvl 1
unit		barb horse archers scythian				exp 6 armour 1 weapon_lvl 2
unit		evsw scythian infantry				exp 6 armour 1 weapon_lvl 2
unit		evsw scythian infantry				exp 6 armour 1 weapon_lvl 2
unit		evsw scythian infantry				exp 6 armour 1 weapon_lvl 2

character	Partatua, named character, heir, age 30, , x 185, y 182 
traits GoodCommander 1 , Energetic 1 , Intelligent 1 , Drink 1 , Bloodthirsty 2
ancillaries galloper
army
unit		barb chieftain cavalry early scythian				exp 1 armour 1 weapon_lvl 1
unit		barb horse archers scythian				exp 1 armour 0 weapon_lvl 0
unit		barb horse archers scythian				exp 1 armour 0 weapon_lvl 0

character	Belnirari, named character, age 27, , x 215, y 178 
traits NaturalMilitarySkill 1 , Intelligent 2 , Bloodthirsty 1
ancillaries bard, goldsmith
army
unit		barb chieftain cavalry early scythian				exp 1 armour 1 weapon_lvl 1
unit		barb horse archers scythian				exp 1 armour 0 weapon_lvl 0
unit		barb horse archers scythian				exp 1 armour 0 weapon_lvl 0

character	Waradsin, general, age 20, , x 242, y 200
army
unit		barb horse archers scythian				exp 1 armour 0 weapon_lvl 0
unit		barb horse archers scythian				exp 1 armour 0 weapon_lvl 0

character	Waradsin, general, age 20, , x 164, y 194
army
unit		barb horse archers scythian				exp 3 armour 0 weapon_lvl 0
unit		barb horse archers scythian				exp 3 armour 0 weapon_lvl 0

character	Waradsin, general, age 20, , x 191, y 222
army
unit		barb horse archers scythian				exp 3 armour 0 weapon_lvl 0
unit		barb horse archers scythian				exp 3 armour 0 weapon_lvl 0
; Neapolis Scythian
character	Waradsin, general, age 20, ,  x 202, y 199 ;x 176, y 156
army
unit		barb horse archers scythian				exp 5 armour 1 weapon_lvl 2
unit		barb horse archers scythian				exp 5 armour 1 weapon_lvl 2
;Olvia
character	Waradsin, general, age 20, , x 165, y 160
army
unit		barb horse archers scythian				exp 5 armour 1 weapon_lvl 2
unit		barb horse archers scythian				exp 5 armour 1 weapon_lvl 2
unit		barb horse archers scythian				exp 5 armour 1 weapon_lvl 2
unit		evsw scythian infantry				exp 5 armour 1 weapon_lvl 2
unit		evsw scythian infantry				exp 5 armour 1 weapon_lvl 2
unit		evsw scythian infantry				exp 5 armour 1 weapon_lvl 2


character	Liapos, spy, age 20, , x 182, y 176 
traits GoodSpy 1

character	Rimsin, diplomat, age 20, , x 206, y 193 
traits GoodDiplomat 1

character_record		Ara, 	male, command 0, influence 0, management 0, subterfuge 0, age 1, alive, never_a_leader
character_record		Madyes, 	male, command 0, influence 0, management 0, subterfuge 0, age 6, alive, never_a_leader
character_record		Ziaelas, 	male, command 0, influence 0, management 0, subterfuge 0, age 10, alive, never_a_leader
character_record		Palacus, 	male, command 0, influence 0, management 0, subterfuge 0, age 14, alive, never_a_leader
character_record		Serapia, 	female, command 0, influence 0, management 0, subterfuge 0, age 49, alive, never_a_leader
character_record		Afina, 	female, command 0, influence 0, management 0, subterfuge 0, age 29, alive, never_a_leader
character_record		Branka, 	female, command 0, influence 0, management 0, subterfuge 0, age 26, alive, never_a_leader
character_record		Devnet, 	female, command 0, influence 0, management 0, subterfuge 0, age 22, alive, never_a_leader
character_record		Hestia, 	female, command 0, influence 0, management 0, subterfuge 0, age 9, alive, never_a_leader

relative 	Zipoetes, 	Serapia,		Partatua,	Belnirari,	Devnet,	Palacus,	end
relative 	Partatua, 	Afina,		Ziaelas,	Hestia,	end
relative 	Belnirari, 	Branka,		Madyes,	Ara,	end

;<BMK>Эпир (spain)

faction	spain, fortified smith
denari	10000

settlement
{
	level large_city
	region Epirus

	year_founded 0
	population 4000
	plan_set default_set
	faction_creator spain
	building
	{
		type core_building proconsuls_palace
	}
	building
	{
		type defenses stone_wall
	}
	building
	{
		type barracks army_barracks
	}
	building
	{
		type equestrian hippodrome
	}
	building
	{
		type missiles catapult_range
	}



	building
	{
		type town_trade_control governors_trade_control
	}

	building
	{
		type town_wehrmacht_control governors_wehrmacht_control
	}
}

settlement
{
	level large_town
	region Celtiberia

	year_founded 0
	population 4000
	plan_set default_set
	faction_creator spain
	building
	{
		type core_building governors_villa
	}
	building
	{
		type equestrian stables
	}
 	building
	{
		type barracks militia_barracks
	}
 	building
	{
		type equestrian stables
	}


}

settlement
{
	level large_town
	region Calabria

	year_founded 0
	population 4200
	plan_set default_set
	faction_creator spain
	building
	{
		type core_building governors_villa
	}
	building
	{
		type equestrian stables
	}
	building
	{
		type barracks city_barracks
	}
	building
	{
		type port_buildings port
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type hinterland_roads roads
	}
	building
	{
		type hinterland_farms farms
	}
}
character	Viriathus, named character, leader, age 60, , x 130, y 115
traits GoodCommander 1 , Energetic 1 , Intelligent 1 , Drink 1
ancillaries bard
army
unit		greek general's guard cavalry early				exp 1 armour 0 weapon_lvl 0
unit		epirus heavy peltast					exp 2 armour 0 weapon_lvl 0
unit		greek peltast					exp 2 armour 0 weapon_lvl 0
unit		maxmus Epirus hoplite					exp 3 armour 0 weapon_lvl 0

character	Caraunios, named character, heir, age 40, , x 128, y 116
traits GoodCommander 3 , Energetic 1 , Intelligent 2 , Drink 1
ancillaries bodyguard
army
unit		greek general's guard cavalry early				exp 1 armour 0 weapon_lvl 0
unit		epirus heavy peltast					exp 2 armour 0 weapon_lvl 0


character	Lucco, named character, age 30, , x 125, y 119
traits Intelligent 2
ancillaries civilized_slave, beastmaster
army
unit		greek general's guard cavalry early				exp 1 armour 0 weapon_lvl 0
unit		maxmus Epirus hoplite					exp 1 armour 0 weapon_lvl 0
		
character	Matugenus, named character, age 25, , x 114, y 119
traits NaturalMilitarySkill 1 , Energetic 1 , Drink 1 , Bloodthirsty 1
ancillaries armourer
army
unit		greek general's guard cavalry early			exp 1 armour 0 weapon_lvl 0
unit		greek medium cavalry				exp 3 armour 1 weapon_lvl 1
unit		greek medium cavalry				exp 3 armour 1 weapon_lvl 1
unit		maxmus tarent hoplite				exp 3 armour 1 weapon_lvl 1
unit		maxmus tarent hoplite				exp 3 armour 1 weapon_lvl 1


character	Matugenus, admiral, age 36, , x 120, y 119 
army
unit		naval biremes				exp 3 armour 0 weapon_lvl 0
unit		naval biremes				exp 3 armour 0 weapon_lvl 0
unit		naval biremes				exp 3 armour 0 weapon_lvl 0

character	Segovax, diplomat, age 20, , x 125, y 119
traits GoodDiplomat 3

character	Rhetogenes, spy, age 20, , x 125, y 119
traits GoodSpy 3

character_record		Ambon, 	male, command 0, influence 0, management 0, subterfuge 0, age 12, alive, never_a_leader
character_record		Leukon, 	male, command 0, influence 0, management 0, subterfuge 0, age 8, alive, never_a_leader
character_record		Avaros, 	male, command 0, influence 0, management 0, subterfuge 0, age 2, alive, never_a_leader
character_record		Cartimandua, 	female, command 0, influence 0, management 0, subterfuge 0, age 59, alive, never_a_leader
character_record		Esselta, 	female, command 0, influence 0, management 0, subterfuge 0, age 35, alive, never_a_leader
character_record		Iseulta, 	female, command 0, influence 0, management 0, subterfuge 0, age 28, alive, never_a_leader
character_record		Keynea, 	female, command 0, influence 0, management 0, subterfuge 0, age 24, alive, never_a_leader
character_record		Verica, 	female, command 0, influence 0, management 0, subterfuge 0, age 4, alive, never_a_leader

relative 	Viriathus, 	Cartimandua,		Caraunios,	Lucco,	Matugenus,	end
relative 	Caraunios, 	Esselta,		Ambon,	end
relative 	Lucco, 	Iseulta,		Leukon,	end
relative 	Matugenus, 	Keynea,		Verica,	Avaros,	end

;<BMK>Фракия (thrace)

faction	thrace, balanced napoleon
denari	15000
settlement
{
	level large_city
	region Thrace

	year_founded 0
	population 4000
	plan_set default_set
	faction_creator thrace
	building
	{
		type core_building proconsuls_palace
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type hinterland_farms farms
	}
	building
	{
		type market trader
	}
	building
	{
		type barracks army_barracks
	}
	building
	{
		type equestrian hippodrome
	}
	building
	{
		type missiles catapult_range
	}



	building
	{
		type town_trade_control governors_trade_control
	}

	building
	{
		type town_wehrmacht_control governors_wehrmacht_control
	}
}

settlement ;;; LAST DACIA
{
	level large_town
	region Getia

	year_founded 0
	population 4100
	plan_set default_set
	faction_creator thrace
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type market trader
	}
	building
	{
		type missiles practice_field
	}
	building
	{
		type hinterland_farms farms
	}
 	building
	{
		type equestrian stables
	}

}

settlement
{
	level town
	region Dacia

	year_founded 0
	population 3000
	plan_set default_set
	faction_creator thrace
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
 	building
	{
		type barracks muster_field
	}

}

character	Sautes, named character, leader, age 60, , x 152, y 133 
traits GoodCommander 2 , GoodAttacker 2 , Energetic 1 , Drink 2
ancillaries wine_steward , comedian , aged_retainer
army
unit		thracian bodyguard early				exp 1 armour 0 weapon_lvl 0
unit		warband falx thracian				exp 6 armour 3 weapon_lvl 0
unit		warband falx thracian				exp 6 armour 3 weapon_lvl 0
unit		greek hoplite militia				exp 4 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 4 armour 0 weapon_lvl 0
unit		greek cavalry				exp 5 armour 0 weapon_lvl 0
unit		greek cavalry				exp 5 armour 0 weapon_lvl 0

character	Pytros, named character, heir, age 40, , x 151, y 141 
traits GoodCommander 1 , Energetic 2 , Drink 2 , Intelligent 1
ancillaries wine_steward
army
unit		thracian bodyguard early				exp 1 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek peltast				exp 0 armour 0 weapon_lvl 1

character	Byzas, named character, age 30, , x 148, y 133 
traits NaturalMilitarySkill 1 , Intelligent 2 , Drink 1
ancillaries freeman_clerk, wise_man
army
unit		thracian bodyguard early				exp 1 armour 0 weapon_lvl 0
unit		greek cavalry				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0
unit		greek hoplite militia				exp 0 armour 0 weapon_lvl 0

character	Spartacus, general, age 20, , x 144, y 145
traits NaturalMilitarySkill 3 , Intelligent 1 , Generous 1
army
unit		warband falx thracian			exp 3 armour 0 weapon_lvl 0
unit		THRACIAN PELTAST			exp 5 armour 0 weapon_lvl 0

;Dacia
character	Pytros, general, age 20, , x 137, y 151
army
unit		greek cavalry				exp 5 armour 0 weapon_lvl 0
unit		greek hoplite militia			exp 0 armour 0 weapon_lvl 0
unit		warband falx thracian			exp 3 armour 0 weapon_lvl 0
unit		warband falx thracian			exp 3 armour 0 weapon_lvl 0
unit		warband falx thracian			exp 3 armour 0 weapon_lvl 0


character	Rhaskos, diplomat, age 20, , x 148, y 130 
traits GoodDiplomat 2

character	Satres, spy, age 20, , x 142, y 131 
traits GoodSpy 3

character_record		Bryzos, 	male, command 0, influence 0, management 0, subterfuge 0, age 2, alive, never_a_leader
character_record		Gaidres, 	male, command 0, influence 0, management 0, subterfuge 0, age 7, alive, never_a_leader
character_record		Iptacens, 	male, command 0, influence 0, management 0, subterfuge 0, age 10, alive, never_a_leader
character_record		Ziles, 	male, command 0, influence 0, management 0, subterfuge 0, age 14, alive, never_a_leader
character_record		Karia, 	female, command 0, influence 0, management 0, subterfuge 0, age 59, alive, never_a_leader
character_record		Bendidora, 	female, command 0, influence 0, management 0, subterfuge 0, age 35, alive, never_a_leader
character_record		Cerzula, 	female, command 0, influence 0, management 0, subterfuge 0, age 25, alive, never_a_leader
character_record		Eptesyka, 	female, command 0, influence 0, management 0, subterfuge 0, age 8, alive, never_a_leader
character_record		Mokasokos, 	female, command 0, influence 0, management 0, subterfuge 0, age 5, alive, never_a_leader

relative 	Sautes, 	Karia,		Pytros,	Byzas,	end
relative 	Pytros, 	Bendidora,		Ziles,	Iptacens,	Eptesyka,	end
relative 	Byzas, 	Cerzula,		Gaidres,	Mokasokos,	Bryzos,	end

;<BMK>Повстанцы (города)

faction	slave, trader smith
denari	500000
settlement
{
	level large_town
	region Tribus_Trinovantes

	year_founded 0
	population 2800
	plan_set default_set
	faction_creator britons
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type hinterland_farms farms
	}
}

settlement
{
	level large_town
	region Regnum_Bosphoranum

	year_founded 0
	population 1800
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses stone_wall
	}
	building
	{
		type market trader
	}
}

settlement
{
	level large_town
	region Gandhara

	year_founded 0
	population 2500
	plan_set default_set
	faction_creator parthia
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses stone_wall
	}
}


settlement
{
	level town
	region Connachta

	year_founded 0
	population 1152
	plan_set default_set
	faction_creator britons
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level village
	region Locus_Fenni

	year_founded 0
	population 500
	plan_set default_set
	faction_creator gauls
}

settlement
{
	level large_town
	region Heraclea_Chersonesus

	year_founded 0
	population 1200
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses stone_wall
	}
	building
	{
		type hinterland_farms farms
	}
}

settlement
{
	level town
	region Lugdinensis

	year_founded 0
	population 1200
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level large_town
	region Transalpine_Gaul

	year_founded 0
	population 1200
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses stone_wall
	}
}

settlement
{
	level town
	region Illyria

	year_founded 0
	population 1400
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level town
	region Sinai

	year_founded 0
	population 1200
	plan_set default_set
	faction_creator armenia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level town
	region Tribus_Chattii

	year_founded 0
	population 1000
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}


settlement
{
	level town
	region Pannonia

	year_founded 0
	population 800
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Bithynia

	year_founded 0
	population 900
	plan_set default_set
	faction_creator thrace
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Noricum

	year_founded 0
	population 900
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Liguria

	year_founded 0
	population 900
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Nabataea

	year_founded 0
	population 900
	plan_set default_set
	faction_creator armenia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Belgica

	year_founded 0
	population 1600
	plan_set default_set
	faction_creator britons
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level town
	region Colchis

	year_founded 0
	population 3500
	plan_set default_set
	faction_creator armenia
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type defenses stone_wall
	}
}

settlement
{
	level town
	region Scythia_Parva

	year_founded 0
	population 1200
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses stone_wall
	}
	building
	{
		type missiles practice_field
	}
}





settlement
{
	level town
	region Gaetulia

	year_founded 0
	population 1000
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type barracks muster_field
	}
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level large_town
	region Libya

	year_founded 0
	population 800
	plan_set default_set
	faction_creator egypt
	building
	{
		type barracks muster_field
	}
	building
	{
		type temple_of_justice temple_of_justice_temple
	}
	building
	{
		type core_building governors_villa
	}
}


settlement
{
	level town
	region Locus_Aestii

	year_founded 0
	population 800
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Tribus_Neuri

	year_founded 0
	population 1800
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level large_town
	region Boihaemum

	year_founded 0
	population 1500
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Dalmatia

	year_founded 0
	population 1200
	plan_set default_set
	faction_creator dacia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}


settlement
{
	level large_town
	region Caria

	year_founded 0
	population 1200
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses stone_wall
	}
}

settlement
{
	level town
	region Rhaetia

	year_founded 0
	population 1200
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}


settlement
{
	level town
	region Caledonia

	year_founded 0
	population 700
	plan_set default_set
	faction_creator britons
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Tocharia

	year_founded 0
	population 1500
	plan_set default_set
	faction_creator parthia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses stone_wall
	}
}

settlement
{
	level town
	region Arachosia

	year_founded 0
	population 1000
	plan_set default_set
	faction_creator seleucid
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Gedrosia

	year_founded 0
	population 700
	plan_set default_set
	faction_creator parthia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Paropamisadae

	year_founded 0
	population 700
	plan_set default_set
	faction_creator parthia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Maketa

	year_founded 0
	population 700
	plan_set default_set
	faction_creator armenia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Zufar

	year_founded 0
	population 700
	plan_set default_set
	faction_creator armenia
	building
	{
		type core_building governors_house
	}
}

settlement
{
	level town
	region Hadramaut

	year_founded 0
	population 700
	plan_set default_set
	faction_creator armenia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Qataban

	year_founded 0
	population 700
	plan_set default_set
	faction_creator armenia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level large_town
	region Saba

	year_founded 0
	population 1500
	plan_set default_set
	faction_creator armenia
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses stone_wall
	}
}

settlement
{
	level town
	region Main

	year_founded 0
	population 700
	plan_set default_set
	faction_creator armenia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Ethiopia

	year_founded 0
	population 1200
	plan_set default_set
	faction_creator egypt
	building
	{
		type barracks muster_field
	}
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Tribus_Yuezhi

	year_founded 0
	population 500
	plan_set default_set
	faction_creator scythia
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level town
	region Locus_Gerraei

	year_founded 0
	population 800
	plan_set default_set
	faction_creator armenia
	building
	{
		type core_building governors_house
	}
}

settlement
{
	level town
	region Azania

	year_founded 0
	population 800
	plan_set default_set
	faction_creator egypt
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Chach

	year_founded 0
	population 800
	plan_set default_set
	faction_creator parthia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Ceretania

	year_founded 0
	population 1500
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level large_town
	region Beribracia

	year_founded 0
	population 1500
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_villa
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type defenses stone_wall
	}
}

settlement
{
	level town
	region Carpetania

	year_founded 0
	population 1500
	plan_set default_set
	faction_creator spain
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Cantabria

	year_founded 0
	population 500
	plan_set default_set
	faction_creator spain
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Aetolia

	year_founded 0
	population 4000
	plan_set default_set
	faction_creator spain
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses stone_wall
	}
	building
	{
		type missiles practice_field
	}
}


settlement
{
	level town
	region Tribus_Scordisci

	year_founded 0
	population 1500
	plan_set default_set
	faction_creator dacia
	building
	{
		type barracks muster_field
	}
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Tribus_Eravisci

	year_founded 0
	population 800
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Tribus_Cotini

	year_founded 0
	population 500
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Tribus_Bastarnae

	year_founded 0
	population 1000
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Locus_Lugii

	year_founded 0
	population 1000
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level village
	region Locus_Venedae

	year_founded 0
	population 900
	plan_set default_set
	faction_creator gauls
}


settlement
{
	level town
	region Tribus_Iirkai

	year_founded 0
	population 800
	plan_set default_set
	faction_creator scythia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}


settlement
{
	level town
	region Armenia_Minor

	year_founded 0
	population 1200
	plan_set default_set
	faction_creator armenia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Mauretania_Tingitana

	year_founded 0
	population 1500
	plan_set default_set
	faction_creator numidia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level town
	region Mauretania_Massaesili

	year_founded 0
	population 1500
	plan_set default_set
	faction_creator numidia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Tribus_Brigantes

	year_founded 0
	population 984
	plan_set default_set
	faction_creator britons
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Erain

	year_founded 0
	population 800
	plan_set default_set
	faction_creator britons
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level town
	region Tribus_Nervii

	year_founded 0
	population 1000
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Sequania

	year_founded 0
	population 1200
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level town
	region Arvernia

	year_founded 0
	population 1500
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level town
	region Aquitania

	year_founded 0
	population 1200
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level town
	region Tribus_Volcae

	year_founded 0
	population 1500
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks muster_field
	}
}


settlement
{
	level town
	region Moesia

	year_founded 0
	population 1200
	plan_set default_set
	faction_creator dacia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}


settlement
{
	level town
	region Maeotis

	year_founded 0
	population 1000
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_house
	}
	building
	{
		type hinterland_farms farms
	}
	building
	{
		type defenses wooden_pallisade
	}
}


settlement
{
	level town
	region Locus_Careotae

	year_founded 0
	population 800
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Tartesania

	year_founded 0
	population 1500
	plan_set default_set
	faction_creator spain
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		;type defenses wooden_pallisade
		type defenses stone_wall

	}
}

settlement
{
	level town
	region Asturia

	year_founded 0
	population 500
	plan_set default_set
	faction_creator spain
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Cyrenaica

	year_founded 0
	population 1200
	plan_set default_set
	faction_creator greek_cities
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses stone_wall
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level town
	region Tribus_Ordovices

	year_founded 0
	population 984
	plan_set default_set
	faction_creator britons
	building
	{
		type barracks muster_field
	}
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Tribus_Dumnonii

	year_founded 0
	population 1000
	plan_set default_set
	faction_creator britons
	building
	{
		type barracks muster_field
	}
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Phasania

	year_founded 0
	population 1500
	plan_set default_set
	faction_creator numidia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses stone_wall
	}
	building
	{
		type barracks muster_field
	}
}

settlement
{
	level town
	region Hoggar

	year_founded 0
	population 1000
	plan_set default_set
	faction_creator numidia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses stone_wall
	}
}


settlement
{
	level town
	region Tribus_Tibu

	year_founded 0
	population 1500
	plan_set default_set
	faction_creator britons
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level  large_town
	region Iberia

	year_founded 0
	population 2000
	plan_set default_set
	faction_creator romans_scipii
	building
	{
		type barracks militia_barracks
	}
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type hinterland_roads roads
	}
	building
	{
		type hinterland_farms farms+1
	}
}

settlement
{
	level large_town
	region Gallaecia

	year_founded 0
	population 2500
	plan_set default_set
	faction_creator spain
	building
	{
		type barracks muster_field
	}
	building
	{
		type core_building governors_villa
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level large_town
	region Lusitania

	year_founded 0
	population 2200
	plan_set default_set
	faction_creator spain
	building
	{
		type core_building governors_villa
	}
	building
	{
		type missiles practice_field
	}
}

settlement
{
	level town
	region Lemovicia

	year_founded 0
	population 1400
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type missiles practice_field
	}
}

;;;;;;;;;;;;; LAST GERMAN



;;; END LAST GERMAN


;;;;;;;;;;;;;; LASt GAUL
settlement
{
	level town
	region Armorica

	year_founded 0
	population 1300
	plan_set default_set
	faction_creator gauls
	building
	{
		type core_building governors_house
	}
	building
	{
		type barracks muster_field
	}
}
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;  LAST NUMIDIA
settlement
{
	level large_town
	region Numidia

	year_founded 0
	population 3200
	plan_set default_set
	faction_creator numidia
	building
	{
		type core_building governors_villa
	}
	building
	{
		type equestrian stables
	}
	building
	{
		type defenses wooden_pallisade
	}
	building
	{
		type barracks militia_barracks
	}
	building
	{
		type market trader
	}
}

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;  END LAST NUMIDIA

settlement      ;;;;;;;;;;;  PALMYRA
{
	level town
	region Regnum_Palmyrae

	year_founded 0
	population 1200
	plan_set default_set
	faction_creator armenia
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses stone_wall
	}
	building
	{
		type market trader
	}
	building
	{
		type barracks muster_field
	}
}


settlement
{
	level large_town
	region Turdetania

	year_founded 0
	population 1400
	plan_set default_set
	faction_creator carthage
	building
	{
		type barracks militia_barracks
	}
	building
	{
		type market trader
	}
	building
	{
		type core_building governors_villa
	}
	building
	{
		type hinterland_farms farms
	}
	building
	{
		type defenses wooden_pallisade
	}
}

settlement
{
	level town
	region Propontis

	year_founded 0
	population 3000
	plan_set default_set
	faction_creator thrace
	building
	{
		type core_building governors_house
	}
	building
	{
		type defenses wooden_wall
	}
	building
	{
		type barracks muster_field
	}
}

;<BMK>Повстанцы (армии)

;Byzantium
character	sub_faction greek_cities, Aegon, general, age 20, , x 160, y 129 ;Rhaskos
army
unit		greek hoplite			exp 3 armour 1 weapon_lvl 1
unit		greek hoplite			exp 3 armour 1 weapon_lvl 1
unit		greek hoplite			exp 3 armour 1 weapon_lvl 1
unit		merc thracian				exp 3 armour 0 weapon_lvl 1
unit		merc thracian				exp 3 armour 0 weapon_lvl 1
unit		merc thracian				exp 3 armour 0 weapon_lvl 1


;Connachta
character	sub_faction britons, Brigomaglos, general, age 20, , x 37, y 202
army
unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0

;Gaetulia
character	sub_faction numidia, Akbar, general, age 20, , x 47, y 57
army
unit		numidian cavalry				exp 3 armour 0 weapon_lvl 0
unit		numidian javelinmen				exp 3 armour 0 weapon_lvl 0
unit		numidian javelinmen				exp 3 armour 0 weapon_lvl 0

;Tribus_Chattii
character	sub_faction germans, Gunderic, general, age 20, , x 89, y 176
army
unit		barb infantry slave				exp 3 armour 0 weapon_lvl 1
unit		barb infantry slave				exp 3 armour 0 weapon_lvl 1
unit		barb cavalry slave				exp 4 armour 0 weapon_lvl 2

;Locus_Aestii
character	sub_faction germans, Adalmun, general, age 20, , x 136, y 202
army
unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0

;Locus_Tissagetae
;character	sub_faction germans, Oza, general, age 20, , x 191, y 222
;army
;unit		barb cavalry slave				exp 4 armour 0 weapon_lvl 2
;unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0
;unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0
;unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0
;unit		barb archer slave				exp 3 armour 0 weapon_lvl 0
;unit		barb archer slave				exp 3 armour 0 weapon_lvl 0
;unit		barb archer slave				exp 3 armour 0 weapon_lvl 0

;Heraclea_Chersonesus
character	sub_faction greek_cities, Elatos, general, age 20, , x 175, y 151
army
unit		greek medium cavalry				exp 5 armour 1 weapon_lvl 1
unit		greek medium cavalry				exp 5 armour 1 weapon_lvl 1
unit		greek hoplite		exp 5 armour 1 weapon_lvl 1
unit		greek hoplite		exp 5 armour 1 weapon_lvl 1
unit		greek hoplite		exp 5 armour 1 weapon_lvl 1
unit		greek hoplite		exp 5 armour 1 weapon_lvl 1
unit		greek hoplite		exp 5 armour 1 weapon_lvl 1
unit		barb archer slave	exp 3 armour 0 weapon_lvl 0
unit		barb archer slave	exp 3 armour 0 weapon_lvl 0

;Transalpine_Gaul
character	sub_faction greek_cities, Cleon, general, age 20, , x 67, y 138
army
unit		greek medium cavalry				exp 3 armour 0 weapon_lvl 0
unit		greek hoplite		exp 3 armour 1 weapon_lvl 1
unit		greek hoplite		exp 3 armour 1 weapon_lvl 1
unit		greek hoplite		exp 3 armour 1 weapon_lvl 1
unit		greek hoplite		exp 3 armour 1 weapon_lvl 1
unit		merc cretan archers			exp 3 armour 0 weapon_lvl 3
unit		merc cretan archers			exp 3 armour 0 weapon_lvl 3
unit		greek medium cavalry				exp 3 armour 0 weapon_lvl 0

;;Propontis
;character	sub_faction greek_cities, Damon, general, age 20, , x 160, y 129
;army
;unit		greek hoplite			exp 3 armour 0 weapon_lvl 1
;unit		greek hoplite			exp 3 armour 0 weapon_lvl 1
;unit		greek peltast			exp 3 armour 0 weapon_lvl 1

;Epirus
;character	sub_faction greek_cities, Pyrrhus, general, age 20, , x 125, y 119
;army
;unit		greek medium cavalry				exp 7 armour 3 weapon_lvl 3
;unit		greek hoplite			exp 6 armour 1 weapon_lvl 1
;unit		greek hoplite			exp 6 armour 1 weapon_lvl 1
;unit		greek hoplite			exp 6 armour 1 weapon_lvl 1
;unit		greek hoplite			exp 6 armour 1 weapon_lvl 1
;unit		greek heavy peltast			exp 3 armour 0 weapon_lvl 0
;unit		greek heavy peltast			exp 3 armour 0 weapon_lvl 0
;unit		greek heavy peltast			exp 3 armour 0 weapon_lvl 0
;unit		greek medium cavalry				exp 7 armour 3 weapon_lvl 3

;Crete
;character	sub_faction greek_cities, Kallipos, general, age 20, , x 146, y 94
;army
;unit		greek hoplite			exp 3 armour 1 weapon_lvl 1
;unit		merc cretan archers			exp 5 armour 0 weapon_lvl 3
;unit		merc cretan archers			exp 5 armour 0 weapon_lvl 3

;Dalmatia
character	sub_faction dacia, Dapyx, general, age 20, , x 109, y 145
army
unit		barb infantry slave		exp 3 armour 0 weapon_lvl 0
unit		merc illyrian			exp 4 armour 1 weapon_lvl 1
unit		merc illyrian			exp 4 armour 1 weapon_lvl 1

;Bithynia
character	sub_faction thrace, Ziepyrus, general, age 20, , x 165, y 128
army
unit		greek peltast				exp 1 armour 0 weapon_lvl 0

;Caria
character	sub_faction greek_cities, Kallipos, general, age 20, , x 158, y 105
army
unit		greek hoplite		exp 3 armour 0 weapon_lvl 1
unit		greek hoplite		exp 3 armour 0 weapon_lvl 1
unit		greek cavalry				exp 3 armour 0 weapon_lvl 0

;Illyria
character	sub_faction thrace, Dentupes, general, age 20, , x 122, y 129
army
unit		greek medium cavalry				exp 3 armour 0 weapon_lvl 0
unit		greek medium cavalry				exp 3 armour 0 weapon_lvl 0
unit		merc illyrian			exp 5 armour 1 weapon_lvl 1
unit		merc illyrian			exp 5 armour 1 weapon_lvl 1
unit		merc illyrian			exp 5 armour 1 weapon_lvl 1
unit		merc illyrian			exp 5 armour 1 weapon_lvl 1
unit		merc illyrian			exp 5 armour 1 weapon_lvl 1
unit		merc cilician pirate				exp 3 armour 0 weapon_lvl 0

;Pannonia
character	sub_faction dacia, Dicomes, general, age 20, , x 118, y 158
army
unit		barb cavalry slave			exp 8 armour 2 weapon_lvl 2
unit		barb cavalry slave			exp 8 armour 2 weapon_lvl 2
unit		barb infantry slave				exp 6 armour 1 weapon_lvl 1
unit		barb infantry slave				exp 6 armour 1 weapon_lvl 1
unit		barb infantry slave				exp 6 armour 1 weapon_lvl 1
unit		barb infantry slave				exp 6 armour 1 weapon_lvl 1
unit		barb archer slave			exp 4 armour 0 weapon_lvl 1
unit		barb archer slave			exp 4 armour 0 weapon_lvl 1
unit		barb archer slave			exp 4 armour 0 weapon_lvl 1
unit		merc illyrian			exp 4 armour 0 weapon_lvl 0


;Tribus_Neuri
character	sub_faction dacia, Dapyx, general, age 20, , x 149, y 185
army
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb archer slave			exp 3 armour 0 weapon_lvl 0

;Boihaemum
character	sub_faction gauls, Gorteyrn, general, age 20, , x 111, y 169
army
unit		barb noble cavalry slave			exp 4 armour 0 weapon_lvl 1
unit		barb infantry slave			exp 4 armour 0 weapon_lvl 1
unit		barb infantry slave			exp 4 armour 0 weapon_lvl 1
unit		barb infantry slave			exp 4 armour 0 weapon_lvl 1
unit		barb infantry slave			exp 4 armour 0 weapon_lvl 1
unit		barb archer slave			exp 4 armour 0 weapon_lvl 1
unit		barb archer slave			exp 4 armour 0 weapon_lvl 1
unit		barb cavalry slave			exp 4 armour 0 weapon_lvl 1
unit		barb noble cavalry slave			exp 4 armour 0 weapon_lvl 1
unit		barb noble cavalry slave			exp 4 armour 0 weapon_lvl 1

;Lugdinensis
character	sub_faction gauls, Diviciacus, general, age 20, , x 68, y 153
army
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb cavalry slave			exp 5 armour 1 weapon_lvl 1

;Liguria
character	sub_faction gauls, Erbin, general, age 20, , x 83, y 140
army
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0

;Noricum
character	sub_faction gauls, Vortigern, general, age 20, , x 99, y 160
army
unit		barb noble cavalry slave			exp 4 armour 0 weapon_lvl 1
unit		barb noble cavalry slave			exp 4 armour 0 weapon_lvl 1
unit		barb naked fanatics slave		exp 4 armour 0 weapon_lvl 0
unit		barb infantry slave			exp 4 armour 0 weapon_lvl 1
unit		barb infantry slave			exp 4 armour 0 weapon_lvl 1
unit		barb infantry slave			exp 4 armour 0 weapon_lvl 1
unit		barb infantry slave			exp 4 armour 0 weapon_lvl 1
unit		barb archer slave			exp 4 armour 0 weapon_lvl 1

;Capua------------------------------ //ATROPATAENE Old
;character	sub_faction armenia, Arame, general, age 20, , x 102, y 124
;army
;unit		barb cavalry slave			exp 3 armour 1 weapon_lvl 1
;unit		barb cavalry slave			exp 3 armour 1 weapon_lvl 1
;unit		greek heavy peltast		exp 3 armour 0 weapon_lvl 0
;unit		greek heavy peltast		exp 3 armour 0 weapon_lvl 0
;unit		greek heavy peltast		exp 3 armour 0 weapon_lvl 0
;unit		greek heavy peltast		exp 3 armour 0 weapon_lvl 0
;unit		merc illyrian			exp 3 armour 0 weapon_lvl 0
;unit		merc cretan archers		exp 3 armour 0 weapon_lvl 0
;unit		barb archer slave		exp 3 armour 0 weapon_lvl 0


;Tribus_Tibu
character	sub_faction  parthia, Xanthos, general, age 20, , x 357, y 98
army
unit		east heavy cavalry			exp 3 armour 1 weapon_lvl 1
unit		east infantry		exp 3 armour 0 weapon_lvl 0
unit		east infantry		exp 3 armour 0 weapon_lvl 0
unit		east infantry		exp 3 armour 0 weapon_lvl 0
unit		east archer			exp 3 armour 0 weapon_lvl 0
unit		merc indian infantry light	exp 3 armour 0 weapon_lvl 0
unit		merc indian infantry light	exp 3 armour 0 weapon_lvl 0



;Regnum_Palmyrae
character	sub_faction parthia, Xanthos, general, age 20, , x 229, y 117
army
unit		east archer			exp 3 armour 0 weapon_lvl 0
unit		east infantry			exp 4 armour 1 weapon_lvl 1
unit		merc bedouin archers			exp 3 armour 0 weapon_lvl 0



;Arabia
character	sub_faction armenia, Kudurmabug, general, age 20, , x 258, y 60
army
unit		merc bedouin			exp 4 armour 0 weapon_lvl 0
unit		merc bedouin archers			exp 4 armour 0 weapon_lvl 0
unit		merc bedouin archers			exp 4 armour 0 weapon_lvl 0

;Nabataea
character	sub_faction parthia, Umamaita, general, age 20, , x 216, y 80
army
unit		east archer			exp 3 armour 0 weapon_lvl 0
unit		east infantry			exp 4 armour 1 weapon_lvl 1
unit		merc bedouin archers			exp 3 armour 0 weapon_lvl 0

;Sinai
character	sub_faction parthia, Xshathrita, general, age 20, , x 206, y 70
army
unit		east archer			exp 4 armour 0 weapon_lvl 0
unit		east infantry			exp 4 armour 1 weapon_lvl 1
unit		merc bedouin archers			exp 3 armour 0 weapon_lvl 0

;Belgica
character	sub_faction britons, Ceanatis, general, age 20, , x 61, y 174
army
unit		barb chariot heavy slave				exp 7 armour 1 weapon_lvl 2
unit		barb infantry slave				exp 7 armour 1 weapon_lvl 1
unit		barb infantry slave				exp 7 armour 1 weapon_lvl 1
unit		barb infantry slave				exp 7 armour 1 weapon_lvl 1
unit		barb infantry slave				exp 7 armour 1 weapon_lvl 1
unit		barb infantry slave				exp 7 armour 1 weapon_lvl 1
unit		barb archer slave				exp 3 armour 0 weapon_lvl 1
unit		barb archer slave				exp 3 armour 0 weapon_lvl 1
unit		barb chariot heavy slave				exp 7 armour 1 weapon_lvl 2
unit		barb chariot heavy slave				exp 7 armour 1 weapon_lvl 2

;Scythia
;character	sub_faction scythia, Idanthyrsus, general, age 20, , x 165, y 160
;army
;unit		greek medium cavalry			exp 5 armour 1 weapon_lvl 1

;Maeotis
character	sub_faction scythia, Sarduri, general, age 20, , x 191 y 168
army
unit		barb archer slave				exp 3 armour 0 weapon_lvl 1
unit		greek hoplite		exp 3 armour 0 weapon_lvl 0
unit		barb horse archers slave				exp 3 armour 0 weapon_lvl 1

;Colchis
character	sub_faction armenia, Kudurmabug, general, age 20, , x 216, y 147
army
unit		east infantry			exp 3 armour 1 weapon_lvl 1
unit		east infantry			exp 3 armour 1 weapon_lvl 1
unit		east heavy cavalry			exp 3 armour 1 weapon_lvl 1

;Scythia_Parva
character	sub_faction greek_cities, Euchenor, general, age 20, , x 157, y 144
army
unit		greek medium cavalry			exp 3 armour 1 weapon_lvl 1
unit		greek medium cavalry			exp 3 armour 1 weapon_lvl 1
unit		greek hoplite			exp 3 armour 1 weapon_lvl 1
unit		greek hoplite			exp 3 armour 1 weapon_lvl 1
unit		greek hoplite			exp 3 armour 1 weapon_lvl 1
unit		greek hoplite			exp 3 armour 1 weapon_lvl 1
unit		merc thracian				exp 3 armour 0 weapon_lvl 1
unit		merc cretan archers			exp 3 armour 0 weapon_lvl 1

;Sicilia_Graecus  // Ftopku slavov)
;character	sub_faction greek_cities, Demetrios of Syracuse, general, age 20, , x 106, y 100
;army
;unit		greek medium cavalry			exp 3 armour 1 weapon_lvl 1
;unit		greek hoplite			exp 6 armour 1 weapon_lvl 1
;unit		greek hoplite			exp 6 armour 1 weapon_lvl 1
;unit		greek hoplite			exp 6 armour 1 weapon_lvl 1
;unit		greek hoplite			exp 6 armour 1 weapon_lvl 1
;unit		merc cretan archers			exp 3 armour 0 weapon_lvl 1
;unit		merc cretan archers			exp 3 armour 0 weapon_lvl 1
;unit		greek medium cavalry			exp 3 armour 1 weapon_lvl 1
;unit		greek medium cavalry			exp 3 armour 1 weapon_lvl 1

;Mysia   // PERGAMUM, Ftopku slavov))
;character	sub_faction greek_cities, Menandros, general, age 20, , x 154, y 117
;army
;unit		greek medium cavalry			exp 3 armour 1 weapon_lvl 1
;unit		greek medium cavalry			exp 3 armour 1 weapon_lvl 1
;unit		greek medium cavalry			exp 3 armour 1 weapon_lvl 1
;unit		greek hoplite			exp 4 armour 1 weapon_lvl 1
;unit		greek hoplite			exp 4 armour 1 weapon_lvl 1
;unit		greek hoplite			exp 4 armour 1 weapon_lvl 1
;unit		greek hoplite			exp 4 armour 1 weapon_lvl 1
;unit		merc rhodian slingers			exp 3 armour 1 weapon_lvl 1
;unit		merc rhodian slingers			exp 3 armour 1 weapon_lvl 1

;Libya
character	sub_faction numidia, Akbar, general, age 20, , x 155, y 58
army
unit		merc libyan infantry				exp 3 armour 0 weapon_lvl 0
unit		merc libyan infantry				exp 3 armour 0 weapon_lvl 0
unit		merc libyan infantry				exp 3 armour 0 weapon_lvl 0

;Sicilia_Romanus
;character	sub_faction greek_cities, Demosthenes, general, age 20, , x 106, y 107
;army
;unit		greek hoplite			exp 3 armour 0 weapon_lvl 1
;unit		greek hoplite			exp 3 armour 0 weapon_lvl 1
;unit		greek peltast			exp 3 armour 0 weapon_lvl 0

;Regnum_Bosphoranum
character	sub_faction greek_cities, Pentheus, general, age 20, , x 184, y 157
army
unit		greek medium cavalry			exp 5 armour 1 weapon_lvl 1
unit		greek medium cavalry			exp 5 armour 1 weapon_lvl 1
unit		greek hoplite		exp 5 armour 1 weapon_lvl 1
unit		greek hoplite		exp 5 armour 1 weapon_lvl 1
unit		greek hoplite		exp 5 armour 1 weapon_lvl 1
unit		greek hoplite		exp 5 armour 1 weapon_lvl 1
unit		greek hoplite		exp 5 armour 1 weapon_lvl 1
unit		barb horse archers slave	exp 3 armour 0 weapon_lvl 0
unit		barb horse archers slave	exp 3 armour 0 weapon_lvl 0
unit		barb archer slave	exp 3 armour 0 weapon_lvl 0

;Rhaetia
character	sub_faction gauls, Cintugnatus, general, age 20, , x 86, y 159
army
unit		barb noble cavalry slave			exp 4 armour 0 weapon_lvl 1
unit		barb infantry slave			exp 6 armour 0 weapon_lvl 1
unit		barb infantry slave			exp 6 armour 0 weapon_lvl 1
unit		barb infantry slave			exp 6 armour 0 weapon_lvl 1
unit		barb infantry slave			exp 6 armour 0 weapon_lvl 1
unit		barb archer slave	exp 3 armour 0 weapon_lvl 0
unit		greek hoplite militia			exp 3 armour 1 weapon_lvl 1
unit		greek hoplite militia			exp 3 armour 1 weapon_lvl 1
unit		barb noble cavalry slave			exp 4 armour 0 weapon_lvl 1
unit		barb noble cavalry slave			exp 4 armour 0 weapon_lvl 1

;Iberia
character	sub_faction armenia, Trdat, general, age 20, , x 231, y 147
army
unit		east heavy cavalry			exp 3 armour 1 weapon_lvl 1
unit		east archer			exp 3 armour 0 weapon_lvl 1
unit		east archer			exp 3 armour 0 weapon_lvl 1
unit		greek hoplite militia			exp 3 armour 1 weapon_lvl 1
unit		greek hoplite militia			exp 3 armour 1 weapon_lvl 1
unit		east infantry		exp 3 armour 0 weapon_lvl 1

;Albania
character	sub_faction armenia, Artavazd, general, age 20, , x 248, y 147
army
unit		east infantry		exp 3 armour 0 weapon_lvl 1
unit		east infantry		exp 3 armour 0 weapon_lvl 1
unit		east archer			exp 5 armour 0 weapon_lvl 1
unit		barb horse archers slave	exp 3 armour 0 weapon_lvl 0

;Caledonia
character	sub_faction britons, Cunovindus, general, age 20, , x 50, y 216
army
unit		barb chariot heavy slave				exp 6 armour 1 weapon_lvl 2
unit		barb infantry slave				exp 5 armour 1 weapon_lvl 1
unit		barb infantry slave				exp 5 armour 1 weapon_lvl 1
unit		barb infantry slave				exp 5 armour 1 weapon_lvl 1
unit		barb infantry slave				exp 5 armour 1 weapon_lvl 1
unit		barb archer slave				exp 3 armour 0 weapon_lvl 1
unit		barb archer slave				exp 3 armour 0 weapon_lvl 1
unit		barb chariot heavy slave				exp 6 armour 1 weapon_lvl 2
unit		barb chariot heavy slave				exp 6 armour 1 weapon_lvl 2

;Tribus_Iirkai
character	sub_faction scythia, Sarduri, general, age 20, , x 242, y 219
army
unit		barb infantry slave				exp 3 armour 1 weapon_lvl 1
unit		barb horse archers slave				exp 3 armour 1 weapon_lvl 1
unit		merc sarmatian cavalry				exp 3 armour 1 weapon_lvl 2

;Tribus_Legae
character	sub_faction scythia, Sarduri, general, age 20, , x 228, y 158
army
unit		barb archer slave				exp 3 armour 1 weapon_lvl 1
unit		barb horse archers slave				exp 3 armour 1 weapon_lvl 1
unit		barb horse archers slave				exp 3 armour 1 weapon_lvl 1

;Tribus_Alanni
character	sub_faction scythia, Saulius, general, age 20, , x 288, y 227
army
unit		merc sarmatian cavalry				exp 2 armour 1 weapon_lvl 2
unit		barb noble cavalry slave			exp 1 armour 3 weapon_lvl 3
unit		barb horse archers slave				exp 1 armour 1 weapon_lvl 1
unit		barb horse archers slave				exp 1 armour 1 weapon_lvl 1


;Tribus_Massagetae
character	sub_faction scythia, Artashes, general, age 20, , x 277, y 198
army
unit		barb noble cavalry slave			exp 3 armour 3 weapon_lvl 3
unit		barb horse archers slave				exp 3 armour 0 weapon_lvl 1
unit		barb horse archers slave				exp 3 armour 0 weapon_lvl 1
unit		barb archer slave				exp 3 armour 0 weapon_lvl 1

;Tribus_Sakae
;character	sub_faction scythia, Haldita, general, age 20, , x 317, y 218
;army
;unit		barb noble cavalry slave			exp 9 armour 3 weapon_lvl 3
;unit		barb noble cavalry slave			exp 9 armour 3 weapon_lvl 3
;unit		barb horse archers slave				exp 9 armour 3 weapon_lvl 3
;unit		barb horse archers slave				exp 9 armour 3 weapon_lvl 3
;unit		barb horse archers slave				exp 9 armour 3 weapon_lvl 3
;unit		barb horse archers slave				exp 9 armour 3 weapon_lvl 3

;Wusun
;character	sub_faction scythia, Argishti, general, age 20, , x 361, y 205
;army
;unit		barb noble cavalry slave			exp 9 armour 3 weapon_lvl 3
;unit		barb noble cavalry slave			exp 9 armour 3 weapon_lvl 3
;unit		barb horse archers slave				exp 9 armour 3 weapon_lvl 3
;unit		barb horse archers slave				exp 9 armour 3 weapon_lvl 3
;unit		barb horse archers slave				exp 9 armour 3 weapon_lvl 3
;unit		barb horse archers slave				exp 9 armour 3 weapon_lvl 3

;Tribus_Yuezhi
character	sub_faction scythia, Arkha, general, age 20, , x 374, y 182
army
unit		barb noble cavalry slave			exp 9 armour 3 weapon_lvl 3
unit		barb noble cavalry slave			exp 9 armour 3 weapon_lvl 3
unit		barb horse archers slave				exp 9 armour 3 weapon_lvl 3
unit		barb horse archers slave				exp 9 armour 3 weapon_lvl 3

;Tocharia
character	sub_faction parthia, Darayavahu, general, age 20, , x 338, y 177
army
unit		east infantry		exp 4 armour 0 weapon_lvl 1
unit		east infantry		exp 4 armour 0 weapon_lvl 1
unit		east infantry		exp 4 armour 0 weapon_lvl 1
unit		east archer			exp 5 armour 0 weapon_lvl 1

;Gandhara
character	sub_faction armenia, Tigranes, general, age 20, , x 371, y 152
army
unit		east heavy cavalry			exp 5 armour 1 weapon_lvl 1
unit		east heavy cavalry			exp 5 armour 1 weapon_lvl 1
unit		east infantry		exp 3 armour 0 weapon_lvl 0
unit		east infantry		exp 3 armour 0 weapon_lvl 0
unit		east infantry		exp 3 armour 0 weapon_lvl 0
unit		east infantry		exp 3 armour 0 weapon_lvl 0
unit		east infantry		exp 3 armour 0 weapon_lvl 0
unit		east archer			exp 3 armour 0 weapon_lvl 1
unit		east archer			exp 3 armour 0 weapon_lvl 1
unit		merc elephants		exp 3 armour 0 weapon_lvl 0
unit		merc elephants		exp 3 armour 0 weapon_lvl 0

;Sattagydia
;character	sub_faction armenia, Kudurmabug, general, age 20, , x 368, y 118
;army
;unit		east infantry				exp 3 armour 0 weapon_lvl 0
;unit		east infantry				exp 3 armour 0 weapon_lvl 0

;Sind
;character	sub_faction armenia, Kudurmabug, general, age 20, , x 364, y 95
;army
;unit		east infantry				exp 3 armour 0 weapon_lvl 0
;unit		east infantry				exp 3 armour 0 weapon_lvl 0
;unit		east archer				exp 3 armour 0 weapon_lvl 0

;Arachosia
character	sub_faction armenia, Kudurmabug, general, age 20, , x 339, y 117
army
unit		east infantry		exp 3 armour 0 weapon_lvl 0
unit		east horse archer		exp 5 armour 0 weapon_lvl 0
unit		east horse archer		exp 5 armour 0 weapon_lvl 0

;Gedrosia
character	sub_faction armenia, Kudurmabug, general, age 20, , x 328, y 94
army
unit		east infantry		exp 3 armour 0 weapon_lvl 0
unit		east infantry		exp 3 armour 0 weapon_lvl 0
unit		east archer			exp 3 armour 0 weapon_lvl 0

;Maketa
character	sub_faction armenia, Kudurmabug, general, age 20, , x 303, y 74
army
unit		east heavy cavalry			exp 3 armour 1 weapon_lvl 1
unit		east heavy cavalry			exp 3 armour 1 weapon_lvl 1
unit		merc arab cavalry			exp 5 armour 1 weapon_lvl 0
unit		merc arab cavalry			exp 5 armour 1 weapon_lvl 0
unit		merc bedouin				exp 3 armour 0 weapon_lvl 0
unit		merc bedouin				exp 3 armour 0 weapon_lvl 0
unit		east infantry				exp 3 armour 0 weapon_lvl 0
unit		east infantry				exp 3 armour 0 weapon_lvl 0
unit		merc bedouin archers			exp 3 armour 0 weapon_lvl 0

;Zufar
character	sub_faction armenia, Kudurmabug, general, age 20, , x 309, y 49
army
unit		merc bedouin			exp 3 armour 0 weapon_lvl 0
unit		merc bedouin archers			exp 3 armour 0 weapon_lvl 0
unit		merc bedouin archers			exp 3 armour 0 weapon_lvl 0

;Hadramaut
character	sub_faction parthia, Fravarti, general, age 20, , x 288, y 30
army
unit		merc bedouin			exp 3 armour 0 weapon_lvl 0
unit		merc bedouin			exp 3 armour 0 weapon_lvl 0
unit		merc bedouin			exp 3 armour 0 weapon_lvl 0
unit		merc bedouin archers			exp 3 armour 0 weapon_lvl 0
unit		merc bedouin archers			exp 3 armour 0 weapon_lvl 0
unit		merc bedouin archers			exp 3 armour 0 weapon_lvl 0
unit		merc bedouin archers			exp 3 armour 0 weapon_lvl 0

;Qataban
character	sub_faction armenia, Kudurmabug, general, age 20, , x 274, y 13
army
unit		east heavy cavalry			exp 3 armour 1 weapon_lvl 1
unit		merc arab cavalry			exp 4 armour 0 weapon_lvl 0
unit		merc bedouin				exp 4 armour 0 weapon_lvl 0
unit		merc bedouin				exp 4 armour 0 weapon_lvl 0
unit		merc bedouin				exp 4 armour 0 weapon_lvl 0
unit		east infantry				exp 3 armour 0 weapon_lvl 0
unit		east infantry				exp 3 armour 0 weapon_lvl 0
unit		east archer				exp 3 armour 0 weapon_lvl 0
unit		merc bedouin archers			exp 4 armour 0 weapon_lvl 0

;Saba
character	sub_faction armenia, Kudurmabug, general, age 20, , x 259, y 21
army
unit		east heavy cavalry			exp 3 armour 1 weapon_lvl 1
unit		east heavy cavalry			exp 3 armour 1 weapon_lvl 1
unit		merc arab cavalry			exp 5 armour 1 weapon_lvl 1
unit		merc bedouin				exp 4 armour 0 weapon_lvl 1
unit		merc bedouin				exp 4 armour 0 weapon_lvl 1
unit		merc bedouin				exp 4 armour 0 weapon_lvl 1
unit		east infantry				exp 3 armour 0 weapon_lvl 0
unit		east infantry				exp 3 armour 0 weapon_lvl 0
unit		east infantry				exp 3 armour 0 weapon_lvl 0
unit		east archer				exp 3 armour 0 weapon_lvl 0
unit		merc bedouin archers			exp 4 armour 0 weapon_lvl 1

;Main
character	sub_faction armenia, Kudurmabug, general, age 20, , x 244, y 35
army
unit		east heavy cavalry			exp 4 armour 1 weapon_lvl 1
unit		merc bedouin				exp 4 armour 0 weapon_lvl 0
unit		merc bedouin				exp 4 armour 0 weapon_lvl 0
unit		merc bedouin				exp 4 armour 0 weapon_lvl 0
unit		merc bedouin				exp 4 armour 0 weapon_lvl 0
unit		merc bedouin archers			exp 4 armour 0 weapon_lvl 0
unit		merc bedouin archers			exp 4 armour 0 weapon_lvl 0

;Kush
character	sub_faction egypt, Amunmose, general, age 20, , x 200, y 17
army
unit		egyptian nubian spearmen				exp 8 armour 1 weapon_lvl 1
unit		egyptian nubian spearmen				exp 8 armour 1 weapon_lvl 1
unit		egyptian nubian spearmen				exp 7 armour 0 weapon_lvl 0
unit		egyptian nubian spearmen				exp 7 armour 0 weapon_lvl 0
unit		egyptian nubian spearmen				exp 7 armour 0 weapon_lvl 0

;Ethiopia
character	sub_faction egypt, Shabaka, general, age 20, , x 221, y 6
army
unit		merc elephants				exp 7 armour 0 weapon_lvl 0
unit		egyptian nubian spearmen				exp 8 armour 1 weapon_lvl 1
unit		egyptian nubian spearmen				exp 7 armour 0 weapon_lvl 0
unit		egyptian nubian spearmen				exp 7 armour 0 weapon_lvl 0
unit		egyptian nubian spearmen				exp 7 armour 0 weapon_lvl 0
unit		merc elephants				exp 7 armour 0 weapon_lvl 0

;Paropamisadae
character	sub_faction parthia, Caspar, general, age 20, , x 350, y 146
army
unit		east infantry		exp 3 armour 0 weapon_lvl 0
unit		east archer			exp 3 armour 0 weapon_lvl 0
unit		east archer			exp 3 armour 0 weapon_lvl 0

;Locus_Gerraei
character	sub_faction armenia, Kudurmabug, general, age 20, , x 270, y 73
army
unit		merc bedouin			exp 3 armour 0 weapon_lvl 0
unit		merc bedouin archers			exp 3 armour 0 weapon_lvl 0
unit		merc bedouin archers			exp 3 armour 0 weapon_lvl 0

;Phasania
character	sub_faction numidia, Hiempsal, general, age 20, , x 93, y 49
army
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1

;Hoggar
character	sub_faction numidia, Hiram, general, age 20, , x 77, y 43
army
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1

;Augila
character	sub_faction numidia, Akbar, general, age 20, , x 133, y 51
army
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1
unit		merc libyan infantry				exp 4 armour 0 weapon_lvl 0
unit		merc libyan infantry				exp 4 armour 0 weapon_lvl 0

;Tribus_Noba
character	sub_faction egypt, Nektanebo, general, age 20, , x 151, y 19
army
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0

;Tribus_Tibu
character	sub_faction egypt, Nektanebo, general, age 20, , x 106, y 17
army
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0

;Locus_Blemmye
character	sub_faction egypt, Nektanebo, general, age 20, , x 211, y 32
army
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0

;Azania
character	sub_faction egypt, Nektanebo, general, age 20, , x 295, y 1
army
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0
unit		egyptian nubian spearmen				exp 3 armour 0 weapon_lvl 0

;Amyrgia
character	sub_faction scythia, Sarduri, general, age 20, , x 349, y 167
army
unit		barb horse archers slave				exp 6 armour 1 weapon_lvl 1
unit		barb horse archers slave				exp 6 armour 1 weapon_lvl 1
unit		barb horse archers slave				exp 6 armour 1 weapon_lvl 1

;Chach
character	sub_faction parthia, Caspar, general, age 20, , x 322, y 178
army
unit		east infantry		exp 1 armour 0 weapon_lvl 0
unit		east archer			exp 1 armour 0 weapon_lvl 0

;Cydamae
character	sub_faction numidia, Akbar, general, age 20, , x 75, y 67
army
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 5 armour 0 weapon_lvl 1

;Ceretania
character	sub_faction greek_cities, Chersis, general, age 20, , x 57, y 132
army
unit		merc spanish infantry				exp 3 armour 0 weapon_lvl 0
unit		greek hoplite				exp 3 armour 0 weapon_lvl 0
unit		greek hoplite				exp 3 armour 0 weapon_lvl 0

;Beribracia
character	sub_faction greek_cities, Aegon, general, age 20, , x 41, y 122
army
unit		greek medium cavalry				exp 3 armour 0 weapon_lvl 0
unit		merc spanish infantry				exp 3 armour 0 weapon_lvl 0
unit		merc spanish infantry				exp 3 armour 0 weapon_lvl 0
unit		greek hoplite				exp 3 armour 0 weapon_lvl 0
unit		greek hoplite				exp 3 armour 0 weapon_lvl 0
unit		greek hoplite				exp 3 armour 0 weapon_lvl 0
unit		merc balearic slingers				exp 5 armour 0 weapon_lvl 0
unit		greek medium cavalry				exp 3 armour 0 weapon_lvl 0

;Carpetania
character	sub_faction spain, Gaizka, general, age 20, , x 29, y 123
army
unit		merc spanish infantry				exp 3 armour 0 weapon_lvl 0
unit		merc spanish infantry				exp 3 armour 0 weapon_lvl 0
unit		carthaginian cavalry				exp 4 armour 0 weapon_lvl 0

;Cantabria
character	sub_faction spain, Akil, general, age 20, , x 37, y 140
army
unit		barb cavalry slave			exp 5 armour 1 weapon_lvl 1
unit		barb cavalry slave			exp 5 armour 1 weapon_lvl 1
unit		merc spanish infantry				exp 3 armour 0 weapon_lvl 0
unit		merc spanish infantry				exp 3 armour 0 weapon_lvl 0
unit		merc spanish infantry				exp 3 armour 0 weapon_lvl 0
unit		merc spanish infantry				exp 3 armour 0 weapon_lvl 0
unit		merc spanish infantry				exp 3 armour 0 weapon_lvl 0
unit		carthaginian infantry				exp 3 armour 0 weapon_lvl 0
unit		carthaginian infantry				exp 3 armour 0 weapon_lvl 0

;Aetolia
character	sub_faction greek_cities, Iollas, general, age 20, , x 132, y 111
army
unit		greek hoplite			exp 3 armour 0 weapon_lvl 0
unit		greek hoplite			exp 3 armour 0 weapon_lvl 0
unit		greek heavy peltast			exp 3 armour 0 weapon_lvl 1


;Tribus_Scordisci
character	sub_faction thrace, Rhaskuporis, general, age 20, , x 127, y 144
army
unit		barb noble cavalry slave			exp 5 armour 0 weapon_lvl 0
unit		merc illyrian			exp 4 armour 1 weapon_lvl 1
unit		merc illyrian			exp 4 armour 1 weapon_lvl 1
unit		merc illyrian			exp 4 armour 1 weapon_lvl 1
unit		merc thracian				exp 4 armour 0 weapon_lvl 1
unit		merc thracian				exp 4 armour 0 weapon_lvl 1
unit		merc thracian				exp 4 armour 0 weapon_lvl 1
unit		barb archer slave			exp 3 armour 0 weapon_lvl 0
unit		barb noble cavalry slave			exp 5 armour 0 weapon_lvl 0

;Tribus_Eravisci
character	sub_faction gauls, Morirex, general, age 20, , x 122, y 153
army
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb cavalry slave			exp 3 armour 0 weapon_lvl 0
unit		barb noble cavalry slave			exp 3 armour 0 weapon_lvl 0

;Tribus_Cotini
character	sub_faction gauls, Morirex, general, age 20, , x 121, y 166
army
unit		barb infantry slave			exp 7 armour 0 weapon_lvl 0
unit		barb infantry slave			exp 7 armour 0 weapon_lvl 0
unit		barb infantry slave			exp 7 armour 0 weapon_lvl 0
unit		barb infantry slave			exp 7 armour 0 weapon_lvl 0
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb archer slave			exp 3 armour 0 weapon_lvl 0

;Tribus_Bastarnae
character	sub_faction germans, Bertgarda, general, age 20, , x 148, y 168
army
unit		barb noble cavalry slave				exp 4 armour 0 weapon_lvl 1
unit		merc bastarnae				exp 7 armour 0 weapon_lvl 1
unit		merc bastarnae				exp 7 armour 0 weapon_lvl 1
unit		merc bastarnae				exp 7 armour 0 weapon_lvl 1
unit		merc bastarnae				exp 7 armour 0 weapon_lvl 1
unit		merc bastarnae				exp 7 armour 0 weapon_lvl 1
unit		barb archer slave				exp 4 armour 0 weapon_lvl 1
unit		barb archer slave				exp 4 armour 0 weapon_lvl 1
unit		barb noble cavalry slave				exp 4 armour 0 weapon_lvl 1
unit		barb noble cavalry slave				exp 4 armour 0 weapon_lvl 1
unit		barb noble cavalry slave				exp 4 armour 0 weapon_lvl 1

;Locus_Lugii
character	sub_faction gauls, Dejotarus, general, age 20, , x 122, y 174
army
unit		barb noble cavalry slave			exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb archer slave			exp 3 armour 0 weapon_lvl 0
unit		barb archer slave			exp 3 armour 0 weapon_lvl 0
unit		barb archer slave			exp 3 armour 0 weapon_lvl 0
unit		barb noble cavalry slave			exp 3 armour 0 weapon_lvl 0
unit		barb noble cavalry slave			exp 3 armour 0 weapon_lvl 0

;Locus_Venedae
character	sub_faction germans, Adalwolf, general, age 20, , x 131, y 188
army
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb archer slave			exp 3 armour 0 weapon_lvl 0

;Locus_Fenni
character	sub_faction germans, Adalmun, general, age 20, , x 162, y 226
army
unit		barb archer slave				exp 3 armour 0 weapon_lvl 0
unit		barb archer slave				exp 3 armour 0 weapon_lvl 0
unit		barb archer slave				exp 3 armour 0 weapon_lvl 0

;Tribus_Budinai
;character	sub_faction germans, Adalmun, general, age 20, , x 164, y 194
;army
;unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0
;unit		barb cavalry slave				exp 3 armour 0 weapon_lvl 0
;unit		barb archer slave				exp 3 armour 0 weapon_lvl 0

;Armenia_Minor
character	sub_faction armenia, Kudurmabug, general, age 20, , x 205, y 133
army
unit		east infantry		exp 3 armour 0 weapon_lvl 1
unit		east heavy cavalry			exp 3 armour 1 weapon_lvl 1
unit		east archer			exp 3 armour 0 weapon_lvl 1

;Mauretania_Tingitana
character	sub_faction numidia, Bodashtart, general, age 20, , x 12, y 102
army
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 1

;Mauretania_Massaesili
character	sub_faction numidia, Abdmelqart, general, age 20, , x 31, y 97
army
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 1

;Tribus_Brigantes
character	sub_faction britons, Brigomaglos, general, age 20, , x 55, y 196
army
unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0
unit		barb archer slave				exp 3 armour 0 weapon_lvl 0

;Erain
character	sub_faction britons, Brigomaglos, general, age 20, , x 25, y 193
army
unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0
unit		barb archer slave				exp 3 armour 0 weapon_lvl 0

;Tribus_Nervii
character	sub_faction gauls, Brycham, general, age 20, , x 75, y 180
army
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb cavalry slave			exp 3 armour 0 weapon_lvl 0

;Sequania
character	sub_faction gauls, Brycham, general, age 20, , x 76, y 164
army
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb cavalry slave			exp 3 armour 0 weapon_lvl 0

;Arvernia
character	sub_faction gauls, Vercingetorix, general, age 20, , x 57, y 148
army
unit		barb noble cavalry slave			exp 9 armour 2 weapon_lvl 2
unit		barb infantry slave			exp 7 armour 1 weapon_lvl 2
unit		barb infantry slave			exp 7 armour 1 weapon_lvl 2
unit		barb infantry slave			exp 7 armour 1 weapon_lvl 2
unit		barb infantry slave			exp 7 armour 1 weapon_lvl 2
unit		barb archer slave			exp 7 armour 1 weapon_lvl 2
unit		barb noble cavalry slave			exp 9 armour 2 weapon_lvl 2
unit		barb noble cavalry slave			exp 9 armour 2 weapon_lvl 2
unit		barb noble cavalry slave			exp 9 armour 2 weapon_lvl 2

;Aquitania
character	sub_faction gauls, Brycham, general, age 20, , x 44, y 150
army
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb archer slave			exp 3 armour 0 weapon_lvl 0

;Tribus_Volcae
character	sub_faction gauls, Brycham, general, age 20, , x 87, y 166
army
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave			exp 3 armour 0 weapon_lvl 0
unit		barb archer slave			exp 3 armour 0 weapon_lvl 0

;Nurthralandan
character	sub_faction germans, Burkhard, general, age 20, , x 91, y 226
army
unit		barb infantry slave				exp 4 armour 0 weapon_lvl 1
unit		barb infantry slave				exp 4 armour 0 weapon_lvl 1
unit		barb infantry slave				exp 4 armour 0 weapon_lvl 1
unit		barb infantry slave				exp 4 armour 0 weapon_lvl 1
unit		barb infantry slave				exp 4 armour 0 weapon_lvl 1
unit		barb archer slave				exp 4 armour 0 weapon_lvl 0
unit		barb archer slave				exp 4 armour 0 weapon_lvl 0

;Moesia
character	sub_faction thrace, Ziepyrus, general, age 20, , x 135, y 140
army
unit		greek peltast				exp 3 armour 0 weapon_lvl 0
unit		greek peltast				exp 3 armour 0 weapon_lvl 0
unit		greek peltast				exp 3 armour 0 weapon_lvl 0
unit		merc thracian				exp 3 armour 0 weapon_lvl 1
unit		merc thracian				exp 3 armour 0 weapon_lvl 1
unit		merc thracian				exp 3 armour 0 weapon_lvl 1
unit		merc thracian				exp 3 armour 0 weapon_lvl 1

;Locus_Careotae
character	sub_faction germans, Adalmun, general, age 20, , x 159, y 206
army
unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0
unit		barb archer slave				exp 3 armour 0 weapon_lvl 0
unit		barb archer slave				exp 3 armour 0 weapon_lvl 0

;Tartesania
character	sub_faction spain, Gaizka, general, age 20, , x 18, y 119
army
unit		merc spanish infantry				exp 3 armour 0 weapon_lvl 0
unit		merc spanish infantry				exp 3 armour 0 weapon_lvl 0
unit		carthaginian cavalry				exp 3 armour 0 weapon_lvl 0

;Taurica
;character	sub_faction scythia, Atheas, general, age 20, , x 176, y 156
;army
;unit		merc sarmatian cavalry				exp 5 armour 1 weapon_lvl 2
;unit		merc sarmatian cavalry				exp 5 armour 1 weapon_lvl 2
;unit		merc sarmatian cavalry				exp 5 armour 1 weapon_lvl 2
;unit		merc sarmatian cavalry				exp 5 armour 1 weapon_lvl 2
;unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0
;unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0
;unit		barb horse archers slave				exp 5 armour 0 weapon_lvl 1
;unit		barb horse archers slave				exp 5 armour 0 weapon_lvl 1
;unit		barb horse archers slave				exp 5 armour 0 weapon_lvl 1

;Asturia
character	sub_faction spain, Gaizka, general, age 20, , x 27, y 139
army
unit		merc spanish infantry				exp 3 armour 0 weapon_lvl 0
unit		merc spanish infantry				exp 3 armour 0 weapon_lvl 0
unit		carthaginian infantry				exp 3 armour 0 weapon_lvl 0

;Cyrenaica
character	sub_faction greek_cities, Crios, general, age 20, , x 135, y 77
army
unit		greek medium cavalry			exp 5 armour 1 weapon_lvl 1
unit		greek medium cavalry			exp 5 armour 1 weapon_lvl 1
unit		greek hoplite			exp 5 armour 1 weapon_lvl 1
unit		greek hoplite			exp 5 armour 1 weapon_lvl 1
unit		greek hoplite			exp 5 armour 1 weapon_lvl 1
unit		greek hoplite			exp 5 armour 1 weapon_lvl 1
unit		merc cretan archers			exp 3 armour 0 weapon_lvl 1
unit		merc libyan infantry				exp 3 armour 0 weapon_lvl 0
unit		merc libyan infantry				exp 3 armour 0 weapon_lvl 0

;Tribus_Dumnonii
character	sub_faction britons, Segovax, general, age 20, , x 41, y 182
army
unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0

;Tribus_Ordovices
character	sub_faction britons, Rhydderch of Deva, general, age 20, , x 46, y 195
army
unit		barb chariot heavy slave				exp 3 armour 1 weapon_lvl 1
unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0
unit		barb infantry slave				exp 3 armour 0 weapon_lvl 0
unit		barb archer slave				exp 3 armour 0 weapon_lvl 1
unit		barb chariot heavy slave				exp 3 armour 1 weapon_lvl 1

;Tribus_Chauci
;character	sub_faction germans, Adalmun, general, age 20, , x 81, y 189
;army
;unit		barb infantry slave				exp 4 armour 0 weapon_lvl 1
;unit		barb infantry slave				exp 4 armour 0 weapon_lvl 1
;unit		barb archer slave				exp 4 armour 0 weapon_lvl 1

;Tribus_Cherusci
;character	sub_faction germans, Adalmun, general, age 20, , x 84, y 183
;army
;unit		barb infantry slave				exp 4 armour 0 weapon_lvl 1
;unit		barb infantry slave				exp 4 armour 0 weapon_lvl 1
;unit		barb archer slave				exp 4 armour 0 weapon_lvl 1

; --------------- rebel troops outside of towns -------------------
;
;Tribus_Sakae
character	sub_faction scythia, Ara, general, age 20, , x 303, y 197
army
unit		barb noble cavalry slave			exp 1 armour 2 weapon_lvl 2
unit		barb horse archers slave				exp 1 armour 1 weapon_lvl 1
unit		barb horse archers slave				exp 1 armour 1 weapon_lvl 1

;Tribus_Yuezhi
character	sub_faction scythia, Arapeithes, general, age 20, , x 365, y 177
army
unit		barb noble cavalry slave			exp 7 armour 2 weapon_lvl 2
unit		barb noble cavalry slave			exp 7 armour 2 weapon_lvl 2
unit		barb horse archers slave				exp 5 armour 1 weapon_lvl 1
unit		barb horse archers slave				exp 5 armour 1 weapon_lvl 1
unit		barb horse archers slave				exp 5 armour 1 weapon_lvl 1
unit		barb horse archers slave				exp 5 armour 1 weapon_lvl 1
unit		barb horse archers slave				exp 5 armour 1 weapon_lvl 1
unit		barb horse archers slave				exp 5 armour 1 weapon_lvl 1

;Arabia
character	sub_faction parthia, Cisantaxma, general, age 20, , x 237, y 91
army
unit		merc bedouin archers			exp 3 armour 0 weapon_lvl 0
unit		merc bedouin archers			exp 3 armour 0 weapon_lvl 0
unit		merc bedouin archers			exp 3 armour 0 weapon_lvl 0
unit		merc bedouin archers			exp 3 armour 0 weapon_lvl 0
unit		merc bedouin archers			exp 3 armour 0 weapon_lvl 0
unit		merc bedouin archers			exp 3 armour 0 weapon_lvl 0
unit		merc bedouin archers			exp 3 armour 0 weapon_lvl 0

;Galatia
;character	sub_faction gauls, Tancogeistla, general, age 20, , x 179, y 116
;army
;unit		barb noble cavalry slave			exp 3 armour 0 weapon_lvl 0
;unit		barb noble cavalry slave			exp 3 armour 0 weapon_lvl 0
;unit		barb naked fanatics slave		exp 3 armour 0 weapon_lvl 0

;Tribus_Noba
character	sub_faction egypt, Pamiu, general, age 20, , x 168, y 27
army
unit		egyptian nubian spearmen				exp 5 armour 0 weapon_lvl 0
unit		egyptian nubian spearmen				exp 5 armour 0 weapon_lvl 0
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0
unit		numidian cavalry				exp 4 armour 0 weapon_lvl 0
unit		egyptian nubian spearmen				exp 3 armour 0 weapon_lvl 0
unit		egyptian nubian spearmen				exp 3 armour 0 weapon_lvl 0
unit		egyptian nubian spearmen				exp 3 armour 0 weapon_lvl 0

;Phasania
character	sub_faction numidia, Zimrida, general, age 20, , x 103, y 58
army
unit		numidian cavalry				exp 3 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 3 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 3 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 3 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 3 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 3 armour 0 weapon_lvl 1
unit		numidian cavalry				exp 3 armour 0 weapon_lvl 1

;Belgica
character	sub_faction britons, Segovax, general, age 20, , x 58, y 172
army
unit		barb infantry slave				exp 3 armour 1 weapon_lvl 1
unit		barb archer slave				exp 3 armour 1 weapon_lvl 1
unit		barb chariot heavy slave				exp 3 armour 1 weapon_lvl 2
unit		barb infantry slave				exp 3 armour 1 weapon_lvl 1
unit		barb infantry slave				exp 3 armour 1 weapon_lvl 1
unit		barb chariot heavy slave				exp 3 armour 1 weapon_lvl 2

;Illyria
character	sub_faction dacia, Scyles, general, age 20, , x 117, y 136
army
unit		merc illyrian			exp 5 armour 1 weapon_lvl 1
unit		merc illyrian			exp 5 armour 1 weapon_lvl 1
unit		merc illyrian			exp 5 armour 1 weapon_lvl 1
unit		merc illyrian			exp 5 armour 1 weapon_lvl 1
unit		merc illyrian			exp 5 armour 1 weapon_lvl 1
unit		merc illyrian			exp 5 armour 1 weapon_lvl 1

;Latium (Spartak by "EastWind")
character	sub_faction thrace, Spartacus, named character, age 20, , x 111, y 122
traits NaturalMilitarySkill 3 , Intelligent 1 , Generous 1
army
unit		roman mirmillo gladiator			exp 5 armour 1 weapon_lvl 1
;unit		roman samnite gladiator			exp 5 armour 1 weapon_lvl 1
;unit		roman velite gladiator		exp 5 armour 1 weapon_lvl 1
;unit		barb peasant slave			exp 2 armour 0 weapon_lvl 1
;unit		barb peasant slave			exp 2 armour 0 weapon_lvl 1

;DACIAN (EVSW)
;character	sub_faction thrace, Spartacus, named character, age 20, , x 144, y 145
;traits NaturalMilitarySkill 3 , Intelligent 1 , Generous 1
;army
;unit		barb noble cavalry slave			exp 3 armour 0 weapon_lvl 0
;unit		barb noble cavalry slave			exp 3 armour 0 weapon_lvl 0
;unit		barb noble cavalry slave			exp 3 armour 0 weapon_lvl 0
;unit		barb infantry slave				exp 3 armour 1 weapon_lvl 1
;unit		barb archer slave				exp 3 armour 1 weapon_lvl 1
;unit		barb infantry slave				exp 3 armour 1 weapon_lvl 1
;unit		barb infantry slave				exp 3 armour 1 weapon_lvl 1
;unit		barb peasant slave			exp 2 armour 0 weapon_lvl 1
;unit		barb peasant slave			exp 2 armour 0 weapon_lvl 1
;unit		barb peasant slave			exp 2 armour 0 weapon_lvl 1
;unit		barb peasant slave			exp 2 armour 0 weapon_lvl 1



;;;;;;;;;;;;;;;;;;;;;;;;;;;; East Wind Slaves
;Tir
character	sub_faction britons, Brigomaglos, general, age 20, , x 198, y 90
army
unit		east heavy cavalry			exp 3 armour 2 weapon_lvl 2
unit		merc illyrian				exp 3 armour 2 weapon_lvl 0
unit		merc illyrian				exp 3 armour 2 weapon_lvl 0
unit		merc syrian archers				exp 3 armour 0 weapon_lvl 0
unit		merc syrian archers				exp 3 armour 0 weapon_lvl 0
unit		merc syrian archers				exp 3 armour 0 weapon_lvl 0
unit		greek pikemen merc				exp 3 armour 0 weapon_lvl 2

character	sub_faction britons, Brigomaglos, general, age 20, , x 347, y 127
army
unit		east heavy cavalry			exp 3 armour 2 weapon_lvl 2
unit		merc indian infantry light		exp 3 armour 0 weapon_lvl 0
unit		merc indian infantry light		exp 3 armour 0 weapon_lvl 0
unit		merc east barb cavalry			exp 3 armour 0 weapon_lvl 0
unit		merc east barb cavalry			exp 3 armour 0 weapon_lvl 0

;Kushan-Kyat
character	sub_faction parthia, Xanthos, general, age 20, , x 293, y 186
army
unit		east archer			exp 3 armour 0 weapon_lvl 0
unit		east archer			exp 3 armour 0 weapon_lvl 0
unit		east infantry			exp 4 armour 1 weapon_lvl 1
unit		east infantry			exp 4 armour 1 weapon_lvl 1
unit		east infantry			exp 4 armour 1 weapon_lvl 1


;Delphi
character	sub_faction greek_cities, Demetrios of Syracuse, general, age 20, , x 136, y 110
army
unit		greek medium cavalry			exp 3 armour 1 weapon_lvl 1
unit		greek medium cavalry			exp 3 armour 1 weapon_lvl 1
unit		merc illyrian				exp 3 armour 2 weapon_lvl 0
unit		delphi guards			exp 6 armour 1 weapon_lvl 1
unit		delphi guards			exp 6 armour 1 weapon_lvl 1
unit		delphi guards			exp 6 armour 1 weapon_lvl 1


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; >>>> start of diplomacy section <<<<

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; >>>> start of diplomacy section <<<<
;DS_ALLIED			= 0	
;DS_SUSPICIOUS		        = 100
;DS_NEUTRAL			= 200
;DS_HOSTILE			= 400
;DS_AT_WAR			= 600

core_attitudes	romans_julii,	90		romans_scipii
core_attitudes	romans_julii,	400		carthage
core_attitudes	romans_julii,	600		slave
core_attitudes	romans_brutii,	410		seleucid
core_attitudes	romans_brutii,	600		slave
core_attitudes	romans_brutii,	600		seleucid
core_attitudes	romans_scipii,	90		romans_julii
core_attitudes	romans_scipii,	600		slave
core_attitudes	macedon,		90		romans_brutii
core_attitudes	macedon,		600		slave
core_attitudes	egypt,		410		numidia
core_attitudes	egypt,		600		seleucid
core_attitudes	egypt,		600		slave
core_attitudes	seleucid,		410		parthia
core_attitudes	seleucid,		600		slave
core_attitudes	carthage,		310		romans_julii, romans_scipii
core_attitudes	carthage,		90		numidia
core_attitudes	carthage,		90		spain
core_attitudes	carthage,		600		slave
core_attitudes	parthia,		90		armenia
core_attitudes	parthia,		410		seleucid
core_attitudes	parthia,		600		slave
core_attitudes	parthia,		600		seleucid
core_attitudes	pontus,		410		armenia
core_attitudes	pontus,		600		slave
core_attitudes	gauls,		410		romans_julii, spain
core_attitudes	gauls,		600		slave
core_attitudes	gauls,		90		germans, britons
core_attitudes	germans,		90		gauls
core_attitudes	germans,		310		britons
core_attitudes	germans,		600		slave
core_attitudes	britons,		310		seleucid
core_attitudes	britons,		600		slave
core_attitudes	armenia,		90		parthia
core_attitudes	armenia,		600		slave
core_attitudes	dacia,		90		romans_julii
core_attitudes	dacia,		410		germans
core_attitudes	dacia,		600		slave
core_attitudes	greek_cities,	410		romans_scipii
core_attitudes	greek_cities,	600		slave
core_attitudes	numidia,		90		carthage
core_attitudes	numidia,		600		slave
core_attitudes	scythia,		600		slave
core_attitudes	spain,		410		carthage
core_attitudes	spain,		600		slave
core_attitudes	thrace,		310		romans_brutii
core_attitudes	thrace,		300		dacia
core_attitudes	thrace,		600		slave
core_attitudes	slave,		600		romans_julii, romans_brutii, romans_scipii,  macedon, egypt, seleucid, carthage, parthia, pontus, gauls, germans, britons, armenia, dacia, greek_cities, numidia, scythia, spain, thrace

;faction_relationships	romans_julii, 		10		romans_scipii
faction_relationships	romans_julii, 		600		slave
faction_relationships	romans_brutii,		600		slave
faction_relationships	romans_brutii,		600		seleucid
;faction_relationships	romans_scipii,		10		romans_julii
faction_relationships	romans_scipii,		10		parthia
faction_relationships	romans_scipii,		600		slave
faction_relationships	macedon,			600		slave
faction_relationships	egypt,			600		slave
faction_relationships	egypt,			600		seleucid
faction_relationships	seleucid,			600		slave
faction_relationships	carthage,			600		slave
faction_relationships	parthia,			600		slave
faction_relationships	parthia,			600		seleucid
faction_relationships	pontus,			600		slave
faction_relationships	gauls,			600		slave
faction_relationships	germans,			600		slave
faction_relationships	britons,			600		slave
faction_relationships	armenia,			600		slave
faction_relationships	armenia,			600		seleucid
faction_relationships	dacia,			600		slave
faction_relationships	greek_cities,		600		slave
faction_relationships	greek_cities,		600		seleucid
faction_relationships	numidia,			600		slave
faction_relationships	scythia,			600		slave
faction_relationships	spain,			600		slave
faction_relationships	thrace,			600		slave
faction_relationships	slave,			600		romans_julii, romans_brutii, romans_scipii,  macedon, egypt, seleucid, carthage, parthia, pontus, gauls, germans, britons, armenia, dacia, greek_cities, numidia, scythia, spain, thrace
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; >>>> start of regions section <<<<

;script
;campaign_script.txt
`;
const charRe = /[a-z_]/i;
const numRe = /[0-9-]/i;
const parser = {
  // text: txt,
  pos: 0,
  step() {
    this.curr = this.next;
    this.next = txt[this.pos++];
  },
  skipComment() {
    while (this.curr !== "\n") this.step();
    this.step();
  },
  getWord() {
    let result = "";
    while (true) {
      if (charRe.test(this.curr)) result += this.curr;
      else return result;
      this.step();
    }
  },
  getNum() {
    let result = "";
    while (true) {
      if (numRe.test(this.curr)) result += this.curr;
      else return +result;
      this.step();
    }
  },
  _token() {
    let c = 100;
    while (c--) {
      const { curr, next } = this;
      if (curr === ";") {
        this.skipComment();
        continue;
      }
      if (this.isFilter(curr)) {
        this.step();
        return curr;
      }
      if (charRe.test(curr)) return this.getWord();
      if (numRe.test(curr)) return this.getNum();
      if (!curr) return curr;
      this.step();
    }
  },
  isFilter(tok) {
    return [",", "\n"].includes(tok);
  },
  token() {
    const tok = this._token();
    if (this.isFilter(tok)) return this.token();
    return tok;
  },
  untilNl() {
    let result = "";
    while (1) {
      if (this.curr === "\n") return result;
      result += this.curr;
      this.step();
    }
  },
  toksUntil(tok = ",") {
    const result = [];
    let c = 100
    while (c--) {
      const tk = this._token();
      if (tk === tok) {
        return result;
      }
      if (!this.isFilter(tk)) result.push(tk);
    }
  },
};
parser.step();
parser.step();

const result = {};
const next = (until) => (until ? parser.toksUntil(until) : parser.token());
new Array(6800).fill(1).forEach((i) => {
  let tk = next();
  if(!tk)return;
  if (["playable", "unlockable", "nonplayable"].includes(tk)) {
    result[tk] = next("end");
  } else if (["start_date", "end_date"].includes(tk)) {
    result[tk] = [next(), next()];
  } else if (["landmark", "resource"].includes(tk)) {
    result[tk] ||= [];
    result[tk].push([next(), next(), next()]);
  } else if (["faction"].includes(tk)) {
    result[tk] ||= [];
    result[tk].push({
      name: next(),
      ai: [next(), next()],
      [next()]: next(),
      settlement: [],
      character: [],
    });
  } else if (["night_battles_enabled"].includes(tk)) {
    result[tk] = true;
  } else if (["settlement"].includes(tk)) {
    const settlement = {
      [next()]: next(),
      [next()]: next(),
      [next()]: next(),
      [next()]: next(),
      [next()]: next(),
      [next()]: next(),
      building: [],
    };
    result.faction.at(-1).settlement.push(settlement);
  } else if (["building"].includes(tk)) {
    const building = {
      [next()]: [next(), next()],
    };
    // result.faction.at(-1).settlement.at(-1).building.push(building)
  } else if (["character"].includes(tk)) {
    const a = parser.untilNl().trim().split(", ");
    let [name, type] = a;
    let sub_faction
    if(name.split(' ')[0] === 'sub_faction'){
      sub_faction = name.split(' ')[1]
      name = a[1]
      type = a[2]
    }
    const [age, _, x, y] = a.slice(-4).map((x) => +x.split(" ")[1]);
    const character = {
      name,
      type,
      age,
      pos: [x, y],
      sub_faction,
      unit: [],
    };
    result.faction.at(-1).character.push(character);
  } else if (["unit"].includes(tk)) {
    // const a = parser.untilNl().trim().split(/\W+/)

    const unit = {
      name: next("exp"),
      propы: [next(), (next(), next()), ( next(), next()),]
    };
    result.faction.at(-1).character.at(-1).unit.push(unit);
  } else if (["traits"].includes(tk)) {
    const traits = next("\n");
    result.faction.at(-1).character.at(-1).traits = arrToObj(traits);
  } else if (["ancillaries"].includes(tk)) {
    const ancillaries = next("\n");
    result.faction.at(-1).character.at(-1).ancillaries = (ancillaries);
  }
  // else result[tk] = next()
});
result.resource = [];
console.log(JSON.stringify(result, null, 2));

function arrToObj(arr) {
  const result = {};
  for (let i = 0; i < arr.length; i += 2) result[arr[i]] = arr[i + 1];
  return result;
}
