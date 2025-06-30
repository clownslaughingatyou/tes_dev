/**
 * @func 基于localStorage封装的Storage类,单例模式
 * @author jj
 -* @date 2024-7-4
 */

// 语法糖
class Storage {
    // static instance;
    static getInstance() {
        // JS 动态 static 属性
        // JS 没有类，都是对象
        if (!Storage.instance) {
            Storage.instance = new Storage();
        }
        return Storage.instance;
    }

    getItem(key) {
        return localStorage.getItem(key);
    }
    setItem(key, value) {
        localStorage.setItem(key, value);
    }
}   

// new Storage();

export default Storage;