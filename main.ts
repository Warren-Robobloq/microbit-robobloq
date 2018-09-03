

/**
 * 37907909@qq.com
 * 使用此文件来定义自定义函数和图形块。
 * 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
 */

// lightEnum
enum lightEnum {
    //% block="double-light"
    Double =0,
    //% block="left-light"
    Left= -4,
    //% block="right-light"
    Right = -5
}

// setDirection
enum directionEnum{
    //% block="forward"
    up = 0,
    //% block="backward"
    after = 1,
    //% block="turn left"
    left = 2,
    //% block="turn right"
    right = 3
}

// setDirection
enum directionEnum2{
    //% block="clockwise"
    clockwise = 0,
    //% block="anticlockwise"
    anticlockwise = 1,
}
// mp3Enum1
enum mp3Enum1{
    //% block="play sound"
    play = 0,
    //% block="pause"
    stop = 1,
    //% block="previous sound"
    up = 2,
    //% block="next sound"
    down = 3
}

// setEngine
enum engineEnum{
    //% block="M1"
    m1 = 2,
    //% block="M2"
    m2 = 1
}

//  portEnum
enum portEnum {
    //% block="port1"
    Port1=1,
    //% block="port2"
    Port2=2,
    //% block="port3"
    Port3=3,
    //% block="port4"
    Port4=4,
    //% block="port5"
    Port5=5,
    //% block="port6"
    Port6=6,
    //% block="port7"
    Port7=7,
    //% block="port8"
    Port8=8
}

// enumSoundTime
enum enumSoundTime {
    //% block="Half"
    Half=500,
    //% block="Quarter"
    Quarter=250,
    //% block="Eighth"
    Eighth=125,
    //% block="Whole"
    Whole=1000,
    //% block="Double"
    Double=2000
}

// enumSoundRate
enum enumSoundRate {
    //% block="C2"
    C2 = 65,
    //% block="D2"
    D2 = 73,
    //% block="E2"
    E2 = 82,
    //% block="F2"
    F2 = 87,
    //% block="G2"
    G2 = 98,
    //% block="A2"
    A2 = 110,
    //% block="B2"
    B2 = 124,
    //% block="C3"
    C3 = 131,
    //% block="D3"
    D3 = 147,
    //% block="E3"
    E3 = 165,
    //% block="F3"
    F3 = 175,
    //% block="G3"
    G3 = 196,
    //% block="A3"
    A3 = 220,
    //% block="B3"
    B3 = 247,
    //% block="C4"
    C4 = 262,
    //% block="D4"
    D4 = 294,
    //% block="E4"
    E4 = 330,
    //% block="F4"
    F4 = 349,
    //% block="G4"
    G4 = 392,
    //% block="A4"
    A4 = 440,
    //% block="B4"
    B4 = 494,
    //% block="C5"
    C5 = 523,
    //% block="D5"
    D5 = 587,
    //% block="E5"
    E5 = 659,
    //% block="F5"
    F5 = 699,
    //% block="G5"
    G5 = 784,
    //% block="A5"
    A5 = 880,
    //% block="B5"
    B5 = 988,
    //% block="C6"
    C6 = 1047,
    //% block="D6"
    D6 = 1175,
    //% block="E6"
    E6 = 1319,
    //% block="F6"
    F6 = 1397,
    //% block="G6"
    G6 = 1568,
    //% block="A6"
    A6 = 1760,
    //% block="B6"
    B6 = 1976,
    //% block="C7"
    C7 = 2093,
    //% block="D7"
    D7 = 2349,
    //% block="E7"
    E7 = 2637,
    //% block="F7"
    F7 = 2794,
    //% block="G7"
    G7 = 3136,
    //% block="A7"
    A7 = 3520,
    //% block="B7"
    B7 = 3951,
    //% block="C8"
    C8 = 4186,
    //% block="D8"
    D8 = 4699,
    //% block="E8"
    E8 = 5274,
    //% block="F8"
    F8 = 5588,
    //% block="G8"
    G8 = 6272,
    //% block="A8"
    A8 = 7040,
    //% block="B8"
    B8 = 7902
}

