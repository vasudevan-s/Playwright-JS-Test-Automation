/*
    Created by Vasudevan Sampath
    This class has common utility methods
 */
export class Misc {

    static generateUUID() {
        return crypto.randomUUID();
    }

    static getStringArray(delimitedText, delimiter) {
            return delimitedText.split(delimiter);
    }
}