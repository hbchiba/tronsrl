(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-578edc51'],
  {
    '02de': function (t, e, i) {
      'use strict';
      function n(t) {
        var e = window.getComputedStyle(t),
          i = 'none' === e.display,
          n = null === t.offsetParent && 'fixed' !== e.position;
        return i || n;
      }
      i.d(e, 'a', function () {
        return n;
      });
    },
    '2bb1': function (t, e, i) {
      'use strict';
      var n = i('1988'),
        o = i('d282'),
        r = i('9884'),
        a = Object(o['a'])('swipe-item'),
        s = a[0],
        c = a[1];
      e['a'] = s({
        mixins: [Object(r['a'])('vanSwipe')],
        data: function () {
          return { offset: 0, inited: !1, mounted: !1 };
        },
        mounted: function () {
          var t = this;
          this.$nextTick(function () {
            t.mounted = !0;
          });
        },
        computed: {
          style: function () {
            var t = {},
              e = this.parent,
              i = e.size,
              n = e.vertical;
            return (
              i && (t[n ? 'height' : 'width'] = i + 'px'),
              this.offset &&
                (t.transform =
                  'translate' + (n ? 'Y' : 'X') + '(' + this.offset + 'px)'),
              t
            );
          },
          shouldRender: function () {
            var t = this.index,
              e = this.inited,
              i = this.parent,
              n = this.mounted;
            if (!i.lazyRender || e) return !0;
            if (!n) return !1;
            var o = i.activeIndicator,
              r = i.count - 1,
              a = 0 === o && i.loop ? r : o - 1,
              s = o === r && i.loop ? 0 : o + 1,
              c = t === o || t === a || t === s;
            return c && (this.inited = !0), c;
          },
        },
        render: function () {
          var t = arguments[0];
          return t(
            'div',
            {
              class: c(),
              style: this.style,
              on: Object(n['a'])({}, this.$listeners),
            },
            [this.shouldRender && this.slots()]
          );
        },
      });
    },
    '3cc4': function (t, e, i) {
      'use strict';
      i('3cd0'), i('ae3a');
    },
    '3cf6': function (t, e, i) {},
    '3e6d': function (t, e, i) {
      'use strict';
      i('3cd0'), i('1a44'), i('acc2'), i('e001');
    },
    4598: function (t, e, i) {
      'use strict';
      (function (t) {
        i.d(e, 'c', function () {
          return h;
        }),
          i.d(e, 'b', function () {
            return u;
          }),
          i.d(e, 'a', function () {
            return l;
          });
        var n = i('a142'),
          o = Date.now();
        function r(t) {
          var e = Date.now(),
            i = Math.max(0, 16 - (e - o)),
            n = setTimeout(t, i);
          return (o = e + i), n;
        }
        var a = n['g'] ? t : window,
          s = a.requestAnimationFrame || r,
          c = a.cancelAnimationFrame || a.clearTimeout;
        function h(t) {
          return s.call(a, t);
        }
        function u(t) {
          h(function () {
            h(t);
          });
        }
        function l(t) {
          c.call(a, t);
        }
      }.call(this, i('c8ba')));
    },
    '482d': function (t, e, i) {
      'use strict';
      function n(t, e, i) {
        return Math.min(Math.max(t, e), i);
      }
      function o(t, e, i) {
        var n = t.indexOf(e),
          o = '';
        return -1 === n
          ? t
          : '-' === e && 0 !== n
          ? t.slice(0, n)
          : ('.' === e && t.match(/^(\.|-\.)/) && (o = n ? '-0' : '0'),
            o + t.slice(0, n + 1) + t.slice(n).replace(i, ''));
      }
      function r(t, e, i) {
        void 0 === e && (e = !0),
          void 0 === i && (i = !0),
          (t = e ? o(t, '.', /\./g) : t.split('.')[0]),
          (t = i ? o(t, '-', /-/g) : t.replace(/-/, ''));
        var n = e ? /[^-0-9.]/g : /[^-0-9]/g;
        return t.replace(n, '');
      }
      function a(t, e) {
        var i = Math.pow(10, 10);
        return Math.round((t + e) * i) / i;
      }
      i.d(e, 'c', function () {
        return n;
      }),
        i.d(e, 'b', function () {
          return r;
        }),
        i.d(e, 'a', function () {
          return a;
        });
    },
    '48bc': function (t, e, i) {
      'use strict';
      i('7db0'), i('d81d'), i('d3b7'), i('96cf');
      var n = i('1da1'),
        o = i('365c');
      e['a'] = {
        name: 'ModalWalletMixins',
        components: {
          ModalWallet: function () {
            return i.e('chunk-2dfffe62').then(i.bind(null, '06f0'));
          },
        },
        data: function () {
          return { showModalWallet: !1, dappUrl: '' };
        },
        methods: {
          getApproveConfig: function () {
            var t = this;
            return Object(n['a'])(
              regeneratorRuntime.mark(function e() {
                var i, n, r, a, s, c, h, u, l, f;
                return regeneratorRuntime.wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            Object(o['getApproveConfig'])()
                          );
                        case 3:
                          if (
                            ((i = e.sent),
                            (n = i.code),
                            i.msg,
                            (r = i.data),
                            0 == n)
                          ) {
                            e.next = 9;
                            break;
                          }
                          return e.abrupt('return');
                        case 9:
                          if (
                            ((a = r.groupId),
                            (s = r.isApprove),
                            (c = r.currAddressType),
                            r.currAddress,
                            (h = r.activeTitle),
                            (u = r.activeContent),
                            (l = r.jumpUrl),
                            (f = r.approveAddress),
                            a)
                          ) {
                            e.next = 13;
                            break;
                          }
                          return (
                            console.log('approve state 1'),
                            e.abrupt('return', !0)
                          );
                        case 13:
                          if (1 != s) {
                            e.next = 16;
                            break;
                          }
                          return (
                            console.log('approve state 2'),
                            e.abrupt('return', !0)
                          );
                        case 16:
                          console.log('approve state 3'),
                            t.$dialog
                              .confirm({
                                title: h,
                                message: u,
                                allowHtml: !0,
                                className: 'custom-dialog custom-dialog-type2',
                                confirmButtonText: t.$t('CONFIRM'),
                                confirmButtonColor: t.primaryColor,
                                cancelButtonText: t.$t('CANCEL'),
                              })
                              .then(function () {
                                var e = f.map(function (t) {
                                    return { id: t.id, rate: '' };
                                  }),
                                  i = f.find(function (t) {
                                    return t.id == c;
                                  });
                                return i
                                  ? (console.log('approve state 4'),
                                    (t.dappUrl = l),
                                    (t.showModalWallet = !0),
                                    !1)
                                  : (console.log('approve state 5'),
                                    t.$router.push({
                                      name: 'digital',
                                      query: { list: JSON.stringify(e) },
                                    }),
                                    !1);
                              })
                              .catch(function (t) {
                                console.log('CONFIRM'), console.log(t);
                              }),
                            (e.next = 24);
                          break;
                        case 20:
                          (e.prev = 20),
                            (e.t0 = e['catch'](0)),
                            console.log('catch'),
                            console.log(e.t0);
                        case 24:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 20]]
                );
              })
            )();
          },
          clickApproveBtn: function (t) {
            var e = this;
            return Object(n['a'])(
              regeneratorRuntime.mark(function i() {
                var n, o;
                return regeneratorRuntime.wrap(function (i) {
                  while (1)
                    switch ((i.prev = i.next)) {
                      case 0:
                        return (
                          (n = t.pathName), (i.next = 3), e.getApproveConfig()
                        );
                      case 3:
                        (o = i.sent), o && e.$router.push({ name: n });
                      case 5:
                      case 'end':
                        return i.stop();
                    }
                }, i);
              })
            )();
          },
          handerClose: function () {
            this.showModalWallet = !1;
          },
        },
      };
    },
    5596: function (t, e, i) {
      'use strict';
      var n = i('d282'),
        o = i('02de'),
        r = i('1325'),
        a = i('4598'),
        s = i('482d'),
        c = i('3875'),
        h = i('9884'),
        u = i('5fbe'),
        l = Object(n['a'])('swipe'),
        f = l[0],
        d = l[1];
      e['a'] = f({
        mixins: [
          c['a'],
          Object(h['b'])('vanSwipe'),
          Object(u['a'])(function (t, e) {
            t(window, 'resize', this.resize, !0),
              t(window, 'orientationchange', this.resize, !0),
              t(window, 'visibilitychange', this.onVisibilityChange),
              e ? this.initialize() : this.clear();
          }),
        ],
        props: {
          width: [Number, String],
          height: [Number, String],
          autoplay: [Number, String],
          vertical: Boolean,
          lazyRender: Boolean,
          indicatorColor: String,
          loop: { type: Boolean, default: !0 },
          duration: { type: [Number, String], default: 500 },
          touchable: { type: Boolean, default: !0 },
          initialSwipe: { type: [Number, String], default: 0 },
          showIndicators: { type: Boolean, default: !0 },
          stopPropagation: { type: Boolean, default: !0 },
        },
        data: function () {
          return {
            rect: null,
            offset: 0,
            active: 0,
            deltaX: 0,
            deltaY: 0,
            swiping: !1,
            computedWidth: 0,
            computedHeight: 0,
          };
        },
        watch: {
          children: function () {
            this.initialize();
          },
          initialSwipe: function () {
            this.initialize();
          },
          autoplay: function (t) {
            t > 0 ? this.autoPlay() : this.clear();
          },
        },
        computed: {
          count: function () {
            return this.children.length;
          },
          maxCount: function () {
            return Math.ceil(Math.abs(this.minOffset) / this.size);
          },
          delta: function () {
            return this.vertical ? this.deltaY : this.deltaX;
          },
          size: function () {
            return this[this.vertical ? 'computedHeight' : 'computedWidth'];
          },
          trackSize: function () {
            return this.count * this.size;
          },
          activeIndicator: function () {
            return (this.active + this.count) % this.count;
          },
          isCorrectDirection: function () {
            var t = this.vertical ? 'vertical' : 'horizontal';
            return this.direction === t;
          },
          trackStyle: function () {
            var t = {
              transitionDuration: (this.swiping ? 0 : this.duration) + 'ms',
              transform:
                'translate' +
                (this.vertical ? 'Y' : 'X') +
                '(' +
                this.offset +
                'px)',
            };
            if (this.size) {
              var e = this.vertical ? 'height' : 'width',
                i = this.vertical ? 'width' : 'height';
              (t[e] = this.trackSize + 'px'),
                (t[i] = this[i] ? this[i] + 'px' : '');
            }
            return t;
          },
          indicatorStyle: function () {
            return { backgroundColor: this.indicatorColor };
          },
          minOffset: function () {
            return (
              (this.vertical ? this.rect.height : this.rect.width) -
              this.size * this.count
            );
          },
        },
        mounted: function () {
          this.bindTouchEvent(this.$refs.track);
        },
        methods: {
          initialize: function (t) {
            if (
              (void 0 === t && (t = +this.initialSwipe),
              this.$el && !Object(o['a'])(this.$el))
            ) {
              clearTimeout(this.timer);
              var e = {
                width: this.$el.offsetWidth,
                height: this.$el.offsetHeight,
              };
              (this.rect = e),
                (this.swiping = !0),
                (this.active = t),
                (this.computedWidth = +this.width || e.width),
                (this.computedHeight = +this.height || e.height),
                (this.offset = this.getTargetOffset(t)),
                this.children.forEach(function (t) {
                  t.offset = 0;
                }),
                this.autoPlay();
            }
          },
          resize: function () {
            this.initialize(this.activeIndicator);
          },
          onVisibilityChange: function () {
            document.hidden ? this.clear() : this.autoPlay();
          },
          onTouchStart: function (t) {
            this.touchable &&
              (this.clear(),
              (this.touchStartTime = Date.now()),
              this.touchStart(t),
              this.correctPosition());
          },
          onTouchMove: function (t) {
            this.touchable &&
              this.swiping &&
              (this.touchMove(t),
              this.isCorrectDirection &&
                (Object(r['c'])(t, this.stopPropagation),
                this.move({ offset: this.delta })));
          },
          onTouchEnd: function () {
            if (this.touchable && this.swiping) {
              var t = this.size,
                e = this.delta,
                i = Date.now() - this.touchStartTime,
                n = e / i,
                o = Math.abs(n) > 0.25 || Math.abs(e) > t / 2;
              if (o && this.isCorrectDirection) {
                var r = this.vertical ? this.offsetY : this.offsetX,
                  a = 0;
                (a = this.loop
                  ? r > 0
                    ? e > 0
                      ? -1
                      : 1
                    : 0
                  : -Math[e > 0 ? 'ceil' : 'floor'](e / t)),
                  this.move({ pace: a, emitChange: !0 });
              } else e && this.move({ pace: 0 });
              (this.swiping = !1), this.autoPlay();
            }
          },
          getTargetActive: function (t) {
            var e = this.active,
              i = this.count,
              n = this.maxCount;
            return t
              ? this.loop
                ? Object(s['c'])(e + t, -1, i)
                : Object(s['c'])(e + t, 0, n)
              : e;
          },
          getTargetOffset: function (t, e) {
            void 0 === e && (e = 0);
            var i = t * this.size;
            this.loop || (i = Math.min(i, -this.minOffset));
            var n = e - i;
            return this.loop || (n = Object(s['c'])(n, this.minOffset, 0)), n;
          },
          move: function (t) {
            var e = t.pace,
              i = void 0 === e ? 0 : e,
              n = t.offset,
              o = void 0 === n ? 0 : n,
              r = t.emitChange,
              a = this.loop,
              s = this.count,
              c = this.active,
              h = this.children,
              u = this.trackSize,
              l = this.minOffset;
            if (!(s <= 1)) {
              var f = this.getTargetActive(i),
                d = this.getTargetOffset(f, o);
              if (a) {
                if (h[0] && d !== l) {
                  var p = d < l;
                  h[0].offset = p ? u : 0;
                }
                if (h[s - 1] && 0 !== d) {
                  var g = d > 0;
                  h[s - 1].offset = g ? -u : 0;
                }
              }
              (this.active = f),
                (this.offset = d),
                r && f !== c && this.$emit('change', this.activeIndicator);
            }
          },
          prev: function () {
            var t = this;
            this.correctPosition(),
              this.resetTouchStatus(),
              Object(a['b'])(function () {
                (t.swiping = !1), t.move({ pace: -1, emitChange: !0 });
              });
          },
          next: function () {
            var t = this;
            this.correctPosition(),
              this.resetTouchStatus(),
              Object(a['b'])(function () {
                (t.swiping = !1), t.move({ pace: 1, emitChange: !0 });
              });
          },
          swipeTo: function (t, e) {
            var i = this;
            void 0 === e && (e = {}),
              this.correctPosition(),
              this.resetTouchStatus(),
              Object(a['b'])(function () {
                var n;
                (n =
                  i.loop && t === i.count
                    ? 0 === i.active
                      ? 0
                      : t
                    : t % i.count),
                  e.immediate
                    ? Object(a['b'])(function () {
                        i.swiping = !1;
                      })
                    : (i.swiping = !1),
                  i.move({ pace: n - i.active, emitChange: !0 });
              });
          },
          correctPosition: function () {
            (this.swiping = !0),
              this.active <= -1 && this.move({ pace: this.count }),
              this.active >= this.count && this.move({ pace: -this.count });
          },
          clear: function () {
            clearTimeout(this.timer);
          },
          autoPlay: function () {
            var t = this,
              e = this.autoplay;
            e > 0 &&
              this.count > 1 &&
              (this.clear(),
              (this.timer = setTimeout(function () {
                t.next(), t.autoPlay();
              }, e)));
          },
          genIndicator: function () {
            var t = this,
              e = this.$createElement,
              i = this.count,
              n = this.activeIndicator,
              o = this.slots('indicator');
            return (
              o ||
              (this.showIndicators && i > 1
                ? e(
                    'div',
                    { class: d('indicators', { vertical: this.vertical }) },
                    [
                      Array.apply(void 0, Array(i)).map(function (i, o) {
                        return e('i', {
                          class: d('indicator', { active: o === n }),
                          style: o === n ? t.indicatorStyle : null,
                        });
                      }),
                    ]
                  )
                : void 0)
            );
          },
        },
        render: function () {
          var t = arguments[0];
          return t('div', { class: d() }, [
            t(
              'div',
              {
                ref: 'track',
                style: this.trackStyle,
                class: d('track', { vertical: this.vertical }),
              },
              [this.slots()]
            ),
            this.genIndicator(),
          ]);
        },
      });
    },
    '8d12': function (t, e, i) {
      'use strict';
      i('3cd0'), i('3cf6');
    },
    a37c: function (t, e, i) {
      'use strict';
      var n = i('d282'),
        o = i('a142'),
        r = i('4598'),
        a = i('5fbe'),
        s = i('ad06'),
        c = Object(n['a'])('notice-bar'),
        h = c[0],
        u = c[1];
      e['a'] = h({
        mixins: [
          Object(a['a'])(function (t) {
            t(window, 'pageshow', this.reset);
          }),
        ],
        inject: { vanPopup: { default: null } },
        props: {
          text: String,
          mode: String,
          color: String,
          leftIcon: String,
          wrapable: Boolean,
          background: String,
          scrollable: { type: Boolean, default: null },
          delay: { type: [Number, String], default: 1 },
          speed: { type: [Number, String], default: 60 },
        },
        data: function () {
          return {
            show: !0,
            offset: 0,
            duration: 0,
            wrapWidth: 0,
            contentWidth: 0,
          };
        },
        watch: {
          scrollable: 'reset',
          text: { handler: 'reset', immediate: !0 },
        },
        created: function () {
          this.vanPopup && this.vanPopup.onReopen(this.reset);
        },
        activated: function () {
          this.reset();
        },
        methods: {
          onClickIcon: function (t) {
            'closeable' === this.mode &&
              ((this.show = !1), this.$emit('close', t));
          },
          onTransitionEnd: function () {
            var t = this;
            (this.offset = this.wrapWidth),
              (this.duration = 0),
              Object(r['c'])(function () {
                Object(r['b'])(function () {
                  (t.offset = -t.contentWidth),
                    (t.duration = (t.contentWidth + t.wrapWidth) / t.speed),
                    t.$emit('replay');
                });
              });
          },
          start: function () {
            this.reset();
          },
          reset: function () {
            var t = this,
              e = Object(o['c'])(this.delay) ? 1e3 * this.delay : 0;
            (this.offset = 0),
              (this.duration = 0),
              (this.wrapWidth = 0),
              (this.contentWidth = 0),
              clearTimeout(this.startTimer),
              (this.startTimer = setTimeout(function () {
                var e = t.$refs,
                  i = e.wrap,
                  n = e.content;
                if (i && n && !1 !== t.scrollable) {
                  var o = i.getBoundingClientRect().width,
                    a = n.getBoundingClientRect().width;
                  (t.scrollable || a > o) &&
                    Object(r['b'])(function () {
                      (t.offset = -a),
                        (t.duration = a / t.speed),
                        (t.wrapWidth = o),
                        (t.contentWidth = a);
                    });
                }
              }, e));
          },
        },
        render: function () {
          var t = this,
            e = arguments[0],
            i = this.slots,
            n = this.mode,
            o = this.leftIcon,
            r = this.onClickIcon,
            a = { color: this.color, background: this.background },
            c = {
              transform: this.offset ? 'translateX(' + this.offset + 'px)' : '',
              transitionDuration: this.duration + 's',
            };
          function h() {
            var t = i('left-icon');
            return (
              t ||
              (o
                ? e(s['a'], { class: u('left-icon'), attrs: { name: o } })
                : void 0)
            );
          }
          function l() {
            var t,
              o = i('right-icon');
            return (
              o ||
              ('closeable' === n
                ? (t = 'cross')
                : 'link' === n && (t = 'arrow'),
              t
                ? e(s['a'], {
                    class: u('right-icon'),
                    attrs: { name: t },
                    on: { click: r },
                  })
                : void 0)
            );
          }
          return e(
            'div',
            {
              attrs: { role: 'alert' },
              directives: [{ name: 'show', value: this.show }],
              class: u({ wrapable: this.wrapable }),
              style: a,
              on: {
                click: function (e) {
                  t.$emit('click', e);
                },
              },
            },
            [
              h(),
              e(
                'div',
                { ref: 'wrap', class: u('wrap'), attrs: { role: 'marquee' } },
                [
                  e(
                    'div',
                    {
                      ref: 'content',
                      class: [
                        u('content'),
                        {
                          'van-ellipsis':
                            !1 === this.scrollable && !this.wrapable,
                        },
                      ],
                      style: c,
                      on: { transitionend: this.onTransitionEnd },
                    },
                    [this.slots() || this.text]
                  ),
                ]
              ),
              l(),
            ]
          );
        },
      });
    },
    ae3a: function (t, e, i) {},
    db12: function (t, e, i) {
      'use strict';
      i('b0c0'), i('d3b7'), i('ac1f'), i('5319'), i('96cf');
      var n,
        o = i('1da1'),
        r = i('5530'),
        a = i('ade3'),
        s = (i('8d12'), i('2bb1')),
        c = (i('3cc4'), i('5596')),
        h = (i('3e6d'), i('a37c')),
        u = i('365c'),
        l = i('2f62'),
        f = i('48bc');
      e['a'] = {
        name: 'Index',
        mixins: [f['a']],
        components:
          ((n = {}),
          Object(a['a'])(n, h['a'].name, h['a']),
          Object(a['a'])(n, c['a'].name, c['a']),
          Object(a['a'])(n, s['a'].name, s['a']),
          Object(a['a'])(n, 'AnnouncementModel', function () {
            return i.e('chunk-2d0d7ae0').then(i.bind(null, '789b'));
          }),
          Object(a['a'])(n, 'UserMessage', function () {
            return i.e('chunk-2d210449').then(i.bind(null, 'b6ba'));
          }),
          Object(a['a'])(n, 'InvestList', function () {
            return i.e('chunk-b10291c8').then(i.bind(null, '150c'));
          }),
          n),
        data: function () {
          return {
            bannerList: [],
            msgList: [],
            isFetchedUserInfo: !1,
            msgShow: !1,
            modal: !1,
            remember: !1,
            notice: '',
            homeData: {},
            showInvestList: !0,
          };
        },
        computed: Object(r['a'])(
          Object(r['a'])({}, Object(l['c'])(['appConfig', 'userInfo'])),
          {},
          {
            income1day: function () {
              return this.homeData.income1day;
            },
            income1month: function () {
              return this.homeData.income1month;
            },
            notLogged: function () {
              return null == this.userInfo;
            },
            totalWealth: function () {
              return this.notLogged ? 0 : this.userInfo.totalWealth;
            },
            experienceInterestAmount: function () {
              return this.notLogged
                ? 0
                : this.userInfo.experienceInterestAmount;
            },
            pledgeWealth: function () {
              return this.notLogged ? 0 : this.userInfo.pledgeWealth;
            },
            wealth: function () {
              return this.notLogged ? 0 : this.userInfo.wealth;
            },
            convertTotalWealth: function () {
              return this.totalWealth * this.appConfig.exchangeRate;
            },
            convertExperienceWealth: function () {
              return (
                this.experienceInterestAmount * this.appConfig.exchangeRate
              );
            },
            convertExperienceWealth4config: function () {
              return (
                (this.appConfig.experienceAmount || 0) *
                this.appConfig.exchangeRate
              );
            },
            convertPledgeWealth: function () {
              return this.pledgeWealth * this.appConfig.exchangeRate;
            },
            convertWealth: function () {
              return this.wealth * this.appConfig.exchangeRate;
            },
            pledgeExperienceWealth: function () {
              return this.pledgeWealth + this.experienceInterestAmount;
            },
            convertPledgeExperienceWealth: function () {
              return this.convertPledgeWealth + this.convertExperienceWealth;
            },
          }
        ),
        created: function () {
          this.pageInit();
        },
        methods: Object(r['a'])(
          Object(r['a'])(
            {},
            Object(l['b'])(['autoLogin', 'fetchUserInfo', 'logout'])
          ),
          {},
          {
            pageInit: function () {
              this.autoLogin(), this.fetchHomeData();
            },
            fetchLoggedData: function () {
              this.isFetchedUserInfo ||
                ((this.isFetchedUserInfo = !0), this.fetchUserInfo());
            },
            fetchHomeData: function () {
              var t = this;
              return Object(o['a'])(
                regeneratorRuntime.mark(function e() {
                  var i, n, o, r, a;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), u['fetchHomeData']();
                        case 2:
                          if (
                            ((i = e.sent),
                            (n = i.code),
                            i.msg,
                            (o = i.data),
                            0 == n)
                          ) {
                            e.next = 8;
                            break;
                          }
                          return e.abrupt('return');
                        case 8:
                          (r = o.notice),
                            (a = o.bannerList),
                            (t.bannerList = a),
                            (t.notice = r
                              .replace(/<[^>].*?>/g, '')
                              .replace(/\n/g, ' ')),
                            (t.homeData = o);
                        case 13:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            onLogout: function () {
              var t = this;
              this.$dialog
                .confirm({
                  title: this.$t('NOTICE'),
                  message: this.$t('Areyousuresignout'),
                  className: 'custom-dialog',
                  confirmButtonText: this.$t('CONFIRM'),
                  cancelButtonText: this.$t('CANCEL'),
                })
                .then(function () {
                  t.submitLogout();
                })
                .catch(function () {});
            },
            submitLogout: function () {
              var t = this;
              return Object(o['a'])(
                regeneratorRuntime.mark(function e() {
                  var i, n, o;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), t.logout();
                          case 3:
                            if (
                              ((i = e.sent), (n = i.code), (o = i.msg), 0 == n)
                            ) {
                              e.next = 8;
                              break;
                            }
                            return e.abrupt('return');
                          case 8:
                            t.$toast.success({
                              message: o || 'logout successfully',
                              onOpened: function () {
                                t.$router.replace({ name: 'login' });
                              },
                            }),
                              (e.next = 13);
                            break;
                          case 11:
                            (e.prev = 11), (e.t0 = e['catch'](0));
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 11]]
                  );
                })
              )();
            },
            changeShowInvestList: function (t) {
              this.showInvestList = t;
            },
          }
        ),
        watch: {
          userInfo: {
            handler: function (t) {
              null != t && this.fetchLoggedData();
            },
            immediate: !0,
          },
        },
      };
    },
    e001: function (t, e, i) {},
  },
]);
