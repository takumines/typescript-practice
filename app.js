"use strict";
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('エラーが発生しました。', 400);
