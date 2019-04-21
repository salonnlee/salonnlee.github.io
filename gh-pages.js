const ghpages = require('gh-pages');

ghpages.publish(
    'build',
    {
        user: {
            name: 'salonnlee',
            emial: 'huanghj199512@163.com'
        },
        branch: 'master',
        repo: 'https://github.com/salonnlee/salonnlee.github.io.git',
        message: '更新：' + new Date().toLocaleString()
    },
    err => {
        if (err) {
            console.log('Gh Pages Publish Failed, ', err);
        }
        console.log('Gh Pages Publish Success.');
    }
);
