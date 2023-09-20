

>[!info] Command to assume unchanged content directory.
>`git ls-files -z content/ | xargs -0 git update-index --assume-unchanged`