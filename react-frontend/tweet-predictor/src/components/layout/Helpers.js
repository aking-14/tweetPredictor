import Moment from 'moment';
import 'moment-timezone';



export function cleanData(data){
    let stateObj = {}
    const newData = {'Sunday': [], 'Monday': [], 'Tuesday': [], 'Wednesday': [], 'Thursday': [], 'Friday': [], 'Saturday': []};
    const nFData = {'Sunday': [null, 0, 0, 0, 0, 0], 'Monday': [null, 0, 0, 0, 0, 0], 'Tuesday': [null, 0, 0, 0, 0, 0], 
        'Wednesday': [null, 0, 0, 0, 0, 0], 'Thursday': [null, 0, 0, 0, 0, 0], 'Friday': [null, 0, 0, 0, 0, 0], 'Saturday': [null, 0, 0, 0, 0, 0]};
    
    const tDay = Moment().tz('America/New_York').format('dddd');
    const tDayAb = Moment().tz('America/New_York').format('ddd');
    const yDay1 = Moment().tz('America/New_York').subtract(1, 'days').format('dddd');
    const yDay2 = Moment().tz('America/New_York').subtract(2, 'days').format('dddd');
    const yDay3 = Moment().tz('America/New_York').subtract(3, 'days').format('dddd');
    const yDay4 = Moment().tz('America/New_York').subtract(4, 'days').format('dddd');
    const yDay5 = Moment().tz('America/New_York').subtract(5, 'days').format('dddd');
    const yDay6 = Moment().tz('America/New_York').subtract(6, 'days').format('dddd');

    const tHour = parseInt(Moment().tz('America/New_York').format('HH'))
    const tHour2 = parseInt(Moment().tz('America/New_York').subtract(1, 'hours').format('HH'))
    const tHour3 = parseInt(Moment().tz('America/New_York').subtract(2, 'hours').format('HH'))
    const tHour4 = parseInt(Moment().tz('America/New_York').subtract(3, 'hours').format('HH'))
    const tHour5 = parseInt(Moment().tz('America/New_York').subtract(4, 'hours').format('HH'))
    const tHour6 = parseInt(Moment().tz('America/New_York').subtract(5, 'hours').format('HH'))
    const tHour7 = parseInt(Moment().tz('America/New_York').subtract(6, 'hours').format('HH'))
    const tHour8 = parseInt(Moment().tz('America/New_York').subtract(7, 'hours').format('HH'))
    const tHour9 = parseInt(Moment().tz('America/New_York').subtract(8, 'hours').format('HH'))
    const tHour10 = parseInt(Moment().tz('America/New_York').subtract(9, 'hours').format('HH'))
    const tHour11 = parseInt(Moment().tz('America/New_York').subtract(10, 'hours').format('HH'))
    const tHour12 = parseInt(Moment().tz('America/New_York').subtract(11, 'hours').format('HH'))
    const tHour13 = parseInt(Moment().tz('America/New_York').subtract(12, 'hours').format('HH'))
    const tHour14 = parseInt(Moment().tz('America/New_York').subtract(13, 'hours').format('HH'))
    const tHour15 = parseInt(Moment().tz('America/New_York').subtract(14, 'hours').format('HH'))
    const tHour16 = parseInt(Moment().tz('America/New_York').subtract(15, 'hours').format('HH'))
    const tHour17 = parseInt(Moment().tz('America/New_York').subtract(16, 'hours').format('HH'))
    const tHour18 = parseInt(Moment().tz('America/New_York').subtract(17, 'hours').format('HH'))
    const tHour19 = parseInt(Moment().tz('America/New_York').subtract(18, 'hours').format('HH'))
    const tHour20 = parseInt(Moment().tz('America/New_York').subtract(19, 'hours').format('HH'))
    const tHour21 = parseInt(Moment().tz('America/New_York').subtract(20, 'hours').format('HH'))
    const tHour22 = parseInt(Moment().tz('America/New_York').subtract(21, 'hours').format('HH'))
    const tHour23 = parseInt(Moment().tz('America/New_York').subtract(22, 'hours').format('HH'))
    const tHour24 = parseInt(Moment().tz('America/New_York').subtract(23, 'hours').format('HH'))
    
    const realData = {[yDay6]: [], [yDay5]: [], [yDay4]: [], [yDay3]: [], [yDay2]: [], [yDay1]: [], [tDay]: []};
    const curData = {[yDay6]: 0, [yDay5]: 0, [yDay4]: 0, [yDay3]: 0, [yDay2]: 0, [yDay1]: 0, [tDay]: 0};
    
    let curHourly = new Map()
    curHourly.set(tHour24, new Array(12).fill(0))
    curHourly.set(tHour23, new Array(12).fill(0))
    curHourly.set(tHour22, new Array(12).fill(0))
    curHourly.set(tHour21, new Array(12).fill(0))
    curHourly.set(tHour20, new Array(12).fill(0))
    curHourly.set(tHour19, new Array(12).fill(0))
    curHourly.set(tHour18, new Array(12).fill(0))
    curHourly.set(tHour17, new Array(12).fill(0))
    curHourly.set(tHour16, new Array(12).fill(0))
    curHourly.set(tHour15, new Array(12).fill(0))
    curHourly.set(tHour14, new Array(12).fill(0))
    curHourly.set(tHour13, new Array(12).fill(0))
    curHourly.set(tHour12, new Array(12).fill(0))
    curHourly.set(tHour11, new Array(12).fill(0))
    curHourly.set(tHour10, new Array(12).fill(0))
    curHourly.set(tHour9, new Array(12).fill(0))
    curHourly.set(tHour8, new Array(12).fill(0))
    curHourly.set(tHour7, new Array(12).fill(0))
    curHourly.set(tHour6, new Array(12).fill(0))
    curHourly.set(tHour5, new Array(12).fill(0))
    curHourly.set(tHour4, new Array(12).fill(0))
    curHourly.set(tHour3, new Array(12).fill(0))
    curHourly.set(tHour2, new Array(12).fill(0))
    curHourly.set(tHour, new Array(12).fill(0))

    let realHourly = new Map([
        [tHour24, 0], [tHour23, 0], [tHour22, 0], [tHour21, 0], 
        [tHour20, 0], [tHour19, 0], [tHour18, 0], [tHour17, 0], 
        [tHour16, 0], [tHour15, 0], [tHour14, 0], [tHour13, 0], 
        [tHour12, 0], [tHour11, 0], [tHour10, 0], [tHour9, 0], 
        [tHour8, 0], [tHour7, 0], [tHour6, 0], [tHour5, 0], 
        [tHour4, 0], [tHour3, 0], [tHour2, 0], [tHour, 0], 
    ])

    let cHData = new Map([
        [0, [null, 0, 0, 0]], [1, [null, 0, 0, 0]], [2, [null, 0, 0, 0]], [3, [null, 0, 0, 0]], 
        [4, [null, 0, 0, 0]], [5, [null, 0, 0, 0]], [6, [null, 0, 0, 0]], [7, [null, 0, 0, 0]], 
        [8, [null, 0, 0, 0]], [9, [null, 0, 0, 0]], [10, [null, 0, 0, 0]], [11, [null, 0, 0, 0]], 
        [12, [null, 0, 0, 0]], [13, [null, 0, 0, 0]], [14, [null, 0, 0, 0]], [15, [null, 0, 0, 0]], 
        [16, [null, 0, 0, 0]], [17, [null, 0, 0, 0]], [18, [null, 0, 0, 0]], [19, [null, 0, 0, 0]], 
        [20, [null, 0, 0, 0]], [21, [null, 0, 0, 0]], [22, [null, 0, 0, 0]], [23, [null, 0, 0, 0]], 
    ])

    var srtDt = Moment().tz('America/New_York').subtract(84, 'days').format('MM-DD-YYYY');
    const srtDtFxd = Moment().tz('America/New_York').subtract(84, 'days').format('MM-DD-YYYY');
    var endDt = Moment(srtDt).tz('America/New_York').add(7, 'days').format('MM-DD-YYYY');
    var tempy = Moment().tz('America/New_York').subtract(84, 'days')
    var tempx = Moment(tempy).tz('America/New_York').subtract(23, 'hours')
    var tempz = Moment().tz('America/New_York')
    var stpDt = Moment().tz('America/New_York').format('MM-DD-YYYY');
    var begStp = Moment().tz('America/New_York').subtract(6, 'days').format('MM-DD-YYYY');
    var sunDt = Moment().tz('America/New_York').startOf('week').format('MM-DD-YYYY');
    var srtDy = Moment().tz('America/New_York').set({hour:0,minute:0,second:0,millisecond:0}).format('MM-DD-YYYY HH:mm:ss')
    var stpFull = Moment().tz('America/New_York').format('MM-DD-YYYY')
    var strFull = Moment().tz('America/New_York').subtract(23, 'hours').format('MM-DD-YYYY')
    var rnge = 1;
    var gate = true;
    var srtInd = 0;

    data.map(x => {
        var cur_dt = Moment.parseZone(x.dates).format('MM-DD-YYYY');
        var cur_hour = parseInt(Moment.parseZone(x.dates).format('HH'));
        var cur_dt_full = Moment.parseZone(x.dates).format('MM-DD-YYYY HH:mm:ss')
        var k = '';
        var l = '';
        //include just hours or specific days as well or both? start with specific day
        if (cur_dt > tempy.format('MM-DD-YYYY')){
            tempy = Moment(tempy).tz('America/New_York').add(1, 'week')
        }

        if (cur_dt >  tempx.format('MM-DD-YYYY')){
            tempx = Moment(tempx).tz('America/New_York').add(1, 'week')
        }
        if (cur_dt_full >= srtDy){
            if (cur_hour - srtInd > 0){
                if (srtInd === 0){
                    cHData.set(srtInd, [0, 0])
                    srtInd = srtInd + 1
                }
                while(cur_hour !== srtInd){
                    let prev = cHData.get(srtInd - 1)
                    cHData.set(srtInd, prev)
                    srtInd = srtInd + 1
                    /*
                    if (cur_hour !== tHour){
                        let prev = cHData.get(srtInd - 1)
                        cHData.set(srtInd, prev)
                        srtInd = srtInd + 1
                    }else{
                        let prev = [cHData.get(srtInd - 1)[0], 0]
                        cHData.set(srtInd, prev)
                        srtInd = srtInd + 1
                    }
                    */
                }
            }

            if (cHData.get(cur_hour)[0] === null){
                if (cur_hour === 0){
                    if (cur_hour !== tHour){
                        cHData.set(cur_hour, [1, 0])
                    }else{
                        cHData.set(cur_hour, [1, 1])
                    }
                }else{
                    let pstHr = parseInt(Moment.parseZone(x.dates).subtract(1, 'hours').format('HH'))
                    let pstCt = cHData.get(pstHr)[0] + 1
                    if (cur_hour !== tHour){
                        cHData.set(cur_hour, [pstCt, pstCt])
                    }else{
                        cHData.set(cur_hour, [pstCt, 0])
                    }
                }
            }else{
                let pstCt = cHData.get(cur_hour)[0] + 1
                if (cur_hour !== tHour){
                    cHData.set(cur_hour, [pstCt, pstCt])
                }else{
                    cHData.set(cur_hour, [pstCt, 0])
                }
            }   

            if (cur_hour === srtInd){
                srtInd = srtInd + 1
            }
        }

        if ((cur_dt === tempy.format('MM-DD-YYYY')) && (cur_hour <= tHour)){
            if (stpFull === cur_dt){
                let valu = realHourly.get(cur_hour)
                realHourly.set(cur_hour, valu + 1)
            }
            let diff = tempz.diff(tempy, 'weeks')
            if (diff > 0){
                diff = 12 - diff
                let tmpArr = curHourly.get(cur_hour)
                tmpArr[diff] = tmpArr[diff] + 1
                curHourly.set(cur_hour, tmpArr)
            }
        }else if ((cur_dt === tempx.format('MM-DD-YYYY')) && (cur_hour >= tHour24)){
            if (strFull === cur_dt){
                let valu = realHourly.get(cur_hour)
                realHourly.set(cur_hour, valu + 1)
            }

            let diff = tempz.diff(tempx, 'weeks')
            if (diff > 0){
                diff = 12 - diff
                let tmpArr = curHourly.get(cur_hour)
                tmpArr[diff] = tmpArr[diff] + 1
                curHourly.set(cur_hour, tmpArr)
            }
        }

        if (cur_dt >= begStp && cur_dt <= stpDt){
            l = Moment.parseZone(x.dates).format('dddd');
            curData[l] = curData[l] + 1;
        }

        if (cur_dt >= sunDt){
            l = Moment.parseZone(x.dates).format('dddd');
            //except if nfdata 1 is current day! change here and at line 300 maybe?
            if (nFData[l][0] === null){
                if (l === 'Sunday'){
                    nFData[l][0] = 1;
                    if (cur_dt !== stpDt){
                        nFData[l][1] = 1;
                    }
                }else{
                    var pstDt = Moment.parseZone(x.dates).subtract(1, 'days').format('dddd')
                    nFData[l][0] = nFData[pstDt][0] + 1;
                    if (cur_dt !== stpDt){
                        nFData[l][1] = nFData[pstDt][1] + 1;
                    }
                }
            }else{
                nFData[l][0] = nFData[l][0] + 1;
                if (cur_dt !== stpDt){
                    nFData[l][1] = nFData[l][1] + 1;
                }
            }
        }

        if (cur_dt >= srtDt && cur_dt < endDt && gate){
            k = Moment.parseZone(x.dates).format('dddd');
            if (rnge !== newData[k].length){
                var pl = rnge - newData[k].length
                while (pl > 1){
                    newData[k].push(0)
                    pl = rnge - newData[k].length
                }
                newData[k].push(1);
            }else{
                newData[k][newData[k].length - 1] = newData[k][newData[k].length - 1] + 1;
            }
        }else{
            if (cur_dt >= srtDtFxd){
                if (gate){
                    k = Moment.parseZone(x.dates).format('dddd');
                    srtDt = endDt;
                    endDt = Moment(srtDt).tz('America/New_York').add(7, 'days').format('MM-DD-YYYY');
                    if (endDt > stpDt){
                        gate = !gate;
                    }else{
                        newData[k].push(1);
                        rnge = rnge + 1;
                    }
                }
            }
        }
        return newData;
    })
    if (srtInd - tHour < 1){
        while(srtInd - tHour < 1){
            if (srtInd - tHour === 0){
                if (tHour === 0){
                    cHData.set(0, [0, 0, 0, 0])
                    srtInd = srtInd + 1
                }else{
                    let prev = [cHData.get(srtInd - 1)[0], 0]
                    cHData.set(srtInd, prev)
                    srtInd = srtInd + 1
                }
            }else{
                if (srtInd === 0){
                    cHData.set(0, [0, 0, 0, 0])
                    srtInd = srtInd + 1
                }else{
                    let prev = cHData.get(srtInd - 1)
                    cHData.set(srtInd, prev)
                    srtInd = srtInd + 1
                }
            } 
        }
    }

    var maxWk = 0, minWk = 0;
    for (const v in newData){
        var dayVa = Moment().tz('America/New_York').day(v).day() - 1
        var dyVa = Moment().tz('America/New_York').day(dayVa).format('dddd')
        let curDy = Moment().tz('America/New_York').format('dddd')
        if (curDy === v){
            var curMax = Math.max(...newData[v])
            var curMin = Math.min(...newData[v])
            var cur = curData[v]
        }
        maxWk = Math.max(...newData[v]) + maxWk
        minWk = Math.min(...newData[v]) + minWk

        realData[v].push(Math.round(newData[v].reduce((acc,c) => acc + c)/newData[v].length));
        let vahArr = newData[v].filter(i => i >= realData[v][0]);
        let valArr = newData[v].filter(i => i <= realData[v][0]);
        let vah, val
        if (vahArr.length < 2){
            val = Math.round(valArr.reduce((acc,c) => acc + c)/valArr.length)
            vah = val + realData[v][0]
        }else{
            vah = Math.round(vahArr.reduce((acc,c) => acc + c)/vahArr.length)
        }
        if (valArr.length < 2){
            val = vah - realData[v][0]
        }else{
            val = Math.round(valArr.reduce((acc,c) => acc + c)/valArr.length)
        }
        realData[v].push(vah);
        realData[v].push(val);
        if (dayVa === 6){
            nFData[v][2] = vah;
            nFData[v][3] = val;
        }else{
            nFData[v][2] = nFData[dyVa][2] + vah
            nFData[v][3] = nFData[dyVa][3] + val
        }
        if (curDy === v){
            //maybe do hourly moving average here insead of daily?
            if (dayVa === 6){
                nFData[v][1] = realData[v][0] 
            }else{
                nFData[v][1] = nFData[dyVa][1] + realData[v][0] 
            }
            if(nFData[curDy][0] === null){
                if (curDy === 'Sunday'){
                    nFData[v][0] = 0
                }else{
                    nFData[v][0] = nFData[dyVa][0]
                }
            }
        }
        var vahC, valC;
        if (nFData[v][0] != null){
            let vahCur = newData[v].filter(i => i >= curData[v])
            let valCur = newData[v].filter(i => i <= curData[v]);
            if (vahCur.length < 2){
                valC = Math.round(valCur.reduce((acc,c) => acc + c)/valCur.length)
                vahC = valC + curData[v]
            }else{
                vahC = Math.round(vahCur.reduce((acc, c) => acc + c)/vahCur.length)
            }
            if (valCur.length < 2){
                valC = vahC - curData[v]
            }else{
                valC = Math.round(valCur.reduce((acc,c) => acc + c)/valCur.length)
            }

            if (dayVa === 6){
                nFData[v][4] = vahC;
                nFData[v][5] = valC;
            }else{
                nFData[v][4] = nFData[dyVa][4] + vahC;
                nFData[v][5] = nFData[dyVa][5] + valC;
            }
        }else{
            //can include nfdata 1 in here?
            nFData[v][4] = nFData[dyVa][4] + vah;
            nFData[v][5] = nFData[dyVa][5] + val;
        }
    }

    let realHour = new Map()
    for (let [k, v] of curHourly){
        let mAve = Math.round(v.reduce((acc, c) => acc + c)/v.length)
        let vahArr = v.filter(i => i >= mAve)
        let valArr = v.filter(i => i <= mAve)
        let vah, val
        if (vahArr.length < 2){
            val = Math.round(valArr.reduce((acc, c) => acc + c)/valArr.length)
            if (val === 0){
                vah = mAve + mAve
            }else{
                vah = val + mAve
            }
        }else{
            vah = Math.round(vahArr.reduce((acc, c) => acc + c)/vahArr.length)
        }
        if (valArr.length < 2){
            val = vah - mAve
        }else{
            val = Math.round(valArr.reduce((acc, c) => acc + c)/valArr.length)
        }
        let maxHr = Math.max(...v)
        let minHr = Math.min(...v)
        realHour.set(k, [mAve, vah, val, maxHr, minHr])

        if (k === tHour){
            if (k === 0){
                let prev = [cHData.get(k)[0], mAve]
                cHData.set(k, prev)
            }else{
                let prev = [cHData.get(k)[0], cHData.get(k-1)[0] + mAve]
                cHData.set(k, prev)
            }
        }

        if (k === 0){
            let prev = [cHData.get(k)[0], cHData.get(k)[1], vah, val]
            cHData.set(k, prev)
        }else{
            let prev = [cHData.get(k)[0], cHData.get(k)[1], cHData.get(k-1)[2] + vah, cHData.get(k-1)[3] + val]
            cHData.set(k, prev)
        }
        /*
        var vahCurr, valCurr
        if (cHData.get(k)[0] !== null){
            let crrnt = cHData.get(k)[0]
            if (crrnt < maxHr){
                let vahCArr = v.filter(i => i >= crrnt)
                vahCurr = Math.round(vahCArr.reduce((acc, c) => acc + c)/vahCArr.length)
            }else{
                vahCurr = maxHr
            }
            if (crrnt > minHr){
                let valCArr = v.filter(i => i <= crrnt)
                valCurr = Math.round(valCArr.reduce((acc, c) => acc + c)/valCArr.length)
            }else{
                valCurr = minHr
            }
            
            if (k === 0){
                let prev = [cHData.get(k)[0], cHData.get(k)[1], vah, val]
                cHData.set(k, prev)
            }else{
                let prev = [cHData.get(k)[0], cHData.get(k)[1], cHData.get(k-1)[2] + vahCurr, cHData.get(k-1)[3] + valCurr]
                cHData.set(k, prev)
            }
        }else{
            let prev = [cHData.get(k)[0], cHData.get(k)[1], cHData.get(k-1)[2] + vah, cHData.get(k-1)[3] + val]
            cHData.set(k, prev)
        }
        */
    }

    var gt = true
    let stateData = []
    for (const property in realData){
        stateData = [...stateData, {name: property, '3 Month MA': realData[property][0], 'VAH': realData[property][1], 'VAL': realData[property][2], 'Actual Count': curData[property]}];
        
        if (property === 'Sunday'){
            gt = false;
        }
        if (gt){
            var day = Moment().tz('America/New_York').day(property).day() - 1
            var dy = Moment().tz('America/New_York').day(day).format('dddd')
            nFData[property][1] = nFData[dy][1] + realData[property][0]
            //next calculate vah, val projections
        }
    }

    var expectedW = 0
    let stateFixedData = []
    for (const property in nFData){
        stateFixedData = [...stateFixedData, {name: property, 'Projected Count': nFData[property][1], 'Projected VAH' : nFData[property][2], 'Projected VAL' : nFData[property][3], 'Cumulative Count': nFData[property][0], 'Current VAH': nFData[property][4], 'Current VAL': nFData[property][5]}];
        if (property === Moment().tz('America/New_York').format('dddd')){
            var curWk = nFData[property][0]
        }
        if (property === 'Saturday'){
            if (curWk <= nFData[property][1]){
                expectedW = nFData[property][1] - curWk
            }
        }
    }
    
    gt = true
    var legMax = 0
    var legCur = 0
    var legMA = 0
    let stateHourlyData = []
    for (let [k, v] of realHour){
        stateHourlyData = [...stateHourlyData, {name: k, '3 Month MA':  v[0], 'VAH': v[1], 'VAL': v[2], 'Max': v[3], 'Min': v[4], 'Current': realHourly.get(k)}]

        if (k === 0){
            gt = false
        }
        if (gt){
            let prev = [cHData.get(k)[0], cHData.get(k-1)[1] + v[0], cHData.get(k-1)[2] + v[1], cHData.get(k-1)[3] + v[2]]
            cHData.set(k, prev)
        }
        legCur = realHourly.get(k) + legCur
        legMA = v[0] + legMA
        legMax = v[3] + legMax
    }
    
    var expectedC = 0
    let stateFixedHrly = []
    for (let [k, v] of cHData){
        stateFixedHrly = [...stateFixedHrly, {name: k, 'Projected VAL': v[3], 'Projected Count': v[1], 'Projected VAH': v[2], 'Cumulative Count': v[0]}]

        if(k === 23){
            if (cur <= v[1]){
                expectedC = v[1] - cur
            }
        }
    }

    stateObj['data'] = stateData
    stateObj['fixedData'] = stateFixedData
    stateObj['hourlyData'] = stateHourlyData
    stateObj['fixedHrly'] = stateFixedHrly
    stateObj['max'] = curMax
    stateObj['maxWk'] = maxWk
    stateObj['min'] = curMin
    stateObj['minWk'] = minWk
    stateObj['cur'] = cur
    stateObj['curWk'] = curWk
    stateObj['day'] = tDay
    stateObj['legCur'] = legCur
    stateObj['legMA'] = legMA
    stateObj['legMax'] = legMax
    stateObj['expectedC'] = expectedC
    stateObj['expectedW'] = expectedW
    stateObj['abbv'] = tDayAb

    return stateObj
}

