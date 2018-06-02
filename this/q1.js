var x = {
    text: 'hello',
    f: function () {
        return function () {
            console.log(this.text);
        } // .bind(x);
    }
};

var t = x.f();
t(); // undefined

t.call(x); // hello
t.apply(x); // hello

var j = x.f().bind(x);
j();