/**
 * 自定义图形块
 */
//% weight=0 color=#3CB371 icon="\uf0ad" block="roboloq"
namespace robobloq {
    let flagInit :number = 0;
    const pro = new Protocol();
    const rb = new Robot();

    //% blockId="robobloqInit" block="Robobloq init"
    export function robobloqInit(): void {
        rb.SystemInit();
    }

    //% blockId="lightRgb" block="set %e| in LED panel red %red|green %green | blue %blue"
    export function lightRgb(e:lightEnum,red:number,green:number,blue:number): void {
        let oid = 0;// rb.orderId(); //0;
        let list = pro.setLed(oid,e,red,green,blue);
        rb.write(list);
    }

    //% blockId="getUltrasonicValue" block="read ultrasonic sensor %e"
    export function getUltrasonicValue(e:portEnum): number {
        let oid = rb.orderId();
        let list = pro.getUltrasonicValue(oid,e);
        rb.write(list);
        basic.pause(200);
        rb.read();
        let item = rb.getDataItem(oid,0);
        return pro.parseUltrasonicValue(item);
    }

    //% blockId="setBuzzer" block="play note on %rate | beat %time |s"
    export function setBuzzer(rate:enumSoundRate, time:enumSoundTime): void {
        let oid = 0;
        let list = pro.setBuzzer(oid,rate,time);
        console.log(pro.listToString(list) );
        rb.write(list);
        basic.pause(time);
    }

    //% blockId="setUltrasonicLight" block="set %e| the ultrasonic red %red|green %green | blue %blue"
    export function setUltrasonicLight(e:portEnum,red:number,green:number,blue:number): void {
        let oid = 0;
        let list = pro.setUltrasonicLight(oid,e,red,green,blue);
        rb.write(list);
    }

    //% blockId="setMove" block="set motor M1 %m1Speed|M2 %m2Speed"
    export function setMove(m1Speed:number, m2Speed:number): void {
        let oid = 0;
        let list = pro.setMove(oid,m1Speed, m2Speed);
        rb.write(list);
    }

    //% blockId="setEngine" block="set the steering gear %port |plug%type |angle%angle"
    export function setEngine(port: portEnum, type: engineEnum, angle: number): void {
        let oid = 0;
        let radian2 = 0; 
        let list = pro.setEngine(oid, port, type, angle, radian2);
        rb.write(list);
    }
    //% blockId="setOutEngine" block="set the motor %port |plug%type |%Direction |motion, at speed%speed"
    export function setOutEngine(port: portEnum, type: engineEnum, Direction: directionEnum2, speed:number): void {
        let order = 0;
        switch(Direction){
        case 0:
            speed = speed;
            break;
        case 1:
            speed = -speed;
            break;
        }
        let list = pro.setOutEngine(order, port, type, speed, speed);
        rb.write(list);
    }

    //% blockId="setMove2" block="set motor %Direction|Speed %Speed"
    export function setMove2(Direction:directionEnum, Speed:number): void {
        let oid = 0;
        let right = 0;
        let left = 0;
        switch(Direction){
        case 0:
            right = Speed;
            left = Speed;
            break;
        case 1:
            right = -Speed;
            left = -Speed;
            break;
        case 2:
            right = -Speed;
            left = Speed;
            break;
        case 3:
            right = Speed;
            left = -Speed;
            break;
        }
        let list = pro.setMove(oid,right, left);
        rb.write(list);
    }

