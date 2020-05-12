Vue.component('blog-post', {
    props: ['blog'],
    template: `
     <div class="blog article one">
     <h2> {{blog.title}} </h2>
     <h6>By {{blog.author}} on {{blog.date}} </h6>
     <p> {{blog.content}}
     </p>
     </div>`
});
const blogs = [
    {
        id: 1,
        title: 'Learning Javascript',
        author: 'M-tee',
        date: 'Thu apr 23 2020 10:43 GMT -00400 (Eastern Daylight Time)',
        content: 'dolor  sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.'
    },
    {
        id: 2,
        title: 'Learning Javascript',
        author: 'M-tee',
        date: 'Thu apr 23 2020 10:43 GMT -00400 (Eastern Daylight Time)',
        content: 'dolor  sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.'
    }
];

new Vue({
    el: '#blog-section',
    data: {
        blogs
    }
  
});