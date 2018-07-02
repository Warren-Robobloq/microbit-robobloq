
/**
 * 
 */
//% weight=0 color=#3CB371 icon="\uf544" block="Roboloq"
namespace robobloq {

    let tool= new SerialTool();

    /**
    * Test
    */
    //% blockId="gsTest" block="start test"
    //% blockGap=2 weight=1
    export function gsTest(): void {
        console.log("test:18-7-2:1507");
        basic.showNumber(1);
        tool.test(); 
    }

    /**
    * 計算長方形面積，並回傳
    */
    //% blockId="areaOfRectangle" block="area of rectangle length %length|width %width"
    //% blockGap=2 weight=0 blockExternalInputs=true
    export function areaOfRectangle(length: number, width:number): number {
        return length*width
    }
    /**
    * 計算長方形面積，不回傳，只顯示在LED
    */
    //% blockId="ledOfRectangle" block="show area of rectangle length %length|width %width"
    //% blockGap=2 weight=1
    export function ledOfRectangle(length: number, width:number): void {
        basic.showNumber(length*width)
    }

    /**
     * tool
     */
    export class SerialTool
    {
        
        serial.redirect(
            SerialPin.P1,
            SerialPin.P0,
            BaudRate.BaudRate115200
        )

        test(){
            let date = pins.createBuffer(10);
            date.setNumber(NumberFormat.Int8LE, 0, 82);
            date.setNumber(NumberFormat.Int8LE, 1, 66);
            date.setNumber(NumberFormat.Int8LE, 2, 10);
            date.setNumber(NumberFormat.Int8LE, 3, 0);
            date.setNumber(NumberFormat.Int8LE, 4, 16);
            date.setNumber(NumberFormat.Int8LE, 5, 0);
            date.setNumber(NumberFormat.Int8LE, 6, 0);
            date.setNumber(NumberFormat.Int8LE, 7, 0);
            date.setNumber(NumberFormat.Int8LE, 8, 0);
            date.setNumber(NumberFormat.Int8LE, 9, 174);
            serial.writeBuffer(date);
            basic.pause(500);
            date.setNumber(NumberFormat.Int8LE, 0, 82);
            date.setNumber(NumberFormat.Int8LE, 1, 66);
            date.setNumber(NumberFormat.Int8LE, 2, 10);
            date.setNumber(NumberFormat.Int8LE, 3, 0);
            date.setNumber(NumberFormat.Int8LE, 4, 16);
            date.setNumber(NumberFormat.Int8LE, 5, 0);
            date.setNumber(NumberFormat.Int8LE, 6, 200);
            date.setNumber(NumberFormat.Int8LE, 7, 50);
            date.setNumber(NumberFormat.Int8LE, 8, 50);
            date.setNumber(NumberFormat.Int8LE, 9, 218);
            serial.writeBuffer(date);
            basic.pause(500);
        }

    }
}