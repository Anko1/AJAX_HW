function ajax(params) {
    this.req = null;

    this.main = function (method, url, headers, auto) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        setHeaders(xhr, headers);
        this.req = xhr;

        if(auto) xhr.send();

        return xhr;
    };

    if(params){
        var m = 'GET', u = null, h = null;
        
        if('method' in params){ m = params.method;}
        if('url' in params){ u = params.url;}
        if('headers' in params){ h = params.headers;}

        //console.log(m, u, h);

        if(u) this.main(m, u, h, true);
    }
}

ajax.prototype.done = function (cb) {
    var r = this.req;

    r.onload = function () {
        if (r.status != 200) {
            alert(r.status + ': ' + r.statusText);
        } else {
            cb(r.responseText);
        }
    }
};

ajax.prototype.get = function (url, headers) {
    var xhr = this.default('GET', url, headers);
    xhr.send();

    return this;
};

ajax.prototype.post = function (url, data, headers) {
    var xhr = this.default('POST', url, headers);
    xhr.send(data);

    return this;
};

ajax.prototype.head = function (url, data, headers) {
    var xhr = this.default('HEAD', url, headers);
    xhr.send();

    return this;
};

ajax.prototype.put = function (url, data, headers) {
    var xhr = this.default('PUT', url, headers);
    xhr.send();

    return this;
};

function setHeaders(xhr, params) {
    if (params) {
        // console.log(typeof params);
        var keys = Object.keys(params);
        var values = Object.values(params);

        for(var i = 0; i < keys.length; i++)
        {
            xhr.setRequestHeader(keys[i], values[i]);
        }
    }
}
