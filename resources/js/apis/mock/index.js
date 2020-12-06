import { createServer, Model } from "miragejs"

const postsMock = [
    {
        id: 1,
        title: 'Post 1',
        content: 'Lorem ipsumsed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapi',
        image: 'https://via.placeholder.com/300x300'
    }, {
        id: 2,
        title: 'Post 2',
        content: 'Lorem ipsumsed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapi',
        image: 'https://via.placeholder.com/300x300'
    }, {
        id: 3,
        title: 'Post 3',
        content: 'Lorem ipsumsed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapi',
        image: 'https://via.placeholder.com/300x300'
    }, {
        id: 4,
        title: 'Post 4',
        content: 'Lorem ipsumsed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapi',
        image: 'https://via.placeholder.com/300x300'
    }
]

export default function createMock(){
    createServer({
        models: {
            post: Model,
        },

        routes() {
            this.passthrough();
            this.namespace = "api/v1";
            this.logging = false;

            this.get("/posts");

            this.get("/posts/:id", (schema, request) => {
                let id = request.params.id

                return schema.posts.find(id)
            }, {timing: Math.round(Math.random() * 1000)})

            this.post("/posts", (schema, request) => {
                let attrs = JSON.parse(request.requestBody);
                const id = schema.posts.all().length + Math.round(Math.random() * 100);
                return schema.posts.create({
                    id,
                    ...attrs
                })
            }, {timing: Math.round(Math.random() * 1000)})

            this.patch('/posts/:id', (schema, request) => {
                let newAttrs = JSON.parse(request.requestBody)
                let id = request.params.id
                let post = schema.posts.find(id)

                return post.update(newAttrs)
            }, {timing: Math.round(Math.random() * 1000)});

            this.delete('/posts/:id', (schema, request) => {
                let id = request.params.id
                schema.posts.find(id).destroy();
            }, {timing: Math.round(Math.random() * 1000)})
        },

        seeds(server) {
            postsMock.forEach(post => {
                server.create("post", post)
            })
        }
    })
}
