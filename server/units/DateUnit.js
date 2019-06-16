'use strict';
// +----------------------------------------------------------------------
// | 项目：InsunAPIServer
// | 版权：Copyright (c) 1974~2019 http://insunsoft.com All rights reserved.
// | 授权：Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// | 作者: insunsoft-濮堂.陈剑 <951241056@QQ.com>
// +----------------------------------------------------------------------
// | 用途: 所有有关时间处理的函数放置于此。
// | 路径: ./units/DateUnit.js
// | 备注：已完成 
// +----------------------------------------------------------------------
const WEEKTYPE = {
    ZH_DAYNAME: 0,
    ZH_SDAYNAME: 1,
    US_DAYNAME: 2,
    US_SDAYNAME: 3,
};
const _options = {
    ZH: {
        dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        shortDayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        shortMonthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    US: {
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        shortDayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        shortMonthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
};

module.exports = {

    /** 
     * 具体方法
      1.getTimeAgo: 计算给定时间距离现在的时间
      2. format(date, fmt)
     format 是将 Date类型的时间进行格式化的工具方法：
     DateUnit.format(new Date()) //不传 fmt，则默认为 yyyy-MM-dd hh:mm:ss ;
     DateUnit.format(new Date(), 'yyyy-MM-dd hh:mm:ss');
     DateUnit.format(new Date(), 'yyyy/MM/dd hh:mm:ss');
     DateUnit.format(new Date(), 'yyyy/MM/dd');
      3. formatToDate(dateStr)
     formatToDate 是将 字符串类型的时间 转化成 Date 类型的工具方法：
     DateUnit.formatToDate('2017-04-18 12:12:12');
     DateUnit.formatToDate('2017/04/18 12:12:12');
      4. getDateStart(date)
      getDateStart 是得到一天的开始，工作中会碰到这种需要得到某一天的开始或结束的时间点。
     DateUnit.getDateStart(new Date());  //今天是4.18, 那返回的是今天 00:00:00的Date类型
      如果想返回字符串类型，可以使用 getDateStartStr(date, fmt) 方法，fmt非必传
     DateUnit.getDateStartStr(new Date(), 'yyyy-MM-dd hh:mm:ss'); //返回 2017-04-18 00:00:00
      5. getDateEnd(date)
      getDateEnd 是得到一天的结束
     DateUnit.getDateEnd(new Date());  //今天是4.18, 那返回的是今天 23:59:59的Date类型
      如果想返回字符串类型，可以使用 getDateEndStr(date, fmt) 方法，fmt非必传
     DateUnit.getDateEndStr(new Date(), 'yyyy-MM-dd hh:mm:ss'); //返回 2017-04-18 23:59:59
      6. compareDate(d1, d2)
      compareDate 比较两个日期的大小 返回 1 , 则 d1 > d2 返回 0 , 则 d1 == d2 返回 -1, 则 d1 < d2
     DateUnit.compareDate(new Date(), new Date()); 
      7. getWeek(date, type)
      getWeek 得到一个日期是星期几
     DateUnit.getWeek(new Date());  //type非必传，默认返回 '星期 X'的格式
     DateUnit.getWeek(new Date(),DateUnit.WEEKTYPE.US_DAYNAME); // Monday
      type 枚举如下：
     DateUnit.WEEKTYPE.ZH_DAYNAME :      星期一
     DateUnit.WEEKTYPE.ZH_SHORTDAYNAME:  周一
     DateUnit.WEEKTYPE.US_DAYNAME：      Monday
     DateUnit.WEEKTYPE.US_SDAYNAME：     Mon
      8. addDay(date, num)
      增加系列：
      addDay(date, num) 
      addDayStr(dateStr, num) 
      addMonth(date, num)
      addMonthStr(dateStr, num)
      addYear(date, num)
      addYearStr(dateStr, num)
      使用起来很简单，今天是 2017.04.18
     DateUnit.addDay(new Date(), 3);   //返回是三天后的  Date类型
     DateUnit.addDayStr('2017-04-18 12:12:12', 3) // 返回 Fri Apr 21 2017 12:12:12 GMT+0800 (中国标准时间)
      其他 month year的方式同上
    */
    getTimeAgo: function (time) {
        if (!time instanceof Date) {
            time = new Date(time);
        }
        let interval = Math.floor((Date.now() - time) / 1000);
        let temp = 0;
        if (interval < 60) {
            return interval + ' 秒前';
        }
        if ((temp = interval / 60) < 60) {
            return Math.floor(temp) + ' 分钟前';
        }
        if ((temp = temp / 60) < 24) {
            return Math.floor(temp) + ' 小时前';
        }
        if ((temp = temp / 24) < 30) {
            return Math.floor(temp) + ' 天前';
        }
        if ((temp = temp / 30) < 12) {
            return Math.floor(temp) + ' 月前';
        }
        return Math.floor(temp / 12) + ' 年前';
    },
    format: function (date, fmt) {
        var o = {
            'M+': date.getMonth() + 1, //月份
            'd+': date.getDate(), //日
            'h+': date.getHours(), //小时
            'm+': date.getMinutes(), //分
            's+': date.getSeconds(), //秒
            'q+': Math.floor((date.getMonth() + 3) / 3), //季度
            'S': date.getMilliseconds() //毫秒
        };
        if (!this.isNotEmpty(fmt)) {
            fmt = 'yyyy-MM-dd hh:mm:ss';
        }
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
            }
        }
        return fmt;
    },

    formatToDate: function (dateStr) {
        if (this.isNotEmpty(dateStr)) {
            return new Date(Date.parse(dateStr.replace(/-/g, '/')));
        }
        return '';
    },
    getDateStart: function (date) {
        var fmt = 'yyyy-MM-dd';
        var dateStartStr = this.getDateStartStr(date, fmt);
        var startTime = new Date(Date.parse(dateStartStr));
        return startTime;
    },

    getDateStartStr: function (date, fmt) {
        if (typeof fmt == 'undefined') {
            fmt = 'yyyy-MM-dd';
        }
        var dateStr = this.format(date, fmt);
        dateStr += ' 00:00:00';
        return dateStr;
    },
    getDateEnd: function (date) {
        var fmt = 'yyyy-MM-dd';
        var dateEndStr = this.getDateEndStr(date, fmt);
        var endTime = new Date(Date.parse(dateEndStr));
        return endTime;
    },
    getDateEndStr: function (date, fmt) {
        if (typeof fmt == 'undefined') {
            fmt = 'yyyy-MM-dd';
        }
        var endStr = this.format(date, fmt);
        endStr += ' 23:59:59';
        return endStr;
    },

    compareDate: function (d1, d2) {
        if (d1 && d2) {
            if (d1.getTime() > d2.getTime()) {
                return 1;
            } else if (d1.getTime() == d2.getTime()) {
                return 0;
            } else if (d1.getTime() < d2.getTime()) {
                return -1;
            }
        }
    },

    isLeapYear: function (date) {
        if (date instanceof Date) {
            return (0 == date.getYear() % 4 && ((date.getYear() % 100 != 0) || (date.getYear() % 400 == 0)));
        }
        console.warn('argument format is wrong');
        return false;
    },
    isValidDate: function (dateStr) {
        if (this.isNotEmpty(dateStr)) {
            var r = dateStr.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            if (r == null) {
                return false;
            }
            var d = new Date(r[1], r[3] - 1, r[4]);
            var num = (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]);
            return (num != 0);
        }
    },
    addDay: function (date, dayNum) {
        if (this.isNotEmpty(date) && this.isNotEmpty(dayNum) && date instanceof Date && typeof dayNum == 'number') {
            date.setDate(date.getDate() + dayNum);
        } else {
            console.warn('date or dayNum format wrong');
        }
        return date;
    },

    addDayStr: function (dateStr, dayNum) {
        var date = '';
        if (this.isNotEmpty(dateStr) && this.isNotEmpty(dayNum) && typeof dayNum == 'number') {
            date = this.formatToDate(dateStr);
            date.setDate(date.getDate() + dayNum);
        } else {
            console.warn('dateStr or dayNum format wrong');
        }
        return date;
    },
    addMonth: function (date, monthNum) {
        if (this.isNotEmpty(date) && this.isNotEmpty(monthNum) && date instanceof Date && typeof monthNum == 'number') {
            date.setMonth(date.getMonth() + monthNum);
        } else {
            console.warn('date or monthNum format wrong');
        }
        return date;
    },

    addMonthStr: function (dateStr, monthNum) {
        var date = '';
        if (this.isNotEmpty(dateStr) && this.isNotEmpty(monthNum) && typeof monthNum == 'number') {
            date = this.formatToDate(dateStr);
            date.setMonth(date.getMonth() + monthNum);
        } else {
            console.warn('date or monthNum format wrong');
        }
        return date;
    },

    addYear: function (date, yearNum) {
        if (this.isNotEmpty(date) && this.isNotEmpty(yearNum) && date instanceof Date && typeof yearNum == 'number') {
            date.setYear(date.getFullYear() + yearNum);
        } else {
            console.warn('date or yearNum format wrong');
        }
        return date;
    },

    addYearStr: function (dateStr, yearNum) {
        var date = '';
        if (this.isNotEmpty(dateStr) && this.isNotEmpty(yearNum) && typeof yearNum == 'number') {
            date = this.formatToDate(dateStr);
            date.setYear(date.getFullYear() + yearNum);
        } else {
            console.warn('date or yearNum format wrong');
        }
        return date;
    },

    isNotEmpty: function (str) {
        if (str != '' && str != null && typeof str != 'undefined') {
            return true;
        }
        console.warn('argument format is wrong');
        return false;
    },

    getWeek: function (date, type) {
        if (date) {
            if (!this.isNotEmpty(type)) {
                type = 0;
            }
            var index = date.getDay();
            var dateStr = '';
            switch (type) {
                case WEEKTYPE.ZH_DAYNAME:
                    dateStr = _options.ZH.dayNames[index];
                    break;
                case WEEKTYPE.ZH_SDAYNAME:
                    dateStr = _options.ZH.shortDayNames[index];
                    break;
                case WEEKTYPE.US_DAYNAME:
                    dateStr = _options.US.dayNames[index];
                    break;
                case WEEKTYPE.US_SDAYNAME:
                    dateStr = _options.US.shortDayNames[index];
                    break;
            }
            return dateStr;
        }
    }
}







