
/**
 * 37907909@qq.com
 * 使用此文件来定义自定义函数和图形块。
 * 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
 */


enum lightEnum {
    //% block="double"
    double =0,
    //% block="left"
    left= -4,
    //% block="right"
    right = -5
}

enum portEnum {
    //% block="port1"
    port1=1,
    //% block="port2"
    port2=2,
    //% block="port3"
    port3=3,
    //% block="port4"
    port4=4,
    //% block="port5"
    port5=5,
    //% block="port6"
    port6=6,
    //% block="port7"
    port7=7,
    //% block="port8"
    port8=8,
}

enum enumSoundTime {
    //% block="Half"
    half=500,
    //% block="Quarter"
    quarter=250,
    //% block="Eighth"
    eighth=125,
    //% block="Whole"
    whole=1000,
    //% block="Double"
    double=2000
}

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
//% weight=0 color=#3CB371 icon="\uf0ad" block="Roboloq"
namespace robobloq {
    let flagInit :number = 0;
    const pro = new Protocol();
    const rb = new Robot();
    //let data ="";
    
    //% blockId="ts1" block="ts1 %e"
    export function ts1(e:enumSoundTime): string {
        let a = pro.Int16BE(e);
        return pro.listToString(a) ;
    }

    //% blockId="robobloqInit" block="Robobloq init"
    export function robobloqInit(): void {
        rb.SystemInit();
    }

    //% blockId="lightRgb" block="set %e| in LED panel red %red|green %green | blue %blue"
    export function lightRgb(e:lightEnum,red:number,green:number,blue:number): void {
        let oid = 0;// rb.orderId(); //0;
        let list = pro.setLed(oid,e,red,green,blue);
        rb.write(list);
        //console.log("rb:led:"+ oid );
    }

    //% blockId="getUltrasonicValue" block="read ultrasonic sensor %e"
    export function getUltrasonicValue(e:portEnum): number {
        let oid = rb.orderId();
        let list = pro.getUltrasonicValue(oid,e);
        rb.write(list);
        basic.pause(200);
        let item = rb.getDataItem(oid,0);
        return pro.parseUltrasonicValue(item);
    }

    //% blockId="testBack" block="testBack set %e| in LED panel red %red|green %green | blue %blue"
    export function testBack(e:lightEnum,red:number,green:number,blue:number): number {
        let oid = rb.orderId();
        let list = pro.setLed(oid,e,red,green,blue);
        rb.write(list);
        basic.pause(200);
        let item = rb.getDataItem(oid,0);
        return pro.getTestLeb(item);
    }

     //% blockId="setBuzzer" block="set sound rate %rate|time %time"
     export function setBuzzer(rate:enumSoundRate, time:enumSoundTime): void {
        let oid = 0;
        let list = pro.setBuzzer(oid,rate,time);
        rb.write(list);
    }

    //% blockId="setUltrasonicLight" block="set %e| in UltrasonicLight panel red %red|green %green | blue %blue"
    export function setUltrasonicLight(e:portEnum,red:number,green:number,blue:number): void {
        let oid = 0;
        let list = pro.setUltrasonicLight(oid,e,red,green,blue);
        rb.write(list);
    }

    //% blockId="setMove" block="set Move M1 %m1Speed|M2 %m2Speed"
    export function setMove(m1Speed:number, m2Speed:number): void {
        let oid = 0;
        let list = pro.setMove(oid,m1Speed, m2Speed);
        rb.write(list);
    }

    //% blockId="testSound" block="testSound"
    export function testSound(): void {
        //5242 0b04 13fa 052a 03e8 ca
        let date = pins.createBuffer(11)
        date.setNumber(NumberFormat.Int8LE, 0, 0x52)
        date.setNumber(NumberFormat.Int8LE, 1, 0x42)
        date.setNumber(NumberFormat.Int8LE, 2, 0x0b)
        date.setNumber(NumberFormat.Int8LE, 3, 0x04)
        date.setNumber(NumberFormat.Int8LE, 4, 0x13)
        date.setNumber(NumberFormat.Int8LE, 5, 0xfa)
        date.setNumber(NumberFormat.Int8LE, 6, 0x05)
        date.setNumber(NumberFormat.Int8LE, 7, 0x2a)
        date.setNumber(NumberFormat.Int8LE, 8, 0x03)
        date.setNumber(NumberFormat.Int8LE, 9, 0xe8)
        date.setNumber(NumberFormat.Int8LE, 10, 0xca)
        serial.writeBuffer(date)
        basic.pause(1500)
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
                rb.dataList.push(d);
                //basic.showString("M"+ rb.dataList.length );
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
                //rb.dataList.push(list);
                //basic.showNumber(size);
                //basic.showString(st+","+ size);
                //basic.showString("S"+ rb.dataList.length );
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
            this.read();
        }
    
        read():void{
            let db = serial.readString();
            if(db && db.length >2){
                this.dataPush(db);
            }
        }

        SystemInit(): void {
            if(flagInit ==1) return;
            serial.redirect(
                SerialPin.P1,
                SerialPin.P0,
                BaudRate.BaudRate115200
            )
            this.init();
            //let onBuffer: Buffer = serial.readBuffer(64);
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

        // getPortValue(e:portEnum):number{
        //     let v :number =2;
        //     if(e = portEnum.port1) v= 1;
        //     else if(e = portEnum.port2) v= 2;
        //     else if(e = portEnum.port3) v= 3;
        //     else if(e = portEnum.port4) v= 4;
        //     else if(e = portEnum.port5) v= 5;
        //     else if(e = portEnum.port6) v= 6;
        //     else if(e = portEnum.port7) v= 7;
        //     else if(e = portEnum.port8) v= 8;
        //     return v;
        // }

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
        /**
         * 获取超声波数值（单位豪米）
         */
        parseUltrasonicValue(itme:number[]):number {
            if (!itme || itme.length < 6) return 0;
            const value :number= itme[5]  * 256 + itme[6];
            return value;
        }
        /**
         * 设置超声波灯光
         */
        setUltrasonicLight(order:number, port:number, red:number, green:number, blue:number) :number[] {
            let size:number = 10 ;
            let list:number[]=[82,66,size,order, 0x12,port,red,green,blue,0];
            list[size-1] = this.sumCheck(list,0);
            return list; 
        }

        /**
        * 设置点阵屏
        */
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

        setBuzzer(order:number, rate:number, time:number):number[] {
            let size:number = 11 ;
            let l1:number[] = this.Int16BE(rate);
            let l2:number[] = this.Int16BE(time);
            let list:number[]=[82,66,size,order, 0x13,0xfa,l1[0],l1[1],l2[0],l2[1],0];
            list[size-1] = this.sumCheck(list,0);
            return list;
        }

        setMove(order:number, m1Speed:number, m2Speed:number):number[] {
            let size:number = 9 ;
            let list:number[]=[82,66,size,order, 0x11,0,m1Speed,m2Speed,0];
            list[size-1] = this.sumCheck(list,0);
            return list;
        }

        setMotor(order:number, port:number, speed:number):number[]{
            let size:number = 8 ;
            let list:number[]=[82,66,size,order, 0x11,port,speed,0];
            list[size-1] = this.sumCheck(list,0);
            return list;
        }

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
            ls[0] = (v / 16);
            ls[1] = (v % 16);
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

