$(function () {
    $.fn.indexJs = function (options, think_var, statisticsObj) {
        var mid = options.mid
        var patnerObj = {
            playStatusText: '',
            session: '',
            aliplayers: null,
            initData: function () {
                switch (options.playerData.pstatus) {
                    case 1:
                        this.playStatusText = '进行中';
                        break;
                    case 2:
                        this.playStatusText = '预约中';
                        break;
                    case 3:
                        this.playStatusText = '回放';
                        break;
                    case 4:
                        this.playStatusText = '进行中';
                        break;
                    case 5:
                        this.playStatusText = '过期';
                        break;

                }
            },
            uuid: function () {
                var s = [];
                var hexDigits = "0123456789abcdef";
                for (var i = 0; i < 36; i++) {
                    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
                }
                s[14] = "4";
                s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
                s[8] = s[13] = s[18] = s[23] = "-";
                var uuid = s.join("");
                return uuid;
            },
            videoPlayreport: 'rsc/playreport/v2/' + mid,
            sensors_options: {
                startTime_: 0,
                endTime_: 0
            },
            historyListAnswer: null,
            // 神策埋点
            sensorsObj_do: function (rsc_roadshow_finished, rsc_roadshow_error) {
                // 神策埋点-播放事件-start
                if (statisticsObj.senStatic) {
                    var sensorsObj = {
                        rsc_roadshow_id: mid, // 路演ID
                        rsc_roadshow_title: '合作渠道', // 路演名称
                        rsc_roadshow_play_status: this.playStatusText, // 路演状态
                        rsc_roadshow_finished: rsc_roadshow_finished, //
                        rsc_roadshow_error: rsc_roadshow_error, //
                        event_duration: (this.sensors_options.endTime_ - this.sensors_options.startTime_) / 1000
                    };
                    sensors.track('rsc_play', sensorsObj);
                }
            },
            playAddrNam: function (state, lay) {
                // 高清 : lhd
                // 超清：lud
                // 标清：lsd
                // 流畅：lld
                var clarityList = [
                    {
                        name: 'hls_lld',
                        cn: '流畅',
                        en: 'LD',
                        definition: 10
                    },
                    {
                        name: 'hlsLld',
                        cn: '流畅',
                        en: 'LD',
                        definition: 10
                    },
                    {
                        name: 'hdl_lld',
                        cn: '流畅',
                        en: 'LD',
                        definition: 10,
                    },
                    {
                        name: 'hls_lsd',
                        cn: '标清',
                        en: 'SD',
                        definition: 20
                    },
                    {
                        name: 'hlsLsd',
                        cn: '标清',
                        en: 'SD',
                        definition: 20
                    },
                    {
                        name: 'hls_lhd',
                        cn: '高清',
                        en: 'HD',
                        definition: 30
                    },
                    {
                        name: 'hdlUrl',
                        cn: '原画',
                        en: 'HD',
                        definition: 30
                    },
                    {
                        name: 'origin',
                        cn: '原画',
                        en: 'Orig',
                        definition: 40
                    },
                    {
                        name: 'hls_Url',
                        cn: '原画',
                        en: 'Orig',
                        definition: 40
                    },
                    {
                        name: 'hlsUrl',
                        cn: '原画',
                        en: 'Orig',
                        definition: 40
                    },

                ]
                if (state) {
                    for (var i in clarityList) {
                        if (clarityList[i].name == state) {
                            return clarityList[i].en
                        }
                    }
                } else if (lay) {
                    for (var i in clarityList) {
                        if (clarityList[i].name == lay) {
                            return clarityList[i].definition
                        }
                    }
                }

            },
            IsPC: function () {
                var userAgentInfo = navigator.userAgent;
                var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
                var flag = true;
                for (var v = 0; v < Agents.length; v++) {
                    if (userAgentInfo.indexOf(Agents[v]) > 0) {
                        flag = false;
                        break;
                    }
                }
                return flag;
            },
            updateInterval: null,
            isWaiting: false,
            updateIntervalFn: function () {
                var _this = this
                if (this.updateInterval) {
                    clearInterval(this.updateInterval)
                }
                this.updateInterval = setInterval(() => {
                    if (!_this.isWaiting) {
                        _this.historyListAnswer.sendMsg(_this.videoMsgType('update', 1), _this.videoPlayreport);
                    }
                }, 30000);
            },
            videoMsgType: function (type, player_status) {
                if (this.session) {
                    return JSON.stringify({
                        event: type,
                        uid: options._setting.uid || 0,
                        mid: mid,
                        uuid: this.uuid(),
                        distinct_id: JSON.parse($.cookie('sensorsdata2015jssdkcross')).distinct_id,
                        session: this.session,
                        // ip2: options.videoData.clientIp,
                        play_status: options.playerData.pstatus,
                        player_status: player_status || 1,
                        // sessionId: $('input[name="sessionId"]').val() || '',
                        app_id: this.IsPC() ? 6 : 7,
                        speed: this.speed,
                        timestamp: JSON.stringify(Date.parse(new Date())),
                        ver: 2,
                    });
                } else {
                    return false
                }
            },
            meetEnddialog: function () {
                var _this = this
                _this.historyListAnswer.sendMsg(_this.videoMsgType('stop'), _this.videoPlayreport);
                // 路演已经结束 
                var endTextCn = '- 路演已经结束，感谢您的参与 -'
                var endTextEn = '- Roadshow is over, thanks for watching -'
                $('.videoCon_tips').text($('input[name="lang"]').val() == 2 ? endTextEn : endTextCn)
                $(".videoCon").attr("style", "background:rgb(1,1,1,0.6)");
                $(".vidoContent").attr("style", "background:rgb(1,1,1,0.6)");
                $(".videoBox").attr("style", "background: url(" + options.playerData.coverUrl + ");background-size: cover;background-position: center;background-repeat: no-repeat");
                $("#videoBox").attr("style", "background:none");

                $('.domswtich').hide()
                // $('.videoBox').addClass('noVideo')
                // $('.videoBox .emptyIco .text').text(think_var == "en-us" ? 'The roadshow is over' : '路演已经结束')
                debugger
                this.aliplayers.dispose();
                clearTimeout(this.meetEndTimeout)
                let end = setInterval(function () { }, 10000);
                for (let i = 1; i <= end; i++) {
                    clearInterval(i);
                }

                // $('.tips_qt').text(think_var == "en-us" ? 'The roadshow is over' : '路演已经结束').show(200)
                // setTimeout(function () {
                //     $('.tips_qt').hide(200)
                // }, 1000)
            },
            // 创建播放器
            creatVideoObj: function (data) {
                var _this = this;
                var loadedmetadataCount = 0;
                // 服务端返回的清晰度列表，重组结构
                // flv 视频流数组
                var optionVideonObj = (options.playerData.live ? JSON.parse(options.playerData.live) : null) || (options.playerData.vod ? JSON.parse(options.playerData.vod) : null)
                // hls 视频流数组
                var optionVideonObjHls = (options.playerData.hlsList ? JSON.parse(options.playerData.hlsList) : null) || (options.playerData.vod ? JSON.parse(options.playerData.vod) : null)

                var clarityListArry = []
                var hlsInitArry = []
                for (let i in optionVideonObj) {
                    if (optionVideonObj[i] && _this.playAddrNam(i)) {
                        clarityListArry.push({
                            src: optionVideonObj[i],
                            title: _this.playAddrNam(i),
                            definition: _this.playAddrNam(null, i),
                        })
                    }

                }
                for (let i in optionVideonObjHls) {
                    if (optionVideonObj[i] && _this.playAddrNam(i)) {
                        hlsInitArry.push({
                            src: optionVideonObjHls[i],
                            title: _this.playAddrNam(i),
                            definition: _this.playAddrNam(null, i),
                        })
                    }
                }
                console.log(hlsInitArry)
                rscVideo(
                    {
                        flv: clarityListArry,
                        hls: hlsInitArry,
                    },
                    {
                        dom: 'videoBox',
                        debug: true,
                        isLive: options.playerData.pstatus == 1 ? true : false,
                        videoOptions: {
                            language: think_var && think_var == "en-us" ? 'en' : 'zh-CN',
                            autoplay: true,
                            controls: true,
                            ready: () => {
                                console.log('回看');
                            },
                        },
                        resources: {
                            // TODO 测试cdn地址
                            videoLangPath: 'https://wtto00.github.io/cdn/lib/video-flv/',
                            flvjs: 'https://wtto00.github.io/cdn/lib/video-flv/flv.min.js',
                            videojsFlv: 'https://wtto00.github.io/cdn/lib/video-flv/videojs-flvjs.min.js'
                        },
                    },

                    (vPlayer) => {
                        _this.aliplayers = vPlayer
                        console.log(_this.aliplayers, 'aliplayersaliplayers')
                        // _this.meetEnddialog()
                        _this.aliplayers = vPlayer
                        endTime_ = new Date().getTime();

                        vPlayer.on('seeking', function (e) {
                            // console.log('寻找中', e)
                            // console.log('myPlayer.networkState', vPlayer.networkState)
                        });
                        vPlayer.on('seeked', function (e) {
                            // console.log('寻找完毕', e)
                            // console.log('myPlayer.networkState', vPlayer.networkState)
                        });
                        vPlayer.on('stalled', function (e) {
                            // console.log('网宿失效', e)
                            // console.log('myPlayer.networkState', vPlayer.networkState)
                        });
                        vPlayer.on('error', function (e) {
                            // 神策埋点-播放事件-start
                            if (_this.sensors_options.endTime_ > 0) {
                                _this.sensors_options.startTime_ = _this.sensors_options.endTime_
                                _this.sensors_options.endTime_ = new Date().getTime();
                                _this.sensorsObj_do(false, true)
                            } else {
                                _this.sensors_options.endTime_ = new Date().getTime();
                            }

                            if (JSON.parse(sessionStorage.getItem('isMeetEnd'))) {
                                _this.meetEnddialog()
                                return false
                            }
                            if ($('.refreshLoad').length < 1) {
                                // $('.difinitionFloat.change').remove()
                                // console.log(_this.videoMsgType('stop'), '消息体暂停')
                                _this.historyListAnswer.sendMsg(_this.videoMsgType('stop'), _this.videoPlayreport)
                                vPlayer.pause();
                                _this.definitionObj.isDefinitionChange = true
                            }
                        });
                        vPlayer.on('ended', function (e) {
                            _this.sensors_options.startTime_ = _this.sensors_options.endTime_
                            _this.sensors_options.endTime_ = new Date().getTime();
                            _this.sensorsObj_do(true, false)
                            _this.historyListAnswer.sendMsg(_this.videoMsgType('stop'), _this.videoPlayreport)
                        });
                        // 初次进入
                        vPlayer.on('loadedalldata', function (e) {
                        });
                        vPlayer.on('loadeddata', function (e) {

                        });
                        // 加载元数据
                        vPlayer.on('loadedmetadata', function (e) {
                        });
                        // 暂停
                        vPlayer.on('pause', function (e) {
                            _this.historyListAnswer.sendMsg(_this.videoMsgType('stop'), _this.videoPlayreport)
                            // 神策埋点-播放事件-start
                            _this.sensors_options.startTime_ = _this.sensors_options.endTime_
                            _this.sensors_options.endTime_ = new Date().getTime();
                            _this.sensorsObj_do(false, false)
                            // // 神策埋点-播放事件-end
                        });
                        var timeWaiting1, timeWaiting2
                        _this.isWaiting = true
                        // console.log('准备进入wait')

                        vPlayer.on('waiting', function (e) {
                            // console.log('myPlayer.networkState', vPlayer.networkState)
                            // console.log('进入wait')
                            // console.log('sessionStorage..', sessionStorage.getItem('isMeetEnd'))
                            // console.log('sessionStorage2', JSON.parse(sessionStorage.getItem('isMeetEnd')))
                            if (JSON.parse(sessionStorage.getItem('isMeetEnd'))) {
                                // console.log('开始倒计时30s')
                                // $('#videoBox .vjs-loading-spinner').hide()
                                _this.meetEndTime = setTimeout(function () {
                                    _this.meetEnddialog()
                                }, 10000)
                                return false
                            }

                            _this.isWaiting = true
                            _this.historyListAnswer.sendMsg(_this.videoMsgType('stop'), _this.videoPlayreport);
                            var countTime = vPlayer.currentTime();
                            // var videoTotalFramesStart = _this.IsPC() ? vPlayer.tech({IWillNotUseThisInPlugins: true}).vhs.stats.videoPlaybackQuality.totalVideoFrames : null
                            if ($('.refreshLoad').length < 1) {
                                timeWaiting1 = setTimeout(function () {
                                    // 如果相等  则表示一直没有动，此时主动暂停
                                    if (_this.IsPC()) {
                                        if ((countTime === vPlayer.currentTime())) {
                                            _this.targetCurrentTime = vPlayer.currentTime();
                                            // 卡顿按暂停处理统计数据
                                            vPlayer.pause();
                                            _this.definitionObj.isDefinitionChange = true

                                            // $('.vjs-control-bar').css('cssText','display:flex!important; z-index: 99;')
                                            // _this.show_error(data, _this.changeLang('网络不稳定，请尝试刷新', 'Connection failed, please check your network'))
                                        } else {
                                            clearTimeout(timeWaiting1);
                                        }
                                    } else {
                                        if (countTime == vPlayer.currentTime()) {
                                            _this.targetCurrentTime = vPlayer.currentTime();
                                            // 卡顿按暂停处理统计数据
                                            _this.historyListAnswer.sendMsg(_this.videoMsgType('stop'), _this.videoPlayreport);
                                            vPlayer.pause();
                                            _this.definitionObj.isDefinitionChange = true

                                            // $('.vjs-control-bar').css('cssText','display:flex!important; z-index: 99;')
                                            // _this.show_error(data, _this.changeLang('网络不稳定，请尝试刷新', 'Connection failed, please check your network'))
                                        } else {
                                            clearTimeout(timeWaiting1);
                                        }
                                    }

                                }, 60000);
                            }
                            if (_this.IsPC()) {
                                if (!$('.definition[style="display:block"]').eq($('.definition[style="display:block"]').length - 1).hasClass('activeDefinition') && $('.definition[style="display:block"]').length > 1) {
                                    if (_this.isWaiting && !_this.definitionObj.isDefinitionChange && $('.difinitionFloat').length < 1) {
                                        timeWaiting2 = setTimeout(function () {
                                            // console.log(vPlayer.currentTime(), '建议切换清晰度等待时间')
                                            if (_this.isWaiting && !_this.definitionObj.isDefinitionChange) {
                                                _this.targetCurrentTime = vPlayer.currentTime();
                                                _this.historyListAnswer.sendMsg(_this.videoMsgType('stop'), _this.videoPlayreport);
                                                // $('#example_video_1').append(
                                                // '<div class="difinitionFloat waite"><span>'+_this.changeLang('加载缓慢，建议降低清晰度', 'Loading slow, recommended to reduce the quality ')+'</span><span class="changeDifinition">'+_this.changeLang('立即切换','Reduce') + '</span></div>'
                                                // );
                                                // $('.changeDifinition').on('click', function() {
                                                //     // _this.definitionObj.definitionNameDefault = _this.changeLang('流畅', 'LD');
                                                // $('.isHls_lsd').click();
                                                // $('.changeDifinition').off('click');
                                                // });
                                            } else {
                                                clearTimeout(timeWaiting2);
                                            }
                                        }, 5000);
                                    }

                                } else if ($('.definition[style="display:block"]').eq($('.definition[style="display:block"]').length - 1).hasClass('activeDefinition')) {
                                    timeWaiting2 = setTimeout(function () {
                                        if (_this.isWaiting && !_this.definitionObj.isDefinitionChange && $('.difinitionFloat').length < 1) {
                                            _this.targetCurrentTime = vPlayer.currentTime();
                                            _this.historyListAnswer.sendMsg(
                                                _this.videoMsgType('stop'),
                                                _this.videoPlayreport
                                            );
                                            // $('#example_video_1').append(
                                            // '<div class="difinitionFloat waite"><span>'+_this.changeLang('当前网络环境较差，详情请查看', 'The speed is slow, please check the Network')+' </span><span class="netWork">'+_this.changeLang('网络诊断', 'Network')+'</span></div>'
                                            // );
                                            // $('.netWork').on('click', function () {
                                            //     $('.networkBox').show()
                                            //     isShowNetWork = true
                                            // })
                                        } else {
                                            clearTimeout(timeWaiting2);
                                        }
                                    }, 5000)
                                }
                            }
                        });
                        vPlayer.on('contentplayback', function (e) {
                        });

                        // 初次进入
                        vPlayer.on('firstplay', function (e) {
                            // console.log('初次播放')
                            if (loadedmetadataCount < 1) {
                                // 初次加载元数据则以开始论
                                // _this.historyListAnswer.sendMsg(_this.videoMsgType('start', 1), _this.videoPlayreport)
                            }
                            loadedmetadataCount++
                        });
                        // 初次加载
                        vPlayer.on('loadstart', function (e) {
                            // console.log('初次播放发送')
                        });
                        window.onbeforeunload = function (ev) {
                            _this.sensors_options.startTime_ = _this.sensors_options.endTime_
                            _this.sensors_options.endTime_ = new Date().getTime();
                            _this.sensorsObj_do(false, false)
                        };
                        vPlayer.on('playing', function () {
                            _this.sensors_options.endTime_ = new Date().getTime();
                            _this.isWaiting = false
                            clearTimeout(timeWaiting1);
                            clearTimeout(timeWaiting2);
                            // 发送开始mq
                            _this.session = _this.uuid()
                            _this.historyListAnswer.sendMsg(_this.videoMsgType('start', 1), _this.videoPlayreport)
                            _this.updateIntervalFn()
                            if (_this.meetEndTime) {
                                clearTimeout(_this.meetEndTime)
                            }

                            if (loadedmetadataCount > 1) {
                                if ($('.refreshLoad').length > 0) {
                                    $('.refreshLoad').remove()
                                }
                            }
                        });
                        vPlayer.on('play', function (e) {
                            // console.log('开始')
                            _this.isWaiting = false
                            if (loadedmetadataCount > 1) {
                                // if ($('.refreshLoad').length > 0) {
                                //     $('.refreshLoad').remove()
                                // }
                                // $('.difinitionFloat.waite').remove();
                                // if ($('.difinitionFloat.change').length > 0) {
                                //     $('.difinitionFloat.change span').text((think_var == "en-us" ? 'Switching to ' : '正在切换至') + _this.definitionObj.targetDefinition)
                                // }
                                // 初次加载元数据则以开始论
                                // _this.historyListAnswer.sendMsg(_this.videoMsgType('resumePlayer'), _this.videoPlayreport)
                            }
                            loadedmetadataCount++
                        });

                    },
                );

            },
            mqttInitData: {},
            _setting: {
                clientId: options._setting.clientId,
                groupId: "GID_textlive",
                host: options._setting.host,
                password: options._setting.password,
                port: options._setting.port,
                tlsPort: options._setting.tlsPort,
                uid: options._setting.uid,
                useSSL: options._setting.useSSL,
                username: options._setting.username,
            },
            // 建立mqtt链接
            mqttclientInit: function () {
                var _this = this;
                // mqtt切換视频流
                var videoClient = 'rsc/livecmd/' + mid;
                var prelivecmd = 'rsc/prelivecmd/' + mid
                var noticeClient = "textlive/" + mid + "/notice"; // 广播
                var clientqa2server = "textlive/" + mid + "/clientqa2server";



                // var ptbroadcast = "textlive/" + mid + "/ptbroadcast";
                var qa2host = "textlive/" + mid + "/qa2host";
                // var pt2server = "textlive/" + mid + "/pt2server";
                var hostqa2server = "textlive/" + mid + "/hostqa2server";
                var qa2client = 'textlive/' + mid + '/qa2client'; // 客户接收问答的主题
                // mqtt初始化链接
                console.log('mqtt初始化链接')
                _this.mqttInitData = {
                    host: _this._setting.host,
                    port: _this._setting.useSSL ? _this._setting.tlsPort : _this._setting.port,
                    ssl: _this._setting.useSSL,
                    groupId: _this._setting.groupId,
                    clientId: _this._setting.clientId,
                    listenTopics: [videoClient, noticeClient, prelivecmd],
                    askTopic: clientqa2server, //hostqa2server
                    userName: _this._setting.username,
                    password: _this._setting.password,
                    printLog: true,
                    onGetMsg: function (obj, msg) {
                        // 监听到消息 订阅主量判断
                        console.log('监听到-->2', msg, obj)
                        if (obj && msg && msg.payloadString) {
                            var data = JSON.parse(msg.payloadString);
                            if (data.type === 'chgpush') {
                                // 接收到切换流的消息
                                console.log('发送消息')
                                // 神策埋点-播放事件-start
                                var hlsName = ''
                                switch ((data.hlsUrl.split('://')[1]).split('/')[0]) {
                                    case 'live-demo-hb2-t.roadshowchina.cn':
                                        hlsName = '阿里云'
                                        break
                                    case 'hlsv2.quklive.com':
                                        hlsName = '趣看'
                                        break
                                    case 'hlslive-t.roadshowchina.cn':
                                        hlsName = '网宿'
                                        break
                                    default:
                                        hlsName = (data.hlsUrl.split('://')[1]).split('/')[0]
                                        break
                                }
                                _this.sourceIndex = 0
                                var sensorsObj_stream = {
                                    rsc_video_provider: hlsName,
                                    rsc_roadshow_id: mid, // 路演ID
                                    rsc_roadshow_title: $('.header .meetTitle').text().trim(),  // 路演名称
                                }
                                sensors.track('rsc_video_switch_stream', sensorsObj_stream)

                                var flvList = []
                                var hlsList = []
                                var mqttVideoData = data
                                if (data.hls_url && data.hlsUrl) {
                                    delete mqttVideoData.hls_url
                                }
                                for (let i in mqttVideoData) {
                                    console.log(mqttVideoData[i])
                                    if (mqttVideoData[i].constructor === String && mqttVideoData[i].indexOf('.flv') > -1) {
                                        flvList.push({
                                            src: mqttVideoData[i],
                                            title: _this.playAddrNam(i),
                                            definition: _this.playAddrNam(null, i),
                                        })
                                    } else if (mqttVideoData[i].constructor === String && mqttVideoData[i].indexOf('.m3u8') > -1) {
                                        hlsList.push({
                                            src: mqttVideoData[i],
                                            title: _this.playAddrNam(i),
                                            definition: _this.playAddrNam(null, i),
                                        })
                                    }
                                }

                                _this.aliplayers.source({
                                    flv: flvList,
                                    hls: hlsList,
                                });
                                // videoObj.creatVideoObj(data)
                                console.log('切换源')
                            } else if (data.type === 'end' || data.type === 'meetEnd') {
                                sessionStorage.setItem('isMeetEnd', true)
                                _this.meetEndTimeout = setTimeout(() => {
                                    _this.meetEnddialog()
                                }, 60000)
                            } else if (data.type === 'meetStart') {
                                location.reload()
                            }
                        }
                    },
                    onGetLog: function (obj, msg) {
                        _this.historyListAnswer.reset(_this.mqttInitData)
                        if (obj && msg && msg.payloadString) {
                            var data = JSON.parse(msg.payloadString);
                            if (data) {
                                if (data.type === 'end' || data.type === 'meetEnd') {
                                    // 结束发送 mq 统计事件
                                    _this.historyListAnswer.sendMsg(_this.videoMsgType('stop'), _this.videoPlayreport);
                                    _this.aliplayers.dispose();
                                    $('.tips_qt').text(think_var == "en-us" ? 'The roadshow is over' : '路演已经结束').show(500)
                                    setTimeout(function () {
                                        $('.tips_qt').hide(500)
                                    }, 500);
                                }
                            }
                        }
                    },
                    onSuccess: function (e) {
                        console.log('mqtt链接成功', e);
                        // 初始化问答 
                        if (options.playerData.pstatus == 1 || options.playerData.pstatus == 3) {
                            // mqtt链接成功以后初始化播放器
                            $('.videoCon_tips').append('<span style="color: #fff;">- 路演已经结束，感谢您的参与 -</span>')
                            if (!_this.aliplayers) {
                                _this.creatVideoObj();
                            }
                        } else {
                            $('.videoCon_tips').append('<span style="color: #fff;">- 路演暂未开始，请稍后 -</span>')
                        }
                        window.onbeforeunload = function (e) {
                            _this.historyListAnswer.sendMsg(_this.videoMsgType('stop'), _this.videoPlayreport);
                            _this.historyListAnswer.client.disconnect()
                        }
                        console.log('调用查询用户统计数据')
                    }
                }
                setTimeout(function () {
                    _this.historyListAnswer = $("body").wssHelper(_this.mqttInitData);
                })

            },
            //添加百度统计
            addBaidu: function () {
                var _hmt = _hmt || [];
                (function () {
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?6404ff8e7d7811f1cab2f165214aa043";
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(hm, s);
                })();
            },
            // 神策统计 上线前需要修改
            initse: function () {
                console.log('mainjs')
                window["sensors"] = window["sensorsDataAnalytic201505"];
                sensors.init({
                    server_url: window.location.host.indexOf('home-dev.roadshowchina.cn') > -1 ? 'https://sensors-datasink.roadshowchina.cn/sa?project=production' : 'https://sensors-datasink.roadshowchina.cn/sa?project=default',
                    show_log: false,
                    heatmap: {
                        clickmap: 'default',
                        scroll_notice_map: 'not_collect'
                    }
                });
                sensors.quick('autoTrack');
            },
            initObj: function () {
                if (statisticsObj.isBaiduStatic) {
                    this.addBaidu()
                }
                if (statisticsObj.senStatic) {
                    this.initse()
                }
                this.mqttclientInit()
                // this.historyListAnswer = $("body").wssHelper(this.mqttInitData);
            }
        }
        patnerObj.initObj()
    }
})