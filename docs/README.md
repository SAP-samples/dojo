# Local development environment

This page explains how to run the Dojo page on your local development environment.

## Prerequisite
 
1. A local git setup that can clone repositories from github.com, documentation can be found at the [Set up Git](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git) page on the GitHub documentation
2. A local clone of the source code 
3. A working installation of Ruby 2.1.0 or higher:
    * Check your version with the command `ruby --version`
    * [Windows](https://rubyinstaller.org/downloads/)
    * Mac & Linux [rbenv](https://github.com/rbenv/rbenv) and [RVM](http://rvm.io/)
4. OR a container engine compatible with Docker Compose

## Running locally with Ruby

1. Once Ruby is installed open a terminal and install bundler
    * `gem install bundler`
2. In the Ruby window, navigate to the root directory of the Jekyll site (`/docs`) and install Jekyll:
    * Run the command `bundle install`
    * This will install all gems currently listed in the `Gemfile`
3. Run Jekyll to serve your site locally
    * `bundle exec jekyll serve --livereload`
4. View your site at the address provided by Jekyll (by default, <http://localhost:4000>)
5. Any changes to the site files will rebuilt it in the Ruby/Jekyll terminal
    * As we are using _live reload_, the webpage should refresh automatically after it is rebuilt
6. To stop Jekyll, ctrl + c

## Running locally with a container engine 

1. On the root of the project, run the command: `docker compose up`
2. View your site at the address provided by Jekyll (by default, <http://localhost:4000>)
3. Any changes to the site files will rebuilt it in the Ruby/Jekyll terminal
    * As we are using _live reload_, the webpage should refresh automatically after it is rebuilt
4. To stop Jekyll, ctrl + c

## Additional notes

Tests with incremental builds (`jekyll serve --incremental` command option) did not show considerable build performance improvements, so it is not used.

## References

* [GitHub Pages - Locally with Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)
* https://jekyllrb.com/
    * [Configuration Options - Serve Command Options](https://jekyllrb.com/docs/configuration/options/#serve-command-options)