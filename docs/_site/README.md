## Github Pages Quickstart

*When running Git Pages locally I operate out of two windows, one for Git Bash and another for running Jekyll locally, since they operate in different folders*

### Local environment

#### Prerequisite
 1. HTTPS Access to the Git repository, steps can be found [here](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line)
    * Clone the Dojo repo to your local device
    * Personally I operate out of Git Bash window
 2. To run Jekyll locally you will need to install Ruby (version 2.1.0 or higher)
    * Check your version `ruby --version`
    * [Windows](https://rubyinstaller.org/downloads/)
    * Mac & Linux [rbenv](https://github.com/rbenv/rbenv) and [RVM](http://rvm.io/)
 3. Once Ruby is installed open a command window with Ruby and install bundler
    * `gem install bundler`
 4. In the Ruby window, navigate to the root directory of the Jekyll site and install Jekyll
    * `bundle install`
    * Root directory - the repository's /docs folder or where the site runs out of
    * This will install all gems currently listed in the Gemfile

[GitHub Pages - Locally with Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)

#### Running Locally

 1. Open a command window with Ruby and navigate to the root directory of the Jekyll site
    * `bundle update`
    * Root directory - the repository's /docs folder or where the site runs out of
    * This will update all gems currently listed in the Gemfile
 2. Run Jekyll to serve your site locally
    * `bundle exec jekyll serve`
 3. View your site at the address provided by Jekyll (by default, <http://localhost:4000>)
 4. Any changes to the site files will recompile in the Ruby window
    * Wait for the recompile to complete before refreshing the page
    * Sometimes the window will stick, make sure the window is active and hit enter
 5. To stop Jekyll, ctrl + c
