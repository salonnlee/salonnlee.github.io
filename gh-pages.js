const ghpages = require('gh-pages');

ghpages.publish(
    'dist',
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
            console.log('ghpages publish failed, ', err);
        }
        console.log('ghpages publish success.');
    }
);
