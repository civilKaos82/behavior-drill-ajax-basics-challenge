# Basic Ajax

## Learning Competencies

* Use AJAX actions to change views based on asynchronous data
* Implement asynchronous requests in a web application
* Enter into an existing code base and extend it

## Summary

You are given migrations, models, seed data, and controllers.  We're going to practice implementing the ajax portion only with the code that is already in place.

## Releases

### Quickstart

1.  `bundle install`
2.  `rake db:all`
3.  `shotgun config.ru`
4.  Navigate to `localhost:9393` and follow the instructions.

### Release 0:  Simple AJAX GET and POST that returns text

### Release 1:  Simple AJAX GET and POST that returns a partial

### Release 2:  Simple AJAX GET and POST that returns json

### Release 3:  Implementing RESTful Routes with partials

### Release 4:  Implementing RESTful Routes with JSON


## Things to think about

The following questions might help you get your bearings:

1. How do you intercept a form submission event using jQuery?
2. How can we prevent the default behavior of the event?
3. How do we do a generic AJAX call using jQuery?
4. How do we do a a shortcut AJAX GET or POST using jQuery?
5. What should we pass for the `url` argument? How about the `type` argument?
5. How do we pass data to the server when making an AJAX call?
6. When the server responds, what code gets run? How do we access the data that
   the server sends back?

If you cannot answer these questions, you'll have a tough time implementing
things. Take your time, use Google, and think it through!

## Resources

* [jQuery AJAX](http://api.jquery.com/jquery.ajax/)