    //% blockId="setMp3" block="Mp3 %port| %action"
    export function setMp3(port: portEnum, action: mp3Enum1): void{
        let oid = 0;
        let info = 0;
        switch(action){
        case 0:
            action = 0x04;
            info = 0x02;
            break;
        case 1:
            action = 0x04;
            info = 0x01;
            break;
        case 2:
            action = 0x05;
            info = 0x01;
            break;
        case 3:
            action = 0x05;
            info = 0x02;
             break;
        }
        let list = pro.setMp3(oid, port, action, info);
        rb.write(list);
    }
    //% blockId="setMp3Sound" block="MP3 %port |sound%sound"
    export function setMp3Sound(port: portEnum, sound: number): void {
        let oid = 0;
        let list = pro.setMp3(oid, port, 0x03, sound);
        rb.write(list);
    }
    //% blockId="getSoundValue" block="%port |get the value of the sound sensor"
    export function getSoundValue(port: portEnum): number {
        let orid = rb.orderId();
        let list = pro.getSoundValue(orid, port);
        rb.write(list);
        basic.pause(200);
        rb.read();
        let item = rb.getDataItem(orid,0);
        return pro.parseSoundValue(item);
    }
    //% blockId="getLightValue" block="%port |get the light sensor value"
    export function getLightValue(port: portEnum): number {
        let orid = rb.orderId();
        let list = pro.getLightValue(orid, port);
        rb.write(list);
        basic.pause(200);
        rb.read();
        let item = rb.getDataItem(orid,0);
        return pro.parseLightValue(item);
    }
    //% blockId="getHomanValue" block="%port |get the human sensor value"
    export function getHomanValue(port: portEnum): number {
        let orid = rb.orderId();
        let list = pro.getHomanValue(orid, port);
        rb.write(list);
        basic.pause(200);
        rb.read();
        let item = rb.getDataItem(orid,0);
        return pro.parseHomanValue(item);
    }
    //% blockId="getTemperatureValue" block="%port |obtain the temperature sensor value"
    export function getTemperatureValue(port: portEnum): number {
        let orid = rb.orderId();
        let list = pro.getTemperatureValue(orid, port);
        rb.write(list);
        basic.pause(200);
        rb.read();
        let item = rb.getDataItem(orid,0);
        return pro.parseTemperatureValue(item);
    }
    //% blockId="getHumidityValue" block="%port |obtain the humidity sensor value"
    export function getHumidityValue(port: portEnum): number {
        let orid = rb.orderId();
        let list = pro.getTemperatureValue(orid, port);
        rb.write(list);
        basic.pause(200);
        rb.read();
        let item = rb.getDataItem(orid,0);
        return pro.parseHumidityValue(item);  
    }
    /**
     * robot
     */
    export class Robot {
        OrderIndex:number ;
        dataList:Array<number[]> ;

        init():void{
            this.OrderIndex = 1;
            this.dataList = [];
        }
        /**
         * 生成订单ID
         */
        orderId():number {
            if(!this.OrderIndex) this.OrderIndex = 1;
            this.OrderIndex++;
            const maxId:number = 255;
            if (this.OrderIndex >= maxId) {
                this.OrderIndex = 2;
            }
            return this.OrderIndex;
        }

        /**
         * 取主板返回的数据
         * @param oid =0为主动上报，其它为正常请求数据；
         * @param act 主动上报的类型
         */
        getDataItem(oid:number,act:number):number[]{
            let item:number[] =[];
            let size:number = this.dataList.length;
            if(size<=0)return item;
            for(let i=0;i<size;i++){
                 let it:number[] = this.dataList[i];
                 if(it.length <=3) continue;
                 //正常数据
                 if(oid >0 && it[3]== oid){
                     item = it;
                     //担心 这里会删除错误
                    this.dataList.splice(i, 1);
                    //return item;
                 }
                 //主动上报数据
                 if(oid == 0 && it[4]== act){
                    item = it;
                    this.dataList.splice(i, 1);
                 }
            }
            if(size >= 250){
                this.dataList =[];
            }
            return item;
        }

        dataPush(db:string):void{
            let d:number[] = this.dataFormat(db);
            if(d !=[] && d.length >2 ){
                let size :number = d.length ;
                if(size <3)return;
                this.dataList.push(d);
                //basic.showString("M"+ this.dataList.length );
                //basic.showString("W"+ pro.listToString(d) );
            }
        }
    
