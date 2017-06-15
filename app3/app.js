function ajax() {
    this.req = null;

    this.default = function (method, url, headers) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        setHeaders(xhr, headers);
        this.req = xhr;

        return xhr;
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