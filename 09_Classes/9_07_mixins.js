//Примеси

//это классы, меоды которых предназначены для использования в других классах без наследования

let newMixin = {
    sayHi() {
        console.log(`Hi, ${this.name}`);
    },
};

class ForMixin {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(ForMixin.prototype, newMixin);

// new ForMixin("Kitty").sayHi(); //Hi, Kitty

//Миксины могут наследовать друг друга

//EventMixin
//Создадим миксин, который сможет генерировать события, назнать обработчик и удалять гео

let eventMixin = {
    //_eventHandlers = {
    // eventName: [handler1, handler2...]
    // }

    // Подписаться на событие, использование:
    // menu.on('select', function(item) { ... }

    on(eventName, handler) {
        if (!this._eventHandlers) this._eventHandlers = {}; //если нет _eventHandlers, создаём пустой объект
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = []; //если нет eventName, создаём пустой массив, чтобы пушить
        }
        this._eventHandlers[eventName].push(handler);
    },

    //Отменить подписку, использование:
    //menu.off('select', handler)

    off(eventName, handler) {
        let handlers = this._eventHandlers && this._eventHandlers[eventName]; //возвращает булево значение
        if (!handlers) return; //если handlers пустой, обрывает return, иначе:
        for (let i = 0; i < handlers.length; i++) {
            if (handlers[i] === handler) {
                //если есть такой handler в handlers, то
                handlers.splice(i--, 1); //вырезает его
            }
        }
    },

    // Сгенерировать событие с указанным именем и данными
    // this.trigger('select', data1, data2);

    trigger(eventName, ...args) {
        if (!this._eventHandlers || !this._eventHandlers[eventName]) {
            return; // обработчиков для этого события нет
        }

        // вызовем обработчики
        this._eventHandlers[eventName].forEach((handler) =>
            handler.apply(this, args)
        );
    },
};
