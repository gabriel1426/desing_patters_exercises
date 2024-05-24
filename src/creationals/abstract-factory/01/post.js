"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var Post = /** @class */ (function () {
    function Post(content) {
        this.content = content;
    }
    Post.prototype.send = function (factory) {
        var connection = factory.getConnector();
        var publisher = factory.getPublisher(connection);
        connection.open();
        publisher.publish(this.content);
        connection.close();
    };
    return Post;
}());
exports.Post = Post;