        dataFormat(db:string):number[]{
            let list :number[] = [];
            if(db && db.length >2){
                let size :number = db.length ;
                if(size <1)return list;
                //let st =":";
                for(let i=0;i< size;i++){
                    list.push(db.charCodeAt(i));
                    //st = st+"."+db.charCodeAt(i);
                }
            }
            return list;
        }

        write(list:number[]):void{
            this.SystemInit();
            let size = list.length ;
            let buffer = pins.createBuffer(size);
            for(let i:number=0;i<size;i++){
                buffer.setNumber(NumberFormat.Int8LE, i, list[i]);
            }
            serial.writeBuffer(buffer);
            basic.pause(20);
            //this.read();
        }
    
        read():void{
            let db = serial.readString();
            if(db && db.length >4){
                this.dataPush(db);
            }
        }

        SystemInit(): void {
            if(flagInit ==1) return;
            serial.redirect(
                SerialPin.P0,
                SerialPin.P1,
                BaudRate.BaudRate57600 //BaudRate115200
            )
            this.init();
            // 要加这个[serial.readString]，如果不加会卡死；
            let data2 = serial.readString();
            this.dataPush(data2);
            flagInit =1;
        }
    }

    /**
     * 通信协议
     */
    export class Protocol
    {
        getTestLeb(item:number[]):number {
            if(item.length >=4){
                return item[4];
            }
            return 0;
        }

        /**
         * 获取超声波数值
         *
         * @param {any} order 命令序号
         * @param {any} port 端口
         */
        getUltrasonicValue(order:number, port:number):number[] {
            let size:number = 7 ;
            let list:number[]=[82,66,size,order, 0xA1,port,0];
            list[size-1] = this.sumCheck(list,0);
            return list;
        }
        //  获取超声波数值（单位 cm）
        parseUltrasonicValue(itme:number[]):number {
            if (!itme || itme.length < 6) return 0;
            const value :number= itme[5]  * 256 + itme[6];
            return (value / 10);
        }
        // 获取声音传感器数值
        parseSoundValue(itme: number[]): number{
            if (!itme || itme.length <= 5) return 0;
            const value = itme[5]* 256 + itme[6];
            return value;
        }
        // 获取光线传感器数值
        parseLightValue (itme: number[]): number{
            if (!itme || itme.length <= 5) return 0;
            const value = itme[5]* 256 + itme[6];
            return value;
        }
        // 获取人体红外传感器数值
        parseHomanValue(itme: number[]): number{
            if (!itme || itme.length <= 5) return 0;
            const value = itme[5];
            return value;
        }
        // 获取温度传感器数值
        parseTemperatureValue(itme: number[]): number{
            if (!itme || itme.length <= 5) return 0;
            const value = itme[5] + itme[6];
            return value;
        }
        // 获取湿度传感器数值
        parseHumidityValue(itme: number[]): number{
            if (!itme || itme.length <= 5) return 0;
            const value = itme[5];
            return value;
        }
        // 设置超声波灯光
        setUltrasonicLight(order:number, port:number, red:number, green:number, blue:number) :number[] {
            let size:number = 10 ;
            let list:number[]=[82,66,size,order, 0x12,port,red,green,blue,0];
            list[size-1] = this.sumCheck(list,0);
            return list; 
        }

        // 设置点阵屏
        setMatrix(order:number, port:number, rows:number[]):number[] {
            let size:number = 27 ;
            let list:number[]=[82,66,size,order, 0x14,port,rows[0],0];
            let j :number = 6 ;
            for(let i:number=0;i<10;i++){
                let l1:number[] = this.Int16BE(rows[i]);
                list[j]= l1[0];
                list[j+1]= l1[1];
                j = j+2 ;
            }
            list[size-1] = this.sumCheck(list,0);
            return list;
        }
        // 设置
        setBuzzer(order:number, rate:number, time:number):number[] {
            let size:number = 11 ;
            let l1:number[] = this.Int16BE(rate);
            let l2:number[] = this.Int16BE(time);
            let list:number[]=[82,66,size,order, 0x13,0xfa,l1[0],l1[1],l2[0],l2[1],0];
            list[size-1] = this.sumCheck(list,0);
            return list;
        }
        // 板载电机
        setMove(order:number, m1Speed:number, m2Speed:number):number[] {
            let size:number = 9 ;
            let list:number[]=[82,66,size,order, 0x11,0,m1Speed,m2Speed,0];
            list[size-1] = this.sumCheck(list,0);
            return list;
        }

