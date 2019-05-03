const ghpages = require("gh-pages");

ghpages.publish(
    "build",
    {
        user: {
            name: "salonnlee",
            email: "huanghj199512@163.com"
        },
        branch: "master",
        repo: "https://github.com/salonnlee/salonnlee.github.io.git",
        message: "更新：" + new Date().toLocaleString()
    },
    err => {
        if (err) {
            console.log("Github Pages Publish Failed, ", err);
        }
        console.log("Github Pages Publish Success.");
    }
);
