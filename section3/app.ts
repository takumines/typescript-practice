function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code }
}

generateError('エラーが発生しました。', 400);