export function cleanHomeData(data){
    let stateObj = {}
    const tDay = Moment().tz('America/New_York').format('dddd');
    const tDayAb = Moment().tz('America/New_York').format('ddd');
    const yDay1 = Moment().tz('America/New_York').subtract(1, 'days').format('dddd');
    const yDay2 = Moment().tz('America/New_York').subtract(2, 'days').format('dddd');
    const yDay3 = Moment().tz('America/New_York').subtract(3, 'days').format('dddd');
    const yDay4 = Moment().tz('America/New_York').subtract(4, 'days').format('dddd');
    const yDay5 = Moment().tz('America/New_York').subtract(5, 'days').format('dddd');
    const yDay6 = Moment().tz('America/New_York').subtract(6, 'days').format('dddd');

    const newDataWh = {'Sunday': [], 'Monday': [], 'Tuesday': [], 'Wednesday': [], 'Thursday': [], 'Friday': [], 'Saturday': []};
    const realDataWh = {[yDay6]: [], [yDay5]: [], [yDay4]: [], [yDay3]: [], [yDay2]: [], [yDay1]: [], [tDay]: []};
    const curDataWh = {[yDay6]: 0, [yDay5]: 0, [yDay4]: 0, [yDay3]: 0, [yDay2]: 0, [yDay1]: 0, [tDay]: 0};
    
    const newDataRdt = {'Sunday': [], 'Monday': [], 'Tuesday': [], 'Wednesday': [], 'Thursday': [], 'Friday': [], 'Saturday': []};            
    const realDataRdt = {[yDay6]: [], [yDay5]: [], [yDay4]: [], [yDay3]: [], [yDay2]: [], [yDay1]: [], [tDay]: []};
    const curDataRdt = {[yDay6]: 0, [yDay5]: 0, [yDay4]: 0, [yDay3]: 0, [yDay2]: 0, [yDay1]: 0, [tDay]: 0};
    
    const newDataJb = {'Sunday': [], 'Monday': [], 'Tuesday': [], 'Wednesday': [], 'Thursday': [], 'Friday': [], 'Saturday': []};
    const realDataJb = {[yDay6]: [], [yDay5]: [], [yDay4]: [], [yDay3]: [], [yDay2]: [], [yDay1]: [], [tDay]: []};
    const curDataJb = {[yDay6]: 0, [yDay5]: 0, [yDay4]: 0, [yDay3]: 0, [yDay2]: 0, [yDay1]: 0, [tDay]: 0};
    
    const newDataMp = {'Sunday': [], 'Monday': [], 'Tuesday': [], 'Wednesday': [], 'Thursday': [], 'Friday': [], 'Saturday': []};
    const realDataMp = {[yDay6]: [], [yDay5]: [], [yDay4]: [], [yDay3]: [], [yDay2]: [], [yDay1]: [], [tDay]: []};
    const curDataMp = {[yDay6]: 0, [yDay5]: 0, [yDay4]: 0, [yDay3]: 0, [yDay2]: 0, [yDay1]: 0, [tDay]: 0};
    
    var srtDt = Moment().tz('America/New_York').subtract(84, 'days').format('MM-DD-YYYY');
    const srtDtFxd = Moment().tz('America/New_York').subtract(84, 'days').format('MM-DD-YYYY');
    var endDt = Moment(srtDt).tz('America/New_York').add(7, 'days').format('MM-DD-YYYY');
    var begStp = Moment().tz('America/New_York').subtract(6, 'days').format('MM-DD-YYYY');
    var stpDt = Moment().tz('America/New_York').format('MM-DD-YYYY');
    
    var rnge = 1;
    var gate = true;

    data[0].map(x => {
        let cur_dt = Moment.parseZone(x.dates).format('MM-DD-YYYY');
        let k = '';
        let l = '';
        
        if (cur_dt >= begStp && cur_dt <= stpDt){
            l = Moment.parseZone(x.dates).format('dddd');
            curDataWh[l] = curDataWh[l] + 1;
        }

        if (cur_dt >= srtDt && cur_dt < endDt && gate){
            k = Moment.parseZone(x.dates).format('dddd');
            if (rnge !== newDataWh[k].length){
                let pl = rnge - newDataWh[k].length
                while (pl > 1){
                    newDataWh[k].push(0)
                    pl = rnge - newDataWh[k].length
                }
                newDataWh[k].push(1);
            }else{
                newDataWh[k][newDataWh[k].length - 1] = newDataWh[k][newDataWh[k].length - 1] + 1;
            }
        }else{
            if (cur_dt >= srtDtFxd){
                if (gate){
                    k = Moment.parseZone(x.dates).format('dddd');
                    srtDt = endDt;
                    endDt = Moment(srtDt).tz('America/New_York').add(7, 'days').format('MM-DD-YYYY');
                    if (endDt > stpDt){
                        gate = !gate;
                    }else{
                        newDataWh[k].push(1);
                        rnge = rnge + 1;
                    }
                }
            }
        }
        return newDataWh;
    })

    srtDt = Moment().tz('America/New_York').subtract(84, 'days').format('MM-DD-YYYY');
    endDt = Moment(srtDt).tz('America/New_York').add(7, 'days').format('MM-DD-YYYY');

    rnge = 1;
    gate = true;
    
    data[1].map(x => {
        let cur_dt = Moment.parseZone(x.dates).format('MM-DD-YYYY');
        let k = '';
        let l = '';
        
        if (cur_dt >= begStp && cur_dt <= stpDt){
            l = Moment.parseZone(x.dates).format('dddd');
            curDataRdt[l] = curDataRdt[l] + 1;
        }

        if (cur_dt >= srtDt && cur_dt < endDt && gate){
            k = Moment.parseZone(x.dates).format('dddd');
            if (rnge !== newDataRdt[k].length){
                let pl = rnge - newDataRdt[k].length
                while (pl > 1){
                    newDataRdt[k].push(0)
                    pl = rnge - newDataRdt[k].length
                }
                newDataRdt[k].push(1);
            }else{
                newDataRdt[k][newDataRdt[k].length - 1] = newDataRdt[k][newDataRdt[k].length - 1] + 1;
            }
        }else{
            if (cur_dt >= srtDtFxd){
                if (gate){
                    k = Moment.parseZone(x.dates).format('dddd');
                    srtDt = endDt;
                    endDt = Moment(srtDt).tz('America/New_York').add(7, 'days').format('MM-DD-YYYY');
                    if (endDt > stpDt){
                        gate = !gate;
                    }else{
                        newDataRdt[k].push(1);
                        rnge = rnge + 1;
                    }
                }
            }
        }
        return newDataRdt;
    })

    srtDt = Moment().tz('America/New_York').subtract(84, 'days').format('MM-DD-YYYY');
    endDt = Moment(srtDt).tz('America/New_York').add(7, 'days').format('MM-DD-YYYY');

    rnge = 1;
    gate = true;
    
    data[2].map(x => {
        let cur_dt = Moment.parseZone(x.dates).format('MM-DD-YYYY');
        let k = '';
        let l = '';
        
        if (cur_dt >= begStp && cur_dt <= stpDt){
            l = Moment.parseZone(x.dates).format('dddd');
            curDataJb[l] = curDataJb[l] + 1;
        }

        if (cur_dt >= srtDt && cur_dt < endDt && gate){
            k = Moment.parseZone(x.dates).format('dddd');
            if (rnge !== newDataJb[k].length){
                let pl = rnge - newDataJb[k].length
                while (pl > 1){
                    newDataJb[k].push(0)
                    pl = rnge - newDataJb[k].length
                }
                newDataJb[k].push(1);
            }else{
                newDataJb[k][newDataJb[k].length - 1] = newDataJb[k][newDataJb[k].length - 1] + 1;
            }
        }else{
            if (cur_dt >= srtDtFxd){
                if (gate){
                    k = Moment.parseZone(x.dates).format('dddd');
                    srtDt = endDt;
                    endDt = Moment(srtDt).tz('America/New_York').add(7, 'days').format('MM-DD-YYYY');
                    if (endDt > stpDt){
                        gate = !gate;
                    }else{
                        newDataJb[k].push(1);
                        rnge = rnge + 1;
                    }
                }
            }
        }
        return newDataJb;
    })

    srtDt = Moment().tz('America/New_York').subtract(84, 'days').format('MM-DD-YYYY');
    endDt = Moment(srtDt).tz('America/New_York').add(7, 'days').format('MM-DD-YYYY');

    rnge = 1;
    gate = true;
    
    data[3].map(x => {
        let cur_dt = Moment.parseZone(x.dates).format('MM-DD-YYYY');
        let k = '';
        let l = '';
        
        if (cur_dt >= begStp && cur_dt <= stpDt){
            l = Moment.parseZone(x.dates).format('dddd');
            curDataMp[l] = curDataMp[l] + 1;
        }

        if (cur_dt >= srtDt && cur_dt < endDt && gate){
            k = Moment.parseZone(x.dates).format('dddd');
            if (rnge !== newDataMp[k].length){
                let pl = rnge - newDataMp[k].length
                while (pl > 1){
                    newDataMp[k].push(0)
                    pl = rnge - newDataMp[k].length
                }
                newDataMp[k].push(1);
            }else{
                newDataMp[k][newDataMp[k].length - 1] = newDataMp[k][newDataMp[k].length - 1] + 1;
            }
        }else{
            if (cur_dt >= srtDtFxd){
                if (gate){
                    k = Moment.parseZone(x.dates).format('dddd');
                    srtDt = endDt;
                    endDt = Moment(srtDt).tz('America/New_York').add(7, 'days').format('MM-DD-YYYY');
                    if (endDt > stpDt){
                        gate = !gate;
                    }else{
                        newDataMp[k].push(1);
                        rnge = rnge + 1;
                    }
                }
            }
        }
        return newDataMp;
    })

    for (const v in newDataWh){
        let curDy = Moment().tz('America/New_York').format('dddd')
        if (curDy === v){
            var maxWh = Math.max(...newDataWh[v])
            var minWh = Math.min(...newDataWh[v])
            var curWh = curDataWh[v]

            var maxRdt = Math.max(...newDataRdt[v])
            var minRdt = Math.min(...newDataRdt[v])
            var curRdt = curDataRdt[v]

            var maxJb = Math.max(...newDataJb[v])
            var minJb = Math.min(...newDataJb[v])
            var curJb = curDataJb[v]

            var maxMp = Math.max(...newDataMp[v])
            var minMp = Math.min(...newDataMp[v])
            var curMp = curDataMp[v]
        }
        realDataWh[v].push(Math.round(newDataWh[v].reduce((acc,c) => acc + c)/newDataWh[v].length));
        let vahArr = newDataWh[v].filter(i => i >= realDataWh[v][0]);
        let valArr = newDataWh[v].filter(i => i <= realDataWh[v][0]);
        let vah, val
        if (vahArr.length < 2){
            val = Math.round(valArr.reduce((acc, c) => acc + c)/valArr.length)
            vah = val + realDataWh[v][0]
        }else{
            vah = Math.round(vahArr.reduce((acc, c) => acc + c)/vahArr.length)
        }
        if (valArr.length < 2){
            val = vah - realDataWh[v][0]
        }else{
            val = Math.round(valArr.reduce((acc, c) => acc + c)/valArr.length)
        }
        realDataWh[v].push(vah);
        realDataWh[v].push(val);

        realDataRdt[v].push(Math.round(newDataRdt[v].reduce((acc,c) => acc + c)/newDataRdt[v].length));
        let vahArrRdt = newDataRdt[v].filter(i => i >= realDataRdt[v][0]);
        let valArrRdt = newDataRdt[v].filter(i => i <= realDataRdt[v][0]);
        let vahRdt, valRdt
        if (vahArrRdt.length < 2){
            valRdt = Math.round(valArrRdt.reduce((acc,c) => acc + c)/valArrRdt.length)
            vahRdt = valRdt + realDataRdt[v][0]
        }else{
            vahRdt = Math.round(vahArrRdt.reduce((acc,c) => acc + c)/vahArrRdt.length)
        }
        if (valArrRdt.length < 2){
            valRdt = vahRdt - realDataRdt[v][0]
        }else{
            valRdt = Math.round(valArrRdt.reduce((acc,c) => acc + c)/valArrRdt.length)
        }
        realDataRdt[v].push(vahRdt);
        realDataRdt[v].push(valRdt);

        realDataJb[v].push(Math.round(newDataJb[v].reduce((acc,c) => acc + c)/newDataJb[v].length));
        let vahArrJb = newDataJb[v].filter(i => i >= realDataJb[v][0]);
        let valArrJb = newDataJb[v].filter(i => i <= realDataJb[v][0]);
        let vahJb, valJb
        if (vahArrJb.length < 2){
            valJb = Math.round(valArrJb.reduce((acc,c) => acc + c)/valArrJb.length)
            vahJb = valJb + realDataJb[v][0]
        }else{
            vahJb = Math.round(vahArrJb.reduce((acc,c) => acc + c)/vahArrJb.length)
        }
        if (valArrJb.length < 2){
            valJb = vahJb - realDataJb[v][0]
        }else{
            valJb = Math.round(valArrJb.reduce((acc,c) => acc + c)/valArrJb.length)
        }
        realDataJb[v].push(vahJb);
        realDataJb[v].push(valJb);

        realDataMp[v].push(Math.round(newDataMp[v].reduce((acc,c) => acc + c)/newDataMp[v].length));
        let vahArrMp = newDataMp[v].filter(i => i >= realDataMp[v][0]);
        let valArrMp = newDataMp[v].filter(i => i <= realDataMp[v][0]);
        let vahMp, valMp
        if (vahArrMp.length < 2){
            valMp = Math.round(valArrMp.reduce((acc,c) => acc + c)/valArrMp.length)
            vahMp = valMp + realDataMp[v][0]
        }else{
            vahMp = Math.round(vahArrMp.reduce((acc,c) => acc + c)/vahArrMp.length)
        }
        if (valArrMp.length < 2){
            valMp = vahMp - realDataMp[v][0]
        }else{
            valMp = Math.round(valArrMp.reduce((acc,c) => acc + c)/valArrMp.length)
        }
        realDataMp[v].push(vahMp);
        realDataMp[v].push(valMp);
    }

    let stateData = []
    let stateRdtData = []
    let stateJbData = []
    let stateMpData = []
    for (const property in realDataWh){
        stateData = [...stateData, {name: property, '3 Month MA': realDataWh[property][0], 'VAH': realDataWh[property][1], 'VAL': realDataWh[property][2], 'Actual Count': curDataWh[property]}]
        stateRdtData = [...stateRdtData, {name: property, '3 Month MA': realDataRdt[property][0], 'VAH': realDataRdt[property][1], 'VAL': realDataRdt[property][2], 'Actual Count': curDataRdt[property]}]
        stateJbData = [...stateJbData, {name: property, '3 Month MA': realDataJb[property][0], 'VAH': realDataJb[property][1], 'VAL': realDataJb[property][2], 'Actual Count': curDataJb[property]}]
        stateMpData = [...stateMpData, {name: property, '3 Month MA': realDataMp[property][0], 'VAH': realDataMp[property][1], 'VAL': realDataMp[property][2], 'Actual Count': curDataMp[property]}]
    }
    stateObj['data'] = stateData
    stateObj['rdtData'] = stateRdtData
    stateObj['jbData'] = stateJbData
    stateObj['mpData'] = stateMpData
    stateObj['day'] = tDay
    stateObj['maxWh'] = maxWh
    stateObj['minWh'] = minWh
    stateObj['curWh'] = curWh
    stateObj['maxRdt'] = maxRdt
    stateObj['minRdt'] = minRdt
    stateObj['curRdt'] = curRdt
    stateObj['maxJb'] = maxJb
    stateObj['minJb'] = minJb
    stateObj['curJb'] = curJb
    stateObj['maxMp'] = maxMp
    stateObj['minMp'] = minMp
    stateObj['curMp'] = curMp
    stateObj['abbv'] = tDayAb

    return stateObj
}