var a = [
    {userName:"Test",lastName:"Test",email:"test.test@gmail.com"},
    {userName:"Dmitro",lastName:"Porohov",email:"dmitro.porohov@yahoo.com"},
    {userName:"Andrii",lastName:"",email:"andrii@mail.ru"},
    {userName:"Oleg",lastName:"Sidorov",email:"oleg.sidorov.test@gmail.com"}
];

var result = [];

var r = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

for (var i = 0; i < a.length; i++) {
    var e = a[i].email;
    if (r.test(e)) {
        result.push(e);
    }
}

console.log(result);