        // 设置 mp3播放歌曲
        setMp3(order: number, port: number,action: number, info: number ): number[]{
            let size: number = 10 ;
            let list: number[]= [82,66, size, order, 0x1C, port, 0x03, action, info,0];
            list[size-1] = this.sumCheck(list,0);
            return list;
        }

        // 设置舵机角度
        setEngine(order: number, port: number, engine: number, radian1: number, radian2:number): number[]{
            let size: number = 10 ;
            let list: number[]= [82,66, size, order, 0x19, port, radian1, radian2,0];
            list[size-1] = this.sumCheck(list,0);
            return list;
        }

        // 设置外置电机
        setOutEngine(order:number, port:number, engine:number, radian1:number, radian2:number): number[]{
            let size: number = 10 ;
            let list: number[]= [82,66, size, order,  0x1a, port, engine, radian1, radian2, 0];
            list[size-1] = this.sumCheck(list,0);
            return list;
        }
        // 获取声音传感器数值
        getSoundValue(order: number, port: number): number[]{
            let size: number = 7 ;
            let list: number[]= [82,66, size, order, 0xA7, port,0];
            list[size-1] = this.sumCheck(list,0);
            return list;
        }
        // 获取光线传感器数值
        getLightValue(order: number, port: number): number[]{
            let size: number = 7 ;
            let list: number[]= [82,66, size, order, 0xA6, port,0];
            list[size-1] = this.sumCheck(list,0);
            return list;
        }
        // 获取人体红外传感器数值
        getHomanValue(order: number, port: number): number[]{
            let size: number = 7 ;
            let list: number[]= [82,66, size, order, 0XA8, port,0];
            list[size-1] = this.sumCheck(list,0);
            return list;
        }
        // 获取温度传感器数值 获取湿度传感器数值
        getTemperatureValue(order: number, port: number): number[]{
            let size: number = 7 ;
            let list: number[]= [82,66, size, order, 0xA5, port,0];
            list[size-1] = this.sumCheck(list,0);
            return list;
        }
        // 获取陀螺仪传感器数值
        getGyroValue(order: number, port: number): number[]{
            let size: number = 7 ;
            let list: number[]= [82,66, size, order, 0XA9, port,0];
            list[size-1] = this.sumCheck(list,0);
            return list;
        }

        setMotor(order:number, port:number, speed:number):number[]{
            let size:number = 8 ;
            let list:number[]=[82,66,size,order, 0x11,port,speed,0];
            list[size-1] = this.sumCheck(list,0);
            return list;
        }
        // 设置板载灯
        setLed(order:number,port:number,red:number,green:number,blue:number):number[]{
            let size:number =10 ;
            let list:number[]=[82,66,size,order,16,port,red,green,blue,0];
            list[size-1] = this.sumCheck(list,0);
            return list;
        }

        sumCheck(list:number[],type:number):number {
            let sum = 0;
            let length = list.length;
            if(type ===1){
                length = list.length -1;
            }
            for (let i = 0; i < length; i++) {
                sum += list[i];
            }
            return sum % 256;
        }

        //储存12: Int16BE用<00 0c> , Int16LE用<0c 00>
        Int16BE(v:number):number[]{
            let ls:number[] =[0,0];
            ls[0] = (v / 256);
            ls[1] = (v % 256);
            return ls;
        }

        listToString(list:number[]):string{
            let st =":";
            let size :number = list.length ;
            if(size <1)return st;
            for(let i=0;i< size;i++){
                st = st+"."+list[i];
            }
            return st;
        }
    }


}

