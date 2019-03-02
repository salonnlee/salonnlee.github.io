const ghpages = require('gh-pages');

ghpages.publish(
    'build',
    {
        branch: 'master',
        repo: 'git@github.com:salonnlee/salonnlee.github.io.git',
        message: '更新：' + new Date().toLocaleString()
    },
    err => {
        if (err) {
            console.log('ghpages error: ', err);
        }
        console.log('publish success.');
    }
);
