#include "pxt.h"

namespace robobloq {

    /**
    * Send a buffer through serial connection
    */
    //% blockId=robobloq_writebuffer block="robobloq|write buffer %buffer=serial_readbuffer"
    //% help=robobloq/write-buffer advanced=true weight=6
    void writeBuffer(Buffer buffer) {
      if (!buffer) return;

      uBit.serial.send(buffer->data, buffer->length);
    }
}